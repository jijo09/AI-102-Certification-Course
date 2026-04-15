import os
import glob
import re

def main():
    # 1. Read index.html to extract the sidebar HTML
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Use re.DOTALL to match across newlines
    sidebar_match = re.search(r'<aside class="sidebar">(.*?)</aside>', html, re.DOTALL)
    if not sidebar_match:
        print("Could not find sidebar in index.html")
        return
        
    sidebar_inner = sidebar_match.group(1)
    
    # In index.html, paths are relative to root. Examples:
    # href="index.html" -> href="${p}index.html"
    # href="part1-plan-manage/topics/... -> href="${p}part1-plan-manage/topics/...
    
    # We replace href="something" with href="${p}something"
    # Skip if it's href="#" or href starts with http
    def replace_href(m):
        raw_href = m.group(1)
        if raw_href == '#' or raw_href.startswith('http'):
            return f'href="{raw_href}"'
        else:
            return f'href="${{p}}{raw_href}"'
            
    # Use python formatting but watch out for curly braces
    # We will just inject it into common.js
    sidebar_inner_templated = re.sub(r'href="([^"]+)"', replace_href, sidebar_inner)
    
    # We need to strip the 'open' class from any sidebar group just in case it was hardcoded!
    sidebar_inner_templated = sidebar_inner_templated.replace('class="sidebar-group open"', 'class="sidebar-group"')
    sidebar_inner_templated = sidebar_inner_templated.replace("class='sidebar-group open'", 'class="sidebar-group"')
    
    # Remove active class from hardcoded items
    sidebar_inner_templated = sidebar_inner_templated.replace('class="sidebar-item active"', 'class="sidebar-item"')
    sidebar_inner_templated = sidebar_inner_templated.replace('sidebar-item sidebar-sub-item active', 'sidebar-item sidebar-sub-item')

    # Construct the Javascript code we want to append/inject into common.js
    js_code = f"""
const SidebarTemplate = (p) => `
<aside class="sidebar">
{sidebar_inner_templated}
</aside>
`;

SidebarManager.injectAndInit = function() {{
    const container = document.getElementById('app-sidebar');
    if (!container) return;
    
    const scripts = document.getElementsByTagName('script');
    let p = '';
    for (let i = 0; i < scripts.length; i++) {{
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('common.js')) {{
            p = src.replace('scripts/common.js', '');
            break;
        }}
    }}
    
    container.outerHTML = SidebarTemplate(p);
    
    // Immediately apply collapsed state to prevent FOUC jank
    try {{
      const state = JSON.parse(localStorage.getItem('ai102_settings') || '{{}}');
      if (state.sidebarCollapsed) {{
        document.body.classList.add('sidebar-collapsed');
        // Also update toggle button if it exists yet
        const toggle = document.querySelector('.sidebar-desktop-toggle');
        if (toggle) {{
          toggle.setAttribute('aria-label', 'Expand sidebar');
          toggle.title = 'Expand sidebar';
        }}
      }}
    }} catch (e) {{}}
}};

SidebarManager.injectAndInit();
"""

    # 2. Add js_code to common.js
    with open('scripts/common.js', 'r', encoding='utf-8') as f:
        common_js = f.read()
        
    if "SidebarTemplate" not in common_js:
        with open('scripts/common.js', 'w', encoding='utf-8') as f:
            f.write(common_js + "\n" + js_code)
            
    # 3. Process all html files
    count = 0
    for file_path in glob.glob('**/*.html', recursive=True):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        old_content = content
        
        # Regex to find <aside class="sidebar">...</aside> exactly
        content = re.sub(r'<aside class="sidebar">.*?</aside>', '<div id="app-sidebar"></div>', content, flags=re.DOTALL)
        
        # We need to make sure we also add a script to call SidebarManager.injectAndInit() BEFORE DOMContentLoaded!
        # Actually, if we just do it inside common.js directly upon script execution...
        # Let's add it right before the file ends:
        
        if content != old_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            
    print(f"Refactored {{count}} files.")

if __name__ == '__main__':
    main()

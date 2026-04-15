import re

def fix_nested_anchors():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Replace <a href="part..." class="part-card"> with <div onclick="..." class="part-card">
    html = re.sub(
        r'<a href="(part\d-[^"]+)" class="part-card"([^>]*)>', 
        r'<div onclick="window.location.assign(\'\1\')" class="part-card"\2 style="cursor: pointer;">', 
        html
    )

    # Replace the closing </a> for those cards. 
    # They are followed by either `        <!-- Part X -->` or `      </div><!-- /parts-grid -->`
    html = html.replace('        </a>\n\n        <!-- Part', '        </div>\n\n        <!-- Part')
    html = html.replace('        </a>\n\n      </div><!-- /parts-grid', '        </div>\n\n      </div><!-- /parts-grid')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    fix_nested_anchors()
    print("Fixed nested anchors in index.html")

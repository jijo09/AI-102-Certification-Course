/**
 * ServiceNow CSA Study Hub Central Data (Zurich Edition)
 * Consolidates flashcards and topic metadata for the Revision Center.
 */

const STUDY_DATA = {
  parts: {
    p1: {
      id: 'p1',
      title: 'Platform Overview & Navigation',
      color: '#10b981',
      icon: '⚙️',
      topics: {
        t1: { id: 't1', title: 'UI Navigation & Interface', icon: '🖥️' },
        t2: { id: 't2', title: 'Lists, Filters & Forms', icon: '📝' },
        t3: { id: 't3', title: 'Properties & Branding', icon: '🎨' },
        t4: { id: 't4', title: 'Mobile & Service Portal', icon: '📱' }
      }
    },
    p2: {
      id: 'p2',
      title: 'Instance Configuration',
      color: '#06b6d4',
      icon: '🔧',
      topics: {
        t1: { id: 't1', title: 'Users, Groups & Roles', icon: '👥' },
        t2: { id: 't2', title: 'Tables & System Dictionary', icon: '📂' },
        t3: { id: 't3', title: 'Security & Access Controls', icon: '🔒' }
      }
    },
    p3: {
      id: 'p3',
      title: 'Configuring Applications for Collaboration',
      color: '#f59e0b',
      icon: '📣',
      topics: {
        t1: { id: 't1', title: 'Notifications & Templates', icon: '📧' },
        t2: { id: 't2', title: 'Reporting & Dashboards', icon: '📊' },
        t3: { id: 't3', title: 'Knowledge Management', icon: '📚' },
        t4: { id: 't4', title: 'Service Catalog & Requests', icon: '🛒' }
      }
    },
    p4: {
      id: 'p4',
      title: 'Database Management & Security',
      color: '#3b82f6',
      icon: '💾',
      topics: {
        t1: { id: 't1', title: 'Schema & Import Sets', icon: '📥' },
        t2: { id: 't2', title: 'Relationships & CMDB', icon: '🕸️' },
        t3: { id: 't3', title: 'Access Control Rules (ACL)', icon: '🛡️' },
        t4: { id: 't4', title: 'Auditing, History & Archiving', icon: '🗄️' }
      }
    },
    p5: {
      id: 'p5',
      title: 'Data Migration & Integration',
      color: '#8b5cf6',
      icon: '✈️',
      topics: {
        t1: { id: 't1', title: 'System Update Sets', icon: '📦' },
        t2: { id: 't2', title: 'XML Imports & Exports', icon: '📄' },
        t3: { id: 't3', title: 'IntegrationHub & Spokes', icon: '🔌' }
      }
    },
    p6: {
      id: 'p6',
      title: 'Self-Service & Process Automation',
      color: '#ec4899',
      icon: '⚡',
      topics: {
        t1: { id: 't1', title: 'UI Policies & UI Actions', icon: '🔘' },
        t2: { id: 't2', title: 'Business Rules & Scripts', icon: '⚙️' },
        t3: { id: 't3', title: 'Client Scripts & UI Scripts', icon: '📜' },
        t4: { id: 't4', title: 'Flow Designer & Workflows', icon: '🌊' }
      }
    }
  },
  cards: [
    // ── PART 1: Platform Overview & Navigation ──────────────────────────
    { p:'p1', t:'t1', term:'Next Experience UI', def:'The modern ServiceNow interface characterized by a unified navigation header, deep dark mode support, and landing page dashboards.' },
    { p:'p1', t:'t1', term:'Banner Frame', def:'The top header bar in Next Experience containing navigation menus (All, Favorites, History, Admin), global search, and user profile preferences.' },
    { p:'p1', t:'t1', term:'Filter Navigator', def:'The text box at the top of the All navigation menu. Filters navigation modules dynamically. Typing "incident.list" opens incidents list, "incident.do" opens a new form.' },
    { p:'p1', t:'t1', term:'Application Menu', def:'A grouping of related modules in the navigation panel (e.g., "Incident" is an application menu containing "Create New" and "Open" modules).' },
    { p:'p1', t:'t1', term:'Module', def:'The individual navigation links within an Application Menu that load lists, forms, or custom pages (e.g., "Create New").' },
    { p:'p1', t:'t1', term:'Favorites Menu', def:'The star menu in the banner frame containing user-bookmarked forms, lists, reports, or modules for instant one-click access.' },
    { p:'p1', t:'t1', term:'History Menu', def:'The clock menu in the banner frame showing the last 30 transactions, forms, or modules visited by the active user.' },
    { p:'p1', t:'t1', term:'Global Search', def:'The search bar in the banner frame that returns matching results across multiple indexed tables, knowledge bases, and catalog items.' },
    { p:'p1', t:'t1', type:'tip', term:'Module Shortcuts', def:'Type "<table_name>.LIST" in the Filter Navigator to open the list view in a new window/tab, or "<table_name>.do" to open a fresh blank record form.' },

    { p:'p1', t:'t2', term:'List View', def:'A tabular display of multiple records from a database table, consisting of rows (records) and columns (fields).' },
    { p:'p1', t:'t2', term:'Breadcrumbs', def:'The hierarchical filter path displayed at the top of lists. Example: All > Active = true. Clicking elements modifies filter logic.' },
    { p:'p1', t:'t2', term:'List Filter', def:'A three-part conditional builder composed of Field, Operator, and Value used to restrict records displayed in a list.' },
    { p:'p1', t:'t2', term:'Form Layout', def:'A drag-and-drop slushbucket utility to change the layout, order, and column count of fields on a form for a specific view.' },
    { p:'p1', t:'t2', term:'Form Design', def:'A grid-based visual editor used to add fields, design multi-column sections, and define tabbed structures in a single drag-and-drop interface.' },
    { p:'p1', t:'t2', term:'Dot-Walking', def:'The process of drilling down into reference fields to display fields from related tables. Formatted in breadcrumbs as RelatedTable.FieldName.' },
    { p:'p1', t:'t2', term:'Personalize List', def:'The gear icon in list headers allowing individual users to choose which columns are visible in their personal view without affecting others.' },
    { p:'p1', t:'t2', term:'System View', def:'The default presentation layout of forms and lists applied to all users who do not have a personalized view or specific role override.' },
    { p:'p1', t:'t2', type:'tip', term:'Form Layout vs Form Design', def:'Use Form Layout to quickly modify view structures and add existing fields. Use Form Design for adding sections, managing labels, and structuring grids visually.' },

    { p:'p1', t:'t3', term:'Basic Configuration UI16', def:'The central branding page under System Properties used to upload the company logo, change primary banner colors, and define default page titles.' },
    { p:'p1', t:'t3', term:'System Properties', def:'The key-value pairs stored in the sys_properties table that control system-wide behavior, security settings, and global styling parameters.' },
    { p:'p1', t:'t3', term:'Theme (Next Experience)', def:'JSON-based style definitions configuring colors, typography, borders, and brand accents in the modern Unified Navigation framework.' },
    { p:'p1', t:'t3', term:'Logo Settings', def:'Global configurations uploaded in UI16 configuration that establish the graphic in the upper-left of the banner frame and browser favicon.' },
    { p:'p1', t:'t3', type:'tip', term:'Branding Priority', def:'Next Experience UI themes are controlled by CSS variables via UX Themes. The legacy UI16 "Basic Configuration" settings only apply if Next Experience is disabled.' },

    { p:'p1', t:'t4', term:'Service Portal', def:'A user-friendly, responsive self-service web interface built on AngularJS allowing end users to search knowledge bases, submit requests, and check statuses.' },
    { p:'p1', t:'t4', term:'ServiceNow Mobile Agent', def:'The mobile application designed specifically for fulfillers, administrators, and agents to manage tasks, work orders, and approvals offline.' },
    { p:'p1', t:'t4', term:'Now Mobile App', def:'The mobile application intended for general employees and end-users to request catalog services, read articles, and view company alerts.' },
    { p:'p1', t:'t4', term:'Portal Page', def:'The base structural layout of a Service Portal consisting of a container grid, rows, columns, and embedded dynamic widgets.' },
    { p:'p1', t:'t4', term:'Portal Widget', def:'Reusable, self-contained HTML/CSS/Angular templates that render interactive content (e.g., Search Bar, Catalog Categories) on portal pages.' },
    { p:'p1', t:'t4', type:'tip', term:'Mobile App Differences', def:' Fulfillers use the Mobile Agent app (offline tasks). Employees/End users use the Now Mobile app (self-service/catalog). Legacy Classic App is deprecated.' },

    // ── PART 2: Instance Configuration ──────────────────────────────────
    { p:'p2', t:'t1', term:'User Record', def:'An entry in the sys_user table representing an individual person within the system containing email, department, and locale settings.' },
    { p:'p2', t:'t1', term:'Group Record', def:'An entry in the sys_user_group table. A collection of users who share a common set of tasks, permissions, or fulfiller responsibilities.' },
    { p:'p2', t:'t1', term:'Role', def:'An entry in the sys_user_role table. A set of permissions assigned to users or groups to grant access to applications and tables.' },
    { p:'p2', t:'t1', term:'Impersonate User', def:'An administrator action allowing them to temporarily log in as another user to view the portal, forms, and security rules exactly as that user does.' },
    { p:'p2', t:'t1', term:'Inherited Role', def:'A role automatically granted to a user because they belong to a group that has the role, or because the role is nested within another assigned role.' },
    { p:'p2', t:'t1', term:'Admin Role', def:'The superuser role (admin) possessing complete, unrestricted access to configure tables, UI pages, and bypass most access control rules.' },
    { p:'p2', t:'t1', type:'tip', term:'Best Practice assignment', def:'Always assign roles to Groups, never directly to individual User records. Users then inherit the roles of the groups they are added to.' },

    { p:'p2', t:'t2', term:'Table', def:'A collection of database records. Standard tables include Task (task), Incident (incident), and User (sys_user).' },
    { p:'p2', t:'t2', term:'System Dictionary', def:'The sys_dictionary table containing definitional metadata for every table and field in the database, including types, lengths, and read-only flags.' },
    { p:'p2', t:'t2', term:'Reference Field', def:'A field type that points directly to a record on another table (e.g., Caller on the Incident table references the User table).' },
    { p:'p2', t:'t2', term:'Schema Map', def:'A graphical representation showing the parent-child inheritance relationships and reference linkages among database tables.' },
    { p:'p2', t:'t2', term:'Task Table', def:'The core base class table (task) containing shared fields (number, active, short_description) extended by Incident, Problem, and Change.' },
    { p:'p2', t:'t2', term:'Extend Table', def:'Creating a child table that inherits all fields, default security rules, and processes of the parent table (e.g., extending task for a custom app).' },
    { p:'p2', t:'t2', type:'tip', term:'sys_id', def:'A unique, 32-character hexadecimal string representing a record globally. Every single database entry has a unique sys_id in its sys_id field.' },

    { p:'p2', t:'t3', term:'High Security Settings', def:'An optional security layer providing granular control over file uploads, attachment limits, and forcing explicit ACL checking on all table transactions.' },
    { p:'p2', t:'t3', term:'Security Admin Role', def:'A specialized elevated privilege role required to create, delete, or modify Access Control Rules (ACLs) and manage High Security properties.' },
    { p:'p2', t:'t3', term:'Elevate Privilege', def:'The process of activating security_admin permissions temporarily during a session by clicking a checkbox in the user menu.' },
    { p:'p2', t:'t3', term:'ACL operation', def:'The action being validated on a record (e.g., read, write, create, delete, execute, edit_variables).' },
    { p:'p2', t:'t3', type:'tip', term:'Contextual Security', def:'Access is validated at two levels: Table level (e.g., incident) AND Field level (e.g., incident.caller). If the table-level check fails, all fields are blocked.' },

    // ── PART 3: Configuring Applications for Collaboration ──────────────
    { p:'p3', t:'t1', term:'Email Notification', def:'An automated communication generated by the system (stored in sysevent_email_action) sent to users based on database updates.' },
    { p:'p3', t:'t1', term:'Event Registry', def:'The central index (sysevent_register) that maps custom workflow events and scripts to the notification engine trigger actions.' },
    { p:'p3', t:'t1', term:'Email Template', def:'Reusable, formatted email layouts containing standard headers, signature structures, and layout structures for notifications.' },
    { p:'p3', t:'t1', term:'Notification Trigger', def:'Determined by three inputs: "When to send" (insert/update conditions), "Who will receive" (users/groups), and "What it will contain" (subject/body).' },
    { p:'p3', t:'t1', type:'tip', term:'gs.eventQueue()', def:'The JavaScript method used in business rules to trigger an event, passing: event name, target glide record, param1, and param2.' },

    { p:'p3', t:'t2', term:'Report Designer', def:'A multi-step graphical tool (Data, Type, Configure, Style) used to build visualizations of live ServiceNow table data.' },
    { p:'p3', t:'t2', term:'Dashboard', def:'A visual layout containing multiple reports, performance widgets, and interactive filters organized in tabbed sections.' },
    { p:'p3', t:'t2', term:'Report sharing', def:'Permissions defining who can view a report: Everyone, Groups and Users, or Me (private).' },
    { p:'p3', t:'t2', term:'Interactive Filter', def:'A dashboard widget that dynamically filters all reports on that tab based on a selected value (e.g., filter by Assigned Group).' },
    { p:'p3', t:'t2', type:'tip', term:'Report Types', def:'Common report types tested include Bar charts, Pie charts, Donut charts, Time Series, Lists, and Pivot Tables.' },

    { p:'p3', t:'t3', term:'Knowledge Base', def:'A container (kb_knowledge_base) for storing categorised, searchable help articles, troubleshooting guides, and policy documents.' },
    { p:'p3', t:'t3', term:'User Criteria', def:'A granular access control record defining which users can read ("Can Read") or create ("Can Contribute") articles in a Knowledge Base.' },
    { p:'p3', t:'t3', term:'Knowledge Category', def:'A hierarchical folder structure inside a Knowledge Base used to classify articles logically.' },
    { p:'p3', t:'t3', term:'Knowledge Workflow', def:'The publishing and retirement lifecycle of articles (e.g., Knowledge - Instant Publish, Knowledge - Approval Publish).' },
    { p:'p3', t:'t3', type:'tip', term:'KB Security', def:'Knowledge Base access is secured by User Criteria, NOT by standard roles or ACL rules. Always verify "Can Read" and "Can Contribute" allocations.' },

    { p:'p3', t:'t4', term:'Service Catalog', def:'A structured self-service portal containing multiple offerings, service requests, hardware, software, and dynamic forms.' },
    { p:'p3', t:'t4', term:'Record Producer', def:'A special catalog item that creates a standard task record (e.g., Incident, Change) directly from a user catalog submission.' },
    { p:'p3', t:'t4', term:'Catalog Variable', def:'An individual input field on a catalog item (e.g., Single Line Text, Reference, Select Box) that collects user data during ordering.' },
    { p:'p3', t:'t4', term:'Order Guide', def:'A catalog launcher that gathers user inputs to dynamically bundle multiple catalog items into a single unified checkout (e.g., New Hire onboarding).' },
    { p:'p3', t:'t4', term:'Request [REQ]', def:'The high-level shopping cart record representing the overall order checkout, containing total price and status.' },
    { p:'p3', t:'t4', term:'Requested Item [RITM]', def:'A specific catalog product or service ordered within the REQ. Each product generates its own RITM containing variable choices.' },
    { p:'p3', t:'t4', term:'Catalog Task [SCTASK]', def:'An individual fulfillment assignment assigned to groups to complete the request (e.g., "Install Software" or "Deliver Laptop").' },
    { p:'p3', t:'t4', type:'tip', term:'Variables Set', def:'A reusable container of catalog variables that can be defined once and added to multiple catalog items to enforce consistency.' },

    // ── PART 4: Database Management & Security ──────────────────────────
    { p:'p4', t:'t1', term:'Import Set Table', def:'A temporary staging table (extending sys_import_set_row) where imported raw external data is loaded before transformation.' },
    { p:'p4', t:'t1', term:'Transform Map', def:'A mapping record that establishes relationships and field assignments between an Import Set Table and a target production table.' },
    { p:'p4', t:'t1', term:'Coalesce', def:'A setting in transform maps declaring fields as unique keys. If a match is found on the coalesce key, the existing record is updated; otherwise, a new record is created.' },
    { p:'p4', t:'t1', term:'Data Source', def:'A configuration defining the origin of imported data (e.g., File via SFTP, REST endpoint, XML, Excel spreadsheet).' },
    { p:'p4', t:'t1', type:'tip', term:'No Coalesce Match', def:'If no Coalesce is selected, every import row will be inserted as a brand new record on the target table, risking major duplicates.' },

    { p:'p4', t:'t2', term:'CMDB', def:'Configuration Management Database. A series of tables storing Configuration Items (CIs) and their structural dependencies.' },
    { p:'p4', t:'t2', term:'Configuration Item (CI)', def:'Any physical or logical asset tracked in the CMDB (e.g., a Server, Database, Application Instance, Router).' },
    { p:'p4', t:'t2', term:'CI Class', def:'A table within the CMDB hierarchy representing a specific type of asset (e.g., cmdb_ci_win_server is the Windows Server class).' },
    { p:'p4', t:'t2', term:'Dependency Views', def:'An interactive graphical diagram showing the upstream and downstream operational dependencies of a Configuration Item.' },
    { p:'p4', t:'t2', type:'tip', term:'CI Relationship Table', def:'CI relationships are stored in the cmdb_rel_ci table, mapping Parent CI, Relationship Type, and Child CI.' },

    { p:'p4', t:'t3', term:'Access Control Rule (ACL)', def:'A security rule (sys_security_acl) validating if a user has permission to perform a specific action (CRUD) on a table or field.' },
    { p:'p4', t:'t3', term:'ACL Evaluation Order', def:'Evaluated first by Role, second by Conditional expression, third by JavaScript script. All three checks must pass to grant access.' },
    { p:'p4', t:'t3', term:'Wildcard [*] Rule', def:'A general fallback ACL. Table.* matches any field not explicitly defined by a specific field-level ACL.' },
    { p:'p4', t:'t3', term:'Row ACL', def:'A table-level security rule denoted as table_name.None. Controls access to the table as a whole.' },
    { p:'p4', t:'t3', type:'tip', term:'ACL Hierarchy', def:'To access a field, the user must pass the Table-level rule (e.g., task.None) AND the Field-level rule (e.g., task.description).' },

    { p:'p4', t:'t4', term:'Activity Stream', def:'A real-time journal feed displayed on forms containing updates, comments, and field changes history.' },
    { p:'p4', t:'t4', term:'sys_audit', def:'The system table that records every field modification, previous value, new value, and author. Auditing must be enabled per table.' },
    { p:'p4', t:'t4', term:'Data Archival Rule', def:'An automated rule that periodically moves stale, inactive records from production tables to archive tables (e.g., sys_archive) to improve speed.' },
    { p:'p4', t:'t4', type:'tip', term:'Auditing Performance', def:'Never attempt to query sys_audit via client scripts. It is a massive, system-critical index table. Use glide history queries instead.' },

    // ── PART 5: Data Migration & Integration ────────────────────────────
    { p:'p5', t:'t1', term:'Update Set', def:'A group of configuration changes that can be packaged, exported to XML, and moved to another instance (e.g., Dev to Test).' },
    { p:'p5', t:'t1', term:'Customer Update [sys_update_xml]', def:'The database table where the system automatically logs tracked customizations for the active Update Set.' },
    { p:'p5', t:'t1', term:'Local Update Set', def:'The update set currently being modified on the local instance. Changes are appended here as they occur.' },
    { p:'p5', t:'t1', term:'Update Set Process Flow', def:'Set to Complete → Retrieve on target instance → Preview on target → Resolve Conflicts → Commit.' },
    { p:'p5', t:'t1', type:'tip', term:'What is NOT tracked', def:'Update sets track configurations (Business Rules, Tables, Workflows). They do NOT track data (User records, Incidents, Tasks, Assets).' },

    { p:'p5', t:'t2', term:'XML Import', def:'A system utility used to transfer individual data records or system records directly between identical database versions without update sets.' },
    { p:'p5', t:'t2', term:'Export XML', def:'The form/list action to download a record complete with its sys_id and raw fields as an XML file to your local computer.' },
    { p:'p5', t:'t2', type:'tip', term:'XML sys_id Preservation', def:'Importing records via XML preserves their original sys_ids exactly, making it perfect for migrating users, catalog items, or group records.' },

    { p:'p5', t:'t3', term:'IntegrationHub', def:'ServiceNow core package providing pre-built API integrations and spokes to automate actions in external cloud applications.' },
    { p:'p5', t:'t3', term:'Spoke', def:'A scoped application containing a logical package of IntegrationHub actions to interface with a specific third-party app (e.g., Microsoft Teams spoke).' },
    { p:'p5', t:'t3', term:'REST Message', def:'An outbound HTTP configuration defining endpoint URLs, authentication headers, and methods (GET/POST) to call external APIs.' },
    { p:'p5', t:'t3', type:'tip', term:'IntegrationHub Tiers', def:'IntegrationHub is subscription-licensed in Standard, Professional, and Enterprise tiers depending on spoke usage volume.' },

    // ── PART 6: Self-Service & Process Automation ──────────────────────
    { p:'p6', t:'t1', term:'UI Policy', def:'A client-side rule that dynamically changes field characteristics on a form: Mandatory, Visible, or Read-Only based on conditions.' },
    { p:'p6', t:'t1', term:'UI Policy Action', def:'The specific field setting executed when a UI Policy condition is met (e.g., set short_description to mandatory=true).' },
    { p:'p6', t:'t1', term:'UI Action', def:'An interactive form button, list banner button, link, or context menu option that executes server or client JavaScript (e.g., "Submit", "Resolve").' },
    { p:'p6', t:'t1', type:'tip', term:'UI Policy client-only', def:'UI Policies run entirely in the browser client and do NOT protect data saved via APIs or import sets. They are strictly for form usability.' },

    { p:'p6', t:'t2', term:'Business Rule', def:'A server-side JavaScript block that runs when database records are queried, inserted, updated, or deleted.' },
    { p:'p6', t:'t2', term:'"Before" Business Rule', def:'Runs after user submits a form but BEFORE the data is committed to the database. Best for validating values or auto-populating fields.' },
    { p:'p6', t:'t2', term:'"After" Business Rule', def:'Runs AFTER records are successfully saved to the database. Best for updating related tables or calling external web webhooks.' },
    { p:'p6', t:'t2', term:'"Async" Business Rule', def:'Queues a background job to run AFTER the record is saved, without locking the user browser. Best for integrations and email triggers.' },
    { p:'p6', t:'t2', term:'"Display" Business Rule', def:'Runs before the form is sent to the client. Uses g_scratchpad to pass server values to Client Scripts.' },
    { p:'p6', t:'t2', term:'g_scratchpad', def:'A shared global JavaScript object used to pass variable data from a server-side Display Business Rule to client scripts.' },
    { p:'p6', t:'t2', type:'tip', term:'Never use current.update()', def:'Never call current.update() inside a Before or After Business Rule! It triggers an infinite recursion loop, crashing database threads.' },

    { p:'p6', t:'t3', term:'Client Script', def:'Browser-side JavaScript that executes in response to form events (onLoad, onChange, onSubmit, onCellEdit).' },
    { p:'p6', t:'t3', term:'g_form', def:'The global Client Script class providing methods to control form fields (e.g., g_form.getValue(), g_form.clearValue(), g_form.showFieldMsg()).' },
    { p:'p6', t:'t3', term:'g_user', def:'The global Client Script class providing information about the logged-in user (e.g., g_user.hasRole(), g_user.userID).' },
    { p:'p6', t:'t3', term:'UI Script', def:'A reusable library of client-side JavaScript that can be loaded in portal widgets or client scripts to share common functions.' },
    { p:'p6', t:'t3', type:'tip', term:'Avoid synchronous GlideRecord', def:'Never run "gr.query()" synchronously in a Client Script. It locks the browser UI thread. Use g_scratchpad or GlideAjax asynchronously instead.' },

    { p:'p6', t:'t4', term:'Flow Designer', def:'The modern codeless interface used to create process automation flows using trigger blocks, actions, and decision trees.' },
    { p:'p6', t:'t4', term:'Flow Trigger', def:'The event that launches a Flow Designer execution, such as record insertion (Created), schedule intervals (Daily), or REST payloads.' },
    { p:'p6', t:'t4', term:'Flow Action', def:'An individual step within a flow that performs a specific operational task (e.g., "Create Task", "Look Up Records", "Send Email").' },
    { p:'p6', t:'t4', term:'Subflow', def:'A reusable flow block designed to be called inside another parent Flow, accepting input variables and returning results.' },
    { p:'p6', t:'t4', type:'tip', term:'Workflow vs Flow Designer', def:'Legacy Workflow Editor is a graphical engine. Modern Flow Designer is the standard Zurich-recommended framework for all new automations.' }
  ],
  summaries: {
    p1_t1: [
      "The Next Experience UI is the modern standard landing interface. It features a unified navigation header with four main menus: All, Favorites, History, and Admin.",
      "The Filter Navigator at the top of the 'All' menu allows users to search modules. Typing specific codes like 'incident.list' will open incident tables in list view, and 'incident.do' will open a new blank incident form.",
      "Breadcrumbs are located under the title bar, displaying active filters in hierarchical sequence. Users can click any breadcrumb link to truncate or filter search queries dynamically.",
      "The Banner Frame contains global controls, user configurations, global search, and the impersonate key.",
      "[TRAP] Next Experience UI features cannot be branded using legacy UI16 Basic Configuration properties. Ensure you configure modern themes via UX Style and Theme records."
    ],
    p1_t2: [
      "A List displays records from a table in columns and rows. Users can customize their columns using the Gear icon ('Personalize List'), which changes the view strictly for that user.",
      "Form Design is a visual drag-and-drop panel that allows administrators to create forms, sections, and grids using columns. Form Layout uses a legacy dual-list slushbucket utility.",
      "Dot-walking allows access to fields on related tables through reference fields (e.g. from an Incident form, accessing the Caller's Department). In lists, it's identified by expand arrows.",
      "[TRAP] Form Layout and Form Design are independent. Modifying a form using Form Design will overwrite sections, but local column orders are stored differently. Use Form Design for structural sections."
    ],
    p1_t3: [
      "Basic Configuration UI16 lets administrators change simple instances like the banner logo, header color, and tab titles when Next Experience is deactivated.",
      "System Properties (sys_properties table) contain global variables and behaviors. Properties starting with 'glide.' control foundational Java engine performance.",
      "[TRAP] Changing properties in the sys_properties table applies instantly across the entire cluster, affecting all users. Always test property changes in sandbox environments first."
    ],
    p1_t4: [
      "Service Portal offers mobile-friendly responsive websites for end-users to search Knowledge Bases, submit Service Catalog requests, and view task updates.",
      "ServiceNow offers two primary native mobile applications: Mobile Agent (for fulfillers/agents to manage incidents, work tasks offline) and Now Mobile (for employees/end-users to access self-service).",
      "[TRAP] Do not confuse the Mobile Agent app with the Now Mobile app on the exam. Agents approve tasks and resolve records on Mobile Agent; employees request items on Now Mobile."
    ],
    p2_t1: [
      "Users are represented in the sys_user table. Groups are in sys_user_group. Roles are in sys_user_role.",
      "Impersonation allows administrators to log in as another user to view layouts and verify ACL security configurations without needing their passwords.",
      "[TRAP] Never assign roles directly to User records. Always assign roles to Groups, and add users to those groups to leverage Role Inheritance best practices."
    ],
    p2_t2: [
      "ServiceNow utilizes a relational database containing tables. The Task (task) table is the core base class table from which Incident, Problem, and Change inherit fields.",
      "The System Dictionary (sys_dictionary) defines every table, field type, length, dependency, and characteristics.",
      "[TRAP] Extending a parent table inherits all parent fields. You can override parent fields for the child table (e.g. Incident) using Dictionary Overrides without modifying the parent table."
    ],
    p2_t3: [
      "Access Control Lists (ACLs) secure tables and fields. The security_admin elevated role is mandatory to modify ACL rules.",
      "Security is evaluated contextually: first at the Table level (e.g., incident.None), and second at the Field level (e.g., incident.caller). If the table-level check fails, the user is completely blocked.",
      "[TRAP] Elevating to security_admin does not persist across logins. You must elevate your session every time you log in to manage security rules."
    ],
    p3_t1: [
      "Notifications are created on the sysevent_email_action table. They are composed of three parts: 'When to send' (insert/update conditions), 'Who will receive' (users/groups), and 'What it will contain'.",
      "Event Registry (sysevent_register) links business rule triggers (gs.eventQueue) to the email execution queue.",
      "[TRAP] Always ensure the target recipient has email notifications enabled in their user preferences, or the system will skip sending the message even if the trigger conditions are met."
    ],
    p3_t2: [
      "Reports are built using Report Designer. Sharing options dictate visibility: Me (private), Everyone, or Groups and Users.",
      "Dashboards organize reports and gauges on tabbed pages. Interactive Filters allow users to filter all dashboard reports dynamically.",
      "[TRAP] Report sharing does not bypass database security. If a user has access to a report but lacks the ACL roles to read the underlying table, the report will render empty for them."
    ],
    p3_t3: [
      "Knowledge Bases store articles. Access is configured via User Criteria records ('Can Read' / 'Can Contribute'), not standard roles or ACL rules.",
      "Knowledge Workflows control article publishing (e.g. Instant Publish vs Approval Publish).",
      "[TRAP] User Criteria is hierarchical. If a user is denied by 'Cannot Read', they are blocked even if they match a 'Can Read' rule."
    ],
    p3_t4: [
      "Service Catalog requests follow a three-tier hierarchy: REQ (Request shopping cart) -> RITM (Requested Item ordered product) -> SCTASK (Catalog Task assigned to fulfillers).",
      "Order Guides gather initial parameters and use rule bases to bundle multiple related catalog items into a single order checklist.",
      "Record Producers look like catalog items but create standard task records (e.g., Incident, Change) on target production tables.",
      "[TRAP] Catalog Variables sets are reusable blocks of fields. If you modify a variable inside a Variable Set, it changes across all catalog items using that set."
    ],
    p4_t1: [
      "Import Sets load external data into temporary Import Set Tables (staging tables).",
      "Transform Maps map staging fields to target production fields. Coalescing designates fields as unique identifiers to determine whether to insert a new record or update an existing one.",
      "[TRAP] If you do not select a coalesce field, ServiceNow will insert every staging row as a new record, resulting in severe data duplication."
    ],
    p4_t2: [
      "The Configuration Management Database (CMDB) tracks Configuration Items (CIs) and relationships (cmdb_rel_ci table).",
      "Dependency Views display live visual flows of upstream and downstream infrastructure impacts.",
      "[TRAP] Configuration Items are not static assets. Change Management records must link to CIs to document risk, impact, and track outages."
    ],
    p4_t3: [
      "Access Control Rules (ACLs) are evaluated in a specific order: Role check first, conditional statement second, script third. All three must evaluate to true.",
      "Table-level ACLs end in '.None', while Field-level ACLs specify the field (e.g. 'incident.short_description'). The wildcard '*' matches fields without explicit ACLs.",
      "[TRAP] A field-level ACL cannot grant access unless a table-level ACL also permits it. Ensure you have a valid '.None' rule for the table."
    ],
    p4_t4: [
      "Activity streams display historical comments and journal entries. The sys_audit table indexes all modified records.",
      "Data Archival Rules move historical records to sys_archive tables to sustain query speeds.",
      "[TRAP] Never run queries against sys_audit from client scripts or workflows. This table is extremely large and querying it directly causes severe instance latency."
    ],
    p5_t1: [
      "Update Sets record configuration changes. They do not record data changes. Examples of tracked changes: Tables, Business Rules, Client Scripts, Workflows.",
      "Update Set lifecycle: Progress -> Complete -> Export/Retrieve -> Preview -> Resolve Conflicts -> Commit.",
      "[TRAP] New user records, incidents, catalog request instances, and organization schedules are data, and are NEVER captured in update sets. Migrate these via XML export/import instead."
    ],
    p5_t2: [
      "XML Imports/Exports bypass Update Sets and are perfect for migrating individual records (users, catalogs, groups).",
      "[TRAP] Exporting to XML preserves the sys_id of the record exactly. This is critical when moving records that are referenced by other system scripts."
    ],
    p5_t3: [
      "IntegrationHub coordinates connections with third-party web APIs using Spokes.",
      "Outbound REST Messages define HTTP configurations and payloads (GET, POST, PUT, DELETE).",
      "[TRAP] IntegrationHub requires a separate subscription tier depending on the specific spokes utilized. Ensure your instances have appropriate licenses active."
    ],
    p6_t1: [
      "UI Policies enforce Mandatory, Visible, and Read-Only characteristics on form fields in the browser client.",
      "UI Actions represent interactive buttons, links, or context menus that execute client-side or server-side scripts.",
      "[TRAP] UI Policies are client-side only. They are not security rules. Users can bypass UI policies using APIs or list edits. Always enforce database security using server-side ACLs."
    ],
    p6_t2: [
      "Business Rules execute server-side JavaScript in response to database queries, inserts, updates, or deletes.",
      "Execution times: Before (runs before database save), After (runs after database save), Async (runs in background thread), Display (runs before form load).",
      "[TRAP] Never call current.update() within a 'Before' or 'After' Business Rule. This creates a recursive loop that will crash the thread and freeze the database."
    ],
    p6_t3: [
      "Client Scripts execute browser-side JavaScript in response to form events: onLoad, onChange, onSubmit, and onCellEdit.",
      "g_form manages form interactions, and g_user contains information about the active user's roles and permissions.",
      "[TRAP] Avoid synchronous GlideRecord queries (gr.query()) in Client Scripts, as they freeze the user's browser page. Use GlideAjax with asynchronous callbacks instead."
    ],
    p6_t4: [
      "Flow Designer is the modern ServiceNow standard for process automation, replacing legacy Workflow engines with visual, codeless trigger-action sequences.",
      "Flows consist of Triggers (database, schedule, or API inputs) and Actions (operational steps).",
      "[TRAP] When migrating legacy configurations, note that Flow Designer flows execute as the System User by default, unlike legacy workflows which ran in the context of the triggering user."
    ]
  }
};

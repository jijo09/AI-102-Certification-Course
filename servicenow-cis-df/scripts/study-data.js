/**
 * ServiceNow CIS-DF Study Hub — Central Flashcard Data
 * Certified Implementation Specialist – Data Foundations
 */

const STUDY_DATA = {
  parts: {
    p1: {
      id: 'p1', label: '1',
      title: 'ServiceNow Data Model',
      color: '#0891b2', icon: '🏗️',
      topics: {
        t1: { id: 't1', title: 'Table Types & Hierarchy',        icon: '🗂️' },
        t2: { id: 't2', title: 'Field Types & Dictionary',       icon: '🔤' },
        t3: { id: 't3', title: 'Relationships & Database Views', icon: '🔗' },
        t4: { id: 't4', title: 'Schema Design Patterns',         icon: '📐' }
      }
    },
    p2: {
      id: 'p2', label: '2',
      title: 'Import Sets, SGC & Ingestion',
      color: '#0284c7', icon: '📥',
      topics: {
        t1: { id: 't1', title: 'Import Sets Architecture',          icon: '📦' },
        t2: { id: 't2', title: 'Transform Maps & Field Maps',       icon: '🔄' },
        t3: { id: 't3', title: 'Data Sources & Scheduled Imports',  icon: '🌐' },
        t4: { id: 't4', title: 'Coalesce, Behaviors & Scripts',     icon: '⚙️' },
        t5: { id: 't5', title: 'Service Graph Connectors',          icon: '☁️' },
        t6: { id: 't6', title: 'Non-Discoverable CIs',              icon: '🖨️' }
      }
    },
    p3d: {
      id: 'p3d', label: '3 — Discovery',
      title: 'Discovery & Service Mapping',
      color: '#0369a1', icon: '🔭',
      topics: {
        t1: { id: 't1', title: 'Discovery Architecture',            icon: '🏗️' },
        t2: { id: 't2', title: 'MID Server',                        icon: '🖥️' },
        t3: { id: 't3', title: 'Patterns, Probes & Credentials',    icon: '🔑' },
        t4: { id: 't4', title: 'Service Mapping',                   icon: '🗺️' },
        t5: { id: 't5', title: 'Agent Client Collector',            icon: '📡' }
      }
    },
    p4i: {
      id: 'p4i', label: '4 — IRE',
      title: 'IRE — Identity & Reconciliation Engine',
      color: '#7c3aed', icon: '⚙️',
      topics: {
        t1: { id: 't1', title: 'IRE Architecture',               icon: '🏗️' },
        t2: { id: 't2', title: 'Identification Rules',           icon: '🔍' },
        t3: { id: 't3', title: 'Reconciliation Rules',           icon: '⚖️' },
        t4: { id: 't4', title: 'Deduplication & Remediation',    icon: '🧹' }
      }
    },
    p4: {
      id: 'p4', label: '5 — CMDB',
      title: 'CMDB, CSDM & Service Modeling',
      color: '#155e75', icon: '🕸️',
      topics: {
        t1: { id: 't1', title: 'CMDB Architecture & CI Classes',       icon: '🏛️' },
        t2: { id: 't2', title: 'CI Relationships & Dependency',        icon: '🌐' },
        t3: { id: 't3', title: 'Discovery & IRE',                      icon: '🔍' },
        t4: { id: 't4', title: 'CMDB Health & Governance',             icon: '❤️' },
        t5: { id: 't5', title: 'CI Class Manager & Dynamic Groups',    icon: '🗂️' },
        t6: { id: 't6', title: 'CSDM Framework (4 Domains)',           icon: '🏗️' },
        t7: { id: 't7', title: 'CSDM Service Modeling',                icon: '🔗' },
        t8: { id: 't8', title: 'CSDM CI Alignment',                    icon: '🎯' }
      }
    },
    p3: {
      id: 'p3', label: '6 — Governance',
      title: 'Governance & Data Quality',
      color: '#0e7490', icon: '🏛️',
      topics: {
        t1: { id: 't1', title: 'Data Policies & Dict Overrides',      icon: '📋' },
        t2: { id: 't2', title: 'Field Validation & Choice Lists',      icon: '✔️' },
        t3: { id: 't3', title: 'Ref Qualifiers & Field Security',      icon: '🔐' },
        t4: { id: 't4', title: 'Data Certification & Lifecycle',       icon: '🏅' },
        t5: { id: 't5', title: 'CMDB Governance Framework',           icon: '⚖️' },
        t6: { id: 't6', title: 'CMDB Health KPIs & Data Manager',     icon: '📊' }
      }
    },
    p5: {
      id: 'p5', label: '7 — Reporting',
      title: 'Reporting, Analytics & CMDB Workspace',
      color: '#0f766e', icon: '📊',
      topics: {
        t1: { id: 't1', title: 'Report Types & Builder',              icon: '📈' },
        t2: { id: 't2', title: 'Database Views for Reporting',        icon: '👁️' },
        t3: { id: 't3', title: 'Dashboards & Scheduling',             icon: '📅' },
        t4: { id: 't4', title: 'Performance Analytics',               icon: '⚡' },
        t5: { id: 't5', title: 'CMDB Workspace & NLQ',               icon: '🔭' },
        t6: { id: 't6', title: 'Foundation Dashboards & CMDB 360',   icon: '🌐' }
      }
    },
    p6: {
      id: 'p6', label: '8 — Integration',
      title: 'Integration & Advanced',
      color: '#134e4a', icon: '🔌',
      topics: {
        t1: { id: 't1', title: 'REST API & Table API',            icon: '🌐' },
        t2: { id: 't2', title: 'IntegrationHub & Data Flows',    icon: '🔌' },
        t3: { id: 't3', title: 'Archiving, Purging & Retention', icon: '🗄️' },
        t4: { id: 't4', title: 'Instance Data Health',           icon: '💚' }
      }
    }
  },

  cards: [
    // ── PART 1: ServiceNow Data Model ──────────────────────────────────────

    { p:'p1', t:'t1', term:'Table Hierarchy', def:'All ServiceNow tables follow object-oriented inheritance. Child tables inherit every field and ACL from parent tables. Incident extends Task; Windows Server extends Computer extends cmdb_ci_hardware.' },
    { p:'p1', t:'t1', term:'Base Table', def:'Top-level tables that all others extend: task (work items), cmdb_ci (config items), sys_user (people). Base tables define the shared fields every child inherits.' },
    { p:'p1', t:'t1', term:'Extending a Table', def:'Creating a child table that inherits all parent fields. Done via Table form or Studio. Child records physically store data in both parent and child table rows, joined by sys_id.' },
    { p:'p1', t:'t1', term:'Abstract Table', def:'A table that exists in the database for inheritance but never stores direct records. Example: sysapproval_approver. Used purely as a base class to share fields and behavior.' },
    { p:'p1', t:'t1', term:'sys_db_object', def:'The metadata table defining every table: name, label, extends (parent), number_ref, and access controls. One row per table in the instance.' },
    { p:'p1', t:'t1', term:'Physical vs Virtual Table', def:'Physical tables store rows in the actual database. Virtual tables have no DB storage — data comes from a script (Script Include) at runtime. Examples: sys_history_list is virtual.' },
    { p:'p1', t:'t1', term:'Global vs Scoped Tables', def:'Global tables are accessible everywhere. Scoped app tables use x_[vendor]_[app]_ prefix and are isolated to their application scope unless explicitly shared.' },
    { p:'p1', t:'t1', type:'tip', term:'Extend vs Create Decision', def:'Extend an existing table when your records need the parent\'s workflow, SLAs, approvals, or activity stream. Create a new standalone table only for entities with no relationship to existing work types.' },
    { p:'p1', t:'t1', term:'Custom Table Prefix', def:'Custom fields added to any table get u_ prefix (u_custom_field). Fields in scoped apps get x_[vendor]_[app]_ prefix. Both survive instance upgrades.' },

    { p:'p1', t:'t2', term:'sys_dictionary', def:'The central metadata table with one row per field per table. Defines field type, max_length, mandatory, read_only, default_value, and all other attributes. The source of truth for all field definitions.' },
    { p:'p1', t:'t2', term:'String Field', def:'Text stored as VARCHAR in the database. Default max_length is 40 chars. Configurable up to 4000 chars. Larger text uses the "Long" type which stores in a separate CLOB-style table.' },
    { p:'p1', t:'t2', term:'Reference Field', def:'Stores the sys_id (32-char GUID) of a record in another table. Displays the referenced record\'s display value in the UI. Enables dot-walking to access fields on the related record.' },
    { p:'p1', t:'t2', term:'GlideList Field', def:'Stores a comma-separated string of sys_ids from another table. Displays as a multi-select widget. No DB foreign key constraint — weak referential integrity. Different from M2M tables.' },
    { p:'p1', t:'t2', term:'Choice Field', def:'Pulls options from sys_choice table using name=table and element=field as the lookup key. The DB stores the value; the UI displays the label. Value and label can differ.' },
    { p:'p1', t:'t2', term:'Journal Field', def:'Append-only text field (Work notes, Additional comments). New entries stored in sys_journal_field table, not in the main record. Cannot be queried like normal fields.' },
    { p:'p1', t:'t2', term:'Calculated Field', def:'Value derived from a formula or Groovy/JS script. Can be stored in DB (persistent) or computed at runtime (virtual). Stored = faster queries; Virtual = always current.' },
    { p:'p1', t:'t2', term:'Boolean Field', def:'True/false values. Stored as 1/0 in the database. Displays as a checkbox in the UI. Use true/false in GlideRecord queries: gr.addQuery("active", true).' },
    { p:'p1', t:'t2', type:'tip', term:'GlideList vs M2M', def:'GlideList is a string field containing comma-separated sys_ids — simple but no referential integrity. M2M is a proper join table with two Reference fields — supports ACLs, additional fields, and proper relational integrity.' },

    { p:'p1', t:'t3', term:'Reference Relationship', def:'One-to-one relationship via Reference field. Field stores target record\'s sys_id. Display value shown in UI. Deletion of target does not automatically null the reference.' },
    { p:'p1', t:'t3', term:'M2M Table', def:'Many-to-many relationship via a junction table with two Reference fields. Example: sys_user_grmember joins Users to Groups. Supports ACLs, additional attributes, and proper queries on either side.' },
    { p:'p1', t:'t3', term:'Database View', def:'Virtual read-only join of two or more tables. Defined in sys_db_view. Appears as a table in report builder. Cannot be written to, and no Business Rules fire on it.' },
    { p:'p1', t:'t3', term:'Inner Join (DB View)', def:'Returns only records where the JOIN condition matches on both tables. Excludes records that have no matching row on either side. Use when both sides must have data.' },
    { p:'p1', t:'t3', term:'Left Outer Join (DB View)', def:'Returns ALL records from the left (primary) table, with NULLs for right-side fields where no match exists. Use when you need all primary records even if no related data.' },
    { p:'p1', t:'t3', term:'Dot-Walking', def:'Traversing reference fields in queries, scripts, and conditions: caller_id.department.name accesses name on the Department table via caller_id reference. Each dot = one extra DB query.' },
    { p:'p1', t:'t3', type:'tip', term:'DB View Limitation', def:'Database views are read-only. You can build reports on them but cannot create forms, submit data, or trigger Business Rules. Use views for reporting across tables, not for data entry.' },

    { p:'p1', t:'t4', term:'Schema Map', def:'Visual graph showing table inheritance hierarchy and reference relationships. Accessed from Table form > Schema Map button or Studio. Essential tool for understanding existing data model before designing new tables.' },
    { p:'p1', t:'t4', term:'sys_id', def:'32-character hexadecimal GUID. Unique globally across all ServiceNow instances. Auto-generated on INSERT. Never changes. Every record on every table has exactly one sys_id.' },
    { p:'p1', t:'t4', term:'sys_class_name', def:'Field present on all tables using single-table inheritance (like CMDB). Stores the actual class/table name of each record. Critical for polymorphic queries across the cmdb_ci hierarchy.' },
    { p:'p1', t:'t4', term:'Coalesce Field (Concept)', def:'A field designated as the upsert match key in Import Set transforms. If an existing record has the same coalesced field value → UPDATE. No match → INSERT. Covered in depth in Part 2.' },
    { p:'p1', t:'t4', term:'Table Naming Conventions', def:'Custom fields: u_ prefix. Scoped app fields: x_[vendor]_[app]_ prefix. Base tables: no prefix (task, incident). All custom field names survive upgrades; baseline names are protected.' },
    { p:'p1', t:'t4', type:'tip', term:'Extend vs Flat Decision', def:'Extend task when: needs approval/SLA/activity stream workflow. Extend cmdb_ci when: it\'s a configuration item. Create flat table when: entity is purely standalone data (no approvals, no task lifecycle needed).' },

    // ── PART 2: Import Sets, SGC & Ingestion ──────────────────────────────

    { p:'p2', t:'t1', term:'Import Set', def:'Staging mechanism in ServiceNow. Raw data loads INTO a staging table (u_import_*) first; only after transformation does it write to the real target table. Prevents corrupt data from reaching production records.' },
    { p:'p2', t:'t1', term:'Staging Table', def:'Auto-created table named u_import_[data source name]. Holds raw imported rows. Has state field (pending, transformed, error, ignored) and one row per source record per import run.' },
    { p:'p2', t:'t1', term:'sys_import_set', def:'The parent run record for each import job. Tracks source, transform map used, run date, total rows, error count, and completion status.' },
    { p:'p2', t:'t1', term:'Import Set Row', def:'Each individual record in the staging table. Has a state field: pending (not yet transformed), transformed (successfully written to target), error (failed during transform), ignored (skipped by script).' },
    { p:'p2', t:'t1', term:'Import Lifecycle', def:'Three phases: 1) Load — raw data pushed into staging table. 2) Transform — staging rows mapped and written to target table. 3) Cleanup — optional deletion of transformed staging rows.' },
    { p:'p2', t:'t1', term:'Table Rotation', def:'When an import staging table grows too large, it is rotated: the existing table is archived and a fresh table is created. Happens automatically on sys_import_set tables based on size threshold.' },
    { p:'p2', t:'t1', type:'tip', term:'Staging is NOT the Target', def:'The Import Set staging table is NEVER the final destination. Transforms move data from staging to the real target (e.g., incident, sys_user). Forgetting this is the #1 import architecture mistake.' },

    { p:'p2', t:'t2', term:'Transform Map', def:'Defines the mapping from a staging table to a target table. Stored in sys_transform_map. One transform map = one source→target pair. Multiple transform maps can target the same table from different sources.' },
    { p:'p2', t:'t2', term:'Field Map', def:'Individual mapping entry in a transform map (sys_transform_entry). Maps one source field to one target field. Can include a run script for custom logic using the answer variable.' },
    { p:'p2', t:'t2', term:'Auto-Map', def:'ServiceNow automatically matches source fields to target fields by exact name. Non-matched fields get default values or are ignored. Run auto-map then manually configure remaining fields.' },
    { p:'p2', t:'t2', term:'Choice Action', def:'Per-field-map setting for when source value doesn\'t match a valid choice/reference: ignore (skip field), reject (skip entire row), replace_empty (update only if target is blank), replace_always (always overwrite).' },
    { p:'p2', t:'t2', term:'Run Script on Field Map', def:'Checkbox enabling custom JavaScript on a field map. Uses answer variable to set target field value. Source accessible via source.field_name. Takes priority over direct mapping.' },
    { p:'p2', t:'t2', term:'run_business_rules Flag', def:'Flag on the transform map. If unchecked, Business Rules do NOT fire when transform writes to target table. Useful for bulk loads where you don\'t want side effects.' },
    { p:'p2', t:'t2', type:'tip', term:'Multiple Transform Maps', def:'Multiple transform maps can target the same table from different sources. When triggered together, run ORDER matters. Configure order via Run Order field on sys_transform_transformer.' },

    { p:'p2', t:'t3', term:'Data Source', def:'Configures WHERE data comes from (sys_data_source). Types: File (CSV/Excel/XML/JSON), FTP/SFTP, JDBC, LDAP, REST (HTTP), SOAP. Each type has different connection and authentication requirements.' },
    { p:'p2', t:'t3', term:'Attachment Type', def:'File uploaded directly to the Data Source record as an attachment. Transform reads from the attachment. Use for one-off imports or when pushing a file to ServiceNow manually.' },
    { p:'p2', t:'t3', term:'URL Type', def:'ServiceNow fetches file from a remote URL on each scheduled run. More automated than attachment. Supports FTP/HTTP/HTTPS. Credentials stored on the Data Source record.' },
    { p:'p2', t:'t3', term:'JDBC Data Source', def:'Connects directly to an external relational database (MySQL, Oracle, SQL Server). Requires MID Server for private network access. Specify JDBC URL, driver class, and query or table name.' },
    { p:'p2', t:'t3', term:'LDAP Data Source', def:'Reads directory entries from LDAP or Active Directory. Requires MID Server if directory is on private network. Used for user provisioning imports.' },
    { p:'p2', t:'t3', term:'MID Server (Import)', def:'Java agent deployed on-premise. Required for JDBC (external DB), LDAP, and FTP sources behind a firewall. Acts as proxy between ServiceNow instance and the private network resource.' },
    { p:'p2', t:'t3', term:'Scheduled Import', def:'Record tying a Data Source + Transform Map to a cron schedule. Runs automatically, creates an Import Set Run record, and emails configured recipients on completion.' },
    { p:'p2', t:'t3', type:'tip', term:'REST Data Source Auth', def:'REST data sources use HTTP Method records for authentication (Basic, OAuth2, API Key). The method record stores credentials separately from the Data Source — allows reuse across different imports.' },

    { p:'p2', t:'t4', term:'Coalesce', def:'Designates a field as the upsert key. If the coalesced field value matches an existing target record → UPDATE that record. No match found → INSERT new record. Replaces manual check-before-insert logic.' },
    { p:'p2', t:'t4', term:'Multiple Coalesce Fields', def:'When multiple fields are marked coalesce on a transform map, ALL must match for an update to occur (AND logic). Useful for composite keys, e.g., matching on both email AND department.' },
    { p:'p2', t:'t4', term:'import_behavior: insert_or_update', def:'Default behavior. Uses coalesce result: UPDATE if match found, INSERT if no match. The standard choice for most data loads.' },
    { p:'p2', t:'t4', term:'import_behavior: insert', def:'Always creates a new record regardless of coalesce matches. No de-duplication. Use for event logs or append-only scenarios where duplicates are expected.' },
    { p:'p2', t:'t4', term:'import_behavior: update', def:'Only updates existing records. If coalesce finds no match, the row is SKIPPED. Use when you\'re confident all records already exist and you only want to update fields.' },
    { p:'p2', t:'t4', term:'import_behavior: skip', def:'Does nothing with the row. Logged as skipped but no record created or updated. Useful for rows that match a filter condition you want to exclude.' },
    { p:'p2', t:'t4', term:'import_behavior: error', def:'Fails the row and logs it as an error. Increments error count on the Import Set Run record. Use for data validation — reject rows that don\'t meet requirements.' },
    { p:'p2', t:'t4', term:'onBefore Transform Script', def:'Runs per-row BEFORE field mapping. Use to manipulate source data (clean strings, set derived fields). Variables: source (staging row GlideRecord), log, error, ignore.' },
    { p:'p2', t:'t4', term:'onAfter Transform Script', def:'Runs per-row AFTER field mapping. Use to read/write the target record. Variables: source, target (target table GlideRecord), action (insert/update/skip/error), log.' },
    { p:'p2', t:'t4', term:'onStart / onComplete Scripts', def:'onStart runs ONCE before any rows are processed (setup). onComplete runs ONCE after all rows finish (summary/cleanup). Neither has access to individual row data.' },
    { p:'p2', t:'t4', type:'tip', term:'error vs ignore in Scripts', def:'Setting error=true FAILS the row and creates an error log entry. Setting ignore=true SILENTLY skips the row with no error logged. Use error for bad data you need to track; use ignore for intentional exclusions.' },

    // P2 T5 — Service Graph Connectors
    { p:'p2', t:'t5', term:'Service Graph Connector (SGC)', def:'Pre-built integration that pulls CI data from cloud and SaaS APIs (AWS, Azure, VMware vCenter) and pushes it through IRE into the CMDB. No MID Server required for public cloud APIs.' },
    { p:'p2', t:'t5', term:'SGC vs Discovery', def:'SGC = API-based for cloud/SaaS CIs with no network scanning. Discovery = probes + network scanning for on-prem/private network CIs. Both feed data through IRE into CMDB.' },
    { p:'p2', t:'t5', term:'SGC source label', def:'Sets discovery_source = "Service Graph" (or connector-specific label) on every CI attribute populated by SGC. IRE Reconciliation Rules use this label to apply correct source priority.' },
    { p:'p2', t:'t5', term:'SGC data flow', def:'External cloud/SaaS API → SGC connector (Flow Action) runs on schedule → payload passed to IRE API (createOrUpdateCI) → Identification + Reconciliation → CI created/updated in CMDB.' },
    { p:'p2', t:'t5', term:'SGC CI scope', def:'Cloud resources (EC2, Azure VMs, GCP Compute), SaaS objects (Salesforce orgs, ServiceNow instances), virtualization inventory (vCenter VMs). Any API-accessible external system.' },
    { p:'p2', t:'t5', term:'SGC vs Table API', def:'SGC routes all CI data through IRE API (identification + reconciliation). Table API direct inserts bypass IRE entirely — causes duplicate CIs and wrong source attribution. Always use IRE API for CI data.' },
    { p:'p2', t:'t5', type:'tip', term:'SGC requires license', def:'Service Graph Connectors require IntegrationHub license plus the specific connector license (e.g., Cloud Provisioning & Governance for AWS/Azure). Not included in base platform.' },

    // P2 T6 — Non-Discoverable CIs
    { p:'p2', t:'t6', term:'Non-Discoverable CI', def:'Any CI that cannot be found by automated Discovery or SGC — physical printers, legacy mainframes, handover assets, leased equipment, and anything without SSH/WMI/SNMP/API access.' },
    { p:'p2', t:'t6', term:'Import Sets for non-discoverable', def:'Primary mechanism for bulk loading non-discoverable CI data. Export from vendor systems (spreadsheet, CSV), load into staging table, transform into CMDB with IRE API or Transform Map targeting CMDB.' },
    { p:'p2', t:'t6', term:'Manual entry', def:'Non-discoverable CIs can be created directly in the CMDB form view (cmdb_ci child class). Suitable for one-off additions; no automated validation. Prone to naming inconsistencies at scale.' },
    { p:'p2', t:'t6', term:'discovery_source = null', def:'Non-discoverable CIs typically have no discovery_source value since no automated tool owns their data. This means no reconciliation source priority — any subsequent import can overwrite fields.' },
    { p:'p2', t:'t6', term:'Staleness risk', def:'Without automated refresh, non-discoverable CIs degrade in accuracy over time. CMDB Health flags them as stale after the configured threshold (typically 30-90 days without update).' },
    { p:'p2', t:'t6', term:'SGC vs non-discoverable', def:'SGC handles cloud/SaaS CIs that Discovery cannot REACH due to network boundaries (public cloud APIs). Non-discoverable = devices no automation tool can reach AT ALL (no API, no network access).' },
    { p:'p2', t:'t6', type:'tip', term:'Data Certification for non-discoverable', def:'Non-discoverable CIs benefit most from regular Data Certification workflows because no automated tool will detect or correct stale data. Schedule quarterly certifications for these CI classes.' },

    // ── PART 3: Governance & Data Quality ─────────────────────────────────

    { p:'p3', t:'t1', term:'Data Policy', def:'Server-side rule enforcing field mandatory/read-only (sys_data_policy2). Unlike UI Policies, Data Policies enforce on BOTH the UI and REST API calls. Cannot be bypassed by programmatic access.' },
    { p:'p3', t:'t1', term:'Data Policy vs UI Policy', def:'UI Policy: client-side JavaScript, only affects form UI, bypassable via REST/GlideRecord. Data Policy: server-side enforcement, applies to UI + REST + imports. Use Data Policy for true data integrity.' },
    { p:'p3', t:'t1', term:'Data Policy Condition', def:'Filter expression on the Data Policy determining which records it applies to. Example: apply mandatory caller_id only when state=In Progress, not when state=New.' },
    { p:'p3', t:'t1', term:'Make Mandatory (Data Policy)', def:'Field attribute set via Data Policy requiring the field to have a value before a record can be saved. Enforced server-side on every save operation regardless of access method.' },
    { p:'p3', t:'t1', term:'Dictionary Override', def:'Changes a field\'s attributes (mandatory, read_only, default_value, max_length) for a SPECIFIC child table without altering the parent table definition (sys_dictionary_override).' },
    { p:'p3', t:'t1', term:'Dictionary Override Use Case', def:'Make a field mandatory on Incident table but not on all Task table children. Create a Dictionary Override on the incident table for that field — only Incident records are affected.' },
    { p:'p3', t:'t1', type:'tip', term:'Override Limitation', def:'Dictionary Overrides only work on INHERITED fields — fields the child table gets from its parent. You cannot create an override for a field defined directly on the same table. Use the Dictionary entry instead.' },

    { p:'p3', t:'t2', term:'sys_choice Table', def:'Stores all choice list options: name (table), element (field), value (stored in DB), label (shown in UI), sequence (display order). One row per option per field per table.' },
    { p:'p3', t:'t2', term:'Choice Value vs Label', def:'Value = what is stored in the database and used in queries. Label = what the user sees in the UI dropdown. They can be completely different strings. Always query by value, never by label.' },
    { p:'p3', t:'t2', term:'Dependent Field', def:'Choice list filtered based on another field\'s value. Configured via the Field Dependency widget on the form. Example: Sub-category choices filtered by the selected Category value.' },
    { p:'p3', t:'t2', term:'Regex Validation', def:'Pattern stored in sys_validator table and applied to a field via its dictionary attribute. Validated server-side on save. Example: validate phone number format before allowing save.' },
    { p:'p3', t:'t2', term:'Choice Action (Transform)', def:'Import transform setting for choice/reference field mismatches. ignore: keep existing value; reject: skip entire row; replace_empty: write only if target field is blank; replace_always: always overwrite.' },
    { p:'p3', t:'t2', term:'Reference Qualifier', def:'Restricts which records appear in a reference field\'s lookup picker. Stored on the sys_dictionary row for the Reference field. Can be static (encoded query) or dynamic (script).' },
    { p:'p3', t:'t2', type:'tip', term:'Choice Inheritance', def:'Child tables inherit parent table choice lists unless overridden. You can add choices to a child table only — they appear in addition to parent choices for that table.' },

    { p:'p3', t:'t3', term:'Static Reference Qualifier', def:'An encoded query string applied to the reference field picker. Evaluated once. Example: active=true^role=admin. All users see the same filtered set of records.' },
    { p:'p3', t:'t3', term:'Dynamic Reference Qualifier', def:'JavaScript function executed per-record to build the reference qualifier. More flexible — can filter based on current record values, but runs client-side and has performance cost per lookup.' },
    { p:'p3', t:'t3', term:'Field-Level ACL', def:'Access Control Rule targeting a specific field: type=field, object=table.field (e.g., incident.caller_id). Controls read and write access to that individual field independently of the table-level ACL.' },
    { p:'p3', t:'t3', term:'Read Field ACL Failure', def:'If a field-level read ACL fails, the field appears BLANK in the UI. No error message is shown. The field is simply invisible/empty to the user. The record still loads.' },
    { p:'p3', t:'t3', term:'Write Field ACL Failure', def:'If a field-level write ACL fails, the field appears READ-ONLY on the form. The user can see it but cannot edit it. The record can still be saved (with that field unchanged).' },
    { p:'p3', t:'t3', term:'Encrypted Field', def:'Type sys_encrypted_text. Value stored AES-256 encrypted in the database. Decrypted only when rendered for authorized users. Cannot be searched with standard list filters. Protect sensitive data like API keys.' },
    { p:'p3', t:'t3', type:'tip', term:'Table AND Field ACL Both Required', def:'For a field to be accessible, BOTH the table-level ACL (e.g., incident read) AND the field-level ACL (e.g., incident.caller_id read) must pass. Failing either blocks access.' },

    { p:'p3', t:'t4', term:'Data Certification', def:'A workflow process for human verification that CI or record data is accurate and current. Creates structured certification tasks assigned to data owners for review.' },
    { p:'p3', t:'t4', term:'Certification Definition', def:'Rule defining what "certified" means for a specific table: which records to certify, which fields to verify, who is the certifier, and how often to recertify.' },
    { p:'p3', t:'t4', term:'Certification Task', def:'Work item assigned to a data owner to review specific records and confirm their accuracy. Certification tasks appear in the assigned user\'s task list and can be approved or rejected.' },
    { p:'p3', t:'t4', term:'Data Quality Score', def:'Aggregate metric combining certification status, field completeness, and compliance rate for a table or CI class. Displayed in CMDB Health dashboard for CI data.' },
    { p:'p3', t:'t4', term:'Record Staleness', def:'Flag indicating a CI hasn\'t been refreshed by Discovery within a configured threshold. Stale CIs reduce CMDB Health scores and indicate the data may be outdated.' },
    { p:'p3', t:'t4', term:'sys_data_validation_rule', def:'Defines automated validation logic for data quality checks on a specific table. Rules run on schedule and flag records that don\'t meet defined criteria.' },
    { p:'p3', t:'t4', type:'tip', term:'Certification ≠ Access Control', def:'Data Certification is a human WORKFLOW for confirming data accuracy — it does not enforce access or prevent editing. It\'s a quality assurance process, not a security control.' },

    // P3 T5 — CMDB Governance Framework
    { p:'p3', t:'t5', term:'CMDB Governance Framework', def:'Policies, processes, and role assignments ensuring CI data remains accurate, complete, and trusted over time. Answers: who owns CIs, how often data is refreshed, what fields are mandatory, and who approves schema changes.' },
    { p:'p3', t:'t5', term:'CMDB Data Steward', def:'Role responsible for defining and enforcing CI data standards for a specific class or domain. Approves new CI classes, mandatory field lists, naming conventions, and identification rule changes.' },
    { p:'p3', t:'t5', term:'CI Owner', def:'Individual accountable for the accuracy of a specific CI record or group of CIs. Receives Data Certification tasks and responds to CMDB Health remediation work items.' },
    { p:'p3', t:'t5', term:'CMDB Governance Board', def:'Cross-functional group (IT, business, security) that approves changes to CMDB policies, CI class structures, data ownership assignments, and identification rules. Prevents uncontrolled schema drift.' },
    { p:'p3', t:'t5', term:'CMDB Change Governance', def:'Formal process requiring approval before adding/removing CI classes, modifying identification rules, or changing reconciliation priorities. Protects CMDB integrity from ad-hoc changes.' },
    { p:'p3', t:'t5', term:'Governance policy example', def:'"All Server CIs must have serial_number populated within 30 days of creation." Enforced via CMDB Health completeness rules targeting the Server class with serial_number as a required field.' },
    { p:'p3', t:'t5', type:'tip', term:'Governance before tools', def:'Even perfect Discovery produces poor CMDB quality without governance. Define CI ownership, mandatory fields, and staleness thresholds BEFORE enabling Discovery — governance drives tool configuration, not the other way around.' },

    // P3 T6 — CMDB Health KPIs & Data Manager
    { p:'p3', t:'t6', term:'CMDB Data Manager', def:'Central application aggregating CMDB Health scores, managing certification schedules, assigning remediation tasks to CI owners. Found in CMDB > Data Manager. Primary governance operations console.' },
    { p:'p3', t:'t6', term:'Health KPI definition', def:'Measurable, time-tracked data quality metric per CI class. Key KPIs: % CIs with serial_number populated, % stale CIs by class, % duplicate-free CIs, certification completion rate.' },
    { p:'p3', t:'t6', term:'Completeness KPI', def:'Percentage of required fields populated per CI class. Configured per-class in CMDB Health rules. A class at 40% completeness has majority of CIs missing critical fields — requires data enrichment effort.' },
    { p:'p3', t:'t6', term:'Staleness KPI', def:'Percentage of CIs not refreshed within configured threshold period. Discovery auto-refreshes on schedule; non-discoverable CIs require manual updates. High staleness = degrading data accuracy.' },
    { p:'p3', t:'t6', term:'Certification completion rate', def:'Percentage of scheduled certification tasks completed on time by CI owners. Low rate indicates CI owners are not reviewing data, allowing quality to degrade unnoticed.' },
    { p:'p3', t:'t6', term:'Remediation task (Data Manager)', def:'Auto-generated work item from CMDB Health, assigned to CI owner. Specifies which CI, which field is missing or incorrect, and what corrective action is needed.' },
    { p:'p3', t:'t6', type:'tip', term:'Data Manager for governance meetings', def:'Data Manager workspace provides one-stop view of health scores, pending certifications, overdue tasks, and per-class KPI trends. Bring this to governance board meetings instead of exporting reports manually.' },

    // ── PART 4: CMDB, CSDM & Service Modeling ────────────────────────────

    { p:'p4', t:'t1', term:'CMDB', def:'Configuration Management Database. ServiceNow\'s single source of truth for all IT infrastructure components. Every managed device, application, service, and relationship lives here.' },
    { p:'p4', t:'t1', term:'cmdb_ci', def:'The base class for ALL Configuration Items. Every CI in ServiceNow — whether a server, application, network device, or service — extends this table. Defines core CI fields shared by everything.' },
    { p:'p4', t:'t1', term:'CI (Configuration Item)', def:'Any component managed in the CMDB: physical hardware, virtual machines, software applications, network equipment, cloud resources, or business services.' },
    { p:'p4', t:'t1', term:'sys_class_name (CMDB)', def:'Field on every CI storing the actual class name. Critical for polymorphic CMDB queries across cmdb_ci — allows filtering "only servers" or "only applications" without knowing which exact child table.' },
    { p:'p4', t:'t1', term:'Class Manager', def:'Tool for viewing and managing the CI class hierarchy. Create new CI classes, set parent classes, and configure class-specific attributes. Found in CMDB > Class Manager in navigation.' },
    { p:'p4', t:'t1', term:'CI Class Hierarchy Example', def:'cmdb_ci → cmdb_ci_hardware → cmdb_ci_computer → cmdb_ci_win_server. Each level adds more specific fields. A Windows Server record IS a Computer IS Hardware IS a CI.' },
    { p:'p4', t:'t1', type:'tip', term:'Single Table for All CIs', def:'All CIs store in the cmdb_ci table family using ServiceNow\'s table extension model. There is NO separate physical table per class. sys_class_name discriminates between classes, not table names.' },

    { p:'p4', t:'t2', term:'cmdb_rel_ci', def:'The table storing relationships between CIs. Three key fields: parent (CI on one side), type (relationship type), child (CI on other side). Every CI-to-CI connection is a row here.' },
    { p:'p4', t:'t2', term:'cmdb_rel_type', def:'Defines relationship type names in bidirectional format: parent_descriptor::child_descriptor. Example: "Hosted on::Runs on" — the parent is Hosted on the child, and the child Runs on the parent.' },
    { p:'p4', t:'t2', term:'Bidirectional Relationship Label', def:'"Depends on::Used by" means: the parent CI Depends on the child CI, and the child CI is Used by the parent CI. The format is always Parent label::Child label — never forget the direction.' },
    { p:'p4', t:'t2', term:'Dependency Map', def:'Visual graph showing all upstream and downstream CIs connected to a given CI. Used for impact analysis: "If this server fails, what else breaks?" Accessed from CI form > Dependency Views.' },
    { p:'p4', t:'t2', term:'Service Map', def:'Shows CIs in context of a specific business service. Illustrates which infrastructure components support a service. Used in Service Mapping module (requires separate plugin).' },
    { p:'p4', t:'t2', term:'Affected CIs (Incident)', def:'When an incident impacts a CI, ServiceNow traverses cmdb_rel_ci to automatically populate Affected CIs. Uses the CI relationship tree to calculate blast radius.' },
    { p:'p4', t:'t2', type:'tip', term:'Relationship Direction Matters', def:'"Depends on::Used by": Server A Depends on Router B means Router B is USED BY Server A. Not reversible. Getting relationship direction wrong breaks impact analysis and service maps.' },

    { p:'p4', t:'t3', term:'Discovery', def:'Automated ITOM process that scans the network, identifies IT components, and pushes CI data into the CMDB. Eliminates manual CI entry for infrastructure. Requires MID Server in private network environments.' },
    { p:'p4', t:'t3', term:'MID Server (Discovery)', def:'Java agent deployed on the local network. Executes probes against network-accessible systems on behalf of the ServiceNow instance. Required for any device behind a firewall.' },
    { p:'p4', t:'t3', term:'Probe', def:'Script sent from ServiceNow to the MID Server to collect data from a target system. Types: WMI (Windows), SSH (Linux/Unix), SNMP (network devices), VMware, Cloud APIs.' },
    { p:'p4', t:'t3', term:'Sensor', def:'Script running on the ServiceNow instance that parses probe output and maps collected data to CI fields. Translates raw probe data into structured ServiceNow field values.' },
    { p:'p4', t:'t3', term:'IRE (Identification & Reconciliation Engine)', def:'The engine that decides what to do with incoming CI data. Identification: is this CI already in CMDB? Reconciliation: which data source wins when multiple sources disagree on field values?' },
    { p:'p4', t:'t3', term:'Identification Rule', def:'Criteria in cmdb_identifier_entry used by IRE to match an incoming CI to an existing CMDB record. Example: match Windows Servers by host_name + os_version. Prevents duplicates.' },
    { p:'p4', t:'t3', term:'Reconciliation Rule', def:'Priority order for data sources on each field. When Discovery AND a CMDB import both provide a value for the same field, reconciliation rules determine which source wins.' },
    { p:'p4', t:'t3', type:'tip', term:'IRE vs cmdb_dedupe', def:'IRE is the modern replacement for the legacy cmdb_dedupe tool. IRE runs on ALL CI insert/update operations (not just Discovery) and provides finer-grained control over identification and precedence.' },

    { p:'p4', t:'t4', term:'CMDB Health Dashboard', def:'Real-time scoring of CMDB data quality. Broken down by CI class. Shows completeness, compliance, and correctness scores. Found in CMDB > CMDB Health in navigation.' },
    { p:'p4', t:'t4', term:'Completeness (Health)', def:'Percentage of required fields populated for each CI record in a class. Measured against class-specific completeness rules. Low completeness = missing data (serial numbers, IPs, etc.).' },
    { p:'p4', t:'t4', term:'Compliance (Health)', def:'Percentage of CI records adhering to class definition rules. Example: all Windows Server CIs should have an OS version field populated. Compliance measures rule adherence.' },
    { p:'p4', t:'t4', term:'Correctness (Health)', def:'Accuracy of CI data. Considers staleness (not recently refreshed), duplicates (IRE didn\'t merge), and reconciliation conflicts. The hardest metric to improve.' },
    { p:'p4', t:'t4', term:'3 C\'s of CMDB Health', def:'Completeness + Compliance + Correctness. Each CI class is scored on all three independently. A single class with poor scores can pull down overall CMDB health significantly.' },
    { p:'p4', t:'t4', term:'CMDB Remediation Task', def:'Auto-generated work item for data owners to fix specific CMDB health issues. Contains which CI, which field, and what the expected value or condition should be.' },
    { p:'p4', t:'t4', term:'CSDM', def:'Common Service Data Model. ServiceNow\'s recommended framework for organizing services, applications, and infrastructure in a standardized way. Not enforced by default — an architecture best-practice.' },
    { p:'p4', t:'t4', type:'tip', term:'Per-Class Health Score', def:'CMDB Health is measured per CI class. A class with 1,000 server CIs all missing serial numbers will show 0% completeness for that class and drag down the overall score. Fix class-by-class.' },

    // P4 T5 — CI Class Manager & Dynamic Groups
    { p:'p4', t:'t5', term:'CI Class Manager', def:'No-code interface for browsing, creating, and configuring CI classes in the CMDB hierarchy. Alternative to navigating sys_db_object directly. Access via CMDB > CI Class Manager.' },
    { p:'p4', t:'t5', term:'CI Class Manager capabilities', def:'Create new CI subclasses, set parent class, define mandatory attributes per class, configure class-specific CMDB Health completeness rules, manage identification rules, and set related items.' },
    { p:'p4', t:'t5', term:'Dynamic CI Group', def:'A CI Group whose membership is defined by a filter query (attribute-based or relationship-based) that re-evaluates automatically as CI data changes. Membership always reflects current CI state.' },
    { p:'p4', t:'t5', term:'Static CI Group', def:'A CI Group with an explicit, manually-maintained list of CI sys_ids. Membership does not change unless an admin updates the list. Better for stable, well-defined sets.' },
    { p:'p4', t:'t5', term:'CI Group use cases', def:'Target group for Discovery schedule refresh, scope CMDB Health dashboard to specific CI set, provide blast-radius input for change management, define groups for data certification campaigns.' },
    { p:'p4', t:'t5', term:'Related Items widget', def:'In CI Class Manager, provides drag-and-drop interface for configuring which CI relationship types appear on the form for each CI class. Controls what related CIs are visible in the record.' },
    { p:'p4', t:'t5', type:'tip', term:'Dynamic groups for Discovery', def:'Schedule Discovery against a Dynamic CI Group (query: os=Windows AND location=DataCenter1). New CIs matching the query are automatically included in the next Discovery run — no manual list maintenance.' },

    // P4 T6 — CSDM Framework (4 Domains)
    { p:'p4', t:'t6', term:'CSDM definition', def:'Common Service Data Model — ServiceNow\'s prescriptive framework organizing IT and business data into four linked domains, enabling end-to-end tracing from business outcome down to infrastructure CI.' },
    { p:'p4', t:'t6', term:'Four CSDM domains', def:'Foundation → Designed → Operated → Managed. Data flows from most-abstract (business reference data) to most-concrete (CIs/infrastructure). Each layer references the one above it.' },
    { p:'p4', t:'t6', term:'Foundation Data Layer', def:'Master reference data — Business Units, Companies, Locations. Every other CSDM domain references Foundation data. Must be populated first before building service models.' },
    { p:'p4', t:'t6', term:'Designed Landscape', def:'What IT plans to offer — Service Offerings and Business Applications. Represents the intended/designed state of services. Owned by business stakeholders and architects.' },
    { p:'p4', t:'t6', term:'Operated Landscape', def:'What is actually running — Application Services and Technical Services. Populated by Service Mapping from actual runtime topology. Represents live operational state.' },
    { p:'p4', t:'t6', term:'Managed Landscape', def:'The infrastructure physically managed in CMDB — CIs: servers, networks, storage, cloud resources. Links upward to Operated Landscape services to show which infrastructure supports which services.' },
    { p:'p4', t:'t6', type:'tip', term:'CSDM is not enforced by default', def:'CSDM is a reference architecture, not an automatic platform feature. Adoption requires deliberate configuration of CI-to-service relationships and class alignment. Plan CSDM adoption in phases.' },

    // P4 T7 — CSDM Service Modeling
    { p:'p4', t:'t7', term:'Business Application', def:'CSDM entity representing a deployed application (SAP, Salesforce, HR Portal). Stored in cmdb_ci_appl. Owned by business stakeholders. Links to Application Services below and Service Offerings above.' },
    { p:'p4', t:'t7', term:'Application Service', def:'Infrastructure dependency map auto-discovered by Service Mapping. Stored in cmdb_ci_service_auto. Contains all CIs and their relationships supporting one Business Application. Continuously updated.' },
    { p:'p4', t:'t7', term:'Technical Service', def:'IT-delivered infrastructure service (Email Service, Network Service, DNS). Links technical infrastructure to the business outcomes it enables. Can be manually defined or populated by discovery.' },
    { p:'p4', t:'t7', term:'Service Offering', def:'Catalog-facing definition of what is offered to users — with SLAs, pricing, and support terms. Maps to Business Applications in CSDM portfolio layer. Drives the Service Catalog.' },
    { p:'p4', t:'t7', term:'"Consumed By" relationship', def:'Key CSDM relationship linking a CI upward to the Application Service or Business Application that depends on it. Enables impact analysis: "If this server fails, which business app is affected?"' },
    { p:'p4', t:'t7', term:'Service Portfolio Management', def:'CSDM Business Applications map directly to the Service Portfolio — linking operational data to strategic business planning and IT-to-business alignment reporting.' },
    { p:'p4', t:'t7', type:'tip', term:'Application Service vs Service Offering', def:'Application Service = the infrastructure dependency map (technical, auto-populated by Service Mapping). Service Offering = the business-facing catalog item. Linked but distinct CSDM concepts — do not confuse them.' },

    // P4 T8 — CSDM CI Alignment
    { p:'p4', t:'t8', term:'CI class alignment', def:'Process of mapping existing CI classes to the correct CSDM domain layer. Determines which CIs populate Foundation data, which represent Designed/Operated services, and which are Managed infrastructure.' },
    { p:'p4', t:'t8', term:'cmdb_ci_appl', def:'CI class for Business Applications in CSDM. Stores the application entity with business owner, business criticality, lifecycle state, and portfolio linkage. Sits in the Designed Landscape.' },
    { p:'p4', t:'t8', term:'cmdb_ci_service_auto', def:'Application Service class auto-populated by Service Mapping. Contains all discovered infrastructure supporting one business service with full CI relationship data. Sits in the Operated Landscape.' },
    { p:'p4', t:'t8', term:'CSDM validation', def:'Verifying that CIs have correct relationships up the chain: Server CI → Application Service → Business Application. Gaps in this chain mean the CMDB cannot trace infrastructure impact to business outcomes.' },
    { p:'p4', t:'t8', term:'Phased CSDM adoption', def:'Recommended order: 1) Foundation Data (locations, companies), 2) Designed (business apps), 3) Operated (services via Service Mapping), 4) Managed (full CI-to-service relationship mapping).' },
    { p:'p4', t:'t8', term:'Non-CSDM CIs', def:'CIs that don\'t naturally fit CSDM structure (IoT sensors, facilities equipment, legacy systems). Managed in CMDB but may not link into the service model hierarchy. Document exceptions in governance framework.' },
    { p:'p4', t:'t8', type:'tip', term:'CSDM alignment is the goal', def:'"CSDM compliant" means your CI data enables end-to-end tracing from a business outcome down to specific infrastructure. This requires deliberate relationship configuration — it does not happen automatically.' },

    // ── PART 5: Reporting, Analytics & CMDB Workspace ─────────────────────

    { p:'p5', t:'t1', term:'List Report', def:'Tabular display of individual records with sortable columns. Best for: reviewing raw data, exporting records, spot-checking specific entries. No aggregation — one row = one record.' },
    { p:'p5', t:'t1', term:'Bar/Column Report', def:'Compares values across categories using vertical (column) or horizontal (bar) bars. Supports grouping (side-by-side bars) and stacking. Aggregation: count, sum, average, min, max.' },
    { p:'p5', t:'t1', term:'Pie/Donut Report', def:'Shows part-of-whole proportions. Best for: visualizing distribution by category. Limit to 10-15 slices max for readability. The donut variant shows a value in the center.' },
    { p:'p5', t:'t1', term:'Line Report', def:'Trend over time. REQUIRES a Date or DateTime field to use as the time axis. Cannot trend on a string "year" field. Best for: showing how a metric changes over time.' },
    { p:'p5', t:'t1', term:'Gauge Report', def:'Shows a single metric value compared to a target. Visual speedometer or dial. Best for: KPI dashboards and quick "are we on track?" status views.' },
    { p:'p5', t:'t1', term:'Heat Map Report', def:'Two-dimensional grid showing intensity by color. Requires two grouping fields and a value field. Best for: showing patterns across two dimensions (e.g., priority × assignment group by count).' },
    { p:'p5', t:'t1', term:'Pivot Table Report', def:'Cross-tab analysis with row headers, column headers, and cell values. Multi-level grouping. Best for: comparing metrics across two dimensions in a spreadsheet-like view.' },
    { p:'p5', t:'t1', term:'Report Condition', def:'Encoded query applied to the source table before data is aggregated. Same syntax as list view filters. Determines WHICH records are included in the report.' },
    { p:'p5', t:'t1', type:'tip', term:'Line Report Requires Date Field', def:'Line reports must have an actual Date/DateTime field to plot trends. Using a text field like "Year: 2025" will NOT work. ServiceNow needs a true date type to generate time-series bins.' },

    { p:'p5', t:'t2', term:'Database View (Reporting)', def:'Virtual read-only join of two or more tables specifically for cross-table reporting. Defined in sys_db_view. Appears as a selectable table in the report builder alongside real tables.' },
    { p:'p5', t:'t2', term:'View Primary Table', def:'The left-most table in a DB view join. When using LEFT OUTER JOIN, all records from this table appear in results even if no matching records exist in joined tables.' },
    { p:'p5', t:'t2', term:'View Inner Join', def:'Only returns rows where the join condition matches on BOTH tables. Records with no match on either side are excluded. Use when you only want records that exist on both sides.' },
    { p:'p5', t:'t2', term:'View Left Outer Join', def:'Returns ALL records from primary table regardless of match. Right-side fields are NULL where no match exists. Use when you need all primary records even without related data.' },
    { p:'p5', t:'t2', term:'DB View Limitation', def:'Database views are read-only. No forms, no writing, no Business Rules, no field-level ACLs on view columns. Use only for reporting. Also: views can be slow on large tables without proper indexing.' },
    { p:'p5', t:'t2', type:'tip', term:'When to Use DB View vs Standard Report', def:'Need to report data from TWO separate tables in the same report (e.g., Incident + Task fields)? Use a Database View. Single-table reporting? Use a standard report with conditions. Views add complexity — only when necessary.' },

    { p:'p5', t:'t3', term:'Dashboard', def:'Container of widgets (reports, numbers, gauges) organized in rows and columns. Supports multiple tabs. Can be shared to groups/roles or made public. Accessible from All > Dashboards.' },
    { p:'p5', t:'t3', term:'Interactive Filter', def:'Cross-widget filter widget on a dashboard that applies the same condition to ALL compatible reports on the same dashboard simultaneously. All reports must share the same source table.' },
    { p:'p5', t:'t3', term:'Dashboard Sharing', def:'Dashboards can be shared to specific users, groups, or roles. "Public" makes it viewable to anyone with instance access. Owner controls edit permissions separately from view permissions.' },
    { p:'p5', t:'t3', term:'Scheduled Report', def:'sys_report_schedule record configuring automatic email delivery of a report. Specifies which report, email recipients, frequency (daily/weekly/monthly), and format (PDF/Excel/CSV).' },
    { p:'p5', t:'t3', term:'Report Subscription', def:'Allows individual users to self-subscribe to receive scheduled email delivery of a specific report. Admins enable subscriptions; users manage their own subscriptions from the report.' },
    { p:'p5', t:'t3', type:'tip', term:'Interactive Filter Scope', def:'Interactive Filters only apply to reports on the SAME dashboard that use the SAME source table. A filter on "Incident" table won\'t affect a "Change Request" report widget, even on the same dashboard.' },

    { p:'p5', t:'t4', term:'Performance Analytics vs Reports', def:'Reports = point-in-time snapshot of current data. PA = historical trend tracked over time. PA requires data collection to run regularly before trends appear. PA cannot retroactively generate history.' },
    { p:'p5', t:'t4', term:'PA Indicator', def:'Defines what is being measured. Automated indicators use a query to count/sum records at each collection interval. Manual indicators require humans to enter values. Stored as pa_indicators records.' },
    { p:'p5', t:'t4', term:'PA Score', def:'The collected value for an indicator at a specific point in time. Stored historically in pa_scores. Trend charts are built by connecting scores across collection periods.' },
    { p:'p5', t:'t4', term:'PA Breakdown', def:'A dimension for slicing indicator data. Example: break the "Open Incidents" indicator down by Assignment Group or Priority. Stores separate scores per breakdown element.' },
    { p:'p5', t:'t4', term:'PA Target', def:'Goal value for an indicator. When the score meets the target, the widget shows green. Below target triggers yellow or red based on threshold configuration.' },
    { p:'p5', t:'t4', term:'Analytics Hub', def:'Main Performance Analytics UI in ServiceNow. Replaces the older Performance Analytics homepage. Shows indicators, trends, breakdowns, and allows drill-down into underlying records.' },
    { p:'p5', t:'t4', type:'tip', term:'PA Needs Time to Build History', def:'A fresh PA indicator with no historical data shows no trend. Data collection jobs must run repeatedly over days/weeks before meaningful trends appear. Deploy PA indicators early — not just before exams.' },

    // P5 T5 — CMDB Workspace & NLQ
    { p:'p5', t:'t5', term:'CMDB Workspace', def:'Modern ServiceNow UI for CMDB management. Provides CI search, health summary widgets, relationship visualization (Explorer), and Natural Language Query. Access via CMDB > Workspace.' },
    { p:'p5', t:'t5', term:'NLQ (Natural Language Query)', def:'Ask CMDB questions in plain English — "Show me all Windows servers in Building A" → ServiceNow translates to GlideRecord query and returns matching CIs. Available in CMDB Workspace search bar.' },
    { p:'p5', t:'t5', term:'NLQ limitations', def:'NLQ understands CI attributes and classes. Does not replace scripted queries for complex multi-table joins or deep relationship traversal. Ambiguous attribute names may produce incorrect results.' },
    { p:'p5', t:'t5', term:'Explorer view', def:'Visual CI relationship graph in CMDB Workspace. Shows CIs and their relationships as interactive nodes and edges. Click a node to expand its relationships. Replaces the older BSM Map.' },
    { p:'p5', t:'t5', term:'CI detail pane (Workspace)', def:'Clicking a CI in Explorer shows all attributes, related relationships, open changes, incidents, and CMDB Health score in a single side panel without leaving the visualization.' },
    { p:'p5', t:'t5', term:'CMDB Workspace health view', def:'Per-CI-class health scorecard accessible within Workspace — shows completeness, staleness, correctness trends without navigating to the separate legacy CMDB Health dashboard.' },
    { p:'p5', t:'t5', type:'tip', term:'NLQ is AI-assisted, not authoritative', def:'Verify NLQ-generated results against direct GlideRecord query output for critical reports. NLQ may misinterpret ambiguous attribute names or produce subtly wrong filters that look correct.' },

    // P5 T6 — Foundation Dashboards & CMDB 360
    { p:'p5', t:'t6', term:'CMDB 360', def:'Holistic single-CI view aggregating all attributes, relationships, CMDB Health score, change history, open incidents, open tasks, and pending certifications in one comprehensive panel.' },
    { p:'p5', t:'t6', term:'Foundation Dashboard', def:'CMDB health at-a-glance — top CI classes ranked by health score, staleness gauge, certification completion status, and duplicate CI count. Primary governance monitoring tool.' },
    { p:'p5', t:'t6', term:'Per-class health widgets', def:'Foundation Dashboard shows health scores for every CI class, ranked worst to best. Allows instant identification of which class requires immediate attention without drilling into details.' },
    { p:'p5', t:'t6', term:'Duplicate CI count (Dashboard)', def:'Foundation Dashboard shows total duplicate CIs currently flagged by IRE. High count signals a loose Identification Rule or integrations bypassing IRE via Table API.' },
    { p:'p5', t:'t6', term:'CMDB reporting (built-in)', def:'Built-in reports: CI count by class, relationship coverage %, discovery_source distribution, staleness by location. Available in CMDB > Reports. No custom report builder needed for standard metrics.' },
    { p:'p5', t:'t6', term:'Scheduled Health Jobs', def:'Background jobs that periodically recalculate CMDB Health scores. Health scores shown in the dashboard are computed by these jobs — NOT real-time. Scores update only after job completion.' },
    { p:'p5', t:'t6', type:'tip', term:'CMDB 360 vs Explorer', def:'CMDB 360 = record-centric deep view (one CI, everything about it in one place). Explorer = relationship-traversal view (navigate the dependency graph starting from any CI). Different tools for different questions.' },

    // ── PART 6: Integration & Advanced ────────────────────────────────────

    { p:'p6', t:'t1', term:'Table API', def:'ServiceNow\'s primary REST API for CRUD operations: GET /api/now/table/{tableName} (query), POST (insert), PUT (full replace), PATCH (partial update), DELETE (remove record).' },
    { p:'p6', t:'t1', term:'sysparm_fields', def:'URL parameter limiting which fields are returned in Table API GET responses. Comma-separated list of field names. Reduces payload size significantly for large records.' },
    { p:'p6', t:'t1', term:'sysparm_query', def:'URL parameter providing an encoded query filter for Table API GET. Same syntax as list view filters: active=true^priority=1. Limits which records are returned.' },
    { p:'p6', t:'t1', term:'sysparm_display_value', def:'Controls whether API returns DB values, display values, or both. "true" = display values only. "false" = DB values only. "all" = both value and display_value keys returned per field.' },
    { p:'p6', t:'t1', term:'Aggregate API', def:'REST endpoint for aggregation: GET /api/now/stats/{tableName}. Returns COUNT, SUM, AVG, MIN, MAX without fetching individual records. More efficient than fetching all records and counting client-side.' },
    { p:'p6', t:'t1', term:'Import API', def:'POST to /api/now/import/{stagingTableName}. Pushes a single JSON payload as a row into the staging table and triggers the transform. Equivalent to a single-row import set run.' },
    { p:'p6', t:'t1', term:'GlideRecord (Server-side)', def:'JavaScript class for database operations in server-side scripts. var gr = new GlideRecord("incident"); gr.addQuery("active", true); gr.query(); while(gr.next()) { gs.log(gr.number); }' },
    { p:'p6', t:'t1', type:'tip', term:'sysparm_display_value=all', def:'Use "all" when building integrations that need both the stored sys_id (for referential integrity) AND the human-readable display value (for user-facing data). Returns: {"value": "sys_id", "display_value": "Name"}.' },

    { p:'p6', t:'t2', term:'IntegrationHub', def:'ServiceNow\'s low-code integration platform. Uses Flows + Spokes to connect ServiceNow to external systems. Core HTTP steps are included; most pre-built Spokes require a separate license.' },
    { p:'p6', t:'t2', term:'Spoke', def:'Pre-built IntegrationHub connector package for a specific external system (Jira, Salesforce, Slack, AWS, etc.). Provides ready-made Actions specific to that system\'s API.' },
    { p:'p6', t:'t2', term:'Action (IntegrationHub)', def:'Reusable integration step: HTTP Request, Create Record, Transform Data, Send Email, etc. Actions are building blocks combined into Flows. Can be triggered from Flow Designer.' },
    { p:'p6', t:'t2', term:'Data Stream Action', def:'IntegrationHub action handling paginated API responses automatically. Loops through pages of results without manual pagination logic. Required for external APIs with result limits.' },
    { p:'p6', t:'t2', term:'REST Message', def:'sys_rest_message record. Defines an outbound HTTP endpoint, authentication method (Basic, OAuth2, API Key, Mutual Auth), default headers, and query parameters for REST calls.' },
    { p:'p6', t:'t2', term:'Scripted REST API', def:'Exposes ServiceNow as a custom REST endpoint. Define resources (URLs) and HTTP method handlers (GET, POST, etc.) with server-side scripts. External systems can call into ServiceNow.' },
    { p:'p6', t:'t2', type:'tip', term:'IntegrationHub License', def:'The core HTTP step (manual REST call) is included with base ServiceNow. Pre-built Spokes (Jira, Salesforce, etc.) and advanced actions require an IntegrationHub license. Verify licensing before designing spoke-based integrations.' },

    { p:'p6', t:'t3', term:'Archive Rule', def:'sys_archive record defining: which table, filter condition (which records), age threshold (how old), and schedule. When triggered, matching records move from the active table to [table]_archive.' },
    { p:'p6', t:'t3', term:'Archive Table', def:'Auto-created table named [original_table]_archive. Contains moved records. Not visible in standard list views. Must be queried directly to access archived data.' },
    { p:'p6', t:'t3', term:'Archive vs Purge', def:'Archive: moves records out of active table — data RETAINED but not in normal queries. Purge: permanently DELETES records — irreversible. Choose based on compliance and data retention requirements.' },
    { p:'p6', t:'t3', term:'Data Retention Policy', def:'Organization-level rule defining how long records must be kept before they can be archived or purged. Required for compliance with regulations (GDPR, HIPAA, SOX). Configured in Data Retention Policies module.' },
    { p:'p6', t:'t3', term:'sys_log Cleanup', def:'System logs (sys_log, syslog) grow rapidly and must be managed. Cleanup policies define retention period and archive/purge schedule. Neglecting log cleanup is a common cause of instance storage issues.' },
    { p:'p6', t:'t3', term:'sys_attachment Archiving', def:'Attachment records (sys_attachment) can be archived by age and MIME type. Large file attachments significantly impact storage. Archiving moves file content to an external store if configured.' },
    { p:'p6', t:'t3', type:'tip', term:'Archived Records Not Searchable', def:'Records moved to archive tables do NOT appear in standard list views, reports, or Global Search results. Users must explicitly query the [table]_archive table to find archived records.' },

    { p:'p6', t:'t4', term:'Instance Clone', def:'Copies production instance data to a sub-production instance (dev/test). Uses a Clone Profile to configure which tables to copy. Does NOT copy scheduled job run history or certain sensitive tables.' },
    { p:'p6', t:'t4', term:'Clone Excluder', def:'sys_clone_exclude_data record marking a table to skip during clone. Common exclusions: sys_email (email history), user password hashes, audit logs, and temporary/cache tables.' },
    { p:'p6', t:'t4', term:'Post-Clone Behavior', def:'After a clone, ALL scheduled jobs in the target instance start fresh (run history not copied). MID Servers re-register. Notification rules may need review to prevent test instances from sending real emails.' },
    { p:'p6', t:'t4', term:'sys_db_index', def:'Manual database index record. Created by instance administrators to improve query performance on frequently-filtered fields. Over-indexing slows writes; under-indexing slows reads.' },
    { p:'p6', t:'t4', term:'glide.max_query_result', def:'System property limiting the maximum number of records returned by any single query. Prevents runaway queries from consuming memory. Default is 10,000. Adjust carefully for specific business needs.' },
    { p:'p6', t:'t4', term:'Upgrade Data Compatibility', def:'Custom fields (u_ prefix) survive upgrades and are never modified. Baseline field changes in upgrades may conflict with customizations. Review upgrade release notes for schema changes before applying.' },
    { p:'p6', t:'t4', type:'tip', term:'Clone Scheduled Jobs Warning', def:'After cloning production to dev, review ALL scheduled jobs in dev immediately. Jobs that send emails or trigger external integrations could fire in the cloned instance and reach real users/systems.' },

    // ── PART 3D: Discovery & Service Mapping ──────────────────────────────

    // P3D T1 — Discovery Architecture
    { p:'p3d', t:'t1', term:'Discovery phases', def:'Trigger (schedule or on-demand) → IP scan or CI Group target → MID Server executes Probes → Probes collect raw data → Sensors parse → IRE processes payload → CMDB updated.' },
    { p:'p3d', t:'t1', term:'IP Range Discovery', def:'Scans a subnet range to find NEW unknown devices and create CI records. Used for initial CMDB population. Produces one CI record per discovered device.' },
    { p:'p3d', t:'t1', term:'CI Group Discovery', def:'Refreshes data on CIs ALREADY in CMDB. Uses a CI Group (static or dynamic) as the target list. More efficient than IP scan for known CIs needing periodic attribute refresh.' },
    { p:'p3d', t:'t1', term:'Horizontal Discovery', def:'Phase 1 — classifies WHAT a discovered device is. Uses PING, port scan, SNMP. Determines the CI class (Linux Server? Network Switch?) and creates the initial CI record.' },
    { p:'p3d', t:'t1', term:'Vertical Discovery', def:'Phase 2 — collects DETAILED configuration attributes on an already-classified CI. Runs after Horizontal. Populates serial_number, OS version, installed software, running processes, network adapters.' },
    { p:'p3d', t:'t1', term:'discovery_source field', def:'Set to the Discovery source name on every CI attribute populated by Discovery. Enables IRE Reconciliation Rules to apply source-specific field priority (e.g., Discovery wins over Import Sets for serial_number).' },
    { p:'p3d', t:'t1', term:'cmdb_discovery_status', def:'Table tracking last Discovery run result per CI: state (success/error), MID Server used, last run time, error messages. First diagnostic tool for per-CI discovery failures.' },
    { p:'p3d', t:'t1', type:'tip', term:'Horizontal before Vertical', def:'Discovery runs Horizontal (classify) before Vertical (detail). If Horizontal fails to classify a device, Vertical never runs. Investigate Horizontal pattern coverage and credential access before troubleshooting missing attributes.' },

    // P3D T2 — MID Server
    { p:'p3d', t:'t2', term:'MID Server definition', def:'Java application deployed inside a private network, acting as proxy between the ServiceNow cloud instance and network-accessible devices. Required for any Discovery target behind a firewall.' },
    { p:'p3d', t:'t2', term:'MID Server NOT required for', def:'Public cloud APIs (AWS EC2 API, Azure VM API). These are internet-accessible so ServiceNow cloud can call them directly. SGC connectors and SGC-based Discovery use direct API calls.' },
    { p:'p3d', t:'t2', term:'MID Server capabilities', def:'SSH (Linux/Unix), WMI (Windows), SNMP (network devices), JDBC (databases), HTTP/REST (web services), VMware vSphere API. Capabilities declared in mid.server.capabilities property on the MID Server record.' },
    { p:'p3d', t:'t2', term:'MID Server cluster', def:'Multiple MID Servers grouped under one cluster name. ServiceNow distributes Discovery work across cluster members for load balancing. If one MID Server fails, others continue processing.' },
    { p:'p3d', t:'t2', term:'Capability-based routing', def:'ServiceNow selects the MID Server to use based on the capability requirements of each Discovery target. A Linux target needing SSH gets a MID Server with SSH capability declared.' },
    { p:'p3d', t:'t2', term:'MID Server validation', def:'"Validate" button on MID Server record runs a connectivity test. MID Server must show status=UP and Validated=true before Discovery can run through it. Validation checks network reach and JRE version.' },
    { p:'p3d', t:'t2', type:'tip', term:'Single MID Server = single point of failure', def:'If only one MID Server covers a subnet and it goes down, Discovery for that entire subnet stops. Use MID Server clusters in production to ensure continuous Discovery coverage.' },

    // P3D T3 — Patterns, Probes & Credentials
    { p:'p3d', t:'t3', term:'Discovery Pattern', def:'Step-based definition of HOW to discover a specific CI type. Built in the Pattern Designer (no-code, step-based UI). Contains steps: SSH Get, Regex Extract, Variable Set, CI Insert, CI Relate.' },
    { p:'p3d', t:'t3', term:'Horizontal Pattern', def:'Identifies WHAT a discovered device IS — determines CI class from scan results (PING response, open ports, SNMP OID). Runs on initial device encounter. Creates the CI record with class assigned.' },
    { p:'p3d', t:'t3', term:'Vertical Pattern', def:'Collects DETAILED configuration attributes for an already-classified CI type. Runs after Horizontal identification. Populates serial_number, OS version, installed packages, running processes.' },
    { p:'p3d', t:'t3', term:'Probe', def:'Message from ServiceNow TO MID Server instructing it to execute a specific collection operation (SSH command, WMI query, SNMP OID walk, REST call) against a target device. Returns raw data.' },
    { p:'p3d', t:'t3', term:'Sensor', def:'Script that runs ON ServiceNow (server-side) to parse the raw probe response and map collected data to CI fields. Sensor runs after MID Server returns data from the probe.' },
    { p:'p3d', t:'t3', term:'Credential types', def:'SSH (username/password or private key), WMI (Windows domain username/password), SNMP community string, JDBC (username/password). All stored encrypted in ServiceNow Credentials store.' },
    { p:'p3d', t:'t3', term:'Credential alias', def:'Named reference to a credential record. Discovery patterns and schedules reference the alias, not the credential directly. Allows credential rotation without editing every pattern or schedule.' },
    { p:'p3d', t:'t3', type:'tip', term:'Pattern Designer vs classic probes', def:'New Discovery uses Pattern Designer (visual, no-code steps). Classic Discovery uses Probe/Sensor JavaScript scripts. Pattern Designer is the preferred approach — simpler to maintain and extend without scripting.' },

    // P3D T4 — Service Mapping
    { p:'p3d', t:'t4', term:'Service Mapping definition', def:'ITOM module that auto-discovers application dependencies to build CSDM Application Service models. Requires ITOM Visibility license. Populates cmdb_ci_service_auto records with full CI dependency topology.' },
    { p:'p3d', t:'t4', term:'Top-down discovery', def:'Admin defines entry points (IP+port of a load balancer or app server) → Service Mapping traces inward, following connections to discover backend servers, databases, and all dependent CIs automatically.' },
    { p:'p3d', t:'t4', term:'Tag-based discovery', def:'Lightweight agents on hosts emit tags identifying which service they belong to. Service Mapping reads tags to build service maps without manual entry-point configuration — ideal for dynamic cloud environments.' },
    { p:'p3d', t:'t4', term:'Traffic-based discovery', def:'Service Mapping observes actual network traffic flows between hosts to identify application dependencies. No entry point configuration required. Discovers from real runtime behavior.' },
    { p:'p3d', t:'t4', term:'Application Service output', def:'Creates a cmdb_ci_service_auto record containing all discovered CIs and their relationships for one business service. This record is the CSDM Operated Landscape representation of the service.' },
    { p:'p3d', t:'t4', term:'Service map completeness', def:'KPI measuring what % of expected application CIs are correctly included in the service map. Low completeness = missing entry points, Discovery pattern gaps, or CIs behind strict firewalls.' },
    { p:'p3d', t:'t4', type:'tip', term:'Service Mapping ≠ Discovery', def:'Discovery finds and classifies individual CIs. Service Mapping understands HOW those CIs connect to form a running business service. Both are ITOM Visibility tools but answer different questions.' },

    // P3D T5 — Agent Client Collector
    { p:'p3d', t:'t5', term:'ACC (Agent Client Collector)', def:'Lightweight agent installed directly on endpoints (Windows/Linux) to collect and push CI data to ServiceNow. Alternative to agentless Discovery when network access to the target is restricted.' },
    { p:'p3d', t:'t5', term:'When to use ACC over MID Server', def:'Strict firewalls blocking inbound connections, high-security environments (PCI/HIPAA zones), cloud instances without MID Server network reach, IoT/OT devices needing ongoing CI refresh.' },
    { p:'p3d', t:'t5', term:'ACC vs MID Server architecture', def:'MID Server = outbound proxy FROM ServiceNow TO target (agentless, no install on target). ACC = installed ON the target device, pushes data TO ServiceNow via HTTPS (agent-based, requires installation).' },
    { p:'p3d', t:'t5', term:'ACC data flow', def:'Agent installed on host → collects CI attributes locally → sends encrypted payload to ServiceNow via HTTPS port 443 → IRE processes payload → CMDB CI updated.' },
    { p:'p3d', t:'t5', term:'CI Group Discovery with ACC', def:'Discovery schedules targeting a CI Group of ACC-managed CIs trigger refresh requests. The ACC on each host responds by re-sending current CI attribute data to ServiceNow.' },
    { p:'p3d', t:'t5', term:'ACC limitation', def:'Cannot discover UNKNOWN devices (no network scanning). ACC must be installed on each target in advance — requires knowing all targets. Does not replace IP Range Discovery for finding new CIs.' },
    { p:'p3d', t:'t5', type:'tip', term:'ACC + Discovery = complementary', def:'Use IP Range Discovery to find and classify new CIs initially. Deploy ACC on high-security CIs afterward for ongoing data refresh. Hybrid approach covers both initial discovery and ongoing compliance requirements.' },

    // ── PART 4I: IRE — Identity & Reconciliation Engine ───────────────────

    // P4I T1 — IRE Architecture
    { p:'p4i', t:'t1', term:'IRE purpose', def:'Mandatory middleware for ALL CI data entering CMDB. Every CI insert/update — from Discovery, SGC, Import Sets, or custom integrations — must pass through IRE before touching CMDB tables.' },
    { p:'p4i', t:'t1', term:'Three IRE phases', def:'1) Identification — find matching existing CI or decide to create new. 2) Reconciliation — apply source priority rules to decide which value wins per field. 3) Deduplication — flag/merge detected duplicate CIs.' },
    { p:'p4i', t:'t1', term:'IRE API vs Table API', def:'CRITICAL TRAP: Use IdentificationEngine.createOrUpdateCI() for ALL CI data. Table API direct inserts BYPASS IRE completely → duplicate CIs, wrong source attribution, no reconciliation. Table API = anti-pattern for CIs.' },
    { p:'p4i', t:'t1', term:'Source label (discovery_source)', def:'Tag on each CI attribute identifying which integration provided it. IRE uses source labels to apply Reconciliation Rules — determining which source wins when multiple sources conflict on field values.' },
    { p:'p4i', t:'t1', term:'cmdb_ire_event', def:'Log table recording every IRE transaction: identification result (matched/new), reconciliation decisions per field, errors, warnings. First-stop diagnostic tool for any CI ingestion problem.' },
    { p:'p4i', t:'t1', term:'IRE input sources', def:'Discovery (probes/sensors), Service Graph Connectors, Import Sets (via IRE API call in transform), Agent Client Collector, and any custom integration correctly calling IdentificationEngine.' },
    { p:'p4i', t:'t1', type:'tip', term:'IRE is not optional', def:'ServiceNow best practices mandate ALL CI integrations call IRE API. If CI deduplication is failing, first question: are all integrations using IRE API? A single integration using Table API can flood CMDB with duplicates.' },

    // P4I T2 — Identification Rules
    { p:'p4i', t:'t2', term:'Identification Rule', def:'Configuration in cmdb_identifier / cmdb_identifier_entry defining HOW IRE matches an incoming CI payload to an existing CMDB record. One rule per CI class (or inherited from parent class).' },
    { p:'p4i', t:'t2', term:'Identifier Entry', def:'A specific field-combination match criterion within a rule (e.g., match on serial_number AND manufacturer). Each entry is tried in priority order. First match wins.' },
    { p:'p4i', t:'t2', term:'Multi-entry OR logic', def:'Multiple Identifier Entries in a rule are evaluated in priority order. If first entry does not find a match, IRE tries the next entry. This provides fallback matching strategies.' },
    { p:'p4i', t:'t2', term:'Field-combination AND logic', def:'Within a single Identifier Entry, ALL specified fields must match simultaneously. Provides precise matching. More fields = less chance of false-positive matches.' },
    { p:'p4i', t:'t2', term:'Missing field behavior (TRAP)', def:'If a field listed in an Identifier Entry is NULL in the incoming payload, IRE SKIPS that entire entry. Does not match on null. Partial payloads can cause CREATE instead of UPDATE — creates duplicates.' },
    { p:'p4i', t:'t2', term:'Lookup Rule', def:'Used for dependent CIs (NICs, storage volumes) whose identity depends on their parent CI. Lookup Rule finds the parent CI first, then identifies the child relative to the parent.' },
    { p:'p4i', t:'t2', type:'tip', term:'Test Identification utility', def:'"Test Identification" button on the Identification Rule record lets you submit a sample payload and see exactly which entry matched (or did not) and why. Use this before deploying any rule changes to production.' },

    // P4I T3 — Reconciliation Rules
    { p:'p4i', t:'t3', term:'Reconciliation Rule', def:'Defines which data source wins when multiple sources provide conflicting values for the same CI field. Configured at the CI class level with per-field source priority assignments.' },
    { p:'p4i', t:'t3', term:'Default source priority', def:'Manual edits (highest priority) > Discovery > Service Graph Connectors > other sources (lowest). Can be customized per CI class and per individual field.' },
    { p:'p4i', t:'t3', term:'Fully Authoritative mode', def:'One source completely owns a field. No other source can ever overwrite its value, regardless of recency or priority. Use for fields where one source is always correct (e.g., serial_number from Discovery).' },
    { p:'p4i', t:'t3', term:'Priority-Based mode', def:'Sources ranked by priority number. Highest priority source value wins at reconciliation time. Recency does NOT matter — priority rank determines the winner.' },
    { p:'p4i', t:'t3', term:'First-in-Wins mode', def:'The first source to populate an empty field owns it. Subsequent sources cannot overwrite the value once it is set. Good for fields with a natural "original owner" (e.g., initial hostname from provisioning).' },
    { p:'p4i', t:'t3', term:'Staleness period', def:'Time threshold after which a source\'s data is considered stale for a specific field. After staleness, the next-priority source can overwrite. Configured per field, not per CI.' },
    { p:'p4i', t:'t3', type:'tip', term:'Null is not a win', def:'A source providing NULL for a field does NOT overwrite an existing non-null value. IRE never treats null as an authoritative value in reconciliation — the existing value is preserved.' },

    // P4I T4 — Deduplication & Remediation
    { p:'p4i', t:'t4', term:'Duplicate CI causes (top 4)', def:'1) Loose Identification Rule (too few fields to uniquely identify). 2) Unstable identification field (hostname changes between runs). 3) Table API bypass. 4) Multiple integrations with no coordinated identification.' },
    { p:'p4i', t:'t4', term:'cmdb_dedup table', def:'Stores detected duplicate CI pairs. Contains: master CI sys_id, duplicate CI sys_id, confidence score (0-100), detection reason, and remediation status (pending/merged/dismissed).' },
    { p:'p4i', t:'t4', term:'Master CI selection', def:'IRE picks master CI based on priority: 1) most CI relationships, 2) most fields populated, 3) earliest creation date. The master survives; the duplicate is merged or deleted.' },
    { p:'p4i', t:'t4', term:'Merge remediation', def:'Combines attributes from duplicate into master using reconciliation priority rules. All relationships on the duplicate are moved to master. Duplicate CI record deleted after successful merge.' },
    { p:'p4i', t:'t4', term:'Fix root cause first', def:'ALWAYS fix the Identification Rule or bypassing integration that caused duplicates BEFORE running bulk remediation. Otherwise new duplicates form as fast as old ones are merged — remediation becomes endless.' },
    { p:'p4i', t:'t4', term:'Dedup confidence score', def:'Higher score = IRE is more certain these two CI records represent the same real-world asset. Use confidence > 80 as threshold for automatic merge; lower scores require human review.' },
    { p:'p4i', t:'t4', type:'tip', term:'cmdb_ire_event for diagnosis', def:'When investigating duplicate CIs, check cmdb_ire_event for the CREATE events that generated each duplicate. The payload and identification result reveal exactly why IRE decided to create instead of match an existing CI.' },
  ],

  summaries: {
    'p1_t1': [
      'All tables use OO inheritance — child tables inherit every field and ACL from the parent.',
      'sys_db_object stores metadata for every table: one row per table in the instance.',
      'Extending Task gives workflow, SLAs, approvals, and assignments automatically.',
      'Abstract tables exist only for inheritance; they never store direct records.',
      'Child records physically exist in BOTH parent and child DB tables, joined by sys_id.',
      '[TRAP] Creating a standalone table (not extending Task) loses all Task framework benefits: approvals, SLAs, activity stream.'
    ],
    'p1_t2': [
      'sys_dictionary is the single source of truth — one row per field per table.',
      'Reference field stores the sys_id (32-char GUID), not the display value.',
      'Journal fields (Work notes, Comments) are append-only and stored in sys_journal_field, not the main record.',
      'GlideList stores comma-separated sys_ids as a string — no DB referential integrity.',
      '[TRAP] GlideList is NOT a proper M2M relationship. M2M join tables support ACLs, additional attributes, and proper queries on either side.'
    ],
    'p1_t3': [
      'Reference = one-to-one; M2M join table = many-to-many; GlideList = weak multi-reference.',
      'Database Views join two tables at query time — no separate DB storage created.',
      'Related Lists show records from another table that reference the current record.',
      '[TRAP] DB Views are read-only — you cannot update or insert records through a DB View.',
      '[TRAP] Deleting the target of a Reference field does NOT automatically null the reference field.'
    ],
    'p1_t4': [
      'Dictionary Override lets a child table customize inherited field attributes without affecting siblings.',
      'sys_documentation stores field labels per language — enables multi-locale instances.',
      'Best practice: extend an existing base table whenever your entity shares workflow or lifecycle.',
      '[TRAP] A Dictionary Override on a field only affects that specific child table, not other tables that also extend the same parent.',
      '[TRAP] Setting mandatory on a child via Dict Override only enforces at that child level — parent and sibling tables are unaffected.'
    ],
    'p2_t1': [
      'Import Set = staging table (u_imp_*) that holds raw external data before transformation.',
      'Transform Map moves data from the staging table to the target table.',
      'Pipeline order: Load → Transform → (optional) Cleanup.',
      'Staging table persists until manually cleaned or a cleanup script/scheduled job removes rows.',
      '[TRAP] Staging rows are NOT automatically deleted after a transform — you must explicitly clean them.'
    ],
    'p2_t2': [
      'Transform Map maps one source (staging) table to one target table.',
      'Field Maps define each source → target field mapping; coalesce can be set per field.',
      'onStart / onBefore / onAfter / onComplete scripts add custom logic to the transform.',
      'The "Run As" field sets which user context is used during transform (affects ACL enforcement).',
      '[TRAP] onComplete fires after ALL rows are processed, not per-row. Use onAfter for per-row logic.'
    ],
    'p2_t3': [
      'Data Source defines the origin: file upload, JDBC, REST endpoint, LDAP, FTP/SFTP, etc.',
      'Scheduled Import combines a Data Source + Transform Map and runs on a cron schedule.',
      'The source variable in a transform script represents the current staging row GlideRecord.',
      'Supported formats: CSV, Excel, XML, JSON, JDBC, LDAP.',
      '[TRAP] A Scheduled Import fires on its cron schedule even if the source file has not changed — add change-detection logic if needed.'
    ],
    'p2_t4': [
      'Coalesce = the match key; if a staging record matches an existing target record, it UPDATEs instead of INSERTs.',
      'Coalesce is set on individual Field Map rows — not at the Transform Map level.',
      'Multiple coalesce fields = ALL must match simultaneously for an update to trigger.',
      '[TRAP] Coalesce is a field-level setting, not a transform-level switch.',
      '[TRAP] Whitespace or case mismatch between the staging value and the target value breaks coalesce — the record inserts as a duplicate instead.'
    ],
    'p2_t5': [
      'SGC = API-based cloud CI ingestion — no MID Server needed for public cloud APIs.',
      'SGC data routes through IRE API (createOrUpdateCI), not Table API direct insert.',
      'SGC sets discovery_source label so Reconciliation Rules apply correct source priority.',
      'SGC covers cloud/SaaS CIs; Discovery covers on-prem network-scanned CIs.',
      '[TRAP] SGC requires IntegrationHub + specific connector license — verify before designing SGC-based integrations.'
    ],
    'p2_t6': [
      'Non-discoverable CIs = any CI no automation tool can reach (no API, no network access).',
      'Import Sets are the primary bulk ingestion mechanism for non-discoverable CI data.',
      'Non-discoverable CIs have no discovery_source — no automated source owns their data.',
      'CMDB Health will flag non-discoverable CIs as stale if not updated within the threshold.',
      '[TRAP] Without automated refresh, non-discoverable CIs degrade silently — schedule regular Data Certification reviews.'
    ],
    'p3_t1': [
      'Data Policy enforces mandatory/read-only server-side — applies via API, imports, and UI.',
      'UI Policy enforces mandatory/read-only client-side only — bypassed by API calls and imports.',
      'Dictionary Override on a child table customizes inherited field attributes for that table only.',
      'Business Rules run server-side and are the most reliable enforcement mechanism.',
      '[TRAP] Data Policy enforces via the API too; UI Policy does NOT — API calls bypass UI Policy entirely.',
      '[TRAP] A Dictionary Override change is scoped to only that child table; sibling extensions are unaffected.'
    ],
    'p3_t2': [
      'Choice field values are stored in sys_choice; the DB stores the value, the UI shows the label.',
      'Dependent choice list automatically clears when the parent choice field changes.',
      'Field-level Validation Script runs server-side before the record saves.',
      'Client Script validation can be bypassed by direct API or import calls.',
      '[TRAP] Client-side validation (Client Scripts) is bypassable via REST API — use a Business Rule for critical enforcement.'
    ],
    'p3_t3': [
      'Reference Qualifier filters which records appear in the reference field lookup popup.',
      'Dynamic Reference Qualifier uses a script to make filtering context-aware.',
      'ACLs define read/write/create/delete access at both table level and field level.',
      'Field-level ACLs take precedence over table-level ACLs for specific fields.',
      '[TRAP] Reference Qualifiers only filter the lookup UI — they do NOT restrict which values can actually be saved to the field.'
    ],
    'p3_t4': [
      'Data Certification schedules task-based reviews of CI or record accuracy.',
      'Certification task is assigned to a record owner; they review and attest.',
      'Certification Definition sets table, filter, fields to review, and schedule.',
      'Certification results track who reviewed, when, and what changes were made.',
      '[TRAP] An overdue certification task has NO automatic effect on the CI record — it is only a pending open task until manually resolved.'
    ],
    'p3_t5': [
      'CMDB Governance Framework defines policies, roles, and processes for sustained CMDB quality.',
      'Data Steward owns CI data standards per class; CI Owner is accountable per CI record.',
      'CMDB Governance Board approves schema changes and policy updates cross-functionally.',
      'Define governance (ownership, mandatory fields, staleness thresholds) BEFORE enabling Discovery.',
      '[TRAP] Good tooling without governance produces poor CMDB quality — governance must drive tool configuration.'
    ],
    'p3_t6': [
      'CMDB Data Manager: central app for health scores, certifications, and remediation tasks.',
      'Key KPIs: completeness %, staleness %, duplicate-free %, certification completion rate.',
      'Remediation tasks auto-generated from CMDB Health and assigned to CI owners.',
      'Scheduled Health Jobs recalculate scores — dashboard reflects last job run, not real-time.',
      '[TRAP] CMDB Health scores are NOT real-time — they update only when Scheduled Health Jobs run.'
    ],
    'p4_t1': [
      'cmdb_ci is the base class for all Configuration Items — every CI ultimately extends it.',
      'CI classes use table inheritance: cmdb_ci_linux_server extends cmdb_ci_computer extends cmdb_ci_hardware extends cmdb_ci.',
      'BSM Map visualizes business services and the CIs they depend on.',
      '[TRAP] You never store a CI directly in cmdb_ci — actual records go in child class tables (cmdb_ci_linux_server, cmdb_ci_appl, etc.).',
      '[TRAP] Deleting a CI class table record deletes ALL CIs stored in that class.'
    ],
    'p4_t2': [
      'CI Relationship is a typed link record between two CIs (source → target).',
      'Three core relationship type categories: Contains, Connects, Controls.',
      'Dependency View shows the visual impact/dependency path from a selected CI.',
      'Relationship Qualifier records add metadata to specific CI relationship instances.',
      '[TRAP] "Depends on" and "Hosted on" are different relationship types with different semantic meaning — choose precisely.'
    ],
    'p4_t3': [
      'Discovery auto-scans the network and populates CI records in the CMDB.',
      'IRE (Identification and Reconciliation Engine) deduplicates and merges CI data from multiple sources.',
      'Identification Rule: determines whether incoming data matches an existing CI record.',
      'Reconciliation Rule: controls which data source wins for each CI attribute when sources conflict.',
      '[TRAP] IRE identifies (matches) FIRST, then reconciles — it does not blindly overwrite existing CI data.'
    ],
    'p4_t4': [
      'CMDB Health Dashboard shows Completeness, Staleness, and Correctness metrics per CI class.',
      'Completeness: percentage of required fields that are populated on CI records.',
      'Staleness: CI not updated within the configured threshold — flagged in dashboard only.',
      'Correctness: CI attribute values align with the authoritative data source.',
      '[TRAP] A stale CI is ONLY flagged in the Health Dashboard — there is no automatic remediation or status change on the CI record itself.'
    ],
    'p4_t5': [
      'CI Class Manager provides no-code interface for managing the CMDB class hierarchy.',
      'Dynamic CI Groups auto-update membership as CI attributes change — no manual maintenance.',
      'Static CI Groups have a fixed list of CIs — must be manually updated when membership changes.',
      'CI Groups are used for: Discovery scheduling, health scoping, change blast-radius targeting.',
      '[TRAP] Dynamic groups re-evaluate at query time — a CI removed from scope by data change disappears from group automatically.'
    ],
    'p4_t6': [
      'CSDM = 4 layers: Foundation → Designed → Operated → Managed.',
      'Foundation: master reference data (locations, companies, business units).',
      'Designed: planned service offerings and business applications.',
      'Operated: running services (Application Services) discovered by Service Mapping.',
      '[TRAP] CSDM is a reference architecture — it is NOT enforced by default. Requires deliberate configuration and adoption planning.'
    ],
    'p4_t7': [
      'Business Application (cmdb_ci_appl): the CSDM entity for a deployed application.',
      'Application Service (cmdb_ci_service_auto): auto-populated by Service Mapping with full dependency topology.',
      'Technical Service: IT-delivered capability (Email, Network, DNS) linking infra to outcomes.',
      '"Consumed By" relationship links CIs up through Application Service to Business Application.',
      '[TRAP] Application Service ≠ Service Offering. App Service = technical dependency map. Service Offering = catalog item for users.'
    ],
    'p4_t8': [
      'CI class alignment maps existing classes to the correct CSDM domain layer.',
      'cmdb_ci_appl = Business Application (Designed layer). cmdb_ci_service_auto = Application Service (Operated layer).',
      'Recommended phased adoption: Foundation → Designed → Operated → Managed.',
      'CSDM validation: verify CI→Application Service→Business Application relationship chain is intact.',
      '[TRAP] Not all CIs fit CSDM — IoT, facilities, and legacy systems may exist outside the service model hierarchy.'
    ],
    'p5_t1': [
      'Report types: List, Bar, Pie, Line, Trend, Heatmap, Calendar — each fits specific data shapes.',
      'Report Builder provides drag-and-drop with Group by, Stack by, and Aggregate controls.',
      'Reports run in the context of the viewer\'s ACLs — row-level security is automatically applied.',
      'Line chart requires a true Date or DateTime field for the time axis.',
      '[TRAP] A Line report shows nothing (or fails) if the time axis field is not an actual Date/DateTime type — a String field formatted as a date won\'t work.'
    ],
    'p5_t2': [
      'DB View joins fields from two or more tables at query time — no additional DB table is created.',
      'Defined in sys_db_view with left table, right table, and join condition.',
      'DB View fields are always read-only; used for reporting and dashboards, not data editing.',
      'DB Views can join tables that have no direct Reference field relationship.',
      '[TRAP] DB Views are read-only — you cannot insert, update, or delete records through a DB View.'
    ],
    'p5_t3': [
      'Dashboard is a canvas of report Widgets and Performance Analytics indicators.',
      'Interactive Filter widget filters all dashboard widgets — but only widgets on the SAME table.',
      'Schedule Report sends a report via email on a cron schedule to users or groups.',
      'Homepages (legacy) vs Dashboards (modern): prefer Dashboards for new work.',
      '[TRAP] Interactive Filter only affects widgets whose data source matches the filter\'s table — cross-table widgets are unaffected.'
    ],
    'p5_t4': [
      'Performance Analytics collects Scores on a scheduled basis; data is NOT retroactive.',
      'Indicator: the metric definition (query + aggregation function + optional breakdown).',
      'Score: a time-stamped value captured for an Indicator at a point in time.',
      'Breakdown: a dimension for segmenting PA data (by Priority, by Assignment Group, etc.).',
      '[TRAP] PA historical data collection must run BEFORE historical scores exist — there is no backfill for missed collection periods.'
    ],
    'p5_t5': [
      'CMDB Workspace: modern UI combining CI search, health summaries, Explorer graph, and NLQ.',
      'NLQ translates plain-English questions to GlideRecord queries against CI data.',
      'Explorer view: interactive CI relationship graph replacing the older BSM Map.',
      'CMDB Workspace health view shows per-class scores without navigating separate Health dashboard.',
      '[TRAP] NLQ results should be verified — ambiguous attribute names or synonyms may produce subtly incorrect filters.'
    ],
    'p5_t6': [
      'CMDB 360: single-CI deep view — all attributes, relationships, health score, open tickets.',
      'Foundation Dashboard: at-a-glance CMDB health — worst classes, staleness, duplicate count.',
      'Duplicate CI count on Dashboard flags IRE identification rule issues or Table API bypass.',
      'Scheduled Health Jobs drive Dashboard scores — scores are NOT real-time.',
      '[TRAP] CMDB 360 and Explorer are complementary, not redundant — 360 = deep record view; Explorer = relationship traversal graph.'
    ],
    'p6_t1': [
      'Table API supports GET, POST, PUT, PATCH, DELETE on any table via REST.',
      'GET = read record(s), POST = create (returns HTTP 201), PUT = full replace, PATCH = partial update.',
      'sysparm_display_value=all returns both the raw DB value AND the display value for each field.',
      'ACLs are fully enforced on Table API — unauthorized fields are omitted from the response.',
      '[TRAP] sysparm_display_value=true returns ONLY display values (labels), not sys_ids — use =all to get both.'
    ],
    'p6_t2': [
      'IntegrationHub provides no-code integration via Spokes and Flow Designer.',
      'Spoke: pre-built connector for a specific system (Jira Spoke, Slack Spoke, etc.).',
      'Core HTTP step: sends arbitrary REST/SOAP calls without needing a Spoke.',
      'Flow Designer connects Triggers + Actions visually; flows run server-side.',
      '[TRAP] Core HTTP step requires NO Spoke — it is a built-in step for calling any HTTP endpoint directly.'
    ],
    'p6_t3': [
      'Archive: moves records from the live table to a shadow _archive table — still queryable.',
      'Purge: permanently and irreversibly deletes records from the database.',
      'Archive Rule defines the table, filter conditions, and schedule for archiving.',
      'Archived records are excluded from default list views — need explicit archive query to find them.',
      '[TRAP] Archive ≠ Delete. Archived records still exist in the _archive shadow table and can be retrieved.'
    ],
    'p6_t4': [
      'Instance Clone copies production data to sub-prod using a Clone Profile.',
      'Clone Excluder (sys_clone_exclude_data) marks tables to skip during the clone.',
      'After clone: ALL scheduled jobs reset to not-run state; MID Servers re-register automatically.',
      'sys_db_index: manual index records that improve query performance on frequently-filtered fields.',
      '[TRAP] Post-clone scheduled jobs can fire and send emails to REAL users — disable notification rules in dev/test immediately after clone.',
      '[TRAP] Clone does NOT copy scheduled job run history — all jobs appear as never-run in the cloned instance.'
    ],
    'p3d_t1': [
      'Discovery flow: Trigger → IP scan/CI Group → MID Server → Probes → Sensors → IRE → CMDB.',
      'IP Range Discovery = finds NEW unknown CIs. CI Group Discovery = refreshes KNOWN CIs.',
      'Horizontal Discovery = classify what a device IS. Vertical = collect detailed attributes.',
      'cmdb_discovery_status: tracks last run state, MID Server, and errors per CI.',
      '[TRAP] If Horizontal Discovery fails to classify a device, Vertical Discovery never runs — always investigate Horizontal first.'
    ],
    'p3d_t2': [
      'MID Server required: private network devices behind firewall. NOT required: public cloud APIs.',
      'MID Server capabilities: SSH, WMI, SNMP, JDBC, HTTP/REST, VMware API.',
      'MID Server clusters provide load balancing and high availability for Discovery.',
      'Capability-based routing: ServiceNow selects MID Server matching the target\'s required protocol.',
      '[TRAP] Single MID Server = single point of failure. Use clusters for production Discovery coverage.'
    ],
    'p3d_t3': [
      'Pattern Designer: visual, no-code step-based tool for creating/editing Discovery Patterns.',
      'Horizontal Pattern: classifies CI type. Vertical Pattern: collects detailed attributes.',
      'Probe = instructions from ServiceNow TO MID Server. Sensor = script parsing probe response ON ServiceNow.',
      'Credential aliases decouple patterns from specific credentials — rotate credentials without editing patterns.',
      '[TRAP] Pattern Designer (modern) vs classic Probe/Sensor scripts — Pattern Designer is preferred; avoid classic probes for new Discovery.'
    ],
    'p3d_t4': [
      'Service Mapping traces application dependencies to build CSDM Application Service models.',
      'Three entry strategies: top-down (entry points), tag-based (agents), traffic-based (observed flows).',
      'Output: cmdb_ci_service_auto record with all CIs and relationships for one business service.',
      'Service map completeness: % of expected CIs correctly included in the service map.',
      '[TRAP] Service Mapping requires ITOM Visibility license — separate from base Discovery license.'
    ],
    'p3d_t5': [
      'ACC = agent installed on target, pushes CI data to ServiceNow via HTTPS port 443.',
      'Use ACC when MID Server cannot reach the target (strict firewall, high-security zone).',
      'ACC vs MID Server: MID Server is agentless (outbound from SN); ACC is agent-based (pushes from host).',
      'ACC cannot discover UNKNOWN devices — it requires pre-installation on known targets.',
      '[TRAP] ACC and Discovery are complementary: use IP Range Discovery to find CIs, then deploy ACC for secure ongoing refresh.'
    ],
    'p4i_t1': [
      'IRE processes ALL CI data before it reaches CMDB — no CI write bypasses IRE in correct integrations.',
      'Three phases: Identification → Reconciliation → Deduplication.',
      'cmdb_ire_event: audit log for every IRE transaction — first diagnostic stop for CI issues.',
      'Source label (discovery_source) tells IRE which integration provided each CI attribute.',
      '[TRAP] Table API direct inserts BYPASS IRE — always use IdentificationEngine.createOrUpdateCI() for CI data.'
    ],
    'p4i_t2': [
      'Identification Rule matches incoming CI payload to existing CMDB record using field combinations.',
      'Multiple Identifier Entries = fallback strategies tried in priority order (OR between entries).',
      'Within a single entry: ALL fields must match simultaneously (AND logic).',
      'Missing (null) field in payload causes IRE to skip that Identifier Entry entirely.',
      '[TRAP] Null field in payload = IRE skips the entry and may CREATE instead of UPDATE — causing duplicate CIs.'
    ],
    'p4i_t3': [
      'Reconciliation Rules determine which source wins when multiple sources provide conflicting field values.',
      'Default priority: Manual edits > Discovery > SGC > other integrations.',
      'Modes: Fully Authoritative (one source owns a field forever), Priority-Based (ranked sources), First-in-Wins.',
      'Staleness period: after threshold, the winning source\'s data expires and next source can overwrite.',
      '[TRAP] NULL from a source does NOT overwrite existing non-null value — null never wins in reconciliation.'
    ],
    'p4i_t4': [
      'Top duplicate causes: loose Identification Rule, unstable match field, Table API bypass, uncoordinated multi-source ingestion.',
      'cmdb_dedup: stores duplicate CI pairs with confidence score and remediation status.',
      'Master CI selection: most relationships → most fields populated → earliest creation date.',
      'Merge: attributes from duplicate absorbed into master using reconciliation priority; duplicate deleted.',
      '[TRAP] Fix the root-cause Identification Rule BEFORE running remediation — otherwise new duplicates form continuously.'
    ]
  }
};

'use strict';

window.COURSE_CONFIG = {
  id:           'servicenow-cis-df',
  courseTitle:  'Certified Implementation Specialist – Data Foundations',
  abbreviation: 'CIS-DF',
  icon:         '🗄️',
  themeClass:   'theme-cis-df',
  accentColor:  '#0891b2',
  storageKey:   'cisdf_progress',
  settingsKey:  'cisdf_settings',
  examDateKey:  'cisdf_exam_date',
  showSearch:   false,
  showContents: true,

  topicRegistry: [
    /* Part 1 — ServiceNow Data Model */
    { id: 'cisdf_p1_t1_01',  part: 1, title: 'Table Types & Hierarchy',            file: 'part1-data-model/topics/01-table-types-hierarchy.html' },
    { id: 'cisdf_p1_t2_02',  part: 1, title: 'Field Types & Dictionary',           file: 'part1-data-model/topics/02-field-types-dictionary.html' },
    { id: 'cisdf_p1_t3_03',  part: 1, title: 'Relationships & Database Views',     file: 'part1-data-model/topics/03-relationships-database-views.html' },
    { id: 'cisdf_p1_t4_04',  part: 1, title: 'Schema Design Patterns',             file: 'part1-data-model/topics/04-schema-design-patterns.html' },
    /* Part 2 — Import Sets, SGC & Ingestion */
    { id: 'cisdf_p2_t1_01',  part: 2, title: 'Import Sets Architecture',           file: 'part2-import-migration/topics/01-import-sets-architecture.html' },
    { id: 'cisdf_p2_t2_02',  part: 2, title: 'Transform Maps & Field Maps',        file: 'part2-import-migration/topics/02-transform-maps-field-maps.html' },
    { id: 'cisdf_p2_t3_03',  part: 2, title: 'Data Sources & Scheduled Imports',   file: 'part2-import-migration/topics/03-data-sources-scheduled-imports.html' },
    { id: 'cisdf_p2_t4_04',  part: 2, title: 'Coalesce, Behaviors & Scripts',      file: 'part2-import-migration/topics/04-coalesce-behaviors-scripts.html' },
    { id: 'cisdf_p2_t5_05',  part: 2, title: 'Service Graph Connectors',           file: 'part2-import-migration/topics/05-service-graph-connectors.html' },
    { id: 'cisdf_p2_t6_06',  part: 2, title: 'Non-Discoverable CIs',               file: 'part2-import-migration/topics/06-non-discoverable-cis.html' },
    /* Part 3 — Discovery & Service Mapping */
    { id: 'cisdf_p3d_t1_01', part: 3, title: 'Discovery Architecture',             file: 'part3-discovery/topics/01-discovery-architecture.html' },
    { id: 'cisdf_p3d_t2_02', part: 3, title: 'MID Server',                         file: 'part3-discovery/topics/02-mid-server.html' },
    { id: 'cisdf_p3d_t3_03', part: 3, title: 'Patterns, Probes & Credentials',     file: 'part3-discovery/topics/03-patterns-probes-credentials.html' },
    { id: 'cisdf_p3d_t4_04', part: 3, title: 'Service Mapping',                    file: 'part3-discovery/topics/04-service-mapping.html' },
    { id: 'cisdf_p3d_t5_05', part: 3, title: 'Agent Client Collector',             file: 'part3-discovery/topics/05-agent-client-collector.html' },
    /* Part 4 — IRE — Identity & Reconciliation Engine */
    { id: 'cisdf_p4i_t1_01', part: 4, title: 'IRE Architecture',                   file: 'part4-ire/topics/01-ire-architecture.html' },
    { id: 'cisdf_p4i_t2_02', part: 4, title: 'Identification Rules',               file: 'part4-ire/topics/02-identification-rules.html' },
    { id: 'cisdf_p4i_t3_03', part: 4, title: 'Reconciliation Rules',               file: 'part4-ire/topics/03-reconciliation-rules.html' },
    { id: 'cisdf_p4i_t4_04', part: 4, title: 'Deduplication & Remediation',        file: 'part4-ire/topics/04-dedup-remediation.html' },
    /* Part 5 — CMDB, CSDM & Service Modeling */
    { id: 'cisdf_p4_t1_01',  part: 5, title: 'CMDB Architecture & CI Classes',     file: 'part5-cmdb/topics/01-cmdb-architecture-ci-classes.html' },
    { id: 'cisdf_p4_t2_02',  part: 5, title: 'CI Relationships & Dependency',      file: 'part5-cmdb/topics/02-ci-relationships-dependency.html' },
    { id: 'cisdf_p4_t3_03',  part: 5, title: 'Discovery & IRE',                    file: 'part5-cmdb/topics/03-discovery-ire.html' },
    { id: 'cisdf_p4_t4_04',  part: 5, title: 'CMDB Health & Governance',           file: 'part5-cmdb/topics/04-cmdb-health-governance.html' },
    { id: 'cisdf_p5_t5_05',  part: 5, title: 'CI Class Manager & Dynamic Groups',  file: 'part5-cmdb/topics/05-ci-class-manager-dynamic-groups.html' },
    { id: 'cisdf_p5_t6_06',  part: 5, title: 'CSDM Framework',                     file: 'part5-cmdb/topics/06-csdm-framework.html' },
    { id: 'cisdf_p5_t7_07',  part: 5, title: 'CSDM Service Modeling',              file: 'part5-cmdb/topics/07-csdm-service-modeling.html' },
    { id: 'cisdf_p5_t8_08',  part: 5, title: 'CSDM CI Alignment',                  file: 'part5-cmdb/topics/08-csdm-ci-alignment.html' },
    /* Part 6 — Governance & Data Quality */
    { id: 'cisdf_p3_t1_01',  part: 6, title: 'Data Policies & Dict Overrides',     file: 'part6-governance/topics/01-data-policies-dictionary-overrides.html' },
    { id: 'cisdf_p3_t2_02',  part: 6, title: 'Field Validation & Choice Lists',    file: 'part6-governance/topics/02-field-validation-choice-lists.html' },
    { id: 'cisdf_p3_t3_03',  part: 6, title: 'Ref Qualifiers & Field Security',    file: 'part6-governance/topics/03-reference-qualifiers-field-security.html' },
    { id: 'cisdf_p3_t4_04',  part: 6, title: 'Data Certification & Lifecycle',     file: 'part6-governance/topics/04-data-certification-lifecycle.html' },
    { id: 'cisdf_p6_t5_05',  part: 6, title: 'CMDB Governance Framework',          file: 'part6-governance/topics/05-governance-framework.html' },
    { id: 'cisdf_p6_t6_06',  part: 6, title: 'CMDB Health KPIs & Data Manager',    file: 'part6-governance/topics/06-cmdb-health-kpis-data-manager.html' },
    /* Part 7 — Reporting, Analytics & CMDB Workspace */
    { id: 'cisdf_p5_t1_01',  part: 7, title: 'Report Types & Builder',             file: 'part7-reporting-analytics/topics/01-report-types-builder.html' },
    { id: 'cisdf_p5_t2_02',  part: 7, title: 'Database Views for Reporting',       file: 'part7-reporting-analytics/topics/02-database-views-reporting.html' },
    { id: 'cisdf_p5_t3_03',  part: 7, title: 'Dashboards & Scheduling',            file: 'part7-reporting-analytics/topics/03-dashboards-scheduling.html' },
    { id: 'cisdf_p5_t4_04',  part: 7, title: 'Performance Analytics',              file: 'part7-reporting-analytics/topics/04-performance-analytics.html' },
    { id: 'cisdf_p7_t5_05',  part: 7, title: 'CMDB Workspace & NLQ',               file: 'part7-reporting-analytics/topics/05-cmdb-workspace-nlq.html' },
    { id: 'cisdf_p7_t6_06',  part: 7, title: 'Foundation Dashboards & CMDB 360',   file: 'part7-reporting-analytics/topics/06-foundation-dashboards-cmdb360.html' },
    /* Part 8 — Integration & Advanced */
    { id: 'cisdf_p6_t1_01',  part: 8, title: 'REST API & Table API',               file: 'part8-integration-advanced/topics/01-rest-api-table-api.html' },
    { id: 'cisdf_p6_t2_02',  part: 8, title: 'IntegrationHub & Data Flows',        file: 'part8-integration-advanced/topics/02-integrationhub-data.html' },
    { id: 'cisdf_p6_t3_03',  part: 8, title: 'Archiving, Purging & Retention',     file: 'part8-integration-advanced/topics/03-archiving-purging-retention.html' },
    { id: 'cisdf_p6_t4_04',  part: 8, title: 'Instance Data Health',               file: 'part8-integration-advanced/topics/04-instance-data-health.html' },
  ],

  /* Keys match topicRegistry.part numbers and data-progress-part="N" hub attributes.
     Order follows the learning path: 1,2 = foundation, 3,4 = INGEST, 5,6 = CONFIG/GOVERN, 7,8 = INSIGHT/advanced. */
  partsMeta: {
    1: { title: 'ServiceNow Data Model',           weight: '15%', color: 'var(--part1-color)', icon: '🏗️', topicIds: ['cisdf_p1_t1_01','cisdf_p1_t2_02','cisdf_p1_t3_03','cisdf_p1_t4_04'] },
    2: { title: 'Import Sets, SGC & Ingestion',    weight: '10%', color: 'var(--part2-color)', icon: '📥', topicIds: ['cisdf_p2_t1_01','cisdf_p2_t2_02','cisdf_p2_t3_03','cisdf_p2_t4_04','cisdf_p2_t5_05','cisdf_p2_t6_06'] },
    3: { title: 'Discovery & Service Mapping',     weight: '7%',  color: 'var(--part3-color)', icon: '🔭', topicIds: ['cisdf_p3d_t1_01','cisdf_p3d_t2_02','cisdf_p3d_t3_03','cisdf_p3d_t4_04','cisdf_p3d_t5_05'] },
    4: { title: 'IRE — Identity & Reconciliation', weight: '2%',  color: 'var(--part4-color)', icon: '⚙️', topicIds: ['cisdf_p4i_t1_01','cisdf_p4i_t2_02','cisdf_p4i_t3_03','cisdf_p4i_t4_04'] },
    5: { title: 'CMDB, CSDM & Service Modeling',  weight: '11%', color: 'var(--part5-color)', icon: '🕸️', topicIds: ['cisdf_p4_t1_01','cisdf_p4_t2_02','cisdf_p4_t3_03','cisdf_p4_t4_04','cisdf_p5_t5_05','cisdf_p5_t6_06','cisdf_p5_t7_07','cisdf_p5_t8_08'] },
    6: { title: 'Governance & Data Quality',       weight: '35%', color: 'var(--part6-color)', icon: '🏛️', topicIds: ['cisdf_p3_t1_01','cisdf_p3_t2_02','cisdf_p3_t3_03','cisdf_p3_t4_04','cisdf_p6_t5_05','cisdf_p6_t6_06'] },
    7: { title: 'Reporting, Analytics & CMDB WS', weight: '20%', color: 'var(--part5-color)', icon: '📊', topicIds: ['cisdf_p5_t1_01','cisdf_p5_t2_02','cisdf_p5_t3_03','cisdf_p5_t4_04','cisdf_p7_t5_05','cisdf_p7_t6_06'] },
    8: { title: 'Integration & Advanced',          weight: '—',   color: 'var(--part6-color)', icon: '🔌', topicIds: ['cisdf_p6_t1_01','cisdf_p6_t2_02','cisdf_p6_t3_03','cisdf_p6_t4_04'] },
  },

  partIndexFiles: {
    1: 'part1-data-model/index.html',
    2: 'part2-import-migration/index.html',
    3: 'part3-discovery/index.html',
    4: 'part4-ire/index.html',
    5: 'part5-cmdb/index.html',
    6: 'part6-governance/index.html',
    7: 'part7-reporting-analytics/index.html',
    8: 'part8-integration-advanced/index.html',
  },
};

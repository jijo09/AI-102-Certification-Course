'use strict';

window.COURSE_CONFIG = {
  id:           'servicenow-csa',
  courseTitle:  'Certified System Administrator',
  abbreviation: 'CSA',
  icon:         '❄️',
  themeClass:   'theme-csa',
  accentColor:  '#7c3aed',
  storageKey:   'csa_progress',
  settingsKey:  'csa_settings',
  examDateKey:  'csa_exam_date',
  showSearch:   false,

  topicRegistry: [
    /* Part 1 — Platform Overview & Navigation */
    { id: 'csa-p1-ui-navigation',        part: 1, title: 'UI Navigation & Interface',     file: 'part1-navigation/topics/01-ui-navigation.html' },
    { id: 'csa-p1-lists-filters-forms',  part: 1, title: 'Lists, Filters & Forms',        file: 'part1-navigation/topics/02-lists-filters-forms.html' },
    { id: 'csa-p1-branding-properties',  part: 1, title: 'Properties & Branding',         file: 'part1-navigation/topics/03-branding-properties.html' },
    { id: 'csa-p1-mobile-portal',        part: 1, title: 'Mobile & Service Portal',       file: 'part1-navigation/topics/04-mobile-portal.html' },
    /* Part 2 — Instance Configuration */
    { id: 'csa-p2-users-groups-roles',   part: 2, title: 'Users, Groups & Roles',         file: 'part2-configuration/topics/01-users-groups-roles.html' },
    { id: 'csa-p2-tables-dictionary',    part: 2, title: 'Tables & System Dictionary',    file: 'part2-configuration/topics/02-tables-dictionary.html' },
    { id: 'csa-p2-instance-security',    part: 2, title: 'Security & Access Controls',    file: 'part2-configuration/topics/03-instance-security.html' },
    /* Part 3 — Applications for Collaboration */
    { id: 'csa-p3-notifications',        part: 3, title: 'Notifications & Templates',     file: 'part3-collaboration/topics/01-notifications-templates.html' },
    { id: 'csa-p3-reporting-dashboards', part: 3, title: 'Reporting & Dashboards',        file: 'part3-collaboration/topics/02-reporting-dashboards.html' },
    { id: 'csa-p3-knowledge-management', part: 3, title: 'Knowledge Management',          file: 'part3-collaboration/topics/03-knowledge-management.html' },
    { id: 'csa-p3-service-catalog',      part: 3, title: 'Service Catalog & Requests',    file: 'part3-collaboration/topics/04-service-catalog.html' },
    /* Part 4 — Database Management & Security */
    { id: 'csa-p4-data-schema-imports',  part: 4, title: 'Schema & Import Sets',          file: 'part4-database-security/topics/01-data-schema-imports.html' },
    { id: 'csa-p4-cmdb-relationships',   part: 4, title: 'Relationships & CMDB',          file: 'part4-database-security/topics/02-cmdb-relationships.html' },
    { id: 'csa-p4-access-control-rules', part: 4, title: 'Access Control Rules (ACL)',    file: 'part4-database-security/topics/03-access-control-rules.html' },
    { id: 'csa-p4-auditing-archiving',   part: 4, title: 'Auditing, History & Archiving', file: 'part4-database-security/topics/04-auditing-archiving.html' },
    /* Part 5 — Data Migration & Integration */
    { id: 'csa-p5-update-sets',          part: 5, title: 'System Update Sets',            file: 'part5-migration-integration/topics/01-update-sets.html' },
    { id: 'csa-p5-xml-migration',        part: 5, title: 'XML Imports & Exports',         file: 'part5-migration-integration/topics/02-xml-migration.html' },
    { id: 'csa-p5-integration-flows',    part: 5, title: 'IntegrationHub & Spokes',       file: 'part5-migration-integration/topics/03-integration-flows.html' },
    /* Part 6 — Self-Service & Process Automation */
    { id: 'csa-p6-ui-policies-actions',  part: 6, title: 'UI Policies & UI Actions',      file: 'part6-process-automation/topics/01-ui-policies-actions.html' },
    { id: 'csa-p6-business-rules',       part: 6, title: 'Business Rules & Scripts',      file: 'part6-process-automation/topics/02-business-rules.html' },
    { id: 'csa-p6-client-scripts',       part: 6, title: 'Client Scripts & UI Scripts',   file: 'part6-process-automation/topics/03-client-scripts.html' },
    { id: 'csa-p6-flow-designer',        part: 6, title: 'Flow Designer & Workflows',     file: 'part6-process-automation/topics/04-flow-designer.html' },
  ],

  partsMeta: {
    1: { title: 'Platform & Navigation',     weight: '7%',  color: 'var(--part1-color)', icon: '⚙️',  topicIds: ['csa-p1-ui-navigation','csa-p1-lists-filters-forms','csa-p1-branding-properties','csa-p1-mobile-portal'] },
    2: { title: 'Instance Configuration',    weight: '11%', color: 'var(--part2-color)', icon: '🔧',  topicIds: ['csa-p2-users-groups-roles','csa-p2-tables-dictionary','csa-p2-instance-security'] },
    3: { title: 'Collaboration Applications',weight: '20%', color: 'var(--part3-color)', icon: '👥',  topicIds: ['csa-p3-notifications','csa-p3-reporting-dashboards','csa-p3-knowledge-management','csa-p3-service-catalog'] },
    4: { title: 'Database & ACL Security',   weight: '27%', color: 'var(--part4-color)', icon: '🔒',  topicIds: ['csa-p4-data-schema-imports','csa-p4-cmdb-relationships','csa-p4-access-control-rules','csa-p4-auditing-archiving'] },
    5: { title: 'Migration & Integration',   weight: '15%', color: 'var(--part5-color)', icon: '✈️',  topicIds: ['csa-p5-update-sets','csa-p5-xml-migration','csa-p5-integration-flows'] },
    6: { title: 'Self-Service & Automation', weight: '20%', color: 'var(--part6-color)', icon: '⚡',  topicIds: ['csa-p6-ui-policies-actions','csa-p6-business-rules','csa-p6-client-scripts','csa-p6-flow-designer'] },
  },

  partIndexFiles: {
    1: 'part1-navigation/index.html',
    2: 'part2-configuration/index.html',
    3: 'part3-collaboration/index.html',
    4: 'part4-database-security/index.html',
    5: 'part5-migration-integration/index.html',
    6: 'part6-process-automation/index.html',
  },
};

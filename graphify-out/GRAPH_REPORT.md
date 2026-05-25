# Graph Report - .  (2026-05-25)

## Corpus Check
- 90 files · ~287,653 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 495 nodes · 595 edges · 46 communities (24 shown, 22 thin omitted)
- Extraction: 90% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_NLP & Language Solutions|NLP & Language Solutions]]
- [[_COMMUNITY_ServiceNow Security & Scripting|ServiceNow Security & Scripting]]
- [[_COMMUNITY_Generative AI & Azure OpenAI|Generative AI & Azure OpenAI]]
- [[_COMMUNITY_AI-102 App Shell & UI Engine|AI-102 App Shell & UI Engine]]
- [[_COMMUNITY_AI-102 Course Engine & Config|AI-102 Course Engine & Config]]
- [[_COMMUNITY_ServiceNow Access Control & Auditing|ServiceNow Access Control & Auditing]]
- [[_COMMUNITY_ServiceNow Collaboration & Catalog|ServiceNow Collaboration & Catalog]]
- [[_COMMUNITY_Responsible AI & Content Safety|Responsible AI & Content Safety]]
- [[_COMMUNITY_ServiceNow Data Migration & Import|ServiceNow Data Migration & Import]]
- [[_COMMUNITY_ServiceNow CMDB & Asset Management|ServiceNow CMDB & Asset Management]]
- [[_COMMUNITY_Document Intelligence & Content Understanding|Document Intelligence & Content Understanding]]
- [[_COMMUNITY_Study Engine & Flashcard System|Study Engine & Flashcard System]]
- [[_COMMUNITY_Flow Designer & Process Automation|Flow Designer & Process Automation]]
- [[_COMMUNITY_Azure AI Search Architecture|Azure AI Search Architecture]]
- [[_COMMUNITY_ServiceNow UI Navigation|ServiceNow UI Navigation]]
- [[_COMMUNITY_AI-102 Knowledge Mining|AI-102 Knowledge Mining]]
- [[_COMMUNITY_CSA Exam Structure & Domains|CSA Exam Structure & Domains]]
- [[_COMMUNITY_Video & Spatial Analysis|Video & Spatial Analysis]]
- [[_COMMUNITY_Custom Vision Models|Custom Vision Models]]
- [[_COMMUNITY_Azure Vision & Face API|Azure Vision & Face API]]
- [[_COMMUNITY_Azure Vision SDK & Florence Model|Azure Vision SDK & Florence Model]]
- [[_COMMUNITY_ServiceNow Core Tables|ServiceNow Core Tables]]
- [[_COMMUNITY_App Settings & Permissions|App Settings & Permissions]]
- [[_COMMUNITY_Study Data Configuration|Study Data Configuration]]
- [[_COMMUNITY_Project README|Project README]]
- [[_COMMUNITY_Parts Metadata|Parts Metadata]]
- [[_COMMUNITY_Generative AI Concept|Generative AI Concept]]
- [[_COMMUNITY_NLP Concept|NLP Concept]]
- [[_COMMUNITY_CSA Configuration Domain|CSA Configuration Domain]]
- [[_COMMUNITY_CSA Collaboration Domain|CSA Collaboration Domain]]
- [[_COMMUNITY_CSA DB & Security Domain|CSA DB & Security Domain]]
- [[_COMMUNITY_CSA Migration Domain|CSA Migration Domain]]
- [[_COMMUNITY_CSA Automation Domain|CSA Automation Domain]]
- [[_COMMUNITY_CSA Migration Quiz|CSA Migration Quiz]]
- [[_COMMUNITY_CSA Automation Quiz|CSA Automation Quiz]]
- [[_COMMUNITY_sys_choice Table|sys_choice Table]]
- [[_COMMUNITY_CMDB CI Relationship|CMDB CI Relationship]]
- [[_COMMUNITY_v_transaction Table|v_transaction Table]]
- [[_COMMUNITY_stats.do Endpoint|stats.do Endpoint]]
- [[_COMMUNITY_sys_export_log Table|sys_export_log Table]]
- [[_COMMUNITY_sys_rest_message Table|sys_rest_message Table]]
- [[_COMMUNITY_sys_ws_definition Table|sys_ws_definition Table]]
- [[_COMMUNITY_setWorkflow Utility|setWorkflow Utility]]
- [[_COMMUNITY_UI Script|UI Script]]

## God Nodes (most connected - your core abstractions)
1. `Topic 1 — Custom Agentic Solutions` - 14 edges
2. `Azure AI Document Intelligence` - 14 edges
3. `Topic 5 — Implement AI Responsibly` - 12 edges
4. `Topic 2 — Use Azure OpenAI in Foundry Models` - 12 edges
5. `Topic 2 — Speech Services` - 11 edges
6. `ServiceNow UI Navigation` - 11 edges
7. `Flow Designer` - 11 edges
8. `Topic 3 — Optimize & Operationalize GenAI Solutions` - 10 edges
9. `Topic 1 — Analyse & Translate Text` - 10 edges
10. `Azure AI Search Service` - 10 edges

## Surprising Connections (you probably didn't know these)
- `CSA Part 1 Flashcards` --USES--> `FlashcardRatings`  [INFERRED]
  servicenow-csa/part1-navigation/flashcards.html → ai-102/part6-computer-vision/flashcards.html
- `Part 5 Quiz` --USES--> `QuizEngine`  [INFERRED]
  ai-102/part5-knowledge-mining/quiz.html → servicenow-csa/part1-navigation/quiz.html
- `Part 6 Quiz` --USES--> `QuizEngine`  [INFERRED]
  ai-102/part6-computer-vision/quiz.html → servicenow-csa/part1-navigation/quiz.html
- `ServiceNow Catalog Client Scripts (catalog_script_client): onLoad, onChange, onSubmit — distinct from sys_script_client` --semantically_similar_to--> `ServiceNow UI Policies (client-side, bypassable) vs ACLs (server-side, enforced everywhere)`  [INFERRED] [semantically similar]
  servicenow-csa/part3-collaboration/topics/04-service-catalog.html → servicenow-csa/part2-configuration/topics/03-instance-security.html
- `Embeddings (text-embedding-ada-002)` --conceptually_related_to--> `RAG Pattern (Retrieval-Augmented Generation)`  [INFERRED]
  ai-102/part2-generative-ai/topics/02-azure-openai.html → ai-102/part2-generative-ai/topics/01-foundry-build.html

## Hyperedges (group relationships)
- **Quiz Rendering and Scoring Flow** —  [0.95]
- **Topic Progress Tracking System** —  [0.95]
- **Sidebar Injection and Navigation Flow** —  [0.95]
- **Microsoft 6 Responsible AI Principles** — p1t5_rai_principle_fairness, p1t5_rai_principle_reliability_safety, p1t5_rai_principle_privacy_security, p1t5_rai_principle_inclusiveness, p1t5_rai_principle_transparency, p1t5_rai_principle_accountability [EXTRACTED 1.00]
- **Azure AI Content Safety Harm Categories** — p1t5_harm_category, p1t5_severity_score, p1t5_azure_ai_content_safety [EXTRACTED 1.00]
- **Azure Content Safety Controls Trio** — p1t5_content_filter, p1t5_blocklist, p1t5_prompt_shield [EXTRACTED 1.00]
- **Part 2 Generative AI Domain** — p2t1_foundry_build, p2t2_azure_openai, p2t3_optimize, p2_flashcards, p2_quiz [EXTRACTED 1.00]
- **Azure OpenAI Model Portfolio** — p2t2_gpt4o, p2t2_dalle3, p2t2_whisper, p2t2_embeddings [EXTRACTED 1.00]
- **Prompt Engineering Techniques** — p2t3_zero_shot, p2t3_few_shot, p2t3_chain_of_thought [EXTRACTED 1.00]
- **Generation Parameter Controls** — p2t3_temperature, p2t3_top_p, p2t3_frequency_penalty [EXTRACTED 1.00]
- **Agentic AI Frameworks** — p3t1_azure_ai_agent_service, p3t1_semantic_kernel, p3t1_autogen [EXTRACTED 1.00]
- **Azure AI Agent Service Primitives** — p3t1_thread, p3t1_run, p3t1_tool_agent [EXTRACTED 1.00]
- **Azure NLP Services** — p4t1_azure_ai_language, p4t1_azure_ai_translator, p4t2_speech [EXTRACTED 1.00]
- **Azure AI Language Prebuilt Features** — p4t1_sentiment_analysis, p4t1_ner, p4t1_key_phrase_extraction, p4t1_pii_detection, p4t1_entity_linking, p4t1_opinion_mining, p4t1_language_detection [EXTRACTED 1.00]
- **Speaker Recognition Types** — p4t2_speaker_verification, p4t2_speaker_identification [EXTRACTED 1.00]
- **Custom NLP Models** — p4t3_clu, p4t3_custom_ner, p4t3_custom_text_classification, p4t3_custom_qa [EXTRACTED 1.00]
- **AI Search Enrichment Pipeline** — ai-search-datasource, ai-search-indexer, ai-search-skillset, ai-search-index, ai-search-knowledge-store [EXTRACTED]
- **OcrSkill + MergeSkill Exam Pair** — ocr-skill, merge-skill, ai-search-skillset [EXTRACTED]
- **Azure AI Search Search Modes** — hybrid-search, semantic-ranking, vector-search, azure-ai-search [EXTRACTED]
- **Document Intelligence Prebuilt Models** — doc-intel-prebuilt-invoice, doc-intel-prebuilt-receipt, doc-intel-prebuilt-id, doc-intel-prebuilt-w2, doc-intel-prebuilt-layout, doc-intel-prebuilt-read, doc-intel [EXTRACTED]
- **Document Intelligence Custom Models** — doc-intel-custom-template, doc-intel-custom-neural, doc-intel-composed, doc-intel [EXTRACTED]
- **Content Understanding Multi-Modal Pipeline** — cu-modalities, cu-ocr-pipeline, cu-keyframe, cu-transcript, content-understanding [EXTRACTED]
- **Azure AI Limited Access Features** — face-limited-access, doc-intel-prebuilt-id, spatial-analysis, limited-access-policy [EXTRACTED]
- **Face Identification Workflow** — face-api, face-persongroup, face-limited-access, azure-sdk-face [EXTRACTED]
- **Custom Vision Training & Prediction Architecture** — custom-vision, custom-vision-training-client, custom-vision-prediction-client, custom-vision-metrics [EXTRACTED]
- **Video Indexer REST API Workflow** — video-indexer, vi-access-token, vi-insights, vi-widgets [EXTRACTED]
- **ServiceNow Three-Frame Navigation System** — sn-three-frame, sn-app-navigator, sn-filter-navigator, sn-list-shortcut, sn-do-shortcut [EXTRACTED]
- **ServiceNow UI Versions Comparison** — sn-three-frame, sn-next-experience, csa-p1-t1 [EXTRACTED]
- **ServiceNow Settings Scope Comparison** — sn-user-prefs, sn-system-settings, csa-p1-t1 [EXTRACTED]
- **CSA Exam Domain Weights** — csa-d1-navigation, csa-d2-configuration, csa-d3-collaboration, csa-d4-db-security, csa-d5-migration, csa-d6-automation, csa-exam [EXTRACTED]
- **Knowledge Mining Services Comparison** — azure-ai-search, doc-intel, content-understanding, ai102-p5 [EXTRACTED]
- **Study Hub JavaScript Utilities** — progress-manager, quiz-engine, flashcard-ratings, study-data-js [INFERRED]
- **ServiceNow CSA Part 1: Navigation & UI** — csa-p1-lists-filters-forms, csa-p1-branding-properties, csa-p1-mobile-portal, concept-sn-list-anatomy, concept-sn-condition-builder, concept-sn-filter-operators, concept-sn-form-anatomy, concept-sn-field-types, concept-sn-journal-fields, concept-sn-sys-properties, concept-sn-user-preferences, concept-sn-instance-branding, concept-sn-interfaces, concept-sn-service-portal, concept-sn-now-mobile, concept-sn-user-criteria [EXTRACTED 1.00]
- **ServiceNow CSA Part 2: Instance Configuration** — csa-p2-index, csa-p2-flashcards, csa-p2-quiz, csa-p2-users-groups-roles, csa-p2-tables-dictionary, csa-p2-instance-security, concept-sn-access-model, concept-sn-core-roles, concept-sn-role-inheritance, concept-sn-impersonation, concept-sn-table-inheritance, concept-sn-sys-dictionary, concept-sn-choice-lists, concept-sn-form-views, concept-sn-acl-anatomy, concept-sn-acl-evaluation, concept-sn-security-admin, concept-sn-ui-policies-vs-acls, concept-sn-high-security-plugin [EXTRACTED 1.00]
- **ServiceNow CSA Part 3: Collaboration Applications (20% exam weight)** — csa-p3-index, csa-p3-flashcards, csa-p3-quiz, csa-p3-notifications, csa-p3-reporting-dashboards, csa-p3-knowledge-management, csa-p3-service-catalog, concept-sn-email-notifications, concept-sn-variable-substitution, concept-sn-events, concept-sn-inbound-email, concept-sn-reports, concept-sn-dashboards, concept-sn-performance-analytics, concept-sn-kb-hierarchy, concept-sn-article-lifecycle, concept-sn-kb-access, concept-sn-catalog-hierarchy, concept-sn-catalog-item-types, concept-sn-req-ritm-sctask, concept-sn-variable-sets, concept-sn-catalog-client-scripts [EXTRACTED 1.00]
- **ServiceNow CSA Part 4: Database Management & ACL Security (27% exam weight — highest)** — csa-p4-index, csa-p4-flashcards, concept-sn-import-sets, concept-sn-cmdb, concept-sn-acl-anatomy, concept-sn-acl-evaluation, concept-sn-auditing-archiving [EXTRACTED 1.00]
- **ServiceNow Access & Security Concepts (ACLs, Roles, User Criteria)** — concept-sn-access-model, concept-sn-core-roles, concept-sn-role-inheritance, concept-sn-acl-anatomy, concept-sn-acl-evaluation, concept-sn-security-admin, concept-sn-ui-policies-vs-acls, concept-sn-high-security-plugin, concept-sn-user-criteria, concept-sn-kb-access, concept-sn-impersonation [INFERRED 0.95]
- **ServiceNow UI Navigation & Display Concepts** — concept-sn-list-anatomy, concept-sn-condition-builder, concept-sn-filter-operators, concept-sn-form-anatomy, concept-sn-form-views, concept-sn-field-types, concept-sn-journal-fields, concept-sn-interfaces, concept-sn-service-portal, concept-sn-now-mobile [INFERRED 0.95]
- **ServiceNow Catalog Request Flow: Item Types → Variables → REQ/RITM/SCTASK** — concept-sn-catalog-hierarchy, concept-sn-catalog-item-types, concept-sn-variable-sets, concept-sn-req-ritm-sctask, concept-sn-catalog-client-scripts, concept-sn-table-inheritance [INFERRED 0.95]
- **ServiceNow Schema & Metadata Concepts (Dictionary, Tables, Fields)** — concept-sn-sys-dictionary, concept-sn-table-inheritance, concept-sn-choice-lists, concept-sn-field-types, concept-sn-import-sets, concept-sn-cmdb [INFERRED 0.95]
- **Import Set Data Pipeline** —  [INFERRED 1.00]
- **Task Table Inheritance Hierarchy** —  [INFERRED 1.00]
- **CMDB CI Class Hierarchy** —  [INFERRED 1.00]
- **CMDB Population Ecosystem** —  [INFERRED 0.95]
- **ACL Three-Gate Security Check** —  [INFERRED 1.00]
- **Audit Trail System** —  [INFERRED 1.00]
- **Update Set Lifecycle Tables** —  [INFERRED 1.00]
- **Data Migration Methods Comparison** —  [INFERRED 1.00]
- **ServiceNow Integration Patterns** —  [INFERRED 1.00]
- **Business Rule Timing Variants** —  [INFERRED 1.00]
- **Server-to-Client Data Bridge Pattern** —  [INFERRED 1.00]
- **GlideAjax Async Call Pattern** —  [INFERRED 1.00]
- **Client-Side Scripting APIs** —  [INFERRED 1.00]
- **Flow Designer Component System** —  [INFERRED 1.00]
- **Part 6 Process Automation Tools** —  [INFERRED 0.95]
- **UI Policy Configuration Ecosystem** —  [INFERRED 1.00]
- **ServiceNow Database Schema System** —  [INFERRED 1.00]
- **Part 4 Quiz Assessment Coverage** —  [INFERRED 1.00]

## Communities (46 total, 22 thin omitted)

### Community 0 - "NLP & Language Solutions"
Cohesion: 0.06
Nodes (42): Part 4 Flashcards — NLP Solutions, Part 4 Index — Implement NLP Solutions, Part 4 Full Quiz — NLP Solutions, Topic 1 — Analyse & Translate Text, Azure AI Language Service, Azure AI Translator, Document Translation (async batch), Entity Linking (+34 more)

### Community 1 - "ServiceNow Security & Scripting"
Cohesion: 0.08
Nodes (36): AbstractAjaxProcessor, ACL (Access Control List), ACL Evaluation Order, ACL Three-Gate Check, After Business Rule, Async Business Rule, Before Business Rule, Business Rule (+28 more)

### Community 2 - "Generative AI & Azure OpenAI"
Cohesion: 0.07
Nodes (37): Groundedness, Hallucination, Part 2 Flashcards — Generative AI, Part 2 Index — Implement Generative AI Solutions, Part 2 Full Quiz — Generative AI, Azure AI Search (RAG Index), Chunking Strategy (RAG), Evaluation Metrics (Groundedness/Relevance/Coherence/Fluency/Similarity) (+29 more)

### Community 3 - "AI-102 App Shell & UI Engine"
Cohesion: 0.06
Nodes (21): AI102, _ai102Prefixes(), btn, container, { course: p }, ExamCountdown, FlashcardEngine, FlashcardRatings (+13 more)

### Community 4 - "AI-102 Course Engine & Config"
Cohesion: 0.08
Nodes (31): ai-102/config.js, ai-102/index.html, AI102.init(), ai-102/revision.html, Anti-FOUC theme pattern, scripts/common.js, COURSE_CONFIG, CourseEngine.init() (+23 more)

### Community 5 - "ServiceNow Access Control & Auditing"
Cohesion: 0.11
Nodes (31): ServiceNow Three-Layer Access Model: Users → Groups → Roles → Permissions (ACLs), ServiceNow ACL Anatomy: Type, Operation, Name (table.field), Role, Condition, Script, ServiceNow ACL Evaluation: most-specific first, fail-closed, specificity order (record.field > table.field > table.* > *.field > *.*), ServiceNow Auditing & Archiving: sys_audit table, archive rules, history tracking, ServiceNow Choice Lists (sys_choice table): value stored in DB vs label displayed to user, ServiceNow CMDB (cmdb_ci): Configuration Items, Discovery, Relationships, ServiceNow Condition Builder (Field-Operator-Value, AND/OR logic), ServiceNow Core Roles: admin, security_admin, itil, itil_admin, catalog_admin, user_admin, knowledge (+23 more)

### Community 6 - "ServiceNow Collaboration & Catalog"
Cohesion: 0.10
Nodes (31): ServiceNow Article Lifecycle: Draft → Review → Published → Retired (workflow_state field), ServiceNow Catalog Client Scripts (catalog_script_client): onLoad, onChange, onSubmit — distinct from sys_script_client, ServiceNow Catalog Hierarchy: Catalog → Category → Item (sc_catalog, sc_category, sc_cat_item), ServiceNow Catalog Item Types: Catalog Item (RITM), Record Producer (any table), Order Guide (bundle), Content Item (redirect), ServiceNow Dashboards: widgets (Report, Number, Gauge, Clock), tabs, sharing, Interactive Filters, ServiceNow Email Notifications (sys_notification): trigger types, weight, subscribable vs mandatory, ServiceNow Events: gs.eventQueue(), sysevent (log), sysevent_register (registry), ServiceNow Inbound Email Actions (sys_email_inbound_action): Reply type, New record type, correlation ID (+23 more)

### Community 7 - "Responsible AI & Content Safety"
Cohesion: 0.08
Nodes (31): AI Governance Framework, Azure AI Content Safety Service, Blocklist, Content Filter (Azure OpenAI), Harm Category (Hate/Sexual/Violence/Self-Harm), Indirect Prompt Injection (Document Attack), Jailbreak Attack, Prompt Shield (+23 more)

### Community 8 - "ServiceNow Data Migration & Import"
Cohesion: 0.09
Nodes (25): Batch Update Sets, Coalesce, Export Formats, Import Set, Instance Clone, sys_class_name, sys_id, Table Inheritance (ServiceNow) (+17 more)

### Community 9 - "ServiceNow CMDB & Asset Management"
Cohesion: 0.10
Nodes (23): Archive (ServiceNow), CMDB (Configuration Management Database), CMDB Health (3 C's), Discovery (ITOM), IRE (Identification Rules Engine), Reconciliation Engine, Service Mapping (ITOM Visibility), Part 4 Quiz: Database Management & Security (+15 more)

### Community 10 - "Document Intelligence & Content Understanding"
Cohesion: 0.11
Nodes (22): Azure Content Understanding, azure-ai-documentintelligence SDK, Azure Content Understanding, Content Understanding Analyzer, Analyzer Template, Field Schema, Content Understanding Keyframe Extraction, Content Understanding Modalities (+14 more)

### Community 11 - "Study Engine & Flashcard System"
Cohesion: 0.10
Nodes (11): _celebrate(), CourseEngine, ExamCountdown, FlashcardEngine, initCompletionCheckbox(), PageHelpers, ProgressManager, QuizEngine (+3 more)

### Community 12 - "Flow Designer & Process Automation"
Cohesion: 0.18
Nodes (17): Action Type (Flow Designer), Ask for Approval (Flow Designer), Data Pills, Flow Anatomy, Flow Designer, Flow Trigger Types, Inbound Email Actions, IntegrationHub (+9 more)

### Community 13 - "Azure AI Search Architecture"
Cohesion: 0.16
Nodes (15): AI Search Data Source, AI Search Index, AI Search Indexer, AI Search Knowledge Store, AI Search Skillset, AzureOpenAIEmbeddingSkill, Azure AI Search Service, EntityRecognitionSkill (+7 more)

### Community 14 - "ServiceNow UI Navigation"
Cohesion: 0.18
Nodes (14): ServiceNow UI Navigation, Application Navigator, Connect Sidebar, .do Shortcut, Filter Navigator, ServiceNow Global Search, ServiceNow Impersonation, .list Shortcut (+6 more)

### Community 15 - "AI-102 Knowledge Mining"
Cohesion: 0.20
Nodes (10): AI-102 Part 5: Knowledge Mining, Part 5 Quiz, Azure AI Search, Azure AI Document Intelligence, AI-102 Part 6: Computer Vision, Part 6 Flashcards, Part 6 Quiz, Custom Vision Models (+2 more)

### Community 16 - "CSA Exam Structure & Domains"
Cohesion: 0.20
Nodes (10): CSA Domain: Navigation (7%), CSA Exam Domains, ServiceNow CSA Exam, ServiceNow CSA Study Hub, CSA Part 1: Navigation, CSA Part 1 Flashcards, CSA Part 1 Quiz, CSA Revision Center (+2 more)

### Community 17 - "Video & Spatial Analysis"
Cohesion: 0.20
Nodes (10): Video Analysis & Spatial Analysis, Spatial Analysis, Spatial Analysis IoT Edge Deployment, Spatial Analysis Operations, Video Indexer Access Token, Video Indexer ARM-Connected Account, Video Indexer Insights, Video Indexer Trial Account (+2 more)

### Community 18 - "Custom Vision Models"
Cohesion: 0.25
Nodes (9): azure-cognitiveservices-vision-customvision SDK, Bounding Box vs Bounding Polygon, Custom Vision Service, Custom Vision Image Classification, Custom Vision Object Detection, Custom Vision Metrics, CustomVisionPredictionClient, Custom Vision Retirement Warning (+1 more)

### Community 19 - "Azure Vision & Face API"
Cohesion: 0.29
Nodes (7): Azure AI Vision Image Analysis, azure-ai-vision-face SDK, Prebuilt ID Document Model, Face API, Face API Limited Access, PersonGroup Workflow, Limited Access Policy

### Community 20 - "Azure Vision SDK & Florence Model"
Cohesion: 0.50
Nodes (5): Azure AI Vision (Image Analysis 4.0), azure-ai-vision-imageanalysis SDK, Florence Foundation Model, OCR Read API, VisualFeatures Enum

### Community 21 - "ServiceNow Core Tables"
Cohesion: 0.50
Nodes (4): change_request (table), incident (table), problem (table), task (table)

## Knowledge Gaps
- **194 isolated node(s):** `allow`, `TOPIC_REGISTRY`, `PARTS_META`, `PART_INDEX_FILES`, `ProgressManager` (+189 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Part 4 Index — Implement NLP Solutions` connect `NLP & Language Solutions` to `Responsible AI & Content Safety`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `Part 3 Index — Implement an Agentic Solution` connect `Responsible AI & Content Safety` to `NLP & Language Solutions`, `Generative AI & Azure OpenAI`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `AI-102 Part 6: Computer Vision` connect `AI-102 Knowledge Mining` to `Video & Spatial Analysis`, `Azure Vision & Face API`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `allow`, `TOPIC_REGISTRY`, `PARTS_META` to the rest of the system?**
  _194 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `NLP & Language Solutions` be split into smaller, more focused modules?**
  _Cohesion score 0.05807200929152149 - nodes in this community are weakly interconnected._
- **Should `ServiceNow Security & Scripting` be split into smaller, more focused modules?**
  _Cohesion score 0.07957957957957958 - nodes in this community are weakly interconnected._
- **Should `Generative AI & Azure OpenAI` be split into smaller, more focused modules?**
  _Cohesion score 0.07057057057057058 - nodes in this community are weakly interconnected._
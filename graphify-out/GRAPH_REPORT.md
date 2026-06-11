# Graph Report - .  (2026-06-10)

## Corpus Check
- 89 files · ~287,993 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 535 nodes · 641 edges · 49 communities (27 shown, 22 thin omitted)
- Extraction: 89% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 32 edges (avg confidence: 0.91)
- Token cost: 27,859 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_AI-102 Course Structure|AI-102 Course Structure]]
- [[_COMMUNITY_ServiceNow Security & Scripting|ServiceNow Security & Scripting]]
- [[_COMMUNITY_Generative AI Concepts|Generative AI Concepts]]
- [[_COMMUNITY_Quiz Engine & UI Components|Quiz Engine & UI Components]]
- [[_COMMUNITY_Study Materials Hub|Study Materials Hub]]
- [[_COMMUNITY_ServiceNow Data Management|ServiceNow Data Management]]
- [[_COMMUNITY_ServiceNow Service Portal & Catalog|ServiceNow Service Portal & Catalog]]
- [[_COMMUNITY_AI-102 App Config & UI|AI-102 App Config & UI]]
- [[_COMMUNITY_Azure AI Safety & Governance|Azure AI Safety & Governance]]
- [[_COMMUNITY_ServiceNow Migration & Integration|ServiceNow Migration & Integration]]
- [[_COMMUNITY_ServiceNow CMDB & Discovery|ServiceNow CMDB & Discovery]]
- [[_COMMUNITY_Azure Document Intelligence|Azure Document Intelligence]]
- [[_COMMUNITY_Study Engine Architecture|Study Engine Architecture]]
- [[_COMMUNITY_Flow Designer & Automation|Flow Designer & Automation]]
- [[_COMMUNITY_Azure AI Search|Azure AI Search]]
- [[_COMMUNITY_ServiceNow UI Navigation|ServiceNow UI Navigation]]
- [[_COMMUNITY_Azure Speech Services|Azure Speech Services]]
- [[_COMMUNITY_Azure Video & Spatial Analysis|Azure Video & Spatial Analysis]]
- [[_COMMUNITY_Azure Custom Vision|Azure Custom Vision]]
- [[_COMMUNITY_Knowledge Mining & Vision|Knowledge Mining & Vision]]
- [[_COMMUNITY_CSA Navigation Study Materials|CSA Navigation Study Materials]]
- [[_COMMUNITY_Azure Vision & Face API|Azure Vision & Face API]]
- [[_COMMUNITY_Azure Image Analysis SDK|Azure Image Analysis SDK]]
- [[_COMMUNITY_CSA Exam Overview|CSA Exam Overview]]
- [[_COMMUNITY_ServiceNow Core Tables|ServiceNow Core Tables]]
- [[_COMMUNITY_Settings & Permissions|Settings & Permissions]]
- [[_COMMUNITY_Study Data Layer|Study Data Layer]]
- [[_COMMUNITY_README & Documentation|README & Documentation]]
- [[_COMMUNITY_Parts Metadata|Parts Metadata]]
- [[_COMMUNITY_Generative AI Concepts|Generative AI Concepts]]
- [[_COMMUNITY_NLP Concepts|NLP Concepts]]
- [[_COMMUNITY_CSA Configuration Domain|CSA Configuration Domain]]
- [[_COMMUNITY_CSA Collaboration Domain|CSA Collaboration Domain]]
- [[_COMMUNITY_CSA DB & Security Domain|CSA DB & Security Domain]]
- [[_COMMUNITY_CSA Migration Domain|CSA Migration Domain]]
- [[_COMMUNITY_CSA Automation Domain|CSA Automation Domain]]
- [[_COMMUNITY_Data Migration Quiz|Data Migration Quiz]]
- [[_COMMUNITY_Self-Service Process Quiz|Self-Service Process Quiz]]
- [[_COMMUNITY_sys_choice Table|sys_choice Table]]
- [[_COMMUNITY_CI Relationships|CI Relationships]]
- [[_COMMUNITY_v_transaction View|v_transaction View]]
- [[_COMMUNITY_stats.do Page|stats.do Page]]
- [[_COMMUNITY_sys_export_log|sys_export_log]]
- [[_COMMUNITY_sys_rest_message|sys_rest_message]]
- [[_COMMUNITY_sys_ws_definition|sys_ws_definition]]
- [[_COMMUNITY_setWorkflow API|setWorkflow API]]
- [[_COMMUNITY_UI Script|UI Script]]

## God Nodes (most connected - your core abstractions)
1. `Topic 1 — Custom Agentic Solutions` - 14 edges
2. `Azure AI Document Intelligence` - 14 edges
3. `Topic 5 — Implement AI Responsibly` - 12 edges
4. `Topic 2 — Use Azure OpenAI in Foundry Models` - 12 edges
5. `Certification Study Hub` - 12 edges
6. `Topic 2 — Speech Services` - 11 edges
7. `ServiceNow UI Navigation` - 11 edges
8. `Flow Designer` - 11 edges
9. `Topic 3 — Optimize & Operationalize GenAI Solutions` - 10 edges
10. `Topic 1 — Analyse & Translate Text` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Part 5 Quiz` --USES--> `QuizEngine`  [INFERRED]
  ai-102/part5-knowledge-mining/quiz.html → servicenow-csa/part1-navigation/quiz.html
- `Part 6 Quiz` --USES--> `QuizEngine`  [INFERRED]
  ai-102/part6-computer-vision/quiz.html → servicenow-csa/part1-navigation/quiz.html
- `CSA Part 1 Flashcards` --USES--> `FlashcardRatings`  [INFERRED]
  servicenow-csa/part1-navigation/flashcards.html → ai-102/part6-computer-vision/flashcards.html
- `ServiceNow UI Policies (client-side, bypassable) vs ACLs (server-side, enforced everywhere)` --semantically_similar_to--> `ServiceNow Catalog Client Scripts (catalog_script_client): onLoad, onChange, onSubmit — distinct from sys_script_client`  [INFERRED] [semantically similar]
  servicenow-csa/part2-configuration/topics/03-instance-security.html → servicenow-csa/part3-collaboration/topics/04-service-catalog.html
- `RAG Pattern (Retrieval-Augmented Generation)` --conceptually_related_to--> `Embeddings (text-embedding-ada-002)`  [INFERRED]
  ai-102/part2-generative-ai/topics/01-foundry-build.html → ai-102/part2-generative-ai/topics/02-azure-openai.html

## Hyperedges (group relationships)
- **Engine Pattern: Three Reusable Classes in engine.js** — readme_engine_js, readme_course_engine, readme_flashcard_engine, readme_quiz_engine [EXTRACTED 1.00]
- **AI-102 Course Files** — readme_ai102_index, readme_ai102_config_js, readme_ai102_revision, readme_ai102 [EXTRACTED 1.00]
- **CSA Course Files** — readme_csa_index, readme_csa_config_js, readme_csa_revision, readme_csa_flashcards, readme_csa_study_data_js, readme_csa [EXTRACTED 1.00]
- **Shared Script Layer** — readme_main_css, readme_common_js, readme_engine_js, readme_study_data_js [EXTRACTED 1.00]

## Communities (49 total, 22 thin omitted)

### Community 0 - "AI-102 Course Structure"
Cohesion: 0.06
Nodes (40): AI-102: Azure AI Engineer Associate, ai-102/config.js, ai-102/index.html (AI-102 Dashboard), AI-102 Part 1: Plan & Manage Azure AI Solution, AI-102 Part 2: Implement Generative AI Solutions, AI-102 Part 3: Implement Agentic Solutions, AI-102 Part 4: Implement NLP, AI-102 Part 5: Knowledge Mining & Information Extraction (+32 more)

### Community 1 - "ServiceNow Security & Scripting"
Cohesion: 0.08
Nodes (36): AbstractAjaxProcessor, ACL (Access Control List), ACL Evaluation Order, ACL Three-Gate Check, After Business Rule, Async Business Rule, Before Business Rule, Business Rule (+28 more)

### Community 2 - "Generative AI Concepts"
Cohesion: 0.07
Nodes (37): Groundedness, Hallucination, Part 2 Flashcards — Generative AI, Part 2 Index — Implement Generative AI Solutions, Part 2 Full Quiz — Generative AI, Azure AI Search (RAG Index), Chunking Strategy (RAG), Evaluation Metrics (Groundedness/Relevance/Coherence/Fluency/Similarity) (+29 more)

### Community 3 - "Quiz Engine & UI Components"
Cohesion: 0.06
Nodes (21): AI102, _ai102Prefixes(), btn, container, { course: p }, ExamCountdown, FlashcardEngine, FlashcardRatings (+13 more)

### Community 4 - "Study Materials Hub"
Cohesion: 0.08
Nodes (32): Part 3 Flashcards — Agentic Solutions, Part 3 Index — Implement an Agentic Solution, Part 3 Full Quiz — Agentic Solutions, Part 4 Flashcards — NLP Solutions, Part 4 Index — Implement NLP Solutions, Part 4 Full Quiz — NLP Solutions, Topic 1 — Analyse & Translate Text, Azure AI Language Service (+24 more)

### Community 5 - "ServiceNow Data Management"
Cohesion: 0.11
Nodes (31): ServiceNow Three-Layer Access Model: Users → Groups → Roles → Permissions (ACLs), ServiceNow ACL Anatomy: Type, Operation, Name (table.field), Role, Condition, Script, ServiceNow ACL Evaluation: most-specific first, fail-closed, specificity order (record.field > table.field > table.* > *.field > *.*), ServiceNow Auditing & Archiving: sys_audit table, archive rules, history tracking, ServiceNow Choice Lists (sys_choice table): value stored in DB vs label displayed to user, ServiceNow CMDB (cmdb_ci): Configuration Items, Discovery, Relationships, ServiceNow Condition Builder (Field-Operator-Value, AND/OR logic), ServiceNow Core Roles: admin, security_admin, itil, itil_admin, catalog_admin, user_admin, knowledge (+23 more)

### Community 6 - "ServiceNow Service Portal & Catalog"
Cohesion: 0.10
Nodes (31): ServiceNow Article Lifecycle: Draft → Review → Published → Retired (workflow_state field), ServiceNow Catalog Client Scripts (catalog_script_client): onLoad, onChange, onSubmit — distinct from sys_script_client, ServiceNow Catalog Hierarchy: Catalog → Category → Item (sc_catalog, sc_category, sc_cat_item), ServiceNow Catalog Item Types: Catalog Item (RITM), Record Producer (any table), Order Guide (bundle), Content Item (redirect), ServiceNow Dashboards: widgets (Report, Number, Gauge, Clock), tabs, sharing, Interactive Filters, ServiceNow Email Notifications (sys_notification): trigger types, weight, subscribable vs mandatory, ServiceNow Events: gs.eventQueue(), sysevent (log), sysevent_register (registry), ServiceNow Inbound Email Actions (sys_email_inbound_action): Reply type, New record type, correlation ID (+23 more)

### Community 7 - "AI-102 App Config & UI"
Cohesion: 0.08
Nodes (31): ai-102/config.js, ai-102/index.html, AI102.init(), ai-102/revision.html, Anti-FOUC theme pattern, scripts/common.js, COURSE_CONFIG, CourseEngine.init() (+23 more)

### Community 8 - "Azure AI Safety & Governance"
Cohesion: 0.09
Nodes (28): AI Governance Framework, Azure AI Content Safety Service, Blocklist, Content Filter (Azure OpenAI), Harm Category (Hate/Sexual/Violence/Self-Harm), Indirect Prompt Injection (Document Attack), Jailbreak Attack, Prompt Shield (+20 more)

### Community 9 - "ServiceNow Migration & Integration"
Cohesion: 0.09
Nodes (25): Batch Update Sets, Coalesce, Export Formats, Import Set, Instance Clone, sys_class_name, sys_id, Table Inheritance (ServiceNow) (+17 more)

### Community 10 - "ServiceNow CMDB & Discovery"
Cohesion: 0.10
Nodes (23): Archive (ServiceNow), CMDB (Configuration Management Database), CMDB Health (3 C's), Discovery (ITOM), IRE (Identification Rules Engine), Reconciliation Engine, Service Mapping (ITOM Visibility), Part 4 Quiz: Database Management & Security (+15 more)

### Community 11 - "Azure Document Intelligence"
Cohesion: 0.11
Nodes (22): Azure Content Understanding, azure-ai-documentintelligence SDK, Azure Content Understanding, Content Understanding Analyzer, Analyzer Template, Field Schema, Content Understanding Keyframe Extraction, Content Understanding Modalities (+14 more)

### Community 12 - "Study Engine Architecture"
Cohesion: 0.10
Nodes (11): _celebrate(), CourseEngine, ExamCountdown, FlashcardEngine, initCompletionCheckbox(), PageHelpers, ProgressManager, QuizEngine (+3 more)

### Community 13 - "Flow Designer & Automation"
Cohesion: 0.18
Nodes (17): Action Type (Flow Designer), Ask for Approval (Flow Designer), Data Pills, Flow Anatomy, Flow Designer, Flow Trigger Types, Inbound Email Actions, IntegrationHub (+9 more)

### Community 14 - "Azure AI Search"
Cohesion: 0.16
Nodes (15): AI Search Data Source, AI Search Index, AI Search Indexer, AI Search Knowledge Store, AI Search Skillset, AzureOpenAIEmbeddingSkill, Azure AI Search Service, EntityRecognitionSkill (+7 more)

### Community 15 - "ServiceNow UI Navigation"
Cohesion: 0.18
Nodes (14): ServiceNow UI Navigation, Application Navigator, Connect Sidebar, .do Shortcut, Filter Navigator, ServiceNow Global Search, ServiceNow Impersonation, .list Shortcut (+6 more)

### Community 16 - "Azure Speech Services"
Cohesion: 0.18
Nodes (13): AudioConfig (Python SDK), Batch Transcription, Custom Speech Model, Neural Voice, Speaker Identification, Speaker Recognition, Speaker Verification, Topic 2 — Speech Services (+5 more)

### Community 17 - "Azure Video & Spatial Analysis"
Cohesion: 0.20
Nodes (10): Video Analysis & Spatial Analysis, Spatial Analysis, Spatial Analysis IoT Edge Deployment, Spatial Analysis Operations, Video Indexer Access Token, Video Indexer ARM-Connected Account, Video Indexer Insights, Video Indexer Trial Account (+2 more)

### Community 18 - "Azure Custom Vision"
Cohesion: 0.25
Nodes (9): azure-cognitiveservices-vision-customvision SDK, Bounding Box vs Bounding Polygon, Custom Vision Service, Custom Vision Image Classification, Custom Vision Object Detection, Custom Vision Metrics, CustomVisionPredictionClient, Custom Vision Retirement Warning (+1 more)

### Community 19 - "Knowledge Mining & Vision"
Cohesion: 0.29
Nodes (8): AI-102 Part 5: Knowledge Mining, Part 5 Quiz, Azure AI Search, Azure AI Document Intelligence, AI-102 Part 6: Computer Vision, Part 6 Quiz, Custom Vision Models, QuizEngine

### Community 20 - "CSA Navigation Study Materials"
Cohesion: 0.25
Nodes (7): Part 6 Flashcards, CSA Domain: Navigation (7%), CSA Part 1: Navigation, CSA Part 1 Flashcards, CSA Part 1 Quiz, FlashcardRatings, ProgressManager

### Community 21 - "Azure Vision & Face API"
Cohesion: 0.29
Nodes (7): Azure AI Vision Image Analysis, azure-ai-vision-face SDK, Prebuilt ID Document Model, Face API, Face API Limited Access, PersonGroup Workflow, Limited Access Policy

### Community 22 - "Azure Image Analysis SDK"
Cohesion: 0.50
Nodes (5): Azure AI Vision (Image Analysis 4.0), azure-ai-vision-imageanalysis SDK, Florence Foundation Model, OCR Read API, VisualFeatures Enum

### Community 23 - "CSA Exam Overview"
Cohesion: 0.40
Nodes (5): CSA Exam Domains, ServiceNow CSA Exam, ServiceNow CSA Study Hub, CSA Revision Center, ServiceNow Zurich Release

### Community 24 - "ServiceNow Core Tables"
Cohesion: 0.50
Nodes (4): change_request (table), incident (table), problem (table), task (table)

## Knowledge Gaps
- **215 isolated node(s):** `allow`, `TOPIC_REGISTRY`, `PARTS_META`, `PART_INDEX_FILES`, `ProgressManager` (+210 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Part 4 Index — Implement NLP Solutions` connect `Study Materials Hub` to `Azure Speech Services`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Part 3 Index — Implement an Agentic Solution` connect `Study Materials Hub` to `Azure AI Safety & Governance`, `Generative AI Concepts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `AI-102 Part 6: Computer Vision` connect `Knowledge Mining & Vision` to `Azure Video & Spatial Analysis`, `CSA Navigation Study Materials`, `Azure Vision & Face API`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `allow`, `TOPIC_REGISTRY`, `PARTS_META` to the rest of the system?**
  _218 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AI-102 Course Structure` be split into smaller, more focused modules?**
  _Cohesion score 0.05897435897435897 - nodes in this community are weakly interconnected._
- **Should `ServiceNow Security & Scripting` be split into smaller, more focused modules?**
  _Cohesion score 0.07957957957957958 - nodes in this community are weakly interconnected._
- **Should `Generative AI Concepts` be split into smaller, more focused modules?**
  _Cohesion score 0.07057057057057058 - nodes in this community are weakly interconnected._
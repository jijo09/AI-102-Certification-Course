/**
 * AI-102 Study Hub Central Data
 * Consolidates flashcards and topic metadata for the Revision Center.
 */

const STUDY_DATA = {
  parts: {
    p1: {
      id: 'p1',
      title: 'Plan & Manage an Azure AI Solution',
      color: '#38bdf8',
      icon: '⚙️',
      topics: {
        t1: { id: 't1', title: 'Select Foundry Services', icon: '🏗️' },
        t2: { id: 't2', title: 'Plan, Create & Deploy', icon: '🚀' },
        t3: { id: 't3', title: 'Security & Authentication', icon: '🔒' },
        t4: { id: 't4', title: 'Monitor & Manage', icon: '📈' },
        t5: { id: 't5', title: 'Responsible AI', icon: '⚖️' }
      }
    },
    p2: {
      id: 'p2',
      title: 'Implement Generative AI Solutions',
      color: '#a78bfa',
      icon: '🤖',
      topics: {
        t1: { id: 't1', title: 'Foundry & RAG', icon: '🏭' },
        t2: { id: 't2', title: 'Azure OpenAI', icon: '💡' },
        t3: { id: 't3', title: 'Optimize & Operationalize', icon: '⚡' }
      }
    },
    p3: {
      id: 'p3',
      title: 'Implement an Agentic Solution',
      color: '#fbbf24',
      icon: '🕵️',
      topics: {
        t1: { id: 't1', title: 'Custom Agents', icon: '🤖' }
      }
    },
    p4: {
      id: 'p4',
      title: 'Implement Natural Language Processing',
      color: '#34d399',
      icon: '💬',
      topics: {
        t1: { id: 't1', title: 'Analyze & Translate Text', icon: '📝' },
        t2: { id: 't2', title: 'Process & Translate Speech', icon: '🎙️' },
        t3: { id: 't3', title: 'Custom Language Models', icon: '🧩' }
      }
    },
    p5: {
      id: 'p5',
      title: 'Knowledge Mining & Info Extraction',
      color: '#f87171',
      icon: '🔍',
      topics: {
        t1: { id: 't1', title: 'Azure AI Search', icon: '🔍' },
        t2: { id: 't2', title: 'Document Intelligence', icon: '📄' },
        t3: { id: 't3', title: 'Content Understanding', icon: '🎛️' }
      }
    },
    p6: {
      id: 'p6',
      title: 'Implement Computer Vision Solutions',
      color: '#67e8f9',
      icon: '👁️',
      topics: {
        t1: { id: 't1', title: 'Analyze Images', icon: '🖼️' },
        t2: { id: 't2', title: 'Custom Vision Models', icon: '🎯' },
        t3: { id: 't3', title: 'Video Analysis', icon: '🎥' }
      }
    }
  },
  cards: [
    // ── PART 1 ──────────────────────────────────────────────────────────
    { p:'p1', t:'t1', term:'Subscription', def:'Your Azure account\'s billing container. Everything you create in Azure lives under a subscription, and all costs are charged to it.' },
    { p:'p1', t:'t1', term:'Resource Group', def:'A logical folder in Azure that holds related resources together. Deleting the resource group deletes everything inside it.' },
    { p:'p1', t:'t1', term:'Resource', def:'Any individual service you create in Azure — a Language service, Vision service, storage account, etc. Each has its own settings and costs.' },
    { p:'p1', t:'t1', term:'Endpoint', def:'A URL address your code sends requests to in order to use an Azure AI service. Format: https://your-name.cognitiveservices.azure.com/' },
    { p:'p1', t:'t1', term:'API Key', def:'A secret string that proves your code is authorised to call an Azure AI service. Azure gives you Key1 and Key2 to enable zero-downtime rotation.' },
    { p:'p1', t:'t1', term:'SDK', def:'Software Development Kit. A pre-built Python library (installed with pip) that makes calling Azure AI services much easier than raw HTTP requests.' },
    { p:'p1', t:'t1', term:'Microsoft Foundry', def:'The unified platform (portal at ai.azure.com and SDK) that brings together all Azure AI services. Previously called Azure AI Studio.' },
    { p:'p1', t:'t1', term:'F0 Tier', def:'The free pricing tier for Azure AI services. Zero cost but limited calls per minute/month, no private endpoints, only one per subscription per service.' },
    { p:'p1', t:'t1', term:'S0 Tier', def:'The standard paid pricing tier. Pay-per-call, no artificial rate limits, supports private endpoints, SLA guaranteed. Required for production.' },
    { p:'p1', t:'t1', term:'Form Recognizer', def:'The old name for Azure AI Document Intelligence. The exam uses both names. The pip package is still called azure-ai-formrecognizer.' },
    { p:'p1', t:'t1', term:'CLU — Conversational Language Understanding', def:'The replacement for LUIS (Language Understanding). Used to build models that understand user intents and extract entities from conversational text.' },
    { p:'p1', t:'t1', term:'Custom Question Answering', def:'The replacement for QnA Maker. Part of Azure AI Language. Build a knowledge base from FAQ documents and return best-matching answers to user questions.' },
    { p:'p1', t:'t1', term:'Azure AI Search Endpoint Pattern', def:'https://name.search.windows.net — different from other AI services which use cognitiveservices.azure.com. Azure OpenAI uses openai.azure.com.' },
    { p:'p1', t:'t1', type:'tip', term:'Multi-Service Resource', def:'Azure AI services "all-in-one" resource. One endpoint and one key for multiple services (Computer Vision, Language, etc.). Simplifies auth but consolidates all billing and does NOT support Azure OpenAI.' },

    { p:'p1', t:'t2', term:'Provisioning', def:'The act of creating and configuring an Azure resource so it\'s ready to use. "Provision an Azure AI resource" = create it and configure its settings.' },
    { p:'p1', t:'t2', term:'ARM Template', def:'Azure Resource Manager template. A JSON file describing Azure resources to create — like a blueprint. Enables consistent repeatable deployments.' },
    { p:'p1', t:'t2', term:'Bicep', def:'A simpler, more readable alternative to ARM JSON for writing infrastructure as code. Compiles to ARM JSON automatically.' },
    { p:'p1', t:'t2', term:'Environment Variable', def:'A value stored in the operating system (not in code) that Python reads with os.environ.get("NAME"). Used to store API keys securely outside source code.' },
    { p:'p1', t:'t2', term:'Container', def:'A lightweight portable package containing an app and everything it needs to run. Runs identically on your laptop, in Azure, or on an edge device.' },
    { p:'p1', t:'t2', term:'ACI — Azure Container Instances', def:'Simplest way to run a container in Azure. No cluster to manage. Best for testing, short-lived tasks, or low-traffic workloads. Manual scaling only.' },
    { p:'p1', t:'t2', term:'AKS — Azure Kubernetes Service', def:'Managed Kubernetes for running containers at scale. Automatic scaling, load balancing, self-healing. Best for production high-traffic workloads.' },
    { p:'p1', t:'t2', term:'Edge Deployment', def:'Running an AI model on a local device (camera, factory machine, IoT device) rather than in the cloud. Used when internet is unreliable or latency must be extremely low.' },
    { p:'p1', t:'t2', term:'Container Mandatory Params', def:'Azure AI service containers always require: Eula=accept, Billing=<endpoint>, ApiKey=<key>. Without these three the container will not start.' },
    { p:'p1', t:'t2', term:'text-embedding-ada-002', def:'The Azure OpenAI embedding model. Converts text into numerical vectors. Used in RAG patterns, semantic search, and similarity comparisons. Know this name.' },
    { p:'p1', t:'t2', term:'Deployment (OpenAI context)', def:'A named instance of a model hosted inside your Azure OpenAI resource. You create a deployment with a name (e.g. "my-gpt4o") and reference that name in code.' },
    { p:'p1', t:'t2', term:'Multi-region High Availability', def:'Deploying your Azure AI service to multiple regions. Use Azure Traffic Manager to route users to the nearest or healthiest regional endpoint.' },
    { p:'p1', t:'t2', type:'tip', term:'Container Billing', def:'Even when running on-premises, containers must have internet access to send billing data to Azure every few minutes. No customer data is sent — only usage metrics.' },

    { p:'p1', t:'t3', term:'Authentication', def:'Proving who you are. The "who are you?" check before Azure AI grants access. Four methods: API keys, Entra ID tokens, managed identity, service principal.' },
    { p:'p1', t:'t3', term:'Microsoft Entra ID', def:'New name for Azure Active Directory (Azure AD). Microsoft\'s cloud identity service managing users, groups, and application identities.' },
    { p:'p1', t:'t3', term:'Managed Identity', def:'An identity Azure automatically creates and manages for a resource. The resource uses it to authenticate to other Azure services — no credentials needed in code.' },
    { p:'p1', t:'t3', term:'System-Assigned Managed Identity', def:'Tied to one specific Azure resource. Automatically deleted when the resource is deleted. One resource = one identity. Simpler to set up.' },
    { p:'p1', t:'t3', term:'User-Assigned Managed Identity', def:'Exists independently of any single resource. Can be assigned to multiple resources simultaneously. Survives resource deletion. Best when multiple resources share one identity.' },
    { p:'p1', t:'t3', term:'Service Principal', def:'An application identity in Microsoft Entra ID used when code runs outside Azure (GitHub Actions, developer laptop, on-premises). Identified by tenant ID, client ID, and client secret.' },
    { p:'p1', t:'t3', term:'DefaultAzureCredential', def:'A Python credential class from azure-identity that tries multiple auth methods in order: environment variables → managed identity → Azure CLI. Works in both dev and production.' },
    { p:'p1', t:'t3', term:'RBAC — Role-Based Access Control', def:'Azure\'s permission system. Assigns a role (set of permissions) to a principal (user/identity) at a scope (subscription/resource group/resource).' },
    { p:'p1', t:'t3', term:'Cognitive Services User Role', def:'The minimum RBAC role needed to call Azure AI service endpoints. Owner and Contributor do NOT grant endpoint access — this role is required separately.' },
    { p:'p1', t:'t3', term:'Azure Key Vault', def:'A secure cloud service for storing secrets (API keys), keys (encryption keys), and certificates. Use managed identity to access it — no credentials to store.' },
    { p:'p1', t:'t3', term:'Private Endpoint', def:'Connects an Azure AI resource to your private VNet, removing it from the public internet. Requires S0 tier. Speech service also needs a custom subdomain first.' },
    { p:'p1', t:'t3', term:'Customer-Managed Keys (CMK)', def:'Using your own encryption keys (stored in Key Vault) to encrypt Azure AI service data, instead of Microsoft-managed keys. Requires Soft Delete + Purge Protection enabled.' },
    { p:'p1', t:'t3', term:'Key Rotation — Zero Downtime', def:'Switch apps to Key2 → regenerate Key1 → switch apps back to Key1. Azure gives two keys specifically to enable this without any service interruption.' },
    { p:'p1', t:'t3', type:'tip', term:'Owner Trap', def:'Being an "Owner" of an Azure AI resource allows you to delete it, but does NOT allow you to call its API. You still need the "Cognitive Services User" role or an API key.' },

    { p:'p1', t:'t4', term:'Azure Monitor', def:'Microsoft\'s central monitoring platform. Collects metrics (numbers) and logs (event records) from Azure resources. The health dashboard for your Azure environment.' },
    { p:'p1', t:'t4', term:'Application Insights', def:'Azure Monitor feature for application-level monitoring. Tracks exceptions, custom events, and performance inside your Python application code — not just infrastructure.' },
    { p:'p1', t:'t4', term:'Diagnostic Settings', def:'Configuration on an Azure resource that routes its logs to a destination: Log Analytics workspace (for querying), Storage Account (for archiving), or Event Hub (for streaming).' },
    { p:'p1', t:'t4', term:'Log Analytics Workspace', def:'Storage and query service for Azure logs. Query with KQL. Best destination for logs you need to analyse and alert on. Default retention: 30 days.' },
    { p:'p1', t:'t4', term:'KQL — Kusto Query Language', def:'Query language for Log Analytics. Uses pipes (|) to chain operators: table | where condition | project columns | summarize | order by. Different from SQL.' },
    { p:'p1', t:'t4', term:'Alert Rule', def:'Watches a metric or log condition 24/7. Triggers an action group when a threshold is exceeded. Severity: 0=Critical, 1=Error, 2=Warning, 3=Info, 4=Verbose.' },
    { p:'p1', t:'t4', term:'Action Group', def:'A collection of notification targets triggered when an alert fires: email, SMS, webhook, Logic App. One action group reused across multiple alert rules.' },
    { p:'p1', t:'t4', term:'Azure Cost Management Budget', def:'A spending limit that triggers email notifications when thresholds (e.g. 80%, 100%) are reached. Does NOT stop services — only sends notifications.' },
    { p:'p1', t:'t4', term:'HTTP 429', def:'Too Many Requests. Returned when you exceed the quota (transactions per minute limit) for an Azure AI service. Monitor Client Errors metric to detect this.' },

    { p:'p1', t:'t5', term:'Fairness (RAI Principle)', def:'AI systems must treat all people equally regardless of age, gender, race, religion, or other protected characteristics. Biased outcomes that discriminate = Fairness violation.' },
    { p:'p1', t:'t5', term:'Reliability & Safety (RAI Principle)', def:'AI systems must work correctly, consistently, and fail safely. A system that gives inconsistent results or fails silently in critical situations = Reliability & Safety violation.' },
    { p:'p1', t:'t5', term:'Privacy & Security (RAI Principle)', def:'AI systems must protect user data and personal information. Using private data without consent, or systems that leak PII = Privacy & Security violation.' },
    { p:'p1', t:'t5', term:'Inclusiveness (RAI Principle)', def:'AI must benefit everyone including marginalised groups, people with disabilities, and diverse linguistic backgrounds. Lower accuracy for certain accents = Inclusiveness violation.' },
    { p:'p1', t:'t5', term:'Transparency (RAI Principle)', def:'AI systems must be understandable and disclose that they are AI. Black-box decisions with no explanation, or AI pretending to be human = Transparency violation.' },
    { p:'p1', t:'t5', term:'Accountability (RAI Principle)', def:'Humans must remain responsible for AI systems. Automated AI with no human oversight, no appeal process, or blaming "the algorithm" for harm = Accountability violation.' },
    { p:'p1', t:'t5', term:'Content Safety Severity Scale', def:'0 = Safe, 2 = Low, 4 = Medium, 6 = High. Four harm categories: Hate, Sexual, Violence, Self-Harm. Content at or above your threshold is blocked.' },
    { p:'p1', t:'t5', term:'Prompt Shield — Jailbreak', def:'Detects user prompt attacks where someone tries to override the model\'s system instructions. E.g. "Ignore previous instructions and..." Detected by Prompt Shields.' },
    { p:'p1', t:'t5', term:'Prompt Shield — Indirect Injection', def:'Detects malicious instructions hidden inside documents the model processes. Also called a Document Attack. Common in RAG systems processing external content.' },

    // ── PART 2 ──────────────────────────────────────────────────────────
    { p:'p2', t:'t1', term:'Generative AI', def:'AI that creates new content — text, images, audio, code — by predicting the most likely next tokens. GPT-4o is generative AI. It does not retrieve facts — it generates likely text based on learned patterns.' },
    { p:'p2', t:'t1', term:'LLM — Large Language Model', def:'An AI model trained on massive text data that can generate coherent, contextually relevant text. GPT-4o and GPT-3.5-turbo are LLMs. They predict likely next tokens — they do not "know" facts.' },
    { p:'p2', t:'t1', term:'Token', def:'The basic unit an LLM processes. Roughly 4 characters or ¾ of a word. Costs are billed per token. Models have a maximum context window measured in tokens (input + output combined).' },
    { p:'p2', t:'t1', term:'Context Window', def:'The maximum total tokens an LLM can process in one API call — input (prompt + history) plus output (response). GPT-4o supports up to 128,000 tokens. Exceeding it causes an error.' },
    { p:'p2', t:'t1', term:'Hallucination', def:'When an LLM confidently generates factually incorrect or made-up information. LLMs predict likely text, they do not verify facts. RAG (grounding in real documents) is the primary mitigation.' },
    { p:'p2', t:'t1', term:'Grounding', def:'Providing an LLM with specific verified information in the prompt so its response is based on real data, not training knowledge. Reduces hallucination. RAG is the standard grounding technique.' },
    { p:'p2', t:'t1', term:'RAG — Retrieval-Augmented Generation', def:'A pattern where relevant documents are retrieved from a vector index and included in the prompt before calling the LLM. The model generates answers grounded in retrieved documents, not its training data.' },
    { p:'p2', t:'t1', term:'Embedding', def:'A numerical vector representation of text. Similar text produces similar vectors. Enables semantic search — finding documents whose meaning is similar to a query, even without matching keywords.' },
    { p:'p2', t:'t1', term:'Chunking', def:'Splitting large documents into smaller pieces (chunks) before embedding. Typically 256–1,024 tokens per chunk. Necessary because LLMs have context windows and retrieval works better on focused text.' },
    { p:'p2', t:'t1', type:'tip', term:'Tokens != Words', def:'A token is not always a full word. Short common words are 1 token; long unusual words are 3+ tokens. 1,000 tokens ≈ 750 words. The exam tests this conversion.' },

    { p:'p2', t:'t2', term:'Chat Completion', def:'The primary Azure OpenAI API. Send a list of messages (conversation history with roles) and the model generates the next response. Used for all GPT-4o and GPT-3.5-turbo interactions.' },
    { p:'p2', t:'t2', term:'System Role', def:'A message with role="system" that sets the model\'s behaviour, persona, and constraints before any user interaction. The developer writes this — users never see it. Most powerful way to control the model.' },
    { p:'p2', t:'t2', term:'User Role', def:'A message with role="user" representing what the human said. In multi-turn conversations there are multiple user messages alternating with assistant messages.' },
    { p:'p2', t:'t2', term:'Assistant Role', def:'A message with role="assistant" representing what the AI previously said. Must be included in the messages array for multi-turn conversations — without it the model has no memory of previous turns.' },
    { p:'p2', t:'t2', term:'Messages Array', def:'The full list of messages sent to the Chat Completions API — system + all previous user messages + all previous assistant responses + the new user message. Must include full history for multi-turn context.' },
    { p:'p2', t:'t2', term:'Deployment Name vs Model Name', def:'The model parameter in Python always takes the DEPLOYMENT NAME (the name you gave it in Foundry, e.g. "my-gpt4o"), not the model name ("gpt-4o"). Using the model name causes a 404 error.' },
    { p:'p2', t:'t2', term:'api_version (Azure OpenAI)', def:'Always required in Azure OpenAI calls — e.g. "2024-02-01". Ensures your code doesn\'t break as Azure updates its API. Missing api_version causes errors. Always specify explicitly.' },
    { p:'p2', t:'t2', term:'DALL-E 3', def:'Azure OpenAI model for generating images from text prompts. Always n=1 (one image per request). Image URLs are TEMPORARY — download immediately. Sizes: 1024x1024, 1792x1024, 1024x1792.' },
    { p:'p2', t:'t2', term:'Whisper', def:'OpenAI speech-to-text model in Azure OpenAI. Transcribes audio files to text. Supports 57 languages. Use for high-accuracy transcription. For real-time streaming or custom vocabulary — use Azure AI Speech instead.' },
    { p:'p2', t:'t2', type:'tip', term:'OpenAI Endpoint', def:'https://YOUR_NAME.openai.azure.com — Note the .openai domain. This distinguishes it from standard AI services (.cognitiveservices). Recognition of this URL is a common exam point.' },

    { p:'p2', t:'t3', term:'Temperature', def:'Controls randomness of output. 0.0 = fully deterministic (same prompt → same answer). 2.0 = very random. Low (0–0.3) for factual tasks. High (0.8–1.5) for creative tasks. Do NOT use with top_p simultaneously.' },
    { p:'p2', t:'t3', term:'top_p', def:'Alternative to temperature. Limits generation to tokens in the top P% of probability mass. 0.1 = very focused. 1.0 = all tokens. Use EITHER top_p OR temperature, not both at the same time.' },
    { p:'p2', t:'t3', term:'Fine-Tuning', def:'Training a pre-existing model on your own dataset to teach it a specific style, format, or behaviour. Changes model weights permanently. Does NOT eliminate hallucination. Use RAG for factual accuracy, fine-tuning for style.' },
    { p:'p2', t:'t3', term:'Chain-of-Thought (CoT)', def:'Add "Think step by step" or "Show your working" to the prompt. The model externalises its reasoning before giving a final answer. Dramatically improves accuracy on logic and multi-step tasks.' },

    // ── PART 3 ──────────────────────────────────────────────────────────
    { p:'p3', t:'t1', term:'AI Agent', def:'AI system that autonomously plans and executes multi-step tasks. Reasons about steps, uses tools to take actions, evaluates results, and loops until goal is achieved.' },
    { p:'p3', t:'t1', term:'Agentic Loop (ReAct)', def:'Reason → Act → Observe → repeat. Ask "what next?" → call a tool → process result → reason again. Loops until task is complete.' },
    { p:'p3', t:'t1', term:'Tool (Agent Tool)', def:'Capability the agent can invoke: web search, code execution, database query, email. Tools let agents act on the world, not just reason.' },
    { p:'p3', t:'t1', term:'Function Calling', def:'GPT-4o capability to output a structured JSON request to call a specific function instead of plain text. Your code executes the function, returns result to LLM.' },
    { p:'p3', t:'t1', term:'Azure AI Agent Service', def:"Microsoft's managed agent runtime in Foundry. Define agent + tools, interact via threads and runs. Azure manages the agentic loop." },

    // ── PART 4 ──────────────────────────────────────────────────────────
    { p:'p4', t:'t1', term:'Sentiment Analysis', def:'Determines whether text is positive/negative/neutral/mixed. Returns document-level and sentence-level confidence scores.' },
    { p:'p4', t:'t1', term:'NER — Named Entity Recognition', def:'Identifies and categorises real-world objects in text: Person, Location, Organisation, DateTime, and phone numbers.' },
    { p:'p4', t:'t1', term:'PII Detection', def:'Finds and redacts personally identifiable information: names, emails, phones, credit cards, SSNs, and addresses.' },
    { p:'p4', t:'t1', term:'Transliteration', def:'Converts text from one script to another (e.g. Latin to Cyrillic) without translating the meaning of the words.' },
    { p:'p4', t:'t1', type:'tip', term:'Translator Endpoint', def:'https://api.cognitive.microsofttranslator.com — This is a GLOBAL (regional) endpoint. Unlike other services, you don\'t create a custom name (no your-name.translator).' },

    { p:'p4', t:'t2', term:'Speech-to-Text (STT)', def:'Converts spoken audio to written text. Supports real-time streaming and asynchronous batch transcription of large files.' },
    { p:'p4', t:'t2', term:'Text-to-Speech (TTS)', def:'Converts text to natural-sounding spoken audio using neural voices. Can be customized with SSML.' },
    { p:'p4', t:'t2', term:'SSML', def:'Speech Synthesis Markup Language. XML-based markup controlling TTS output: voice selection, prosody (pitch/rate), and emphasis.' },
    { p:'p4', t:'t2', term:'Speaker Verification', def:'Verifies that a voice matches a previously enrolled voice profile. "Is this the person they claim to be?" used for voice biometric auth.' },

    // ── PART 5 ──────────────────────────────────────────────────────────
    { p:'p5', t:'t1', term:'Index (AI Search)', def:'A searchable container of documents in Azure AI Search — like a database table optimised for full-text search.' },
    { p:'p5', t:'t1', term:'Indexer', def:'The automated crawler that reads data from a data source, enriches it with AI skills, and writes it to the search index.' },
    { p:'p5', t:'t1', term:'Skillset', def:'A pipeline of AI enrichment skills (OCR, Entity extraction) applied to documents during the indexing process.' },
    { p:'p5', t:'t1', term:'OcrSkill + MergeSkill', def:'Essential combo: OcrSkill extracts text from images; MergeSkill joins it back with the document text so it\'s all searchable together.' },
    { p:'p5', t:'t1', type:'tip', term:'Semantic Ranking', def:'A secondary re-ranking layer that uses an LLM to re-score search results based on real semantic relevance. Improves "relevance" significantly over simple keyword matching.' },

    { p:'p5', t:'t2', term:'Document Intelligence', def:'Service (formerly Form Recognizer) that extracts structured fields, tables, and key-value pairs from documents (invoices, receipts).' },
    { p:'p5', t:'t2', term:'Prebuilt Models', def:'Ready-to-use models trained by Microsoft for standard docs (Invoice, Receipt, ID Document, Business Card) — no training required.' },
    { p:'p5', t:'t2', term:'Composed Model', def:'A single model built by combining multiple custom models. Automatically routes an incoming document to the best matching sub-model.' },
    { p:'p5', t:'t2', type:'tip', term:'pip package', def:'The Python SDK package is still called "azure-ai-formrecognizer", even though the service was renamed to Document Intelligence.' },

    // ── PART 6 ──────────────────────────────────────────────────────────
    { p:'p6', t:'t1', term:'OCR — Optical Character Recognition', def:'The technical capability to read printed or handwritten text from images and multi-page documents. Read API is the standard tool.' },
    { p:'p6', t:'t1', term:'Object Detection', def:'Identifying what items are in an image AND where they are (providing bounding box coordinates x, y, width, height).' },
    { p:'p6', t:'t1', term:'Image Classification', def:'Assigning a label to an entire image ("Cat", "Dog"). Does NOT provide location info — just tells you the global content category.' },
    { p:'p6', t:'t1', type:'tip', term:'Face API Approval', def:'Face identification (biometric matching) requires Microsoft Limited Access approval. Simple face detection (detecting a face exists) does NOT require approval.' },

    { p:'p6', t:'t3', term:'Azure AI Video Indexer', def:'Service that extracts deep insights from video: transcripts, faces, keywords, brands, visual text, and even sentiment/emotions.' },
    { p:'p6', t:'t3', term:'Spatial Analysis (Vision)', def:'Uses real-time camera feeds to track people movement, count people in zones, and measure distances at the edge (on local hardware).' },
    { p:'p6', t:'t3', type:'tip', term:'ARM Account', def:'An ARM-connected Video Indexer account is required for production, as it uses your own Azure Storage and supports unlimited video volume.' },
  ],

  // ── SECTION SUMMARIES ────────────────────────────────────────────────────
  // Items prefixed [TRAP] render as amber exam-trap callouts in the recap panel.
  summaries: {
    'p1_t1': [
      'Endpoint pattern: <code>https://&lt;name&gt;.cognitiveservices.azure.com/</code> — found under Keys and Endpoint in portal',
      '[TRAP] Old name traps: Form Recognizer → Doc Intelligence | LUIS → CLU | QnA Maker → Custom QA | Text Analytics → AI Language | Cognitive Search → AI Search | Azure AI Studio → Foundry. Exam uses BOTH names.',
      'Foundry portal <code>ai.azure.com</code> = models, prompts, deployments | Azure portal <code>portal.azure.com</code> = infra, RBAC, billing, networking',
      'Foundry hierarchy: Hub → Project → Services (top to bottom)',
      'Decision by input type: image → Vision | audio → Speech | doc with fields/tables → Doc Intelligence | generate text → OpenAI | search large corpus → AI Search | video insights → Video Indexer',
      '[TRAP] CLU vs Custom QA: CLU understands commands and intents ("Book a flight"). Custom QA answers factual questions from a knowledge base ("What are your hours?"). Completely different services.',
      'F0 = free, limited calls, NO private endpoints, 1 per subscription per service. S0 = paid, private endpoints supported, SLA guaranteed.',
      'Azure OpenAI vs public OpenAI: same GPT models, but Azure keeps data in your tenant with RBAC and compliance guarantees.'
    ],
    'p1_t2': [
      '[TRAP] Doc Intelligence pip package is still <code>pip install azure-ai-formrecognizer</code> — old name persists despite service rename to Document Intelligence.',
      'SDK packages: Language = <code>azure-ai-textanalytics</code> | Vision = <code>azure-ai-vision-imageanalysis</code> | Speech = <code>azure-cognitiveservices-speech</code> | OpenAI = <code>openai</code> (import AzureOpenAI) | Search = <code>azure-search-documents</code> | Identity = <code>azure-identity</code>',
      '[TRAP] Container mandatory params — ALL required even when running completely offline: <code>Eula=accept</code>, <code>Billing=&lt;endpoint&gt;</code>, <code>ApiKey=&lt;key&gt;</code>. Container will NOT start without all three.',
      'Embedding model name: <code>text-embedding-ada-002</code> — for RAG pipelines, semantic search, and similarity comparisons.',
      'Deployment options: ACI = dev/test, manual scaling | AKS = production, auto-scale + self-heal | Edge = no internet, IoT/factory floor',
      'Endpoint domains: OpenAI → <code>.openai.azure.com</code> | AI Search → <code>.search.windows.net</code> | Everything else → <code>.cognitiveservices.azure.com</code>',
      'Azure Traffic Manager + active-active multi-region = high availability pattern for AI services',
      'ARM template = JSON infrastructure blueprint | Bicep = cleaner DSL that compiles to ARM JSON automatically'
    ],
    'p1_t3': [
      '3 security layers: Authentication (who you are) → RBAC (what you can do) → Network (where you connect from)',
      '[TRAP] Owner and Contributor roles do NOT grant API endpoint access. You must separately assign <code>Cognitive Services User</code> role to call the AI service endpoint.',
      'Auth method choice: Managed Identity = Azure-to-Azure (no credentials in code) | Service Principal = outside Azure (CI/CD, GitHub Actions, on-prem) | API Key = simple dev/testing',
      'System-assigned MI = tied to one resource, auto-deleted when resource is deleted | User-assigned MI = independent, shareable across multiple resources simultaneously',
      '<code>DefaultAzureCredential</code> tries in order: environment variables → managed identity → Azure CLI. Works in both dev (CLI) and production (managed identity).',
      '[TRAP] Private endpoint requires S0 tier (F0 blocked). Speech service additionally requires custom subdomain enabled BEFORE creating private endpoint — unique to Speech.',
      'Key rotation zero-downtime procedure: switch apps to Key2 → regenerate Key1 → switch apps back to Key1',
      '[TRAP] Customer-Managed Keys (CMK): Key Vault must have Soft Delete AND Purge Protection ENABLED — the exam often says "disable" as a wrong answer trap.',
      '<code>{"keyName": "Key2"}</code> in regenerateKey API = resets Key2 only. Key1 is completely untouched.'
    ],
    'p1_t4': [
      '[TRAP] Metrics are collected automatically. Logs are NOT stored by default — you must configure Diagnostic Settings to route them to a destination.',
      'Log destinations: Log Analytics Workspace = KQL queries and alerting | Storage Account = cheap long-term archive (rarely queried) | Event Hub = stream to Splunk/SIEM/external systems',
      'KQL pattern: <code>AzureDiagnostics | where TimeGenerated > ago(24h) | where ResourceProvider == "MICROSOFT.COGNITIVESERVICES" | where ResultType == "Failed" | order by TimeGenerated desc</code>',
      'Alert severity: 0 = Critical, 1 = Error, 2 = Warning, 3 = Informational, 4 = Verbose. Lower number = higher severity.',
      '[TRAP] Azure Cost Management budgets send email notifications ONLY — services NEVER stop automatically when budget is hit. Overspending continues.',
      'Azure Monitor = service-level metrics (total calls, latency, error counts) | Application Insights = inside-app tracking (exceptions, custom events, user flows in your Python code)',
      'HTTP 429 = rate limit exceeded (quota hit). Monitor Client Errors metric. Request quota increase in portal if consistently hitting this.',
      'Default Log Analytics retention = 30 days. Extend to up to 730 days (extra cost) for compliance requirements.'
    ],
    'p1_t5': [
      '6 RAI principles — memorise all by name: Fairness · Reliability & Safety · Inclusiveness · Privacy & Security · Accountability · Transparency',
      '[TRAP] Fairness ≠ Inclusiveness: Fairness = equal treatment, no discrimination based on protected characteristics. Inclusiveness = actively designing for marginalised groups, disabilities, diverse backgrounds. Related but different.',
      'Content Safety severity: 0 (safe) | 2 (low) | 4 (medium) | 6 (high) — even numbers ONLY. Four harm categories: Hate, Sexual, Violence, Self-Harm.',
      '[TRAP] Azure OpenAI content filters apply to BOTH input (user prompt) and output (model response), and CANNOT be fully disabled — only thresholds adjusted.',
      'Three safety mechanisms: Content Filter = automatic severity scoring per category | Blocklist = exact term blocking (competitor names, specific words) | Prompt Shield = attack detection',
      'Prompt Shield types: Type 1 = jailbreak (user prompt tries to override system instructions) | Type 2 = indirect injection (malicious instructions hidden inside a document the model reads)',
      'Transparency = disclose it is AI, explain decisions. Accountability = humans responsible, human oversight, appeal process must exist.'
    ],

    'p2_t1': [
      '[TRAP] 1,000 tokens ≈ 750 words — tokens are NOT words. Roughly 4 characters per token. All costs billed per token, not per word or character.',
      'RAG pipeline steps: 1) Chunk documents (256–1024 tokens each) 2) Embed chunks → store in vector index 3) Embed user query 4) Find similar chunks 5) Add chunks to prompt 6) LLM generates grounded answer',
      'Grounding = inserting verified real documents into the prompt before calling the LLM. Reduces hallucination by giving the model facts to reference.',
      'Embedding model for Azure OpenAI: <code>text-embedding-ada-002</code> — converts text to numerical vectors that capture semantic meaning.',
      'LLMs predict likely next tokens based on training patterns — they do NOT retrieve facts, have internet access, or know current events. All outputs are probabilistic.',
      'Context window = total tokens per single API call (prompt + output combined). GPT-4o = 128K tokens max. Exceeding it causes an error.',
      'Hallucination mitigation: RAG grounds the model in real documents. Fine-tuning does NOT fix hallucination — it only teaches style.'
    ],
    'p2_t2': [
      '[TRAP] The <code>model</code> parameter must be your DEPLOYMENT NAME (e.g. "my-gpt4o"), NOT the actual model name ("gpt-4o"). Using the model name causes a 404 error.',
      'Always specify <code>api_version</code> (e.g. "2024-02-01") in every Azure OpenAI call. Missing it causes errors.',
      'Endpoint domain: <code>https://&lt;name&gt;.openai.azure.com/</code> — note <code>.openai</code> not <code>.cognitiveservices</code>.',
      'Message roles: <strong>system</strong> = developer instructions (user never sees) | <strong>user</strong> = human turn | <strong>assistant</strong> = AI previous response',
      '[TRAP] Multi-turn conversations: you MUST include the full message history (all previous user + assistant turns) in every API call — the model has NO memory between separate calls.',
      'DALL-E 3: always n=1 per request. Image URLs are TEMPORARY — download immediately or they expire.',
      'DALL-E 3 image sizes: 1024×1024 (square) | 1792×1024 (landscape) | 1024×1792 (portrait)',
      'Whisper = high-accuracy batch transcription of audio files (57 languages) | Azure AI Speech = real-time streaming + custom vocabulary + speaker recognition'
    ],
    'p2_t3': [
      'Temperature: 0.0 = fully deterministic | 2.0 = very random/creative. Use low (0–0.3) for factual tasks, high (0.8–1.5) for creative writing.',
      '[TRAP] Never set both <code>temperature</code> AND <code>top_p</code> simultaneously — they conflict. Use one or the other.',
      'Fine-tuning = trains a model on your data to learn a specific style, format, or persona. Does NOT eliminate hallucination or teach new facts.',
      'RAG = factual accuracy (anchor in real documents) | Fine-tuning = consistent style/format/voice. Know when to use which.',
      'Chain-of-Thought (CoT): add "Think step by step" to prompt → model externalizes reasoning before answering → dramatically better accuracy on logic, math, and multi-step tasks.'
    ],

    'p3_t1': [
      'Agentic loop (ReAct pattern): Reason ("what should I do next?") → Act (call a tool) → Observe (read result) → Reason again → Repeat until goal achieved',
      'Function calling: model outputs structured JSON describing which function to call and with what arguments. YOUR code runs the function and returns result to the model.',
      'AI Agent Service in Foundry: define agent + tools → create thread → create run → Azure manages the loop. You define, Azure executes.',
      '[TRAP] Agent vs single LLM call: LLM = one request, one response. Agent = autonomous multi-step loop that uses tools to complete complex goals across multiple turns.',
      'Tool types agents can use: web search, code execution, file I/O, database query, email, calendar — tools let agents ACT on the world, not just reason about it.'
    ],

    'p4_t1': [
      'Azure AI Language SDK: <code>pip install azure-ai-textanalytics</code> | import <code>TextAnalyticsClient</code> from <code>azure.ai.textanalytics</code>',
      '[TRAP] Translator endpoint is GLOBAL and fixed: <code>https://api.cognitive.microsofttranslator.com</code> — NO custom subdomain, unlike every other Azure AI service.',
      'Translate TEXT → Azure AI Translator | Translate SPOKEN AUDIO → Azure AI Speech (has translation built in, do NOT use Translator for audio).',
      '[TRAP] CLU vs Custom QA: CLU understands commands and intents ("Turn on lights in kitchen"). Custom QA answers factual questions from a document knowledge base ("What are your hours?").',
      'Sentiment analysis: returns positive/negative/neutral/mixed at both document level AND sentence level with confidence scores.',
      'NER entity categories: Person, Location, Organization, DateTime, Quantity, URL, email, phone number.',
      'PII detection identifies AND can redact: names, emails, addresses, phone numbers, SSNs, credit card numbers.'
    ],
    'p4_t2': [
      'Speech SDK: <code>pip install azure-cognitiveservices-speech</code> | import as <code>import azure.cognitiveservices.speech as speechsdk</code>',
      'SSML (Speech Synthesis Markup Language) = XML markup controlling TTS output: voice selection, pitch, speaking rate, pauses, word emphasis.',
      'STT modes: real-time continuous recognition (streaming) AND batch transcription (upload large audio files asynchronously).',
      'Speaker Verification = confirms a voice sample matches an enrolled voice profile ("is this the same person as the enrolled user?").',
      '[TRAP] Speech service requires a custom subdomain enabled BEFORE creating a private endpoint. No other Azure AI service has this prerequisite.',
      'Speech + intent: use Azure AI Speech to transcribe audio → then pass transcribed text to Azure AI Language CLU to extract intent and entities.'
    ],
    'p4_t3': [
      'Custom NER: label your own entity types in training documents (e.g. product codes, internal department names) — for domains not covered by standard NER.',
      'Custom Text Classification: single-label (one category per document) or multi-label (document can belong to multiple categories).',
      'CLU (Conversational Language Understanding): label utterances with intents + entity slots. Replaces LUIS. Train on your specific command patterns.',
      'Custom QA: import FAQ document or URL → system builds knowledge base → matches user questions to best answers. Replaces QnA Maker.',
      'All custom language capabilities (CLU, Custom QA, Custom NER, Custom Classification) are part of the same Azure AI Language resource.'
    ],

    'p5_t1': [
      'AI Search endpoint domain: <code>https://&lt;name&gt;.search.windows.net</code> — different from <code>.cognitiveservices.azure.com</code>.',
      'Indexing pipeline: Data Source → Indexer (crawls data) → Skillset (AI enrichment: OCR, NER, translation) → Search Index → Query',
      '[TRAP] OcrSkill + MergeSkill: OcrSkill extracts text from embedded images. MergeSkill joins it back into the parent document. BOTH are needed to make image text searchable.',
      'Semantic ranking = second-pass LLM re-scoring of initial keyword/vector results for true semantic relevance. Improves result quality significantly.',
      '[TRAP] AI Search vs Doc Intelligence: Search = make content findable and queryable across a corpus. Doc Intelligence = extract structured named fields from individual documents. Different tools, different purposes.',
      'Vector search: store text embeddings as vectors in the index. Query by embedding the user\'s question and finding nearest (most similar) vectors.'
    ],
    'p5_t2': [
      '[TRAP] SDK package: <code>pip install azure-ai-formrecognizer</code> (old service name). Import class: <code>DocumentAnalysisClient</code>.',
      'Prebuilt models require no training: Invoice, Receipt, ID Document, Business Card, W2, Tax Form — Microsoft trained these on millions of real documents.',
      'Custom model: label minimum examples per document type in Document Intelligence Studio → train → model learns YOUR specific field layout.',
      'Composed model: combine multiple custom models into one → incoming document is automatically routed to the best-matching sub-model.',
      '[TRAP] Doc Intelligence vs AI Vision OCR: Doc Intelligence understands document structure and extracts named fields (VendorName, Total, Date). OCR just extracts raw text without understanding what any of it means.'
    ],
    'p5_t3': [
      'Content Understanding = new 2024 service for unified multimodal pipelines. Processes documents, images, video, and audio in a single workflow.',
      'More flexible than Document Intelligence when you need to analyze mixed content types together (e.g. a PDF with embedded images and a linked video).',
      'Use Content Understanding when the scenario describes processing multiple media types in one pipeline. Use Doc Intelligence when the scenario is specifically about extracting fields from forms/documents.'
    ],

    'p6_t1': [
      'Vision SDK: <code>pip install azure-ai-vision-imageanalysis</code> | import <code>ImageAnalysisClient</code> from <code>azure.ai.vision.imageanalysis</code>',
      '[TRAP] Face API approval: biometric MATCHING and IDENTIFICATION requires Microsoft Limited Access approval. Simple face DETECTION (does a face exist in this image?) does NOT require approval.',
      'OCR = extracts text from images and documents | Object Detection = identifies objects AND their locations (returns bounding box x, y, width, height) | Image Classification = identifies what category the whole image is (no location)',
      '[TRAP] Azure AI Vision vs Custom Vision: Vision = prebuilt general-purpose models (no training). Custom Vision = YOU provide labeled training images to train for YOUR specific objects or categories.',
      'Vision Studio full feature set (including certain vision models) requires East US 2 or West US 2 region.'
    ],
    'p6_t2': [
      'Image Classification training: label entire images with class tags. Single-label = one tag per image. Multi-label = image can have multiple tags.',
      'Object Detection training: draw bounding box regions on training images and label each region. Model learns to locate AND classify.',
      'Minimum images per tag required before training begins (Vision Studio enforces this threshold before enabling training).',
      'Export trained models for edge deployment: ONNX (Windows ML), CoreML (iOS), TensorFlow/TensorFlow Lite (Android), Docker container.',
      'Custom Vision portal: accessible at customvision.ai or through the Azure AI Foundry portal.'
    ],
    'p6_t3': [
      '[TRAP] Video Indexer vs Spatial Analysis: Video Indexer = process RECORDED video files for deep insights (transcripts, faces, keywords, brands, emotions). Spatial Analysis = REAL-TIME camera feeds (people counting, zone entry, distance measurement at edge).',
      '[TRAP] ARM-connected account required for production Video Indexer. Uses your own Azure Storage, supports unlimited video. Trial account has strict volume limits.',
      'Video Indexer extracts from video: transcript, speaker identities, keyframes, visual text (OCR), brands mentioned, topics, emotions, face thumbnails.',
      'Spatial Analysis runs AT THE EDGE — processes live camera feeds locally on edge hardware with very low latency. Does not require cloud round-trip per frame.'
    ]
  }
};

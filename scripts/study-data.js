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
    { p:'p2', t:'t1', term:'Prompt Engineering', def:"The practice of crafting clear, specific inputs to guide LLM output quality. Techniques: zero-shot, few-shot, chain-of-thought, persona assignment, and structured output format instructions." },
    { p:'p2', t:'t1', term:'Zero-shot Prompting', def:"Asking the LLM to perform a task with NO examples in the prompt. The model relies entirely on its training knowledge. Works for common tasks; less reliable for specialised or novel output formats." },
    { p:'p2', t:'t1', term:'Few-shot Prompting', def:'Including 2–5 input → output examples in the prompt before the actual question. The model learns the desired format from the examples. Dramatically improves output quality for custom or unusual formats.' },
    { p:'p2', t:'t1', term:'Vector Store (RAG)', def:"A database optimised for storing and searching high-dimensional embedding vectors. Enables semantic nearest-neighbour retrieval. Azure AI Search is the primary vector store for Azure RAG pipelines." },
    { p:'p2', t:'t1', term:'Cosine Similarity', def:'The metric measuring how similar two embedding vectors are. Ranges from -1 (opposite) to 1 (identical). Score near 1.0 = very similar meaning. Used to rank which retrieved chunks are most relevant to the user query.' },
    { p:'p2', t:'t2', term:'max_tokens / max_completion_tokens', def:"Maximum tokens the model may generate in its response. If the limit is hit, output stops mid-sentence. Controls cost and prevents runaway responses. Does NOT affect input token counting." },
    { p:'p2', t:'t2', term:'Streaming (stream=True)', def:"Returns the model's response token-by-token as it generates instead of waiting for the full completion. Reduces perceived latency in chat UIs. Each chunk is delivered as a server-sent event." },
    { p:'p2', t:'t3', term:'Presence Penalty', def:'Positive values (0.0–2.0) penalise tokens that have already appeared anywhere in the response. Encourages the model to introduce new topics and avoid repeating ideas already covered.' },
    { p:'p2', t:'t3', term:'Frequency Penalty', def:'Positive values (0.0–2.0) reduce the probability of tokens based on how often they have appeared. Reduces word-level repetition within one response. Different from presence_penalty which discourages topic repetition.' },
    { p:'p2', t:'t3', term:'stop Sequences', def:"Strings that tell the model to stop generating immediately when produced. Example: stop=['###', '\\nUser:']. Useful for structured output templates. Output ends just before the stop token." },
    { p:'p2', t:'t3', term:'n Parameter', def:"Number of different completions to return for one prompt. n=3 returns 3 alternative responses. Each counts toward your token quota. Default is 1. Useful for showing users alternatives to choose from." },
    { p:'p2', t:'t3', term:'JSON Mode (Structured Output)', def:"Pass response_format={'type':'json_object'} to force valid JSON output. Must also mention 'JSON' in the system message. Prevents JSON parsing errors in applications consuming LLM output." },
    { p:'p2', t:'t3', term:'seed Parameter', def:"An integer making generation more deterministic. Same seed + same prompt → similar responses across calls. Useful for reproducible testing. Does not guarantee bit-for-bit identical output." },
    { p:'p2', t:'t3', term:'Content Filter Threshold', def:"Controls per-category harm enforcement: Low, Medium (default), or High tolerance. Set separately per category (Hate, Sexual, Violence, Self-Harm) and per direction (input vs output)." },
    { p:'p2', t:'t3', term:'Batch API (Azure OpenAI)', def:"Asynchronous endpoint for large offline workloads. Requests run at lower priority, results returned within 24 hours. Up to 50% cheaper than real-time endpoint. Use for bulk document processing." },
    { p:'p2', t:'t3', term:'Prompt Caching', def:"Azure OpenAI caches repeated prompt prefixes. If many requests share the same system message, cached prefix tokens cost less and return faster. Automatically applied to qualifying prompts." },
    { p:'p2', t:'t3', type:'tip', term:'One-shot Prompting', def:"Providing exactly ONE input→output example in the prompt. Falls between zero-shot (no examples) and few-shot (2–5 examples). Sometimes sufficient to teach the desired format without bloating the prompt." },

    // ── PART 3 ──────────────────────────────────────────────────────────
    { p:'p3', t:'t1', term:'AI Agent', def:'AI system that autonomously plans and executes multi-step tasks. Reasons about steps, uses tools to take actions, evaluates results, and loops until goal is achieved.' },
    { p:'p3', t:'t1', term:'Agentic Loop (ReAct)', def:'Reason → Act → Observe → repeat. Ask "what next?" → call a tool → process result → reason again. Loops until task is complete.' },
    { p:'p3', t:'t1', term:'Tool (Agent Tool)', def:'Capability the agent can invoke: web search, code execution, database query, email. Tools let agents act on the world, not just reason.' },
    { p:'p3', t:'t1', term:'Function Calling', def:'GPT-4o capability to output a structured JSON request to call a specific function instead of plain text. Your code executes the function, returns result to LLM.' },
    { p:'p3', t:'t1', term:'Azure AI Agent Service', def:"Microsoft's managed agent runtime in Foundry. Define agent + tools, interact via threads and runs. Azure manages the agentic loop." },
    { p:'p3', t:'t1', term:'Thread (Agent Service)', def:"A persistent conversation session in Azure AI Agent Service. Stores all messages and tool call results in sequence. A thread can span many runs, maintaining continuous context across the entire session." },
    { p:'p3', t:'t1', term:'Run (Agent Service)', def:"A single agent execution against a thread. The agent processes messages, reasons about next actions, calls tools, and generates responses. Run statuses: queued → in_progress → completed / failed." },
    { p:'p3', t:'t1', term:'Message (Agent Service)', def:"A unit of content in a thread — user input or agent output. Can contain text or file references. User messages trigger new runs. All messages are stored in thread history to provide context." },
    { p:'p3', t:'t1', term:'Multi-Agent Architecture', def:"Multiple specialised agents working together. An orchestrator agent decomposes a goal and delegates subtasks to specialist agents (search agent, coding agent, data agent). Results synthesised into final answer." },
    { p:'p3', t:'t1', term:'Orchestrator Agent', def:"Top-level agent in a multi-agent system. Receives the user goal, plans the approach, delegates subtasks to specialist agents, integrates their results, and returns the final consolidated answer." },
    { p:'p3', t:'t1', term:'Code Interpreter Tool', def:"Built-in Azure AI Agent tool. Executes Python code in a secure sandboxed environment. Can generate charts, process uploaded data files, perform calculations, and return results back to the agent." },
    { p:'p3', t:'t1', term:'File Search Tool', def:"Built-in Azure AI Agent tool. Upload files (PDF, DOCX, etc.) and the agent retrieves relevant passages using vector search. Azure automatically handles chunking, embedding, and indexing of uploaded files." },
    { p:'p3', t:'t1', term:'Bing Grounding Tool', def:"Built-in agent tool providing access to live Bing web search results. Gives the agent up-to-date information beyond the model's training data cutoff without any custom retrieval code." },
    { p:'p3', t:'t1', term:'Semantic Kernel', def:"Microsoft open-source SDK (Python and .NET) for building AI-powered applications. Provides plugins (tools), planning, and memory primitives for LLM-powered agents and pipelines." },
    { p:'p3', t:'t1', term:'AutoGen', def:"Microsoft open-source multi-agent framework. Multiple agents with defined roles converse to solve complex tasks. Supported natively in Azure AI Foundry for building sophisticated agentic workflows." },
    { p:'p3', t:'t1', term:'Planning (Agentic AI)', def:"The agent's ability to decompose a high-level goal into a sequence of concrete steps before executing. Quality of planning improves significantly with more capable models like GPT-4o and o1/o3." },
    { p:'p3', t:'t1', term:'Agent Memory', def:"Three types: In-context (conversation history in the active thread), External (long-term vector store), Episodic (summaries of past sessions retrieved on demand). Together enable persistent agent knowledge." },
    { p:'p3', t:'t1', term:'Tool Schema', def:"JSON definition passed to the LLM describing a tool's name, description, and parameter types. Tells the model exactly what tools are available and how to request their invocation via function calling." },
    { p:'p3', t:'t1', term:'Human-in-the-Loop', def:"Pausing agent execution to request human approval before taking a potentially irreversible or high-risk action — such as sending emails, deleting records, or processing financial transactions." },
    { p:'p3', t:'t1', term:'Agent Guardrails', def:"Safety constraints limiting agent behaviour: maximum step count, restricted tool access, content filter integration, prohibited action categories, and mandatory human approval gates for risky operations." },

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
    { p:'p4', t:'t1', term:'Language Detection', def:"Identifies the language of input text. Returns an ISO 639-1 language code (e.g. 'en', 'fr', 'zh-Hans') and a confidence score. Essential first step in multi-lingual routing pipelines." },
    { p:'p4', t:'t1', term:'Key Phrase Extraction', def:"Returns the most significant noun phrases from a document with no confidence score — just the phrases. Useful for tagging articles, categorising content, and enriching search indexes." },
    { p:'p4', t:'t1', term:'Entity Linking', def:"Identifies named entities in text AND links them to their Wikipedia entry with a disambiguation URL and score. Example: 'Paris' → Paris (France) Wikipedia article, not Paris Hilton." },
    { p:'p4', t:'t1', term:'Extractive Summarisation', def:"Selects and returns the most important sentences verbatim from the source document. No rewriting — preserves exact wording. Good when the source quote itself matters (legal, regulatory)." },
    { p:'p4', t:'t1', term:'Abstractive Summarisation', def:"Generates a new summary using different words, combining and condensing ideas from the source. More human-like than extractive. Azure AI Language supports both modes via the same API." },
    { p:'p4', t:'t1', term:'Document Translation', def:"Asynchronous batch service that translates entire document files (PDF, DOCX, PPTX, HTML) preserving original layout and formatting. Different from text translation which accepts raw string input." },
    { p:'p4', t:'t1', term:'Text Analytics for Health', def:"Extracts clinical entities from medical text: diagnoses, medications, dosages, procedures, symptoms, body parts. Returns structured FHIR-compatible data. Requires Limited Access approval for real PHI." },
    { p:'p4', t:'t2', term:'Custom Speech', def:"Trains a speech recognition model on YOUR audio data and transcripts. Improves accuracy for domain-specific vocabulary, accents, and noisy environments not handled well by the general model." },
    { p:'p4', t:'t2', term:'Custom Neural Voice', def:"Creates a synthetic voice indistinguishable from a specific consenting person's voice. Requires Microsoft Limited Access approval. Used for branded AI personas and accessibility applications." },
    { p:'p4', t:'t2', term:'Pronunciation Assessment', def:"Evaluates spoken audio against reference text. Returns scores for accuracy (phoneme correctness), fluency (naturalness), completeness, and prosody (rhythm/stress). Used in language learning apps." },
    { p:'p4', t:'t2', term:'Speech Translation', def:"Transcribes speech in one language and outputs text in another simultaneously. Built into the Speech SDK — do NOT use the separate Translator service for audio input. Speech handles this natively." },
    { p:'p4', t:'t2', term:'Keyword Recognition', def:"Detects specific trigger words or phrases (e.g. 'Hey Cortana', a custom wake word) in real-time audio locally without sending all audio to the cloud. Triggers cloud processing only when the keyword is detected." },
    { p:'p4', t:'t2', term:'Speaker Diarisation', def:"Automatically identifies and labels different speakers in an audio recording. Returns timestamped segments labelled Speaker 1, Speaker 2, etc. Combined with transcript for speaker-attributed text." },
    { p:'p4', t:'t2', term:'Speaker Identification', def:"Identifies WHICH of a set of enrolled speakers is currently speaking from a voice sample. Different from Speaker Verification (which confirms yes/no for one specific claimed person)." },
    { p:'p4', t:'t2', term:'Batch Transcription', def:"Asynchronous service for transcribing large audio/video files stored in Azure Blob Storage. Better for long recordings than real-time streaming SDK. Supports concurrent multi-file jobs." },
    { p:'p4', t:'t3', term:'CLU — Conversational Language Understanding', def:"Replaces LUIS. Trains on labeled utterances (example phrases) to classify user intents and extract entities from conversational text. Used for command-and-control chatbots and voice interfaces." },
    { p:'p4', t:'t3', term:'Intent (CLU)', def:"The user's goal in a command, classified by CLU. Examples: BookFlight, OrderPizza, TurnOffLights. Each utterance is classified into exactly one intent (or None). The primary output of CLU." },
    { p:'p4', t:'t3', term:'Entity (CLU)', def:"A variable slot extracted from a user utterance. Example: 'Book a flight to Paris' → entity type=Destination, value='Paris'. Entities provide the specific parameters for executing an intent." },
    { p:'p4', t:'t3', term:'Utterance (CLU)', def:"A labeled example phrase showing how users express a specific intent. Provide 15–30 utterances per intent during training. More varied examples = better model generalisation to unseen phrasing." },
    { p:'p4', t:'t3', term:'None Intent', def:"Required special CLU intent that captures utterances matching no defined intent. Must include out-of-scope examples. Prevents the model from forcing all input into one of your named intents." },
    { p:'p4', t:'t3', term:'Custom Question Answering', def:"Replaces QnA Maker. Build a knowledge base from FAQ documents or URLs. Matches user questions to the best answer using ML ranking. Part of Azure AI Language — same resource, same SDK." },
    { p:'p4', t:'t3', term:'Knowledge Base (Custom QA)', def:"The question-answer pair collection used by Custom Question Answering. Import from documents or URLs, or enter manually. Add alternate phrasings for questions to improve match accuracy." },
    { p:'p4', t:'t3', term:'Custom Named Entity Recognition', def:"Trains a model to identify entity types specific to YOUR domain — product codes, contract numbers, medical device names. Goes beyond the built-in NER entity categories (Person, Location, Organisation)." },
    { p:'p4', t:'t3', term:'Custom Text Classification — Single Label', def:"Each document gets exactly ONE category. Example: classify support tickets as Billing, Technical, or Shipping. Categories are mutually exclusive. Use when a document can only belong to one class." },
    { p:'p4', t:'t3', term:'Custom Text Classification — Multi Label', def:"A document can belong to MULTIPLE categories simultaneously. Example: a news article tagged as both Technology AND Business. Categories are not mutually exclusive." },
    { p:'p4', t:'t3', term:'Train / Test Split', def:"Azure Language auto-splits labeled data into training (~80%) and evaluation (~20%) sets. The evaluation set measures real-world accuracy on unseen examples. You can also supply your own test set." },
    { p:'p4', t:'t3', type:'tip', term:'F1 Score (Custom Model Evaluation)', def:"F1 = 2 × (precision × recall) / (precision + recall). Balances catching true positives (recall) against not flagging false positives (precision). Used to evaluate CLU, custom NER, and custom classification models." },

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
    { p:'p5', t:'t1', term:'Data Source (AI Search)', def:"Defines where the indexer retrieves documents: Azure Blob Storage, Azure SQL Database, Cosmos DB, or SharePoint Online. The starting point of the AI Search indexing pipeline." },
    { p:'p5', t:'t1', term:'Vector Search', def:"Stores text embeddings as vector fields in the AI Search index. At query time, embed the user's question and retrieve the top-N most semantically similar document chunks by cosine distance." },
    { p:'p5', t:'t1', term:'Hybrid Search', def:"Combines keyword search (BM25 text matching) and vector search in one query. Results merged with Reciprocal Rank Fusion (RRF). Consistently outperforms either keyword-only or vector-only search." },
    { p:'p5', t:'t1', term:'Scoring Profile', def:"Customises result relevance by boosting: specific fields (title matches rank higher than body matches), document freshness, or geographic proximity. Configured on the index, applied at query time." },
    { p:'p5', t:'t1', term:'Analyzer (AI Search)', def:"Processes text at index and query time: tokenisation, lowercasing, stopword removal, stemming. Language-specific analyzers (e.g. en.microsoft) handle non-English content for improved relevance." },
    { p:'p5', t:'t1', term:'Knowledge Store', def:"AI Search feature that persists AI-enriched content (extracted entities, key phrases, translated text, OCR images) to Azure Blob Storage or Table Storage for downstream analytics and Power BI reporting." },
    { p:'p5', t:'t1', type:'tip', term:'Query Types (AI Search)', def:"Four types: Simple (keyword), Full (Lucene: wildcards, fuzzy, proximity), Semantic (adds LLM re-ranking layer), Vector (embedding nearest-neighbour). Hybrid combines Full + Vector in one request." },
    { p:'p5', t:'t2', term:'Layout Model', def:"Prebuilt Document Intelligence model. Extracts text, tables, selection marks, and structural layout from any document. Does not extract named fields — returns raw layout elements and their positions." },
    { p:'p5', t:'t2', term:'Read Model', def:"Prebuilt model for plain OCR: extracts paragraphs, lines, and words from images and documents. Simpler than Layout — no table or selection mark detection. Use when you only need raw text." },
    { p:'p5', t:'t2', term:'Custom Template Model', def:"For documents with CONSISTENT field positions (same layout every time). Minimum 5 training examples. Best for uniform structured forms like insurance applications, W-9s, or government forms." },
    { p:'p5', t:'t2', term:'Custom Neural Model', def:"For documents with VARIED layouts from different sources (e.g. invoices from 50 different vendors). Requires more training data but handles diverse formats. Better than template model for layout variation." },
    { p:'p5', t:'t2', term:'Selection Marks', def:"Checkboxes and radio buttons detected in forms. Document Intelligence returns each mark's state (selected or unselected). Critical for processing questionnaires, surveys, and tick-box applications." },
    { p:'p5', t:'t2', term:'Field Confidence Score', def:"Each extracted field includes a 0.0–1.0 confidence score. Code should flag low-confidence fields (below ~0.8) for human review rather than auto-processing potentially incorrect values." },
    { p:'p5', t:'t2', term:'Add-On Capabilities', def:"Optional extras per analysis call: high-resolution mode (small text), query fields (extract ad-hoc named fields by description), formula extraction (maths in PDFs), barcode and QR code detection." },
    { p:'p5', t:'t2', term:'Document Intelligence Studio', def:"Web portal (documentintelligence.ai.azure.com) for labelling training documents, training custom models, and testing field extraction interactively. No code needed for initial model prototyping." },
    { p:'p5', t:'t3', term:'Azure AI Content Understanding', def:"New unified Azure AI service for multimodal content analysis. Extracts structured fields from documents, images, audio, and video using a single API and reusable custom analyzer configurations." },
    { p:'p5', t:'t3', term:'Analyzer (Content Understanding)', def:"A named, reusable configuration defining what fields to extract from a specific content type. Combines a field schema with processing instructions — think of it as a reusable extraction template." },
    { p:'p5', t:'t3', term:'Field Schema (Content Understanding)', def:"The output definition specifying what structured fields the analyzer extracts. Each field has a name, description, and data type: string, number, boolean, date, or array of objects." },
    { p:'p5', t:'t3', term:'Document Analysis (Content Understanding)', def:"Extracts structured fields from PDF, DOCX, or image documents using your custom field schema. More flexible than Document Intelligence prebuilt models — define exactly the fields you need." },
    { p:'p5', t:'t3', term:'Image Analysis (Content Understanding)', def:"Extracts structured fields from images using your custom schema. Example: extract product name, colour, and price from product catalogue images at scale without writing extraction logic." },
    { p:'p5', t:'t3', term:'Video Segment Analysis (Content Understanding)', def:"Analyses video segments to extract structured fields. Example: extract speaker name, key topics, and action items from recorded meeting segments using a custom field schema." },
    { p:'p5', t:'t3', term:'Audio Analysis (Content Understanding)', def:"Transcribes and analyses audio to extract structured fields. Example: extract complaint category, customer sentiment, and resolution status from call centre recordings." },
    { p:'p5', t:'t3', term:'Multimodal Pipeline', def:"Processing multiple content types (documents, images, audio, video) in one workflow. Content Understanding enables unified multi-modal extraction without wiring separate services together." },
    { p:'p5', t:'t3', term:'Field Type — Array', def:"A Content Understanding schema field returning multiple values. Example: 'line_items' field returning all invoice line items, each with quantity, description, and unit price as sub-fields." },
    { p:'p5', t:'t3', term:'Batch Analysis (Content Understanding)', def:"Submit multiple files for processing in one request. Results returned asynchronously. Used for large-scale document processing pipelines where many files need concurrent extraction." },
    { p:'p5', t:'t3', term:'Content Understanding vs Document Intelligence', def:"Use Content Understanding for mixed-media pipelines or fully custom schemas across content types. Use Document Intelligence for structured form/document extraction with prebuilt or layout-based models." },
    { p:'p5', t:'t3', type:'tip', term:'Confidence Threshold (Content Understanding)', def:"Minimum confidence score for a field extraction to be returned. Fields below threshold return null rather than a low-confidence guess. Configure per field in your analyzer schema definition." },

    // ── PART 6 ──────────────────────────────────────────────────────────
    { p:'p6', t:'t1', term:'OCR — Optical Character Recognition', def:'The technical capability to read printed or handwritten text from images and multi-page documents. Read API is the standard tool.' },
    { p:'p6', t:'t1', term:'Object Detection', def:'Identifying what items are in an image AND where they are (providing bounding box coordinates x, y, width, height).' },
    { p:'p6', t:'t1', term:'Image Classification', def:'Assigning a label to an entire image ("Cat", "Dog"). Does NOT provide location info — just tells you the global content category.' },
    { p:'p6', t:'t1', type:'tip', term:'Face API Approval', def:'Face identification (biometric matching) requires Microsoft Limited Access approval. Simple face detection (detecting a face exists) does NOT require approval.' },

    { p:'p6', t:'t3', term:'Azure AI Video Indexer', def:'Service that extracts deep insights from video: transcripts, faces, keywords, brands, visual text, and even sentiment/emotions.' },
    { p:'p6', t:'t3', term:'Spatial Analysis (Vision)', def:'Uses real-time camera feeds to track people movement, count people in zones, and measure distances at the edge (on local hardware).' },
    { p:'p6', t:'t3', type:'tip', term:'ARM Account', def:'An ARM-connected Video Indexer account is required for production, as it uses your own Azure Storage and supports unlimited video volume.' },
    { p:'p6', t:'t1', term:'Azure AI Vision', def:"Service providing pre-built computer vision models: image captioning, dense captions, object detection, people detection, image tags, smart crop, background removal, and OCR via the Read API." },
    { p:'p6', t:'t1', term:'Image Captioning', def:"Generates a single natural language sentence describing the overall content of an image. Returns the caption text and a confidence score. Part of the Azure AI Vision 4.0 Image Analysis API." },
    { p:'p6', t:'t1', term:'Dense Captions', def:"Generates multiple natural language descriptions — one for the whole image and individual ones for detected regions. Returns captions with bounding boxes. Part of Azure AI Vision 4.0 (Florence model)." },
    { p:'p6', t:'t1', term:'Smart Crop', def:"Analyses image content to suggest the optimal crop rectangle for a specified target aspect ratio. Returns coordinates without modifying the original image. Used for thumbnail and preview generation." },
    { p:'p6', t:'t1', term:'Background Removal', def:"Separates the foreground subject from the image background. Returns the foreground as a PNG with a transparent background, plus an optional alpha matte. Part of Azure AI Vision 4.0." },
    { p:'p6', t:'t1', term:'Image Tags', def:"Returns a list of content labels for an image with confidence scores. Uses a broad vocabulary (thousands of concepts) for general-purpose categorisation. No bounding box locations returned." },
    { p:'p6', t:'t1', term:'Florence Foundation Model', def:"The vision foundation model underlying Azure AI Vision 4.0. Enables image captioning, dense captions, smart crops, background removal, and multi-modal embeddings all within the same service." },
    { p:'p6', t:'t1', type:'tip', term:'Multi-modal Embeddings', def:"Convert both text and images into vectors in the SAME embedding space. Enables cross-modal search: find images matching a text description, or find text that best matches an image. Part of Vision 4.0." },
    { p:'p6', t:'t2', term:'Custom Vision', def:"Azure AI service for training custom image classification and object detection models on your own labeled images. No ML expertise required. Access via customvision.ai portal or Azure AI Foundry." },
    { p:'p6', t:'t2', term:'Image Classification Project (Custom Vision)', def:"Assigns category labels to entire images. Create as single-label (one tag per image) or multi-label (multiple tags per image). The mode is set at project creation and cannot be changed afterwards." },
    { p:'p6', t:'t2', term:'Object Detection Project (Custom Vision)', def:"Draw bounding boxes around objects in training images and label each box. The model learns to detect AND locate objects — returning class labels and bounding box coordinates for each detected object." },
    { p:'p6', t:'t2', term:'Training Images per Tag', def:"Minimum ~50 images per tag recommended, with varied backgrounds, lighting, angles, and scales. More diverse training examples = better model generalisation and accuracy on unseen images." },
    { p:'p6', t:'t2', term:'Quick Training', def:"Custom Vision standard training that completes in minutes. Uses Microsoft's pre-trained model as the base (transfer learning). Good starting point for most classification and detection scenarios." },
    { p:'p6', t:'t2', term:'Advanced Training', def:"Allocates a user-specified compute time budget to find better model weights. More compute time = potentially higher accuracy. Use when Quick Training accuracy falls short of requirements." },
    { p:'p6', t:'t2', term:'Iteration (Custom Vision)', def:"Each Custom Vision training run produces an iteration with its own model weights and precision/recall metrics. Publish a specific iteration to expose it via the Prediction API. Old iterations kept for rollback." },
    { p:'p6', t:'t2', term:'Prediction Endpoint (Custom Vision)', def:"The REST API endpoint to classify or detect objects in new images after publishing an iteration. Has a separate URL and prediction key from the training endpoint. Returns labels with confidence scores." },
    { p:'p6', t:'t2', term:'Compact Domain', def:"A Custom Vision domain variant optimised for on-device deployment. Slightly lower accuracy than standard domain but exportable. Must be selected at project creation — cannot switch to compact later." },
    { p:'p6', t:'t2', term:'Export Formats (Custom Vision)', def:"Export a compact-domain iteration as: ONNX (Windows ML), CoreML (iOS), TensorFlow / TFLite (Android), or Docker container for edge/on-premises deployment. Standard domains cannot be exported." },
    { p:'p6', t:'t2', term:'Probability Threshold (Custom Vision)', def:"Minimum confidence score a prediction must reach to be returned as a positive result. Default 50%. Lower = more detections (more false positives). Higher = fewer detections (more false negatives)." },
    { p:'p6', t:'t2', term:'Custom Vision Domains', def:"Presets optimising model architecture for your image type: General, Food, Landmarks, Retail, Adult. Each has a Standard variant (best accuracy) and a Compact variant (exportable for edge)." },
    { p:'p6', t:'t2', type:'tip', term:'Custom Vision vs Azure AI Vision', def:"Azure AI Vision = prebuilt general-purpose models, no training. Custom Vision = train YOUR model on YOUR labeled images for your specific objects or categories. Know which scenario requires which service." },
    { p:'p6', t:'t3', term:'Video Indexer Insights', def:"Deep metadata from video files: transcript, speaker diarisation, keyframes, scene breaks, visual text (OCR), face thumbnails, brands, topics, emotions, and named entities — all timestamped." },
    { p:'p6', t:'t3', term:'Speaker Diarisation (Video Indexer)', def:"Automatically identifies and labels different speakers in a video. Returns timestamped segments labelled Speaker 1, Speaker 2, etc. Combined with transcript for speaker-attributed captions and search." },
    { p:'p6', t:'t3', term:'Scene / Shot Detection (Video Indexer)', def:"Divides video into logical scenes (story units), camera shots (between cuts), and keyframes (representative still frames). Enables chapter navigation and searchable video structure." },
    { p:'p6', t:'t3', term:'Widget Embedding (Video Indexer)', def:"Embed a Video Indexer player widget and insights widget in your web app via iframe. Provides a ready-made UI for video playback with interactive, searchable transcript and insight timeline." },
    { p:'p6', t:'t3', term:'ARM-Connected Account (Video Indexer)', def:"Production Video Indexer account linked to your Azure subscription with your own Storage Account and Media Services. No content volume limits. Required for enterprise deployments." },
    { p:'p6', t:'t3', term:'People Zone Entry/Exit (Spatial Analysis)', def:"Spatial Analysis event triggered when a person enters or exits a defined polygon zone in a camera frame. Returns event type, timestamp, and person count. Used for restricted area monitoring." },
    { p:'p6', t:'t3', term:'Cross-line Counting (Spatial Analysis)', def:"Counts people crossing a virtual line in a camera frame. Separate totals for each crossing direction. Used for foot traffic measurement at building entrances or zone boundaries." },
    { p:'p6', t:'t3', term:'Social Distance Monitoring (Spatial Analysis)', def:"Alerts when people are closer than a configured distance threshold in a camera frame. Fires events when the constraint is violated. Runs on edge hardware — no video frames sent to Azure cloud." },
    { p:'p6', t:'t3', type:'tip', term:'Spatial Analysis Hardware', def:"Requires an NVIDIA GPU for edge processing. Runs as a Docker container on Azure Stack Edge or any compatible GPU device. Processes live camera feeds locally with very low latency." },
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

# Khan Industries — AI Agent Architecture Manual

This document is the **single source of truth for how Khan Industries designs, builds, evaluates, deploys, and maintains every AI agent**.

It governs all intelligent systems the company ships — customer support chatbots, sales agents, CRM automation, restaurant assistants, construction workflow agents, internal executive assistants, StudyFlow AI features, KHANOS, and future enterprise multi-agent platforms.

If an agent design or implementation conflicts with this manual, **this manual wins** until it is deliberately updated.

> An AI agent is not a chat window. An AI agent is a **bounded, trustworthy system** that performs defined work on behalf of a user or business — with clear scope, honest limitations, human escalation when needed, and engineering discipline behind every response.

**Current implementation status:** Khan Industries is an early-stage company. No agent is **Launched** unless explicitly marked elsewhere with evidence. The repository has no AI runtime or LLM SDK yet. This manual defines **target standards** with **phased adoption**. Do not claim production AI capabilities until they exist.

**Relationship to `05_ENGINEERING.md`:** Engineering owns repository structure, TypeScript, CI/CD, deployment infrastructure, and general logging/error patterns. This manual owns **agent-specific** architecture: prompts, RAG, tools, memory, evaluation, safety, and agent lifecycle.

---

## Table of Contents

### Part I — Foundation

1. [AI Philosophy](#1-ai-philosophy)
2. [AI Development Principles](#2-ai-development-principles)
3. [Ethical, Responsible, and Safe AI](#3-ethical-responsible-and-safe-ai)
4. [KOS Relationships and Scope](#4-kos-relationships-and-scope)

### Part II — Classification and Lifecycle

5. [Agent Classification System](#5-agent-classification-system)
6. [Agent Lifecycle](#6-agent-lifecycle)
7. [Agent Risk Tiers](#7-agent-risk-tiers)

### Part III — Architecture

8. [Agent Architecture Overview](#8-agent-architecture-overview)
9. [Single-Agent vs Multi-Agent Systems](#9-single-agent-vs-multi-agent-systems)
10. [Memory Architecture](#10-memory-architecture)
11. [Knowledge Sources and RAG](#11-knowledge-sources-and-rag)
12. [Tools, Functions, and Integrations](#12-tools-functions-and-integrations)
13. [Context and Conversation Management](#13-context-and-conversation-management)
14. [Reference Architecture by Maturity](#14-reference-architecture-by-maturity)

### Part IV — Behavior and Prompts

15. [Prompt Engineering Standards](#15-prompt-engineering-standards)
16. [System Prompt Standards](#16-system-prompt-standards)
17. [Hallucination Prevention](#17-hallucination-prevention)
18. [Human Approval Workflows](#18-human-approval-workflows)
19. [Error Recovery](#19-error-recovery)

### Part V — Security and Governance

20. [Security Principles](#20-security-principles)
21. [Authentication and Permissions](#21-authentication-and-permissions)
22. [Data Handling and Privacy](#22-data-handling-and-privacy)
23. [Transparency and Disclosure](#23-transparency-and-disclosure)

### Part VI — Quality and Operations

24. [Testing and Evaluation](#24-testing-and-evaluation)
25. [Logging, Monitoring, and Analytics](#25-logging-monitoring-and-analytics)
26. [Agent Performance Standards](#26-agent-performance-standards)
27. [Agent Specification Document](#27-agent-specification-document)

### Part VII — Delivery and Evolution

28. [Deployment Standards](#28-deployment-standards)
29. [Versioning](#29-versioning)
30. [Continuous Improvement and Maintenance](#30-continuous-improvement-and-maintenance)
31. [Retirement Strategy](#31-retirement-strategy)

### Part VIII — Governance

32. [Future Khan Industries AI Architecture](#32-future-khan-industries-ai-architecture)
33. [Agent Launch Checklist](#33-agent-launch-checklist)
34. [What Khan Industries AI Will Never Do](#34-what-khan-industries-ai-will-never-do)

---

## 1. AI Philosophy

Khan Industries builds AI agents to **help businesses and people operate better** — saving time, increasing revenue, reducing stress, improving quality, and making systems easier to run (`00_COMPANY.md`).

AI is a means, not the product. The product is **reliable outcomes** delivered with premium quality and honest positioning.

**Four AI convictions:**

1. **Bounded intelligence.** Every agent has a defined job. Open-ended "do anything" agents are not Khan Industries agents unless explicitly scoped as research or executive assistants with appropriate risk controls.
2. **Calm confidence.** Agents communicate with the brand's calm, competent tone (`01_BRAND.md`) — never hype, never pushy, never pretending to know what they do not know.
3. **Trust through transparency.** Users always know they are interacting with AI. Limitations are stated, not hidden.
4. **Engineering over demo.** An agent that impresses in a demo but fails in production violates company values. Evaluation, safety, and maintenance are part of the product.

**Strategic alignment:** The company's first major business goal includes launching the **first sellable AI agent** (`00_COMPANY.md`). This manual ensures that agent — and every agent after it — is built to a standard worthy of the Khan Industries name.

---

## 2. AI Development Principles

When this manual does not specify a detail, resolve trade-offs using these principles in order:

| Principle | Meaning | Example |
| --- | --- | --- |
| **Scope first** | Define what the agent will and will not do before building. | SupportFlow handles tier-1 FAQs; escalates billing disputes to humans. |
| **Honesty over fluency** | A plain "I don't know" beats a confident fabrication. | No invented order status, prices, or policies. |
| **Escalation over harm** | When uncertain or out of scope, route to a human. | Restaurant AI does not confirm unavailable reservations without tool verification. |
| **Ground when possible** | Prefer RAG and tools over parametric memory for facts. | Menu prices from knowledge base, not model weights. |
| **Least privilege** | Agents receive minimum tools and data access required. | CRM agent reads assigned leads only, not entire database. |
| **Eval before launch** | No customer-facing agent ships without a defined evaluation suite. | Golden Q&A set run before every prompt version change. |
| **Single-agent default** | Start simple; add complexity only when justified. | v1 SupportFlow is one agent, not an orchestration mesh. |
| **Maintainability** | Prompts versioned, tools typed, specs documented. | Next engineer can modify agent without reverse-engineering chat logs. |

---

## 3. Ethical, Responsible, and Safe AI

Khan Industries AI must align with company integrity (`00_COMPANY.md`, `01_BRAND.md` §15).

### 3.1 Ethical AI

- Agents do not deceive users about identity, capabilities, or outcomes.
- Agents do not manipulate users into decisions against their interest.
- Agents do not generate hate, harassment, illegal instructions, or targeted harm.
- Agents do not impersonate real individuals without explicit authorized use cases.

### 3.2 Responsible AI

- **Accountability:** A human owner is named for every deployed agent.
- **Proportionality:** Risk controls match agent risk tier (Section 7).
- **Inclusivity:** Agent UX meets accessibility standards (`05_ENGINEERING.md` §20).
- **Honesty in marketing:** Agent capabilities on website and sales materials match actual behavior.

### 3.3 AI Safety

- **Input safety:** Defend against prompt injection and jailbreak attempts (Section 20).
- **Output safety:** Filter or refuse harmful, illegal, or off-brand content.
- **Action safety:** High-impact tool calls require confirmation or human approval (Section 18).
- **Fail safe:** On safety system failure, default to refusal or human handoff — not unconstrained generation.

### 3.4 Prohibited Use Cases

Khan Industries will not build agents that:

- Surveil users without consent
- Generate fake reviews, testimonials, or credentials
- Automate deception in sales or hiring
- Provide medical, legal, or financial advice presented as professional counsel without qualified human oversight and appropriate disclaimers
- Violate applicable law or client contractual obligations

---

## 4. KOS Relationships and Scope

### 4.1 KOS Dependency Map

| Topic | Owner document | `06_AI_AGENTS.md` responsibility |
| --- | --- | --- |
| Company mission, values, honesty | `00_COMPANY.md` | Align agent outcomes to five value tests |
| Brand voice, transparency, UX | `01_BRAND.md` | System prompt tone; UI disclosure patterns |
| Product portfolio, lifecycle, launch bar | `02_PRODUCTS.md` | Agent technical lifecycle; evidence per product stage |
| Custom agent services, client UAT | `03_SERVICES.md` | Technical standard for all agents; internal eval before client handoff |
| Marketplace, demos, agent UI surfaces | `04_WEBSITE.md` | Agent behavior; not page IA |
| Repo, CI, TypeScript, general deployment | `05_ENGINEERING.md` | Reference; agent code follows engineering DoD |
| Feature scope per agent | `09_PRD.md` | Agent Specification template; PRD links here |
| AI assistant operational rules | `AGENTS.md` | Operational layer; this manual is canonical for agents |

### 4.2 How Agents Relate to KOS Domains

| Domain | Relationship |
| --- | --- |
| **Products** | Agent products (SupportFlow AI, LeadPilot AI, etc.) are **instances** of this manual. Product lifecycle in `02_PRODUCTS.md` triggers agent lifecycle gates. |
| **Services** | Client custom agents follow the same standard. Services may deploy a product agent or build bespoke; bespoke patterns may inform future products. |
| **Website** | Public demos and future marketplace are **surfaces**. Agents must disclose AI status in UI. |
| **Engineering** | `05` owns how code is written and deployed; `06` owns what makes an agent trustworthy and repeatable. |
| **PRDs** | `09` defines *what* to build; Agent Specification (Section 27) defines *how the agent behaves*. |

### 4.3 What This Manual Does Not Own

- General Git workflow, folder structure for non-agent code → `05_ENGINEERING.md`
- Product prioritization and pricing → `02_PRODUCTS.md`, `03_SERVICES.md`
- Sales consultation process → `07_SALES.md`
- Page navigation and conversion funnels → `04_WEBSITE.md`

---

## 5. Agent Classification System

Every Khan Industries agent is classified along **three axes**: category (what job), autonomy level (how independent), and risk tier (Section 7).

### 5.1 Category Taxonomy

| Category | Definition | Khan Industries examples (status) | Typical risk |
| --- | --- | --- | --- |
| **Customer Support Agents** | Handle FAQs, triage, first-line support | SupportFlow AI (Concept) | Low–Medium |
| **Sales Agents** | Outreach, qualification, follow-up | LeadPilot AI (Concept) | Medium |
| **CRM Agents** | Pipeline, contacts, follow-ups, sales automation | AI CRM agent layer (Concept) | High |
| **Website Agents** | Audit, analyze, recommend web improvements | SiteScope AI (Concept) | Low |
| **Internal Business Agents** | Internal ops, reporting, team workflows | ReportGen AI (Concept) | Medium |
| **Research Agents** | Gather, synthesize, analyze information | SiteScope AI audit mode (Concept) | Low |
| **Coding Agents** | Assist engineering tasks | Internal dev use (future) | Medium |
| **Workflow Agents** | Automate multi-step business processes | ReportGen AI, Construction AI workflows (Concept) | Medium–High |
| **Scheduling Agents** | Bookings, calendars, availability | Restaurant AI reservations (Concept) | Medium |
| **Industry-Specific Agents** | Domain-tailored vertical agents | Restaurant AI, Construction AI (Concept); healthcare (future example only) | Medium |
| **Executive AI Assistants** | Personal/command-center assistants | KHANOS (Concept, internal) | High |
| **Multi-Agent Systems** | Coordinated agent teams with orchestration | Future marketplace / enterprise platform | High |

*Healthcare assistants* may be built as Industry-Specific agents in the future; no healthcare product is defined in `02_PRODUCTS.md` today.

### 5.2 Autonomy Levels

| Level | Description | Human involvement |
| --- | --- | --- |
| **L0 — Assistive** | Suggests drafts; human executes all actions | Always |
| **L1 — Supervised** | Executes low-risk actions; human reviews high-risk | Frequent |
| **L2 — Semi-autonomous** | Executes defined workflows; escalates exceptions | On exception |
| **L3 — Autonomous (bounded)** | Runs end-to-end within strict scope and tools | Periodic audit |

Default for v1 customer-facing agents: **L1 or L2**. L3 requires High risk tier controls and ADR.

### 5.3 Classification Rules

- Every agent has **one primary category** and optional secondary categories.
- Classification is recorded in the Agent Specification (Section 27).
- Reclassification requires spec update and risk re-assessment.

---

## 6. Agent Lifecycle

Agent lifecycle aligns with product lifecycle in `02_PRODUCTS.md` §8, with agent-specific engineering gates.

```
Concept → Planned → In Development → Beta → Launched → Maintained → Evolved or Retired
```

| Stage | Agent activity | Exit criteria |
| --- | --- | --- |
| **Concept** | Idea, category, risk tier, value outcomes documented | Prioritization in `02_PRODUCTS.md`; no production agent code required |
| **Planned** | Agent Specification draft; PRD in `09_PRD.md`; provider/tool choices noted | Approved spec; development branch created |
| **In Development** | Prompts, tools, RAG, UI integration built | Internal eval suite passes; safety review for tier |
| **Beta** | Limited users (founder, testers, pilot clients with consent) | Feedback incorporated; launch checklist (Section 33) |
| **Launched** | Production traffic; monitoring active | Ongoing maintenance per Section 30 |
| **Maintained** | Bug fixes, prompt updates, dependency updates | Relevant product still active |
| **Evolved** | Major capability change, new tools, model upgrade | New spec version; eval regression passed |
| **Retired** | Deprecated; users migrated | Documented in `02_PRODUCTS.md`; Section 31 executed |

**Rules:**

- No agent skips from Concept to Launched.
- Beta must include **real usage** — not only team members clicking once.
- Prompt or model changes on Launched agents require eval regression (Section 24).

---

## 7. Agent Risk Tiers

Risk tier determines approval workflows, testing depth, and deployment rigor.

| Tier | Description | Examples | Requirements |
| --- | --- | --- | --- |
| **Low** | Read-only or informational; no PII write; no external side effects | FAQ bot, SiteScope recommendations | Basic eval; transparency; injection baseline |
| **Medium** | Reads business data; limited writes; reversible actions | Lead qualification, scheduling holds, internal reports | Tool permissions; escalation paths; eval + adversarial prompts |
| **High** | CRM updates, payments, irreversible comms, sensitive PII | AI CRM actions, executive assistants, multi-agent enterprise | Human approval for critical actions; full eval CI; security review; ADR |

**Tier assignment** is documented in Agent Specification and reviewed at each lifecycle transition.

---

## 8. Agent Architecture Overview

Standard logical architecture for Khan Industries agents:

```
User
  ↓
Agent Interface (web chat, API, embed, voice — future)
  ↓
Orchestrator (session, policy, routing)
  ↓
├── LLM Provider (generation)
├── System + developer prompts
├── Context assembler (history, memory, RAG chunks)
├── Tool / function layer
│     ↓
│   External APIs & integrations
├── Knowledge layer (RAG index, documents)
└── Memory store (session + persistent — when enabled)
  ↓
Response + optional tool results
  ↓
Logging / monitoring (no secrets, no raw PII)
```

### 8.1 Component Responsibilities

| Component | Responsibility |
| --- | --- |
| **Interface** | UX, disclosure ("You are chatting with AI"), accessibility |
| **Orchestrator** | Enforce policy, call model, dispatch tools, manage turns |
| **LLM Provider** | Text generation; selected per ADR |
| **Prompts** | Versioned system + task prompts (Section 16) |
| **Context assembler** | Build token-bounded context from history, RAG, memory |
| **Tool layer** | Typed, permissioned actions (Section 12) |
| **Knowledge layer** | Indexed documents for RAG (Section 11) |
| **Memory** | Session and optional long-term recall (Section 10) |

### 8.2 Code Organization (Target)

Align with `05_ENGINEERING.md` §7:

```
src/
├── agents/
│   ├── core/           # Shared orchestration, types, logging hooks
│   ├── supportflow/    # Per-product agent modules
│   └── sitescope/
├── app/api/agents/     # Agent API routes
└── content/agents/     # Versioned prompt configs (or docs/agents/)
```

Adopt `src/agents/` when first agent implementation begins.

---

## 9. Single-Agent vs Multi-Agent Systems

### 9.1 Default: Single-Agent

**v1 of every Khan Industries product agent is a single-agent architecture** — one orchestrator, one primary system prompt, defined tools.

Rationale:

- Simpler to eval, debug, and maintain
- Lower latency and cost
- Sufficient for SupportFlow AI, SiteScope AI, LeadPilot AI v1
- Matches early-stage team capacity

### 9.2 When Multi-Agent Is Allowed

Multi-agent systems (supervisor + specialists) require:

- Documented ADR in `docs/adr/`
- Clear division of responsibilities per sub-agent
- Orchestration eval suite (handoff correctness, no infinite loops)
- Risk tier **High** by default

Appropriate for:

- Future **enterprise multi-agent platform**
- **AI Agent Marketplace** orchestration at scale
- Complex internal **KHANOS** capabilities (later phases)

### 9.3 Multi-Agent Patterns (Future)

| Pattern | Use case |
| --- | --- |
| **Supervisor** | Routes tasks to specialist agents |
| **Pipeline** | Sequential handoff (research → draft → review) |
| **Parallel** | Multiple agents contribute; supervisor merges |

Not permitted for v1 product launches without ADR.

---

## 10. Memory Architecture

### 10.1 Memory Types

| Type | Scope | Content | Persistence |
| --- | --- | --- | --- |
| **Conversation buffer** | Current session | Recent turns | Session only |
| **Working memory** | Current task | Summarized context mid-session | Session |
| **Long-term memory** | User or business | Preferences, past issues, facts user asked to remember | Persistent store — when feature enabled |
| **Knowledge base** | Business | Policies, menus, docs — via RAG, not parametric memory | Managed separately (Section 11) |

### 10.2 Rules

- **Do not** rely on model weights for business facts — use RAG or tools.
- Long-term memory requires **user consent** and privacy policy disclosure.
- Memory retention periods documented per agent spec.
- Users can request deletion where applicable (privacy compliance).
- Never store secrets or payment data in conversational memory.

### 10.3 v1 Guidance

First agents (SupportFlow, SiteScope): **conversation buffer only** + RAG. Add long-term memory in Phase 2 maturity (Section 14).

---

## 11. Knowledge Sources and RAG

### 11.1 Approved Knowledge Sources

- Client-provided documents (with permission)
- Khan Industries-authored content (help centers, policies)
- Structured business data exposed via tools (not duplicated in embeddings)
- Public website content for audit agents (SiteScope)

**Not approved:** unverified third-party scrapes, copyrighted material without license, stale docs without refresh process.

### 11.2 RAG Pipeline Standards

| Step | Standard |
| --- | --- |
| **Ingestion** | Versioned source documents; track freshness |
| **Chunking** | Size appropriate to content type; preserve headings/metadata |
| **Embedding** | Model choice documented; re-embed on source update |
| **Retrieval** | Top-k with similarity threshold; reject low-confidence retrieval |
| **Grounding** | Prefer answers citing retrieved content; say when nothing relevant found |

### 11.3 When RAG Is Required

| Agent type | RAG expectation |
| --- | --- |
| FAQ / support | Required for v1 if answering from client docs |
| Website audit | Required — analyzes target site content |
| Sales / CRM | Tools for live data; RAG for playbooks and product info |
| Pure workflow | May use tools only without RAG |

### 11.4 Hallucination Link

If retrieval returns no relevant chunks, agent must **not invent** — see Section 17.

---

## 12. Tools, Functions, and Integrations

### 12.1 Tool Design Standards

Every tool exposed to an agent must have:

- **Unique name** and clear description (for model tool selection)
- **Typed input schema** (JSON Schema or Zod)
- **Typed output** or error shape
- **Idempotency** where retries are possible
- **Permission check** before execution
- **Audit log** entry (tool name, actor, timestamp — not sensitive payloads in logs)

### 12.2 Tool Calling vs Function Calling

Use the provider's native tool/function calling interface. Internally:

- **Tool** — any agent-invokable capability (API, database query, email draft)
- **Function** — pure computation with no side effects (format date, validate email)

Side-effect tools require risk tier review.

### 12.3 APIs and Integrations

- Integrate via official APIs; avoid brittle scraping for production agents.
- API keys in environment variables only (`05_ENGINEERING.md` §6.2).
- Rate-limit external calls; handle timeouts and retries with backoff.
- Third-party downtime → graceful user message, not stack trace.

### 12.4 Tool Permission Matrix (Template)

| Tool | Low tier | Medium tier | High tier |
| --- | --- | --- | --- |
| Read FAQ doc | Yes | Yes | Yes |
| Read CRM record | No | Scoped | Scoped |
| Send email | No | Draft only | Approval required |
| Charge payment | No | No | Approval + ADR |

Document actual matrix per agent in Agent Specification.

---

## 13. Context and Conversation Management

### 13.1 Context Assembly

- **Token budget** defined per agent; reserve space for system prompt, RAG, tools, and response.
- **Summarization** of older turns when buffer exceeds threshold — preserve decisions and open tasks.
- **Priority order:** system prompt > safety rules > retrieved knowledge > recent turns > older summary.

### 13.2 Conversation Rules

| Rule | Detail |
| --- | --- |
| **Session boundaries** | Clear start/end; timeout inactive sessions |
| **Turn limits** | Optional max turns before human handoff (support bots) |
| **Channel continuity** | If email + chat supported later, link sessions via authenticated user id |
| **Reset** | User can start fresh conversation; memory policies apply |

### 13.3 Multi-Modal (Future)

Image/document upload requires ADR — file type limits, malware scan, PII handling.

---

## 14. Reference Architecture by Maturity

Phased complexity — **do not skip phases without ADR**.

| Phase | Architecture | Example agents | Validates |
| --- | --- | --- | --- |
| **Phase 1** | Single-agent + system prompt + tools (no RAG) | Early SupportFlow prototype | Orchestration, escalation, eval basics |
| **Phase 2** | + RAG knowledge layer | SupportFlow v1, SiteScope v1 | Grounding, hallucination controls |
| **Phase 3** | + persistent memory + eval CI | LeadPilot, ReportGen | Retention, regression gates |
| **Phase 4** | + shared runtime + marketplace manifest | Agent marketplace beta | Scale, multi-tenant |
| **Phase 5** | + multi-agent orchestration | Enterprise platform, advanced KHANOS | Supervisor patterns, High tier controls |

**Current company position:** Phase 0 — standards only; implementation begins at Phase 1 with SupportFlow AI.

---

## 15. Prompt Engineering Standards

### 15.1 Prompt Assets

| Asset | Purpose | Storage |
| --- | --- | --- |
| **System prompt** | Identity, scope, rules, tone | Version-controlled file |
| **Developer prompt** | Dynamic instructions per request type | Code or template |
| **Few-shot examples** | Optional format demonstrations | Spec appendix |
| **Tool descriptions** | Model-facing capability docs | With tool definitions |

Prompts must **not** exist only in undocumented code or chat threads.

### 15.2 Prompt Writing Rules

- **Explicit scope:** "You help with X. You do not do Y."
- **Refusal instructions:** How to decline out-of-scope, harmful, or unknown requests.
- **Tone:** Match `01_BRAND.md` — polite, competent, transparent, never pushy.
- **Format:** Specify output structure when consistency matters (JSON, bullet lists).
- **No fake authority:** Agent does not claim to be human, licensed professional, or Khan Industries employee unless role explicitly defined (e.g., "SupportFlow AI assistant").
- **Variable injection:** Sanitize user-provided content inserted into prompts; defend against injection (Section 20).

### 15.3 Prompt Change Process

1. Edit in branch
2. Run eval suite (Section 24)
3. Peer review prompt diff
4. Deploy to Beta environment first
5. Promote to production with version bump (Section 29)

---

## 16. System Prompt Standards

Every production agent system prompt must include these **required blocks**:

### 16.1 Required Blocks

1. **Identity** — Agent name, that it is AI, who it serves
2. **Mission** — Primary job in one paragraph
3. **Scope** — In-scope and out-of-scope topics (explicit list)
4. **Knowledge policy** — Use tools/RAG; do not invent facts
5. **Tone** — Brand-aligned voice rules
6. **Escalation** — When and how to hand off to humans
7. **Safety** — Refusal rules for harm, illegal activity, PII mishandling
8. **Limitations** — Honest capability boundaries

### 16.2 System Prompt Template

```text
You are [Agent Name], an AI assistant built by Khan Industries for [audience].

You are not a human. You are an AI system. Be transparent if asked.

## Your job
[One paragraph: primary mission aligned to value outcomes]

## You help with
- [In-scope item 1]
- [In-scope item 2]

## You do not
- [Out-of-scope item 1]
- [Out-of-scope item 2]
- Invent facts, prices, policies, or availability
- Pretend to have taken actions you did not perform via tools

## Knowledge
- Use provided tools and retrieved documents for factual answers.
- If you lack information, say so clearly and offer escalation.

## Tone
- Professional, calm, helpful, premium.
- Short sentences. No hype. No pressure tactics.

## Escalation
- Escalate to a human when: [conditions].
- Say: [handoff message template].

## Safety
- Refuse harmful, illegal, or abusive requests politely.
- Do not request unnecessary sensitive personal data.
```

Customize per Agent Specification; never remove identity or honesty blocks.

---

## 17. Hallucination Prevention

Hallucinations undermine trust and violate the Honesty Policy.

### 17.1 Prevention Strategies

| Strategy | Application |
| --- | --- |
| **Grounding** | RAG + tool results for factual claims |
| **Citation** | Where UI supports, show source snippets |
| **Refusal** | "I don't have that information" when ungrounded |
| **Tool verification** | Order status, inventory, CRM state — always via tool |
| **Confidence discipline** | No fabricated percentages, timelines, or guarantees |
| **Eval regression** | Golden sets include "should refuse" and "should not invent" cases |

### 17.2 Prohibited Behaviors

- Inventing company policies, prices, or features
- Claiming actions completed without tool confirmation
- Citing fake documents or URLs
- Implying Khan Industries client list, revenue, or results (`01_BRAND.md`)

### 17.3 StudyFlow and KHANOS

Educational or executive agents must still refuse to invent grades, deadlines, or business metrics not sourced from authorized systems.

---

## 18. Human Approval Workflows

### 18.1 When Human Approval Is Required

| Trigger | Example |
| --- | --- |
| **High-risk tool call** | Send bulk email, update CRM deal stage, process refund |
| **Low model confidence** | Retrieval score below threshold (when measurable) |
| **User request** | "Talk to a person" |
| **Policy edge case** | Outside documented scope but plausibly important |
| **Repeated failure** | Same error twice in session |

### 18.2 Workflow Patterns

| Pattern | Description |
| --- | --- |
| **Draft + approve** | Agent prepares; human sends/commits |
| **Queue** | Agent creates ticket for human team |
| **Live handoff** | Warm transfer with conversation summary |
| **Block** | Agent refuses action until human approves in admin UI |

### 18.3 Implementation Notes

- Approval UI required for High tier agents with write tools.
- Conversation summary for handoff: structured, factual, no invented context.
- Medium tier may use email draft pattern for v1.

---

## 19. Error Recovery

### 19.1 Error Categories

| Category | User-facing behavior |
| --- | --- |
| **Tool timeout** | Apologize briefly; retry once if safe; offer human help |
| **LLM provider outage** | Honest unavailability message; no fake responses |
| **Validation error** | Ask user to clarify input |
| **Permission denied** | Explain limitation; do not expose internal details |
| **Safety block** | Polite refusal |

### 19.2 Rules

- Never show stack traces or API keys to users.
- Log errors server-side with correlation id (Section 25).
- **No silent failures** — user always receives a response or explicit queue confirmation.
- Retry loops must have max attempts.

---

## 20. Security Principles

Extends `05_ENGINEERING.md` §19.3.

### 20.1 Prompt Injection Defense

- Treat user input as untrusted data, not instructions.
- System prompt instructs model to ignore override attempts.
- Separate user content from instructions using delimiters or message roles per provider best practice.
- Run adversarial eval cases (Section 24).

### 20.2 Output Safety

- Block or rewrite disallowed content categories per agent policy.
- Do not return secrets, env vars, or internal paths in responses.

### 20.3 Infrastructure

- Rate-limit public agent endpoints
- Authenticate agent APIs when not fully public
- Cost caps per session/tenant (token budgets)
- Dependency and provider security monitored

### 20.4 Client Service Agents

Agents built for clients (`03_SERVICES.md`) meet the same security bar — no shortcuts.

---

## 21. Authentication and Permissions

### 21.1 Identity

| Context | Authentication |
| --- | --- |
| **Public website chat** | Anonymous or optional login; minimal data |
| **Client portal agent** | Authenticated user; session per `05` auth patterns |
| **Internal KHANOS** | Founder/team auth; strongest controls |
| **API access** | API keys or OAuth per ADR |

### 21.2 Permissions

- Agent executes tools **on behalf of** authenticated principal.
- Row-level or tenant-level scoping for CRM and business data.
- Service accounts for agents with rotating credentials — not user passwords.

### 21.3 Authorization Matrix

Document in Agent Specification: which roles can invoke which tools and see which data.

---

## 22. Data Handling and Privacy

### 22.1 Principles

- **Minimize** collection — only data needed for the task
- **Purpose limit** — use data only for stated agent function
- **Retention limits** — define how long logs and memory persist
- **Redact logs** — no full credit cards, passwords, government ids in logs

### 22.2 Client Data

- Client-owned data stays scoped to that client tenant.
- Data processing terms in client agreements when applicable.
- Export/delete procedures documented before Launched.

### 22.3 Training Policy

**Default:** Customer conversation data is **not** used to train foundation models without explicit contractual consent.

---

## 23. Transparency and Disclosure

Required on every customer-facing agent interface (`01_BRAND.md`, `03_SERVICES.md` §8.2):

### 23.1 UI Disclosure

- Visible notice: user is interacting with AI (not only buried in terms).
- Capability summary accessible ("What I can help with").
- Link to human support or consultation when appropriate.

### 23.2 Behavioral Transparency

- Agent states when it is uncertain.
- Agent states when an action was taken via automation vs. pending human review.
- Agent does not claim emotions or human experiences deceptively.

### 23.3 Marketing Alignment

Website and product pages describe agent capabilities matching Agent Specification — no exaggeration (`02_PRODUCTS.md` §7.5).

---

## 24. Testing and Evaluation

### 24.1 Phased Testing Maturity

| Phase | When | Requirements |
| --- | --- | --- |
| **Phase 1** | Now — first agents | Manual golden Q&A; adversarial spot checks; lint/build for agent code |
| **Phase 2** | Pre-Launch agents | Automated eval script in CI; regression on prompt changes |
| **Phase 3** | Multiple Launched agents | Category eval libraries; monitoring alerts on quality drift |

**Current status:** Phase 1 only. Do not claim automated eval CI exists until implemented.

### 24.2 Eval Suite Components

| Component | Tests |
| --- | --- |
| **Golden Q&A** | Expected answers for common in-scope questions |
| **Refusal set** | Out-of-scope requests must decline correctly |
| **Injection set** | Prompt injection attempts must not override policy |
| **Tool tests** | Unit tests for each tool function |
| **Regression** | Run before every prompt/model version change |

### 24.3 Human Evaluation

Beta stage includes human review of real conversations (with consent). Sample for tone, accuracy, escalation appropriateness.

### 24.4 Launch Gate

No customer-facing **Launched** agent without:

- Documented eval suite
- Passing eval on release candidate
- Safety review for Medium+ risk tier

---

## 25. Logging, Monitoring, and Analytics

### 25.1 Logging (Required from Phase 1 Implementation)

Log per conversation turn (server-side):

- Correlation / session id
- Agent id and version
- Timestamp
- Tools invoked (names only)
- Latency
- Escalation events
- Errors (without secrets or full PII)

**Do not log:** full prompts with PII in production without policy; API keys; raw payment data.

### 25.2 Monitoring

| Metric | Alert when |
| --- | --- |
| Error rate | Spikes above baseline |
| Latency p95 | Exceeds target (Section 26) |
| Escalation rate | Unusual drop or spike |
| Tool failure rate | Above threshold |
| Token cost | Budget exceeded |

### 25.3 Analytics (Product)

Aggregate for improvement:

- Resolution without escalation (support agents)
- Conversation depth
- Top unanswered topics → knowledge gap fixes
- User satisfaction (when collected honestly — no fake scores)

---

## 26. Agent Performance Standards

| Metric | Target (customer-facing chat) | Notes |
| --- | --- | --- |
| **First response latency** | < 5s p95 (streaming starts sooner) | Depends on provider |
| **Availability** | 99.5%+ monthly (Launched agents) | Excludes provider outages |
| **Escalation appropriateness** | Measured via human review in Beta | Qualitative gate |
| **Cost per conversation** | Within budget per agent spec | Token + tool costs |

Adjust per agent category in Agent Specification. Internal agents (KHANOS) may have different targets.

---

## 27. Agent Specification Document

Required for every agent in **Planned** stage or beyond (`02_PRODUCTS.md` §10.1). Stored in `09_PRD.md` or `docs/agents/[agent-name].md`.

### 27.1 Agent Specification Template

```markdown
# [Agent Name] — Agent Specification

## Overview
- **Product:** [link to 02_PRODUCTS entry]
- **Status:** Concept | Planned | In Development | Beta | Launched
- **Primary category:** [Section 5 category]
- **Risk tier:** Low | Medium | High
- **Autonomy level:** L0–L3
- **Owner:** [name/role]

## Mission and value outcomes
[Which of the five value outcomes from 00_COMPANY.md]

## Scope
### In scope
- ...
### Out of scope
- ...

## Users and channels
- [e.g., website embed, API, internal only]

## Architecture (maturity phase)
- [Phase 1–5 from Section 14]
- Single-agent | Multi-agent (ADR link)

## System prompt
- Version: x.y.z
- Location: [file path]
- [Summary or link]

## Tools
| Tool | Permission | Risk | Approval required |
|------|------------|------|-------------------|

## Knowledge / RAG
- Sources:
- Refresh cadence:

## Memory
- Session only | Long-term (policy):

## Escalation
- Triggers:
- Handoff channel:

## Security and privacy
- Auth model:
- PII handled:
- Retention:

## Evaluation
- Golden set location:
- Pass criteria:

## Performance targets
- Latency, cost budgets

## Deployment
- Environments:
- Feature flags:

## Version history
| Version | Date | Changes |
```

---

## 28. Deployment Standards

Align with `05_ENGINEERING.md` §23.

### 28.1 Environments

| Environment | Agent behavior |
| --- | --- |
| **Local** | Dev keys; mock tools acceptable |
| **Preview** | Full stack; test data only |
| **Production** | Launched config only; real tools |

### 28.2 Deployment Rules

- Never deploy untested prompt versions to production (`03_SERVICES.md`).
- Use feature flags for new agent capabilities when possible.
- **Canary:** Route small % traffic to new prompt version before full rollout (when scale warrants).
- Rollback plan: previous prompt version tagged and deployable in minutes.

### 28.3 Model Provider Changes

Treated as **major version** bump — full eval regression required.

---

## 29. Versioning

### 29.1 Semantic Versioning for Agents

`MAJOR.MINOR.PATCH` applied to agent configuration bundle:

| Bump | When |
| --- | --- |
| **MAJOR** | Breaking behavior, scope change, model provider change |
| **MINOR** | New tools, expanded in-scope topics |
| **PATCH** | Prompt clarity, bug fixes, no behavior change intended |

### 29.2 Changelog

Every version recorded in Agent Specification with summary and eval result.

### 29.3 Customer Communication

Launched SaaS agents: notify customers of **major** behavior changes per product policy.

---

## 30. Continuous Improvement and Maintenance

### 30.1 Feedback Loops

- Beta user feedback → spec updates
- Production unanswered questions → knowledge base updates
- Escalation reasons → prompt or tool improvements
- Monitoring anomalies → incident review

### 30.2 Prompt Iteration

Continuous improvement is encouraged; **regression eval is mandatory** before promotion.

### 30.3 Dependency Maintenance

- LLM provider SDK updates tested in preview
- Tool API changes monitored
- Security patches applied per `05_ENGINEERING.md`

### 30.4 Ownership

Every Launched agent has a named owner responsible for maintenance (`05_ENGINEERING.md` §24).

---

## 31. Retirement Strategy

When an agent or agent product is **Retired** (`02_PRODUCTS.md`):

1. **Announce** — advance notice per customer agreements
2. **Migrate** — human support, successor agent, or export
3. **Disable** — API keys revoked; UI removed or redirected
4. **Data** — retention/deletion per privacy policy
5. **Document** — update `02_PRODUCTS.md`, archive Agent Specification
6. **Learn** — post-mortem: what to reuse in future agents

Do not silently turn off production agents.

---

## 32. Future Khan Industries AI Architecture

Directional recommendations — **not committed builds**.

### 32.1 Platform Components

| Component | Purpose |
| --- | --- |
| **Shared Agent Runtime** | Core orchestration, policy, logging for all products |
| **Tool Registry** | Central catalog of typed, permissioned tools |
| **Knowledge Layer** | Managed RAG pipelines per tenant |
| **Eval Platform** | CI integration, golden libraries per category |
| **Observability** | Traces, dashboards, cost analytics |
| **Marketplace Manifest** | Package format for distributable agents (`04_WEBSITE.md`) |

### 32.2 Roadmap Alignment

| Horizon | Focus |
| --- | --- |
| **Year 1** | SupportFlow + SiteScope as reference implementations; Phase 1–2 architecture |
| **Year 2** | Shared runtime modules; eval CI; LeadPilot, ReportGen |
| **Year 3** | Marketplace manifest; multi-tenant knowledge |
| **Year 5+** | Multi-agent enterprise orchestration; KHANOS externalization if justified |

### 32.3 Model and Provider Policy

- Provider selection (OpenAI, Anthropic, Azure, etc.) requires **ADR**
- Avoid claiming proprietary foundation models
- Design for provider portability where practical — no tight coupling in business logic

### 32.4 Reference Implementation

**SupportFlow AI** should be the first agent built to this manual — validating templates, eval process, and deployment path before vertical and CRM agents multiply complexity.

---

## 33. Agent Launch Checklist

### 33.1 Pre-Beta

- [ ] Agent Specification complete (Section 27)
- [ ] PRD in `09_PRD.md` aligned
- [ ] Risk tier assigned; controls implemented
- [ ] System prompt includes all required blocks (Section 16)
- [ ] Tools typed, permissioned, unit tested
- [ ] Golden eval suite defined and passing locally
- [ ] Transparency UI implemented
- [ ] Internal security review (Medium+ tier)
- [ ] `05_ENGINEERING.md` DoD satisfied for agent code

### 33.2 Pre-Launch (Beta → Launched)

- [ ] Beta feedback incorporated
- [ ] Eval regression passed on release version
- [ ] Adversarial / injection spot checks passed
- [ ] Logging and monitoring configured
- [ ] Performance within targets (Section 26)
- [ ] Product status updated in `02_PRODUCTS.md` and website
- [ ] Support/escalation path operational
- [ ] Rollback procedure documented
- [ ] Owner assigned for maintenance

### 33.3 Pre-Client Handoff (Services)

- [ ] All Pre-Launch items for client agent scope
- [ ] Client UAT scheduled per `03_SERVICES.md`
- [ ] Handoff documentation and runbook delivered

---

## 34. What Khan Industries AI Will Never Do

### Never

- **Never fake capabilities** — agents do not claim skills, integrations, or results they lack
- **Never hide AI identity** — users know they interact with AI
- **Never invent** clients, metrics, policies, prices, or availability
- **Never auto-execute** high-risk actions without approval when tier requires it
- **Never skip eval** for customer-facing Launched agents
- **Never log secrets or unnecessary PII**
- **Never use customer data for model training** without explicit consent
- **Never deploy** prompt changes to production without version control
- **Never build** manipulative, deceptive, or harmful agent behavior
- **Never present Concept agents as Launched** in product UI or marketing

### Always

- **Always document** agents in Agent Specification before Planned development
- **Always ground** factual claims in tools or RAG when possible
- **Always provide** human escalation path for customer-facing agents
- **Always align** tone with `01_BRAND.md`
- **Always improve** with eval-driven iteration

---

*This AI Agent Architecture Manual is part of the Khan Industries Operating System (KOS). For company foundation see `00_COMPANY.md`; for brand voice and transparency see `01_BRAND.md`; for products see `02_PRODUCTS.md`; for services see `03_SERVICES.md`; for digital platform see `04_WEBSITE.md`; for engineering standards see `05_ENGINEERING.md`; for sales see `07_SALES.md`; for roadmap see `08_ROADMAP.md`; for product requirements see `09_PRD.md`. For AI assistant operational rules see `AGENTS.md`.*

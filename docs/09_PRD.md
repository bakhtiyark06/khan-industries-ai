# Khan Industries — Product Requirements Manual

This document is the **single source of truth for how Khan Industries defines, approves, and maintains Product Requirements Documents (PRDs)** before any significant implementation begins.

It governs every founder, product owner, engineer, and AI assistant building software products, SaaS platforms, AI agents, websites, mobile applications, internal tools, automation workflows, APIs, dashboards, infrastructure, and client solutions for Khan Industries. This is an **internal operating manual** — not marketing copy, not a sprint backlog, and not a substitute for sibling KOS manuals.

If a product or project decision conflicts with this manual, **this manual wins** until it is deliberately updated.

> Ideas are not built. Every significant project begins with an approved Product Requirements Document. Every line of code traces to that PRD and aligns with the Khan Industries Operating System.

**Current implementation status:** Khan Industries is at **Maturity Stage 1 — Foundation** (`08_ROADMAP.md` §27). KOS manuals `00`–`08` are complete. This manual completes the KOS library and achieves **KOS v1.0** (`08_ROADMAP.md` §39, §43). No approved PRDs exist yet. The PRD registry (Section 6) is empty. The codebase is a default Next.js 16 starter. Do not invent infrastructure, budgets, domains, or client requirements in PRDs.

**Storage model:** This file is the **PRD Manual and registry**. Individual approved PRDs live in `docs/prds/PRD-YYYY-NNN.md` (folder created when the first PRD is approved). Agent Specifications live in `docs/agents/[name].md` per `06_AI_AGENTS.md` §27. [`02_PRODUCTS.md`](docs/02_PRODUCTS.md) §10.1 is interpreted as: *PRDs conform to this manual and are indexed in Section 6.*

---

## Table of Contents

### Part I — Foundation

1. [PRD Philosophy](#1-prd-philosophy)
2. [PRD Principles](#2-prd-principles)
3. [PRD Values and Non-Negotiables](#3-prd-values-and-non-negotiables)
4. [KOS Relationships and Scope](#4-kos-relationships-and-scope)
5. [Decision Framework](#5-decision-framework)

### Part II — Lifecycle and Registry

6. [PRD Registry and Naming](#6-prd-registry-and-naming)
7. [When a PRD Is Required](#7-when-a-prd-is-required)
8. [Official Development Lifecycle](#8-official-development-lifecycle)
9. [Product Lifecycle Phases](#9-product-lifecycle-phases)
10. [PRD Status Model](#10-prd-status-model)

### Part III — Product Identity

11. [Product Identity](#11-product-identity)

### Part IV — Standard PRD Template: Strategy and People

12. [Executive Summary](#12-executive-summary)
13. [Business Problem](#13-business-problem)
14. [Customer Problem](#14-customer-problem)
15. [Opportunity Statement](#15-opportunity-statement)
16. [Vision Statement](#16-vision-statement)
17. [Project Objectives](#17-project-objectives)
18. [Success Definition](#18-success-definition)
19. [Stakeholders](#19-stakeholders)
20. [Customer Personas](#20-customer-personas)
21. [User Journeys](#21-user-journeys)
22. [User Stories](#22-user-stories)

### Part V — Standard PRD Template: Requirements and Scope

23. [Functional Requirements](#23-functional-requirements)
24. [Non-Functional Requirements](#24-non-functional-requirements)
25. [Technical Constraints](#25-technical-constraints)
26. [Business Constraints](#26-business-constraints)
27. [Assumptions and Dependencies](#27-assumptions-and-dependencies)
28. [Risks](#28-risks)
29. [Scope and Out of Scope](#29-scope-and-out-of-scope)
30. [Acceptance Criteria, Definition of Done, and Exit Criteria](#30-acceptance-criteria-definition-of-done-and-exit-criteria)

### Part VI — Standard PRD Template: Architecture and Compliance

31. [Technical Architecture](#31-technical-architecture)
32. [AI Considerations](#32-ai-considerations)
33. [Security](#33-security)
34. [Compliance](#34-compliance)
35. [Analytics and KPIs](#35-analytics-and-kpis)

### Part VII — Infrastructure and Budget

36. [Infrastructure Planning](#36-infrastructure-planning)
37. [Budget and Resource Planning](#37-budget-and-resource-planning)

### Part VIII — Standard PRD Template: Delivery

38. [Testing Strategy](#38-testing-strategy)
39. [Release Strategy](#39-release-strategy)
40. [Deployment Strategy](#40-deployment-strategy)
41. [Documentation Requirements](#41-documentation-requirements)
42. [Training and Support](#42-training-and-support)
43. [Maintenance and Versioning](#43-maintenance-and-versioning)
44. [Future Enhancements](#44-future-enhancements)

### Part IX — Post-Delivery and Learning

45. [Post Launch Review and Post-Deployment Operations](#45-post-launch-review-and-post-deployment-operations)
46. [Lessons Learned](#46-lessons-learned)
47. [Decision Log](#47-decision-log)

### Part X — PRD Categories

48. [Internal Product PRDs](#48-internal-product-prds)
49. [Client Solution PRDs](#49-client-solution-prds)
50. [AI Agent PRDs](#50-ai-agent-prds)
51. [Website PRDs](#51-website-prds)
52. [Mobile App PRDs](#52-mobile-app-prds)
53. [Internal Tool PRDs](#53-internal-tool-prds)
54. [Infrastructure PRDs](#54-infrastructure-prds)
55. [Research and Prototype PRDs](#55-research-and-prototype-prds)
56. [PRD Lite Variant](#56-prd-lite-variant)
57. [PRD Bundle Pattern](#57-prd-bundle-pattern)

### Part XI — Readiness, AI, and Governance

58. [Project Readiness Checklist](#58-project-readiness-checklist)
59. [AI-Assisted Development Standards](#59-ai-assisted-development-standards)
60. [Required KOS Reading Order](#60-required-kos-reading-order)
61. [PRD Governance](#61-prd-governance)
62. [PRD Revision and Change Control](#62-prd-revision-and-change-control)

### Part XII — Closing

63. [KOS v1.0 and PRD Manual Completion](#63-kos-v10-and-prd-manual-completion)
64. [What Khan Industries PRDs Will Never Do](#64-what-khan-industries-prds-will-never-do)
65. [PRD Operational Checklists](#65-prd-operational-checklists)
66. [Master PRD Template Appendix](#66-master-prd-template-appendix)

---

## 1. PRD Philosophy

Khan Industries does not build ideas. Ideas become products through **disciplined planning** — documented requirements, explicit scope, honest constraints, and governance approval before implementation.

**Four PRD convictions:**

1. **Requirements before code.** No significant project bypasses the PRD process (`08_ROADMAP.md` SDR-003).
2. **Every line traces to a PRD.** Functional requirements map to acceptance criteria, tests, and Definition of Done (`05_ENGINEERING.md` §3).
3. **PRDs serve outcomes, not feature lists.** Every PRD maps to the five value outcomes in `00_COMPANY.md`.
4. **KOS alignment is a gate.** Projects that violate sibling manuals do not proceed to Cursor Agent Mode.

**PRD vs other documents:**

| Document | Owns |
| --- | --- |
| **Proposal / SOW** (`07`, `03`) | Commercial scope, pricing, client agreement |
| **PRD** (`docs/prds/`) | Technical and product requirements |
| **Agent Specification** (`06` §27) | Agent behavior, prompts, tools, safety |
| **ADR** (`05`) | Architecture decision record |
| **SDR** (`08` §44) | Company-wide strategic policy |
| **Cursor implementation plan** | How to build approved PRD scope — does not replace PRD |

---

## 2. PRD Principles

When this manual does not specify a detail, resolve trade-offs using these principles:

| Principle | Meaning |
| --- | --- |
| **Requirements before implementation** | PRD Approved before Agent Mode |
| **Outcomes over features** | Lead with business and customer problems |
| **KOS alignment is mandatory** | Explicit checklist per PRD (Section 4.3) |
| **Honesty in scope and metrics** | TBD labels over invention |
| **One approved PRD per significant initiative** | Traceability via registry |
| **Agent Spec accompanies agent PRDs** | `06` §27 required |
| **Plan Mode implements PRD** | Plan does not replace requirements |
| **Post-launch learning feeds the next PRD** | Lessons Learned section required at ship |

---

## 3. PRD Values and Non-Negotiables

| Value | PRD expression |
| --- | --- |
| **Quality** | Complete, reviewable, buildable specifications |
| **Integrity** | No fake personas, metrics, infrastructure, or budgets |
| **Clarity** | Numbered requirements; explicit scope boundaries |
| **Maintainability** | Versioned PRDs; decision logs; registry updates |

**Non-negotiables:**

- Never invent production domains, hosting accounts, or dollar amounts presented as fact.
- Never write client PRDs before signed SOW (`07_SALES.md`).
- Never mark product Status as Launched in a PRD unless `02_PRODUCTS.md` agrees.
- Never skip Project Readiness Checklist (Section 58) before development.
- Never store secret values inside PRD files.

---

## 4. KOS Relationships and Scope

### 4.1 KOS Dependency Map

| Topic | Owner | `09_PRD.md` responsibility |
| --- | --- | --- |
| Mission, value outcomes | `00_COMPANY.md` | Every PRD maps outcomes |
| Brand, UX, voice | `01_BRAND.md` | UX and copy requirements |
| Product portfolio, lifecycle | `02_PRODUCTS.md` | Status, naming, launch gates |
| Service delivery, SOW | `03_SERVICES.md` | Client PRD timing; UAT alignment |
| Website IA, phases | `04_WEBSITE.md` | Website PRD scope |
| DoD, stack, ADR, CI | `05_ENGINEERING.md` | Reference; do not duplicate |
| Agent Spec, eval, safety | `06_AI_AGENTS.md` | AI section + mandatory spec link |
| Sales, proposals | `07_SALES.md` | PRD after sale for custom work |
| EAR, SDR, initiatives | `08_ROADMAP.md` | Approval gates; registry links |
| AI assistant rules | `AGENTS.md` | Operational layer |

### 4.2 Storage Layers

| Layer | Location |
| --- | --- |
| PRD Manual + registry | `09_PRD.md` (this file) |
| PRD instances | `docs/prds/PRD-YYYY-NNN.md` |
| Agent Specifications | `docs/agents/[name].md` |
| ADRs | Per `05_ENGINEERING.md` |
| SDRs | Per `08_ROADMAP.md` §44 |

### 4.3 KOS Alignment Checklist (Required in Every PRD)

Every PRD instance must include this checklist. **Any violation blocks implementation.**

| Manual | Alignment statement | Pass? |
| --- | --- | --- |
| `00_COMPANY.md` | Maps to ≥1 value outcome | ☐ |
| `01_BRAND.md` | Voice, honesty, UX principles applied | ☐ |
| `02_PRODUCTS.md` | Status and portfolio fit correct | ☐ |
| `03_SERVICES.md` | Client tier/delivery aligned (if applicable) | ☐ |
| `04_WEBSITE.md` | IA/phases aligned (if web) | ☐ |
| `05_ENGINEERING.md` | Stack, DoD, security referenced | ☐ |
| `06_AI_AGENTS.md` | Agent Spec + eval (if AI) | ☐ |
| `07_SALES.md` | No pre-sale client PRD | ☐ |
| `08_ROADMAP.md` | Initiative approved; EAR if required | ☐ |

---

## 5. Decision Framework

### 5.1 Value-Outcome Test

Every PRD must map to at least one outcome from `00_COMPANY.md`:

1. Save time
2. Increase revenue
3. Reduce operational complexity (stress)
4. Improve customer experience (quality)
5. Make the business easier to run

### 5.2 Significant vs Trivial Work

| Significant (PRD required) | Trivial (PRD exempt) |
| --- | --- |
| New product, feature, website phase, agent | Typo fix, copy tweak |
| Client custom build | One-line config change |
| Infrastructure platform (auth, CI) | KOS patch clarification |
| Research spike >2 days | Dependency patch with no scope change |

When uncertain, treat as significant.

---

## 6. PRD Registry and Naming

### 6.1 Naming Convention

`PRD-YYYY-NNN` — e.g., `PRD-2026-001`

Link to initiative: `INIT-YYYY-NNN` from `08_ROADMAP.md` §12.

### 6.2 Registry Fields

| Field | Required |
| --- | --- |
| PRD ID | Yes |
| Title | Yes |
| Category | Yes (Section 48–55) |
| Status | Yes (Section 10) |
| Owner | Yes |
| Initiative ID | If applicable |
| File path | `docs/prds/PRD-YYYY-NNN.md` |
| Product status (`02`) | If product |
| EAR reference | If gated |
| Approved date | When Approved |
| Last updated | Yes |

### 6.3 PRD Registry (Stage 1)

*No approved PRDs yet. First expected entries when approved (directional only — not pre-written):*

| PRD ID | Title | Category | Status | Notes |
| --- | --- | --- | --- | --- |
| — | Website Phase 1 — Foundation | Website | — | Pending approval |
| — | SupportFlow AI v1 | Internal Product / AI Agent | — | Pending approval |

---

## 7. When a PRD Is Required

**Required when:**

- Product moves toward Planned (`02` §8)
- Website phase build begins (`04` §12)
- Client custom development after signed SOW
- Infrastructure initiative (CI, auth, shared runtime)
- AI agent enters Planned (`06` §27)
- Any work consuming >2 founder-days with production impact

**Exempt when:**

- Trivial fixes (Section 5.2)
- KOS patch with no build scope
- Research spike under PRD Lite (Section 56) with time box

**Gate:** No PRD in `docs/prds/` until initiative **Approved** per `08_ROADMAP.md` §11.

---

## 8. Official Development Lifecycle

Every significant project follows this lifecycle. Aligned with `08_ROADMAP.md` SDR-003 and `05_ENGINEERING.md` §14.

```
Business Idea
    ↓
Executive Discussion
    ↓
Product Requirements Document (Approved)
    ↓
Architecture
    ↓
Cursor Plan Mode
    ↓
Executive / Engineering Review
    ↓
Approval
    ↓
Cursor Agent Mode
    ↓
Testing
    ↓
Deployment
    ↓
Post Launch Review
    ↓
Continuous Improvement
```

| Step | Governance | Deliverable |
| --- | --- | --- |
| **Business Idea** | — | Initiative Identified (`08` §12) |
| **Executive Discussion** | EAR / Product Review if needed | Go/no-go |
| **PRD** | Product Review | Approved PRD in `docs/prds/` |
| **Architecture** | Engineering Review | ADR if needed; PRD §31 updated |
| **Cursor Plan Mode** | — | Implementation plan (not PRD) |
| **Executive / Engineering Review** | Human gate | Review notes |
| **Approval** | Owner sign-off | Decision Log entry |
| **Cursor Agent Mode** | Readiness Checklist (§58) | Code/docs per DoD |
| **Testing** | DoD `05` §3; PRD §38 | Test evidence |
| **Deployment** | PRD §40 | Live environment |
| **Post Launch Review** | Product Review | §45 report |
| **Continuous Improvement** | Roadmap update | PRD revision or new initiative |

---

## 9. Product Lifecycle Phases

Maps to `02_PRODUCTS.md` §8. Each phase defines objectives, deliverables, entry, exit, and approval.

### 9.1 Discovery

| Field | Detail |
| --- | --- |
| **Objectives** | Validate problem, outcome fit, feasibility |
| **Deliverables** | Problem statements; draft PRD sections 13–18 |
| **Entry** | Initiative Identified |
| **Exit** | Scored; Concept documented in `02` |
| **Approval** | Founder / Product Review |

### 9.2 Planning

| Field | Detail |
| --- | --- |
| **Objectives** | Approved PRD; sequenced on roadmap |
| **Deliverables** | Approved PRD; registry entry |
| **Entry** | Concept passes prioritization (`02` §6) |
| **Exit** | PRD Status = Approved |
| **Approval** | EAR if product/platform (`08` §29) |

### 9.3 Architecture

| Field | Detail |
| --- | --- |
| **Objectives** | Technical approach validated |
| **Deliverables** | PRD §31; ADR(s); infrastructure §36 drafted |
| **Entry** | PRD Approved |
| **Exit** | Architecture Approved on Readiness Checklist |
| **Approval** | Engineering Review |

### 9.4 Development

| Field | Detail |
| --- | --- |
| **Objectives** | Build to PRD scope |
| **Deliverables** | Code; tests; docs per DoD |
| **Entry** | Readiness Checklist passed; Plan approved |
| **Exit** | Core v1 complete; internal QA |
| **Approval** | Engineering Review |

### 9.5 Testing

| Field | Detail |
| --- | --- |
| **Objectives** | Verify acceptance criteria |
| **Deliverables** | Test results; FR/NFR traceability |
| **Entry** | Feature-complete per PRD |
| **Exit** | DoD satisfied; agent eval if applicable |
| **Approval** | Engineering + AI Review if agent |

### 9.6 Beta

| Field | Detail |
| --- | --- |
| **Objectives** | Real-world validation |
| **Deliverables** | Beta feedback incorporated |
| **Entry** | Internal QA passed |
| **Exit** | Launch checklist `02` §11 |
| **Approval** | Product Review |

### 9.7 Production (Launched)

| Field | Detail |
| --- | --- |
| **Objectives** | Public or client production release |
| **Deliverables** | Deployed system; honest status in `02` and website |
| **Entry** | Beta sign-off |
| **Exit** | Live; monitoring baseline |
| **Approval** | Founder / Product owner |

### 9.8 Maintenance

| Field | Detail |
| --- | --- |
| **Objectives** | Support, fixes, dependency updates |
| **Deliverables** | Patch releases; PRD minor revisions |
| **Entry** | Launched |
| **Exit** | Evolved or Retired decision |
| **Approval** | Product owner |

### 9.9 Retirement

| Field | Detail |
| --- | --- |
| **Objectives** | Orderly decommission |
| **Deliverables** | Migration plan; `02` status Retired |
| **Entry** | Strategic decision to retire |
| **Exit** | System decommissioned; docs archived |
| **Approval** | EAR if material |

---

## 10. PRD Status Model

| Status | Meaning |
| --- | --- |
| **Draft** | Authoring; not binding |
| **In Review** | Submitted for approval |
| **Approved** | Authorized for architecture and planning |
| **In Build** | Agent Mode implementation active |
| **Shipped** | Deployed per PRD scope; post-launch ops active |
| **Superseded** | Replaced by newer PRD version; archived |

**PRD versioning:** `PRD v1.0`, `v1.1` for material scope changes. Increment when estimates or scope change materially (Section 37).

---

## 11. Product Identity

Every PRD instance begins with **Product Identity** — the official record of what is being built.

| Field | Required | Guidance |
| --- | --- | --- |
| **Internal Name** | Yes | Codename if different from public name |
| **Public Name** | Yes | Per `02_PRODUCTS.md` §9 naming |
| **Repository** | Yes | e.g., `khan-industries-ai` or product repo URL |
| **Product Owner** | Yes | Accountable person |
| **PRD Version** | Yes | e.g., v1.0 |
| **Status** | Yes | Must match `02` product status — Concept / Planned / In Development / Beta / Launched |
| **Category** | Yes | Section 48–55 type |
| **Related Services** | If applicable | `03_SERVICES.md` links |
| **Related AI Agents** | If applicable | Agent Spec path |
| **Related Products** | If applicable | `02` portfolio links |
| **Target Market** | Yes | Honest description; no fake TAM |
| **Production Domain** | Yes | URL or **TBD Before Production** |
| **Development Domain** | Yes | Preview URL or **TBD Before Production** |
| **Initiative ID** | If applicable | `INIT-YYYY-NNN` |
| **EAR / SDR refs** | If applicable | Governance links |

---

## 12. Executive Summary

One-page summary for executives and reviewers: what is being built, for whom, why now, expected outcomes, timeline range, and approval status. No hype. No invented traction.

---

## 13. Business Problem

The organization's pain — operational, financial, or strategic. Map to five value outcomes. Distinct from customer-facing pain (Section 14).

---

## 14. Customer Problem

The end user's pain in their words. Ground in discovery (`07` consultation notes) or honest product hypothesis. Label **TBD pending Beta research** when unvalidated.

---

## 15. Opportunity Statement

Why this project now; what happens if Khan Industries does not build it. No invented market size or competitor revenue claims.

---

## 16. Vision Statement

Product-specific vision aligned to `00_COMPANY.md` company vision — what success looks like in 1–2 years for this product.

---

## 17. Project Objectives

Numbered objectives for this PRD version. Each objective must be achievable and testable within stated scope.

---

## 18. Success Definition

Measurable success criteria. Distinguish:

- **Launch success** — ship criteria
- **30-day success** — post-launch (`02` §11.3)
- **90-day success** — adoption or revenue signals (when measurable)

Baselines may be **TBD until Beta** with explicit label.

---

## 19. Stakeholders

| Role | Name | Responsibility |
| --- | --- | --- |
| Product Owner | | Accountable |
| Engineering | | Builds |
| Reviewer / Approver | | Signs Approved |
| Client contact | | If client PRD |

RACI-light: who is Responsible, Accountable, Consulted, Informed.

---

## 20. Customer Personas

Align to `04_WEBSITE.md` §3 and `07_SALES.md` §6 where applicable. Early-stage: personas may be hypothesis — label **Hypothesis — validate in Beta**.

---

## 21. User Journeys

Primary flows (happy path + critical edge cases). Diagram or numbered steps. Source for functional requirements.

---

## 22. User Stories

Format:

```
As a [persona], I want [action], so that [outcome].

Acceptance:
- [ ] Criterion 1
- [ ] Criterion 2
```

Link stories to FR-NNN where appropriate.

---

## 23. Functional Requirements

Numbered **FR-001**, **FR-002**, …

| ID | Requirement | Priority (MoSCoW) | Acceptance reference |
| --- | --- | --- | --- |
| FR-001 | | Must / Should / Could / Won't | |

Must-have requirements define v1. Could/Won't items go to Future Enhancements (Section 44).

---

## 24. Non-Functional Requirements

Numbered **NFR-001**, …

| Category | Examples |
| --- | --- |
| Performance | Page load, agent latency |
| Accessibility | WCAG 2.1 AA (`01`, `05`) |
| Reliability | Uptime targets when Launched |
| Security | Auth, encryption |
| Scalability | Expected load range — honest |

---

## 25. Technical Constraints

Stack and patterns from `05_ENGINEERING.md` §5. Integrations required. Must not contradict engineering standards without ADR.

---

## 26. Business Constraints

Timeline ranges, budget confidence (Section 37), engagement tier (`03`/`07`), team capacity, client contractual limits.

---

## 27. Assumptions and Dependencies

**Assumptions:** what we believe true without proof yet.

**Dependencies:** other PRDs, products, APIs, client deliverables, third-party services.

---

## 28. Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| | Low/Med/High | Low/Med/High | |

Include technical, business, reputational, and honesty risks (overpromising AI).

---

## 29. Scope and Out of Scope

**In scope:** explicit list tied to FR-NNN.

**Out of scope:** explicit exclusions — prevents scope creep disputes.

**Change control:** material changes require PRD revision and possibly `03` change order (client work).

---

## 30. Acceptance Criteria, Definition of Done, and Exit Criteria

### 30.1 PRD Acceptance Criteria

Conditions for PRD Approval (meta):

- [ ] All required sections complete
- [ ] KOS Alignment Checklist (§4.3) passed
- [ ] Stakeholder review complete

### 30.2 Definition of Done (Engineering)

PRD references `05_ENGINEERING.md` §3 — universal, UI, API, AI, client deliverable checklists as applicable. PRD does not duplicate full DoD.

### 30.3 Exit Criteria by Phase

| Phase | Exit evidence |
| --- | --- |
| Beta | Internal QA + limited users |
| Launched | `02` §11 checklist |
| Retired | Decommission complete |

---

## 31. Technical Architecture

High-level components, data flow, key routes/APIs. Link ADRs. Input for Cursor Plan Mode. Defer implementation detail to plan and code.

---

## 32. AI Considerations

Required when product includes AI:

| Field | Content |
| --- | --- |
| Agent category | `06` §5 |
| Risk tier | Low / Medium / High |
| Autonomy level | L0–L3 |
| Agent Spec link | `docs/agents/[name].md` |
| Eval suite | Per `06` §24 |
| Transparency | UI disclosure requirements |
| Provider | ADR for LLM provider |

---

## 33. Security

Per `05_ENGINEERING.md` §19: secrets handling, auth model, input validation, data classification. No credentials in PRD.

---

## 34. Compliance

Privacy policy alignment, AI disclosure (`06` §23), client data handling for service PRDs, accessibility legal baseline.

---

## 35. Analytics and KPIs

| Event / metric | Purpose | Baseline |
| --- | --- | --- |
| | | TBD until Beta |

No invented conversion rates or user counts.

---

## 36. Infrastructure Planning

**Mandatory in every PRD.** If unknown, state **TBD Before Production** — never invent.

| Field | Value / TBD |
| --- | --- |
| **Production Domain** | TBD Before Production |
| **Development Domain** | TBD Before Production |
| **Hosting** | TBD (e.g., Vercel when decided) |
| **Cloud Provider** | TBD Before Production |
| **Repository** | `khan-industries-ai` or product repo |
| **Environment Variables** | List names only — no values |
| **Secrets** | Hosting secrets manager — TBD Before Production |
| **SSL** | TBD Before Production |
| **DNS** | TBD Before Production |
| **Monitoring** | TBD Before Production (`05` §18) |
| **Analytics** | TBD or product choice |
| **CI/CD** | Per `05` §23 phased adoption — Phase 1: lint/build manual |
| **Deployment Environments** | local / preview / production — define when known |

The infrastructure block must **exist** even when entirely TBD — explicit honesty over omission.

---

## 37. Budget and Resource Planning

Estimates include **confidence level**: Low / Medium / High. Revise through Planning → Architecture → Development. Increment PRD version on material change.

| Estimate | Value | Confidence | Notes |
| --- | --- | --- | --- |
| Development Time | TBD | Low | Range OK |
| Engineering Effort | TBD | Low | Person-weeks or T-shirt |
| Estimated Budget (internal) | TBD | Low | Not public |
| Infrastructure Cost (monthly) | TBD Before Production | Low | |
| Monthly Operating Cost | TBD | Low | Post-launch |
| Third-Party Services | TBD | Low | LLM, hosting, email |
| API Costs | TBD | Low | Per product/agent |
| Subscription Costs | TBD | Low | SaaS tools |
| Maintenance Cost | TBD | Low | Ongoing ownership |

**Rule:** TBD is acceptable at Concept/Planned. False precision is not.

---

## 38. Testing Strategy

Align to `05_ENGINEERING.md` §21 phased adoption:

| Phase | PRD testing requirement |
| --- | --- |
| Phase 1 (now) | lint + build + manual smoke |
| Phase 2 | Vitest unit tests for critical paths |
| Phase 3 | Playwright E2E for critical flows |
| Agents | Eval suite per `06` §24 |

Include **FR/NFR traceability matrix:**

| FR/NFR | Test type | Test location |
| --- | --- | --- |
| FR-001 | Manual / Unit / E2E | |

---

## 39. Release Strategy

Beta audience, feedback window, launch criteria (`02` §11), feature flags if applicable, status label on website.

---

## 40. Deployment Strategy

Environments, deployment steps per `05` §23, rollback procedure, smoke test after deploy.

---

## 41. Documentation Requirements

| Doc | Update required |
| --- | --- |
| PRD | Status → Shipped; lessons learned |
| `02_PRODUCTS.md` | Status changes |
| `04_WEBSITE.md` | If web surfaces change |
| `06` Agent Spec | If agent behavior changes |
| KOS manuals | If standards change — KOS release |
| README / inline | Code documentation per `05` §22 |

---

## 42. Training and Support

Client training deliverables (`03` §5), admin docs, escalation path (`07`), hypercare window for client PRDs.

---

## 43. Maintenance and Versioning

Product semver, PRD version sync, dependency update cadence, named maintenance owner.

---

## 44. Future Enhancements

v2+ ideas — explicitly **not committed scope**. May inform `08` initiative registry.

---

## 45. Post Launch Review and Post-Deployment Operations

### 45.1 Post Launch Review (30 days)

Per `02_PRODUCTS.md` §11.3:

- What is working?
- What metrics moved (if measurable)?
- What friction remains?
- PRD success criteria met?
- Next phase or iteration?

### 45.2 Post-Deployment Operations Standards

| Area | Standard |
| --- | --- |
| **Monitoring** | Define what to watch; TBD until Launched |
| **Logging** | Per `05` §18 — structured, no secrets |
| **Customer feedback** | Honest collection; no fake NPS |
| **Issue tracking** | Process for bugs and requests |
| **Maintenance ownership** | Named owner |
| **Version updates** | Semver + changelog |
| **Roadmap alignment** | Update `08` initiative/milestone |
| **Continuous improvement** | Feed Lessons Learned (§46) |

---

## 46. Lessons Learned

Completed after launch or retirement. What worked, what failed, what to repeat or avoid. Feeds next PRD and `02` product strategy.

---

## 47. Decision Log

PRD-local decisions (not company-wide SDRs):

| Date | Decision | Rationale | Decider |
| --- | --- | --- | --- |

Link to SDR-NNN when implementing company policy from `08` §44.

**PRD vs SDR:** SDR = company-wide enduring policy. Decision Log = project-specific choices.

---

## 48. Internal Product PRDs

**Purpose:** Khan Industries-owned scalable products.

**Examples:** SupportFlow AI, SiteScope AI, StudyFlow, KHANOS (all **Concept** unless `02` states otherwise).

**Rules:**

- Full PRD template required
- EAR before Concept → Planned (`08` §29)
- Product Identity Status must match `02`
- EAR for Planned transition

**Emphasis:** Success metrics, recurring revenue model, `02` lifecycle.

---

## 49. Client Solution PRDs

**Purpose:** Custom client deliverables per signed SOW.

**Examples:** Restaurant AI deployment, Construction CRM, Real Estate Dashboard, custom automations.

**Rules:**

- **PRD only after signed SOW** (`07_SALES.md`)
- Commercial scope in SOW; technical scope in PRD
- Client stakeholders in Section 19
- `03_SERVICES.md` UAT and handoff in Sections 38, 42
- May produce patterns for future `02` products — document in Lessons Learned

---

## 50. AI Agent PRDs

**Purpose:** Any product or service involving AI agents.

**Rules:**

- Full PRD + **mandatory** Agent Specification (`06` §27)
- Eval suite before Beta (`06` §33)
- AI Considerations (Section 32) required
- Transparency and risk tier assigned
- AI Review before launch

**Relationship:** PRD defines *what* the agent product does; Agent Spec defines *how it behaves*.

---

## 51. Website PRDs

**Purpose:** Khan Industries website and digital platform phases.

**Scope source:** `04_WEBSITE.md` §12 phase checklists.

**Rules:**

- One PRD per phase or major feature (`04` §11)
- No fake portfolio or testimonials in requirements
- Brand review (`01`) on Readiness Checklist
- Honest product status labels in FRs

---

## 52. Mobile App PRDs

**Purpose:** Future mobile applications (`02` §15).

**Rules:**

- Full template when active
- Platform constraints (iOS/Android)
- App store compliance — TBD Before Production
- Directional until mobile strategy EAR-approved

---

## 53. Internal Tool PRDs

**Purpose:** CRM stubs, ops tooling, founder utilities.

**Rules:**

- May use **PRD Lite** (Section 56) if low risk and internal-only
- No customer-facing honesty concerns — still no fake data
- Engineering Review still required

---

## 54. Infrastructure PRDs

**Purpose:** CI/CD, auth platform, shared AI runtime, deployment systems.

**Examples:** GitHub Actions CI, auth routes, shared agent runtime (`06` §32).

**Rules:**

- EAR required
- ADR-heavy architecture section
- Infrastructure Planning (§36) fully specified when possible
- Enables other product PRDs

---

## 55. Research and Prototype PRDs

**Purpose:** Time-boxed spikes and feasibility studies.

**Rules:**

- **PRD Lite** (Section 56) acceptable
- Explicit kill criteria and max duration
- Outcome: proceed to full PRD, pivot, or retire
- No production deploy without full PRD + Readiness Checklist

---

## 56. PRD Lite Variant

For low-risk internal tools and research spikes.

**Required sections only:**

1. Product Identity (abbreviated)
2. Business / Customer Problem
3. Scope and Out of Scope
4. Acceptance Criteria
5. Definition of Done reference
6. Risks (brief)
7. KOS Alignment Checklist
8. Time box / kill criteria (research)

Full template required before any customer-facing or Launched product.

---

## 57. PRD Bundle Pattern

When one program spans multiple surfaces (e.g., Website Phase 1 + SupportFlow demo):

| Element | Rule |
| --- | --- |
| **Parent** | Initiative ID + optional umbrella PRD summary |
| **Children** | Separate `PRD-YYYY-NNN` per surface |
| **Registry** | Cross-linked in Section 6 |
| **Readiness** | Each child passes §58; parent tracks overall |

---

## 58. Project Readiness Checklist

**No implementation (Cursor Agent Mode) begins until all items pass.**

- [ ] **PRD Approved** — Status = Approved; registry updated
- [ ] **Architecture Approved** — ADR if needed; §31 complete
- [ ] **Branding Reviewed** — `01_BRAND.md` alignment for user-facing work
- [ ] **Engineering Review Complete** — stack, DoD path confirmed
- [ ] **Infrastructure Planned** — §36 exists (TBD fields acceptable)
- [ ] **Acceptance Criteria Approved** — FR/NFR reviewed
- [ ] **Risks Documented** — §28 complete
- [ ] **Success Metrics Defined** — §18 (TBD until Beta labeled if needed)
- [ ] **Required Documentation Complete** — PRD + Agent Spec if AI

Record readiness sign-off in PRD Decision Log with date and approver.

---

## 59. AI-Assisted Development Standards

Aligned with `05_ENGINEERING.md` §14 and `08` SDR-003.

### 59.1 Cursor Plan Mode

| Rule | Detail |
| --- | --- |
| **When** | Multi-file features, new architecture, ambiguous scope |
| **Input** | Approved PRD + KOS reads (Section 60) |
| **Output** | Implementation plan for human approval — not code |
| **Prohibited** | Replacing PRD; editing plan files during execution |

### 59.2 Cursor Agent Mode

| Rule | Detail |
| --- | --- |
| **When** | After Plan approved + Readiness Checklist passed |
| **Scope** | Approved plan + PRD only — no scope creep |
| **Required** | `npm run lint`, `npm run build` per `05` §3 |
| **Prohibited** | Unapproved dependencies; honesty violations |

### 59.3 Human Review Requirements

| Stage | Reviewer (Stage 1) |
| --- | --- |
| PRD Approval | Founder |
| Plan Approval | Founder |
| Code / docs before merge | Founder self-review minimum (`05` §12.4) |
| Launch | Product Review + AI Review if agent |

Stage 2+: peer review required per `05` §12.

### 59.4 Workflow

```
Read KOS + Approved PRD (+ Agent Spec if AI)
    ↓
Cursor Plan Mode → implementation plan
    ↓
Human review → Approval
    ↓
Project Readiness Checklist (§58)
    ↓
Cursor Agent Mode → implement
    ↓
DoD (05 §3) + PRD acceptance criteria
    ↓
Git commit → push → deployment
    ↓
Update PRD status, registry, lessons learned
```

---

## 60. Required KOS Reading Order

Before Cursor Plan Mode, read applicable manuals:

| Project type | Required reading |
| --- | --- |
| **Any** | `README.md`, `AGENTS.md`, `09_PRD.md`, approved PRD |
| **Internal product** | `00`, `01`, `02`, `05`, `08` |
| **AI agent** | + `06`, Agent Spec |
| **Website** | + `04`, `01` |
| **Client solution** | + `03`, `07` (post-SOW), signed SOW |
| **Infrastructure** | + `05`, `08` (EAR record) |

---

## 61. PRD Governance

| Event | Review | Record |
| --- | --- | --- |
| Concept → Planned | EAR (`08` §29) | EAR record; optional SDR |
| PRD Approved | Product Review | Registry; Status = Approved |
| Architecture | Engineering Review | ADR; Readiness item |
| Major scope change (>25%) | Engineering Review + EAR | PRD revision; decision log |
| KOS impact | KOS Review | KOS patch/minor release |
| Agent launch | AI Review (`08` §34) | Eval evidence |
| Launch | Product Review | `02` §11; milestone `08` |
| Policy change | EAR | SDR (`08` §44) |
| Roadmap conflict | Roadmap Review (`08` §35) | Horizon update |

---

## 62. PRD Revision and Change Control

| Change type | Process |
| --- | --- |
| Minor (clarifications) | PRD patch version; owner approval |
| Material scope | PRD minor version; re-review FR/NFR; EAR if >25% |
| Client scope | `03` change order + PRD revision |
| Cancelled initiative | PRD Status → Superseded; reason in registry |

---

## 63. KOS v1.0 and PRD Manual Completion

Completing this manual (`09_PRD.md`) achieves **KOS v1.0** per [`08_ROADMAP.md`](docs/08_ROADMAP.md):

| Version | Definition |
| --- | --- |
| **KOS v0.9** | Manuals `00`–`07` established |
| **KOS v0.95** | `08_ROADMAP.md` governance manual added |
| **KOS v1.0** | `09_PRD.md` complete — full KOS library `00`–`09` operational |

**Milestone:** MILE-BIZ-001 (`08` §18) — KOS v1.0 complete.

**Follow-up (optional, separate approval):** Update `08` §8 status line, `02` §10.1 PRD storage wording, `README.md` description to reflect manual + `docs/prds/` convention.

---

## 64. What Khan Industries PRDs Will Never Do

- **Never** bypass approval before Agent Mode
- **Never** invent infrastructure, domains, or budgets as facts
- **Never** invent personas, user counts, or conversion metrics
- **Never** write pre-sale client PRDs
- **Never** replace Agent Spec with PRD for agents
- **Never** replace PRD with Cursor plan
- **Never** mark Launched without `02` agreement
- **Never** store secrets in PRD files
- **Never** skip KOS Alignment Checklist
- **Never** present Concept products as production-ready in requirements

---

## 65. PRD Operational Checklists

### 65.1 Pre-Approval

- [ ] All template sections complete (or PRD Lite equivalent)
- [ ] Product Identity complete
- [ ] KOS Alignment Checklist passed
- [ ] Initiative Approved in `08`
- [ ] EAR complete if required
- [ ] Infrastructure section exists
- [ ] Budget estimates with confidence levels

### 65.2 Pre-Plan Mode

- [ ] PRD Status = Approved
- [ ] KOS reading order completed (§60)
- [ ] Agent Spec exists if AI

### 65.3 Pre-Agent Mode

- [ ] Project Readiness Checklist (§58) passed
- [ ] Implementation plan approved
- [ ] Branch created if code work

### 65.4 Pre-Launch

- [ ] `02` §11 launch checklist
- [ ] `06` §33 if agent
- [ ] PRD reflects shipped v1 scope
- [ ] Website status labels honest

### 65.5 Post-Launch

- [ ] Post Launch Review (§45) within 30 days
- [ ] Lessons Learned (§46)
- [ ] Registry updated — Status Shipped
- [ ] `08` milestone if applicable

---

## 66. Master PRD Template Appendix

Copy to `docs/prds/PRD-YYYY-NNN.md` when creating a new PRD.

```markdown
# [Public Name] — Product Requirements Document

**PRD ID:** PRD-YYYY-NNN
**PRD Version:** v1.0
**Status:** Draft | In Review | Approved | In Build | Shipped | Superseded
**Last Updated:** YYYY-MM-DD

---

## Product Identity

| Field | Value |
| --- | --- |
| Internal Name | |
| Public Name | |
| Repository | |
| Product Owner | |
| Product Status (02) | Concept / Planned / In Development / Beta / Launched |
| Category | |
| Related Services | |
| Related AI Agents | |
| Related Products | |
| Target Market | |
| Production Domain | TBD Before Production |
| Development Domain | TBD Before Production |
| Initiative ID | INIT-YYYY-NNN |
| EAR / SDR | |

---

## Executive Summary

[One page]

---

## Business Problem

---

## Customer Problem

---

## Opportunity Statement

---

## Vision Statement

---

## Project Objectives

1.
2.

---

## Success Definition

| Metric | Target | Baseline |
| --- | --- | --- |
| | TBD until Beta | |

---

## Stakeholders

| Role | Name | RACI |
| --- | --- | --- |

---

## Customer Personas

---

## User Journeys

---

## User Stories

---

## Functional Requirements

| ID | Requirement | Priority | Acceptance |
| --- | --- | --- | --- |
| FR-001 | | Must | |

---

## Non-Functional Requirements

| ID | Requirement | Category |
| --- | --- | --- |
| NFR-001 | | |

---

## Technical Constraints

---

## Business Constraints

---

## Assumptions

---

## Dependencies

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |

---

## Scope

---

## Out of Scope

---

## Acceptance Criteria (PRD)

- [ ]

---

## Definition of Done

Reference: `05_ENGINEERING.md` §3

---

## Exit Criteria

| Phase | Criteria |
| --- | --- |

---

## Technical Architecture

[Components, data flow, ADR links]

---

## AI Considerations

| Field | Value |
| --- | --- |
| Agent Spec | docs/agents/ |
| Risk tier | |
| Eval suite | |

---

## Security

---

## Compliance

---

## Analytics and KPIs

| Event | Purpose |
| --- | --- |

---

## Infrastructure Planning

| Field | Value |
| --- | --- |
| Production Domain | TBD Before Production |
| Development Domain | TBD Before Production |
| Hosting | TBD |
| Cloud Provider | TBD Before Production |
| Repository | |
| Environment Variables | [names only] |
| Secrets | TBD Before Production |
| SSL | TBD Before Production |
| DNS | TBD Before Production |
| Monitoring | TBD Before Production |
| Analytics | TBD |
| CI/CD | Per 05 §23 |
| Deployment Environments | local / preview / production |

---

## Budget and Resource Planning

| Estimate | Value | Confidence |
| --- | --- | --- |
| Development Time | TBD | Low |
| Engineering Effort | TBD | Low |
| Estimated Budget | TBD | Low |
| Infrastructure Cost (monthly) | TBD Before Production | Low |
| Monthly Operating Cost | TBD | Low |
| Third-Party Services | TBD | Low |
| API Costs | TBD | Low |
| Subscription Costs | TBD | Low |
| Maintenance Cost | TBD | Low |

---

## Testing Strategy

| FR/NFR | Test type | Location |
| --- | --- | --- |

---

## Release Strategy

---

## Deployment Strategy

---

## Documentation Requirements

---

## Training and Support

---

## Maintenance and Versioning

---

## Future Enhancements

---

## Post Launch Review

[Complete after launch]

---

## Lessons Learned

[Complete after launch]

---

## Decision Log

| Date | Decision | Rationale | Decider |
| --- | --- | --- | --- |

---

## Open Questions

| # | Question | Owner | Resolution date |
| --- | --- | --- | --- |

---

## KOS Alignment Checklist

| Manual | Pass? |
| --- | --- |
| 00_COMPANY | ☐ |
| 01_BRAND | ☐ |
| 02_PRODUCTS | ☐ |
| 03_SERVICES | ☐ |
| 04_WEBSITE | ☐ |
| 05_ENGINEERING | ☐ |
| 06_AI_AGENTS | ☐ |
| 07_SALES | ☐ |
| 08_ROADMAP | ☐ |
```

---

*This Product Requirements Manual is part of the Khan Industries Operating System (KOS). Completing this document achieves **KOS v1.0**. For company foundation see `00_COMPANY.md`; for brand standards see `01_BRAND.md`; for products see `02_PRODUCTS.md`; for services see `03_SERVICES.md`; for digital platform see `04_WEBSITE.md`; for engineering standards see `05_ENGINEERING.md`; for AI agent standards see `06_AI_AGENTS.md`; for sales see `07_SALES.md`; for roadmap and governance see `08_ROADMAP.md`. For AI assistant operational rules see `AGENTS.md`.*

# Khan Industries — Strategic Roadmap & Governance Manual

This document is the **single source of truth for Khan Industries' long-term strategic direction, planning horizons, executive governance, company maturity progression, and Khan Industries Operating System (KOS) release management**.

It governs every founder, executive contributor, and AI assistant involved in company-level planning — from immediate operational focus through decade-scale vision. This is an **internal executive manual** — not a sprint backlog, not marketing copy, and not a substitute for domain manuals in `02`–`07`.

If a strategic or governance decision conflicts with this manual, **this manual wins** until it is deliberately updated.

> Strategy is a commitment discipline, not a wish list. Khan Industries plans in horizons, governs through review, versions its operating system deliberately, and measures progress honestly — building a globally respected technology company one verified milestone at a time.

**Current implementation status:** Khan Industries is an early-stage company at **Maturity Stage 1 — Foundation**. KOS manuals `00`–`07` are complete; `08` (this document) and `09_PRD.md` are in progress. The codebase is a default Next.js 16 starter with no launched products, no PRDs, and no verified public milestones. Standards in this manual describe **target strategic practice** with **stage-appropriate governance cadence**.

**Relationship to domain manuals:** `02_PRODUCTS.md` through `07_SALES.md` own *how* each domain operates. This manual owns *when* major cross-domain initiatives are sequenced, *how* they are governed, and *how* the KOS itself evolves.

---

## Table of Contents

### Part I — Foundation

1. [Roadmap Philosophy](#1-roadmap-philosophy)
2. [Strategic Planning Principles](#2-strategic-planning-principles)
3. [Roadmap Values and Non-Negotiables](#3-roadmap-values-and-non-negotiables)
4. [KOS Relationships and Scope](#4-kos-relationships-and-scope)
5. [Decision Framework](#5-decision-framework)

### Part II — Planning Horizons

6. [Strategic Planning Horizons](#6-strategic-planning-horizons)
7. [Horizon Planning Rules](#7-horizon-planning-rules)
8. [Current Strategic Position](#8-current-strategic-position)
9. [North Star and First Major Business Goal](#9-north-star-and-first-major-business-goal)

### Part III — Prioritization and Initiative Lifecycle

10. [Prioritization Framework](#10-prioritization-framework)
11. [Strategic Initiative Lifecycle](#11-strategic-initiative-lifecycle)
12. [Initiative Registry Standard](#12-initiative-registry-standard)
13. [Conflict Resolution](#13-conflict-resolution)

### Part IV — Strategic Areas

14. [Leadership, Growth, and Operations](#14-leadership-growth-and-operations)
15. [Product, Services, and Innovation](#15-product-services-and-innovation)
16. [Go-to-Market and People](#16-go-to-market-and-people)
17. [Platform, Security, and Expansion](#17-platform-security-and-expansion)

### Part V — Milestone Framework

18. [Business Milestones](#18-business-milestones)
19. [Product Milestones](#19-product-milestones)
20. [Engineering Milestones](#20-engineering-milestones)
21. [AI Milestones](#21-ai-milestones)
22. [Website and Digital Milestones](#22-website-and-digital-milestones)
23. [Services Milestones](#23-services-milestones)
24. [Sales and Customer Success Milestones](#24-sales-and-customer-success-milestones)
25. [Hiring and Leadership Milestones](#25-hiring-and-leadership-milestones)

### Part VI — Company Maturity Model

26. [Company Maturity Model](#26-company-maturity-model)
27. [Current Maturity Assessment](#27-current-maturity-assessment)

### Part VII — Governance and Reviews

28. [Governance Overview](#28-governance-overview)
29. [Executive Architecture Review (EAR)](#29-executive-architecture-review-ear)
30. [Quarterly Strategy Review (QSR)](#30-quarterly-strategy-review-qsr)
31. [Annual Company Review (ACR)](#31-annual-company-review-acr)
32. [Engineering Review](#32-engineering-review)
33. [Product Review](#33-product-review)
34. [AI Review](#34-ai-review)
35. [Roadmap Review](#35-roadmap-review)
36. [KOS Review](#36-kos-review)
37. [Review Calendar and Cadence Summary](#37-review-calendar-and-cadence-summary)

### Part VIII — KOS Release Management

38. [KOS as a Living Operating System](#38-kos-as-a-living-operating-system)
39. [KOS Versioning Philosophy](#39-kos-versioning-philosophy)
40. [Release Types](#40-release-types)
41. [Release Notes Standards](#41-release-notes-standards)
42. [Approval and Review Process](#42-approval-and-review-process)
43. [Document Ownership and Historical Record](#43-document-ownership-and-historical-record)
44. [Strategic Decision Records (SDRs)](#44-strategic-decision-records-sdrs)

### Part IX — Risk, Innovation, and Closing

45. [Risk Management and Strategic Risks](#45-risk-management-and-strategic-risks)
46. [Innovation and Research Strategy](#46-innovation-and-research-strategy)
47. [Technology Adoption Framework](#47-technology-adoption-framework)
48. [Long-Term Vision](#48-long-term-vision)
49. [What Khan Industries Roadmap Will Never Do](#49-what-khan-industries-roadmap-will-never-do)

---

## 1. Roadmap Philosophy

Khan Industries plans for decades but executes in verified phases. The roadmap exists to align ambition with honesty — ensuring the company builds toward a globally respected technology portfolio without pretending to be further along than reality allows.

**Four strategic convictions:**

1. **Horizons over sprints.** Executive strategy spans six planning horizons. Sprint-level work belongs in PRDs and engineering workflow — not in this manual.
2. **Governance enables speed.** Reviews, EAR, and KOS versioning prevent costly rework — they are not bureaucracy for its own sake.
3. **One authoritative sequence.** When domain manuals disagree on timing, this document harmonizes until deliberately updated.
4. **Milestones are earned.** Progress is recorded only with verification evidence — never announced prematurely for marketing.

**What this manual is NOT:**

- A sprint backlog or Jira export
- A replacement for product strategy (`02`), engineering standards (`05`), or sales process (`07`)
- A public marketing roadmap with fake dates, traction, or completion claims

**What this manual IS:**

- The executive strategic compass from 0–6 months through 10+ years
- The governance constitution for reviews, EAR, and KOS releases
- The harmonization layer for *when* major initiatives happen across domains

**Canonical initiative flow:**

```
Strategic initiative identified
    ↓
Prioritization / EAR (this manual)
    ↓
Roadmap sequenced by horizon (this manual)
    ↓
Domain manual updated if needed (02–07)
    ↓
PRD written (09) when entering Active build
    ↓
Delivery + governance reviews
    ↓
Milestone recorded; KOS version updated if standards changed
```

---

## 2. Strategic Planning Principles

When this manual does not specify a detail, resolve planning trade-offs using these principles:

### 2.1 Plan in Horizons, Execute in Phases

**Why it exists.** Decades of vision require near-term constraints. Horizons provide strategic buckets; domain manuals (`04` §12, `05` §21) provide execution phases.

**How it influences decisions.** Classify every initiative by horizon before resourcing. Do not fund Mid-Term bets at the expense of Immediate commitments without EAR approval.

### 2.2 Strategy Serves Outcomes, Not Technology Trends

**Why it exists.** Khan Industries solves business problems (`07_SALES.md` thesis). Chasing trends without outcome alignment violates `00_COMPANY.md`.

**How it influences decisions.** Reject initiatives that cannot map to the five value outcomes, regardless of hype.

### 2.3 Honesty About Current Stage Is a Strategic Asset

**Why it exists.** Trust is built through accurate positioning (`01_BRAND.md`, Honesty Policy in `AGENTS.md`).

**How it influences decisions.** Public roadmap surfaces show only verified milestones. Internal plans may include directional targets clearly labeled as targets, not achievements.

### 2.4 Governance Scales Before Chaos Scales

**Why it exists.** Early governance habits prevent expensive correction at Scale stage.

**How it influences decisions.** Introduce review cadences as complexity grows — not after failure. Stage-appropriate cadence in Section 37.

### 2.5 The KOS Is Versioned Infrastructure, Not Static Docs

**Why it exists.** The KOS is the company constitution (`docs/README.md`). Undocumented changes create drift.

**How it influences decisions.** Material standard changes trigger KOS minor or major releases (Section 40).

### 2.6 One Authoritative Sequence

**Why it exists.** `02_PRODUCTS.md` defers final sequencing here. Competing timelines waste build effort.

**How it influences decisions.** Timing conflicts defer to this manual per Section 13 until deliberately reconciled across docs.

### 2.7 Milestones Are Earned, Not Announced

**Why it exists.** Premature milestone claims destroy credibility permanently.

**How it influences decisions.** Milestones move to Completed only with verification evidence (Section 18–25).

### 2.8 Long-Term Vision Guides; Near-Term Reality Constrains

**Why it exists.** Robotics and intelligent operating systems are directional (`00_COMPANY.md`) — not Immediate commitments.

**How it influences decisions.** Future Vision informs culture and learning; Immediate horizon receives resource priority.

---

## 3. Roadmap Values and Non-Negotiables

Roadmap planning applies company values (`00_COMPANY.md`) at executive level:

| Value | Roadmap expression |
| --- | --- |
| **Quality** | Strategic commitments match delivery capacity; no overloaded horizons |
| **Integrity** | No fake milestones, headcount, revenue targets, or progress metrics |
| **Innovation** | Innovation is bounded experimentation with EAR gates — not hype |
| **Impact** | Every approved initiative maps to customer or company value outcomes |
| **Reliability** | Governance reviews happen on schedule; decisions are documented |
| **Premium execution** | Public strategy surfaces match brand standards (`01_BRAND.md`) |

**Non-negotiables:**

- Never invent completed milestones, launched products, or team size.
- Never publish internal horizon plans as achieved facts on the website.
- Never skip EAR for gated initiatives (Section 29).
- Never write a PRD in `09` before initiative Approval (Section 11).
- Never let domain manuals silently contradict harmonized horizons.

### Public vs Internal Roadmap Policy

| Content | Internal (`08`) | Public (website) |
| --- | --- | --- |
| Directional 3–10 year vision | Yes — labeled directional | Yes — honest, no fake dates |
| Initiative registry | Yes | No |
| Unverified targets | Yes — labeled targets | No |
| Completed milestones | Yes — with evidence | Yes — only when verified |
| Product status | Cross-ref `02` | Must match `02` exactly |
| Sprint tasks | No (not in `08`) | No |

---

## 4. KOS Relationships and Scope

### 4.1 KOS Dependency Map

| Topic | Owner document | `08_ROADMAP.md` responsibility |
| --- | --- | --- |
| Mission, vision, values | `00_COMPANY.md` | Execute through horizons and milestones |
| Brand voice, customer experience | `01_BRAND.md` | Brand development timing; public roadmap honesty |
| Product portfolio, scoring, lifecycle | `02_PRODUCTS.md` | **When** products sequence; Concept → Planned gates |
| Service definitions, delivery | `03_SERVICES.md` | Service portfolio expansion timing |
| Website IA, phased rollout | `04_WEBSITE.md` | Platform evolution timing |
| Code standards, DoD, ADR | `05_ENGINEERING.md` | Engineering capability milestones |
| Agent architecture, safety, eval | `06_AI_AGENTS.md` | AI platform evolution timing |
| Sales process, CRM | `07_SALES.md` | Revenue org maturity timing |
| Feature requirements | `09_PRD.md` | Approval triggers PRD — not PRD content |
| AI assistant quick rules | `AGENTS.md` | Operational layer; defer to this manual for strategy law |

### 4.2 How Roadmap Connects to Each Domain

| Domain | Connection |
| --- | --- |
| **Company** | Every initiative passes value-outcome test; first major business goal anchors Immediate horizon |
| **Brand** | No public roadmap violating `01_BRAND.md` §15 |
| **Products** | SupportFlow AI first per `02` §6.5; lifecycle gates via EAR |
| **Services** | Services revenue funds product development; evolution per `03` §11 |
| **Website** | Phases 1–5 mapped to horizons (`04` §12) |
| **Engineering** | Auth, billing, CI gates before ecosystem bets |
| **AI Agents** | Shared runtime maturity before enterprise multi-agent (`06` §32) |
| **Sales** | First sellable agent + recurring income goal (`00_COMPANY.md`) |

### 4.3 Cascade Rules

When this manual updates strategic sequencing or governance:

1. Identify affected domain manuals (`02`–`07`).
2. Update cross-references in domain docs in the same effort (or file explicit follow-up in initiative registry).
3. If standards change materially → KOS minor/major release (Section 40).
4. If build scope changes → PRD update in `09` before development continues.
5. Record decision in EAR or Roadmap Review notes (Section 35).

### 4.4 Scope Boundary

| `08` owns | `08` does not own |
| --- | --- |
| Planning horizons and harmonized timelines | Product specs, service deliverables, code patterns |
| Governance reviews and EAR | Daily engineering workflow |
| KOS versioning | Individual PRD content |
| Maturity model and initiative lifecycle | Sales call scripts, demo conduct |
| Milestone verification standards | Website component specifications |

```mermaid
flowchart TB
  executive [08_ROADMAP]
  domain [02_to_07]
  prd [09_PRD]

  executive -->|"approves sequencing"| domain
  domain -->|"Planned initiatives"| prd
  prd -->|"delivery updates"| executive
```

---

## 5. Decision Framework

### 5.1 Value-Outcome Test

Every strategic initiative must map to at least one outcome from `00_COMPANY.md`:

1. Save time
2. Increase revenue
3. Reduce operational complexity (stress)
4. Improve customer experience (quality)
5. Make the business easier to run

If none apply, the initiative is not approved.

### 5.2 Strategic vs Tactical

| Type | Decision owner | Examples |
| --- | --- | --- |
| **Strategic** | EAR / QSR / this manual | New product line, KOS major release, market expansion |
| **Tactical** | Domain manual owner | Component pattern, sales email template, agent prompt revision |
| **Escalate to strategic** | When tactical change affects multiple domains, timeline, or brand | Adding auth to platform, launching marketplace |

### 5.3 Escalation Path

1. **Domain owner decides** — within established standards
2. **Domain review decides** — Engineering, Product, or AI Review
3. **EAR decides** — cross-domain or gated initiatives
4. **Founder decides** — unresolved EAR splits; values conflicts
5. **Document** — all Level 3+ decisions recorded in initiative registry or review notes

---

## 6. Strategic Planning Horizons

Khan Industries uses **six planning horizons**. Each defines purpose, granularity, decision authority, review cadence, and governance relationship.

### 6.1 Immediate (0–6 Months)

| Field | Detail |
| --- | --- |
| **Purpose** | Operational focus — what must happen now to create a credible foundation |
| **Planning granularity** | Quarterly themes; monthly checkpoint (not weekly tasks in this manual) |
| **Decision authority** | Founder |
| **Review cadence** | Monthly self-review; QSR if quarter boundary |
| **Governance** | Lightweight EAR for gated items only |
| **Focus** | Complete KOS (`08`, `09`); website Phase 1; SupportFlow AI path to Beta; services funnel ready |

### 6.2 Short-Term (6–12 Months)

| Field | Detail |
| --- | --- |
| **Purpose** | First verifiable market presence and revenue motion |
| **Planning granularity** | Quarterly objectives with milestone gates |
| **Decision authority** | Founder; domain reviews for detail |
| **Review cadence** | QSR each quarter |
| **Governance** | EAR for product launch and platform commitments |
| **Focus** | First sellable agent; website Phase 1–2; consultation → proposal flow working; engineering Phase 2 start |

### 6.3 Near-Term (1–2 Years)

| Field | Detail |
| --- | --- |
| **Purpose** | Establish repeatable product + services business |
| **Planning granularity** | Annual themes with semi-annual milestone reviews |
| **Decision authority** | Founder + first hires when present |
| **Review cadence** | QSR + Annual Review |
| **Governance** | Full EAR for portfolio changes; Product and AI Reviews formalized |
| **Focus** | 1–3 launched agents; SiteScope and LeadPilot progression; first sales hire; Vitest/CI (engineering Phase 2–3) |

### 6.4 Mid-Term (3–5 Years)

| Field | Detail |
| --- | --- |
| **Purpose** | Scale product portfolio and platform capabilities |
| **Planning granularity** | Annual strategic pillars |
| **Decision authority** | Executive team (founder + functional leads) |
| **Review cadence** | Full governance calendar (Section 37) |
| **Governance** | All review types active; OKR layer optional |
| **Focus** | SaaS platforms; AI marketplace beta; formal org functions; website Phase 4–5; shared AI runtime (`06` §32) |

### 6.5 Long-Term (5–10 Years)

| Field | Detail |
| --- | --- |
| **Purpose** | Platform ecosystem and geographic expansion |
| **Planning granularity** | Multi-year strategic themes; revised annually |
| **Decision authority** | Executive team; board/advisor input at Stage 3+ |
| **Review cadence** | ACR drives horizon refresh |
| **Governance** | Portfolio management; security review board |
| **Focus** | 15+ products; international expansion; enterprise client base; mobile apps (`02` §15) |

### 6.6 Future Vision (10+ Years)

| Field | Detail |
| --- | --- |
| **Purpose** | Directional north star for culture, learning, and R&D — not committed delivery dates |
| **Planning granularity** | Vision statements only; no resource allocation |
| **Decision authority** | Founder / board |
| **Review cadence** | ACR vision refresh |
| **Governance** | Innovation lab charter; research strategy (Section 46) |
| **Focus** | Robotics; embedded systems; intelligent operating systems; advanced automation; hardware-software integration (`00_COMPANY.md` long-term direction) |

---

## 7. Horizon Planning Rules

### 7.1 What Belongs in Each Horizon

| Belongs in `08` horizons | Does not belong |
| --- | --- |
| Strategic intent per business function | Week-by-week tasks |
| Milestone gates with verification rules | Individual GitHub issues |
| Initiative sequencing | Sprint commitments |
| Governance and review outcomes | Meeting minutes (link from registry) |
| Directional capability targets | Detailed technical specs |

### 7.2 Update Cadence

| Horizon | Refresh trigger |
| --- | --- |
| Immediate | Monthly checkpoint or material blocker |
| Short-Term | Each QSR |
| Near-Term | QSR + ACR |
| Mid-Term / Long-Term | ACR; major market or capability shift |
| Future Vision | ACR; never more than annual churn |

### 7.3 Uncertainty Handling

- Label uncertain items **Directional** or **Target** — never **Achieved**.
- Use ranges or phases, not false precision dates.
- Re-EAR when assumptions change by >25% scope or new hard dependency emerges.

### 7.4 Harmonized Timeline Reference

| Source | Horizon mapping |
| --- | --- |
| `02_PRODUCTS.md` §15 | Year 1–2 → Near-Term; 3–5 → Mid-Term; 5–10 → Long-Term; 10+ → Future Vision |
| `03_SERVICES.md` §11 | Years 1–2 → Near-Term; 3–5 → Mid-Term; 5+ → Long-Term |
| `04_WEBSITE.md` §12 | Phase 1–2 → Immediate/Short-Term; 3 → Near-Term; 4–5 → Mid-Term |
| `06_AI_AGENTS.md` §32.2 | Year 1 → Short-Term; Year 2 → Near-Term; Year 3 → Mid-Term; Year 5+ → Long-Term |
| `07_SALES.md` §38 | Now → Immediate; Year 1–2 → Near-Term; Year 3+ → Mid-Term |

---

## 8. Current Strategic Position

**Assessment date:** 2026 (early-stage).

| Dimension | Honest current state |
| --- | --- |
| **Company** | Early-stage; founder-led; Khan Industries AI repository |
| **KOS** | `00`–`07` complete; `08` in progress; `09` empty |
| **Products** | Ten concepts; SupportFlow AI prioritized #1; none Launched |
| **Services** | Nine services defined and offered; no public case studies |
| **Website** | Strategy complete (`04`); implementation is starter page only |
| **Engineering** | Next.js 16 starter; lint/build; no CI, no automated tests (Phase 1) |
| **AI** | Architecture manual complete; no production agents |
| **Sales** | Founder-led; process manual complete; no CRM product deployed |
| **Revenue** | Not documented as achieved in KOS — building toward first recurring income |
| **Team** | Founder; no employees documented |

This position informs all horizon plans. Planning assumes Stage 1 maturity (Section 27).

---

## 9. North Star and First Major Business Goal

### 9.1 North Star

Become a **trusted, globally respected technology company** building intelligent systems that improve how businesses operate — starting with AI agents, automation, and premium services, expanding over decades into platforms, robotics, and intelligent operating systems (`00_COMPANY.md` vision).

### 9.2 First Major Business Goal

From `00_COMPANY.md`:

> Build a professional online presence, launch the first sellable AI agent, and begin generating recurring income through AI software, automation, and client services.

**Immediate horizon priorities derived from this goal:**

| Priority | Initiative class | Domain owner |
| --- | --- | --- |
| 1 | KOS v1.0 completion (`08`, `09`) | `08` |
| 2 | Website Phase 1 (credible public presence) | `04`, `05` |
| 3 | SupportFlow AI → Beta → Launched path | `02`, `06`, `09` |
| 4 | Services consultation funnel operational | `07`, `04` |
| 5 | First recurring product or service revenue (verified) | `02`, `03`, `07` |

### 9.3 North Star Metrics by Maturity Stage

| Stage | Primary metrics (track when data exists) |
| --- | --- |
| **1 — Foundation** | KOS complete; website live; first agent in Beta |
| **2 — Growth** | Launched product; recurring revenue; first hire |
| **3 — Scale** | Multiple products; marketplace beta; formal functions |
| **4 — Enterprise** | Enterprise clients; compliance program; multi-region |
| **5 — Innovation** | R&D pipeline; platform ecosystem; diversified portfolio |

Do not publish metric values until verified. Definitions only at Stage 1.

---

## 10. Prioritization Framework

### 10.1 Product Layer (from `02_PRODUCTS.md` §6)

Product initiatives use the seven-dimension product scoring (max 35) and strategic weighting in `02`. This manual does not duplicate that framework — it **adopts** it for product-class initiatives.

### 10.2 Strategic Layer (executive-wide)

For all initiative types, score **1–5** on eight strategic dimensions:

| Dimension | Question |
| --- | --- |
| **Strategic fit** | Does this advance the active horizon plan and north star? |
| **Outcome alignment** | Does it map to five value outcomes? |
| **Technical feasibility** | Can we build it with current or Near-Term capability? |
| **Resource realism** | Can founder/team deliver without starving higher priorities? |
| **Risk** | What is reputational, security, and execution risk? (Lower risk = higher score) |
| **Brand alignment** | Does it reinforce premium, trustworthy positioning? |
| **Dependency readiness** | Are prerequisites met or concurrently planned? |
| **Honesty compliance** | Can we market and deliver without exaggeration? |

**Sum:** max 40. **Minimum for EAR submission:** document all dimensions.

### 10.3 Combined Decision

| Initiative type | Primary score | Secondary |
| --- | --- | --- |
| Product | Product score (`02` §6) | Strategic layer |
| Service expansion | Strategic layer | Services synergy (`03`) |
| Platform / website phase | Strategic layer | Engineering readiness (`05`) |
| KOS release | Strategic layer | Cross-doc impact |
| Partnership / expansion | Strategic layer | Maturity stage fit (Section 26) |

### 10.4 Tiebreakers

1. First major business goal alignment
2. Recurring revenue potential
3. Dependency unblocking (enables other initiatives)
4. Shorter credible path to verified milestone

---

## 11. Strategic Initiative Lifecycle

```
Identified → Evaluated → Approved → Active → Completed → Retired
```

| State | Definition | Exit criteria |
| --- | --- | --- |
| **Identified** | Opportunity or need captured | Scored (Section 10); categorized by type and horizon |
| **Evaluated** | Due diligence complete | EAR or domain review complete; decision recorded |
| **Approved** | Committed in horizon plan | Sequenced in `08`; domain doc updated if needed |
| **Active** | Work underway | PRD in `09` for build initiatives; owner assigned |
| **Completed** | Deliverable verified | Milestone evidence recorded (Section 18–25) |
| **Retired** | Deprioritized or superseded | Reason documented; links preserved |

**PRD gate:** No PRD in `09` until **Approved**. Product Concept → Planned (`02` §8) requires EAR (Section 29).

**Relationship to product lifecycle:**

| Product stage (`02` §8) | Initiative state |
| --- | --- |
| Concept | Identified or Evaluated |
| Planned | Approved |
| In Development / Beta | Active |
| Launched | Completed (launch milestone) |
| Maintained / Evolved | Active (ongoing) |
| Retired | Retired |

---

## 12. Initiative Registry Standard

Lightweight traceability — not a backlog tool.

### 12.1 Registry Fields

| Field | Required | Example |
| --- | --- | --- |
| **ID** | Yes | `INIT-2026-001` |
| **Title** | Yes | SupportFlow AI Beta |
| **Type** | Yes | Product / Service / Platform / KOS / Partnership |
| **Horizon** | Yes | Short-Term |
| **State** | Yes | Active |
| **Owner** | Yes | Founder |
| **EAR ref** | If gated | EAR-2026-003 |
| **Linked docs** | Yes | `02` §3.1, `09` PRD-SF-001 |
| **Milestone ref** | If applicable | MILE-PROD-003 |
| **Last updated** | Yes | Date |

### 12.2 Storage (Early Stage)

Spreadsheet or markdown table in internal ops — not customer-facing. Future AI CRM product may implement registry (`02` AI CRM — Concept).

### 12.3 Registry Row Template

```
| INIT-YYYY-NNN | Title | Type | Horizon | State | Owner | EAR | Docs | Updated |
```

---

## 13. Conflict Resolution

When domain manuals disagree on **timing or sequencing**:

1. **Default:** This manual (`08`) is authoritative for cross-domain timing.
2. **Document the conflict** in initiative registry or Roadmap Review notes.
3. **Resolve** via Roadmap Review or EAR — not silent edits in one doc only.
4. **Update** all affected KOS documents in the same change effort.
5. **Version** KOS if material (Section 40).

Domain manuals remain authoritative for **how** within their scope. This manual is authoritative for **when** at strategic level.

---

## 14. Leadership, Growth, and Operations

Strategic direction for six functions. **Horizon tables show intent — not task lists.**

### 14.1 Executive Leadership

| Field | Detail |
| --- | --- |
| **Strategic role** | Set vision, govern strategy, model integrity |
| **Current state** | Founder-led; all executive functions consolidated |
| **Governance owner** | ACR, EAR |

| Horizon | Direction |
| --- | --- |
| Immediate | Establish governance habits; complete KOS v1.0 path |
| Short-Term | Formalize review calendar; document EAR decisions |
| Near-Term | First leadership hire (engineering or sales); delegate domain reviews |
| Mid-Term | Executive team (CTO, product, revenue); advisor/board optional |
| Long-Term | Full C-suite as scale requires; succession planning |
| Future Vision | Institution-grade leadership development |

### 14.2 Company Growth

| Field | Detail |
| --- | --- |
| **Strategic role** | Sustainable growth without brand dilution |
| **Current state** | Pre-revenue product; services offered |
| **Governance owner** | QSR, ACR |

| Horizon | Direction |
| --- | --- |
| Immediate | Foundation: presence, KOS, first agent path |
| Short-Term | First revenue milestones (verified) |
| Near-Term | Repeatable acquisition; 1–3 launched products |
| Mid-Term | Multi-product revenue mix; marketplace |
| Long-Term | Platform ecosystem; geographic growth |
| Future Vision | Diversified technology portfolio |

### 14.3 Finance

| Field | Detail |
| --- | --- |
| **Strategic role** | Resource allocation, runway, honest reporting |
| **Current state** | Early-stage; no public financial claims in KOS |
| **Governance owner** | ACR, QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | Basic tracking; no invented revenue figures |
| Short-Term | Separate product vs service revenue when exists |
| Near-Term | Formal budget cycle; hire financial ops part-time if needed |
| Mid-Term | FP&A; subscription metrics; unit economics |
| Long-Term | Multi-entity; international tax awareness |
| Future Vision | Institutional finance function |

### 14.4 Legal and Compliance

| Field | Detail |
| --- | --- |
| **Strategic role** | Contracts, IP, privacy, AI disclosure compliance |
| **Current state** | Standard client agreements as needed; privacy policy when site live |
| **Governance owner** | EAR for expansion; ACR |

| Horizon | Direction |
| --- | --- |
| Immediate | Terms, privacy baseline for website |
| Short-Term | SOW templates aligned with `07` |
| Near-Term | Counsel review for Growth/Enterprise deals |
| Mid-Term | Compliance program for enterprise; DPA readiness |
| Long-Term | Multi-jurisdiction; industry certifications only if earned |
| Future Vision | Robotics/hardware regulatory awareness |

### 14.5 Operations

| Field | Detail |
| --- | --- |
| **Strategic role** | Internal efficiency, tooling, delivery coordination |
| **Current state** | Founder operations; KOS as operating system |
| **Governance owner** | QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | Initiative registry; review calendar |
| Short-Term | CRM process per `07`; project tracking stub |
| Near-Term | Client portal (`04`); ops hire or automation |
| Mid-Term | Formal PMO light; AI CRM if productized |
| Long-Term | Global ops standards |
| Future Vision | Intelligent internal operating system (KHANOS direction) |

### 14.6 Community

| Field | Detail |
| --- | --- |
| **Strategic role** | Earned reputation, education, authentic engagement |
| **Current state** | No fabricated community metrics |
| **Governance owner** | Brand + QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | Insights content when real (`04` Phase 2) |
| Short-Term | Educational content; honest founder voice |
| Near-Term | Learning center concept (`04` §11) if content exists |
| Mid-Term | Partner community; developer community with APIs |
| Long-Term | Marketplace community |
| Future Vision | Global technology education impact |

---

## 15. Product, Services, and Innovation

### 15.1 Product Strategy

| Field | Detail |
| --- | --- |
| **Strategic role** | Scalable software portfolio; recurring revenue |
| **Current state** | Ten concepts; SupportFlow #1 (`02` §6.5) |
| **Governance owner** | Product Review, EAR |

| Horizon | Direction |
| --- | --- |
| Immediate | SupportFlow development path; KOS alignment |
| Short-Term | SupportFlow Beta → Launched |
| Near-Term | SiteScope, LeadPilot; 1–3 launched agents |
| Mid-Term | 5–10 products; AI CRM; marketplace prep |
| Long-Term | 15+ products; vertical suites |
| Future Vision | Robotics, embedded, intelligent OS products |

### 15.2 Services

| Field | Detail |
| --- | --- |
| **Strategic role** | Custom delivery; funds products; proves capability |
| **Current state** | Nine services defined (`03` §3) |
| **Governance owner** | QSR; service promotion via EAR |

| Horizon | Direction |
| --- | --- |
| Immediate | Consultation funnel; delivery playbooks internal |
| Short-Term | Starter packages; first authentic engagements |
| Near-Term | Product-led deploys (SupportFlow); refined playbooks (`03` §11.1) |
| Mid-Term | Retainers; industry bundles (`03` §11.2) |
| Long-Term | Enterprise AI systems (`03` §11.3) |
| Future Vision | Robotics consulting when capable |

### 15.3 AI Research

| Field | Detail |
| --- | --- |
| **Strategic role** | Advance agent capability safely and honestly |
| **Current state** | Applied research via product build; no separate lab |
| **Governance owner** | AI Review |

| Horizon | Direction |
| --- | --- |
| Immediate | SupportFlow as reference implementation (`06` §32.4) |
| Short-Term | Eval suites; adversarial testing |
| Near-Term | Shared runtime research; provider portability ADRs |
| Mid-Term | Multi-agent orchestration research |
| Long-Term | Enterprise agent platforms |
| Future Vision | Embodied AI; robotics intelligence |

### 15.4 Engineering

| Field | Detail |
| --- | --- |
| **Strategic role** | Build and maintain all software to `05` standards |
| **Current state** | Phase 1 engineering maturity |
| **Governance owner** | Engineering Review |

| Horizon | Direction |
| --- | --- |
| Immediate | Website Phase 1; lint/build discipline |
| Short-Term | Phase 2 testing (Vitest); component library |
| Near-Term | CI blocking; auth-ready architecture (`05` §19.2) |
| Mid-Term | Phase 3 E2E; marketplace infrastructure |
| Long-Term | Platform engineering team; SRE practices |
| Future Vision | Distributed systems; hardware software interfaces |

### 15.5 Innovation

| Field | Detail |
| --- | --- |
| **Strategic role** | Explore new opportunities without diluting focus |
| **Current state** | Innovation through product concepts in `02` |
| **Governance owner** | EAR; Innovation lab (Stage 2+) |

| Horizon | Direction |
| --- | --- |
| Immediate | Disciplined prioritization only |
| Short-Term | Bounded experiments with time boxes |
| Near-Term | Innovation lab charter (10–20% exploration) |
| Mid-Term | Vertical product experiments from service patterns |
| Long-Term | Dedicated R&D initiatives |
| Future Vision | Breakthrough technology bets |

### 15.6 Research and Development

| Field | Detail |
| --- | --- |
| **Strategic role** | Systematic knowledge creation for long-term moat |
| **Current state** | R&D embedded in product development |
| **Governance owner** | AI Review + ACR |

| Horizon | Direction |
| --- | --- |
| Immediate | Document learnings in KOS and internal runbooks |
| Short-Term | ADR practice (`05`); eval documentation (`06`) |
| Near-Term | Published engineering insights (optional) |
| Mid-Term | Formal R&D budget line |
| Long-Term | Research partnerships with universities or labs |
| Future Vision | Advanced automation and robotics R&D |

---

## 16. Go-to-Market and People

### 16.1 Brand Development

| Field | Detail |
| --- | --- |
| **Strategic role** | Trust, premium positioning, consistent experience |
| **Current state** | `01_BRAND.md` complete; applied on website build |
| **Governance owner** | KOS Review; QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | Website reflects brand; no fake social proof |
| Short-Term | Portfolio when real work exists |
| Near-Term | Case studies with permission (`07` §35) |
| Mid-Term | Brand governance across product suite |
| Long-Term | Global brand recognition |
| Future Vision | Category-defining technology brand |

### 16.2 Website and Digital Platform

| Field | Detail |
| --- | --- |
| **Strategic role** | Trust, conversion, product showcase, future platform |
| **Current state** | Strategy complete; starter implementation |
| **Governance owner** | EAR for Phase 4+; Product Review |

| Horizon | Direction |
| --- | --- |
| Immediate | Phase 1 (`04` §12) |
| Short-Term | Phase 2 credibility surfaces |
| Near-Term | Phase 3 growth; booking integration |
| Mid-Term | Phase 4 auth, portal, billing |
| Long-Term | Phase 5 ecosystem (`04` §11) |
| Future Vision | Intelligent operating system front door |

### 16.3 Sales

| Field | Detail |
| --- | --- |
| **Strategic role** | Consultative revenue; long-term partnerships |
| **Current state** | `07` complete; founder-led |
| **Governance owner** | QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | CRM spreadsheet; consultation process live |
| Short-Term | Pipeline discipline; proposal templates in use |
| Near-Term | First AE hire (`07` §38) |
| Mid-Term | AE + CSM; AI CRM product if launched |
| Long-Term | Sales engineering for Enterprise |
| Future Vision | Global sales organization |

### 16.4 Customer Success

| Field | Detail |
| --- | --- |
| **Strategic role** | Outcomes over outputs; retention and expansion |
| **Current state** | Philosophy in `03` §10 and `07` §3 |
| **Governance owner** | QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | Handoff package discipline (`07` §27) |
| Short-Term | 30-day reviews for Growth engagements |
| Near-Term | Health scores; dedicated CSM at scale |
| Mid-Term | Success metrics dashboards |
| Long-Term | Enterprise success programs |
| Future Vision | Predictive success AI (honest capability only) |

### 16.5 Hiring

| Field | Detail |
| --- | --- |
| **Strategic role** | Talent aligned with values and stage |
| **Current state** | Founder only |
| **Governance owner** | ACR; EAR for key hires |

| Horizon | Direction |
| --- | --- |
| Immediate | No fake team size on website |
| Short-Term | Careers page when hiring (`04`) |
| Near-Term | First engineering or sales hire |
| Mid-Term | Small team across product, eng, delivery |
| Long-Term | Functional departments |
| Future Vision | Global talent organization |

---

## 17. Platform, Security, and Expansion

### 17.1 Partnerships

| Field | Detail |
| --- | --- |
| **Strategic role** | Channel, technology, and delivery partnerships |
| **Current state** | No claimed partnerships |
| **Governance owner** | EAR |

| Horizon | Direction |
| --- | --- |
| Immediate | None required |
| Short-Term | Informal network only |
| Near-Term | Technology integrations (LLM providers, hosting) |
| Mid-Term | Partner portal (`04`); channel partners |
| Long-Term | Partner governance council |
| Future Vision | Global partner ecosystem |

**Gate:** Stage 3+ for formal partner program.

### 17.2 Infrastructure

| Field | Detail |
| --- | --- |
| **Strategic role** | Reliable, scalable cloud and deployment foundation |
| **Current state** | Early deployment patterns in `05` §23 |
| **Governance owner** | Engineering Review |

| Horizon | Direction |
| --- | --- |
| Immediate | Production hosting for website and first agent |
| Short-Term | Staging environments; secrets management |
| Near-Term | CI/CD; monitoring baseline |
| Mid-Term | Multi-tenant infrastructure; cost analytics |
| Long-Term | Multi-region; enterprise SLAs |
| Future Vision | Edge and embedded infrastructure |

### 17.3 Security

| Field | Detail |
| --- | --- |
| **Strategic role** | Protect clients, company, and brand |
| **Current state** | Security principles in `05` §19; agent safety in `06` |
| **Governance owner** | Engineering Review; EAR for compliance initiatives |

| Horizon | Direction |
| --- | --- |
| Immediate | Baseline secrets hygiene; honest security copy |
| Short-Term | Security review for first production agent |
| Near-Term | Security review board (Stage 2+ Enterprise clients) |
| Mid-Term | Formal compliance roadmap (SOC2 etc. only if pursued) |
| Long-Term | Enterprise security program |
| Future Vision | Hardware-software security for robotics |

### 17.4 Education

| Field | Detail |
| --- | --- |
| **Strategic role** | Customer and market education; talent development |
| **Current state** | KOS as internal education |
| **Governance owner** | QSR |

| Horizon | Direction |
| --- | --- |
| Immediate | KOS onboarding path (`README`) |
| Short-Term | Client education in delivery (`07` §28) |
| Near-Term | Insights articles; documentation site |
| Mid-Term | Learning center if content warrants (`04` §11) |
| Long-Term | Certification only if honestly earned |
| Future Vision | Global education programs |

### 17.5 International Expansion

| Field | Detail |
| --- | --- |
| **Strategic role** | Geographic growth with compliance awareness |
| **Current state** | Single-region; no international claims |
| **Governance owner** | EAR; ACR |

| Horizon | Direction |
| --- | --- |
| Immediate | None |
| Short-Term | None |
| Near-Term | Remote clients if fit; payment logistics |
| Mid-Term | Target regions identified; legal review |
| Long-Term | Regional steering; local partnerships |
| Future Vision | Global operations (`03` §11.3) |

**Gate:** Stage 4 maturity before multi-region operations.

---

## 18. Business Milestones

Each milestone: **ID, definition, verification evidence, horizon, owner, dependencies, public communication rule.**

| ID | Milestone | Verification | Horizon | Public? |
| --- | --- | --- | --- | --- |
| MILE-BIZ-001 | KOS v1.0 complete (`00`–`09`) | All manuals populated; KOS Review sign-off | Immediate | Internal |
| MILE-BIZ-002 | Professional website live (Phase 1) | Production URL; `04` Phase 1 checklist | Immediate | Yes |
| MILE-BIZ-003 | Consultation funnel operational | Form + `07` process documented + first consultations held | Short-Term | Yes (process, not volume) |
| MILE-BIZ-004 | First verified recurring product revenue | Subscription or product payment records | Short-Term | Only if accurate |
| MILE-BIZ-005 | Sustainable services pipeline | CRM discipline; repeatable proposal → close | Near-Term | No specific numbers publicly |
| MILE-BIZ-006 | Maturity Stage 2 achieved | Section 26 exit criteria met | Near-Term | Internal |
| MILE-BIZ-007 | Marketplace beta | Working marketplace per `04` §11 | Mid-Term | Yes when live |
| MILE-BIZ-008 | International client delivery | Contract + delivery in non-home region | Long-Term | Case-by-case |

---

## 19. Product Milestones

Aligned with `02_PRODUCTS.md` §6.5, §8, §15.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-PROD-001 | SupportFlow AI Beta | Status Beta in `02`; eval suite per `06` §33 | Short-Term |
| MILE-PROD-002 | SupportFlow AI Launched | Launch bar `02` §7.6; website status Launched | Short-Term / Near-Term |
| MILE-PROD-003 | Second agent Beta (SiteScope or LeadPilot) | Product status + PRD complete | Near-Term |
| MILE-PROD-004 | 1–3 launched agents | Three products at Launched status | Near-Term |
| MILE-PROD-005 | AI CRM Planned → Active | EAR + PRD; Concept promoted | Mid-Term |
| MILE-PROD-006 | Marketplace manifest validated | `06` §32.1 component shipped | Mid-Term |
| MILE-PROD-007 | 5–10 launched products | Portfolio count verified in `02` | Mid-Term |
| MILE-PROD-008 | 15+ product ecosystem | Portfolio audit | Long-Term |

---

## 20. Engineering Milestones

Aligned with `05_ENGINEERING.md` phased adoption.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-ENG-001 | Phase 1 website build complete | `npm run build`; smoke test; `04` Phase 1 | Immediate |
| MILE-ENG-002 | Design tokens + core components | `04` §7 implemented | Immediate |
| MILE-ENG-003 | Vitest introduced (Phase 2) | `npm run test` exists; tests for `lib/` | Near-Term |
| MILE-ENG-004 | CI pipeline blocking merge | GitHub Actions per `05` §23 | Near-Term |
| MILE-ENG-005 | Auth-ready route structure | `05` §19.2; `04` §10.2 | Near-Term |
| MILE-ENG-006 | Playwright E2E (Phase 3) | Critical path tests | Mid-Term |
| MILE-ENG-007 | Billing integration | Stripe or equivalent live | Mid-Term |

---

## 21. AI Milestones

Aligned with `06_AI_AGENTS.md` §32.2.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-AI-001 | SupportFlow reference implementation | Agent Spec + `06` §33 checklist | Short-Term |
| MILE-AI-002 | Eval CI for agents (Phase 2 testing) | Automated eval in CI | Near-Term |
| MILE-AI-003 | Shared runtime modules | `06` §32.1 Shared Agent Runtime documented + code | Near-Term |
| MILE-AI-004 | LeadPilot + ReportGen agents Beta | Product status in `02` | Near-Term |
| MILE-AI-005 | Marketplace manifest format | Spec + pilot agent package | Mid-Term |
| MILE-AI-006 | Multi-tenant knowledge layer | Production deployment | Mid-Term |
| MILE-AI-007 | Enterprise multi-agent orchestration | EAR-approved architecture | Long-Term |

---

## 22. Website and Digital Milestones

Aligned with `04_WEBSITE.md` §12.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-WEB-001 | Phase 1 — Foundation complete | `04` §12 Phase 1 checklist | Immediate |
| MILE-WEB-002 | Phase 2 — Credibility | Portfolio (if real), Industries, Legal | Short-Term |
| MILE-WEB-003 | Phase 3 — Growth | Booking, waitlist flows | Near-Term |
| MILE-WEB-004 | Phase 4 — Platform | Auth, Client Portal, Billing | Mid-Term |
| MILE-WEB-005 | Phase 5 — Ecosystem | Marketplace, Developer Center | Mid-Term / Long-Term |

---

## 23. Services Milestones

Aligned with `03_SERVICES.md` §11.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-SVC-001 | Nine service playbooks internal | Delivery runbooks per service | Near-Term |
| MILE-SVC-002 | Starter package defined | Documented offering + sales use | Short-Term |
| MILE-SVC-003 | First authentic case study permission | Written client approval on file | Near-Term |
| MILE-SVC-004 | Product-led deploy (SupportFlow + service) | Completed engagement record | Near-Term |
| MILE-SVC-005 | Formal retainer program | `03` §11.2 offerings live | Mid-Term |
| MILE-SVC-006 | Industry bundles promoted | EAR for service category promotion | Mid-Term |

---

## 24. Sales and Customer Success Milestones

Aligned with `07_SALES.md`.

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-SALES-001 | CRM standards in daily use | `07` §9 fields populated | Immediate |
| MILE-SALES-002 | Proposal template in use | `07` §18 structure applied | Short-Term |
| MILE-SALES-003 | Handoff package 100% on Won deals | `07` §27 checklist | Short-Term |
| MILE-SALES-004 | First sales hire | Employment agreement | Near-Term |
| MILE-SALES-005 | Weekly pipeline review | Documented cadence `07` §38 | Near-Term |
| MILE-SALES-006 | Customer health scores | Defined + tracked | Mid-Term |

---

## 25. Hiring and Leadership Milestones

| ID | Milestone | Verification | Horizon |
| --- | --- | --- | --- |
| MILE-HIRE-001 | Careers page live (when hiring) | `04` page; real roles only | Short-Term |
| MILE-HIRE-002 | First engineering hire | Contract + onboarding | Near-Term |
| MILE-HIRE-003 | First non-founder in governance reviews | Attendance records | Near-Term |
| MILE-HIRE-004 | Functional leads for product, eng, revenue | Org chart | Mid-Term |
| MILE-HIRE-005 | Executive team complete for Stage 3 | Section 26 exit criteria | Mid-Term |

---

## 26. Company Maturity Model

### Stage 1 — Foundation

| Field | Detail |
| --- | --- |
| **Business** | Founder-led; services offered; products in development; building trust |
| **Technology** | Starter platform; first agent path; KOS established |
| **Team** | Founder; contractors optional |
| **Revenue focus** | First recurring income; services cash flow |
| **Operational priorities** | KOS v1.0; website Phase 1; SupportFlow Beta path |
| **Success indicators** | MILE-BIZ-001, 002; MILE-PROD-001; CRM in use |
| **Exit criteria** | ≥1 Launched product OR verified recurring revenue + ≥1 hire OR sustainable services pipeline with playbooks; engineering Phase 2 started |

### Stage 2 — Growth

| Field | Detail |
| --- | --- |
| **Business** | Repeatable sales; 1–3 launched products; growing client base |
| **Technology** | CI/testing; auth-ready; multiple agents |
| **Team** | Founder + 2–5 contributors |
| **Revenue focus** | Product subscriptions + services mix |
| **Operational priorities** | Product Review formalized; OKR optional; innovation lab charter |
| **Success indicators** | MILE-PROD-004; MILE-ENG-004; MILE-SALES-004 |
| **Exit criteria** | Marketplace beta path approved; multiple products Maintained; formal functional leads |

### Stage 3 — Scale

| Field | Detail |
| --- | --- |
| **Business** | Multi-product company; marketplace; partner channel |
| **Technology** | Platform phases 4–5; shared AI runtime; billing |
| **Team** | Functional departments; 15–50 people (directional) |
| **Revenue focus** | Recurring platform revenue scaling |
| **Operational priorities** | Full governance calendar; portfolio management |
| **Success indicators** | MILE-PROD-007; MILE-WEB-004; partner program |
| **Exit criteria** | Enterprise clients; compliance program; international pilot |

### Stage 4 — Enterprise

| Field | Detail |
| --- | --- |
| **Business** | Enterprise contracts; multi-region delivery |
| **Technology** | Enterprise SLAs; security certification if pursued |
| **Team** | Full executive team; regional leads |
| **Revenue focus** | Enterprise ARR; long-term partnerships |
| **Operational priorities** | Security review board; regional steering |
| **Success indicators** | MILE-BIZ-008; enterprise reference clients (with permission) |
| **Exit criteria** | Platform ecosystem self-sustaining; R&D pipeline formalized |

### Stage 5 — Innovation

| Field | Detail |
| --- | --- |
| **Business** | Diversified technology portfolio; category leadership |
| **Technology** | Robotics; embedded; intelligent OS; hardware-software |
| **Team** | Innovation-led org; global presence |
| **Revenue focus** | Platform + hardware + services ecosystem |
| **Operational priorities** | Long-term R&D; Future Vision execution |
| **Success indicators** | New category products shipped; research output |
| **Exit criteria** | N/A — continuous evolution |

---

## 27. Current Maturity Assessment

**Current stage:** **Stage 1 — Foundation**

| Evidence | Status |
| --- | --- |
| KOS `00`–`07` complete | Yes |
| KOS `08`, `09` | In progress / empty |
| Launched products | None |
| Production website (Phase 1) | Not complete — starter page only |
| Recurring revenue | Not documented in KOS |
| Team beyond founder | None documented |
| CRM in use | Process defined; tooling lightweight |

**Stage 1 priorities:** Complete KOS v1.0; ship website Phase 1; advance SupportFlow toward Beta; operationalize sales CRM discipline.

**Next stage trigger:** Meet Stage 1 exit criteria (Section 26) — documented in ACR or Roadmap Review before declaring Stage 2.

---

## 28. Governance Overview

### 28.1 Governance Philosophy

Governance exists to **protect strategy, quality, and integrity** — not to slow builders. At Stage 1, governance is lightweight. At Stage 3+, the full calendar applies.

### 28.2 Decision Rights by Maturity

| Decision type | Stage 1 | Stage 2+ | Stage 3+ |
| --- | --- | --- | --- |
| Tactical domain | Founder | Domain owner | Domain owner |
| Product Concept → Planned | EAR (founder) | EAR | EAR |
| KOS minor release | Founder | Founder + KOS Review | KOS Review |
| KOS major release | EAR | EAR | EAR + advisor optional |
| Horizon plan change | Founder | QSR | QSR |
| Vision refresh | ACR | ACR | ACR + board optional |

### 28.3 Future Governance Systems

| System | Activation | Purpose |
| --- | --- | --- |
| Board / advisor review | Stage 3+ | External accountability |
| OKR framework | Stage 2+ | Quarterly alignment |
| Portfolio management office | Stage 3+ | Cross-product resources |
| Security review board | Stage 2+ (Enterprise clients) | Compliance initiatives |
| Partner governance council | Stage 3+ | Channel partners |
| Regional steering committees | Stage 4+ | International expansion |
| Innovation lab charter | Stage 2+ | Bounded experimentation |

### 28.4 Escalation

Unresolved domain review splits → EAR. Unresolved EAR → founder decision with documented rationale.

---

## 29. Executive Architecture Review (EAR)

EAR is the **highest-level recurring governance activity** at Khan Industries — validating strategic initiatives that cut across product, engineering, AI, platform, and brand.

### 29.1 Purpose

Validate strategic fit, architectural coherence, resource realism, and honesty compliance **before major commitment**.

### 29.2 Review Categories

| Category | Examples |
| --- | --- |
| **New product / platform** | Concept → Planned; major new SKU |
| **Major architecture change** | Auth platform, multi-tenant, shared runtime |
| **KOS major release** | v1 → v2 |
| **Market expansion** | New industry vertical; international |
| **Partnership** | Revenue-sharing; technology alliance |
| **Security / compliance** | SOC2 pursuit; enterprise data handling |

### 29.3 EAR Scoring Framework

Score each dimension **1–5** (same as Section 10.2). **Minimum total for approval: 28/40.** Any dimension below 3 requires mitigation plan or deferral.

| Dimension | Weight note |
| --- | --- |
| Strategic fit | Must be ≥4 for approval |
| Honesty compliance | Must be ≥4 for approval — non-negotiable |

### 29.4 Participants

| Stage | Required | Optional |
| --- | --- | --- |
| Stage 1 | Founder | — |
| Stage 2 | Founder, engineering lead | Product advisor |
| Stage 3+ | Founder, CTO, product lead, CSO delegate | Security, legal |

### 29.5 Deliverables

- **EAR decision record:** Approve / Conditional Approve / Defer / Reject
- **Scored summary** (8 dimensions)
- **Action items** with owner, date, initiative ID
- **Conditions** (for conditional approve)
- **Strategic Decision Record (SDR)** when the outcome establishes or changes company-wide policy (Section 44)

### 29.6 EAR Decision Record Template

```
EAR-YYYY-NNN
Date:
Initiative ID:
Category:
Summary:
Scores: [8 dimensions]
Decision: Approve | Conditional | Defer | Reject
Conditions:
Action items:
KOS / domain updates required:
Follow-up EAR date (if conditional):
```

### 29.7 Approval Process

| Decision | Meaning |
| --- | --- |
| **Approve** | Initiative → Approved; sequence in horizon |
| **Conditional** | Approved when conditions met; follow-up EAR scheduled |
| **Defer** | Not now; revisit date set; registry → Identified |
| **Reject** | Not pursued; reason documented |

### 29.8 EAR Required Before

- Product moves Concept → Planned (`02` §8)
- Website Phase 4+ platform features (`04` §12)
- New service category promotion Future → Current (`03` §4)
- KOS major version release
- Partnership with revenue or brand commitment
- International expansion pilot

### 29.9 Follow-Up and Re-EAR Triggers

- Scope change >25% from approved EAR
- Failed milestone blocking dependencies
- New regulatory or security requirement
- Conditional approval items due

### 29.10 Continuous Improvement

Annual EAR retrospective in ACR: decision quality, false approvals, rejected opportunities revisited.

---

## 30. Quarterly Strategy Review (QSR)

| Field | Detail |
| --- | --- |
| **Purpose** | Align company on horizon progress; adjust Short-Term and Near-Term plans |
| **Participants** | Founder (Stage 1); executive team (Stage 2+) |
| **Frequency** | Quarterly |
| **Inputs** | Initiative registry; milestone status; domain review summaries |
| **Deliverables** | Horizon adjustments; priority shifts; action items |
| **Outcomes** | Approve / adjust / defer initiatives |
| **Documentation** | QSR notes in internal ops; registry updated |

---

## 31. Annual Company Review (ACR)

| Field | Detail |
| --- | --- |
| **Purpose** | Year-in-review; vision refresh; maturity assessment; KOS version planning |
| **Participants** | Founder; full leadership (Stage 2+); advisors (Stage 3+) |
| **Frequency** | Annual |
| **Inputs** | All milestone categories; financial summary (internal); KOS consistency check |
| **Deliverables** | Maturity stage assessment; next-year strategic themes; ACR report |
| **Outcomes** | Stage transition decision; vision updates; major initiative approval |
| **Documentation** | ACR report; KOS updates if needed |

---

## 32. Engineering Review

| Field | Detail |
| --- | --- |
| **Purpose** | Architecture health, ADR backlog, DoD maturity, tech debt, CI status |
| **Participants** | Founder / engineering lead |
| **Frequency** | Monthly (Stage 1); bi-weekly (Stage 2+) |
| **Inputs** | `05_ENGINEERING.md` compliance; ADR log; build/CI status |
| **Deliverables** | Tech debt priorities; ADR decisions; engineering milestone updates |
| **Outcomes** | Approve ADRs; defer/refactor; escalate to EAR if cross-domain |
| **Documentation** | ADR files; engineering review notes |

**ADR governance:** Significant technology choices require Architecture Decision Records per `05`. Engineering Review is the default approval forum for ADRs below EAR threshold.

---

## 33. Product Review

| Field | Detail |
| --- | --- |
| **Purpose** | Portfolio status, prioritization, lifecycle gates, launch readiness |
| **Participants** | Founder; product owner (when hired) |
| **Frequency** | Monthly |
| **Inputs** | `02_PRODUCTS.md` status; product scores; launch checklists |
| **Deliverables** | Status updates; prioritization changes; EAR referrals |
| **Outcomes** | Promote/hold/retire concepts; trigger PRD |
| **Documentation** | `02` updates; initiative registry |

---

## 34. AI Review

| Field | Detail |
| --- | --- |
| **Purpose** | Agent portfolio, safety, eval maturity, provider policy |
| **Participants** | Founder; AI/engineering lead |
| **Frequency** | Monthly; pre-launch mandatory |
| **Inputs** | `06_AI_AGENTS.md`; Agent Specs; eval results |
| **Deliverables** | Safety findings; eval gaps; launch/block decisions |
| **Outcomes** | Approve Beta/Launch; require remediation; escalate to EAR |
| **Documentation** | Agent Spec updates; `06` cross-refs |

---

## 35. Roadmap Review

| Field | Detail |
| --- | --- |
| **Purpose** | Meta-review of this manual's horizon plan, registry health, conflicts |
| **Participants** | Founder; CSO delegate (future) |
| **Frequency** | Quarterly (with QSR) or after major conflict |
| **Inputs** | `08` horizon tables; Section 13 conflicts; milestone completion rates |
| **Deliverables** | Horizon revisions; conflict resolutions |
| **Outcomes** | Update `08`; cascade to domain docs |
| **Documentation** | Roadmap review notes; KOS patch/minor release |

---

## 36. KOS Review

| Field | Detail |
| --- | --- |
| **Purpose** | Cross-document consistency; version planning; ownership audit |
| **Participants** | Founder; document owners (Stage 2+) |
| **Frequency** | Quarterly; before KOS release |
| **Inputs** | All `00`–`09` manuals; cross-reference integrity |
| **Deliverables** | Consistency fixes; release plan; ownership confirmations |
| **Outcomes** | Patch/minor/major release decision |
| **Documentation** | Release notes (Section 41); inline history (Section 43) |

---

## 37. Review Calendar and Cadence Summary

| Review | Stage 1 | Stage 2 | Stage 3+ |
| --- | --- | --- | --- |
| **EAR** | As needed | As needed + quarterly portfolio | Scheduled + ad hoc |
| **QSR** | Optional Q1–Q4 | Quarterly | Quarterly |
| **ACR** | Annual | Annual | Annual + board |
| **Engineering** | Monthly | Bi-weekly | Bi-weekly |
| **Product** | Monthly | Monthly | Bi-weekly |
| **AI** | Monthly | Monthly | Monthly + pre-launch |
| **Roadmap** | With QSR | Quarterly | Quarterly |
| **KOS** | Before releases | Quarterly | Quarterly |

**Stage 1 pragmatism:** Founder may combine reviews in a single session — but **decisions must still be recorded** per review type.

---

## 38. KOS as a Living Operating System

The KOS is the **constitution of Khan Industries** (`docs/README.md`) — not a one-time documentation project.

**Principles:**

- Changes are **deliberate**, not accidental drift.
- Every manual has a **single owner** (Section 43).
- Material changes are **versioned** (Section 40).
- Contributors update docs **as part of work** — not months later.
- AI assistants and engineers **defer to KOS** over conversational memory.

**KOS completes the company brain** so knowledge survives team growth, tool changes, and founder absence.

---

## 39. KOS Versioning Philosophy

KOS versions use **semantic versioning** adapted for documentation:

```
KOS vMAJOR.MINOR.PATCH
```

| Component | Meaning |
| --- | --- |
| **MAJOR** | Breaking philosophy, new manual, restructured governance |
| **MINOR** | Material new sections, new product in portfolio, new standards |
| **PATCH** | Clarifications, typos, cross-reference fixes |

**Version milestones:**

| Version | Definition |
| --- | --- |
| **KOS v0.9** | Core manuals `00`–`07` drafted *(achieved)* |
| **KOS v1.0** | Full library `00`–`09` complete; this governance manual active |
| **KOS v1.x** | Iterative improvements as company learns |
| **KOS v2.0** | Stage 2 maturity + material platform or org restructuring |

---

## 40. Release Types

### 40.1 Major Release

**Constitutes:**

- New KOS manual added (e.g., `10_` series in future)
- Restructured governance or breaking philosophy change
- Company maturity stage transition with standard changes

**Example:** KOS v1.0 → v2.0 when marketplace governance and multi-product standards restructure delivery assumptions.

**Requires:** EAR + KOS Review + ACR alignment.

### 40.2 Minor Release

**Constitutes:**

- New significant sections in existing manuals
- New product added to `02` portfolio
- New service promoted to Current in `03`
- Material milestone framework updates

**Example:** KOS v1.0 → v1.1 when first product reaches Launched and product manual gains delivery lessons.

**Requires:** KOS Review; EAR if cross-domain.

### 40.3 Patch Release

**Constitutes:**

- Clarifications, typos, formatting
- Cross-reference fixes
- Non-material wording improvements

**Example:** KOS v1.1.0 → v1.1.1

**Requires:** Document owner approval; KOS Review optional.

---

## 41. Release Notes Standards

### 41.1 Format

Each release note entry:

```
## KOS vX.Y.Z — YYYY-MM-DD

### Summary
One paragraph.

### Changed Documents
- `0N_NAME.md` — description

### Initiatives / EAR
- EAR-YYYY-NNN (if applicable)

### Strategic Decision Records
- SDR-NNN (if applicable; required for major releases)

### Migration Notes
What contributors must do differently (major/minor only).
```

### 41.2 Location

- **Primary:** Inline historical record in Section 43 (Stage 1)
- **Future:** Dedicated `docs/KOS_CHANGELOG.md` when release volume warrants (EAR optional)

### 41.3 Audience

- Internal: full detail
- AI assistants: summary in commit messages when KOS updated
- Public: never expose internal release notes verbatim

---

## 42. Approval and Review Process

| Release type | Approver | Review required |
| --- | --- | --- |
| **Patch** | Document owner | Optional KOS Review |
| **Minor** | Founder + KOS Review | KOS Review |
| **Major** | Founder + EAR | EAR + KOS Review + ACR alignment |

**Process:**

1. Propose change with scope (patch/minor/major).
2. Complete required reviews.
3. Update affected documents.
4. Publish release notes (Section 41).
5. Announce to contributors (internal).

---

## 43. Document Ownership and Historical Record

### 43.1 Document Owners (Stage 1)

| Document | Owner | Backup |
| --- | --- | --- |
| `00_COMPANY.md` | Founder | — |
| `01_BRAND.md` | Founder | — |
| `02_PRODUCTS.md` | Founder | — |
| `03_SERVICES.md` | Founder | — |
| `04_WEBSITE.md` | Founder | — |
| `05_ENGINEERING.md` | Founder | — |
| `06_AI_AGENTS.md` | Founder | — |
| `07_SALES.md` | Founder | — |
| `08_ROADMAP.md` | Founder | — |
| `09_PRD.md` | Founder | — |
| `README.md` | Founder | — |

Reassign at Stage 2+ hires.

### 43.2 Historical Record (Inline Changelog)

| Version | Date | Summary |
| --- | --- | --- |
| **KOS v0.9** | 2026 | Manuals `00`–`07` established: company, brand, products, services, website, engineering, AI agents, sales |
| **KOS v1.0** | TBD | Target: `08` and `09` complete; governance manual active |

### 43.3 Archive Policy

- Superseded sections are removed with release notes explaining why — not silent deletion.
- Major versions retain summary in Section 43 table permanently.
- Strategic Decision Records (Section 44) are archived permanently — never deleted.

---

## 44. Strategic Decision Records (SDRs)

Strategic Decision Records (SDRs) are the **permanent historical record of why Khan Industries made major executive decisions**. They preserve reasoning — not only outcomes — so future leadership, engineers, AI assistants, and employees understand the context, alternatives, and trade-offs behind the company's evolution.

SDRs complement EAR decision records (Section 29), Architecture Decision Records in `05_ENGINEERING.md`, and KOS release notes (Section 41). EAR captures *whether* an initiative proceeds; SDRs capture *why* enduring policies and direction were chosen.

**SDRs are never deleted.** Superseded or deprecated SDRs remain in the archive as company history.

### 44.1 Purpose

| Purpose | Detail |
| --- | --- |
| **Preserve intent** | Future contributors understand *why*, not only *what* was decided |
| **Reduce repeated debate** | Settled strategic questions do not reopen without explicit supersession |
| **Onboard leadership** | New executives and hires inherit decision context quickly |
| **Support AI assistants** | Agents align with documented rationale, not inferred assumptions |
| **Audit company evolution** | Permanent record of how Khan Industries matured over decades |
| **Link governance to action** | Connect EAR, KOS releases, and domain manual changes to reasoning |

### 44.2 When an SDR Should Be Created

Create an SDR when a decision has **lasting company-wide impact** — typically after EAR, ACR, or founder approval. Examples:

| Trigger category | Examples |
| --- | --- |
| **Major company strategy** | Market focus, business model, sequencing of technology domains |
| **Product strategy** | Portfolio prioritization; Concept → Planned for strategic products |
| **Engineering process** | Definition of Done changes; Git workflow; testing phase adoption |
| **AI governance** | Agent safety policy; eval requirements; provider strategy |
| **Sales methodology** | Sales Principles adoption; CRM standards; tier philosophy application |
| **Roadmap direction** | Horizon reprioritization; maturity stage transition |
| **Organizational restructuring** | First hire categories; executive role creation |
| **Technology adoption** | New platform, language, or infrastructure commitment (with ADR) |
| **KOS version releases** | Major and material minor KOS releases |
| **Executive Architecture Review outcomes** | Approve decisions that establish policy beyond a single initiative |

**Do not create an SDR for:** tactical bug fixes, routine patch KOS releases, single-client scope decisions, or sprint-level work.

### 44.3 Standard SDR Structure

Every Strategic Decision Record must contain the following fields:

| Field | Required | Description |
| --- | --- | --- |
| **SDR Number** | Yes | Sequential identifier: `SDR-NNN` |
| **Title** | Yes | Clear, durable statement of the decision |
| **Date** | Yes | Approval date (YYYY-MM-DD) |
| **Status** | Yes | Draft / Approved / Superseded / Deprecated |
| **Decision** | Yes | The policy or direction being established — one precise paragraph |
| **Business Context** | Yes | Situation, constraints, and stage of company at time of decision |
| **Alternatives Considered** | Yes | Other options evaluated and why they were not chosen |
| **Reasoning** | Yes | Logic linking context, alternatives, and chosen path |
| **Expected Benefits** | Yes | Outcomes the decision is intended to produce |
| **Risks** | Yes | Known downsides, dependencies, and failure modes |
| **Impacted KOS Manuals** | Yes | Which `00`–`09` documents must align (or "None — policy only") |
| **Related Products** | If applicable | Product names from `02_PRODUCTS.md` |
| **Related Services** | If applicable | Services from `03_SERVICES.md` |
| **Follow-up Actions** | Yes | Owners, actions, and verification criteria |
| **Approval Authority** | Yes | Founder; EAR reference; future executive role |

### 44.4 SDR Template

```
SDR-NNN
Title:
Date:
Status: Draft | Approved | Superseded | Deprecated
Supersedes: SDR-NNN (if applicable)
Superseded by: SDR-NNN (if applicable)

Decision:

Business Context:

Alternatives Considered:

Reasoning:

Expected Benefits:

Risks:

Impacted KOS Manuals:

Related Products:

Related Services:

Follow-up Actions:

Approval Authority:
```

### 44.5 Storage and Lifecycle

| Stage | Rule |
| --- | --- |
| **Draft** | Under development; not binding |
| **Approved** | Active policy; referenced by KOS and contributors |
| **Superseded** | Replaced by newer SDR; link forward and backward; remains archived |
| **Deprecated** | No longer applicable (e.g., company stage outgrew policy); remains archived |

**Stage 1 storage:** SDRs maintained in internal ops (dedicated `docs/SDR/` folder or registry table) — introduced when first Approved SDR is filed. Examples below are **foundational Approved records** documenting decisions already reflected in KOS.

### 44.6 Relationship to KOS Versioning

| Relationship | Rule |
| --- | --- |
| **Major KOS releases** | Release notes (Section 41) must reference governing SDRs |
| **Executive Architecture Review** | Strategic EAR Approve outcomes may generate new Approved SDRs |
| **Minor KOS releases** | Reference SDRs when the release implements an SDR follow-up action |
| **Historical archive** | SDRs are never deleted; Superseded status preserves chain of reasoning |
| **Supersession** | New SDR lists `Supersedes: SDR-NNN`; old SDR updated to `Superseded by: SDR-NNN` |
| **KOS Review** | Quarterly check that active KOS content aligns with Approved SDRs (Section 36) |

Major version milestones (Section 39) should cite the SDRs that justified the change — e.g., KOS v1.0 references SDR-002 and SDR-004.

### 44.7 Example Strategic Decision Records

The following examples are **realistic foundational decisions** for Khan Industries at Stage 1 — consistent with `00_COMPANY.md`, KOS structure, and this manual. They document reasoning already embedded in operating practice.

---

#### SDR-001 — Prioritize AI Software, SaaS, and Automation Before Robotics and Embedded Systems

| Field | Content |
| --- | --- |
| **SDR Number** | SDR-001 |
| **Title** | Khan Industries will prioritize AI software, SaaS, and automation before robotics and embedded systems |
| **Date** | 2026 |
| **Status** | Approved |
| **Decision** | Khan Industries will build software-first capabilities — AI agents, SaaS products, automation, and cloud systems — as the primary focus through Mid-Term horizons. Robotics, embedded systems, and hardware-software products remain Future Vision until software foundations, product patterns, and revenue are established. |
| **Business Context** | Early-stage company with founder-led execution, ten product concepts, nine defined services, and no launched products. Long-term ambition includes robotics (`00_COMPANY.md`), but current capacity and learning curve favor software delivery. |
| **Alternatives Considered** | (1) Parallel robotics exploration now — rejected: divides focus, capital, and credibility. (2) Services-only agency — rejected: does not build scalable product equity. (3) Single product only, no services — rejected: services fund product development (`02` §12). |
| **Reasoning** | Software agents and SaaS align with immediate skills, market entry, and first major business goal (`00_COMPANY.md`). Robotics requires mature engineering, safety, and capital structures inappropriate at Stage 1. Sequencing software first follows `02` §14 and `06` §32.4 (SupportFlow as reference implementation). |
| **Expected Benefits** | Faster path to first sellable agent; reusable AI patterns; credible website portfolio; services revenue supporting R&D; honest market positioning. |
| **Risks** | Robotics opportunity delayed; perceived as "only software" — mitigated by honest Future Vision in roadmap. Over-focus on services vs products — mitigated by product prioritization framework (`02` §6). |
| **Impacted KOS Manuals** | `00_COMPANY.md`, `02_PRODUCTS.md`, `06_AI_AGENTS.md`, `08_ROADMAP.md` (Section 48) |
| **Related Products** | SupportFlow AI, SiteScope AI, LeadPilot AI (Near-Term); Restaurant AI, Construction AI (Long-Term) |
| **Related Services** | AI Agent Development, AI Chatbots, Business Automation, Cloud & MLOps |
| **Follow-up Actions** | Maintain robotics in Future Vision only; EAR required before any robotics initiative; annual ACR reviews sequencing |
| **Approval Authority** | Founder |

---

#### SDR-002 — KOS Remains Proprietary Internal Company Intellectual Property

| Field | Content |
| --- | --- |
| **SDR Number** | SDR-002 |
| **Title** | The Khan Industries Operating System (KOS) will remain proprietary internal company intellectual property |
| **Date** | 2026 |
| **Status** | Approved |
| **Decision** | The Khan Industries Operating System — all `docs/` manuals (`00`–`09`), governance standards, SDRs, and internal operating procedures — is **proprietary internal intellectual property**. It is not open-sourced, licensed externally, or published in full as a public product without a future EAR and superseding SDR. |
| **Business Context** | KOS encodes company strategy, governance, sales process, engineering standards, and AI architecture — competitive and operational advantage for an early-stage technology company building trust and premium positioning. |
| **Alternatives Considered** | (1) Open-source KOS templates — rejected: exposes full operating playbook. (2) Sell KOS as a product — rejected: distracts from core product and service mission. (3) Public full manual — rejected: internal governance detail is not customer-facing material. |
| **Reasoning** | KOS is the company constitution (`docs/README.md`). Public surfaces (`04_WEBSITE.md`) derive honest customer-facing content from KOS without exposing internal governance. Proprietary treatment protects decision history, sales methodology, and architectural standards. |
| **Expected Benefits** | Protected operational know-how; controlled narrative; freedom to iterate KOS without external commitment; clear boundary between internal standards and public brand. |
| **Risks** | Reduced community goodwill from open-source advocates — accepted trade-off. Contributors outside company need NDA/confidentiality as team grows. |
| **Impacted KOS Manuals** | `docs/README.md`, all `00`–`09` manuals, Section 38–43 of this manual |
| **Related Products** | None (KOS is not a product) |
| **Related Services** | None directly |
| **Follow-up Actions** | Mark repository private if not already; confidentiality terms in future employment agreements; KOS Review confirms no accidental public exposure |
| **Approval Authority** | Founder |

---

#### SDR-003 — Standard Project Lifecycle Through Plan, Review, Agent Execution, and Deployment

| Field | Content |
| --- | --- |
| **SDR Number** | SDR-003 |
| **Title** | Every significant project must follow the standard Plan → Review → Agent → Review → Ship lifecycle |
| **Date** | 2026 |
| **Status** | Approved |
| **Decision** | Every significant project — KOS manuals, website phases, product builds, and major features — must follow this lifecycle: **Business Idea → Strategy → Cursor Plan Mode → Review → Approval → Cursor Agent Mode → Review → Git Commit → Git Push → Deployment**. Skipping Plan Mode or review for material work is not permitted. |
| **Business Context** | Founder-led development using Cursor with AI assistants. Risk of ad-hoc execution causing scope drift, KOS violations, or unreviewed changes. `05_ENGINEERING.md` and `AGENTS.md` establish quality bars but not the end-to-end workflow. |
| **Alternatives Considered** | (1) Direct Agent Mode for all work — rejected: no strategic review, higher rework. (2) Plan Mode only, no Agent execution — rejected: inefficient for implementation. (3) External PM tooling — rejected: premature at Stage 1. |
| **Reasoning** | Plan Mode forces architecture and alignment before code. Human review gates prevent honesty policy violations and scope creep. Agent Mode executes efficiently within approved plans. Git commit/push and deployment complete the accountability loop per `05` Git workflow. |
| **Expected Benefits** | Lower rework; KOS-aligned deliverables; traceable decisions; safe AI-assisted development; production-ready deployment discipline. |
| **Risks** | Slower initial velocity for tiny changes — mitigated by excluding trivial patches from "significant project" definition. Founder bottleneck on review — mitigated as team grows. |
| **Impacted KOS Manuals** | `05_ENGINEERING.md`, `08_ROADMAP.md`, `09_PRD.md`, `AGENTS.md` |
| **Related Products** | All products entering In Development |
| **Related Services** | All Growth/Enterprise client deliverables (parallel client review gates per `03`) |
| **Follow-up Actions** | Define "significant project" in initiative registry; PRD references lifecycle; Engineering Review audits adherence |
| **Approval Authority** | Founder |

---

#### SDR-004 — Major KOS Releases Require Executive Architecture Review

| Field | Content |
| --- | --- |
| **SDR Number** | SDR-004 |
| **Title** | Every major KOS release requires an Executive Architecture Review before approval |
| **Date** | 2026 |
| **Status** | Approved |
| **Decision** | No **major** KOS version release (e.g., v1.0 → v2.0) may be published without a completed **Executive Architecture Review (EAR)** per Section 29, documented decision, and associated SDR when the release establishes or changes company-wide policy. |
| **Business Context** | KOS v0.9 established manuals `00`–`07`. KOS v1.0 will complete the library. Major releases restructure how the company operates — they require the same rigor as major product or platform bets. |
| **Alternatives Considered** | (1) Founder-only approval for all releases — rejected for major: insufficient cross-domain checklist at scale. (2) KOS Review only — rejected: KOS Review checks consistency, not strategic fit of breaking changes. (3) EAR for every patch — rejected: excessive at Stage 1. |
| **Reasoning** | Major KOS changes affect every contributor and AI assistant. EAR scoring (Section 29.3) validates strategic fit, resource realism, and honesty compliance before binding the company to new standards. Links governance (EAR) to institutional memory (SDR) and versioning (Section 40). |
| **Expected Benefits** | Coherent major transitions; documented rationale; reduced accidental breaking changes; aligned domain manual updates. |
| **Risks** | Governance overhead — mitigated by patch/minor paths without full EAR (Section 42). Delayed releases — accepted cost for major changes. |
| **Impacted KOS Manuals** | All KOS manuals; Section 29, 40, 42, 43 of this manual |
| **Related Products** | None directly |
| **Related Services** | None directly |
| **Follow-up Actions** | Schedule EAR before KOS v1.0; publish SDR in release notes; KOS Review after EAR approval |
| **Approval Authority** | Founder (EAR-2026 policy adoption) |

---

### 44.8 SDR Governance Checklist

#### Before Approving an SDR

- [ ] All required fields complete (Section 44.3)
- [ ] Value-outcome test passed (Section 5.1)
- [ ] Impacted KOS manuals identified for update
- [ ] EAR completed if trigger category requires it (Section 29.8)
- [ ] Follow-up actions have owners and dates
- [ ] Supersedes link set if replacing prior SDR

#### After Approving an SDR

- [ ] Status set to Approved
- [ ] SDR stored in permanent archive (Section 44.5)
- [ ] Impacted KOS manuals updated in same effort or initiative registry
- [ ] Major/minor KOS release notes reference SDR number (Section 41)
- [ ] AI assistants and contributors notified (internal)

---

## 45. Risk Management and Strategic Risks

| Risk | Consequence | Mitigation |
| --- | --- | --- |
| Strategy drift across manuals | Conflicting timelines; wasted build | Section 13; Roadmap Review |
| KOS goes stale | Standards bypassed | KOS versioning; KOS Review |
| Sprint tasks as strategy | Chaos; no vision | Sections 1, 7 |
| Public over-promising | Trust collapse | Section 3; Never Do (Section 49) |
| Building without EAR | Architectural debt | Section 29 gates |
| Premature enterprise positioning | Credibility loss | Maturity model (Section 26) |
| PRD before approval | Rework | Section 11 |
| Governance paralysis | Founder bottleneck | Stage-appropriate cadence (Section 37) |
| No historical record | Repeated mistakes | Section 43; Section 44; initiative registry |
| Product sequencing disputes | Wrong build order | Section 10; `02` §6.5 |
| Resource overcommitment | Burnout; missed milestones | EAR resource realism score |
| Innovation without bounds | Portfolio dilution | Section 46; EAR |
| Undocumented strategic decisions | Repeated debate; policy drift | Section 44 SDRs |

---

## 46. Innovation and Research Strategy

### 46.1 Innovation Strategy

**Purpose:** Explore new opportunities without hype or portfolio dilution.

**Rules:**

- Innovation initiatives require EAR when they consume >10% founder time for >1 month.
- **Innovation lab charter** (Stage 2+): bounded time/budget for experiments with defined kill criteria.
- Failed experiments are documented — lessons feed `02` and `06`.
- No innovation initiative may violate Honesty Policy (`AGENTS.md`).

### 46.2 Research Strategy

**Purpose:** Systematic advancement of AI and platform capability.

**Focus areas (directional):**

- Agent evaluation and safety (`06`)
- Shared runtime and tool registry (`06` §32)
- Provider portability (ADR-driven)
- Vertical pattern extraction from services (`03` + `02`)

**Stage 1:** Research embedded in product build (SupportFlow). **Stage 3+:** Dedicated R&D budget line in ACR.

---

## 47. Technology Adoption Framework

### 47.1 Adoption Criteria

New languages, frameworks, or infrastructure require:

1. **Need** — clear problem unsolved by current stack
2. **ADR** — documented trade-offs (`05`)
3. **Review** — Engineering Review; EAR if cross-cutting
4. **Rollback** — plan if adoption fails

### 47.2 Default Stack

Prefer established stack in `05` §5 unless ADR justifies change.

### 47.3 AI Provider Policy

Per `06` §32.3: provider selection via ADR; no false proprietary model claims; design for portability.

### 47.4 Decommissioning

Retired technology documented in ADR and release notes — not silent abandonment.

---

## 48. Long-Term Vision

### 48.1 Ten-Year Direction

Khan Industries aims to become a **globally respected technology company** across:

- Artificial Intelligence and AI Agents
- SaaS Platforms and Business Automation
- Enterprise Software and Cloud Infrastructure
- Intelligent Operating Systems (KHANOS direction)
- Robotics and Embedded Systems
- Future hardware-software products

Aligned with `00_COMPANY.md` long-term direction and `02_PRODUCTS.md` §15.

### 48.2 Future Opportunities (Directional)

| Opportunity | Horizon | Gate |
| --- | --- | --- |
| AI Agent Marketplace | Mid-Term | Launched agents; billing; auth |
| Business operating system | Long-Term | Proven product portfolio |
| Vertical industry platforms | Mid-Term | Service pattern validation |
| Mobile-first applications | Long-Term | Platform API maturity |
| Robotics products | Future Vision | Software foundation solid (`02` §14) |
| International markets | Long-Term | Stage 4 maturity |
| Education and certification | Mid-Term | Authentic content and capability |

### 48.3 What Stays Constant

- Five value outcomes
- Honesty policy
- Premium execution standard
- KOS as operating system
- Governance through review

---

## 49. What Khan Industries Roadmap Will Never Do

### Never

- **Never publish** unverified milestones as achievements
- **Never maintain** a sprint backlog in this executive manual
- **Never invent** revenue targets, headcount plans, or completion dates as facts
- **Never skip** EAR for gated initiatives
- **Never write** PRDs before initiative Approval
- **Never let** domain manuals silently contradict harmonized horizons
- **Never use** roadmap for fake urgency or investor-style vanity metrics in public
- **Never fund** Future Vision initiatives at the expense of Immediate commitments without EAR
- **Never retire** KOS history — document why standards changed
- **Never delete** Strategic Decision Records — archive and supersede only (Section 44)
- **Never confuse** directional vision with committed delivery

### Roadmap Governance Checklist

#### Pre-EAR

- [ ] Initiative ID assigned
- [ ] Strategic + domain scoring complete (Section 10)
- [ ] Horizon classification set
- [ ] Dependencies identified
- [ ] Honesty compliance assessed
- [ ] Domain manuals reviewed for conflict

- [ ] SDR drafted if EAR establishes company-wide policy (Section 44)

#### Pre-QSR

- [ ] Initiative registry current
- [ ] Milestone status updated (Sections 18–25)
- [ ] Domain review summaries available
- [ ] Conflicts logged or resolved (Section 13)

#### Pre-KOS Release

- [ ] Release type determined (Section 40)
- [ ] Required reviews completed (Section 42)
- [ ] Affected documents updated
- [ ] Release notes drafted (Section 41)
- [ ] Governing SDRs referenced for major/minor releases (Section 44.6)
- [ ] Section 43 historical record updated
- [ ] Contributors notified (internal)

#### Pre-ACR

- [ ] All milestone categories reviewed
- [ ] Maturity stage assessed (Section 26–27)
- [ ] Vision and horizons refreshed
- [ ] EAR retrospective complete
- [ ] Next-year themes drafted

---

*This Strategic Roadmap & Governance Manual is part of the Khan Industries Operating System (KOS). For company foundation see `00_COMPANY.md`; for brand standards see `01_BRAND.md`; for products see `02_PRODUCTS.md`; for services see `03_SERVICES.md`; for digital platform see `04_WEBSITE.md`; for engineering standards see `05_ENGINEERING.md`; for AI agent standards see `06_AI_AGENTS.md`; for sales see `07_SALES.md`; for product requirements see `09_PRD.md`. For AI assistant operational rules see `AGENTS.md`.*

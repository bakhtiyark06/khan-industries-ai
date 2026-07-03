# Khan Industries — Engineering Standards Manual

This document is the **single source of truth for how Khan Industries designs, builds, reviews, tests, deploys, and maintains software**.

It governs every engineer, contractor, and AI assistant working in the Khan Industries codebase — the official website, SaaS products, AI agents, APIs, dashboards, and future platform surfaces.

If an implementation decision conflicts with this manual, **this manual wins** until it is deliberately updated.

> Code is a liability. **Maintainable, honest, production-ready code** is an asset. Every line should earn its place by creating measurable value and remaining understandable to the next engineer — human or AI.

**Current implementation status:** The repository is an early-stage Next.js 16 application with a default starter page, strict TypeScript, ESLint, and no automated tests or CI pipeline yet. Standards in this manual describe the **target engineering practice**, with **phased adoption** where noted. Do not claim standards are enforced by tooling until that tooling exists.

**Relationship to `AGENTS.md`:** `AGENTS.md` provides operational instructions for AI assistants in this repository. This manual is the **canonical engineering law**. `AGENTS.md` should align with this document; where they differ on engineering matters, this manual is authoritative.

---

## Table of Contents

### Part I — Foundation

1. [Engineering Philosophy](#1-engineering-philosophy)
2. [Engineering Principles](#2-engineering-principles)
3. [Definition of Done](#3-definition-of-done)
4. [Engineering Decision Making](#4-engineering-decision-making)

### Part II — Codebase Architecture

5. [Technology Stack](#5-technology-stack)
6. [Repository Standards](#6-repository-standards)
7. [Folder Structure Standards](#7-folder-structure-standards)
8. [Naming Conventions](#8-naming-conventions)

### Part III — Workflow

9. [Git Workflow](#9-git-workflow)
10. [Branch Strategy](#10-branch-strategy)
11. [Commit Message Standards](#11-commit-message-standards)
12. [Code Review Standards](#12-code-review-standards)
13. [Product Development Lifecycle](#13-product-development-lifecycle)
14. [AI-Assisted Development](#14-ai-assisted-development)

### Part IV — Implementation Standards

15. [TypeScript and React Standards](#15-typescript-and-react-standards)
16. [Component Development](#16-component-development)
17. [Error Handling Standards](#17-error-handling-standards)
18. [Logging Standards](#18-logging-standards)
19. [Security Principles](#19-security-principles)
20. [Performance and Accessibility](#20-performance-and-accessibility)

### Part V — Quality and Operations

21. [Testing Standards](#21-testing-standards)
22. [Documentation Standards](#22-documentation-standards)
23. [Deployment Standards](#23-deployment-standards)
24. [Maintenance and Ownership](#24-maintenance-and-ownership)

### Part VI — Governance

25. [Future Scalability](#25-future-scalability)
26. [Engineering Checklist](#26-engineering-checklist)
27. [What Khan Industries Engineering Will Never Do](#27-what-khan-industries-engineering-will-never-do)

---

## 1. Engineering Philosophy

Khan Industries engineering exists to build software that is **professional, trustworthy, premium, scalable, and easy to maintain** — aligned with company values in `00_COMPANY.md` and product goals in `AGENTS.md`.

**Four engineering convictions:**

1. **Maintainability over speed.** Deadlines do not justify shipping code that violates standards. Refactoring is part of delivery, not a future luxury.
2. **Honesty in implementation.** Product status, capabilities, and metrics in code and UI must match reality (`02_PRODUCTS.md`, Honesty Policy in `AGENTS.md`). Never build UI that implies launched products, fake clients, or fake statistics.
3. **Build for the long term.** Architecture decisions today must not block authentication, billing, multi-product surfaces, or marketplace scale tomorrow (`04_WEBSITE.md`).
4. **Showcraft in execution.** The codebase and deployed platform are proof of Khan Industries quality — as important as any marketing page (`01_BRAND.md`).

### KOS Dependency Map

This manual owns **how software is built**. Sibling documents own adjacent concerns:

| Topic | Owner document | `05_ENGINEERING.md` responsibility |
| --- | --- | --- |
| Brand colors, voice, motion, UX | `01_BRAND.md` | Implement design tokens; reference brand rules in UI code |
| Product strategy, status, launch bar | `02_PRODUCTS.md` | Code-level quality; engineering evidence per lifecycle stage |
| Client delivery, UAT, hypercare | `03_SERVICES.md` | Internal QA before client handoff; do not duplicate client UAT |
| Information architecture, routes, components (what) | `04_WEBSITE.md` | Route implementation, component library, technical SEO |
| Agent prompts, safety, escalation | `06_AI_AGENTS.md` | Shared patterns only: APIs, logging, deployment, testing |
| Feature scope, requirements | `09_PRD.md` | Translate PRDs into branches, tests, Definition of Done |
| AI assistant quick rules | `AGENTS.md` | Operational layer; defer to this manual for engineering law |

When unsure which document governs a decision, use this map. When documents conflict, update the authoritative document deliberately — do not silently bypass standards.

---

## 2. Engineering Principles

When this manual does not specify a detail, resolve trade-offs using these principles in order:

| Principle | Meaning | Example |
| --- | --- | --- |
| **Simplicity** | Choose the simplest solution that meets requirements. | Prefer static generation over client state when content is stable. |
| **Explicitness** | Make behavior and types obvious; avoid magic. | Named exports, typed props, clear function names. |
| **Consistency** | Match existing patterns before inventing new ones. | Reuse `Button` before creating `PrimaryAction`. |
| **Colocation** | Keep related code close; split when files grow too large. | Component + styles + types in one folder when small. |
| **Fail safe** | Errors should be visible, logged, and recoverable. | `error.tsx`, structured API errors, no silent catches. |
| **Server first** | Default to React Server Components; add client only when needed. | `"use client"` only for interactivity, browser APIs, hooks. |
| **Minimal dependencies** | Every dependency is a long-term obligation. | Justify new packages in PR description or ADR. |
| **Accessibility by default** | WCAG 2.1 AA is not optional for public surfaces. | Semantic HTML, labels, keyboard nav from day one. |

---

## 3. Definition of Done

A feature, fix, or documentation change is **done** only when all applicable items below are satisfied.

### 3.1 Universal Done (Every Change)

- [ ] Implements agreed scope — no unapproved scope creep
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` completes successfully
- [ ] TypeScript compiles with `strict` mode (no unjustified `any`)
- [ ] No secrets, API keys, or credentials in code or commits
- [ ] Code reviewed (self-review minimum at early stage; peer review as team grows)
- [ ] Naming and folder structure follow Sections 7–8
- [ ] No new dependencies without justification (Section 6)

### 3.2 UI / Marketing Pages (Additional)

- [ ] Aligns with `01_BRAND.md` — dark-first, premium, spacious
- [ ] Responsive: mobile, tablet, desktop
- [ ] Accessibility baseline: semantic landmarks, heading hierarchy, focus states, alt text
- [ ] Metadata: title, description, Open Graph per `04_WEBSITE.md` §8
- [ ] Product/service status labels honest per `02_PRODUCTS.md` / `03_SERVICES.md`
- [ ] No fake testimonials, statistics, client logos, or partnerships

### 3.3 API Routes and Server Logic (Additional)

- [ ] Input validated at boundary
- [ ] Errors return consistent shape (Section 17)
- [ ] Auth enforced where required (when auth exists)
- [ ] Logging without secrets (Section 18)

### 3.4 AI Features (Additional)

- [ ] Follows `06_AI_AGENTS.md` for agent-specific behavior
- [ ] User informed when interacting with AI
- [ ] Escalation path for out-of-scope requests

### 3.5 Client Deliverables (Additional)

- [ ] Internal QA complete per Section 21 before `03_SERVICES.md` client UAT
- [ ] Handoff documentation prepared per Section 22

**Rule:** "It works on my machine" is not done. Done means **mergeable and deployable** under this manual.

---

## 4. Engineering Decision Making

### 4.1 Decision Levels

| Level | Who decides | Examples |
| --- | --- | --- |
| **Local** | Implementing engineer | Variable names, component split, utility placement |
| **Team / founder** | Reviewer or founder | New dependency, new route group, API shape |
| **Architecture review** | Documented discussion + ADR | Auth provider, database, payment, multi-tenancy, monorepo |

### 4.2 Architecture Review Triggers

Require explicit architecture review (and ADR when irreversible) before:

- Adding authentication or authorization
- Introducing a database or ORM
- Adding payment / billing integration
- Splitting into monorepo or microservices
- Public API versioning strategy
- Third-party AI provider selection for production agents
- Storing or processing regulated data (PII, health, financial)

### 4.3 Architecture Decision Records (ADRs)

For significant decisions, create a lightweight ADR in `docs/adr/` (create folder when first ADR is needed):

```
docs/adr/NNNN-short-title.md
```

ADR template:

1. **Status** — Proposed | Accepted | Deprecated
2. **Context** — What problem are we solving?
3. **Decision** — What did we choose?
4. **Consequences** — Trade-offs, what we gain and give up

ADRs are immutable once accepted; supersede with a new ADR rather than editing history.

### 4.4 Early-Stage vs. Growth-Stage

| Practice | Early-stage (solo founder) | Growth-stage (team) |
| --- | --- | --- |
| Code review | Self-review + checklist | Required peer review |
| Branching | `main` or short-lived branches | PR required for `main` |
| ADRs | For irreversible decisions only | Standard for Level 3 decisions |
| Testing | Lint + build + manual smoke | Automated tests in CI |
| Direct push to `main` | Acceptable for docs-only or trivial fixes | Discouraged; PR preferred |

Standards in this manual apply at **both** stages; only process rigor scales.

---

## 5. Technology Stack

Canonical stack for Khan Industries software. Versions reflect `package.json` at time of writing; update this table when upgrading.

| Layer | Technology | Notes |
| --- | --- | --- |
| **Framework** | Next.js 16 (App Router) | **This is NOT the Next.js you know.** Read `node_modules/next/dist/docs/` before using APIs; heed deprecation notices (`AGENTS.md`). |
| **Language** | TypeScript 5.x, `strict: true` | No `any` without comment justification |
| **UI** | React 19 | Server Components default |
| **Styling** | Tailwind CSS 4 | Design tokens in `globals.css` / `@theme`; align with `01_BRAND.md` |
| **Linting** | ESLint 9 + `eslint-config-next` | `npm run lint` |
| **Package manager** | npm | `package-lock.json` committed |
| **Hosting** | Vercel or equivalent | Preview per branch/PR when CI connected |
| **Version control** | Git + GitHub | `main` as production branch |

### 5.1 Stack Rules

- **Avoid unnecessary dependencies.** Prefer platform and standard library solutions.
- **Pin major versions** deliberately; test upgrades in a branch before merging.
- **Do not add** alternate frameworks, CSS-in-JS libraries, or state managers without ADR.
- **Future additions** (database, auth, payments, testing) require ADR and update to this table.

### 5.2 Scripts (Current and Target)

| Script | Status | Purpose |
| --- | --- | --- |
| `npm run dev` | Exists | Local development |
| `npm run build` | Exists | Production build verification |
| `npm run start` | Exists | Local production server |
| `npm run lint` | Exists | ESLint |
| `npm run typecheck` | **Target** — add `tsc --noEmit` | CI type verification |
| `npm run test` | **Future** | Unit/integration tests |

---

## 6. Repository Standards

### 6.1 Repository Hygiene

- **Single primary repo** for the Khan Industries digital platform (`khan-industries-ai`) unless ADR defines monorepo split.
- **`package-lock.json`** committed; do not delete or hand-edit lockfiles.
- **`.gitignore`** must exclude: `node_modules`, `.next`, `.env*`, secrets, build artifacts.
- **No generated files** committed except lockfiles and intentional artifacts.
- **README.md** at root stays current for clone-and-run instructions.

### 6.2 Environment and Secrets

| File | Purpose | Committed? |
| --- | --- | --- |
| `.env.local` | Local secrets and overrides | Never |
| `.env.example` | Documented variable names (no values) | Yes, when vars are introduced |
| Preview / production vars | Set in hosting provider dashboard | Never in repo |

**Rules:**

- Never commit API keys, tokens, passwords, or connection strings.
- Access environment variables only in server code or `NEXT_PUBLIC_*` when intentionally client-exposed.
- Rotate credentials immediately if accidentally committed; treat as incident.

### 6.3 Dependency Policy

1. Prefer zero new dependencies.
2. If adding a dependency: check maintenance, bundle size, license, security advisories.
3. Document reason in PR description.
4. Run `npm audit` periodically; address high/critical issues before release.
5. AI assistants must not add dependencies without explicit approval in the task scope.

### 6.4 Docs-Only Fast Path

Changes **only** under `docs/` that do not affect code:

- Commit message standards still apply (Section 11)
- Lint/build not required for markdown-only commits
- KOS cross-references should be checked for accuracy

---

## 7. Folder Structure Standards

### 7.1 Current State

Today the codebase uses a flat App Router layout:

```
src/app/
├── layout.tsx
├── page.tsx          # Default Next.js starter (to be replaced)
└── globals.css
```

Path alias: `@/*` → `./src/*` (`tsconfig.json`).

### 7.2 Target Structure

Align with `04_WEBSITE.md` §10.2. Migrate **before** building Phase 1 marketing pages to avoid painful refactors when auth routes arrive.

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, global providers)
│   ├── globals.css
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── (marketing)/               # Public marketing — shared layout
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Home
│   │   ├── about/
│   │   ├── contact/
│   │   ├── solutions/[slug]/
│   │   ├── products/[slug]/
│   │   ├── portfolio/[slug]/
│   │   ├── industries/[slug]/
│   │   ├── insights/[slug]/
│   │   └── careers/
│   ├── (app)/                     # Authenticated — future
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   ├── portal/
│   │   └── marketplace/
│   ├── developers/                # Developer Center — future
│   └── api/                       # Route handlers
│       └── ...
├── components/
│   ├── ui/                        # Primitives: Button, Input, Badge, Card
│   ├── layout/                    # Header, Footer, Container, Section
│   ├── marketing/                 # Hero, ProductCard, ServiceCard, CTA
│   └── forms/                     # ContactForm, etc.
├── lib/
│   ├── utils.ts                   # Pure utilities
│   ├── config.ts                  # Site config, nav structure
│   └── validators/                # Zod or similar — when forms/APIs grow
├── content/                       # Typed marketing data (KOS-derived)
│   ├── products.ts
│   ├── services.ts
│   └── navigation.ts
├── styles/                        # Optional: tokens split from globals
└── types/
    └── index.ts
```

### 7.3 Folder Rules

| Rule | Detail |
| --- | --- |
| **Route groups** | `(marketing)` and `(app)` separate layouts without affecting URL |
| **Colocation** | Page-specific components may live beside `page.tsx` until reused 2+ times |
| **Promotion** | Move to `src/components/` when reused across routes |
| **No monoliths** | Files over ~250 lines should be split |
| **Barrel exports** | Use `index.ts` sparingly; prefer direct imports for tree-shaking clarity |
| **Content layer** | Product/service metadata in `src/content/` typed from KOS truths — not hard-coded in components |

### 7.4 Migration Path

1. Create `(marketing)/layout.tsx` and move starter `page.tsx` into `(marketing)/page.tsx`
2. Add `src/components/`, `src/lib/`, `src/content/` as first features land
3. Add `(app)/` when authentication ships — do not mix auth layouts with marketing layout

---

## 8. Naming Conventions

### 8.1 Files and Directories

| Item | Convention | Example |
| --- | --- | --- |
| React components | PascalCase file | `ProductCard.tsx` |
| Utilities, lib | camelCase file | `formatDate.ts` |
| Route segments | kebab-case URLs | `/solutions/ai-agent-development` |
| Route folders | lowercase, dynamic `[slug]` | `products/[slug]/page.tsx` |
| Types file | camelCase or `types.ts` | `product.ts` |
| Test files | `*.test.ts` / `*.test.tsx` | `formatDate.test.ts` |
| ADRs | `NNNN-kebab-case.md` | `0001-auth-provider.md` |

### 8.2 Code Identifiers

| Item | Convention | Example |
| --- | --- | --- |
| Components | PascalCase | `ServiceCard` |
| Functions, variables | camelCase | `getProductBySlug` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Types, interfaces | PascalCase | `ProductMetadata` |
| Enums | PascalCase members | `ProductStatus.Concept` |
| CSS variables | kebab-case | `--color-deep-navy` |
| Environment variables | UPPER_SNAKE_CASE | `DATABASE_URL` |
| Public env | `NEXT_PUBLIC_` prefix | `NEXT_PUBLIC_SITE_URL` |

### 8.3 Git Branches

| Type | Pattern | Example |
| --- | --- | --- |
| Feature | `feature/short-description` | `feature/marketing-home` |
| Fix | `fix/short-description` | `fix/contact-form-validation` |
| Docs | `docs/short-description` | `docs/engineering-manual` |
| Chore | `chore/short-description` | `chore/add-typecheck-script` |

### 8.4 API Routes

- REST-style paths under `src/app/api/`
- Nouns, plural collections: `/api/products`, `/api/consultations`
- Version in path when breaking changes ship: `/api/v1/...` (future ADR)

---

## 9. Git Workflow

Standard flow for code changes:

```
1. Pull latest main
2. Create branch (Section 10)
3. Implement with small, focused commits
4. Run lint + build locally
5. Push branch
6. Open Pull Request (growth-stage) or merge (early-stage docs/trivial)
7. Review against Section 12 and Definition of Done
8. Merge to main
9. Verify deployment (Section 23)
```

**Merge rules:**

- Resolve conflicts carefully; never blindly accept incoming changes on critical files.
- Delete feature branches after merge when using PR workflow.
- Never force-push `main` except documented emergency recovery.

---

## 10. Branch Strategy

| Branch | Purpose | Protection |
| --- | --- | --- |
| `main` | Production-ready code; deploys to production | Protected when CI exists; no force push |
| `feature/*` | New features, pages, components | Short-lived; delete after merge |
| `fix/*` | Bug fixes | Short-lived |
| `docs/*` | KOS or documentation updates | May merge directly at early stage |
| `release/*` | **Future** — release preparation | When versioning cadence requires |

### When Direct Push to `main` Is Acceptable (Early-Stage)

- Documentation-only changes under `docs/`
- Founder solo work with self-review checklist completed
- Urgent production hotfix with post-merge review

As the team grows, **require PRs for all `main` merges** and enable branch protection.

---

## 11. Commit Message Standards

### 11.1 Preferred Style (Current Repository)

Short, imperative, descriptive — matching existing history:

```
Define Khan Industries engineering standards
Add marketing home page layout
Fix contact form email validation
```

### 11.2 Conventional Commits (Optional, Supported)

```
feat: add product card component
fix: correct metadata on about page
docs: update engineering manual
chore: add typecheck script
refactor: extract section header component
```

### 11.3 Rules

- One logical change per commit when practical
- Message explains **why** in PR/body if not obvious from subject
- No meaningless messages (`fix`, `update`, `wip`) on `main`
- No AI co-author trailers unless project policy explicitly adds them
- Do not commit secrets; if committed, revert and rotate — do not amend published commits on shared branches without team agreement

---

## 12. Code Review Standards

### 12.1 What Reviewers Check

1. **Correctness** — Does it meet scope and Definition of Done?
2. **Standards** — Sections 15–20 compliance
3. **Security** — No secrets, validated inputs, safe dependencies
4. **Honesty** — No fake UI data; product status accurate
5. **Maintainability** — Readable, appropriately sized, reusable
6. **KOS alignment** — Matches relevant `01`–`04`, `06`, `09` documents
7. **Performance** — No obvious regressions; images optimized; client JS minimized

### 12.2 AI-Generated Code

All AI-generated code **requires human review** before merge to `main`:

- Verify logic, edge cases, and security — do not trust blindly
- Confirm no hallucinated APIs, dependencies, or file paths
- Confirm only requested files were changed
- Run lint and build locally

### 12.3 Review Severity

| Severity | Action |
| --- | --- |
| **Blocker** | Must fix before merge — security, broken build, honesty violation, scope mismatch |
| **Major** | Should fix before merge — missing tests (when required), accessibility gaps |
| **Minor** | May fix in follow-up — naming, style nits |
| **Suggestion** | Optional improvement |

### 12.4 Early-Stage Self-Review

When solo: complete Section 26 checklist as self-review before push.

---

## 13. Product Development Lifecycle

Engineering activities map to product stages in `02_PRODUCTS.md` §8 and PRDs in `09_PRD.md`.

| Product stage | Engineering activity | Exit evidence |
| --- | --- | --- |
| **Concept** | No production code required; optional spike in branch | PRD draft in `09_PRD.md` |
| **Planned** | Branch created; folder scaffold; content config stub | Approved PRD; technical approach noted |
| **In Development** | Feature implementation; CI lint/build pass | DoD §3.1–3.3 satisfied for scope |
| **Beta** | Deployed to preview/staging; limited users | Internal QA + feedback loop; `06_AI_AGENTS` if applicable |
| **Launched** | Production deploy; monitoring | All `02_PRODUCTS` §7 quality dimensions; launch checklist |
| **Maintained** | Bug fixes, dependency updates | Tickets resolved within agreed SLA |
| **Evolved** | New ADR if architecture changes; version bump | New PRD or PRD revision |
| **Retired** | Deprecation notices; redirects; data migration plan | Documented in `02_PRODUCTS.md` |

**Rule:** Code on the public site must not present **Concept** products as **Launched**. Use status badges per `04_WEBSITE.md` and `02_PRODUCTS.md`.

---

## 14. AI-Assisted Development

Khan Industries uses AI assistants (including Cursor) as engineering tools — not replacements for standards, review, or accountability.

### 14.1 Modes of Operation

| Mode | When to use | Output |
| --- | --- | --- |
| **Ask (read-only)** | Understanding code, exploring options, reviewing docs | Explanations; no file changes |
| **Plan** | Multi-file features, new architecture, KOS documents, ambiguous scope | Implementation plan for human approval |
| **Agent** | Approved plan execution, focused implementation, bug fixes | Code/doc changes; requires review |

### 14.2 Required Workflow for Non-Trivial Work

```
New task
  → Read relevant KOS docs (README order: 00–09 as applicable)
  → Read AGENTS.md
  → Plan Mode: produce implementation plan
  → Human approval
  → Agent Mode: implement approved scope only
  → Human review + Definition of Done
  → Merge
```

**Non-trivial** means: new page, new component system, new API, auth, database, dependency addition, or multi-file refactor.

### 14.3 Cursor Plan Mode Workflow

1. **Scope the task** — State objective, constraints, files not to modify.
2. **Read first** — AI must read governing docs before planning (`05_ENGINEERING.md`, `04_WEBSITE.md`, etc.).
3. **Produce plan** — Structure, files touched, risks, phased steps.
4. **Wait for approval** — Do not implement until human confirms.
5. **Execute in Agent Mode** — Follow plan; report deviations.

KOS documentation (like this manual) should be created via **Plan → approve → Agent** — not single-shot generation without review.

### 14.4 Cursor Agent Mode Workflow

1. Confirm task matches approved plan or explicit small-scope request.
2. Modify **only** files required for the task.
3. Run `npm run lint` and `npm run build` before marking complete.
4. Summarize changes, files modified, and verification performed.
5. Never invent fake clients, metrics, or launched products in code or copy.

### 14.5 AI Constraints

- Do not modify KOS docs unless the task explicitly includes them.
- Do not add dependencies without approval.
- Do not skip tests or build verification when claiming completion.
- Do not commit or push unless explicitly requested.
- Read `node_modules/next/dist/docs/` when working with Next.js 16 APIs.

---

## 15. TypeScript and React Standards

### 15.1 TypeScript

- **`strict: true`** — non-negotiable (`tsconfig.json`)
- **No `any`** — use `unknown` and narrow, or define proper types
- **Prefer `interface`** for object shapes; `type` for unions and utilities
- **Explicit return types** on exported functions and API handlers
- **Use path alias** `@/` for imports from `src/`

### 15.2 React and Next.js 16

- **Server Components default** — no `"use client"` unless needed for:
  - `useState`, `useEffect`, other hooks
  - Browser-only APIs (`window`, `document`)
  - Event handlers on client-interactive elements (when not using form actions)
- **Server Actions** — preferred for form mutations when appropriate
- **Data fetching** — in Server Components or route handlers; avoid client fetch for static marketing content
- **Metadata** — export `metadata` or `generateMetadata` from page layouts/pages
- **Images** — `next/image` with width, height, alt
- **Links** — `next/link` for internal navigation

### 15.3 File Size and Structure

- One primary component per file for shared components
- Extract subcomponents when parent exceeds ~150 lines
- Keep business logic in `lib/`; keep components presentational where possible

---

## 16. Component Development

Implements the component inventory in `04_WEBSITE.md` §7.

### 16.1 Component Layers

| Layer | Location | Examples |
| --- | --- | --- |
| **Primitives** | `components/ui/` | Button, Input, Badge, Card |
| **Layout** | `components/layout/` | Header, Footer, Container, Section |
| **Marketing** | `components/marketing/` | Hero, ProductCard, ServiceCard, CTA |
| **Forms** | `components/forms/` | ContactForm |

### 16.2 Component Rules

- **Composable** — `ProductCard` extends patterns from `Card`; no duplicate markup
- **Typed props** — export `interface ProductCardProps`
- **Brand tokens** — use CSS variables / Tailwind theme aligned with `01_BRAND.md` (Deep Navy, Slate, etc.)
- **Accessible** — buttons are `<button>`, links are `<a>` or `<Link>`, form fields have `<label>`
- **Honest props** — `Testimonial` and `Statistics` components only receive real data; empty states preferred over fabrication
- **Status badges** — `ProductCard` displays lifecycle status from `02_PRODUCTS.md`

### 16.3 Styling

- Tailwind utility classes preferred; extract repeated patterns with `@apply` sparingly
- Dark-first: default theme matches brand digital palette
- Motion: respect `prefers-reduced-motion` per `01_BRAND.md` §10

### 16.4 Future: Component Catalog

When the library grows, add Storybook or equivalent — document components with live examples. Not required at early stage.

---

## 17. Error Handling Standards

### 17.1 UI Errors

- **`app/not-found.tsx`** — branded 404 with links home and to Contact
- **`app/error.tsx`** — client boundary for unexpected errors; reset action; no stack traces to users in production
- **Route-level** — `error.tsx` in segment when isolated failure domains matter

### 17.2 API and Server Errors

Consistent JSON shape for route handlers:

```typescript
// Success
{ "data": T }

// Error
{ "error": { "code": "VALIDATION_ERROR", "message": "Human-readable message" } }
```

- **4xx** — client errors (validation, auth, not found)
- **5xx** — server errors (log internally; generic message to client)
- Never expose stack traces, SQL, or internal paths in responses

### 17.3 Rules

- No empty `catch` blocks
- Log errors server-side (Section 18)
- User-facing messages: calm, helpful, on-brand — not alarming or blame-shifting

---

## 18. Logging Standards

### 18.1 Current (Early-Stage)

- `console.error` for server-side failures in development
- Structured logging library (e.g., Pino) — adopt when production traffic and APIs warrant it (ADR optional)

### 18.2 Rules

| Rule | Detail |
| --- | --- |
| **No secrets in logs** | Strip tokens, passwords, PII |
| **Server only** | Sensitive logs never sent to client |
| **Context** | Include request id, route, user id (when auth exists) — not passwords |
| **Levels** | error > warn > info > debug; production default info or warn |
| **Client** | Minimal console logging in production builds |

### 18.3 Future Observability

When platform scales: error tracking (e.g., Sentry), uptime monitoring, AI agent tracing per `06_AI_AGENTS.md`. Plan hooks in API routes without over-engineering day one.

---

## 19. Security Principles

### 19.1 Baseline (All Code)

- Secrets only in environment variables — never in source
- Validate and sanitize all external input (forms, API bodies, query params)
- Use HTTPS in production (hosting provider default)
- Keep dependencies updated; respond to critical CVEs before launch
- **CSRF** — use Next.js Server Actions or CSRF tokens for state-changing operations when applicable
- **Headers** — security headers via `next.config.ts` or middleware when hardening (future)

### 19.2 Authentication-Ready Patterns (Future)

When auth ships (ADR required):

- HttpOnly cookies for session tokens — not `localStorage` for sensitive tokens
- Role-based access in `(app)` route group middleware
- Principle of least privilege for API routes

### 19.3 AI-Specific

- Never log full prompts containing user PII in production without policy
- Rate-limit public agent endpoints when exposed
- Agent behavior boundaries in `06_AI_AGENTS.md`

### 19.4 Client Deliverables

Client projects (`03_SERVICES.md`) must meet the same security baseline — no exceptions for "small" engagements.

---

## 20. Performance and Accessibility

### 20.1 Performance Expectations

| Metric | Target (marketing pages) |
| --- | --- |
| **LCP** | < 2.5s on typical connection |
| **CLS** | < 0.1 |
| **INP** | < 200ms |
| **Bundle discipline** | Minimize `"use client"` islands; analyze when adding large deps |

**Practices:**

- `next/image` for all raster images; correct `sizes`
- Static generation for marketing content where possible
- Font optimization via `next/font`
- Lazy load below-fold media
- No render-blocking third-party scripts without approval

Aligns with `04_WEBSITE.md` §8.1 and §8.5.

### 20.2 Accessibility Expectations

**WCAG 2.1 Level AA** minimum for public surfaces (`01_BRAND.md`).

Checklist for every new page/component:

- [ ] One `<h1>` per page; logical heading order
- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators
- [ ] Color contrast meets AA (4.5:1 text, 3:1 large text/UI)
- [ ] Images have appropriate `alt`
- [ ] Form inputs have associated labels
- [ ] `aria-*` only when semantic HTML insufficient
- [ ] `prefers-reduced-motion` respected

Accessibility is a **Definition of Done** requirement — not a post-launch audit.

---

## 21. Testing Standards

### 21.1 Phased Adoption

Testing maturity scales with platform risk:

| Phase | When | Requirements |
| --- | --- | --- |
| **Phase 1** | Now — Phase 1 website | `npm run lint` + `npm run build` + manual smoke test of changed routes |
| **Phase 2** | First forms, APIs, utils | Add Vitest; unit tests for `lib/` and validators; component tests for critical UI |
| **Phase 3** | Auth, billing, marketplace | Playwright E2E for critical paths: consultation flow, login, checkout |
| **Phase 4** | Team scale | CI blocks merge on lint, typecheck, test |

**Current status:** Phase 1 only. Do not claim automated test coverage exists until Phase 2 is implemented.

### 21.2 What to Test (When Phase 2+ Active)

| Area | Test type |
| --- | --- |
| Utilities, validators | Unit |
| API route handlers | Integration |
| Critical user flows | E2E |
| Components with logic | Component (RTL) |
| Static marketing pages | Manual + optional snapshot |

### 21.3 Manual Smoke Test (Phase 1)

Before merge of UI changes:

1. Page loads without console errors
2. Primary CTA works
3. Mobile viewport acceptable
4. One keyboard tab through interactive elements

### 21.4 Relation to Client QA

Internal testing (this section) completes **before** client UAT in `03_SERVICES.md` §8.

---

## 22. Documentation Standards

### 22.1 Code Documentation

| Artifact | When |
| --- | --- |
| **Self-explanatory code** | Default — prefer clear names over comments |
| **Comments** | Non-obvious business logic, workarounds, security constraints |
| **JSDoc** | Exported `lib/` functions and public APIs |
| **README** | Root README for setup; package README if monorepo packages added |

### 22.2 KOS Synchronization

When code changes materially affect:

- Product status → update `02_PRODUCTS.md`
- Service scope → update `03_SERVICES.md`
- Routes, IA, components → update `04_WEBSITE.md`
- Engineering process → update this manual

Prefer updating KOS in the **same effort** as the code change.

### 22.3 PRDs

Features in **Planned** stage or beyond require entries in `09_PRD.md` before significant implementation.

### 22.4 API Documentation

Public APIs documented in Developer Center (`04_WEBSITE.md`) when exposed — OpenAPI or MDX reference.

---

## 23. Deployment Standards

### 23.1 Environments

| Environment | Purpose | Branch / trigger |
| --- | --- | --- |
| **Local** | Development | `npm run dev` |
| **Preview** | PR review, stakeholder review | PR branches (Vercel preview) |
| **Production** | Live site | `main` merge |

### 23.2 Deployment Rules

- **Never deploy** broken builds to production
- **Preview** every non-trivial PR when hosting connected
- **Production** only from `main` after Definition of Done
- **Rollback** — revert commit on Vercel/hosting provider; document incident if user-facing

### 23.3 CI Pipeline (Target)

GitHub Actions workflow — **to be implemented** before Phase 1 website build completes:

```yaml
# Target jobs
- npm ci
- npm run lint
- npm run typecheck   # after script added
- npm run build
- npm run test        # when Phase 2 active
```

CI status must pass before merge when enabled.

### 23.4 Post-Deploy Verification

After production deploy:

1. Home page loads
2. Changed routes verified
3. Critical forms submit (or staging equivalent)
4. No spike in error logs (when observability exists)

---

## 24. Maintenance and Ownership

### 24.1 Code Ownership (Early-Stage)

| Area | Owner |
| --- | --- |
| `src/app/(marketing)/` | Founder / lead engineer |
| `src/components/` | Shared — review required for changes |
| `src/content/` | Product + engineering — sync with KOS |
| `docs/` | Founder + AI-assisted; human review |
| `docs/adr/` | Architecture owner |

As team grows, assign CODEOWNERS in `.github/CODEOWNERS`.

### 24.2 Technical Debt Policy

**Technical debt** is intentional shortcuts that violate ideal standards, tracked for repayment.

| Action | When |
| --- | --- |
| **Accept debt** | Document in PR or `// TODO(debt): reason` with ticket reference |
| **Repay debt** | Allocate time in maintenance sprints; before scaling affected area |
| **Reject debt** | Security, honesty, accessibility, or auth shortcuts — never accept |

**Rules:**

- Do not accumulate debt in `src/content/` truth data or auth flows
- Refactor when file exceeds standards twice after initial ship
- Prefer small incremental cleanup over massive rewrites

### 24.3 Client Project Maintenance

Ongoing client work follows `03_SERVICES.md` §9 maintenance tiers. Engineering handoff must include runbooks per Section 22.

---

## 25. Future Scalability

Architectural guardrails to observe **now** so the platform scales over ten years:

| Concern | Guardrail |
| --- | --- |
| **Multi-product** | Typed `content/` config; no hard-coded product lists in components |
| **Authentication** | Isolate `(app)` routes; middleware-ready layout split |
| **Multi-tenancy** | No global singleton client state for user data; tenant id in context when built |
| **API versioning** | `/api/v1/` when public APIs ship |
| **i18n** | Avoid hard-coded strings in components; plan `next-intl` or equivalent via ADR |
| **Monorepo** | ADR before split; shared `packages/ui` extraction path |
| **Marketplace** | Agent registry as data + routes, not one-off pages per agent |
| **Database** | ADR for provider; repository pattern for data access when introduced |

Aligns with `04_WEBSITE.md` Ten-Year Scalability and `02_PRODUCTS.md` §15.

---

## 26. Engineering Checklist

### 26.1 Pre-Merge Checklist

Copy for PR description or self-review:

- [ ] Scope matches task / PRD / approved plan
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] TypeScript strict — no unjustified `any`
- [ ] Only intended files changed
- [ ] No secrets or `.env` files committed
- [ ] Naming conventions followed (Section 8)
- [ ] UI changes: responsive + accessibility baseline (Section 20)
- [ ] UI changes: honest content — no fake stats/clients/products
- [ ] New dependencies justified
- [ ] KOS docs updated if behavior/truth changed
- [ ] AI-generated code human-reviewed

### 26.2 Pre-Deploy Checklist (Production)

- [ ] Pre-merge checklist complete
- [ ] Product status badges accurate on site
- [ ] Metadata and OG tags verified on new pages
- [ ] Manual smoke test on preview URL
- [ ] Rollback approach known
- [ ] Client UAT complete (if client deliverable)

### 26.3 New Page Checklist (`04_WEBSITE.md` Phase 1)

- [ ] Route in correct route group `(marketing)`
- [ ] `metadata` export defined
- [ ] Uses shared layout components (Header, Footer, Section)
- [ ] Primary CTA defined (usually Consultation)
- [ ] Added to navigation config / footer sitemap
- [ ] Internal links to related Products/Solutions

---

## 27. What Khan Industries Engineering Will Never Do

### Never

- **Never ship code that fails lint or build** to production
- **Never commit secrets** or expose credentials in client bundles
- **Never merge AI-generated code without human review**
- **Never present Concept products as Launched** in UI or APIs
- **Never add fake testimonials, statistics, clients, or partnerships** to the codebase
- **Never skip accessibility** for public pages to "save time"
- **Never deploy untested systems** to client production (`03_SERVICES.md`)
- **Never add dependencies** without justification
- **Never create monolithic unmaintainable files** when components can be split
- **Never bypass security validation** on user input
- **Never force-push `main`** except documented emergency recovery
- **Never let KOS docs drift** from implemented truth without update plans

### Always

- **Always read governing KOS docs** before non-trivial implementation
- **Always run lint and build** before claiming completion
- **Always prefer Server Components** unless client interactivity requires otherwise
- **Always document irreversible decisions** in ADRs
- **Always leave the codebase better** than you found it

---

*This Engineering Standards Manual is part of the Khan Industries Operating System (KOS). For company foundation see `00_COMPANY.md`; for brand implementation see `01_BRAND.md`; for products see `02_PRODUCTS.md`; for services see `03_SERVICES.md`; for digital platform architecture see `04_WEBSITE.md`; for AI agent standards see `06_AI_AGENTS.md`; for sales process see `07_SALES.md`; for roadmap see `08_ROADMAP.md`; for product requirements see `09_PRD.md`. For AI assistant operational rules see `AGENTS.md`.*

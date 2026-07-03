# Khan Industries — Digital Platform Strategy

This document is the **single source of truth for the Khan Industries digital ecosystem** — the public website, authenticated portals, developer surfaces, and future platform capabilities that together form the company's central digital hub.

Although the filename is `WEBSITE.md`, this is not a page list. It is the **Digital Platform Strategy**: the blueprint every engineer, designer, AI assistant, and product team follows when building, extending, or maintaining any Khan Industries digital experience.

If an implementation decision conflicts with this document, **this document wins** until it is deliberately updated.

> The platform is not a brochure. It is the **operating front door** of Khan Industries — where trust is earned, capability is demonstrated, products are discovered, consultations begin, and long-term client relationships are supported.

**Current implementation status:** The codebase is an early-stage Next.js 16 application with a default starter page. The architecture described here is the **target state**, phased over time. Pages and features must be built honestly — no fake clients, statistics, partnerships, or launched products.

---

## Table of Contents

1. [Platform Philosophy](#1-platform-philosophy)
2. [Business Goals](#2-business-goals)
3. [Target Audiences](#3-target-audiences)
4. [Information Architecture](#4-information-architecture)
5. [User Journeys](#5-user-journeys)
6. [Navigation Philosophy](#6-navigation-philosophy)
7. [Component Strategy](#7-component-strategy)
8. [SEO Philosophy](#8-seo-philosophy)
9. [Conversion Strategy](#9-conversion-strategy)
10. [Technical Architecture](#10-technical-architecture)
11. [Future Platform Features](#11-future-platform-features)
12. [Phased Rollout](#12-phased-rollout)
13. [Platform Standards & Honesty Rules](#13-platform-standards--honesty-rules)
14. [Acceptance Criteria for New Teams](#14-acceptance-criteria-for-new-teams)

---

## 1. Platform Philosophy

The Khan Industries Digital Platform exists to make the company **understandable, trustworthy, and actionable** in under sixty seconds — and to deepen that relationship over years.

**Five platform convictions:**

1. **Trust through clarity.** Every page explains what Khan Industries does, who it serves, and how to take the next step — without hype, fake urgency, or inflated claims.
2. **Show, then tell.** Products, agents, and portfolio work are demonstrated with real interfaces, honest status labels (Concept, Beta, Launched), and accurate descriptions.
3. **One ecosystem.** Public marketing, client portals, developer docs, and future marketplaces share design language (`01_BRAND.md`), navigation patterns, and engineering standards (`05_ENGINEERING.md`).
4. **Built to scale.** Information architecture and routing are designed today so authentication, billing, and multi-product surfaces can attach without restructuring the entire site.
5. **Premium by default.** Dark-first, spacious, fast, accessible — the platform itself is proof of execution quality.

**Relationship to other KOS documents:**

| Document | Platform role |
| --- | --- |
| `01_BRAND.md` | Visual identity, voice, motion, UX principles |
| `02_PRODUCTS.md` | What appears under Products, Portfolio, future Marketplace |
| `03_SERVICES.md` | What appears under Solutions, Contact, proposals |
| `05_ENGINEERING.md` | How the platform is built |
| `06_AI_AGENTS.md` | Standards for agent demos and marketplace agents |
| `07_SALES.md` | Consultation and conversion flows |

---

## 2. Business Goals

The digital platform must directly support these business outcomes:

| Goal | Platform expression |
| --- | --- |
| **Build trust** | Honest About page, clear services and product status, premium design, no fake social proof |
| **Demonstrate expertise** | Insights content, Portfolio, product demos, Developer Center (future) |
| **Showcase products** | Products hub with accurate lifecycle labels per `02_PRODUCTS.md` |
| **Generate consultations** | Clear CTAs, Contact and booking flows, Solutions tied to outcomes |
| **Convert visitors into long-term clients** | Funnel from discovery → consultation → proposal → client surfaces |
| **Support existing clients** | Client Portal, support paths, project visibility (future) |
| **Central hub for every product and service** | Unified navigation to all offerings, accounts, and documentation |

**Primary conversion funnel** (aligned with `AGENTS.md`):

```
Portfolio / Products / Solutions (discovery)
    ↓
Consultation (intent)
    ↓
Proposal (commitment)
    ↓
Client (delivery)
    ↓
Long-term partnership (retainer, products, expansion)
```

Every major page should answer: *Which stage of this funnel does this page serve, and what is the single best next action?*

---

## 3. Target Audiences

Each audience has distinct goals. The platform provides tailored entry points and journeys — not one generic homepage for everyone.

### 3.1 Small Business Owners

| Field | Detail |
| --- | --- |
| **Goals** | Understand if Khan Industries can solve their problem; see affordable entry (Starter tier); book a consultation without intimidation |
| **Ideal entry** | Home, Solutions, Industries (if relevant), Contact |
| **Ideal journey** | Home → Solutions (e.g., AI Chatbots, Website Development) → Products (concept demos) → Book consultation |
| **Content tone** | Clear outcomes, plain language, no enterprise jargon |

### 3.2 Startups

| Field | Detail |
| --- | --- |
| **Goals** | Move fast; find technical partner for MVP, automation, or AI; evaluate product vs. custom build |
| **Ideal entry** | Products, Solutions, Insights |
| **Ideal journey** | Products → compare agent/SaaS concepts → Solutions (API, Cloud, AI Consulting) → Consultation |
| **Content tone** | Speed and pragmatism; honest about stage of company and products |

### 3.3 Enterprise Companies

| Field | Detail |
| --- | --- |
| **Goals** | Assess reliability, security posture, and partnership depth; find Enterprise engagement path |
| **Ideal entry** | About, Solutions, Industries, Contact |
| **Ideal journey** | About → Solutions (Enterprise scope) → Industries → Request consultation / RFP path |
| **Content tone** | Professional, structured, process-transparent; no unverifiable enterprise claims |

### 3.4 Existing Clients

| Field | Detail |
| --- | --- |
| **Goals** | Access projects, support, billing, documentation; expand engagement |
| **Ideal entry** | Client Portal (future), Contact, Support |
| **Ideal journey** | Login → Dashboard / project status → Support or account manager → Additional services |
| **Content tone** | Operational, helpful, account-focused |

### 3.5 Future Employees

| Field | Detail |
| --- | --- |
| **Goals** | Understand mission, culture, and open roles; assess company credibility |
| **Ideal entry** | About, Careers, Insights |
| **Ideal journey** | About → Careers → Apply; optional Insights for technical culture signal |
| **Content tone** | Honest about early-stage reality and ambition; no fake team size or perks |

### 3.6 Investors

| Field | Detail |
| --- | --- |
| **Goals** | Understand vision, product strategy, and traction honestly; evaluate founder and direction |
| **Ideal entry** | About, Products, Insights (strategy posts when available) |
| **Ideal journey** | About → Products (roadmap-linked concepts) → Contact (dedicated path if added) |
| **Content tone** | Factual, strategic; no invented metrics or funding history |

### 3.7 Developers

| Field | Detail |
| --- | --- |
| **Goals** | API docs, SDKs, integration patterns, agent standards |
| **Ideal entry** | Developer Center (future), Products, Insights |
| **Ideal journey** | Developer Center → API reference → Authentication docs → Sandbox (future) |
| **Content tone** | Precise, technical, documentation-first |

### 3.8 Technology Partners

| Field | Detail |
| --- | --- |
| **Goals** | Explore integration, reseller, or co-delivery models |
| **Ideal entry** | Partner Portal (future), Solutions, Contact |
| **Ideal journey** | Solutions overview → Partner program page → Partner inquiry |
| **Content tone** | Professional; no fake partner logos or announcements |

---

## 4. Information Architecture

The platform is organized into **public surfaces**, **authenticated surfaces**, and **future surfaces**. Each area has a single primary purpose.

### 4.1 Public Marketing & Discovery

#### Home

**Purpose:** Orient every visitor in seconds — who Khan Industries is, what problems it solves, and the three best next steps (explore products, view solutions, book consultation).

**Required elements (when built):** Value proposition, primary CTA, secondary paths to Products and Solutions, trust signals that are real only (e.g., product demos, founder credibility — not fake logos).

---

#### Solutions

**Purpose:** Present **services** (`03_SERVICES.md`) organized by outcome and category — how Khan Industries helps clients through custom engagements.

**Structure:** Group by Intelligent Systems, Digital Presence, Business Operations, Platform & Integration; link each to detail pages with purpose, ideal customer, and consultation CTA.

**Not:** A duplicate of Products. Solutions are custom and hands-on; Products are scalable software.

---

#### Products

**Purpose:** Showcase **products** (`02_PRODUCTS.md`) with honest status (Concept, Planned, In Development, Beta, Launched).

**Structure:** Product index → individual product pages (problem, outcome, status, demo or waitlist, link to consultation for early access or custom deployment).

**Rule:** No product page implies Launched unless `02_PRODUCTS.md` and implementation confirm it.

---

#### Portfolio

**Purpose:** Demonstrate **execution quality** through real work — shipped products, client projects (with permission), internal demos, and open-source contributions when applicable.

**Structure:** Filterable grid (product work, websites, agents, automation); case study depth only when authentic.

**Rule:** Empty or sparse portfolio is acceptable early-stage; placeholder fake projects are not.

---

#### Industries

**Purpose:** Vertical entry points aligning with product concepts (restaurant, construction, real estate) and future industry bundles from `03_SERVICES.md`.

**Structure:** Industry landing pages → relevant products + services + consultation CTA.

**Rule:** Industry pages may describe capability without claiming undisclosed client counts.

---

#### Insights

**Purpose:** Blog and thought leadership — technical articles, product updates, company news, and educational content that demonstrates expertise and supports SEO.

**Structure:** Index → article pages with author, date, categories; newsletter signup optional.

**Rule:** Publish when there is real content; do not fill with AI slop or empty categories.

---

#### About

**Purpose:** Company mission, vision, values (`00_COMPANY.md`), founder story (factual), honesty about early-stage status, and long-term direction.

**Structure:** Mission/vision, values, what we are / what we are not, team as it exists (no invented employees).

---

#### Careers

**Purpose:** Attract future employees with honest role descriptions and application flow.

**Structure:** Open roles (when they exist), culture aligned with brand, application form or email path.

**Rule:** List only real openings; remove stale posts promptly.

---

#### Contact

**Purpose:** Primary **consultation and inquiry** entry — forms, booking integration (future), and clear response expectations.

**Structure:** Consultation request, general inquiry, optional paths (sales, support, careers, partners).

---

### 4.2 Authenticated & Role-Based Surfaces (Future)

#### Client Portal

**Purpose:** Logged-in space for clients — project status, deliverables, messages, invoices (future), support tickets.

**Audience:** Existing clients post-proposal.

**Phase:** Medium term; requires authentication and `07_SALES.md` onboarding alignment.

---

#### Developer Center

**Purpose:** API documentation, integration guides, authentication, changelogs, and SDK references for developers building on Khan Industries products.

**Audience:** Developers, technical partners.

**Phase:** Medium term; grows with shipped APIs and products.

---

#### Future AI Marketplace

**Purpose:** Discover, trial, and subscribe to Khan Industries AI agents (`02_PRODUCTS.md`, `06_AI_AGENTS.md`).

**Audience:** Small business through enterprise buyers of agent products.

**Phase:** Medium to long term; depends on first launched agents.

---

#### Future Dashboard

**Purpose:** Unified logged-in experience for product users — agent configuration, usage, billing, notifications.

**Audience:** Product subscribers and trial users.

**Phase:** Tied to first SaaS/agent launches.

---

#### Future Admin Portal

**Purpose:** Internal Khan Industries operations — content, leads, CRM, product admin, support queue.

**Audience:** Founder and future internal team only.

**Phase:** Medium term; not public.

---

#### Future Partner Portal

**Purpose:** Partner onboarding, deal registration, co-marketing assets, integration status.

**Audience:** Technology partners.

**Phase:** Long term; only when partner program exists.

---

### 4.3 Information Architecture Map

```
khanindustries.com (conceptual root)
├── Public
│   ├── Home
│   ├── Solutions/*
│   ├── Products/*
│   ├── Portfolio/*
│   ├── Industries/*
│   ├── Insights/*
│   ├── About
│   ├── Careers
│   └── Contact
├── App (authenticated — future)
│   ├── Client Portal/*
│   ├── Dashboard/*
│   ├── Marketplace/*
│   └── Partner Portal/*
├── Developers (future)
│   └── Developer Center/*
└── Admin (internal — future)
    └── Admin Portal/*
```

**URL principles:**

- Human-readable paths: `/products/supportflow-ai`, `/solutions/ai-agent-development`
- Stable URLs; redirects on rename, never silent 404s for marketed links
- Locale: English first; i18n architecture considered for long term

---

## 5. User Journeys

### 5.1 Primary Commercial Journey

```
Visitor
    ↓
Lead (identified interest — form, demo, newsletter, product waitlist)
    ↓
Consultation (scheduled or requested conversation)
    ↓
Proposal (scoped engagement per 03_SERVICES.md)
    ↓
Client (active delivery; portal access when available)
    ↓
Long-Term Partnership (retainer, product subscriptions, expansion projects)
```

| Stage | Platform touchpoints | Success signal |
| --- | --- | --- |
| **Visitor** | Home, SEO landing pages, Insights | Understands offer; does not bounce confused |
| **Lead** | Contact form, product interest, newsletter | Contact captured with context (service/product of interest) |
| **Consultation** | Booking confirmation, calendar, prep email | Meeting held; fit assessed |
| **Proposal** | Email/PDF proposal; optional private proposal link (future) | Scope accepted |
| **Client** | Client Portal, email, support channel | Delivery in progress; satisfaction |
| **Long-term partnership** | Portal, product dashboard, account reviews | Renewal, expansion, referral |

---

### 5.2 Existing Client Journey

```
Login (Client Portal — future)
    ↓
Dashboard (projects, deliverables, status)
    ↓
Support or message (question, change request)
    ↓
Expansion (new service, product add-on, retainer)
```

**Principles:** Clients never hunt for status; support path is obvious; upsell surfaces only when relevant to their account.

---

### 5.3 Developer Journey

```
Developer Center landing
    ↓
Product/API selection
    ↓
Documentation (auth, endpoints, examples)
    ↓
API keys / sandbox (future)
    ↓
Build integration
    ↓
Production + support channel
```

**Principles:** Docs are accurate; versioned; examples run; no undocumented breaking changes.

---

### 5.4 Partner Journey

```
Partner program overview (future public page)
    ↓
Partner inquiry / application
    ↓
Onboarding (Partner Portal — future)
    ↓
Co-sell or integration
    ↓
Ongoing partner dashboard
```

**Principles:** No partner logos or claims until agreements exist.

---

### 5.5 Future Employee Journey

```
Careers listing
    ↓
Role detail
    ↓
Application
    ↓
About / Insights (optional research)
```

**Principles:** Honest job descriptions; timely updates when roles close.

---

## 6. Navigation Philosophy

Navigation must stay **calm, predictable, and shallow** — maximum three clicks to any primary destination.

### 6.1 Primary Navigation (Header)

**Desktop — target structure:**

| Item | Type | Notes |
| --- | --- | --- |
| **Solutions** | Mega-menu or dropdown | Service categories from `03_SERVICES.md` |
| **Products** | Dropdown or hub | Product list with status badges |
| **Industries** | Dropdown | Vertical entry points |
| **Insights** | Link | Blog index |
| **About** | Link | Company foundation |
| **Contact** | CTA button | Visually distinct; primary conversion |

**Home** via logo click only (not duplicated as nav label unless mobile requires it).

**Not in primary nav until real:** Marketplace, Client Portal, Developer Center (may move to footer first, then header when mature).

---

### 6.2 Secondary Navigation

- **Contextual sub-nav** within section (e.g., Solutions → AI Agents, Websites, Automation)
- **Breadcrumbs** on deep pages (Products → SupportFlow AI)
- **In-page table of contents** for long Insights articles and docs
- **Sticky CTA** on product and solution pages: "Book a consultation"

---

### 6.3 Footer Navigation

Footer carries **complete site map** and **utility links**:

| Column | Links |
| --- | --- |
| **Company** | About, Careers, Contact, Insights |
| **Solutions** | Top service pages |
| **Products** | Top product pages |
| **Legal** | Privacy, Terms (when published) |
| **Future** | Developer Center, Client Portal (labeled when live) |

Include: copyright, social links (only active accounts), newsletter if Insights is active.

---

### 6.4 Search Strategy

| Phase | Approach |
| --- | --- |
| **Phase 1** | No global search; clear IA and footer sitemap sufficient |
| **Phase 2** | Client-side search over marketing pages (Solutions, Products, Insights) |
| **Phase 3** | Unified search including docs, marketplace, knowledge base |

Search results must respect honesty rules — no promoted fake case studies.

---

### 6.5 Mobile Navigation

- **Hamburger or bottom sheet** with full primary tree
- **Contact CTA** visible without opening menu (header button)
- **Touch targets** minimum 44px; no hover-only critical actions
- **Same URLs** as desktop; no reduced mobile content for SEO-critical pages

---

### 6.6 Accessibility

- Keyboard navigable header, menu, and modals
- Focus traps in mobile menu
- Skip to main content link
- WCAG 2.1 AA per `01_BRAND.md`
- `prefers-reduced-motion` honored for animations

---

### 6.7 Future Expansion

Navigation is **data-driven** where possible — nav items generated from CMS or config so new products/services do not require hard-coded header rewrites.

Reserved header zones:

- **Account** menu (login → Dashboard / Portal)
- **Notifications** bell (authenticated users)
- **Marketplace** entry when live

---

## 7. Component Strategy

All UI is built from **reusable components** — small, typed, documented. No one-off page-specific blobs that cannot be reused.

Components live under a consistent folder structure (defined in `05_ENGINEERING.md`); this section defines **what** must exist.

### 7.1 Layout Components

| Component | Purpose |
| --- | --- |
| **PageLayout** | Standard page shell: header, main, footer |
| **Section** | Vertical rhythm block with consistent padding and max-width |
| **Container** | Max-width wrapper aligned to grid |
| **Grid** | Responsive column layouts |

### 7.2 Marketing Components

| Component | Purpose | Notes |
| --- | --- | --- |
| **Hero** | Page headline, subcopy, primary/secondary CTA | One clear action per hero |
| **SectionHeader** | Eyebrow, title, description for content blocks | |
| **Card** | Generic content container | Base for specialization |
| **ProductCard** | Product name, status badge, outcome, link | Status from `02_PRODUCTS.md` |
| **ServiceCard** | Service name, category, outcome, consultation link | From `03_SERVICES.md` |
| **IndustryCard** | Vertical name, related products/services | |
| **PortfolioCard** | Project thumbnail, title, tags, link | Real work only |
| **BlogCard** | Insights article preview | Title, excerpt, date, author |
| **CallToAction** | Conversion block — consultation, product waitlist | No fake urgency |
| **FAQ** | Accordion Q&A | Factual answers only |
| **Timeline** | Company milestones, project phases | Real dates only |
| **Statistics** | Metric display | **Real data only** — hide section if no verified metrics |
| **Testimonial** | Client quote | **Real clients with permission only** — component unused until then |
| **CaseStudy** | Deep project narrative | Authentic engagements only |
| **PricingTable** | Starter / Growth / Enterprise tiers | Philosophy from `01_BRAND.md`; no fake discounts |
| **Newsletter** | Email capture for Insights | Clear value proposition |

### 7.3 Interactive Components

| Component | Purpose |
| --- | --- |
| **Button** | Primary, secondary, ghost, link variants |
| **Link** | Internal/external with consistent styling |
| **Form** | Base form with validation, accessibility, error states |
| **ContactForm** | Consultation request with service/product interest fields |
| **Input, Textarea, Select** | Form primitives |
| **Modal** | Dialogs for video demos, legal, confirmations |
| **Badge** | Product status (Concept, Beta, Launched), tags |

### 7.4 Component Rules

1. **Composable.** ProductCard extends Card; does not fork unrelated markup.
2. **Brand-aligned.** Tokens from `01_BRAND.md` — Deep Navy, Slate, spacing, typography.
3. **Accessible.** Labels, roles, focus states on all interactive components.
4. **Documented.** Storybook or equivalent catalog (future) for every public component.
5. **Server-first.** Prefer React Server Components for static marketing content; client components only for interactivity.

---

## 8. SEO Philosophy

SEO is a **quality and discoverability** discipline, not keyword stuffing.

### 8.1 Performance

- Target **Core Web Vitals** in green for marketing pages
- Next.js 16 App Router with static generation where possible
- Minimal client JavaScript on content pages
- Font subsetting and `next/image` for all imagery

### 8.2 Metadata

Every public page exports:

- Unique `<title>` — format: `Page Title | Khan Industries`
- Meta description (human-written, accurate, under ~160 characters)
- Open Graph and Twitter card tags
- Canonical URL

### 8.3 Structured Data

Use JSON-LD where truthful:

- `Organization` on About/Home
- `WebSite` with `SearchAction` when search ships
- `Article` on Insights posts
- `Product` only for launched products with real offers
- No `Review` or `AggregateRating` without verified reviews

### 8.4 Accessibility & Semantic HTML

- One `<h1>` per page; logical heading hierarchy
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`
- Alt text on all meaningful images; decorative images empty alt
- Accessible forms and link text (no "click here")

### 8.5 Page Speed

- Lazy-load below-fold media
- Compress images (WebP/AVIF)
- Avoid render-blocking third-party scripts
- Monitor with Lighthouse in CI (future)

### 8.6 Image Optimization

- Consistent aspect ratios per component
- No oversized hero assets
- SVG for icons and simple illustrations aligned with brand geometry

### 8.7 Internal Linking

- Every product page links to related Solutions and consultation
- Insights articles link to relevant Products/Solutions
- Footer and contextual links reinforce hub pages (Products, Solutions)
- No orphan pages in sitemap

### 8.8 Content Strategy

- Publish Insights on real expertise — AI, automation, product building
- Update product pages when status changes in `02_PRODUCTS.md`
- Sitemap.xml and robots.txt maintained automatically
- No doorway pages or thin affiliate content

---

## 9. Conversion Strategy

Conversion means **earning the next step in the relationship** — not manipulating clicks.

### 9.1 Priority Conversion Paths

| Priority | Path | When to use |
| --- | --- | --- |
| **1** | Portfolio | When demonstrating execution builds confidence |
| **2** | Products | When visitor seeks scalable software or agents |
| **3** | Consultation | When visitor needs custom work or guidance |
| **4** | Client relationship** | When existing client should expand or subscribe |

### 9.2 CTA Hierarchy

- **Primary:** Book a consultation / Request consultation
- **Secondary:** Explore products / View solutions
- **Tertiary:** Read Insights / Join newsletter

One primary CTA per page section; never three competing primary buttons.

### 9.3 Trust-First Conversion

- Explain what happens after form submit (response time, no spam)
- Show product **status honestly** — Concept pages invite waitlist or consultation, not fake "Buy now"
- Use **PricingTable** for tier philosophy, not pressure tactics
- **No** countdown timers, fake scarcity, or pop-up assault

### 9.4 Measurement (Future)

Track events ethically with consent where required:

- Consultation form submit
- Product page depth / demo interaction
- Insights → Contact path
- Portal login and expansion actions

No dark patterns in analytics or cookie banners.

---

## 10. Technical Architecture

Implementation standards align with `AGENTS.md` and `05_ENGINEERING.md` (when published).

### 10.1 Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Components | React Server Components by default |
| Hosting | Vercel or equivalent (CI/CD per `05_ENGINEERING.md`) |

### 10.2 Route Structure (Target)

```
src/app/
├── (marketing)/          # Public layout group
│   ├── page.tsx          # Home
│   ├── solutions/[slug]/
│   ├── products/[slug]/
│   ├── portfolio/[slug]/
│   ├── industries/[slug]/
│   ├── insights/[slug]/
│   ├── about/
│   ├── careers/
│   └── contact/
├── (app)/                # Authenticated — future
│   ├── dashboard/
│   ├── portal/
│   └── marketplace/
├── developers/           # Developer Center — future
└── api/                  # Route handlers, webhooks
```

### 10.3 Content Strategy

| Content type | Source (phased) |
| --- | --- |
| Marketing copy | MDX or CMS; synced with KOS truths |
| Product metadata | Derived from `02_PRODUCTS.md` or structured config |
| Service metadata | Derived from `03_SERVICES.md` or structured config |
| Insights | MDX or headless CMS |
| Legal | Static pages |

### 10.4 Cross-Cutting Concerns

- **Authentication:** Add when Client Portal/Dashboard ship; isolate auth routes
- **Internationalization:** Plan route structure; implement when needed
- **Analytics:** Privacy-respecting, consent-aware
- **Error pages:** Custom 404/500 on-brand, helpful links home

---

## 11. Future Platform Features

Documented capabilities to build toward — **not live today**.

| Feature | Purpose | Depends on |
| --- | --- | --- |
| **AI Marketplace** | Browse, subscribe, configure agents | Launched agents, billing, auth |
| **Customer Dashboard** | Usage, settings, billing for product users | Product launches |
| **Project Tracking** | Client-visible milestones and deliverables | Client Portal, CRM |
| **Client Portal** | Secure client hub | Auth, `07_SALES.md` workflows |
| **Knowledge Base** | Self-serve support articles | Support volume, content |
| **Documentation** | Product and API docs | Developer Center |
| **Learning Center** | Courses, tutorials, certifications (if ever offered honestly) | Content strategy |
| **Developer APIs** | Public APIs with keys and rate limits | API products shipped |
| **Authentication** | SSO, sessions, roles | Any authenticated surface |
| **Billing** | Subscriptions, invoices | Stripe or equivalent |
| **Notifications** | Email and in-app alerts | User accounts |
| **Support Center** | Tickets, chat, status page | Client base |

Each feature gets a PRD in `09_PRD.md` before build; this section prevents architectural surprise.

---

## 12. Phased Rollout

A brand-new team should build in this order:

### Phase 1 — Foundation (Now)

- [ ] Design tokens and core components (Section 7)
- [ ] Marketing layout: Home, About, Contact
- [ ] Solutions hub + top service pages
- [ ] Products hub + product pages (Concept status honest)
- [ ] SEO baseline, sitemap, metadata
- [ ] Consultation form wired to email or CRM stub

### Phase 2 — Credibility

- [ ] Portfolio (as real work exists)
- [ ] Industries pages
- [ ] Insights (first real articles)
- [ ] Careers (when hiring)
- [ ] Legal pages

### Phase 3 — Growth

- [ ] Booking integration for consultations
- [ ] Newsletter, lead nurturing hooks
- [ ] Search (Phase 2 strategy)
- [ ] Product waitlist / beta signup flows

### Phase 4 — Platform

- [ ] Authentication
- [ ] Client Portal
- [ ] Customer Dashboard
- [ ] Billing

### Phase 5 — Ecosystem

- [ ] AI Marketplace
- [ ] Developer Center + APIs
- [ ] Partner Portal
- [ ] Admin Portal
- [ ] Knowledge Base + Support Center

---

## 13. Platform Standards & Honesty Rules

Non-negotiable rules for all digital surfaces:

### Never

- Fake clients, logos, testimonials, or case studies
- Fake statistics, user counts, or revenue figures
- Fake partnerships or press mentions
- Imply products are Launched when status is Concept or Beta
- Manipulative conversion patterns (dark patterns, fake urgency)
- Generic template appearance that violates `01_BRAND.md`

### Always

- Label product status visibly on product pages
- Keep Portfolio and Testimonials empty rather than fabricated
- Align copy with `01_BRAND.md` voice
- Meet accessibility and performance baselines
- Update platform when KOS documents change materially

---

## 14. Acceptance Criteria for New Teams

A new engineering and design team can start building without ambiguity if they can answer **yes** to the following:

| Question | Answer source |
| --- | --- |
| What pages must exist? | Section 4 (Information Architecture) + Phase 1 in Section 12 |
| Who are we building for? | Section 3 (Target Audiences) |
| What is the primary funnel? | Sections 2, 5, 9 |
| How should navigation work? | Section 6 |
| What components are required? | Section 7 |
| What are SEO and performance rules? | Section 8 |
| What tech stack? | Section 10 + `AGENTS.md` |
| What is future vs. now? | Sections 4.2, 11, 12 |
| What must we never fake? | Section 13 |
| How do products and services differ on the site? | Solutions = `03_SERVICES.md`, Products = `02_PRODUCTS.md` |

**Definition of done for Phase 1:** A visitor can land on Home, understand Khan Industries, browse Solutions and Products with honest status, read About, and submit a consultation request — on a fast, accessible, on-brand site.

---

## Ten-Year Scalability

The platform scales across a decade by **separating concerns early**:

1. **Marketing shell** remains stable while apps grow underneath `(marketing)` vs `(app)` route groups.
2. **Config-driven nav and product/service catalogs** avoid rewrite when the portfolio grows from 10 concepts to 100+ offerings.
3. **Authenticated surfaces** attach without replacing public URLs — clients bookmark portal.khanindustries.com or `/portal` consistently.
4. **Developer and marketplace modules** plug into the same design system and auth — not separate brands.
5. **Content and commerce** split — Insights and docs scale on CMS; billing scales on payment provider.
6. **Honesty scale** — status badges and portfolio rules prevent marketing debt as the company grows.

The information architecture in Section 4 is intentionally **broad at the root, deep in branches** so new industries, products, and regions add leaves — not trunks.

---

*This Digital Platform Strategy is part of the Khan Industries Operating System (KOS). For brand see `01_BRAND.md`; for products see `02_PRODUCTS.md`; for services see `03_SERVICES.md`; for engineering implementation see `05_ENGINEERING.md`; for sales flows see `07_SALES.md`; for roadmap timing see `08_ROADMAP.md`.*

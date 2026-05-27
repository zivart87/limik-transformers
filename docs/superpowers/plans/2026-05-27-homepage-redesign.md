# LIMIK Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Переработать index.html — убрать все упоминания строительства завода и заменить на позиционирование действующего U.S.-производителя трансформаторов, принимающего заявки на КП.

**Architecture:** Один файл index.html со встроенными CSS и HTML. Новые секции добавляют новые CSS-классы внутри тега `<style>`. Все изменения строго в index.html — никаких внешних файлов не создаём.

**Tech Stack:** HTML5, CSS3, vanilla JS (уже есть в файле)

**Spec:** `docs/superpowers/specs/2026-05-27-homepage-redesign-design.md`

---

## File Map

| Файл | Действие | Что меняем |
|------|----------|------------|
| `index.html` | Modify | CSS: добавить стили для nav-top-strip, nav-dropdown, partners, why-cols, why-stats, how-steps |
| `index.html` | Modify | HTML: NAV — двухуровневый с top strip и dropdown |
| `index.html` | Modify | HTML: HERO — тексты, кнопки, бейджи |
| `index.html` | Modify | HTML: добавить секцию PARTNERS после Trust Bar |
| `index.html` | Modify | HTML: заменить Pain Point секцию на WHY LIMIK |
| `index.html` | Modify | HTML: Transformers — убрать теги, обновить subtitle |
| `index.html` | Modify | HTML: Industries — убрать теги и border на Defense |
| `index.html` | Modify | HTML: заменить Timeline на HOW TO GET A QUOTE |
| `index.html` | Modify | HTML: CTA Band — обновить тексты |
| `index.html` | Modify | HTML: Footer — убрать Roadmap, обновить описание и ссылки |

---

## Task 1: CSS — Nav top strip и dropdown

**Files:**
- Modify: `index.html` — добавить CSS в секцию `<style>` после блока `/* ── RESPONSIVE ── */` перед `</style>`

- [ ] **Step 1: Открыть index.html и найти строку `</style>` (строка ~496)**

- [ ] **Step 2: Добавить CSS для top strip и dropdown ПЕРЕД `</style>`**

```css
    /* ─────────────────────────────────
       NAV TOP STRIP
    ───────────────────────────────── */
    .nav-top-strip {
      background: var(--off-white);
      border-bottom: 1px solid var(--border-l);
    }
    .nav-top-inner {
      max-width: 1360px; margin: 0 auto; padding: 0 40px;
      display: flex; justify-content: flex-end;
    }
    .nav-top-inner a {
      font-size: 11px; font-weight: 500;
      color: var(--text-2); padding: 8px 14px;
      letter-spacing: 0.05em; transition: color 0.15s;
    }
    .nav-top-inner a:hover { color: var(--navy-dark); }
    @media (max-width: 768px) { .nav-top-strip { display: none; } }

    /* ─────────────────────────────────
       NAV DROPDOWN
    ───────────────────────────────── */
    .nav-dropdown { position: relative; display: flex; align-items: center; }
    .nav-dropdown-menu {
      display: none;
      position: absolute; top: calc(100% + 12px); left: 0;
      background: var(--white);
      border: 1px solid var(--border-l);
      box-shadow: 0 8px 24px rgba(9,25,59,0.12);
      min-width: 230px; z-index: 200; padding: 8px 0;
    }
    .nav-dropdown:hover .nav-dropdown-menu { display: block; }
    .nav-dropdown-menu a {
      display: block; font-size: 14px; color: var(--navy-dark);
      padding: 10px 20px; font-weight: 500;
      transition: background 0.15s, color 0.15s;
    }
    .nav-dropdown-menu a:hover { background: var(--off-white); color: var(--blue); }

    /* ─────────────────────────────────
       PARTNERS
    ───────────────────────────────── */
    .partners { padding: 48px 0; }
    .partners-title {
      text-align: center; font-size: 11px; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--text-2); margin-bottom: 28px;
    }
    .partners-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      border: 1px solid var(--border-l);
    }
    .partner-item {
      padding: 32px 24px;
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; font-weight: 800;
      color: #7090B0; border-right: 1px solid var(--border-l);
      text-align: center; letter-spacing: 0.02em;
    }
    .partner-item:last-child { border-right: none; }
    @media (max-width: 768px) {
      .partners-grid { grid-template-columns: 1fr 1fr; }
      .partner-item:nth-child(2) { border-right: none; }
      .partner-item:nth-child(3) { border-right: 1px solid var(--border-l); }
    }

    /* ─────────────────────────────────
       WHY LIMIK
    ───────────────────────────────── */
    .why-cols {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 16px; margin-bottom: 16px;
    }
    .why-col {
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--border-d);
      padding: 32px 28px;
    }
    .why-col h3 {
      font-size: 20px; font-weight: 800;
      color: var(--white); margin: 16px 0 12px;
    }
    .why-col p { font-size: 15px; color: var(--text-1); line-height: 1.7; }
    .why-stats {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
    }
    .why-stat {
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--border-d);
      padding: 24px 20px;
    }
    .why-stat-num {
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 900; line-height: 1; margin-bottom: 8px;
      color: var(--gold);
    }
    .why-stat-label { font-size: 13px; color: var(--text-1); line-height: 1.4; }
    @media (max-width: 1024px) {
      .why-cols { grid-template-columns: 1fr; }
      .why-stats { grid-template-columns: 1fr 1fr; }
    }

    /* ─────────────────────────────────
       HOW TO GET A QUOTE
    ───────────────────────────────── */
    .how-steps {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 32px; position: relative; margin-top: 56px;
    }
    .how-steps::before {
      content: '';
      position: absolute; top: 27px; left: 28px; right: 28px;
      height: 2px; background: var(--border-l); z-index: 0;
    }
    .how-step { position: relative; z-index: 1; padding: 0 16px; }
    .how-step-num {
      width: 56px; height: 56px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 800; letter-spacing: 0.06em;
      background: var(--navy-dark); color: var(--white);
      margin-bottom: 24px;
    }
    .how-step h3 {
      font-size: 17px; font-weight: 800;
      color: var(--navy-dark); margin-bottom: 10px;
    }
    .how-step p { font-size: 14px; color: #3A5570; line-height: 1.6; }
    @media (max-width: 768px) {
      .how-steps { grid-template-columns: 1fr; gap: 24px; }
      .how-steps::before { display: none; }
    }
```

- [ ] **Step 3: Также найти и изменить `.nav { height: 104px; }` — убрать `height: 104px`**

Найти в CSS (строка ~163):
```css
    .nav {
      position: sticky; top: 0; z-index: 100;
      background: var(--white);
      border-bottom: 1px solid var(--border-l);
      height: 104px;
    }
```

Заменить на:
```css
    .nav {
      position: sticky; top: 0; z-index: 100;
      background: var(--white);
      border-bottom: 1px solid var(--border-l);
    }
```

- [ ] **Step 4: Обновить высоту hero — найти `.hero { min-height: calc(100vh - 104px) }` и изменить на `calc(100vh - 136px)`**

```css
    .hero {
      position: relative;
      min-height: calc(100vh - 136px);
      display: flex; align-items: center;
      overflow: hidden;
      background: var(--navy-dark);
    }
```

- [ ] **Step 5: Открыть index.html в браузере и проверить что страница не сломалась**

- [ ] **Step 6: Commit**

```
git add index.html
git commit -m "style: добавить CSS для nav-top-strip, dropdown, partners, why-limik, how-to-quote"
```

---

## Task 2: HTML — Двухуровневый Nav с dropdown

**Files:**
- Modify: `index.html` — заменить весь блок `<nav>...</nav>`

- [ ] **Step 1: Найти блок `<nav class="nav">` (строка ~503) и заменить его целиком**

Найти (весь nav от `<nav class="nav">` до `</nav>`):
```html
<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <img src="assets/images/logo.svg" alt="LIMIK International">
      <span class="nav-logo-name">LIMIK</span>
    </a>
    <div class="nav-links">
      <a href="about/">About</a>
      <a href="about/team/">Team</a>
      <a href="products/">Products</a>
      <a href="industries/">Industries</a>
      <a href="roadmap/">Roadmap</a>
      <a href="contact/">Contact</a>
      <a href="register-interest/" class="nav-cta">Register Interest</a>
    </div>
    <div class="nav-burger" id="nav-burger">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="nav-mobile" id="nav-mobile">
    <a href="about/">About</a>
    <a href="about/team/">Team</a>
    <a href="products/">Products</a>
    <a href="industries/">Industries</a>
    <a href="roadmap/">Roadmap</a>
    <a href="contact/">Contact</a>
    <a href="register-interest/">Register Interest</a>
  </div>
</nav>
```

Заменить на:
```html
<nav class="nav">
  <!-- Верхняя полоска — вторичные ссылки -->
  <div class="nav-top-strip">
    <div class="nav-top-inner">
      <a href="company/">Company</a>
      <a href="careers/">Careers</a>
      <a href="news/">News</a>
      <a href="contact/">Contact</a>
    </div>
  </div>
  <!-- Главная плашка — для инженеров -->
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <img src="assets/images/logo.svg" alt="LIMIK International">
      <span class="nav-logo-name">LIMIK</span>
    </a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <a href="transformers/" class="nav-dropdown-trigger">Transformers ▾</a>
        <div class="nav-dropdown-menu">
          <a href="transformers/power/">Power Transformers</a>
          <a href="transformers/autotransformers/">Autotransformers</a>
          <a href="transformers/gsu/">Generator Step-Up (GSU)</a>
        </div>
      </div>
      <a href="industries/">Industries</a>
      <div class="nav-dropdown">
        <a href="support/" class="nav-dropdown-trigger">Support ▾</a>
        <div class="nav-dropdown-menu">
          <a href="support/documentation/">Technical Documentation</a>
          <a href="support/certifications/">Certifications</a>
          <a href="support/calculator/">kVA / Load Calculator</a>
          <a href="support/faq/">FAQ</a>
        </div>
      </div>
      <a href="request-quote/" class="nav-cta">Request a Quote</a>
    </div>
    <div class="nav-burger" id="nav-burger">
      <span></span><span></span><span></span>
    </div>
  </div>
  <!-- Мобильное меню -->
  <div class="nav-mobile" id="nav-mobile">
    <a href="transformers/">Transformers</a>
    <a href="transformers/power/" style="padding-left:20px;font-size:13px;color:#7090B0">Power Transformers</a>
    <a href="transformers/autotransformers/" style="padding-left:20px;font-size:13px;color:#7090B0">Autotransformers</a>
    <a href="transformers/gsu/" style="padding-left:20px;font-size:13px;color:#7090B0">Generator Step-Up (GSU)</a>
    <a href="industries/">Industries</a>
    <a href="support/">Support</a>
    <a href="company/">Company</a>
    <a href="contact/">Contact</a>
    <a href="request-quote/">Request a Quote</a>
  </div>
</nav>
```

- [ ] **Step 2: Открыть в браузере, проверить:**
  - Верхняя полоска отображается над основной навигацией
  - При наведении на «Transformers ▾» появляется dropdown с 3 пунктами
  - При наведении на «Support ▾» появляется dropdown с 4 пунктами
  - Мобильное меню (кнопка ☰) открывает список с вложенными пунктами

- [ ] **Step 3: Commit**

```
git add index.html
git commit -m "feat: двухуровневый nav с dropdown для Transformers и Support"
```

---

## Task 3: HTML — Hero section

**Files:**
- Modify: `index.html` — секция `<!-- 1. HERO -->`

- [ ] **Step 1: Найти и заменить подзаголовок hero**

Найти:
```html
      <p class="hero-sub">
        Custom-engineered transformers. Up to 600 MVA.<br>
        Built to carry the heaviest loads on earth.
      </p>
```

Заменить на:
```html
      <p class="hero-sub">
        Custom-engineered transformers. Up to 600 MVA.<br>
        U.S.-manufactured for utilities, defense, and data centers.
      </p>
```

- [ ] **Step 2: Найти и заменить кнопки hero**

Найти:
```html
      <div class="hero-actions">
        <a href="register-interest/" class="btn btn-gold btn-lg">Reserve Your Delivery Slot</a>
        <a href="roadmap/" class="btn btn-outline-white btn-lg">View Factory Roadmap</a>
      </div>
```

Заменить на:
```html
      <div class="hero-actions">
        <a href="request-quote/" class="btn btn-gold btn-lg">Request a Quote</a>
        <a href="transformers/" class="btn btn-outline-white btn-lg">View Transformers</a>
      </div>
```

- [ ] **Step 3: Найти и заменить бейджи hero**

Найти:
```html
      <div class="hero-badges">
        <div class="hero-badge"><div class="hero-badge-dot"></div>Qatar Investment Authority — $540M Backed</div>
        <div class="hero-badge"><div class="hero-badge-dot"></div>Section 303 Defense Production Act</div>
        <div class="hero-badge"><div class="hero-badge-dot"></div>U.S.-Owned &amp; Operated</div>
      </div>
```

Заменить на:
```html
      <div class="hero-badges">
        <div class="hero-badge"><div class="hero-badge-dot"></div>U.S.-Owned &amp; Operated</div>
        <div class="hero-badge"><div class="hero-badge-dot"></div>Section 303 Defense Production Act Eligible</div>
        <div class="hero-badge"><div class="hero-badge-dot"></div>IEEE C57 Certified</div>
      </div>
```

- [ ] **Step 4: Проверить в браузере — hero выглядит корректно, нет упоминаний завода или 2029**

- [ ] **Step 5: Commit**

```
git add index.html
git commit -m "feat: hero — обновить подзаголовок, кнопки и бейджи"
```

---

## Task 4: HTML — Добавить секцию Partners

**Files:**
- Modify: `index.html` — добавить новый блок после `<!-- 2. TRUST BAR -->` секции

- [ ] **Step 1: Найти конец Trust Bar секции**

Найти:
```html
</div>
</div>

<!-- ══════════════════════════════
   3. PAIN POINT  ← ТЁМНЫЙ
══════════════════════════════ -->
```

- [ ] **Step 2: Вставить секцию Partners между Trust Bar и Pain Point**

Вставить перед комментарием `<!-- 3. PAIN POINT`:
```html
<!-- ══════════════════════════════
   PARTNERS
══════════════════════════════ -->
<div class="partners bg-offwhite">
  <div class="container">
    <p class="partners-title">Trusted by America's Leading Manufacturers</p>
    <div class="partners-grid">
      <div class="partner-item">Mondelēz<br>International</div>
      <div class="partner-item">PepsiCo</div>
      <div class="partner-item">JDE Jacobs<br>Douwe Egberts</div>
      <div class="partner-item">Danone</div>
    </div>
  </div>
</div>

```

- [ ] **Step 3: Проверить в браузере — блок с 4 логотипами-текстами отображается между Trust Bar и следующей секцией**

- [ ] **Step 4: Commit**

```
git add index.html
git commit -m "feat: добавить секцию Partners с логотипами клиентов"
```

---

## Task 5: HTML — Заменить Pain Point на Why LIMIK

**Files:**
- Modify: `index.html` — заменить всю секцию `<!-- 3. PAIN POINT -->`

- [ ] **Step 1: Найти и заменить всю секцию Pain Point целиком**

Найти (всю секцию от комментария до закрывающего `</section>`):
```html
<!-- ══════════════════════════════
   3. PAIN POINT  ← ТЁМНЫЙ
══════════════════════════════ -->
<section class="section bg-dark">
  <div class="container">
    <div class="pain-inner">
      <div class="pain-left">
        <h2>Tired of<br>2–4 Year<br>Lead Times?</h2>
        <p>Over 80% of U.S. large power transformers come from foreign manufacturers. Utilities, data centers, and defense projects are stuck in backlogs that stretch years.</p>
        <p>LIMIK is the only new U.S.-owned large power transformer factory under active development — with a committed production window starting 2029.</p>
        <a href="register-interest/" class="btn btn-gold" style="margin-top:32px">Secure Your 2029 Slot</a>
      </div>
      <div class="pain-right">
        <div class="pain-card">
          <div class="pain-card-num" style="color:#F87171">2–4yr</div>
          <div class="pain-card-label">Current LPT lead time from foreign suppliers</div>
        </div>
        <div class="pain-card">
          <div class="pain-card-num" style="color:var(--gold)">$1B+</div>
          <div class="pain-card-label">Annual LPT demand in the U.S. grid</div>
        </div>
        <div class="pain-card">
          <div class="pain-card-num" style="color:var(--blue-lt)">2029</div>
          <div class="pain-card-label">First LIMIK transformer delivery</div>
        </div>
        <div class="pain-card">
          <div class="pain-card-num" style="color:#34D399">600<span style="font-size:20px">MVA</span></div>
          <div class="pain-card-label">Maximum transformer capacity</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

Заменить на:
```html
<!-- ══════════════════════════════
   WHY LIMIK  ← ТЁМНЫЙ
══════════════════════════════ -->
<section class="section bg-dark">
  <div class="container">
    <div class="sec-header bg-dark">
      <h2>American Power.<br>No Foreign Delays.</h2>
      <p>Over 80% of U.S. large power transformers come from abroad. LIMIK delivers from American soil.</p>
    </div>
    <div class="why-cols">
      <div class="why-col">
        <div class="icon-sq-lg"></div>
        <h3>U.S.-Manufactured</h3>
        <p>IRA-eligible. DOD and Section 303 Defense Production Act qualified. No foreign supply chain dependency. Proudly owned and operated in Spartanburg, SC.</p>
      </div>
      <div class="why-col">
        <div class="icon-sq-lg"></div>
        <h3>Domestic Supply</h3>
        <p>Over 80% of U.S. large power transformers come from abroad. LIMIK delivers from American soil — faster and with full engineering support.</p>
      </div>
    </div>
    <div class="why-stats">
      <div class="why-stat">
        <div class="why-stat-num">80%</div>
        <div class="why-stat-label">Foreign supply dependency in U.S.</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-num">$1B+</div>
        <div class="why-stat-label">Annual U.S. LPT demand</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-num">600<span style="font-size:20px">MVA</span></div>
        <div class="why-stat-label">Max capacity per unit</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-num">§303</div>
        <div class="why-stat-label">Defense Production Act Eligible</div>
      </div>
    </div>
    <div style="margin-top:40px;text-align:center">
      <a href="request-quote/" class="btn btn-gold">Request a Quote →</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере — нет упоминаний 2029, завода, «Secure Your Slot». Два столбца и 4 цифры отображаются корректно.**

- [ ] **Step 3: Commit**

```
git add index.html
git commit -m "feat: заменить Pain Point на Why LIMIK без упоминания завода"
```

---

## Task 6: HTML — Transformers: убрать теги, обновить стандарты

**Files:**
- Modify: `index.html` — секция `<!-- 4. PRODUCTS -->`

- [ ] **Step 1: Обновить подзаголовок секции**

Найти:
```html
      <p>Three core product lines. All built to IEEE C57 standards. DOE and DOD procurement qualified.</p>
```

Заменить на:
```html
      <p>Three core product lines. Built to IEEE C57, ANSI, NEMA and IEC standards. DOE and DOD procurement qualified.</p>
```

- [ ] **Step 2: Убрать тег из первой карточки (Power Transformers)**

Найти:
```html
        <div class="product-card-top">
          <span class="tag tag-done" style="font-size:10px">Primary Product</span>
          <div class="icon-sq"></div>
        </div>
```

Заменить на:
```html
        <div class="product-card-top">
          <div class="icon-sq"></div>
        </div>
```

- [ ] **Step 3: Убрать тег из второй карточки (Autotransformers)**

Найти:
```html
        <div class="product-card-top">
          <span class="tag tag-now" style="font-size:10px">Grid Interconnect</span>
          <div class="icon-sq"></div>
        </div>
```

Заменить на:
```html
        <div class="product-card-top">
          <div class="icon-sq"></div>
        </div>
```

- [ ] **Step 4: Убрать тег из третьей карточки (GSU)**

Найти:
```html
        <div class="product-card-top">
          <span class="tag tag-plan" style="font-size:10px;color:#206CB9;border-color:rgba(32,108,185,0.4);background:rgba(32,108,185,0.08)">Hot Segment</span>
          <div class="icon-sq"></div>
        </div>
```

Заменить на:
```html
        <div class="product-card-top">
          <div class="icon-sq"></div>
        </div>
```

- [ ] **Step 5: Проверить в браузере — карточки без тегов, стандарты обновлены**

- [ ] **Step 6: Commit**

```
git add index.html
git commit -m "feat: transformers — убрать теги, добавить ANSI/NEMA/IEC в стандарты"
```

---

## Task 7: HTML — Industries: убрать теги и border

**Files:**
- Modify: `index.html` — секция `<!-- 5. INDUSTRIES -->`

- [ ] **Step 1: Убрать inline border-color у карточки Defense**

Найти:
```html
      <div class="industry-card" style="border-color:rgba(255,207,11,0.3)">
```

Заменить на:
```html
      <div class="industry-card">
```

- [ ] **Step 2: Проверить в браузере — все 5 карточек одинаковые, без выделения Defense**

- [ ] **Step 3: Commit**

```
git add index.html
git commit -m "feat: industries — убрать выделение Defense карточки"
```

---

## Task 8: HTML — Заменить Timeline на How to Get a Quote

**Files:**
- Modify: `index.html` — заменить всю секцию `<!-- 6. TIMELINE -->`

- [ ] **Step 1: Найти и заменить всю Timeline секцию**

Найти (всю секцию):
```html
<!-- ══════════════════════════════
   6. TIMELINE  ← БЕЛЫЙ
══════════════════════════════ -->
<section class="section bg-white">
  <div class="container">
    <div class="sec-header bg-white">
      <h2>Factory Roadmap</h2>
      <p>We publish our milestones openly. No other LPT manufacturer does this — transparency builds trust for long-term procurement decisions.</p>
    </div>
    <div class="timeline-track">

      <div class="timeline-step">
        <div class="timeline-dot dot-done">✓</div>
        <div class="timeline-year">2024</div>
        <h3>Site Secured</h3>
        <p>1M+ sq ft in Spartanburg, SC. Rail access, I-85, BMW proximity confirmed.</p>
        <span class="tag tag-done">Complete</span>
      </div>

      <div class="timeline-step">
        <div class="timeline-dot dot-now">→</div>
        <div class="timeline-year">2025 – 2026</div>
        <h3>Permitting &amp; Design</h3>
        <p>Engineering design and permitting underway. Equipment specs finalized.</p>
        <span class="tag tag-now">In Progress</span>
      </div>

      <div class="timeline-step">
        <div class="timeline-dot dot-next"></div>
        <div class="timeline-year">2027</div>
        <h3>Groundbreaking</h3>
        <p>Factory construction begins. Long-lead equipment procurement starts.</p>
        <span class="tag tag-plan">Planned</span>
      </div>

      <div class="timeline-step">
        <div class="timeline-dot dot-next"></div>
        <div class="timeline-year">2029</div>
        <h3>First Delivery</h3>
        <p>First LIMIK transformer ships. LOI holders from 2025–2026 get priority.</p>
        <span class="tag tag-plan">Target</span>
      </div>

    </div>
  </div>
</section>
```

Заменить на:
```html
<!-- ══════════════════════════════
   HOW TO GET A QUOTE  ← БЕЛЫЙ
══════════════════════════════ -->
<section class="section bg-white">
  <div class="container">
    <div class="sec-header bg-white">
      <h2>How to Get a Quote</h2>
      <p>No obligation. Just tell us what you need.</p>
    </div>
    <div class="how-steps">

      <div class="how-step">
        <div class="how-step-num">01</div>
        <h3>Describe Your Project</h3>
        <p>Submit your technical requirements: application, load, voltage, and delivery needs.</p>
      </div>

      <div class="how-step">
        <div class="how-step-num">02</div>
        <h3>Engineering Review</h3>
        <p>Our team reviews specs, voltage, MVA, and application. We follow up with questions if needed.</p>
      </div>

      <div class="how-step">
        <div class="how-step-num">03</div>
        <h3>Receive Your Quote</h3>
        <p>You get a full commercial proposal within 2 business days.</p>
      </div>

    </div>
    <div style="text-align:center;margin-top:48px">
      <a href="request-quote/" class="btn btn-gold btn-lg">Request a Quote →</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере — 3 шага горизонтально, нет дат, нет завода**

- [ ] **Step 3: Commit**

```
git add index.html
git commit -m "feat: заменить Timeline/Roadmap на How to Get a Quote"
```

---

## Task 9: HTML — CTA Band

**Files:**
- Modify: `index.html` — секция `<!-- 7. CTA BAND -->`

- [ ] **Step 1: Найти и заменить заголовок CTA Band**

Найти:
```html
    <h2>Secure Your Place<br>in the <span>2029 Queue</span></h2>
    <p>No commitment required. Fill out a short form and our team will reach out within 2 business days.</p>
    <a href="register-interest/" class="btn btn-gold btn-lg">Register Interest →</a>
    <div class="cta-band-note">No obligation · Your information is never shared</div>
```

Заменить на:
```html
    <h2>Ready to Discuss<br><span>Your Project?</span></h2>
    <p>No obligation. Tell us what you need and we'll get back within 2 business days.</p>
    <a href="request-quote/" class="btn btn-gold btn-lg">Request a Quote →</a>
    <div class="cta-band-note">No obligation · Your information is never shared</div>
```

- [ ] **Step 2: Проверить в браузере — нет «2029 Queue», кнопка ведёт на request-quote/**

- [ ] **Step 3: Commit**

```
git add index.html
git commit -m "feat: CTA band — убрать 2029, обновить заголовок и кнопку"
```

---

## Task 10: HTML — Footer

**Files:**
- Modify: `index.html` — секция `<!-- 8. FOOTER -->`

- [ ] **Step 1: Обновить описание бренда в footer**

Найти:
```html
        <p>U.S.-owned large power transformer manufacturer. Spartanburg, SC. Production begins 2029. Qatar Investment Authority backed.</p>
```

Заменить на:
```html
        <p>U.S.-owned large power transformer manufacturer. Spartanburg, SC. IEEE C57, ANSI, NEMA certified. Section 303 Defense Production Act Eligible.</p>
```

- [ ] **Step 2: Обновить колонку «Company» — убрать Roadmap**

Найти:
```html
      <div class="footer-col">
        <h4>Company</h4>
        <a href="about/">About LIMIK</a>
        <a href="about/team/">Our Team</a>
        <a href="roadmap/">Factory Roadmap</a>
      </div>
```

Заменить на:
```html
      <div class="footer-col">
        <h4>Company</h4>
        <a href="company/">About LIMIK</a>
        <a href="company/team/">Our Team</a>
        <a href="news/">News</a>
      </div>
```

- [ ] **Step 3: Обновить колонку «Contact» — заменить Register Interest на Request a Quote**

Найти:
```html
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="register-interest/">Register Interest</a>
        <a href="contact/">Contact Us</a>
      </div>
```

Заменить на:
```html
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="request-quote/">Request a Quote</a>
        <a href="contact/">Contact Us</a>
      </div>
```

- [ ] **Step 4: Обновить copyright строку**

Найти:
```html
      <span>Section 303 Defense Production Act Eligible · U.S.-Owned</span>
```

Заменить на:
```html
      <span>IEEE C57 · ANSI · NEMA · Section 303 Defense Production Act Eligible</span>
```

- [ ] **Step 5: Проверить в браузере — нет Roadmap, нет QIA, нет 2029, Register Interest → Request a Quote**

- [ ] **Step 6: Финальная проверка всей страницы сверху вниз**

Проверить чек-лист:
- [ ] Нигде нет слов «factory», «завод», «2029», «Register Interest», «Roadmap»
- [ ] Все ссылки на кнопки ведут на `request-quote/`
- [ ] Dropdown меню работают при наведении
- [ ] Мобильное меню открывается по кнопке ☰
- [ ] Partners блок отображается с 4 текстовыми логотипами
- [ ] Why LIMIK показывает 2 колонки + 4 цифры
- [ ] How to Get a Quote показывает 3 шага

- [ ] **Step 7: Финальный commit**

```
git add index.html
git commit -m "feat: footer — убрать Roadmap/QIA/2029, обновить ссылки и описание"
```

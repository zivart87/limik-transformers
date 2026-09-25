# LIMIK — Data Centers page: PPC + SEO Plan

**Целевая страница:** `/industries/data-centers/`
**Задача:** запустить Google Ads на high-intent запросы + оптимизировать страницу под органическую выдачу
**Приоритет:** PPC-first (быстрый запуск), SEO — параллельная стройка

**Легенда данных:**
✅ проверено · ⚠️ гипотеза (нужен keyword-tool) · ❓ нужен внешний источник

---

## 0 · Реальная выдача — топ-5 конкурентов по «data center transformer»

Что показала выдача Google в июле 2026 (без учёта агрегаторов):

| # | Конкурент | Позиционирование | Что противопоставляем |
|---|---|---|---|
| 1 | **Hitachi Energy** | Global scale · TrafoSTAR platform · 99.999% availability · MTBF benchmark | US-owned, prod slots 2029+, direct engineering |
| 2 | **Virginia Transformer** | 60-year lifespan · shortest lead times · 6 plants NA · financial stability | Prod slots aligned to 2029–2032 · чистый USA · direct eng |
| 3 | **ELSCO** | Medium voltage padmount · 500–3750 kVA · zero failures since 1988 | Больший MVA-класс (до 600 vs их 3.75 MVA) · main substation |
| 4 | **Rex Power Magnetics** | Dry-type · harmonics · voltage swings · Canadian | Крупный power сегмент · US-owned · main substation |
| 5 | **MGM Transformers** | Hyperscale/colocation/edge · Bull Rush emergency · DOE 2029 compliance | Larger MVA · Buy American compliance · 2029+ slots |

**Отдельно — agenda-setting контент (не производители, но в топе на informational-запросы):**
- `datacenterknowledge.com` — «AI Data Center Boom Rewires US Power Supply Chain»
- `datacentremagazine.com` — «How Data Centres Should Approach Transformer Procurement»
- `build.inc/insights` — «Data Center Transformer Procurement in 2026»
- `npcelectric.com` — «Power Transformers in AI Data Center Expansion»

**Вывод:** топ-5 занят production-компаниями со «стандартным» контентом. Analytical/procurement статьи держат сами DC-медиа. Значит **PPC-нишу перехватываем прямыми запросами; SEO-нишу строим через 2–3 длинных статьи в `/insights/` с внутренними ссылками на этот лендинг** (не сразу, но в план кладём).

**Ключевые факты рынка, которые вплетаем в контент:**
- Data center transformer market: $7.8B (2024) → $11.2B (2030), CAGR 6.3% ✅ Grand View
- US импортирует ~80% MVA-мощности трансформаторов ✅ Northfield / DOE
- CloudHQ Illinois: 225 MW campus = 4× 100 MVA transformers ✅ Northfield
- Colos deploy 2.5 MVA dry-type per hall, 2N redundancy ✅ industry norm
- Lead times: 12–45 months у большинства производителей ✅ pv magazine / Reuters
- DOE прогноз: data centers = 12% US electricity consumption к 2028 ✅ DOE

---

## 1 · On-page SEO аудит текущего драфта страницы

### 1.1 Title tag и Meta description

**Текущий (в шапке MD-файла):**
- Title: `Power Transformers for Data Centers | LIMIK`
- Meta: `Custom-engineered power transformers, autotransformers, and GSUs for hyperscale, colocation, and edge data centers across America. Up to 600 MVA / 525 kV. Built to IEEE, ANSI, and NEMA standards.`

**Аудит:**
- ✅ Title: короткий, содержит основной keyword «Power Transformers for Data Centers» + бренд. Норм.
- ⚠️ Meta: 218 символов — обрежется в выдаче. Google показывает ~155–160 символов. Плюс не включает Mobile.

**Рекомендованные варианты:**

**Title (два варианта на A/B):**
- **A:** `Power Transformers for Data Centers — Up to 600 MVA | LIMIK`
- **B:** `Data Center Transformers — Custom-Engineered, American-Made | LIMIK`

*A даёт больше числового веса (600 MVA), B бьёт на дифференциатор.*

**Meta (155–160 chars):**
> `Power transformers, autotransformers, GSU, and mobile units for hyperscale and colocation data centers. Up to 600 MVA / 525 kV. American-made.`
> *(148 chars — влезает с запасом)*

### 1.2 H1/H2 иерархия и keyword coverage

**Текущая структура (из драфта):**
- H1: Power Transformers for Data Centers ✅
- H2 × 8: Context / Power Chain / Products / Mission-Critical / Why Choose / Technical / Standards / FAQ / CTA

**Что уже вплетено в контент** (keyword coverage — проверено по драфту):
- ✅ `data center` + variations
- ✅ `hyperscale`, `colocation`, `edge`
- ✅ `power transformer`, `autotransformer`, `GSU`, `mobile transformer`
- ✅ `AI`, `cloud`, `high-density compute`
- ✅ `mission-critical`, `uptime`
- ✅ `Buy American`, `BABA`, `US-owned`
- ✅ `IEEE`, `ANSI`, `NEMA`, `IEC`
- ✅ `N+1`, `2N`, `redundancy`
- ✅ `PUE`, `harmonics`, `K-factor` (косвенно)
- ✅ `MVA`, `kV`, voltage classes

**Чего не хватает — добавить точечно:**
- ⚠️ `gigawatt-scale` / `gigawatt AI campus` — сейчас упоминается, но можно усилить
- ⚠️ `Tier III` / `Tier IV` — не упомянуто вовсе, стоит добавить в FAQ
- ⚠️ `substation transformer` — как отдельный термин (частый запрос) не встречается
- ⚠️ `utility interconnection transformer` — важный длиннохвостовой запрос
- ⚠️ `MTBF` / `availability` — метрика на которую бьёт Hitachi (99.999%)
- ⚠️ `owner-furnished equipment` / `OFE` — термин процесса закупки

### 1.3 URL slug

Текущий: `/industries/data-centers/` — ✅ оставляем.

*Альтернатива `/industries/data-center-transformers/` даёт keyword в URL, но ломает единообразие всей секции Industries. Оставляем как есть.*

### 1.4 Internal linking (обязательно перед публикацией)

**Ссылки со страницы наружу:**
- `/products/power-transformers` (из Card 1)
- `/products/autotransformers` (из Card 2)
- `/products/gsu` (из Card 3)
- `/products/mobile-transformers` (из Card 4)
- `/american-made/` (из Block 06, аргумент #01) — важно
- `/insights/transformer-lead-times-2026` — когда статья будет готова

**Ссылки НА страницу (откуда должны прийти):**
- Главная → блок Markets/Industries
- `/industries/` overview
- `/products/power-transformers` → «Applications» блок
- `/products/gsu` → «Applications» блок
- `/american-made/` → «Who uses this» блок
- Все `/insights/` статьи про DC / lead times / procurement

---

## 2 · Google Ads — Keyword Clusters (главный deliverable)

Пять кластеров + negatives. Match types указаны в скобках: **[E]** exact, **[P]** phrase, **[B]** broad match modifier (через синтаксис `+word`).

### Кластер A · High-Intent Commercial (deep pocket keywords)

Прямой коммерческий интент — покупатель ищет производителя.

```
[E] "data center transformer"
[E] "data center transformer manufacturer"
[E] "power transformer for data center"
[E] "power transformers for data centers"
[P] "transformer manufacturer for data centers"
[P] "data center power transformer supplier"
[P] "custom transformer for data center"
[P] "hyperscale data center transformer"
[P] "mission critical transformer manufacturer"
```

**Landing page:** `/industries/data-centers/`
**Ad group name:** `DC-A-High-Intent`
⚠️ Ожидаемая CPC: высокая — intent-канал. Проверить в Keyword Planner.

---

### Кластер B · Product-Specific (matches our product cards)

Запросы, где ищут конкретный тип трансформатора **под DC применение**. Это самая ценная группа — landing page match идеальный.

```
[P] "substation transformer for data center"
[P] "utility interconnection transformer data center"
[P] "main power transformer data center"
[P] "generator step-up transformer data center"
[P] "GSU transformer data center"
[P] "autotransformer for data center"
[P] "mobile substation for data center"
[P] "emergency transformer data center"
[P] "large power transformer data center"
[P] "medium voltage transformer data center substation"
[E] "500 kV transformer data center"
[E] "345 kV transformer data center"
[E] "230 kV transformer data center"
[E] "138 kV transformer data center"
```

**Landing page:** `/industries/data-centers/`
**Ad group name:** `DC-B-Product-Match`

*Долгосрочно — сделать доп. лендинги под каждый тип×DC — но это Фаза 2.*

---

### Кластер C · Buy American / Compliance (наш дифференциатор)

Самый недооценённый кластер. Спрос растёт из-за tariff-рисков и federal DC. Конкуренты этот угол почти не берут.

```
[E] "Buy American transformer"
[E] "BABA compliant transformer"
[P] "American made power transformer"
[P] "US made transformer manufacturer"
[P] "domestic power transformer supplier"
[P] "USA transformer manufacturer data center"
[P] "US owned transformer manufacturer"
[P] "Buy America transformer data center"
[P] "domestic content transformer"
```

**Landing page:** `/industries/data-centers/` (Block 06 закрывает этот интент)
**Ad group name:** `DC-C-Buy-American`

*Дополнительно — когда `/american-made/` страница появится, часть трафика уходит туда.*

---

### Кластер D · Problem-First / Long-Tail

Информационные запросы с покупательским подтекстом. Стоят дешевле, конвертят хуже, но обучают воронку. Landing page должен ответить на вопрос **и** предложить действие.

```
[P] "transformer lead time data center"
[P] "how long to build a power transformer"
[P] "data center transformer procurement"
[P] "when to order transformer for data center"
[P] "why are transformer lead times so long"
[P] "power transformer shortage USA"
[P] "data center transformer supply chain"
[P] "hyperscale procurement transformer"
[P] "AI data center power infrastructure"
[P] "gigawatt data center transformer"
```

**Landing page:** `/industries/data-centers/` (сейчас), позже — статьи в `/insights/`
**Ad group name:** `DC-D-Long-Tail`

---

### Кластер E · Competitor Conquest (осторожно)

Запросы, где ищут конкретного конкурента. Легально в Google Ads, но чувствительно этически. Начинать с осторожного тестирования — только на **alternative** и **compare** запросах, без прямого имени в объявлении.

```
[P] "alternative to Virginia Transformer"
[P] "Hitachi Energy transformer alternative"
[P] "MGM Transformers alternative"
[P] "Prolec GE alternative"
[P] "Delta Star alternative data center"
[P] "compare transformer manufacturers data center"
```

**Landing page:** `/industries/data-centers/`
**Ad group name:** `DC-E-Competitor-Conquest`

*⚠️ Правило: имена конкурентов НЕ в заголовках объявлений (нарушение trademark). Только в keyword targeting.*

---

### Negative Keywords — обязательный список

**Список negative — включать в кампанию с первого дня, чтобы не жечь бюджет:**

```
Product mismatch:
-PDU
-"rack transformer"
-"1 kVA"
-"5 kVA"
-"10 kVA"
-"25 kVA"
-"50 kVA"
-"75 kVA"
-"control transformer"
-"isolation transformer"
-"buck boost"
-"toroidal"
-"pulse transformer"
-"audio transformer"
-"microwave transformer"
-"dry type"                    (* спорно — обсудить, см. ниже)

Wrong intent:
-"used"
-"refurbished"
-"for sale used"
-"second hand"
-"cheap"
-"free"
-"DIY"
-"how to build"                (self-DIY intent)
-"residential"
-"home"

Wrong audience:
-jobs
-career
-careers
-salary
-hiring
-internship
-course
-training
-tutorial
-"what is a transformer"       (educational, не покупатель)
-Wikipedia

Geography (если фокусируем США):
-India
-China
-UK
-Australia
-Africa
-Brazil
```

**По `-"dry type"`:** мы **не производим** dry-type для DC, но термин часто идёт в связке с DC-запросами. Если добавляем в negative — отсечём часть релевантного трафика тех, кто ищет альтернативу dry-type. Рекомендация: **НЕ добавлять** в negative, а на LP объяснить в FAQ что мы liquid-immersed для main substation, dry-type downstream — это другая категория (что уже есть в FAQ #1).

---

## 3 · Ad Copy — templates для каждого кластера

**Rules for all ads:**
- Headline 1: primary keyword match (для Quality Score)
- Headline 2: dual differentiator + benefit
- Headline 3: CTA
- Description 1: expand on benefit
- Description 2: proof + CTA repeat
- Обязательно: 4 sitelinks + 4 callouts + 1 structured snippet + 1 form/lead extension

### Ad Group DC-A-High-Intent

```
Headline 1: Power Transformers for Data Centers
Headline 2: American Made · Up to 600 MVA
Headline 3: Reserve Your 2029+ Slot

Description 1: Custom-engineered power transformers, autotransformers, and GSU
units for hyperscale, colocation, and edge facilities. Built to IEEE, ANSI, and NEMA.

Description 2: Register interest for 2029+ delivery. Talk directly to LIMIK
engineering — not through a distributor layer.

Path 1: /industries
Path 2: /data-centers
```

### Ad Group DC-B-Product-Match

```
Headline 1: {KeyWord: Data Center Substation Transformer}
Headline 2: Up to 525 kV / 600 MVA
Headline 3: Talk to LIMIK Engineering

Description 1: Utility interconnection, main substation, autotransformers, GSU,
and mobile units. Every point of your DC power chain, one manufacturer.

Description 2: Custom-engineered to your load profile and site constraints.
American made. Register your project today.

Path 1: /industries
Path 2: /data-centers
```

*Dynamic Keyword Insertion (`{KeyWord: ...}`) подставит запрос пользователя в headline — работает только если Cluster B хорошо очищен.*

### Ad Group DC-C-Buy-American

```
Headline 1: Buy American Power Transformers
Headline 2: For Data Center Projects
Headline 3: US-Owned Manufacturer

Description 1: Buy American and BABA compliant power transformers, autotransformers,
and GSU units. Designed for federal, secure, and commercial data centers.

Description 2: Domestic content compliance is designed in — not certified after
the fact. Register your project for 2029+ delivery.

Path 1: /industries
Path 2: /data-centers
```

### Ad Group DC-D-Long-Tail (обучающий)

```
Headline 1: Data Center Transformer Procurement
Headline 2: 2029+ Delivery Slots Available
Headline 3: Talk to LIMIK Engineering

Description 1: Industry lead times run 12–45 months. LIMIK is building capacity
specifically for the 2029–2032 project window.

Description 2: Owners planning AI, hyperscale, or colocation campuses:
start the procurement conversation now.

Path 1: /industries
Path 2: /data-centers
```

### Sitelink Extensions (общие для всех групп)

1. **Register Your Project** → `/industries/data-centers/#register`
2. **Power Transformers** → `/products/power-transformers`
3. **Generator Step-Up Units** → `/products/gsu`
4. **Buy American Compliance** → `/american-made/`

### Callout Extensions

`American Made` · `Up to 600 MVA / 525 kV` · `IEEE / ANSI / NEMA` · `Direct Engineering Access` · `Buy American Compliant` · `2029+ Delivery Slots` · `Custom-Engineered` · `48-hour RFQ Response`

### Structured Snippets

- **Type:** *Products* → Power Transformers, Autotransformers, Generator Step-Up, Mobile Transformers
- **Type:** *Applications* → Hyperscale Campus, Colocation Facility, Edge Data Center, AI Compute Cluster

---

## 4 · Landing Page Quality Score готовность

Google Ads ставит Quality Score от 1 до 10 — влияет на CPC и позицию. Три компонента: **Expected CTR**, **Ad Relevance**, **Landing Page Experience**. Landing Page — вот что должно быть на странице DC:

### Уже есть в драфте ✅

- H1 матчит запрос
- Оффер (Register Interest for 2029+ Delivery) выше сгиба
- Products/services явно перечислены
- Contact form (Block 10)
- FAQ (Block 09)
- Standards / trust signals (Block 08)
- Технические характеристики
- Mobile-friendly структура (передать разработчику)

### Нужно добавить перед запуском рекламы

**a. Load speed** — Google измеряет Core Web Vitals:
- LCP (Largest Contentful Paint) < 2.5 сек
- CLS (Cumulative Layout Shift) < 0.1
- INP (Interaction to Next Paint) < 200 мс
- **Hero-изображение — обязательно WebP + preload + width/height атрибуты**

**b. HTTPS + SSL валиден** — базовый must, но проверить

**c. Схема тэгирования событий (GTM/GA4)** для конверсий:
- Клик по CTA `Register Interest`
- Submit формы (главная конверсия)
- Скролл до Block 06 (интерес к продуктам)
- Клик по product card
- Скачивание PDF (когда будет brochure)
- Клик по «Talk to Engineering»

**d. Форма Block 10 — оптимизация под конверсию:**
- Минимум обязательных полей (обязательные: Company, Contact, Email, Target Year, MVA)
- Остальные — optional
- Progress indicator если многошаговая
- Ошибки inline, не после submit
- Thank-you page с recontact expectation («Response within 48h»)
- **UTM-параметры сохраняются в скрытых полях формы** (что за кластер привёл клиента)

**e. Trust signals выше формы:**
- Логотипы «Designed to» стандартов (IEEE, ANSI, NEMA) — pill-cards
- Response time («Response within 48h · NDA available»)

**f. Privacy Policy link рядом с формой** — обязательно для Google Ads compliance.

---

## 5 · Structured Data (Schema.org) — обязательно перед запуском

Три schema на страницу:

### 5.1 FAQPage schema (главный actor для AEO)

Разметить все 9 FAQ через JSON-LD. Шаблон:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of transformers does a data center actually need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A modern hyperscale or large colocation facility typically needs four transformer categories: (1) main substation power transformers at the utility handoff..."
      }
    },
    { ... остальные 8 вопросов ... }
  ]
}
</script>
```

**Эффект:**
- Google показывает FAQ прямо в выдаче (rich snippet)
- ChatGPT / Perplexity / Google AI Overview используют как цитируемый источник
- Bing Copilot тоже читает schema

### 5.2 Organization schema (глобально сайту, не только этой странице)

Один раз в `<head>` всего сайта:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LIMIK International",
  "url": "https://limiktransformers.com",
  "logo": "https://limiktransformers.com/logo.svg",
  "description": "American manufacturer of large power transformers, autotransformers, generator step-up units, and mobile transformers for data centers, utilities, and industrial applications.",
  "sameAs": [
    "https://www.linkedin.com/company/limik-international",
    "https://twitter.com/limikpower"
  ]
}
</script>
```

*Адреса, телефоны, точки производства — по правилам проекта на публику не выводим.*

### 5.3 BreadcrumbList schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://limiktransformers.com/" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://limiktransformers.com/industries/" },
    { "@type": "ListItem", "position": 3, "name": "Data Centers", "item": "https://limiktransformers.com/industries/data-centers/" }
  ]
}
</script>
```

### Не делаем на этой странице

- ❌ **Product schema** — потому что это лендинг индустрии, а не карточка продукта. Product schema идёт на `/products/power-transformers` и т.д.
- ❌ **Review/Rating schema** — нет отзывов для pre-production компании
- ❌ **Offer schema** — цену не указываем

---

## 6 · UNIVERSAL RULES — шаблон для всех Industries страниц

Применимо к: `/industries/utilities/`, `/industries/renewables/`, `/industries/epc/`, `/industries/defense/`, `/industries/oil-gas/` (когда/если будут) и любым другим industry-лендингам.

### 6.1 Title tag формула

```
[Product Type] for [Industry] — [MVA/kV weight] | LIMIK
```

Примеры:
- `Power Transformers for Utilities — Up to 600 MVA | LIMIK`
- `Transformers for Renewables — Solar, Wind, BESS | LIMIK`
- `Power Transformers for EPC Contractors — 2029+ Slots | LIMIK`

**Правила:**
- Длина: 55–60 символов
- Primary keyword в начале
- Бренд в конце
- Числовой differentiator (MVA / год / кол-во) — если помещается

### 6.2 Meta description формула

```
[Products list] for [industry applications]. [Range]. [Differentiator]. [Standards].
```

- Длина: 150–160 символов
- Обязательно включить: primary keyword, differentiator, что-то measurable
- CTA внутри — если есть 10+ символов запаса

### 6.3 Обязательная H2-структура (10 блоков — тот же скелет что у DC)

```
Block 01 · Hero (H1 + subheadline + 3 CTA)
Block 02 · Context (H2: почему сейчас, драйверы отрасли)
Block 03 · Power Chain (H2: где мы стоим в архитектуре — визуал)
Block 04 · Products (H2: продукты, применимые в этой нише — карточки)
Block 05 · Mission-Critical Duty (H2: 6 бенефитов)
Block 06 · Why Choose LIMIK (H2: 4 дифференциатора)
Block 07 · Technical Considerations (H2: чек-лист для проектировщика)
Block 08 · Trusted Standards (H2: релевантные стандарты)
Block 09 · FAQ (H2: 6–9 вопросов + FAQPage schema)
Block 10 · CTA + form
```

**Почему единый скелет:** пользователь, перейдя с DC на Utilities, узнаёт паттерн; поисковики видят согласованную архитектуру; редакторам легче поддерживать.

### 6.4 Показываем ТОЛЬКО применимые продукты

**Правило от Zivart:** «показываем только те продукты, которые используются в данной нише».

Матрица «продукт × индустрия» — базовая (для проверки при написании каждой industry-страницы):

| Продукт | DC | Utility | Renewables | EPC | Defense | Oil&Gas |
|---|---|---|---|---|---|---|
| Power Transformer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Autotransformer | ✅ | ✅ | ⚠️ (для крупных wind/solar-фарм) | ✅ | ✅ | ⚠️ |
| GSU | ✅ (BTM gen) | ⚠️ (при own generation) | ✅ (главный) | ✅ | ⚠️ | ⚠️ |
| Mobile Transformer | ✅ (спец) | ✅ (главный use) | ⚠️ | ⚠️ | ✅ | ⚠️ |

*⚠️ = включаем в карточки только если конкретное применение обоснованно; иначе не показываем.*

### 6.5 FAQ структура — минимум 6 вопросов

Обязательные типы вопросов на любой Industry странице:

1. **Product-fit** — «What types of transformers does [industry] actually need?»
2. **Sizing** — «What voltage classes and MVA ratings does LIMIK support for [industry]?»
3. **Compliance** — «How is LIMIK Buy American compliant / how does that matter for [industry]?»
4. **Timeline** — «What lead times should [industry] expect?»
5. **Standards** — «What standards apply / what documentation do you provide?»
6. **Process** — «How does the procurement process work with a pre-production manufacturer?»

Плюс 1–3 industry-specific вопроса.

### 6.6 Обязательные elements для Quality Score

Проверяем чек-лист **до передачи разработчику**, не после:

- [ ] Title 55–60 chars, primary keyword
- [ ] Meta 150–160 chars
- [ ] H1 матчит основной поисковый интент
- [ ] Hero CTA виден без скролла на mobile
- [ ] Все 4 продукта из линейки в наличии для рассмотрения (даже если не все на карточках)
- [ ] FAQ minimum 6 вопросов + FAQPage schema
- [ ] Форма с UTM в hidden fields
- [ ] Privacy Policy link у формы
- [ ] Load speed passing Core Web Vitals
- [ ] Mobile-friendly ≥ 90/100
- [ ] Internal links: минимум 5 outbound + минимум 3 inbound
- [ ] Structured Data: FAQPage + BreadcrumbList
- [ ] Все images: WebP + width/height + alt text

### 6.7 Universal Google Ads templates

Для каждой Industry страницы — минимум 3 Ad groups:

- **Group A · High-Intent Commercial** — «[product] for [industry]»
- **Group B · Buy American** — «American made [product]» (всегда включаем — наш глобальный дифференциатор)
- **Group C · Long-Tail Problem-First** — «[industry] [product] procurement / lead times»

Cluster D (Competitor Conquest) — только на больших ставках, после того как A/B/C уже работают.

### 6.8 Universal Negative Keywords (базовый набор для всех industry кампаний)

```
-jobs
-careers
-salary
-hiring
-internship
-training
-course
-tutorial
-Wikipedia
-"how to build"
-"what is"
-"for sale used"
-"second hand"
-refurbished
-cheap
-DIY
-residential
-India
-China
-UK
-Australia
-"1 kVA"
-"5 kVA"
-"10 kVA"
-PDU
-"control transformer"
-toroidal
```

Плюс industry-specific negatives пишутся отдельно (для DC — выше в Секции 2).

---

## 7 · Приоритет запуска

### Спринт 1 (первые 14 дней)

| # | Задача | Ответственный |
|---|---|---|
| 1 | Обновить Title + Meta по рекомендациям выше | Разработчик |
| 2 | Прогнать Кластеры A / B / C через Keyword Planner для оценки объёмов и CPC | Трафик-команда |
| 3 | Разметить FAQPage + BreadcrumbList schema | Разработчик |
| 4 | Настроить GTM + GA4 события конверсии | Трафик-команда |
| 5 | Добавить пропущенные термины в контент (`Tier III/IV`, `substation transformer`, `MTBF`) | Zivart |

### Спринт 2 (дни 14–30)

| # | Задача |
|---|---|
| 6 | Запустить Ad Groups A (High-Intent) и C (Buy American) — обкатать |
| 7 | Собрать первые 100 кликов, посмотреть search terms report, добавить negatives |
| 8 | Оптимизировать LP — если Landing Page Experience < 7/10 |

### Спринт 3 (30–60 дней)

| # | Задача |
|---|---|
| 9 | Подключить Ad Group B (Product-Match) и D (Long-Tail) |
| 10 | Начать перенос правил на `/industries/utilities/` и `/industries/renewables/` |
| 11 | Написать первую статью в `/insights/` под кластер D («How Data Centers Should Approach Transformer Procurement in 2026») |

---

## 8 · Метрика успеха (по правилам проекта)

**НЕ метрика успеха:** трафик, позиции, CPL сами по себе.
**Метрика успеха** — квалифицированные RFQ дошедшие до Марка. Из `limik-seo-semantika-i-karta-stranic.md`:

> «Один [RFQ] в квартал — уже успех»

**Промежуточные метрики (для мониторинга кампании):**

| Метрика | Целевой ориентир | Комментарий |
|---|---|---|
| Quality Score (Ad Group A) | ≥ 7/10 | Ниже — оптимизируем LP или объявления |
| CTR | ≥ 3% для phrase match | High-intent B2B norm |
| Form completion rate | ≥ 15% от кликов на CTA | Ниже — упрощаем форму |
| Cost per qualified lead | ⚠️ Определит трафик-команда после первых 30 дней | Не фантазируем |

---

## 9 · Editorial notes (для разработчика)

```
[DEVELOPER / TRAFFIC TEAM NOTES]

01 · Все keyword-cluster цифры (CPC, volumes) — ГИПОТЕЗЫ до прогона
     через Google Keyword Planner. Не полагаться на них при 
     распределении бюджета.

02 · Ad Group DC-E (Competitor Conquest) — юридически чувствительно.
     Имена конкурентов НЕ в объявлениях (нарушение trademark).
     Только в keyword targeting. Перед запуском — проверить Google Ads 
     policy на текущий момент.

03 · Landing Page Quality Score проверяем через Google Ads UI 
     после первых 24–48 часов. Если < 7/10 — LP optimization sprint 
     обязателен ДО того как масштабировать бюджет.

04 · Форма Block 10 передаёт UTM параметры в hidden fields. 
     Обязательно: utm_source, utm_medium, utm_campaign, 
     utm_content, utm_term, gclid.

05 · Тестирование FAQPage schema — через Google Rich Results Test 
     (https://search.google.com/test/rich-results) перед деплоем.

06 · A/B тест Title (варианты A/B в Секции 1.1) — запустить через 
     Search Console → URL Inspection после публикации; менять раз 
     в 4 недели минимум.

07 · Правило «показываем только применимые продукты» — из этого 
     документа. Не показывать Autotransformer / GSU / Mobile 
     на industry-странице, где их применение натянуто.

08 · Universal Rules (Секция 6) применяем к следующим Industry 
     страницам В ТОМ ЖЕ порядке блоков что у /data-centers/.
     Разработчик может использовать одну и ту же component-структуру.

09 · Все внешние ссылки в Sitelinks открываются в новой вкладке 
     ТОЛЬКО если это внешний домен. Внутренние — в текущей.

10 · GLOBAL COPY RULES (из памяти проекта, повтор):
     — Не упоминать Spartanburg / SC / год основания / имена сотрудников
     — Не «only one product» framing  
     — «America» / «the Americas», не «North America»
     — Copper OR aluminum conductors — не «copper only»
     — Defense/DOD/Section 303 — отдельная страница, не сюда
```

---

**END OF PLAN**

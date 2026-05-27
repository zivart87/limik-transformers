# LIMIK Homepage Redesign — Design Spec
**Date:** 2026-05-27  
**Scope:** index.html — полная переработка структуры и текстов главной страницы  
**Goal:** Убрать акцент на строительство завода, позиционировать LIMIK как действующего производителя трансформаторов, принимающего заявки на КП.

---

## Концепция

LIMIK позиционируется как **U.S.-производитель силовых трансформаторов**, без упоминания строительства завода и сроков его запуска. Даты поставки и детали производства обсуждаются только напрямую с клиентом после подачи заявки.

**Главные ценностные аргументы:**
1. Американское производство — IRA/DOD/Section 303 eligible, без иностранной зависимости
2. Доступность — нет очередей на 2–4 года как у зарубежных поставщиков

**Главное действие на сайте:** `Request a Quote`

---

## Структура страницы

### 1. NAV — двухуровневый

**Верхняя тонкая полоска** (вторичные ссылки):
```
Company · Careers · News · Contact
```

**Главная белая плашка** (для инженеров):
```
[LIMIK лого]   Transformers ▾   Industries   Support ▾   [Request a Quote]
```

**Dropdown «Transformers»:**
- Power Transformers
- Autotransformers
- Generator Step-Up (GSU)

**Dropdown «Support»:**
- Technical Documentation
- Certifications (IEEE C57, ANSI, NEMA, IEC)
- kVA / Load Calculator
- FAQ

**Убрано из nav:** Roadmap, Register Interest, About и Team как отдельные пункты (переносятся в Company)

---

### 2. HERO — тёмный фон (видео-заглушка)

**Заголовок:** «Where America's Power Begins»

**Подзаголовок:**
> «Custom-engineered transformers. Up to 600 MVA. U.S.-manufactured for utilities, defense, and data centers.»

**Кнопки:**
- `[Request a Quote]` — золотая, главная
- `[View Transformers]` — outline, вторичная

**Бейджи:**
- U.S.-Owned & Operated
- Section 303 Defense Production Act Eligible
- IEEE C57 Certified

**Убрано:** «Reserve Your Delivery Slot», «View Factory Roadmap», бейдж Qatar Investment Authority

---

### 3. TRUST BAR — белый фон

Без изменений. Три цифры про команду:
- **15+** Years of Engineering Experience
- **120+** Completed Transformer Projects
- **35+** Specialists on Our Team

---

### 4. PARTNERS — светлый фон

**Заголовок:** «Trusted by America's Leading Manufacturers»

Логотипы (пока текстом, заменить на SVG/PNG позже):
- Mondelēz International
- PepsiCo
- JDE (Jacobs Douwe Egberts)
- Danone

Стиль: сетка 4 колонки, тонкие разделители, серый фон.

---

### 5. WHY LIMIK — тёмный фон

**Заголовок:** «American Power. No Foreign Delays.»

**Два столбца:**

| U.S.-Manufactured | Domestic Supply |
|---|---|
| IRA-eligible. DOD/Section 303 qualified. No foreign supply chain dependency. Proudly owned and operated in Spartanburg, SC. | Over 80% of U.S. large transformers come from abroad. LIMIK delivers from American soil — faster, with full support. |

**4 цифры-карточки:**
- **80%** — Foreign supply dependency in U.S.
- **$1B+** — Annual U.S. LPT demand
- **600 MVA** — Max capacity per unit
- **Section 303** — Defense Production Act Eligible

**CTA:** `Request a Quote →`

**Убрано:** все упоминания 2029, «first new U.S. factory», «Secure Your 2029 Slot»

---

### 6. TRANSFORMERS — белый фон

**Заголовок:** «Built for the American Grid»

**Подзаголовок:**
> «Built to IEEE C57, ANSI, NEMA and IEC standards. DOE and DOD procurement qualified.»

**3 карточки без тегов:**

| Power Transformers | Autotransformers | Generator Step-Up (GSU) |
|---|---|---|
| 600 MVA / 525 kV HV / 69 kV LV / 1φ & 3φ | 525 kV HV / 345 kV LV | Wind, Solar, Data Centers / up to 35 kV LV |

Кнопка каждой карточки: `View Specifications →`

**Убрано:** все теги (Primary Product, Grid Interconnect, Hot Segment)

---

### 7. INDUSTRIES — тёмный фон

**Заголовок:** «Who We Build For»

**5 карточек без тегов:**
1. Utilities & Grid — Duke Energy, Dominion, Southeast utilities
2. Data Centers — AWS, Azure, Google в Каролинах. GSU critical.
3. Defense / DOD — Section 303 eligible. DOD procurement ready.
4. Renewables — Wind, Solar, BESS. IRA-eligible U.S.-made GSU.
5. EPC Contractors — Bechtel, Fluor, Kiewit. Plan procurement 5+ years out.

**Убрано:** золотая рамка на карточке Defense, все теги

---

### 8. HOW TO GET A QUOTE — белый фон

**Заголовок:** «How to Get a Quote»

**Подзаголовок:** «No obligation. Just tell us what you need.»

**3 шага горизонтально:**

```
01                    02                    03
Describe              Engineering           Receive
Your Project          Review                Your Quote

Submit your           Our team reviews      You get a full
technical             specs, voltage,       commercial
requirements:         MVA, and              proposal within
application,          application.          2 business days.
load, voltage,        We follow up
delivery needs.       if needed.
```

**CTA:** `Request a Quote →`

---

### 9. CTA-ПОЛОСА — тёмно-синий фон

**Заголовок:** «Ready to Discuss Your Project?»

**Подзаголовок:** «No obligation. Tell us what you need and we'll get back within 2 business days.»

**Кнопка:** `[Request a Quote →]`

**Убрано:** «Secure Your Place in the 2029 Queue», «No commitment required»

---

### 10. FOOTER — тёмный фон

**Убрано:**
- Ссылка «Factory Roadmap»
- Упоминание Qatar Investment Authority в описании бренда
- «Register Interest» → заменено на «Request a Quote»

**Описание бренда:**
> «U.S.-owned large power transformer manufacturer. Spartanburg, SC. IEEE C57, ANSI, NEMA certified. Section 303 Defense Production Act Eligible.»

Остальное без изменений.

---

## Что НЕ меняется

- Дизайн-система: цвета, шрифты, отступы — без изменений
- Общая тёмная/светлая чередующаяся структура секций
- Логотип и брендинг
- Технические характеристики трансформаторов
- Карточки индустрий (только убираем теги)
- Trust bar цифры

---

## Что остаётся на потом

- Реальные SVG/PNG логотипы партнёров (Mondelēz, PepsiCo, JDE, Danone)
- Видео для hero-секции
- Страницы Support (Documentation, Calculator, FAQ) — пока заглушки
- Внутренние страницы (Transformers, Industries, Company, Contact, Request a Quote)

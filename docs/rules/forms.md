# Форми

Шляхи — від кореня репозиторію. Читати при правці форм, submit-note або телефону.

## Формы — стандарт оформления полей

Образец: `request-quote/index.html` (страница заявки).

### Label (підпис над полем) — оновлено 2026-09-27 (рішення користувача)
```css
font-family: 'Inter'; font-size: 14px; font-weight: 500; line-height: 1.4;
text-transform: none; letter-spacing: 0;
color: var(--navy-dark);            /* на темному фоні: #fff */
display: flex; justify-content: space-between; gap: 8px;
```
Відступ від підпису до поля — 10px. Обов'язкові поля **не позначаються** зірочкою; позначаються лише необов'язкові: `<span class="lopt">Optional</span>` праворуч у рядку підпису, 12px, вага 400, приглушений колір. Біля кнопки відправки — коротка примітка, які поля обов'язкові (12px). Попередній стандарт «10px, 800, uppercase + синя `*`» скасовано; наявні форми сайту переводяться на новий стандарт під час перенесення універсальної форми.

### Input / Select / Textarea (само поле)
```css
font-family: var(--font);
font-size: 16px; font-weight: 400; line-height: 1.4;   /* 16px: менше — iOS збільшує сторінку при фокусі */
color: var(--navy-dark);
background: var(--white);
border: 1.5px solid rgba(9,25,59,0.15);
border-radius: 2px;
padding: 14px 16px; min-height: 52px;                  /* textarea: min-height 112px */
outline: none;
width: 100%; box-sizing: border-box;
transition: border-color 0.15s, box-shadow 0.15s;
```

### Focus-состояние
```css
border-color: var(--blue);
box-shadow: 0 0 0 3px rgba(32,108,185,0.10);
```

### Placeholder
```css
color: #A8B8CC;
```

### Обёртка поля
```css
.rq-field { display: flex; flex-direction: column; gap: 6px; }
```

### Submit-note (текст под кнопкой Submit)

Утверждённый на `industries/*` (образец: `.dcq-submit-note` на `industries/data-centers/index.html`), с 2026-08-08 — единый стандарт для **всех** форм сайта, включая `contact/index.html` и сайдбар-формы товарных страниц (`transformers/*`).

**Текст (не сокращать):**
```html
Response within 48 hours. All information handled under NDA on request. By submitting, you agree to our <a href="/privacy-policy/">Privacy Policy</a>.
```

**Стиль — светлый фон (форма на белом/off-white):**
```css
margin-top: 16px; font-size: 12px; color: #4E6F91; line-height: 1.65;
```
ссылка: `color: var(--blue); text-decoration: underline;`

**Стиль — тёмный фон (форма на `--navy-dark`, например `.pt-sidebar-form`):**
```css
margin-top: 16px; font-size: 12px; color: rgba(255,255,255,0.72); line-height: 1.65;
```
ссылка: `color: var(--blue-lt); text-decoration: underline;` (обычный `--blue` на тёмном фоне не проходит контраст — см. design-system.md: eyebrow на тёмном фоне, та же логика)

**Грабли (2026-08-08, поймано на `transformers/power/index.html`): голый класс `.sf-submit-note` не перебивает соседнее правило вида `.pt-sidebar-form p`.** У `<p class="sf-submit-note">` специфичность самого класса — (0,1,0), а у общего правила для параграфов внутри формы `.pt-sidebar-form p` — (0,1,1) (класс + тег), то есть выше, и оно побеждает независимо от порядка в файле — шрифт откатывался на `16px/1.75` вместо нужных `12px/1.65`, хотя правило `.sf-submit-note` было прописано верно. Исправлено скоупингом селектора под родителя: `.pt-sidebar-form .sf-submit-note { ... }`. При добавлении submit-note в новый компонент формы — сразу писать селектор через родительский класс (`.<форма> .sf-submit-note` / `.<форма> .submit-note`), не голый класс, если в этой же форме уже есть общее правило для `p`.

**Та же грабли повторилась (2026-08-09) с `.pt-sidebar-call` (строка «Prefer to talk? Call...») на всех 4 товарных страницах.** Голый `.pt-sidebar-call` не задавал свой `margin-bottom`, поэтому побеждал `.pt-sidebar-form p { margin-bottom: 24px }` — снизу набегало 36px паддинга контейнера + 24px лишнего margin (60px), сверху — только 36px паддинга. Визуально казалось, что нижний отступ у формы задвоен. Исправлено тем же способом: селектор проскоуплен под родителя (`.pt-sidebar-form .pt-sidebar-call`) и добавлен явный `margin-bottom: 0`. **Общее правило:** у формы `.pt-sidebar-form` есть широкое `.pt-sidebar-form p { margin-bottom: 24px }` — любой новый `<p class="...">` внутри этой формы (submit-note, call-line, что угодно ещё) обязан либо сам явно перекрыть `margin-bottom`, либо использовать скоупленный селектор `.pt-sidebar-form .класс`, не голый `.класс`.

`font-size: 12px` и `line-height: 1.65` — фиксированные независимо от фона, меняется только цвет текста/ссылки по стандартному правилу «текст на тёмном/светлом фоне» (см. design-system.md, раздел «Цвет и насыщенность текста»).

**Правила:**
- `border-radius: 2px` — стандарт сайту. **Виняток — Modular:** поля, кнопки й плитки форми 6px за шкалою заокруглень Modular (components.md).
- Граница по умолчанию — полупрозрачная `rgba(9,25,59,0.15)`, не серый hex
- Focus — синий бордер + мягкая тень синего цвета, никаких outline
- Select — всегда кастомная стрелка (синяя SVG), `appearance: none`

---

Телефон `.pt-sidebar-call a`: `white-space: nowrap`, посилання `tel:+17867676418`. Сам `.pt-sidebar-form .pt-sidebar-call` має явно задавати `margin-bottom: 0`; не втрачати цей виняток при копіюванні.
Submit-note 12px/1.65 — виняток з правила основного тексту 16px/1.75. Поля форми — 16px (оновлено 2026-09-27).

## Універсальна лід-форма продуктових сторінок (рішення користувача 2026-09-27, патерн Helios)

Зразок: блок `#configure` у прототипі `docs/prototypes/modular-dc-wireframe.html` (`.lead-grid`, `.lead-form`). Одна форма з однаковими полями, обробником і виглядом для всіх продуктових сторінок; стоїть внизу кожної сторінки; `/request-quote/` лишається для кнопки в меню з тією самою формою. Людей не перекидати з продуктової сторінки на окрему сторінку форми.

- **Компонування:** зліва eyebrow, h2, вступ і icon-link «Contact our team» → `/contact/` (рішення 2026-09-27: поки немає PDF datasheet; коли клієнт дасть datasheet — повернутися до кроку «email → завантаження», погодивши з користувачем); ліва колонка sticky на десктопі. Справа форма, ширина до 620px, проміжок колонок `clamp(56px, 7vw, 112px)`. До 991px — одна колонка.
- **1. «What are you planning?»** (`legend`, 20px, вага 500) + 6 плиток-продуктів у сітці 3×2 (до 600px — 2 колонки), проміжок 8px: Modular AI data center · Power transformer · Autotransformer · GSU transformer · Mobile transformer · Other. Нативні `radio`; плитка тієї ж висоти, що й поля — рівно 52px (padding 0 12px, 14px / line-height 1.2, вміщує до 2 рядків на мобайлі), radius 6px (шкала Modular), фон `rgba(255,255,255,.06)` з рамкою; вибрана — `var(--blue)` з заповненим індикатором. Вибрано за сторінкою; параметр `?product=` у посиланні перевизначає.
- **2. Full name → Work email** в один рядок (проміжок 18px; до 600px одна колонка), під ними **Company** на всю ширину, далі **«What do you need to deploy?» (Optional)** — textarea з підказкою «Target capacity, site and timing.». **Обов'язкові лише Full name, Work email, Company.**
- **Телефону у формі немає** (рішення 2026-09-27): для ринку США B2B спершу пише, поле телефону знижує кількість заявок, а для SMS/автодзвінків потрібна окрема згода за TCPA. Номер клієнт дає сам у листуванні. Натомість під формою — рядок `.lf-call` «Prefer to talk? Call +1 786-767-6418 or email info@limik.us» (`tel:+17867676418`, `mailto:info@limik.us` — та сама адреса, що у footer; номер і email `nowrap`), за стандартом `.pt-sidebar-call`: 14px, приглушений колір, номер білий жирний, лінія зверху, відступ 24/20px; стоїть поза `<form>`, щоб не зникати після відправки.
- **3. «Add project details»** — `<details>` між двома лініями, min-height 58px, «+» праворуч повертається на 45°. Усередині, усе Optional: Target IT capacity (лише для LIMIK Core; для трансформаторів варіанти не узгоджені — не вигадувати), When do you plan to start (Ready now · Within 6 months · 6–12 months · Just researching).
- **4. Кнопка** `.btn` з текстом-результатом (на Modular «Get my concept & schedule») + поруч «Name, email and company are required.»; під ними стандартний submit-note. До 600px кнопка на всю ширину.
- Вертикальний ритм форми — 24px між рядками. Поля й підписи — за стандартом вище (14px / 16px / 52px). Фокус — синя рамка + м'яка тінь.
- Помилки під полем після спроби відправки, фокус на першому помилковому полі, без alert. Honeypot замість reCAPTCHA; приховані `utm_*` і `page`; `type`/`autocomplete` обов'язкові.
- **Усі CTA сторінки ведуть на цю форму** (`href="#configure"` + `data-go`): «Configure…», «Request a schedule» — плавний скрол до початку форми і курсор у Full name («Request a schedule» додатково розгортає «Add project details»); «Request the technical datasheet» (блок специфікацій) — поки теж на форму, бо PDF datasheet ще немає. Без JS працює звичайний якір `#configure`.
- **Ієрархія CTA на продуктовій сторінці:** одна основна дія (жовта кнопка → ця форма) + легкі альтернативи: icon-link «Contact our team» → `/contact/` зліва від форми (там усі контакти одразу, для тих, хто має конкретне питання і не хоче заповнювати форму) і рядок `.lf-call` з телефоном та email під формою. Інших кнопок «Contact us» / «Talk to sales» у тілі сторінки не додавати. Сторінка Contact — у меню, для непродажних звернень (постачальники, преса, робота), з тією самою формою (варіант «Other»).
- Не питати у формі: телефон, Cooling preference, Number of racks, Power source, штат, «How did you hear about us».
- Перед перенесенням: аудит усіх наявних форм сайту (`/request-quote/`, бічні форми `transformers/*`, форми `industries/*`) і їхнього обробника/CRM; план перенесення погодити з користувачем.

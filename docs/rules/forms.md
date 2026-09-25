# Форми

Шляхи — від кореня репозиторію. Читати при правці форм, submit-note або телефону.

## Формы — стандарт оформления полей

Образец: `request-quote/index.html` (страница заявки).

### Label (подпись над полем)
```css
font-size: 10px; font-weight: 800;
letter-spacing: 0.09em; text-transform: uppercase;
color: var(--navy-dark);
```
Обязательная пометка `*` — цвет `var(--blue)` через `<span class="req">*</span>`.

### Input / Select / Textarea (само поле)
```css
font-family: var(--font);
font-size: 14px; font-weight: 400;
color: var(--navy-dark);
background: var(--white);
border: 1.5px solid rgba(9,25,59,0.15);
border-radius: 2px;
padding: 11px 14px;
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
- `border-radius: 2px` — всегда, без скруглений
- Граница по умолчанию — полупрозрачная `rgba(9,25,59,0.15)`, не серый hex
- Focus — синий бордер + мягкая тень синего цвета, никаких outline
- Select — всегда кастомная стрелка (синяя SVG), `appearance: none`

---

Телефон `.pt-sidebar-call a`: `white-space: nowrap`, посилання `tel:+17867676418`. Сам `.pt-sidebar-form .pt-sidebar-call` має явно задавати `margin-bottom: 0`; не втрачати цей виняток при копіюванні.
Поля 14px та submit-note 12px/1.65 — винятки з правила основного тексту 16px/1.75.

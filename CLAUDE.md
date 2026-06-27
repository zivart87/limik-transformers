# LIMIK International — Инструкция по разработке сайта

## Мета-правила

1. **Обновлять этот файл** как только зафиксировано новое правило или решение. Не откладывать. CLAUDE.md — живой документ.

2. **Давать экспертные советы проактивно.** Пользователь не имеет опыта веб-разработки — я обязан замечать архитектурные проблемы и предлагать правильные решения ДО того как они станут проблемами. Не ждать когда пользователь спросит. Примеры: дублированный код nav на нескольких страницах, отсутствие shared компонентов, inline-стили вместо общего CSS-файла.

3. **Перед созданием любого нового блока** — сначала найти аналог на `index.html` (главной) и скопировать оттуда точные значения: `font-size`, `font-weight`, `color`, `padding`, фон. Не придумывать новые значения. Если аналога нет — спросить пользователя. Запрещено: добавлять цвета не из дизайн-системы, менять жирность без образца, добавлять фоны которых не просили.

4. **Подтверждение перед большими изменениями.** Если изменение затрагивает архитектуру, несколько файлов, или логику работы — сначала описать план (что именно будет изменено и почему), и дождаться явного согласия пользователя. Только после этого начинать реализацию.  
   **Исключения** (делать сразу без подтверждения): правки одного файла с очевидным результатом — цвет, размер, отступ, текст, мелкий CSS.

---

## О проекте

**LIMIK International** — американский производитель силовых трансформаторов (20–600 MVA, до 525 kV).  
Сайт: `https://www.limiktransformers.com`

**Стек:** статический HTML + CSS + ванильный JS. Никакого билда, фреймворков, npm.  
**Анимации:** GSAP 3.12.5 + ScrollTrigger + Lenis 1.3.4 (подключаются через CDN).  
**Хостинг:** Vercel, автодеплой из GitHub (`zivart87/limik-transformers`, ветка `main`).

---

## Рабочий процесс

### После каждого изменения — сразу пушить:
```bash
git add <файлы>
git commit -m "краткое описание"
git push origin main
```
Vercel деплоит автоматически. Вручную `vercel deploy` не нужен.

### Перед созданием новой страницы:
1. Вызвать скил дизайна: `/frontend-design`
2. Прочитать `assets/css/limik.css` — единственный источник правды по дизайн-системе

---

## Структура файлов

```
assets/
  css/limik.css        — дизайн-система (не дублировать стили отсюда в страницах)
  images/              — все логотипы, фото, SVG иконки
  video/               — hero.mp4, banner.mp4
company/index.html     — страница «О компании»
index.html             — главная страница
vercel.json            — конфиг Vercel (clean URLs)
CLAUDE.md              — этот файл
```

---

## Дизайн-система (`assets/css/limik.css`)

### Цвета — 5 основных цветов сайта

| Переменная | Hex | Применение |
|---|---|---|
| `--navy-dark` | `#09193B` | Основной тёмный фон, основной цвет текста |
| `--gold` | `#FFCF0B` | **ТОЛЬКО CTA-кнопки** — нигде больше |
| `--blue` | `#206CB9` | Акценты: верхняя полоса nav, иконки, выделение слов в тексте `<em>`, декоративные линии и элементы |
| `--white` | `#FFFFFF` | Светлый фон, текст на тёмном фоне |
| `--off-white` | `#F4F6FA` | Очень светлый синеватый фон секций |

**Критически важные правила по цветам:**
- `--gold` — **строго только для кнопок** (`.btn-gold`). Никаких gold-текстов, gold-иконок, gold-`<em>`, gold-линий.
- `--blue` — акцент для всего остального: выделение слов (`<em>`), иконки, декоративные линии, бордеры, eyebrow-лейблы.
- Выделять слова цветом в тексте (`<em>` синим) — **только по явному запросу** пользователя. Без запроса — не выделять.
- `--navy-mid` (`#0F2656`) — вспомогательный тёмный фон (используется реже, не входит в 5 основных).

### Сетка и выравнивание — единые правила для всего сайта

#### Контейнер (основа)
```css
.container { max-width: 1360px; margin: 0 auto; padding: 0 40px; }
@media (max-width: 768px) { .container { padding: 0 20px; } }
```
**Правило:** весь контент внутри `.container`. Горизонтальный отступ — 40px от края контейнера.

#### Горизонтальные отступы по типу секции
| Тип секции | Горизонтальный padding | Пример |
|---|---|---|
| Контент внутри `.container` | 0 (контейнер сам даёт 40px) | `.section .container` |
| Hero / полноширинная без контейнера | **60px** | `.hero-content`, `.co-hero-content` |
| Мобильные hero | 24px | `@media (max-width: 768px)` |
| Карточки и ячейки внутри сетки | любой внутренний | `.co-stat`, `.co-pillar` |

**Критично:** если секция не использует `.container` — горизонтальный padding строго **60px** (десктоп) и **24px** (мобайл). Никаких `72px`, `80px` и других произвольных значений — это ломает выравнивание относительно других страниц.

#### Двухколоночные секции (фото | текст)

**Главное правило сайта:** левая граница контейнера — жёсткая. Ни фото, ни фон, ни текст не выходят левее `.container`. Справа — фото/фон могут уходить до края экрана.

**Правильный паттерн для split-секций:**
```html
<section class="story-section">       <!-- фон секции может быть любым -->
  <div class="container">             <!-- контент строго внутри контейнера -->
    <div class="story-grid">          <!-- display: grid; grid-template-columns: 1fr 1fr -->
      <div class="story-img">...</div>    <!-- фото слева, bounded контейнером -->
      <div class="story-text">...</div>   <!-- текст справа, bounded контейнером -->
    </div>
  </div>
</section>
```
```css
.story-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 600px; }
.story-img  { position: relative; overflow: hidden; }
.story-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.story-text { padding: 80px 40px 80px 60px; }  /* 40px = container padding, 60px от центра */
```

Если фото нужно пустить вправо за край экрана — только абсолютным позиционированием с `calc((100vw - 1360px) / 2)`, как в `about-overlay-photo` на главной.

#### Вертикальные отступы секций
- `.section` — `padding: 120px 0`
- `.section-lg` — `padding: 160px 0`
- `.section-sm` — `padding: 64px 0`

### Надзаголовки (eyebrow/label над заголовком секции)
Единый стандарт для всего сайта:
```css
font-size: 13px; font-weight: 800; letter-spacing: 0.07em;
text-transform: uppercase; color: var(--blue); margin-bottom: 32px;
```
Образец: `.founder-eyebrow` на главной (секция "From the Founder"). Единый стандарт для всех секций.
- Цвет всегда `--blue` (синий = акцент). На тёмном фоне — тоже синий, он читается.
- Не использовать `--text-2`, `--gold` или другие цвета для eyebrow без явного запроса.
- `margin-bottom: 20px` — стандартный отступ до заголовка.

### Кнопки — строго два типа

#### 1. Primary CTA — форма заявки (`.btn.btn-gold`)
- Сплошная золотая кнопка
- Используется **только** для перехода на форму заявки ("Get a Quote", "Request a Quote")
- Встречается в nav и в hero-секциях
- `.btn-lg` — увеличенный размер

#### 2. Icon-link — переход на другие страницы
- Визуально: **золотой квадрат** со стрелкой (`--gold` фон, `--navy-dark` стрелка) + текст рядом
- HTML-паттерн:
```html
<a href="..." class="co-intro-link">
  <span class="co-intro-link-icon">
    <svg width="22" height="16" viewBox="0 -2 22 20" fill="none"><path d="M3 8H19M19 8L12 1M19 8L12 15" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </span>
  Текст ссылки
</a>
```
- Используется везде кроме формы заявки: "Learn More", "View Industry", "Meet the Full Team" и т.п.

**Запрещено:** outline-кнопки (`.btn-outline-white`, `.btn-outline-dark`) — не использовать. На сайте только два типа кнопок.

---

## Правила вёрстки

### Цвет и насыщенность текста — единый стандарт

| Фон | Заголовки | Параграфы | font-weight параграфов |
|---|---|---|---|
| Тёмный (`--navy-dark`, `--navy-mid`) | `var(--white)` | `rgba(255,255,255,0.72)` | 400 |
| Светлый (`--white`, `--off-white`) | `var(--navy-dark)` | `#3A5570` | 400 |

Стандарт параграфа: `font-size: 16px; font-weight: 400; line-height: 1.75;`

**Запрещено:** использовать `var(--text-1)` (`#C4D4E8`) для параграфов — это голубоватый цвет, визуально отличается от стандарта. `--text-1` и `--text-2` используются только для вспомогательных мелких элементов (подписи, мета-текст, футер).

**Запрещено:** `font-weight: 300` для параграфов контента — только `400`.

### Текст на тёмном фоне
`body` имеет `color: var(--navy-dark)`. Если фон задаётся через `::before` или CSS без класса `bg-dark`/`bg-mid` — **обязательно** задавать цвет текста явно:
```css
color: var(--white);           /* для заголовков и основного текста */
color: rgba(255,255,255,0.72); /* для параграфов */
```
Никогда не полагаться на наследование, если bg-класс отсутствует.

### Частичный тёмный фон (паттерн ::before)
Для секций где тёмный фон покрывает только часть ширины:
```css
.section::before {
  content: ''; position: absolute; inset: 0;
  right: 38%; /* покрывает левые 62% */
  background: var(--navy-dark); z-index: 0;
}
.section .container { position: relative; z-index: 1; }
```

### Фото с нахлестом
```css
.photo-block {
  position: absolute;
  bottom: -320px; /* нахлест вниз */
  height: 560px;
}
/* margin-bottom родителя ВСЕГДА = значению bottom фото */
.parent { margin-bottom: 320px; }
```

### Параллакс (GSAP)
Паттерн для фото-блоков — подключать Lenis + GSAP + ScrollTrigger:
```html
<script src="https://unpkg.com/lenis@1.3.4/dist/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```
```javascript
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

gsap.fromTo(photoImg,
  { yPercent: -6 },
  { yPercent: 6, ease: 'none',
    scrollTrigger: { trigger: photoEl, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  }
);
```

### Clip-path утилиты (в limik.css)
```css
.clip-tl { clip-path: polygon(64px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 64px); }
.clip-tr { clip-path: polygon(0% 0%, calc(100% - 64px) 0%, 100% 64px, 100% 100%, 0% 100%); }
```

---

## Логотипы

| Контекст | Файл |
|---|---|
| Светлый nav (обычное состояние) | `assets/images/logo.svg` + класс `logo-dark` |
| Тёмный nav (прозрачный над hero) | `assets/images/logo-bg.svg` + класс `logo-light` |
| Футер | `assets/images/logo-bg.svg` |
| Декоративный в секциях | `assets/images/logo-product.svg` |

Пример nav-логотипа (из подпапки):
```html
<a href="../" class="nav-logo">
  <img class="logo-dark" src="../assets/images/logo.svg" alt="LIMIK">
  <img class="logo-light" src="../assets/images/logo-bg.svg" alt="LIMIK">
</a>
```

---

## Навигация

Полные стили в `limik.css`. Ключевые классы:
- `.nav` — фиксированный хедер
- `.nav-top-strip` — верхняя синяя полоса (цвет `--blue`)
- `.nav--transparent` — прозрачное состояние над hero (JS переключает)
- `.nav--strip-hidden` — верхняя полоса скрыта при скролле
- `.nav-arrow` — стрелка дропдауна, вращается на 180° при hover

**Правило dropdown:** стрелка оборачивается в `<span class="nav-arrow">▾</span>`.

---

## Критически важно: index.html НЕ подключает limik.css

`index.html` (главная страница) содержит ВСЕ свои стили в инлайн `<style>` блоке и **не имеет `<link rel="stylesheet" href="assets/css/limik.css">`**.

Это значит:
- Любые изменения в `limik.css` **не влияют** на главную страницу
- Если нужно изменить стиль на главной — менять нужно в inline `<style>` внутри `index.html`
- Если вносишь в `limik.css` новый nav-паттерн — продублируй его и в `index.html`
- `company/index.html` и другие страницы в подпапках — подключают `limik.css` и НЕ имеют своих nav-стилей

**Обязательная проверка перед правкой CSS в `index.html`:** перед добавлением или изменением любого правила — сначала выполнить поиск по файлу на этот же селектор. В `index.html` ~1100+ строк инлайн-стилей, конфликты специфичности неизбежны если не проверять весь файл целиком. Правило которое добавляется раньше может быть перебито более поздним правилом с той же специфичностью.

## Запреты

- **Не удалять стили из `index.html`** без проверки — там нет fallback на `limik.css`
- **Не трогать `index.html` (главная)** без явной просьбы пользователя
- **Не использовать `vercel deploy`** — деплой только через `git push`
- **Не создавать новые CSS-переменные** не добавив их в `limik.css` (и в `:root` в `index.html`)
- **Не размещать медиафайлы в корне** — только в `assets/images/` или `assets/video/`

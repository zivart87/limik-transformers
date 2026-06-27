# LIMIK International — Инструкция по разработке сайта

## Мета-правила

1. **Обновлять этот файл** как только зафиксировано новое правило или решение. Не откладывать. CLAUDE.md — живой документ.

2. **Давать экспертные советы проактивно.** Пользователь не имеет опыта веб-разработки — я обязан замечать архитектурные проблемы и предлагать правильные решения ДО того как они станут проблемами. Не ждать когда пользователь спросит. Примеры: дублированный код nav на нескольких страницах, отсутствие shared компонентов, inline-стили вместо общего CSS-файла.

3. **Перед внесением любых изменений** проверять архитектурную правильность решения. Если есть лучший подход — предложить его.

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

### Цвета
| Переменная | Hex | Применение |
|---|---|---|
| `--navy-dark` | `#09193B` | Основной тёмный фон, текст |
| `--navy-mid` | `#0F2656` | Средний тёмный фон |
| `--blue` | `#206CB9` | Акцент, верхняя полоса nav, подчёркивание |
| `--gold` | `#FFCF0B` | CTA-кнопки, иконки, акцент |
| `--white` | `#FFFFFF` | Светлый фон, текст на тёмном |
| `--off-white` | `#F4F6FA` | Светло-серый фон секций |

### Контейнер
```css
.container { max-width: 1360px; margin: 0 auto; padding: 0 40px; }
```
**Правило:** весь контент внутри `.container`. Исключения — только hero-секции и футер.

### Секции
- `.section` — padding 120px верх/низ
- `.section-lg` — 160px
- `.section-sm` — 64px

### Кнопки
- `.btn.btn-gold` — золотая (основной CTA)
- `.btn.btn-outline-white` — обводка белая (на тёмном фоне)
- `.btn.btn-outline-dark` — обводка тёмная (на светлом фоне)
- `.btn-lg` — увеличенный размер

---

## Правила вёрстки

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

## Запреты

- **Не удалять стили из `index.html`** без проверки — там нет fallback на `limik.css`
- **Не трогать `index.html` (главная)** без явной просьбы пользователя
- **Не использовать `vercel deploy`** — деплой только через `git push`
- **Не создавать новые CSS-переменные** не добавив их в `limik.css` (и в `:root` в `index.html`)
- **Не размещать медиафайлы в корне** — только в `assets/images/` или `assets/video/`

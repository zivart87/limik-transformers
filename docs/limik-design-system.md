# LIMIK International — Design System

> Версия 1.0 · май 2026  
> Референс: maddox.com (Chrome DevTools анализ)

---

## Цвета LIMIK (Brand Colors)

```css
:root {
  /* ── LIMIK BRAND ── */
  --navy-dark:   #09193B;   /* основной фон страницы */
  --navy-mid:    #0F2656;   /* фон секций, карточек */
  --blue:        #206CB9;   /* акцент, ссылки, теги */
  --gold:        #FFCF0B;   /* PRIMARY CTA, заголовки-акценты */
  --gold-hover:  #DDB800;   /* hover CTA */

  /* ── ТЕКСТ ── */
  --white:       #FFFFFF;
  --text-1:      #C4D4E8;   /* вторичный текст */
  --text-2:      #7090B0;   /* третичный текст / метки */
  --text-3:      #3A5570;   /* слабый текст / placeholders */

  /* ── БОРДЕРЫ ── */
  --border:      rgba(255,255,255,0.07);
  --border-2:    rgba(255,255,255,0.14);
}
```

### Палитра визуально

| Свет | HEX | Роль |
|------|-----|------|
| ■ `#09193B` | Тёмный Navy | Основной фон (`background`) |
| ■ `#0F2656` | Средний Navy | Фон секций, карточек |
| ■ `#206CB9` | Синий | Акцент, иконки, теги, ссылки |
| ■ `#FFCF0B` | Золотой | CTA кнопки, акцентные заголовки |

---

## Шрифты LIMIK

### Семейство
| Роль | Шрифт | Google Fonts |
|------|-------|-------------|
| Заголовки | **REM** weight 700–900 | `family=REM:wght@700;800;900` |
| Тело / UI | **REM** weight 400–500 | `family=REM:wght@400;500` |

```html
<link href="https://fonts.googleapis.com/css2?family=REM:wght@400;500;700;800;900&display=swap" rel="stylesheet">
```

### Размеры (на базе Maddox пропорций)

| Уровень | Размер | Вес | Line-height | Transform | Применение |
|---------|--------|-----|-------------|-----------|-----------|
| **H1 / Display XL** | `clamp(56px, 8vw, 112px)` | 900 | 0.9 | UPPERCASE | Hero заголовок |
| **H2 / Display L** | `clamp(32px, 5vw, 64px)` | 800 | 0.92 | UPPERCASE | Заголовки секций |
| **H3 / Display M** | `clamp(22px, 3vw, 40px)` | 700 | 1.0 | none | Подзаголовки |
| **Card title** | `20–24px` | 700 | 1.2 | none | Заголовки карточек |
| **Label / Caption** | `13px` | 700 | 1.2 | UPPERCASE | Метки, теги (letter-spacing: 1.4px) |
| **Button** | `16–18px` | 700 | 1.0 | none | Кнопки |
| **Body / Paragraph** | `16px` | 400 | 1.6 | none | Основной текст |
| **Small / Footer** | `13–14px` | 400 | 1.5 | none | Мелкий текст |

---

## Контейнер и сетка

### Контейнер
```css
.container {
  max-width: 1360px;   /* Maddox = 1360px, допустимо 1200–1360px */
  padding: 0 40px;     /* горизонтальные поля */
  margin: 0 auto;
}
@media (max-width: 768px) {
  .container { padding: 0 20px; }
}
```

### Вертикальные отступы секций
```css
.section    { padding: 80px 0; }    /* стандартная секция */
.section-lg { padding: 120px 0; }   /* крупные секции (hero-смежные) */
.section-sm { padding: 48px 0; }    /* компактные блоки (trust bar) */
```

### Сетки
```css
.grid-2 { display: grid; grid-template-columns: 1fr 1fr;        gap: 16px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0;    }
/* Products flex (Maddox style) */
.grid-products { display: flex; gap: 70px; }
```

---

## Кнопки

```css
.btn {
  font-family: 'REM', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 28px;
  border-radius: 0;          /* промышленный стиль — без скруглений */
  border: 2px solid transparent;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: 0.18s;
}

/* PRIMARY — золотой CTA */
.btn-primary {
  background: #FFCF0B;
  color: #09193B;
  border-color: #FFCF0B;
}
.btn-primary:hover { background: #DDB800; border-color: #DDB800; }

/* SECONDARY — outline */
.btn-secondary {
  background: transparent;
  color: #FFFFFF;
  border-color: rgba(255,255,255,0.25);
}
.btn-secondary:hover { border-color: #FFFFFF; }
```

| Параметр | Значение |
|----------|----------|
| Font-size | 16–18px |
| Font-weight | **700** |
| Padding | `16px 28px` |
| Border-radius | **0px** (промышленный стиль) |
| Primary BG | `#FFCF0B` |
| Primary text | `#09193B` |

---

## Карточки

```css
.card {
  background: #0F2656;           /* --navy-mid */
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 0;              /* без скруглений */
  padding: 24px;
}
.card:hover {
  border-color: rgba(255,255,255,0.28);
}
```

---

## Навигация

```css
.nav {
  height: 68–111px;    /* Maddox = 111px, допустимо 68–80px */
  padding: 0 40px;
  background: rgba(9,25,59,0.97);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.14);
  position: sticky;
  top: 0;
}
```

| Параметр | Maddox | LIMIK |
|----------|--------|-------|
| Высота | 111px | 68–80px |
| Side padding | 40px | 40px |
| Background | белый | `#09193B` 97% opacity |

---

## Полный CSS-файл переменных

```css
/* ════════════════════════════════
   LIMIK INTERNATIONAL — CSS VARS
   Design System v1.0
════════════════════════════════ */
:root {
  /* Colors */
  --navy-dark:   #09193B;
  --navy-mid:    #0F2656;
  --blue:        #206CB9;
  --blue-lt:     #4A8FD4;
  --gold:        #FFCF0B;
  --gold-hover:  #DDB800;
  --white:       #FFFFFF;
  --text-1:      #C4D4E8;
  --text-2:      #7090B0;
  --text-3:      #3A5570;
  --border:      rgba(255,255,255,0.07);
  --border-2:    rgba(255,255,255,0.14);

  /* Typography */
  --font:        'REM', sans-serif;

  /* Spacing */
  --section:     80px;
  --section-lg:  120px;
  --section-sm:  48px;
  --container:   1360px;
  --side-pad:    40px;
  --card-pad:    24px;
  --gap:         16px;
  --gap-lg:      70px;

  /* Shape */
  --radius:      0px;   /* промышленный стиль */
}
```

---

## Референс: Maddox.com токены (оригинал)

### Шрифты Maddox
| Роль | Шрифт |
|------|-------|
| Заголовки | `Trimposter, Impact, sans-serif` |
| Тело | `Suisseintl, Arial, sans-serif` |

### Размеры Maddox
| Элемент | Размер | Вес | Line-height |
|---------|--------|-----|-------------|
| H1 `.display-xl` | 120px | 400 | 102px |
| H2 `.display-l` | 60px | 400 | 52px |
| Display M | 48px | 400 | 43px |
| Body | 16px | 400 | 24px |
| Caption | 14px | 600 | 16px / ls:1.4px |
| Button | 18px | 700 | — |

### Цвета Maddox
```css
--black:    #161616;
--orange:   #f65e1e;   /* PRIMARY CTA */
--grey:     #f9f8f6;   /* фон карточек */
--silver:   #c7c6c4;   /* бордеры */
--green:    #575c41;
```

### Спейсинг Maddox
| Класс | Значение |
|-------|----------|
| Container max-width | 1360px |
| Side padding | 40px |
| Section padding S | 80px |
| Section padding L | 120px |
| Grid gap | 16px |
| Products gap | 70px |
| Card padding | 24px |
| Nav height | 111px |
| Border-radius | **0px** |

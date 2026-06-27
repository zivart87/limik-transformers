# LIMIK International — Инструкция для разработки страниц

## Главное правило сессии

Как только в процессе работы зафиксировано новое правило, соглашение или решение — **сразу обновить этот файл**. Не откладывать на конец сессии. Обновление CLAUDE.md + `git push` — часть каждого зафиксированного изменения.

---

## Перед созданием любой новой страницы

**Шаг 1 — Активировать скил дизайна**

Обязательно вызови скил `frontend-design` перед тем как писать любую разметку или стили:

```
/frontend-design
```

**Шаг 2 — Прочитать файл стилей**

Прочитай [`assets/css/limik.css`](assets/css/limik.css) — это единственный источник правды по дизайн-системе.

В нём содержится:
- CSS-переменные цветов и шрифтов (`--navy-dark`, `--blue`, `--gold` и др.)
- Контейнер: `max-width: 1360px; padding: 0 40px`
- Классы bg-helpers: `.bg-dark`, `.bg-mid`, `.bg-white`, `.bg-offwhite`
- Паддинги секций: `.section` (120px), `.section-lg` (160px), `.section-sm` (64px)
- Теги: `.tag`, `.tag-gold`, `.tag-blue`, `.tag-done`, `.tag-now`, `.tag-plan`
- Кнопки: `.btn`, `.btn-gold`, `.btn-outline-white`, `.btn-outline-dark`, `.btn-lg`
- Заголовок секции: `.sec-header`
- Навигация (полная): `.nav`, `.nav-top-strip`, прозрачное состояние `.nav--transparent`
- CTA-полоса: `.cta-band`, `.cta-band-inner`
- Футер T3: `.footer-t3`, `.footer-left`, `.footer-right`, `.footer-cols`

## Структура новой страницы

Каждая новая страница подключает общий файл стилей:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Название страницы — LIMIK International</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=REM:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/limik.css">
  <style>
    /* Только стили, специфичные для этой страницы */
  </style>
</head>
```

> Для страниц в корне (не в подпапке): `href="assets/css/limik.css"`

## Логотипы

- **Тёмный фон (nav в прозрачном состоянии, футер):** `assets/images/logo-bg.svg`
- **Светлый фон (nav обычный):** `assets/images/logo.svg` с классами `logo-dark` / `logo-light`

Пример из `company/index.html`:
```html
<a href="../" class="nav-logo">
  <img class="logo-dark" src="../assets/images/logo.svg" alt="LIMIK">
  <img class="logo-light" src="../assets/images/logo-bg.svg" alt="LIMIK">
</a>
```

## Деплой — автоматический через GitHub

Vercel подключён к GitHub репозиторию `zivart87/limik-transformers`.  
**Каждый `git push` автоматически деплоит на `www.limiktransformers.com`.**

После каждого изменения файлов обязательно выполни:

```bash
git add <изменённые файлы>
git commit -m "описание изменений"
git push origin main
```

Вручную `vercel deploy` больше не нужен.

## Структура файлов

```
assets/
  css/limik.css        — дизайн-система (единственный источник правды)
  images/              — все логотипы, фото, SVG
  video/               — видео (hero.mp4, banner.mp4)
company/index.html     — страница о компании
index.html             — главная страница
vercel.json
```

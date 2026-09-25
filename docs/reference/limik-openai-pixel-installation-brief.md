# LIMIK — установка OpenAI Ads Pixel на limiktransformers.com

**Для:** Igor
**От:** Zivart
**Цель:** установить отслеживание конверсий для запуска рекламы в ChatGPT Ads
**Срок:** до запуска кампании (кампания на паузе до готовности)

---

## Что нужно сделать — общая картина

Две части, обе на сайте:

1. **Base pixel** — устанавливается **один раз** в `<head>` на **всех страницах** сайта. Отвечает за отслеживание визитов и работу Enhanced Matching (автоматическое хеширование email/phone из форм для attribution).

2. **Event snippet** — устанавливается **на 4 продуктовых лендингах**, срабатывает **только при успешном submit формы** Register Interest. Это событие лида, которое OpenAI будет считать конверсией.

Оба фрагмента — обычный JavaScript, никакие библиотеки/зависимости не нужны, скрипт грузится с домена OpenAI.

---

## Часть 1. Base Pixel

### Код

Вставить целиком в `<head>`:

```html
<script>
  (function (w, d, s, u) {
    if (w.oaiq) return;
    var q = function () {
      q.q.push(arguments);
    };
    q.q = [];
    w.oaiq = q;
    var js = d.createElement(s);
    js.async = true;
    js.src = u;
    var f = d.getElementsByTagName(s)[0];
    f.parentNode.insertBefore(js, f);
  })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

  oaiq("init", {
    pixelId: "DDVVFiqsmMZjWmCLRLQDor",
  });
</script>
```

**Pixel ID:** `DDVVFiqsmMZjWmCLRLQDor` (уже вшит в код выше)

**На время тестирования** — можно добавить параметр `debug: true` в init для логирования активности пикселя в браузерную консоль:

```javascript
oaiq("init", {
  pixelId: "DDVVFiqsmMZjWmCLRLQDor",
  debug: true,
});
```

После подтверждения, что всё работает — `debug: true` убрать из прода.

**Официальная документация:** https://developers.openai.com/ads/measurement-pixel

### Куда установить

- **Где:** в `<head>` HTML-документа
- **На каких страницах:** на **всех** страницах домена limiktransformers.com (главная + все product pages + industries + company + все остальные)
- **Позиция:** как можно ближе к началу `<head>`, но после meta-тегов charset/viewport. Идеально — сразу после Google Tag Manager (если есть) или Google Analytics.
- **Требование от OpenAI:** только **один** base pixel на страницу. Если сайт на CMS/статическом генераторе — вставить в общий `<head>` template, не на каждой странице отдельно.

### Важно

- Скрипт асинхронный, страницу не тормозит
- **Cookie consent:** если на сайте есть cookie banner — pixel должен запускаться только после согласия пользователя на marketing cookies. Если такого баннера нет, а сайт таргетит US/UK/EU — стоит обсудить с юристом; для чистого US-таргета (наша ситуация) особых требований нет, но лучше добавить упоминание в privacy policy
- **Privacy Policy:** нужно добавить строку про использование OpenAI Ads Pixel и Enhanced Matching для attribution. Формулировку могу подготовить отдельно, если нужно

---

## Часть 2. Event Snippet — Lead Created

### Код

```javascript
oaiq("measure", "lead_created", { type: "customer_action" });
```

### Куда установить

Событие срабатывает **при успешной отправке формы Register Interest** на 4 страницах:

- `/transformers/power`
- `/transformers/autotransformers`
- `/transformers/gsu`
- `/transformers/mobile`

### Как именно — зависит от того, как реализована форма

Здесь нужно твоё решение, Igor — я не знаю, как форма Register Interest устроена технически. Три сценария:

#### Сценарий A: Форма делает redirect на thank-you страницу

Например, после submit пользователь попадает на `/thank-you` или `/transformers/power/thanks`. Тогда:
- Вставить event snippet в `<head>` **этой thank-you страницы**, после base pixel
- Гарантия срабатывания: сработает **только** после реального submit
- **Рекомендуемый вариант** — самый надёжный

#### Сценарий B: Форма отправляется через AJAX, без перезагрузки страницы

Тогда:
- Вставить event snippet **внутрь success callback** JavaScript-кода формы
- Пример:
  ```javascript
  fetch('/api/register-interest', { method: 'POST', body: formData })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        oaiq("measure", "lead_created", { type: "customer_action" });
        // ... остальная логика показа "спасибо"
      }
    });
  ```
- **Важно:** только на реальный success, не на клик кнопки Submit. Иначе засчитаются попытки, где форма упала на валидации или сервер вернул ошибку — метрики поедут

#### Сценарий C: Форма отправляется через сторонний сервис (HubSpot / Typeform / Google Forms / etc.)

Если так — напиши какой именно, тогда решим отдельно. У большинства сервисов есть свои webhooks или redirect после submit, к которому можно привязаться.

---

## Что pixel делает автоматически (из документации OpenAI)

Полезно знать, чтобы не дублировать логику вручную:

- **Captures `oppref` из URL** — privacy-preserving identifier, который OpenAI прикрепляет к кликам по объявлениям. Пиксель сам ловит его из query string лендинга
- **Store `oppref` в first-party cookie `__oppref`** — чтобы последующие визиты того же юзера были связаны с исходным кликом. Никакой отдельной cookie-обработки не нужно
- **Adds current page origin as `source_url`** — для attribution
- **Timestamps + batches events** — SDK сам группирует близкие события, чтобы не спамить сеть

**Это значит:** Igor'у **не нужно** ничего парсить из URL, обрабатывать cookies или ставить timestamp вручную. Всё берёт на себя SDK.

## Enhanced Matching — что делать (спойлер: ничего)

В настройках pixel включён Enhanced Matching. Это значит:
- Pixel автоматически находит поля формы (`type="email"`, `name="email"`, `name="phone"` и т.п.)
- Хеширует значения через SHA-256 **прямо в браузере пользователя**
- Отправляет OpenAI только хеши, не исходные данные

**От тебя ничего не требуется** — просто убедись, что у полей формы есть стандартные `name` и `type` атрибуты (`type="email"`, `name="email"`, `type="tel"`, `name="phone"` и т.п.). Если поля называются как-то нестандартно (`name="user_contact_1"`), Enhanced Matching их не найдёт.

---

## Как проверить, что всё работает

### Способ 1: Debug mode + консоль браузера (проще всего)

1. При установке добавь `debug: true` в init (см. код выше)
2. Открой сайт в браузере (Chrome/Firefox), F12 → Console
3. Обнови страницу — должны появиться логи от `oaiq` SDK
4. Заполни форму Register Interest на `/transformers/power`, submit → в консоли должно появиться сообщение о firing события `lead_created`

### Способ 2: Network tab

1. F12 → Network
2. В фильтре сети введи `bzrcdn` или `bzr.openai.com`
3. Обнови страницу — должен загрузиться `https://bzrcdn.openai.com/sdk/oaiq.min.js` (это base pixel подгрузился)
4. Заполни форму, submit → должен пойти POST-запрос на `bzr.openai.com/v1/...` с event data

### Способ 3: Real-time поток событий в Ads Manager

В OpenAI Ads Manager → Конверсії → **вкладка "Потік подій"** — там события отображаются в реальном времени. Кнопка "Запустити опитування" — включает live-стрим. Задержка ~30 сек. Это самый чистый способ подтвердить, что события реально долетают до OpenAI, а не только уходят из браузера.

Скрин любого из трёх способов с сработавшим событием — достаточно для подтверждения. После этого `debug: true` можно убрать из прода.

---

## Что мне нужно от тебя обратно

1. **Подтверждение**, что base pixel установлен во всех templates сайта
2. **Ответ на вопрос по форме:** какой сценарий из A/B/C выше подходит для нашей формы Register Interest? (это определит, куда именно вставлять event snippet)
3. **Скрин Network tab** с сработавшими запросами на bzr.openai.com (для верификации)

После этого запускаю кампанию.

---

## Технические детали для справки

- **Домен запросов пикселя:** `bzr.openai.com` (может понадобиться для whitelist в CSP-политике сайта, если она есть)
- **Content Security Policy:** если на сайте настроен CSP header, добавить в `script-src` домен `bzr.openai.com` и `openai.com`
- **Размер скрипта:** ~10 KB gzipped, загружается асинхронно
- **Impact на PageSpeed:** минимальный (async load), не влияет на LCP/FID/CLS

---

## На потом (не сейчас)

Есть также **server-side Conversions API** (curl endpoint на bzr.openai.com/v1/events) — это дублирующий канал отправки событий с бэкенда, обходит adblock'и и iOS/Safari cookie restrictions. **В фазе 1 не внедряем** — pixel достаточно. Вернёмся к этому через 3–4 недели, если увидим потерю событий из-за блокировщиков.

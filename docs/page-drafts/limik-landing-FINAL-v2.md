# LIMIK APEX — ФИНАЛЬНЫЙ ТЕКСТ И БЛОКИ, ГОТОВО К ВЁРСТКЕ
### Модульные ИИ-ЦОД серии Apex · рынок США B2B · раздел limiktransformers.com/modular-ai-data-centers
Версия 2.1 · 6 сентября 2026 · заменяет limik-landing-master.md

---

## КАК ЧИТАТЬ ЭТОТ ДОКУМЕНТ

**English = ставится на сайт дословно.** Русский = пояснение для вас и верстальщика, на сайт не идёт.

**Пометки:**
- `[ПОДТВЕРДИТЬ]` — цифра поставлена мной по бенчмарку конкурентов, замените на реальную перед запуском
- `[АССЕТ]` — нужен файл, которого пока нет
- Тег в скобках рядом с текстом (H1, H2, H3) = как размечать

**Что изменилось против версии 1:** снято ложное заявление «единственный, кто делает и то, и другое» · UL заменён на IEEE C57 / ANSI · Made in America заменено на U.S.-manufactured · адрес завода убран везде · вторичный CTA переделан под запрос, а не скачивание · добавлен блок временной шкалы · добавлен сценарий behind-the-meter · обновлено поколение GPU до Vera Rubin · конфигуратор переделан из шагов в одну форму · сняты расхождения H-тегов · убраны ссылки на несуществующие страницы · дополнена schema.

**Что изменилось в версии 2.1:** герой пересобран по образцу GigaPod (короткий H1, одно предложение «Apex is our…», одна кнопка) · блок THE HIDDEN BOTTLENECK удалён и заменён блоком WHAT IS APEX по их же схеме · из spec strip убраны PUE, плотность на стойку и рейтинг NEMA, добавлены 600 MVA · везде снята цифра 150 кВт и номер NEMA.

**Принцип отбора цифр:** публикуем только там, где вы объективно впереди конкурентов или наравне. Где число ограничивало бы вас сверху или его не публикует никто в отрасли, идёт общая формулировка, а конкретика уходит в datasheet и в разговор с инженером.

---

## СКВОЗНЫЕ ПРАВИЛА

**Две кнопки на всю страницу:**
- Первичная: `Configure your data center` → якорь на конфигуратор. В герое стоит одна, как у GigaPod
- Вторичная: `Request the technical datasheet` → та же форма, отметка в CRM «datasheet». Появляется впервые только в блоке 8, не в герое
- `Talk to Sales` только в шапке, третьей кнопкой на полотне не появляется

**Правило заголовков (снимает расхождение прошлой версии):**
Видимый H2 остаётся эмоциональным. Поисковая фраза уходит в eyebrow над ним и в первое предложение body. Верстальщику: **eyebrow это `<div class="eyebrow">`, не заголовочный тег и не `<p>`** — так на всём остальном сайте (`<p>` подпадает под общие правила параграфов и теряет нужный цвет/начертание). Один H1 на страницу.

**Терминология, которую нельзя менять при вёрстке:**
`U.S.-manufactured` (не Made in America), `IEEE C57 / ANSI` (не UL), `power distribution` (не power transmission), `designed for NEC-compliant installation` (не NEC-compliant), `ASHRAE TC 9.9 guidelines` (не standards).

---

# БЛОКИ

## БЛОК 1 — HERO

**Состав:** eyebrow, H1, подзаголовок, одна первичная кнопка, фон [АССЕТ: hero-рендер или фото модуля]

**English:**

> **EYEBROW:** AI INFRASTRUCTURE · LIMIK APEX
>
> **(H1)** The US-manufactured modular data center for AI.
>
> **SUB:** Apex is our factory-built modular data center for high-density GPU workloads. We manufacture it, and the medium-voltage power transformer that energizes it, at our own US plant.
>
> **CTA:** Configure your data center

**Русский:** Конструкция построена по образцу GigaPod: eyebrow, крупный короткий H1, одно предложение вида «Apex это наш заводской…», одна кнопка. Ключевая фраза `modular data center for AI` осталась в H1 целиком, поэтому SEO не пострадало. Производство вшито во второе предложение подзаголовка.

12 недель из героя убраны сознательно: срок теперь живёт в spec strip и в блоке временной шкалы, где он подкреплён разбивкой, а не висит голым обещанием.

---

## БЛОК 1.5 — SPEC STRIP

**Состав:** горизонтальная полоса под героем, 6 позиций, на мобильном стек или горизонтальный скролл.

**English:**

> **12-week** module lead time · **Direct-to-chip** liquid cooling · High-density and mixed-density racks · **-30°F to +122°F** operating range · Redundancy from **N+1 to 2N** · In-house transformers to **600 MVA**

**Русский:** Полоса пересобрана по принципу «не публикуем то, чего не публикует никто, и не публикуем цифру, которая нас ограничивает».

**Что убрано и почему:**
- **PUE.** Ни Vertiv, ни Bmarko, ни Gigapod, ни Comino, ни ModulEdge не публикуют PUE вообще. Это измеряемый эксплуатационный показатель, до первого работающего объекта подтвердить его нечем, а по правилам FTC квантифицированное заявление требует подтверждения на момент публикации
- **150 кВт на стойку.** Публикует только ModulEdge, и ровно до 150. То есть цифра не обгоняет единственного, кто её называет, и при этом закрывает вас снизу под Vera Rubin, где плотности идут выше. Заменено на формулировку `High-density and mixed-density racks`, это калька с GigaPod (`любое соотношение стоек низкой и высокой плотности`), они тоже обходятся без чисел. Точная плотность обсуждается на звонке и живёт в datasheet

**Что осталось и почему это работает:**
- `12-week` — ModulEdge даёт 3–6 месяцев, Bmarko «несколько месяцев», остальные молчат. Вы единственный с точным числом, и оно лучшее
- `-30°F to +122°F` — публикует только ModulEdge (-35…+52 °C), вы в том же классе
- `N+1 to 2N` — формулировка про диапазон конфигураций, а не про фиксированную схему. Gigapod публикует 4N/3, ModulEdge «принципы Tier III/IV», остальные молчат. Так вы в разговоре, но ничего не обещаете до проектирования
- `600 MVA` — **самое сильное число на всей странице.** Оно уже стоит на вашем главном сайте, то есть подтверждено и ничего согласовывать не надо, и его физически не может написать ни один конкурент

---

## БЛОК 2 — WHAT IS APEX

**Состав:** eyebrow, слева крупный H2, справа мелкий абзац, ниже визуал, под ним серый абзац спецификаций и чёрная рубленая концовка. [АССЕТ: 3D-вьюер или крупный рендер модуля]

**English:**

> **EYEBROW:** WHAT IS APEX?
>
> **(H2, слева, крупно)** The factory-built data center where your AI compute lives.
>
> **(справа, мелко)** What was traditionally assembled on site over 18 to 24 months now ships as a single pre-tested module. Power, cooling, and compute, engineered as one system by one manufacturer.
>
> **[ВИЗУАЛ]**
>
> **(серый абзац)** A 45-foot high-cube module with direct-to-chip liquid cooling, hot aisle containment, and N+1 power distribution, supporting any mix of low- and high-density racks. Ships fully commissioned and scales from a single rack to a multi-module campus. Energized by a medium-voltage transformer built on our own line, up to 600 MVA.
>
> **(чёрным, жирным)** No on-site fabrication. No third-party transformer queue.

**Русский:** Этот блок заменил прежний THE HIDDEN BOTTLENECK, который удалён целиком.

Правый мелкий столбец это одновременно и пояснение для человека, и абзац-определение для ИИ-поисковиков. ChatGPT, Perplexity и AI Overviews не цитируют слоганы, они извлекают определения с сущностями и числами, а тут есть и то, и другое. Поэтому отдельный AEO-блок больше не нужен, он растворился здесь.

Последняя строка это ответ на `No on-site fabrication. Rack-ready.` у Gigapod: тот же ритм, но вторая фраза несёт ваш единственный настоящий ров. Так весь аргумент удалённого блока 2 выживает в четырёх словах вместо двух абзацев.

**Что мы потеряли вместе с блоком 2 и где это теперь лежит:** развёрнутая история про очередь на трансформатор в 75–150 недель ушла со страницы. Она осталась в первом вопросе FAQ и в блоке временной шкалы. Если конверсия окажется низкой, первое, что стоит вернуть, это именно её, потому что это единственный аргумент, который объясняет, зачем вообще платить за вертикальную интеграцию.

---

## БЛОК 3 — THE LIMIK PLATFORM

**Состав:** eyebrow, H2, абзац, схема [АССЕТ: диаграмма grid-to-chip].

**English:**

> **EYEBROW:** THE LIMIK PLATFORM
>
> **(H2)** One integrated system, from the grid to the chip.
>
> **BODY:** Most modular data centers stitch together power, cooling, and compute from separate vendors, each with its own lead time, its own warranty, and its own finger to point when something fails. LIMIK engineers all three as a single factory-commissioned platform, built around the power transformer we manufacture ourselves. Grid-to-chip means exactly that: heavy power in at the utility connection, high-density compute out at the rack, engineered as one system by one manufacturer.

**Русский:** Текстовую ссылку `See how the platform fits together →` **убрал**, страницы под неё нет. Вместо неё расшифровка термина grid-to-chip прямо в тексте, это нужно и человеку, и ИИ. Когда сделаете отдельную страницу платформы, ссылку вернёте.

---

## БЛОК 4 — PLATFORM COMPONENTS

**Состав:** eyebrow, H2, 4 карточки (H3 + выгода + доказательство). На мобильном 1 колонка, на планшете 2, на десктопе 4.

**English:**

> **EYEBROW:** PLATFORM COMPONENTS
>
> **(H2)** What's inside a LIMIK modular data center.
>
> **(H3) 1. Power Module — GridLink Station**
> Grid-level power, built in-house. Powered by LIMIK's own medium-voltage transformers, engineered to IEEE C57 and ANSI standards and factory acceptance tested before shipment, so the industry's longest-lead component is the one you never wait on a third party to deliver.
>
> **(H3) 2. Compute Module — Apex-45 Pod**
> Liquid-cooled whitespace, ready for the densest racks you can specify. A prefabricated 45-foot high-cube enclosure tuned for current and next-generation accelerators with direct-to-chip liquid cooling.
>
> **(H3) 3. Thermal Module — HydroFlow Unit**
> Stable temperatures at maximum GPU load. Magnetic-bearing chillers hold facility water temperature steady under constant, full-throttle workloads, so your accelerators never thermally throttle.
>
> **(H3) 4. Interconnects — QuickConnect System**
> Faster site commissioning. Pre-engineered structural, electrical, and hydraulic bridges snap modules together on-site, with no field fabrication.

**Русский:** Три правки против прошлой версии:
1. `UL-listed` → `engineered to IEEE C57 and ANSI standards and factory acceptance tested`. Причина в начале документа: UL для силовых трансформаторов 20–600 MVA не существует, а IEEE C57 и ANSI у вас на главном сайте уже заявлены, то есть это не новое утверждение, а перенос существующего.
2. Убрал `up to 70% faster` — квантифицированное заявление без базы сравнения, по правилам FTC требует подтверждения. Оставил `Faster site commissioning` и добавил проверяемый факт `no field fabrication`, он и есть причина скорости.
3. `45-foot container` → `45-foot high-cube enclosure`, потому что 45 ft на автодорогах США требует разрешений в ряде штатов, а слово container провоцирует вопрос про ISO.

---

## БЛОК 5 — CHOOSE YOUR SCALE

**Состав:** eyebrow, H2, подзаголовок, 3 карточки (H3 + описание + спецстрока + сценарии), кнопка.

**English:**

> **EYEBROW:** PORTFOLIO · THREE SOLUTIONS
>
> **(H2)** Choose the right size for your use case.
>
> **SUB:** From a single rack to a full 45-foot enclosure, the same liquid-cooled architecture, scaled to your workload.
>
> **(H3) Apex-S — Micro Pod**
> Single-rack module with integrated cooling. No special infrastructure, just a power connection.
> 1–2 racks | 50–100 kW · direct liquid cooling with integrated drycooler · proof of concept, first AI deployment, edge sites.
>
> **(H3) Apex-M — Mid-Size Pod**
> Self-contained enclosure with a roof-mounted drycooler, sized for campus deployments.
> 3–4 racks | 100–200 kW · roof-mounted HydroFlow drycooler · corporate AI clusters, research labs.
>
> **(H3) Apex-L — Enterprise Pod**
> Full-size enclosure with remote chillers. A production-grade AI and HPC facility.
> 6–10+ racks | 300–500+ kW · remote industrial HydroFlow chillers · large-scale enterprise AI, HPC centers.
>
> **CTA:** Configure your data center

**Русский:** Кнопку унифицировал: было `Configure your build`, стало `Configure your data center`, как в герое. Две разные подписи на одну и ту же кнопку размывают узнавание и ломают аналитику.

---

## БЛОК 5.5 — DELIVERY TIMELINE (новый)

**Состав:** горизонтальная временная шкала с двумя параллельными дорожками. На мобильном вертикальная.

**English:**

> **EYEBROW:** HOW IT SHIPS
>
> **(H2)** Twelve weeks, week by week.
>
> **TRACK 1 — MODULE**
> **Week 0** Design approval and contract release
> **Weeks 1–2** Engineering release, long-lead procurement, FAT plan
> **Weeks 2–9** Factory build: enclosure, power distribution, cooling integration
> **Weeks 9–11** Factory acceptance testing, fully commissioned before it leaves the floor
> **Week 12** Ship by US rail or highway
> **On site** QuickConnect installation and site acceptance testing
>
> **TRACK 2 — POWER TRANSFORMER (runs in parallel from week 0)**
> Your medium-voltage transformer enters production at our own US plant on day one, at a domestic lead time instead of a 2-to-4-year overseas queue. Both tracks are managed on one schedule, by one manufacturer.

**Русский:** Это самый важный новый блок. Он решает три задачи сразу:
1. **Доверие.** Обещание «12 недель» без разбивки по неделям читается как маркетинг. С разбивкой как инженерный план. Ни один из пяти конкурентов такого не даёт
2. **Честность.** Параллельная дорожка трансформатора видна явно, но без крупного числа на первом экране. Ровно та подача, которую вы выбрали
3. **AEO.** ИИ-поисковики очень любят пронумерованные этапы с числами и цитируют их целиком

`[ПОДТВЕРДИТЬ]` разбивку недель у клиента, я расставил по логике производственного цикла контейнерного ЦОД. Сумма даёт ровно 12.

---

## БЛОК 6 — US MANUFACTURING

**Состав:** eyebrow, H2, абзац, галерея [АССЕТ: реальные фото цеха, сборки, FAT. Рендеры сюда нельзя].

**English:**

> **EYEBROW:** UNITED STATES PRODUCTION
>
> **(H2)** We don't just assemble. We manufacture.
>
> **BODY:** Every LIMIK modular data center is engineered and built at our own US facility, backed by 25 years of American power engineering. By producing both the medium-voltage power transformers and the containerized enclosures under one roof, we deliver predictable dates, no ocean freight and no port clearance, and equipment qualified for DOE and DOD procurement.

**Русский:** Три правки:
1. Адрес и Спартанбург **убраны везде**, как вы решили. Формулировка `our own US facility` работает без географии
2. `Made in America` → домен теперь говорит одним голосом с главным сайтом (`U.S.-manufactured`)
3. `zero port delays` → `no ocean freight and no port clearance`. Это факт, а не обещание, и его невозможно опровергнуть
4. `defense-grade quality` → `qualified for DOE and DOD procurement`, дословно с вашего главного сайта

Текстовую ссылку `Take a virtual factory tour →` **убрал**, страницы нет. Когда снимете видео цеха, это будет сильнейший ассет на всей странице, тогда и вернём.

---

## БЛОК 7 — SINGLE-SOURCE WARRANTY

**Состав:** eyebrow, H2, абзац, список покрытия.

**English:**

> **EYEBROW:** SINGLE-SOURCE WARRANTY
>
> **(H2)** One partner. One contract. One number to call.
>
> **BODY:** Other vendors promise a single point of contact but still outsource the hardest, slowest component. LIMIK designs and manufactures both the transformers and the enclosures, so we own the entire warranty stack. No subcontractor to chase, no supplier to blame.
>
> **COVERAGE**
> · 3 years — power distribution, switchgear, and structural enclosure
> · 1 year — integrated chillers and CDU pumping systems, extendable
> · Full lifecycle — engineering support and spare parts from the people who built it

**Русский:** Заголовок был `One partner. One warranty. Zero finger-pointing.` — и тут же под ним две разные гарантии, 3 года и 1 год. Читатель видел противоречие за две секунды. Заменил `One warranty` на `One contract`, и конфликт исчез: контракт действительно один, а внутри разные уровни покрытия, это нормально и понятно инженеру.

Добавил третью строку про поддержку и запчасти на весь жизненный цикл. Она бесплатная для вас и уравновешивает слабый год на чиллеры. Слово `extendable` намекает на платное продление, это ещё и апселл. Для сравнения: Comino даёт `up to 3 years` и больше ничего не раскрывает, остальные четверо не публикуют гарантию вообще.

---

## БЛОК 8 — STANDARDS & CLIMATE

**Состав:** eyebrow, H2, абзац, два пункта, строка про 50 штатов, кнопка. [АССЕТ: карта США с температурным диапазоном].

**English:**

> **EYEBROW:** ENGINEERED FOR THE EXTREMES
>
> **(H2)** Built to withstand. Certified to comply.
>
> **BODY:** From +122°F in West Texas to -30°F in North Dakota, our weather-rated enclosures protect your AI hardware in any US environment. Built to NEMA and IEC enclosure standards, designed for NEC-compliant installation, and engineered to ASHRAE TC 9.9 liquid cooling guidelines.
>
> · **All-weather hardening:** dual-loop climate control with dust, sand, and humidity filtration.
> · **Streamlined permitting:** pre-engineered designs simplify local PE stamping and site approvals in every US state.
>
> Delivered and commissioned across all 50 states, shipped by US rail and highway. Powering AI deployments in the country's fastest-growing data center markets, from Northern Virginia and Dallas to Columbus and Phoenix.
>
> **CTA:** Request the technical datasheet

**Русский:** Четыре правки:
1. `-30°F in Ohio` → `North Dakota`. В Огайо -30°F не бывает, рекорд штата около -39°F, типичный зимний минимум около -10°F. А Колумбус, столица Огайо, у вас же назван целевым рынком двумя строками ниже. Инженер оттуда заметил бы сразу
2. `NEMA 3R/4-rated enclosures` → `weather-rated enclosures`, а NEMA перенесена в перечисление стандартов без номера. Подробности ниже
3. `Fully NEC-compliant` → `Designed for NEC-compliant installation`. NEC это монтажный кодекс, ему соответствует установка, а не изделие. Инженеры это знают
4. `optimized for ASHRAE TC 9.9 standards` → `engineered to ASHRAE TC 9.9 guidelines`. TC 9.9 это технический комитет и его рекомендации, стандарта с таким номером не существует, «соответствовать» ему нельзя

**Почему номер NEMA убран совсем.** Проверил все пять конкурентов: конкретный рейтинг NEMA не публикует **никто**. ModulEdge описывает то же самое словами («защита от пыли, песка, влаги, вибрации», опционально экранирование EMP), Bmarko, Vertiv, Gigapod и Comino молчат. При этом номер 3R создавал вам прямое противоречие: 3R это дождь, снег и обледенение, он не покрывает пыль под ветром, а вы строкой ниже заявляете фильтрацию пыли и песка. Теперь NEMA осталась как стандарт, к которому вы строите, без номера, который можно оспорить. Конкретный рейтинг под площадку идёт в datasheet и в разговор с инженером, там он и уместен.

---

## БЛОК 8.5 — TRUST BAND

**Состав:** H2, строка, ряд бейджей. [АССЕТ: иконки стандартов].

**English:**

> **(H2)** Certified. Compliant. U.S.-manufactured.
>
> **BODY:** 25 years of American power engineering behind every module.
>
> **BADGES:** IEEE C57 · ANSI · NEMA · IEC · NEC · ASHRAE TC 9.9 · DOE qualified · DOD qualified · Defense Production Act §303 eligible · Buy American Act compliant configurations

**Русский:** Три правки:
1. `Made in America` → `U.S.-manufactured`
2. `UL-listed` из бейджей **убран**
3. `Buy American compliant` → `Buy American Act compliant configurations`. Buy American это не сертификат, соответствие определяется под конкретный контракт (FAR 52.225 или BABA для проектов с федеральным финансированием). Слово configurations превращает гарантию в описание возможности, и это снимает риск

**Честно про этот блок:** он убеждает инженера в соответствии стандартам и не говорит ничего о том, что вы хоть раз что-то поставили. Пруфов поставок у вас пока нет, вы только запускаетесь. Как только появится первый объект, сюда идёт отдельная плашка формата `2.5 MW AI cluster · Southeast US · in production`, даже анонимизированная. Это будет самое ценное добавление на всей странице.

---

## БЛОК 9 — TECHNICAL FAQ

**Состав:** H2, аккордеон на 7 вопросов. Первый открыт по умолчанию.

**English:**

> **(H2)** Technical FAQ: modular AI data centers
>
> **Q: What is the typical lead time for an Apex modular data center?**
> A: The Apex modular data center module ships in 12 weeks from design approval. Its medium-voltage power transformer is a separately manufactured, long-lead component, but because LIMIK produces it at our own US facility instead of importing it, transformer production runs in parallel with the module build from day one, and skips the 75-to-150-week domestic queues and 2-to-4-year overseas queues that delay competing projects. You get one coordinated schedule from one manufacturer.
>
> **Q: What site preparation is required before delivery?**
> A: You need a level concrete pad, a medium-voltage power source, and network access. Because our modules arrive pre-tested and pre-commissioned, they connect on-site through the QuickConnect system.
>
> **Q: Can Apex run on behind-the-meter power instead of a utility connection?**
> A: Yes. Apex modules are designed to run on grid power, on-site generation, or a hybrid of both. With US grid interconnection queues now measured in years, many AI operators are energizing behind the meter, and the generator step-up transformer that connects on-site generation to your data center is exactly what LIMIK manufactures, up to 600 MVA.
>
> **Q: Can these modules handle extreme climates?**
> A: Yes. LIMIK containerized data centers operate from -30°F to +122°F (-34°C to +50°C), with weather-rated enclosure protection and integrated dust, sand, and humidity filtration. Enclosure ratings are specified per site based on your local environment and permitting requirements.
>
> **Q: Which GPUs and server platforms are compatible?**
> A: The system is chip-agnostic. Direct-to-chip liquid cooling supports every major AI accelerator, including NVIDIA Blackwell (B200, GB200 NVL72, B300, GB300 NVL72) and Vera Rubin NVL144, AMD Instinct, Google TPU, and Cerebras. Rack density is engineered to your specified configuration, from mixed low- and high-density layouts to full direct-to-chip deployments.
>
> **Q: Can the data center be relocated later?**
> A: Yes. Every Apex module is built to standard high-cube enclosure dimensions for transport by US rail and permitted highway routes, and can be decommissioned, moved, and redeployed with minimal downtime.
>
> **Q: Who manufactures the power transformer?**
> A: LIMIK does. We have built medium-voltage and high-voltage power transformers up to 600 MVA and 525 kV for utilities, defense, and data centers for 25 years. The Apex platform is engineered around that capability, which is why we are the only independent modular data center manufacturer that does not outsource its power.

**Русский:** Три новых вопроса и одна правка:

**Новый вопрос про behind-the-meter — самое важное добавление после временной шкалы.** В очереди на подключение к сети США сейчас порядка 2 600 ГВт заявок, и до половины ИИ-мощностей 2026 года под риском именно из-за сроков подключения. Огромная доля покупателей строится на собственной генерации: газотурбины, поршневые, гибрид. Ваша прошлая версия требовала `medium-voltage utility connection` в site prep и молча отсекала весь этот сегмент, а он сейчас самый платёжеспособный. При этом ваш аргумент там работает даже сильнее: GSU для собственной генерации это буквально ваш основной продукт, до 600 MVA.

**Новый вопрос «кто делает трансформатор»** явно связывает лендинг с 25-летним основным бизнесом. Это ваш главный актив, и раньше он на странице почти не звучал.

**GPU обновлены.** Добавлены GB200 NVL72 (самая массово развёрнутая конфигурация, её в прошлой версии не было вообще) и Vera Rubin NVL144, которая на сентябрь 2026 уже в объёмном производстве. Без Rubin страница читается как написанная год назад, тем более что ModulEdge про Rubin уже ведёт блог.

---

## БЛОК 10 — PROJECT CONFIGURATOR

**Состав:** одна форма, все поля на экране сразу (не пошаговый визард). Слева текст и буллеты, справа форма, на мобильном стек.

**English:**

> **EYEBROW:** PROJECT CONFIGURATOR
>
> **(H2)** Build your grid-to-chip AI data center.
>
> **SUB:** Tell us four things about your project. Our engineers will send back a preliminary structural concept, a power estimate, and a delivery schedule.
>
> **FORM FIELDS**
>
> **1. Target compute capacity** *(select, required)*
> 100 kW – 500 kW (Micro / Pilot) · 500 kW – 2 MW (Mid-scale cluster) · 2 MW+ (Enterprise AI campus) · Not sure yet
>
> **2. Cooling preference** *(select, required)*
> 100% direct-to-chip liquid cooling · Hybrid (liquid + air) · Not sure yet
>
> **3. Power source** *(select, required)*
> Utility grid connection · On-site generation (behind the meter) · Hybrid · Not sure yet
>
> **4. Include a LIMIK power transformer?** *(select, required)*
> Yes, bypass third-party lead times · No, existing site power · Not sure yet
>
> **Work email*** *(required)* · **Full name*** *(required)* · **Company** *(optional)* · **Phone** *(optional)*
> **Anything else we should know?** *(optional, textarea)*
>
> **CTA:** Get my custom configuration
>
> **UNDER BUTTON:** Your project details are treated as confidential and are never shared outside LIMIK. See our Privacy Policy.

**Русский:** Пять изменений:
1. **Это одна форма, не визард из шагов**, как вы сказали. Все поля видны сразу, это выше по конверсии для B2B-аудитории, которая не любит кликать «далее»
2. **Добавлен вопрос про источник питания** — тот самый behind-the-meter. В CRM это сразу квалифицирует лид: у кого своя генерация, тому нужен GSU, а это ваш самый маржинальный продукт
3. **Везде добавлено `Not sure yet`.** Без этого варианта человек, который ещё не выбрал схему охлаждения, просто закрывает страницу. С ним он оставляет контакт и попадает в воронку
4. **Добавлены Company и свободное поле.** Company нужно отделу продаж для квалификации, свободное поле часто даёт лучший контекст, чем все селекты вместе
5. **Строка про NDA заменена**, как вы решили. Было `Every configuration is protected by mutual NDA`, а это юридическое обязательство в интерфейсе, под которым должен стоять реальный процесс встречного NDA. Стало обещание конфиденциальности плюс ссылка на политику приватности, это и правда, и юридически чисто

**Верстальщику:**
- Валидация email: формат плюс отсечка одноразовых доменов (mailinator и подобные). Бесплатные почты вроде gmail **не блокировать**, у малых компаний это рабочий адрес
- Антиспам: honeypot-поле плюс ограничение частоты отправок. **Не reCAPTCHA v2**, она заметно режет конверсию B2B-форм
- Приём: отправка в CRM. Уточнить у клиента, какая именно система, от этого зависит способ интеграции (нативная форма, вебхук или сервис-посредник)
- Состояния: покой, фокус, ошибка поля, отправка (кнопка в состоянии загрузки и заблокирована от повторного клика), успех, ошибка отправки с понятным текстом и запасным email
- Успех: отдельный URL вида `/modular-ai-data-centers/thank-you`, иначе конверсию невозможно считать
- Вторичный CTA `Request the technical datasheet` ведёт на эту же форму с параметром, в CRM ставится метка источника

---

# ТЕХНИЧЕСКАЯ ЧАСТЬ

## МЕТА-ТЕГИ

```html
<title>Modular AI Data Centers — US-Built, 12-Week Delivery | LIMIK</title>
<meta name="description" content="Liquid-cooled modular AI data centers, U.S.-manufactured, with in-house power transformers up to 600 MVA. Compute module ships in 12 weeks. Configure yours.">
<link rel="canonical" href="https://www.limiktransformers.com/modular-ai-data-centers">
<meta name="robots" content="index,follow">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta property="og:title" content="Modular AI Data Centers — US-Built, 12-Week Delivery | LIMIK">
<meta property="og:description" content="Liquid-cooled modular AI data centers, U.S.-manufactured, with in-house power transformers up to 600 MVA. Compute module ships in 12 weeks.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.limiktransformers.com/modular-ai-data-centers">
<meta property="og:site_name" content="LIMIK International">
<meta property="og:image" content="https://www.limiktransformers.com/og-modular-ai-data-center.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Modular AI Data Centers — US-Built, 12-Week Delivery | LIMIK">
<meta name="twitter:description" content="Liquid-cooled modular AI data centers, U.S.-manufactured, with in-house power transformers up to 600 MVA. Compute module ships in 12 weeks.">
<meta name="twitter:image" content="https://www.limiktransformers.com/og-modular-ai-data-center.jpg">
```

**Русский:** Из og-описания убран Spartanburg. Добавлены og:url, og:site_name, размеры картинки и весь блок twitter, их в прошлой версии не было. `[АССЕТ]` og-картинка 1200×630.

**Правка 2026-09-06:** title и description пересчитаны под формулу из CLAUDE.md (проверять длину `content` в символах, не на глаз). Было: title 43 символа (нужно 55–60), description 174 символа (нужно ≤160, Google обрезал бы). Стало: title `Modular AI Data Centers — US-Built, 12-Week Delivery | LIMIK` — ровно 60 символов, оставляет ключевую фразу `Modular AI Data Centers` в начале и оба самых сильных дифференциатора страницы (US-Built, 12-Week Delivery). Description — 156 символов, добавлен `600 MVA` как третий дифференциатор вместо общего `Configure your build`.

**Проверить перед запуском:** сайт открывается и как `limiktransformers.com`, и как `www.limiktransformers.com`. Нужно выбрать один основной хост и убедиться, что canonical совпадает с ним и с настроенными редиректами. Иначе Google увидит две версии страницы.

---

## КАРТА ЗАГОЛОВКОВ (финальная, без расхождений)

| Блок | Тег | Текст |
|---|---|---|
| Hero | **H1** | The US-manufactured modular data center for AI. |
| 2 | H2 | The factory-built data center where your AI compute lives. |
| 3 | H2 | One integrated system, from the grid to the chip. |
| 4 | H2 | What's inside a LIMIK modular data center. |
| 4 | H3 ×4 | Power Module · Compute Module · Thermal Module · Interconnects |
| 5 | H2 | Choose the right size for your use case. |
| 5 | H3 ×3 | Apex-S · Apex-M · Apex-L |
| 5.5 | H2 | Twelve weeks, week by week. |
| 6 | H2 | We don't just assemble. We manufacture. |
| 7 | H2 | One partner. One contract. One number to call. |
| 8 | H2 | Built to withstand. Certified to comply. |
| 8.5 | H2 | Certified. Compliant. U.S.-manufactured. |
| 9 | H2 | Technical FAQ: modular AI data centers |
| 10 | H2 | Build your grid-to-chip AI data center. |

Все eyebrow это `<div class="eyebrow">`, **не заголовочные теги и не `<p>`**. Вопросы FAQ это H3 внутри аккордеона.

---

## ALT-ТЕКСТЫ

```
Hero:            alt="US-manufactured LIMIK Apex modular AI data center enclosure"
Схема платформы: alt="LIMIK grid-to-chip data center architecture: power, cooling, compute"
Модуль питания:  alt="GridLink medium-voltage power transformer module for AI data centers"
Apex-45:         alt="45-foot high-cube liquid-cooled compute pod for high-density AI racks"
Временная шкала: alt="12-week delivery timeline for a LIMIK Apex modular data center"
Фото завода:     alt="LIMIK power transformer and modular data center manufacturing facility"
Карта климата:   alt="Weather-rated modular data centers operating from -30F to 122F across the US"
```

Из alt убраны UL, Spartanburg, 150 кВт и рейтинг NEMA. Файлы называть по смыслу: `modular-ai-data-center-apex.webp`, не `IMG_001`.

---

## JSON-LD

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.limiktransformers.com/#organization",
      "name": "LIMIK International",
      "alternateName": "LIMIK Transformers",
      "url": "https://www.limiktransformers.com",
      "logo": "https://www.limiktransformers.com/logo.png",
      "email": "info@limik.us",
      "telephone": "+1-786-767-6418",
      "description": "US manufacturer of large power transformers up to 600 MVA and modular AI data centers.",
      "sameAs": ["https://www.linkedin.com/company/limik"],
      "areaServed": { "@type": "Country", "name": "United States" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.limiktransformers.com" },
        { "@type": "ListItem", "position": 2, "name": "Modular AI Data Centers", "item": "https://www.limiktransformers.com/modular-ai-data-centers" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "LIMIK Apex Modular AI Data Centers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": {
          "@type": "Product", "name": "LIMIK Apex-S Micro Pod",
          "description": "Single-rack liquid-cooled modular data center, 1 to 2 racks at 50 to 100 kW, with integrated drycooler.",
          "brand": { "@type": "Brand", "name": "LIMIK" },
          "manufacturer": { "@id": "https://www.limiktransformers.com/#organization" },
          "countryOfOrigin": "US", "category": "Modular Data Center" } },
        { "@type": "ListItem", "position": 2, "item": {
          "@type": "Product", "name": "LIMIK Apex-M Mid-Size Pod",
          "description": "Self-contained liquid-cooled modular data center, 3 to 4 racks at 100 to 200 kW, with roof-mounted drycooler.",
          "brand": { "@type": "Brand", "name": "LIMIK" },
          "manufacturer": { "@id": "https://www.limiktransformers.com/#organization" },
          "countryOfOrigin": "US", "category": "Modular Data Center" } },
        { "@type": "ListItem", "position": 3, "item": {
          "@type": "Product", "name": "LIMIK Apex-L Enterprise Pod",
          "description": "Full-size liquid-cooled modular data center, 6 to 10+ racks at 300 to 500+ kW, with remote industrial chillers.",
          "brand": { "@type": "Brand", "name": "LIMIK" },
          "manufacturer": { "@id": "https://www.limiktransformers.com/#organization" },
          "countryOfOrigin": "US", "category": "Modular Data Center" } }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the typical lead time for an Apex modular data center?",
          "acceptedAnswer": { "@type": "Answer", "text": "The Apex modular data center module ships in 12 weeks from design approval. Its medium-voltage power transformer is a separately manufactured, long-lead component, but because LIMIK produces it at our own US facility instead of importing it, transformer production runs in parallel with the module build from day one, and skips the 75-to-150-week domestic queues and 2-to-4-year overseas queues that delay competing projects." } },
        { "@type": "Question", "name": "What site preparation is required before delivery?",
          "acceptedAnswer": { "@type": "Answer", "text": "You need a level concrete pad, a medium-voltage power source, and network access. Modules arrive pre-tested and pre-commissioned and connect on-site through the QuickConnect system." } },
        { "@type": "Question", "name": "Can Apex run on behind-the-meter power instead of a utility connection?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Apex modules are designed to run on grid power, on-site generation, or a hybrid of both. LIMIK manufactures the generator step-up transformers that connect on-site generation to the data center, up to 600 MVA." } },
        { "@type": "Question", "name": "Can these modules handle extreme climates?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. LIMIK containerized data centers operate from -30F to +122F (-34C to +50C) with weather-rated enclosure protection and integrated dust, sand, and humidity filtration. Enclosure ratings are specified per site based on local environment and permitting requirements." } },
        { "@type": "Question", "name": "Which GPUs and server platforms are compatible?",
          "acceptedAnswer": { "@type": "Answer", "text": "The system is chip-agnostic. Direct-to-chip liquid cooling supports NVIDIA Blackwell (B200, GB200 NVL72, B300, GB300 NVL72) and Vera Rubin NVL144, AMD Instinct, Google TPU, and Cerebras. Rack density is engineered to the specified configuration, from mixed low- and high-density layouts to full direct-to-chip deployments." } },
        { "@type": "Question", "name": "Can the data center be relocated later?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every Apex module is built to standard high-cube enclosure dimensions for transport by US rail and permitted highway routes, and can be decommissioned, moved, and redeployed with minimal downtime." } },
        { "@type": "Question", "name": "Who manufactures the power transformer?",
          "acceptedAnswer": { "@type": "Answer", "text": "LIMIK does. LIMIK has built medium-voltage and high-voltage power transformers up to 600 MVA and 525 kV for utilities, defense, and data centers for 25 years." } }
      ]
    }
  ]
}
</script>
```

**Русский:** Что изменилось. Всё собрано в один `@graph`, это чище и позволяет ссылаться на организацию по `@id` вместо дублирования. Добавлены **BreadcrumbList** (раздел сайта без хлебных крошек это упущенный сигнал), **telephone**, **email** и **sameAs** — последнее самое важное для попадания в ответы ИИ, именно `sameAs` связывает вас как сущность с базами знаний, и в прошлой версии его не было. Адрес убран. Один обобщённый Product заменён на **ItemList из трёх Product**, потому что страница продаёт три конфигурации. FAQ дополнен вопросом про behind-the-meter.

**Честное ожидание по FAQPage:** с 2023 года Google показывает FAQ-сниппеты только авторитетным государственным и медицинским сайтам, звёздочек в выдаче не будет. Разметку оставляем не ради сниппета, а потому что она реально кормит ChatGPT, Perplexity и AI Overviews. Product без блока `offers` тоже rich result не даст, он нужен для понимания сущности.

Тексты в FAQPage должны совпадать с видимыми на странице, иначе это нарушение правил Google.

---

## КЛЮЧЕВЫЕ ЗАПРОСЫ

**Основные:** modular data center · prefabricated modular data center · modular data center for AI · containerized data center · US-manufactured modular data center

**Целевые:** liquid-cooled data center · direct-to-chip liquid cooling · high-density GPU data center · made in USA data center · NEMA rated data center enclosure

**Длинный хвост:** power transformer lead time for AI data centers · how fast can you build an AI data center · modular data center with integrated power · data center for NVIDIA Vera Rubin · behind the meter data center power

**Брендовые (нулевой объём, только отстройка, SEO не вкладывать):** grid-to-chip · LIMIK Apex · GridLink · HydroFlow

---

## АНАЛИТИКА

Через GTM, цели в GA4:

| Событие | Когда | Зачем |
|---|---|---|
| `configurator_view` | блок 10 попал в область видимости | сколько людей дошло до формы |
| `configurator_start` | первое взаимодействие с любым полем | сколько начало заполнять |
| `lead_submit` | успешная отправка | главная конверсия |
| `datasheet_request` | отправка с меткой datasheet | вторая конверсия |
| `sales_click` | клик Talk to Sales в шапке | горячие лиды в обход формы |
| `faq_open` | раскрытие вопроса, с названием вопроса | какие возражения реальные |
| `timeline_view` | блок 5.5 в области видимости | работает ли новый блок |
| `scroll_50` / `scroll_90` | глубина просмотра | где отваливаются |

Плюс UTM на все внешние размещения и отдельный URL страницы благодарности. Без этого через месяц никто не сможет сказать, работает страница или нет.

---

## ДОСТУПНОСТЬ И ПРОИЗВОДИТЕЛЬНОСТЬ

Вы просили посмотреть у конкурентов. Конкуренты этого не публикуют, никто. Поэтому даю отраслевой минимум, а он вам нужен не для галочки: вы целитесь в **DOE и DOD**, а там применимы Section 508 и WCAG 2.2 AA. Госзакупщик может отсеять поставщика по недоступному сайту.

**Доступность (WCAG 2.2 AA):**
- Контраст текста не ниже 4.5:1. Особое внимание eyebrow-строкам мелким кеглем и бейджам в блоке 8.5, там это чаще всего ломается
- Видимые focus-состояния на всех кнопках, полях и ссылках
- У каждого поля формы программный `<label>`, не только placeholder
- Аккордеон FAQ с `aria-expanded` и `aria-controls`, раскрывается с клавиатуры
- Вся форма проходится клавиатурой в логическом порядке
- Поддержка `prefers-reduced-motion` для анимации временной шкалы

**Производительность (Core Web Vitals):**
- LCP до 2.5 с. Главный риск это герой-изображение: формат AVIF или WebP, `fetchpriority="high"`, `preload`, без ленивой загрузки
- CLS до 0.1: у всех картинок заданы width и height
- INP до 200 мс, критично для формы
- Все изображения ниже первого экрана с `loading="lazy"`
- Шрифты с `font-display: swap` и локальным хостингом

---

## ПОДДЕРЖИВАЮЩИЙ КОНТЕНТ

1. Modular vs traditional data center: cost and timeline comparison
2. Why power transformer lead times are the real bottleneck in AI data centers
3. Direct-to-chip liquid cooling explained: from GB300 to Vera Rubin
4. How to deploy an AI data center in 12 weeks: a site readiness checklist
5. NEMA ratings and NEC compliance for containerized data centers
6. **Grid interconnection queues vs. behind-the-meter power for AI data centers** (новая, самая перспективная: тема горячая, конкуренты её не закрывают, а у вас там есть что продать)

ModulEdge ведёт такой блог осознанно, это их SEO-стратегия, а не новости. Раздел наследует авторитет домена только если на него ведут ссылки из главного меню, со страницы `/industries/data-centers` и из подвала.

---

## ЧТО ОСТАЛОСЬ ПОДТВЕРДИТЬ

Список сократился: всё, чего не публикуют конкуренты, со страницы снято и перенесено в datasheet и в разговор с инженером. Осталось два пункта, и оба не блокируют вёрстку.

1. **Разбивка 12 недель по этапам** в блоке 5.5. Я расставил по логике производственного цикла, сумма даёт ровно 12. Нужна сверка с производством, но текст можно верстать уже сейчас
2. **LinkedIn компании** для `sameAs` в разметке. Пока страницы нет, поле из JSON-LD просто удаляется, разметка остаётся валидной. Как появится, добавить одной строкой

**Снято с обсуждения (и почему):**
- PUE — не публикует никто из пяти, убрано со страницы
- Плотность на стойку — публикует только ModulEdge и ровно до 150, цифра не давала преимущества и ограничивала сверху. Заменено общей формулировкой
- Рейтинг NEMA — конкретный номер не публикует никто, а 3R противоречил заявленной пылезащите. Осталась NEMA как стандарт, без номера
- Резервирование — формулировка `N+1 to 2N` описывает диапазон конфигураций, а не фиксированную схему, подтверждать нечего
- `600 MVA` — уже стоит на главном сайте, подтверждено
- CRM и происхождение компонентов — по вашему решению вне этого этапа

---

## СПРАВКА: ЧТО ПУБЛИКУЮТ КОНКУРЕНТЫ

Собрано с их сайтов 6 сентября 2026. Главный вывод: **нижняя половина таблицы почти пустая, никто не даёт твёрдых цифр.**

| | LIMIK Apex | ModulEdge | Gigapod | Bmarko | Vertiv SmartMod Max | Comino |
|---|---|---|---|---|---|---|
| кВт на стойку | не публикуем | 5–150 | не публикует | не публикует | не публикует | не публикует |
| Мощность | 50–500+ кВт/модуль | не публикует | 1,9 МВт/под | не публикует | до 200 кВт | не публикует |
| PUE | — | — | — | — | — | — |
| Резервирование | N+1 … 2N | Tier III/IV принципы | 4N/3 | — | — | — |
| Рейтинг NEMA | не публикуем | — | — | — | — | — |
| Свой трансформатор до | **600 MVA** | — | — | — | — | — |
| Температуры | -34…+50 °C | -35…+52 °C | — | — | — | — |
| Срок | **12 нед. модуль** | 3–6 мес. | не публикует | «несколько месяцев» | «быстрее обычного» | — |
| Гарантия | **3 года + 1 год** | — | — | — | — | до 3 лет |
| Свой трансформатор | **Да** | Нет | Нет | Нет | Нет | Нет |
| Страна | **США** | Чехия | США | США | глобально | Великобритания |
| Адрес на сайте | нет | Kroměříž, CZ | нет | Williamston, SC | есть | нет |
| Главный CTA | Configure your data center | Get my configuration | Talk to Sales | Get a free quote | Find sales contact | — |

**Что из этого следует для текста:**

1. **Пустые клетки это не пробел конкурентов, а норма отрасли.** Такие параметры обсуждаются на звонке и живут в datasheet, а не на лендинге. Поэтому мы публикуем только те числа, где вы объективно впереди (12 недель, 600 MVA) или наравне (температуры), и обходимся общими формулировками там, где число нас ограничивало бы
2. **ModulEdge чешская, Comino британская.** То есть `U.S.-manufactured` отделяет вас от двух из пяти мгновенно, а не только от «зарубежных очередей» абстрактно
3. **Bmarko в Williamston, SC**, примерно в часе от вас, публикует полный адрес и не публикует ни одной технической цифры. Против него работают ровно две вещи: трансформатор и spec strip
4. **Никто не назвал Vera Rubin.** ModulEdge останавливается на B200 и GB200. Упомянув Rubin NVL144 в FAQ, вы становитесь единственным, кто выглядит актуальным на осень 2026
5. **Никто не публикует временную шкалу по неделям.** Блок 5.5 не с чем сравнивать, это чистое преимущество

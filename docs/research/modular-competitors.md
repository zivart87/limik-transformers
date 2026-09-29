# Модульні ЦОД: конкуренти, ринкові цифри, висновки для LIMIK Core

Складено 2026-09-29 за відкритими сторінками конкурентів (див. список). Мета: заповнити сторінку `modular-ai-data-centers/v2-draft.html` правдоподібними ринковими значеннями, поки немає даних клієнта, і визначити візуальну подачу.

> **Статус цифр.** Усі значення в розділі 4 — ринкові орієнтири, не підтверджені характеристики LIMIK. Перед запуском реклами й показом інвесторам клієнт має підтвердити хоча б «короткий список» (розділ 5). Ціни й строки гарантії не публікуємо, доки їх не дасть клієнт.

## 1. Список конкурентів

| # | Компанія / сторінка | Посилання | Тип |
|---|---|---|---|
| 1 | Eaton — Modular data center | https://www.eaton.com/us/en-us/catalog/low-voltage-power-distribution-controls-systems/modular-data-center.html | великий виробник електрообладнання, «data center in a box» |
| 2 | MDS (Оман) — Modular pre-fabricated DC | https://mds.com.om/modular-pre-fabricated-data-center-solutions/ | інтегратор, загальні обіцянки |
| 3 | Flex — Prefabricated modular DC solutions | https://flex.com/resources/prefabricated-modular-data-center-solutions | виробник: power pods, E-houses, IT-модулі |
| 4 | Network Insights — стаття про типи модулів | https://dc.mynetworkinsights.com/prefabricated-data-center-modules-and-its-types-get-to-know-its-pros-cons/ | оглядова стаття (довідкові діапазони) |
| 5 | Module-it (Франція) | https://www.module-it.com/en/ | turnkey-ЦОД під ключ |
| 6 | Helios — Colocation | https://www.helios.co/colocation | колокація під AI, модулі під GB300 |
| 7 | Advanced Giga — Containerized Data Hall | https://advancedgiga.ai/our-products/containerized-data-hall | контейнерний дата-хол до 150 kW/стійку |
| 8 | ModulEdge | https://www.moduledge.com/ | контейнерні ЦОД 20/40 ft |
| 9 | BMarko Structures | https://bmarkostructures.com/modular-data-centers/ | виробник контейнерних конструкцій |
| 10 | Comino — Mobile Data Center | https://www.comino.com/en/mobile-data-center | контейнери S/M/L з рідинним охолодженням |
| 11 | Giga Energy — GigaPod | https://www.gigaenergy.com/gigapod | US-виробник, модуль 45/90/135 ft до 1.9 MW |

## 2. Ринкові цифри (що публікують конкуренти)

| Параметр | Діапазон на ринку | Джерела |
|---|---|---|
| Щільність стійки | 5–150 kW; AI-стійка GB300 NVL72 ≈ 130–142 kW; «до 150 kW» | ModulEdge, Advanced Giga, Helios |
| Потужність модуля | 20-ft: 1–2 стійки, 50–100 kW · до 4 стійок, 100–200 kW · 40-ft: 6–10+ стійок, 300–500+ kW · 40-ft GigaPod: до 1.9 MW | Comino, Giga |
| Масштаб кампусу | від 9 MW IT до кампусу | Giga |
| PUE | 1.1–1.4 типово; «<1.1» з рідинним охолодженням і рекуперацією | Network Insights, Comino |
| Строк | 3–6 місяців (ModulEdge), «від 3 місяців» (Comino), ~3 місяці (Helios); традиційне будівництво 12–36 міс. | ModulEdge, Comino, Helios, Flex |
| Охолодження | direct-to-chip + CDU; DX, chilled water, adiabatic, free cooling; hot aisle containment | Comino, ModulEdge, Eaton, Giga |
| Резервування | N, N+1, 2N; у Giga 4N/3 | Eaton, Giga |
| Клімат | −35…+52 °C (ModulEdge); −40…+55 °C (довідково) | ModulEdge, Network Insights |
| Стандарти | Tier III/IV «за принципами», FAT/SAT, UL891 (щити) | ModulEdge, Giga |
| Гарантія | 1 або 3 роки (опції) | Giga |
| Ціни | лише Helios (колокація $160–220/kW/міс.); виробники ціну не публікують | Helios |

Більшість виробників (Eaton, MDS, BMarko, Module-it) цифр майже не дають — лише обіцянки швидкості й масштабу. Конкретику дають Comino, Giga, ModulEdge, Advanced Giga.

## 3. Як подають сторінки

- **Структура-лідер (Giga, Comino, ModulEdge):** hero → «що це» → лінійка розмірів (S/M/L або 45/90/135 ft) → таблиця «Specs at a glance» → сумісність із чипами (NVIDIA, AMD, Google TPU, Cerebras) → процес у кроках → FAQ → форма. Наша сторінка вже має всі ці блоки.
- **Візуал:**
  - рендери контейнера зовні, у розрізі та всередині (Giga — інтерактивна 3D-модель, Comino — рендери S/M/L на прозорому фоні, Advanced Giga — фото спереду/всередині/згори);
  - реальні фото заводу, монтажу краном (Flex, Giga);
  - кольори стримані: білий/сірий/нейтральні (Giga, ModulEdge), без «космосу».
- **Дії:** «Get quote / Build a quote», «Talk to sales», «Get my configuration», «Book a 30-min call».

## 4. Висновки для LIMIK Core

1. **Наша унікальність — свій трансформатор і підстанція.** Ні в кого, крім Giga (у них окремі модулі живлення), трансформатор не є частиною пропозиції модуля. Тримаємо це в hero і в картці Core 40 — вже зроблено.
2. **Лінійка 20 / 45 / Campus відповідає ринку** (Comino S/M/L, Giga 45 ft). Цифри по моделях — у межах ринкових діапазонів (див. нижче).
3. **Строк — в межах ринку: 16–24 тижні** (4–6 міс.; конкуренти: 3–6 міс.). Раніше в тексті було 12 тижнів — це цифра з копірайт-документа v2.1 (06.09.2026), обрана як «краща за ринок». 29.09 користувач вирішив: не обіцяти більше, ніж конкуренти, бо модуль ще не виробляється, а мета — протестувати ринок.
4. **Не публікуємо ціни й строки гарантії** — виробники теж цього не роблять; у FAQ відповідаємо процесом («бюджетна оцінка разом з концептом»).
5. **Візуал:** рендер власного брендованого модуля (темно-синій `#000821` або графіт, логотип LIMIK на борту) у трьох ракурсах — зовні, у розрізі, кампус. Це те, що всі лідери мають, а ми — ні. Правило проєкту забороняє AI-генерацію, тому варіанти: 3D-модель контейнера з брендуванням (Blender/стокова 3D-модель), або стокове фото контейнерного ЦОД + нанесення логотипу вручну.

## 5. Пропоновані значення для сторінки (орієнтири, клієнт підтверджує)

| Місце на сторінці | Зараз | Пропозиція | Обґрунтування | Підтвердити |
|---|---|---|---|---|
| Панель цифр — Lead time | 12 weeks | **16–24 weeks**, standard configurations | ринок 3–6 міс. | ⭐ так |
| Панель цифр — Rack density | XX kW | **up to 150 kW** per rack | GB300 NVL72 ≈ 132–142 kW має вміщатися; ринок до 150 kW | ⭐ так |
| Platform, Liquid cooling — PUE | X.XX | **design PUE 1.2** | ринок 1.1–1.4 | ⭐ так |
| Platform, Compute — kW per rack | XX kW | **up to 150 kW** per rack | як вище | ⭐ |
| Core 20 / 45 — бейдж | Ships in XX / 12 weeks | **Ships in 16–24 weeks** | ринок 3–6 міс. | ⭐ |
| Core 20 — теги | XX racks · XXX kW | **up to 2 racks · up to 200 kW** | Comino S/M: 1–4 стійки, 50–200 kW | так |
| Core 40 — теги | XX racks · XXX kW | **up to 8 racks · up to 1 MW** | Comino L: 300–500+ kW (40 ft); Giga 45 ft: до 1.9 MW | ⭐ так |
| Core Campus — тег | XX MW | **10 MW+** | Giga: від 9 MW IT до кампусу | так |
| What is — корпус | 45 ft | **45 ft** (лишити, прибрати жовту мітку) | назва моделі Core 40 | — |
| Specs — Power (ключ) | XXX kW | **up to 1 MW** | як Core 40 | так |
| Specs — IT load per module | 50 kW – 500+ kW | **up to 200 kW (Core 20) · up to 1 MW (Core 40)** | узгоджено з картками | так |
| Specs — Design PUE | X.XX | **1.2** | як вище | ⭐ |
| Specs — Cooling redundancy | Confirm | **N+1** | Eaton: N/N+1/2N; стандарт ринку | так |
| Specs — Rack density | up to XX kW | **up to 150 kW per rack** | як вище | ⭐ |
| Specs — Enclosure | NEMA per site | **NEMA 3R standard; higher ratings per site** | типово для зовнішніх корпусів | так |
| Specs — Fire suppression | Confirm system | **Clean-agent suppression with early-warning smoke detection** | стандарт ринку (Eaton, ModulEdge) | так |
| FAQ — rack density | Answer to be confirmed | «From air-cooled racks to up to 150 kW per rack with direct-to-chip liquid cooling; power and cooling are sized to your hardware.» | | ⭐ |
| FAQ — pricing | … | «Pricing depends on capacity, cooling, power path and site. Share your target capacity and site power, and we return a budgetary estimate with the concept.» (без цифр) | | — |
| FAQ — delivery, installation, commissioning | … | «LIMIK coordinates truck or rail delivery, setting on your pad, connection and commissioning with our field team and local partners.» | | так |
| FAQ — warranty | … | «Every module and LIMIK-built power equipment comes with a factory warranty; extended terms are available. Exact terms are set in your proposal.» (без строку) | Giga: 1/3 роки — не копіюємо цифру | так |
| FAQ — after request | … | «An engineer reviews your details and replies within 48 hours, then we run a site and power review and send a concept, budgetary estimate and schedule.» | «48 hours» вже є на сторінці | так |
| FAQ — NDA | … | «Yes. We sign a mutual NDA before you share site or load details.» | «NDA on request» уже є в hero | так |
| FAQ — support | … | «DCIM remote monitoring, spare parts and on-site service through LIMIK and partner technicians; service agreements available.» | | так |

⭐ — «короткий список», який клієнт має підтвердити до запуску реклами: 16–24 тижні, до 150 kW на стійку, PUE 1.2, Core 40 до 1 MW.

## 6. Лінійка моделей (рішення 2026-09-29)
Core 20 (20 ft) · **Core 40** (40 ft, флагман з MV-трансформатором; раніше Core 45) · Core Campus (кілька Core 40). 40 ft — найпоширеніший стандарт у конкурентів (Comino, ModulEdge, BMarko); 40 і 45 ft разом ніхто не пропонує. Цифри Core 40: до 8 стійок, до 1 MW (ринок для 40 ft: 300–500+ kW, з запасом під рідинне охолодження).
**Підстанцію LIMIK не будує** — постачає силові трансформатори до 600 MVA. Campus описано як «кілька модулів Core 40 + трансформатори LIMIK для підстанції майданчика». (Для довідки: повні енергоблоки з MV-комутацією пропонують Giga Energy — GigaBase, і Flex — E-house підстанції.)

## 6. Технічна узгодженість (перевірка 2026-09-29)
Виправлено на сторінці: 150 kW (щоб вміщалась стійка GB300 NVL72), Vera Rubin прибрано зі списку прискорювачів; «без єдиної точки відмови» — лише для 2N; живлення: Core 20 — наявні 480 V, Core 40 — MV; Core 20 — до 100 kW на стійку; PUE — «розрахунковий середньорічний, залежить від клімату»; діапазони потужності у формі під лінійку моделей; таймлайн 0 / 1–4 / 4–20 / 20–24 тижні; «48 тижнів» уточнено як строк для великих силових трансформаторів.
Питання до клієнта: чи встигає LIMIK з MV-трансформатором для модуля в строк модуля (16–24 тижні) — великі силові трансформатори в LIMIK йдуть 48 тижнів.

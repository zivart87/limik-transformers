# LIMIK — Google Ads Launch Plan

**Рекомендации по запуску рекламных кампаний в Google Ads**

*Для PPC-специалиста · Ниша: Large Power Transformers (LPT) для рынка США · Июль 2026*

---

## Оглавление

1. [Ключевые принципы (must-read)](#1-ключевые-принципы-must-read)
2. [Структура рекламного аккаунта](#2-структура-рекламного-аккаунта)
3. [Match types — конкретные правила](#3-match-types--конкретные-правила)
4. [Гео-таргетинг — штаты и настройки](#4-гео-таргетинг--штаты-и-настройки)
5. [Кампания Power — детальная разбивка](#5-кампания-power--детальная-разбивка)
6. [Кампании GSU, Auto, Mobile](#6-кампании-gsu-auto-mobile)
7. [Retargeting кампания](#7-retargeting-кампания)
8. [Формула объявлений (RSA)](#8-формула-объявлений-rsa)
9. [Отрицательные ключи](#9-отрицательные-ключи)
10. [Технические требования до запуска](#10-технические-требования-до-запуска)
11. [Календарь запуска на 12 недель](#11-календарь-запуска-на-12-недель)
12. [Бюджет — три сценария](#12-бюджет--три-сценария)
13. [Что мониторить и когда](#13-что-мониторить-и-когда)
14. [Метрики успеха](#14-метрики-успеха)

---

## 1. Ключевые принципы (must-read)

Прежде чем строить кампании — принять эти правила. Они специфичны для LPT-рынка США и отличаются от типовых B2C и лёгкого B2B подходов.

### Принцип 1: Manual CPC минимум 9–12 месяцев

**Никаких Smart Bidding, Maximize Conversions, Target CPA, Target ROAS на старте.**

Причина: для перехода на автостратегию Google требует минимум 30 конверсий за 30 дней. В нише LPT реальных RFQ столько не будет. Обучать алгоритм на микроконверсиях (скачивания даташитов, время на сайте) — **фатальная ошибка**. Кто скачивает даташиты: инженеры-проектировщики, студенты, конкурентная разведка. Кто покупает: procurement и EPC-менеджеры. Алгоритм оптимизируется под первых → красивый график в кабинете → пустая CRM.

**Правило:** сидим на Manual CPC до тех пор, пока OCT (Offline Conversion Tracking) из CRM не начнёт передавать 30+ квалифицированных SQL в месяц. Это может занять 9–12 месяцев. Это нормально для этого рынка.

### Принцип 2: Performance Max ЗАПРЕЩЁН

Не запускать PMax в первые 12 месяцев ни при каких условиях. Google Ads представитель будет активно пушить PMax — игнорировать. Для узкого B2B PMax сжигает бюджет на нерелевантных показах в мобильных играх и YouTube.

### Принцип 3: Offline Conversion Tracking (OCT) — обязателен ДО запуска

Связка: Клик (GCLID) → Форма на сайте → CRM → Марк переводит лид в SQL → Сигнал отправляется обратно в Google Ads.

**Без работающей OCT-связки запуск невозможен.** Иначе будем оптимизировать вслепую.

### Принцип 4: Скачивания даташитов — secondary метрика, НЕ обучающий сигнал

Скачивание PDF-даташита, брошюры, CAD/BIM файла — считаем как **secondary conversion** для мониторинга. Не передаём как primary в алгоритм. Не оцениваем в деньгах для bid strategy.

### Принцип 5: Sales-Marketing weekly sync — обязателен

**Еженедельный 30-минутный созвон** маркетолога с Марком (sales). Обзор Search Terms report + разметка лидов по качеству. Без этого через 2 месяца оптимизация становится вслепую и кампания закрывается.

### Принцип 6: Одна структурная правка в неделю — максимум

Правило Google-алгоритма: после запуска новой ad group или объявления нужно **минимум 21 день неизменных условий** для обучения. Первые 3 недели после старта — только чистка негативов и мелкая правка headlines. Никаких структурных изменений.

### Принцип 7: Realistic expectations

Реальные ожидания для этого рынка:

| Метрика | Диапазон |
|---|---|
| CPC на коммерческих ключах | $12–$45 |
| CPC на самых горячих (`power transformer manufacturer`) | до $60 |
| CTR при хороших объявлениях | 3–6% |
| CR из клика в micro-conversion | 3–8% |
| CR из клика в full RFQ | 0.3–0.8% |
| Cost per qualified lead | $2500–$8000 |
| Time to first meaningful data | 6–8 недель |

**Первые 6 недель — это purchase of data, не покупка лидов.** Готовиться потратить $8–15k, чтобы понять, что работает.

---

## 2. Структура рекламного аккаунта

### Схема первого квартала

```
GOOGLE ADS АККАУНТ
│
├── КАМПАНИЯ 1: LIMIK | Search | Power [День 1]
│   ├── Ad Group: Power_USA           → /american-made/
│   ├── Ad Group: Power_BABA          → /american-made/
│   ├── Ad Group: Power_Manufacturer  → /transformers/power/
│   ├── Ad Group: Power_Utility       → /markets/utilities/
│   └── Ad Group: Power_Specs         → /transformers/power/
│
├── КАМПАНИЯ 2: LIMIK | Search | GSU [Неделя 4]
│   ├── Ad Group: GSU_USA             → /american-made/
│   ├── Ad Group: GSU_Manufacturer    → /transformers/gsu/
│   └── Ad Group: GSU_Data_Center     → /markets/data-centers/
│
├── КАМПАНИЯ 3: LIMIK | Search | Auto [Неделя 7]
│   ├── Ad Group: Auto_USA            → /american-made/
│   ├── Ad Group: Auto_Manufacturer   → /transformers/autotransformers/
│   └── Ad Group: Auto_Specs          → /transformers/autotransformers/
│
├── КАМПАНИЯ 4: LIMIK | Search | Mobile [Неделя 10]
│   ├── Ad Group: Mobile_USA          → /american-made/
│   ├── Ad Group: Mobile_Manufacturer → /transformers/mobile/
│   ├── Ad Group: Mobile_Type         → /transformers/mobile/
│   └── Ad Group: Mobile_Emergency    → /transformers/mobile/
│
└── КАМПАНИЯ 5: LIMIK | Retargeting [Неделя 2]
    └── Ad Group: Site_Visitors_30d   → /request-quote/
```

### Логика структуры

- **5 кампаний** — разделяем по продуктам, чтобы Google корректно распределял бюджет и мы могли независимо оптимизировать каждый продукт.
- **Ad Groups сгруппированы по интентам, а не по SKAG.** SKAG (1 ключ = 1 группа) устарел с новыми алгоритмами Google. Правильно: 1 ad group = 1 намерение с 5–15 ключами.
- **Каждая Ad Group имеет свою посадочную страницу.** Это критично для Quality Score. Одна общая страница = QS 3–4 и CPC × 3.

---

## 3. Match types — конкретные правила

### Общая пропорция

- **60% Exact** — на money keywords (короткие коммерческие)
- **40% Phrase** — на длинные B2B-модификаторы
- **0% Broad** — не использовать первый год

### Почему такое соотношение

Google в 2021–2024 годах расширил Exact match до "close variants": Exact `[power transformer manufacturer]` сегодня сам ловит `manufacturers of power transformers`, `US power transformer maker` и другие переформулировки. То есть Exact 2026 работает почти как узкий Phrase 2018 года.

Но для длинных нишевых модификаторов типа `500 kV autotransformer manufacturer` объём поиска настолько мал, что только Exact даст 0–2 показа в месяц. Здесь Phrase оправдан.

### Правила распределения

| Тип ключа | Match Type | Пример |
|---|---|---|
| Money keyword, короткий, ясный интент | **Exact** | `[power transformer manufacturer]` |
| Локализация (USA / American) | **Exact** | `[buy american power transformer]` |
| Compliance / нормативные | **Exact** | `[baba compliant power transformer]` |
| Длинные модификаторы, много вариаций формулировок | **Phrase** | `"utility scale substation transformer"` |
| Спека + продукт | **Phrase** | `"500 kv autotransformer manufacturer"` |
| Все остальные | **Exact** по умолчанию |

### Условие для Phrase

Phrase допустим **только если** выполнены оба:

1. Работает Account-Level Negative List на 250+ фраз
2. Ежедневный мониторинг Search Terms Report в первые 30 дней после запуска

Если ежедневный мониторинг невозможен — все ключи в Exact.

---

## 4. Гео-таргетинг — штаты и настройки

### Логика гео-таргета для LPT

**Правило №1:** гео-таргет = где физически находятся **покупатели** (procurement, EPC, developers), а НЕ где стоят объекты, для которых нужны трансформаторы.

Пример: гиперскейлер строит дата-центр в Айове — а его procurement сидит в Сиэтле (Microsoft) или Кремниевой долине (Google, Meta). Таргетить Айову = мимо кассы.

**Правило №2:** не путать «штаты с большим CAPEX на сеть» со «штатами, где сидят покупатели». Техас гигантский по CAPEX ERCOT, но одновременно там сидят и procurement Fluor, Quanta, Oracle и других — поэтому он приоритет №1 сразу по двум причинам.

**Правило №3:** при ограниченном бюджете гео-таргет — вторая по важности настройка после match types. Правильный гео втрое усиливает эффект бюджета, неправильный — втрое сжигает.

---

### Где живут покупатели LPT — по типам

**Крупные IOU (investor-owned utilities):**
Duke Energy → NC · Southern Company → GA · Dominion → VA · NextEra → FL · AEP → OH · Exelon → IL · PG&E → CA · Xcel → MN · Entergy → LA · DTE → MI · ConEd → NY · PPL → PA · Berkshire Hathaway Energy → IA

**Крупнейшие EPC-подрядчики (главный сегмент Пути B):**
Bechtel → VA · Fluor → TX · Kiewit → NE · Burns & McDonnell → MO · Sargent & Lundy → IL · Black & Veatch → KS · Quanta/QISG → TX · Zachry → TX · MYR Group → CO

**Гиперскейлеры для дата-центров:**
AWS → WA · Microsoft → WA · Google → CA · Meta → CA · Oracle → TX · Digital Realty → TX · Equinix → CA · CoreWeave → NJ

**Public power (эти реально ищут через Google):**
SC · NC · GA · AL · FL — здесь корпоративных AVL нет, поисковая реклама работает напрямую

**IPP, BESS, solar-девелоперы:**
TX · CA · FL · NV · AZ

**Defense / DOD подрядчики:**
VA · TX · CO · FL

---

### 🎯 Финальный список — 27 штатов таргетируем, 23 исключаем

При выбранном рабочем бюджете ($7000–8000/месяц) таргетируем **27 штатов**, разделённых на три круга по приоритету. Остальные 23 штата — явное исключение.

#### 🔴 Круг 1 — Критический (8 штатов, покрытие ~75–80% рынка)

| # | Штат | Код | Ключевые покупатели | Ставка |
|---|---|---|---|---|
| 1 | Texas | TX | Fluor, Quanta, Zachry, Oracle, IPP гиганты | × 1.3 |
| 2 | Virginia | VA | Bechtel, Dominion, DOD-подрядчики | × 1.3 |
| 3 | North Carolina | NC | Duke Energy, PMPA | × 1.3 |
| 4 | California | CA | PG&E, Google, Meta, Equinix, IPP | × 1.0 |
| 5 | Georgia | GA | Southern Company, MEAG Power | × 1.0 |
| 6 | Washington | WA | AWS, Microsoft procurement | × 1.0 |
| 7 | Florida | FL | NextEra, FMPA, defense, BESS | × 1.0 |
| 8 | Illinois | IL | Sargent & Lundy, Exelon, ComEd | × 1.0 |

#### 🟡 Круг 2 — Важный (9 штатов, +15% рынка)

| # | Штат | Код | Ключевые покупатели | Ставка |
|---|---|---|---|---|
| 9 | South Carolina | SC | Santee Cooper, Central Electric | × 0.7 |
| 10 | Pennsylvania | PA | PPL, PJM Interconnection | × 0.7 |
| 11 | Ohio | OH | AEP штаб-квартира | × 0.7 |
| 12 | Missouri | MO | Burns & McDonnell | × 0.7 |
| 13 | Kansas | KS | Black & Veatch | × 0.7 |
| 14 | New York | NY | ConEd, ISO | × 0.7 |
| 15 | New Jersey | NJ | PSE&G, CoreWeave | × 0.7 |
| 16 | Louisiana | LA | Entergy | × 0.7 |
| 17 | Colorado | CO | MYR Group, Xcel operations | × 0.7 |

#### 🟢 Круг 3 — Периферия (10 штатов, +7% рынка)

| # | Штат | Код | Ключевые покупатели | Ставка |
|---|---|---|---|---|
| 18 | Alabama | AL | VTC новый завод, AMEA | × 0.5 |
| 19 | Tennessee | TN | TVA (federal), Hyosung Мемфис | × 0.5 |
| 20 | Minnesota | MN | Xcel Energy HQ | × 0.5 |
| 21 | Michigan | MI | DTE Energy | × 0.5 |
| 22 | Arizona | AZ | APS, солнечная генерация | × 0.5 |
| 23 | Nevada | NV | NV Energy, солнечная генерация | × 0.5 |
| 24 | Iowa | IA | Berkshire Hathaway Energy | × 0.5 |
| 25 | Nebraska | NE | Kiewit HQ, OPPD | × 0.5 |
| 26 | Oregon | OR | PGE, BPA (federal) | × 0.5 |
| 27 | Massachusetts | MA | Eversource | × 0.5 |

**Итого таргета: 27 штатов, покрытие ~97% реальных покупателей LPT в США.**

---

### ⚫ 23 штата к явному исключению

Эти штаты **обязательно добавить в Locations to Exclude** для каждой кампании. Причина не в том, что там нет клиентов вообще — а в том, что соотношение «мусорные клики / релевантные» здесь минимум 20:1. При ограниченном бюджете нельзя себе позволить.

| # | Штат | Код |
|---|---|---|
| 1 | Alaska | AK |
| 2 | Arkansas | AR |
| 3 | Connecticut | CT |
| 4 | Delaware | DE |
| 5 | Hawaii | HI |
| 6 | Idaho | ID |
| 7 | Indiana | IN |
| 8 | Kentucky | KY |
| 9 | Maine | ME |
| 10 | Maryland | MD |
| 11 | Mississippi | MS |
| 12 | Montana | MT |
| 13 | New Hampshire | NH |
| 14 | New Mexico | NM |
| 15 | North Dakota | ND |
| 16 | Oklahoma | OK |
| 17 | Rhode Island | RI |
| 18 | South Dakota | SD |
| 19 | Utah | UT |
| 20 | Vermont | VT |
| 21 | West Virginia | WV |
| 22 | Wisconsin | WI |
| 23 | Wyoming | WY |

**Плюс исключить:** District of Columbia (DC), Puerto Rico (PR), US Virgin Islands, Guam, American Samoa — все зависимые территории.

---

### 🔧 Критические технические настройки Google Ads

Эти настройки **скрыты по умолчанию** и без них гео-таргет работает неправильно даже с идеальным списком штатов.

#### 1. Advanced Location Options → Target

**По умолчанию Google ставит:** `Presence or Interest` — показ всем, кто интересуется этими штатами, включая людей из Индии, Китая, Пакистана, гуглящих «power transformer manufacturer Texas».

**Правильная настройка:** **`Presence: People in or regularly in your targeted locations`**.

**Эта настройка отсекает 30–40% нерелевантного зарубежного трафика.** Обязательна.

#### 2. Advanced Location Options → Exclude

**По умолчанию:** `Presence` (только физически в исключённых штатах).

**Правильная настройка:** **`Presence or Interest`** для excluded locations.

Это гарантирует, что мы не платим за клики людей из «плохих» штатов, которые гуглят наши таргетируемые штаты.

#### 3. НЕ выбирать United States целиком

Никогда не ставить `United States` как единственную локацию с bid adjustments. Google всё равно потратит часть бюджета на excluded штаты, если полагаться только на adjustments. Только **явный список конкретных штатов** в Locations to Target и явный список в Locations to Exclude.

#### 4. Bid Adjustments работают корректно только на Manual CPC

При Manual CPC (наш режим на первый год) location bid adjustments работают предсказуемо. При переходе на Smart Bidding (через 9–12 месяцев) — их роль меняется, часть adjustments игнорируется. Не забыть пересмотреть настройки при смене стратегии.

#### 5. City-level targeting — не для старта

Google позволяет таргетить по городам и радиусам вокруг конкретных адресов. **Не использовать на старте.** Причина: слишком узко, данных не набрать за месяц. Штаты — правильный уровень для первой оптимизации.

Через 3–6 месяцев, когда будет статистика, можно проанализировать: какие города дают конверсию → перейти на city-level в отдельных кампаниях, где это оправдано.

---

### 📋 Готовые списки для импорта в Google Ads

Google Ads принимает список локаций через запятую в поле Location Targeting.

**Копировать в Locations to Target (27 штатов):**

```
Texas, Virginia, North Carolina, California, Georgia, Washington, Florida, Illinois, South Carolina, Pennsylvania, Ohio, Missouri, Kansas, New York, New Jersey, Louisiana, Colorado, Alabama, Tennessee, Minnesota, Michigan, Arizona, Nevada, Iowa, Nebraska, Oregon, Massachusetts
```

**Копировать в Locations to Exclude (23 штата):**

```
Alaska, Arkansas, Connecticut, Delaware, Hawaii, Idaho, Indiana, Kentucky, Maine, Maryland, Mississippi, Montana, New Hampshire, New Mexico, North Dakota, Oklahoma, Rhode Island, South Dakota, Utah, Vermont, West Virginia, Wisconsin, Wyoming
```

**Дополнительно в Locations to Exclude:**

```
District of Columbia, Puerto Rico, US Virgin Islands, Guam, American Samoa, Northern Mariana Islands
```

---

### Альтернативные сценарии гео (если бюджет другой)

#### Сценарий "минимальный бюджет" ($3000/месяц)

**Только Круг 1 — 8 штатов.**

- Target: Texas, Virginia, North Carolina, California, Georgia, Washington, Florida, Illinois
- Exclude: **все остальные 42 штата + территории**

Bid adjustments:
- TX, VA, NC: базовая × 1.2
- CA, GA, FL, WA: базовая × 1.0
- IL: базовая × 0.9

#### Сценарий "рабочий" ($7000–8000/месяц) — рекомендуемый

**Круг 1 + Круг 2 = 17 штатов** (значения ставок см. в таблицах выше).

Exclude: остальные 33 штата + территории.

#### Сценарий "полный" ($12000+/месяц)

**Круг 1 + 2 + 3 = 27 штатов** (это и есть основной список выше).

Exclude: 23 штата + территории.

---

### Мониторинг гео-эффективности

**Что смотреть еженедельно:**
- Location Report в Google Ads → performance по штатам
- CTR и CPA по каждому штату
- Search Terms с location modifiers (`transformer Texas`, `manufacturer California`)

**Правила ротации ставок по данным:**

После **4 недель работы:**
- Штаты с CPA > 3× медианы → снизить bid на 30%
- Штаты с CPA < 50% медианы → повысить bid на 20%
- Штаты с нулём конверсий и spend > $200 → пауза, разбор

После **8 недель:**
- Первое серьёзное перераспределение бюджета между кругами
- Возможно сузить Круг 3 → до топ-5 из Круга 1 или наоборот

После **12 недель:**
- Отчёт «какие штаты приносят RFQ» → перекраивать стратегию по факту
- Возможен переход на city-level в топ-5 штатах

---

## 5. Кампания Power — детальная разбивка

### Настройки кампании

| Параметр | Значение |
|---|---|
| Bidding | **Manual CPC**, cap $18–25 |
| Дневной бюджет | $150–200 |
| Локация | 27 штатов согласно **разделу 4** (Гео-таргетинг). Locations to Exclude: 23 штата + территории |
| Язык | English |
| Устройства | Desktop +0%, Mobile −40% (B2B procurement сидит с desktop) |
| Аудитория (observation, не targeting) | B2B interests: engineering, procurement, energy sector |
| Ad rotation | Optimize for conversions |
| Frequency capping | Не устанавливать (Search) |

⚠️ **Location Options должны быть настроены как в разделе 4:** Target = Presence, Exclude = Presence or Interest. Без этого таргет работает неправильно.

### Ad Group 5.1: Power_USA (приоритет №1)

**Match type: Exact**

```
[power transformer manufacturer usa]
[large power transformer manufacturer usa]
[american power transformer manufacturer]
[us power transformer manufacturer]
[american made power transformer]
[power transformer manufacturer united states]
[usa power transformer factory]
```

**Посадочная:** `/american-made/`

**CPC cap рекомендация:** $22

### Ad Group 5.2: Power_BABA

**Match type: Exact**

```
[buy american power transformer]
[buy america power transformer]
[baba compliant power transformer]
[baba compliant transformer manufacturer]
[us based power transformer supplier]
[domestic power transformer factory]
[domestic power transformer manufacturer]
```

**Посадочная:** `/american-made/` (можно использовать якорь `#baba` или отдельную под-секцию)

**CPC cap рекомендация:** $18

**Важно:** здесь ключевое слово `domestic` — коммерческий термин для нас. Убедиться, что `domestic` НЕ добавлен в Account-Level Negative List (это была бы фатальная ошибка).

### Ad Group 5.3: Power_Manufacturer (самая дорогая)

**Match type: Exact**

```
[power transformer manufacturer]
[large power transformer manufacturer]
[power transformer supplier]
[power transformer factory]
[large power transformer supplier]
[custom power transformer company]
[large power transformer factory]
```

**Посадочная:** `/transformers/power/`

**CPC cap рекомендация:** $35–45

**⚠️ Тактическая рекомендация:** эта Ad Group имеет самый высокий CPC (может доходить до $60). Первые 2 недели держать на паузе. Включить только после того, как остальные группы наберут статистику и мы поймём качество трафика по этим общим запросам.

### Ad Group 5.4: Power_Utility

**Match type: Phrase** (длинные хвосты, много вариаций)

```
"utility scale transformer manufacturer"
"substation transformer manufacturer"
"grid tie transformer manufacturer"
"transmission transformer manufacturer"
"utility scale power transformer"
"substation power transformer supplier"
```

**Посадочная:** `/markets/utilities/` (когда страница будет готова; временно — `/transformers/power/`)

**CPC cap рекомендация:** $22

### Ad Group 5.5: Power_Specs

**Match type: Phrase** (вариаций формулировок много)

```
"115 kv power transformer manufacturer"
"138 kv power transformer manufacturer"
"230 kv power transformer manufacturer"
"345 kv power transformer manufacturer"
"500 kv power transformer manufacturer"
"500 kv substation transformer"
```

**Посадочная:** `/transformers/power/` с якорями на разделы по классам напряжения

**CPC cap рекомендация:** $20

---

## 6. Кампании GSU, Auto, Mobile

Запускаются последовательно с интервалом 3–4 недели после Power. Причина: один продукт = один канал обучения. Запуск всех одновременно = невозможность понять, что работает.

### Кампания GSU (запуск: неделя 4)

**Ad Groups:**

| Ad Group | Match Type | Ключи (примеры) | Посадочная |
|---|---|---|---|
| GSU_USA | Exact | `[gsu transformer manufacturer usa]`, `[american gsu transformer supplier]` | `/american-made/` |
| GSU_Manufacturer | Exact | `[gsu transformer manufacturer]`, `[generator step up transformer manufacturer]` | `/transformers/gsu/` |
| GSU_Data_Center | Phrase | `"data center substation transformer"`, `"hyperscale data center transformer"` | `/markets/data-centers/` |

**Настройки:** Manual CPC, cap $20–30, бюджет $100–150/день

### Кампания Auto (запуск: неделя 7)

**Ad Groups:**

| Ad Group | Match Type | Ключи (примеры) | Посадочная |
|---|---|---|---|
| Auto_USA | Exact | `[autotransformer manufacturer usa]`, `[american autotransformer]` | `/american-made/` |
| Auto_Manufacturer | Exact | `[autotransformer manufacturer]`, `[autotransformer supplier]` | `/transformers/autotransformers/` |
| Auto_Specs | Phrase | `"500 kv autotransformer manufacturer"`, `"345 kv autotransformer"` | `/transformers/autotransformers/` |

**Настройки:** Manual CPC, cap $18–25, бюджет $80–120/день

### Кампания Mobile (запуск: неделя 10)

**Ad Groups:**

| Ad Group | Match Type | Ключи (примеры) | Посадочная |
|---|---|---|---|
| Mobile_USA | Exact | `[mobile substation manufacturer usa]`, `[american mobile substation supplier]` | `/american-made/` |
| Mobile_Manufacturer | Exact | `[mobile substation manufacturer]`, `[mobile power transformer manufacturer]` | `/transformers/mobile/` |
| Mobile_Type | Phrase | `"trailer mounted mobile substation"`, `"skid mounted transformer manufacturer"` | `/transformers/mobile/` |
| Mobile_Emergency | Phrase | `"emergency replacement power transformer"`, `"rapid deployment transformer"`, `"temporary substation transformer"` | `/transformers/mobile/` |

**Настройки:** Manual CPC, cap $15–22, бюджет $60–100/день

**Замечание:** для Mobile кластер `emergency` может давать неожиданно высокий CTR — это горящие потребности. Мониторить особо.

---

## 7. Retargeting кампания

Запуск: неделя 2 (после того как в GA4 накопится хотя бы 100 посетителей).

### Настройки

| Параметр | Значение |
|---|---|
| Тип | Display + Search Remarketing (RLSA) |
| Bidding | Manual CPC |
| Дневной бюджет | $30–50 |
| Frequency capping | 3 показа в день, 15 в неделю |

### Аудитории

| Аудитория | Условие | Ставка |
|---|---|---|
| All visitors 30d | Все посетители сайта за 30 дней | Базовая |
| Product page visitors 60d | Посетители `/transformers/*` за 60 дней | +30% |
| RFQ page abandoners | Посетили `/request-quote/` но не отправили форму | +50% |
| Datasheet downloaders | Скачали PDF, но не заполнили форму | +40% |

### Объявления

Другие, чем в поисковых кампаниях. Формат: reminder + urgency + specific CTA.

Примеры headlines:
- "Ready to Discuss Your Transformer Specs?"
- "Reserve Your 2029 Delivery Slot"
- "Download Full Product Brochure"

---

## 8. Формула объявлений (RSA)

### Правило: 3 RSA на каждую Ad Group

Каждый RSA — под свой угол:
1. **Compliance-угол** (Buy American, BABA, стандарты)
2. **Сроки-угол** (skip foreign lead times, available slot)
3. **Спека-угол** (конкретные MVA/kV, custom-engineered)

### Что работает в headlines для B2B procurement

✅ **Работает:**
- Конкретные цифры (`600 MVA`, `525 kV`, `IEEE C57`)
- Compliance-теги (`Buy American`, `BABA Compliant`, `IEEE C57 Certified`)
- Сроки (`Available for 2029 Delivery`, `Reserve Delivery Slot`)
- Локация (`U.S.-Manufactured`, `Built in America`)

❌ **Не работает:**
- `Best`, `Leading`, `Premium`, `#1` — procurement фильтрует
- `Contact Us Today!`, `Call Now!` — outdated для B2B
- Общие фразы `Power Your Future` — ноль информации

### Пример RSA для Ad Group Power_BABA

**RSA #1 — Compliance-угол**

Headlines (загрузить минимум 10, показываю 5 ключевых):
- Buy American Power Transformers
- BABA Compliant · IEEE C57 Certified
- Up to 600 MVA · 525 kV
- Engineered in the U.S.
- Request Engineering Review

Descriptions (загрузить 4):
- American-manufactured large power transformers for utility, defense, and infrastructure projects. Full BABA documentation provided.
- Engineer-to-order units up to 600 MVA. Direct engineering support for procurement teams.

**RSA #2 — Сроки-угол**

Headlines:
- Skip 2–4 Year Foreign Lead Times
- U.S. Power Transformers Available
- Buy American Compliant Manufacturer
- Direct from U.S. Engineering Team
- Reserve Your Delivery Slot

Descriptions:
- Domestic transformer production for utility and infrastructure buyers. No foreign supply chain risks.
- Talk directly to our engineers. Preliminary review within 2 business days.

**RSA #3 — Спека-угол**

Headlines:
- Custom Power Transformers · Up to 600 MVA
- 525 kV Class · IEEE C57 Family
- American Manufacturer · BABA Compliant
- Engineered for Utilities & Defense
- Download Full Specification

Descriptions:
- Custom-engineered large power transformers up to 525 kV. Manufactured in the U.S. for utility and industrial applications.
- Engineering-to-order platform. Direct engineer contact. Full compliance documentation.

### Extensions — обязательный набор

- **Sitelinks:** 4–6 штук (About, Products, Markets, Buy American, Request Quote, Downloads)
- **Callouts:** 6–8 штук (IEEE C57 Certified, BABA Compliant, U.S.-Manufactured, Custom-Engineered, Up to 600 MVA, Direct Engineer Support, etc.)
- **Structured Snippets:** типы продуктов, ratings, стандарты
- **Location Extension:** после того как решится вопрос с публичным адресом
- **Lead Form Extension:** протестировать, обычно не работает для тяжёлого B2B — но проверить

---

## 9. Отрицательные ключи

### Что уже есть в текущем файле

39 фраз, категоризация правильная. Но есть **одна фатальная ошибка** и много пропусков.

### 🔴 Убрать немедленно

**Строка 18: `domestic`** — категория помечена B2C, но `domestic` в нашем контексте = **Buy American / domestic content / domestic manufacturer**. Это наш главный коммерческий термин. Если оставить — отсечётся весь кластер BABA.

**Удалить до запуска.**

### Пропущенные категории — минимум 250+ фраз до запуска

| Категория | Примеры (не полный список) |
|---|---|
| **География (страны-конкуренты)** | `china`, `chinese`, `india`, `indian`, `pakistan`, `europe`, `european`, `germany`, `korea`, `korean`, `japan`, `japanese`, `mexico` |
| **Ремонт/сервис** | `repair`, `refurbish`, `refurbishment`, `rewinding`, `oil filtration`, `oil testing`, `oil change`, `maintenance`, `service`, `inspection` |
| **Аналитика / рынок** | `market size`, `market report`, `industry report`, `market forecast`, `market share`, `market analysis`, `research report`, `statista` |
| **Работа** | `hiring`, `career`, `careers`, `internship`, `apprenticeship`, `resume`, `interview`, `wage`, `wages` |
| **Обучение** | `tutorial`, `youtube`, `explained`, `basics`, `for dummies`, `for beginners`, `lecture`, `certification`, `certified` (осторожно, проверить контекст) |
| **Микро-электроника** | `audio`, `guitar`, `tube`, `amplifier`, `arduino`, `hobby`, `raspberry`, `microwave`, `tesla coil` |
| **Ретейл-платформы** | `amazon`, `ebay`, `alibaba`, `walmart`, `home depot`, `grainger`, `mcmaster` |
| **Нецелевые типы трансформаторов** | `isolation transformer`, `step down transformer`, `current transformer`, `potential transformer`, `instrument transformer`, `toroidal`, `variac`, `autotransformer variac` |
| **Ценовые низкоквалифицированные** | `price list`, `cost`, `how much does a transformer cost`, `cheap transformer`, `discount` |
| **Уже есть, но расширить** | Все существующие категории — добавить синонимы и множественные числа |

### Правила формирования

- Все негативы на **Account Level** (Shared Library → Negative Lists → apply to all campaigns)
- Match type: **Broad** для широких понятий, **Phrase** для составных фраз (например: `"how does a transformer work"`)
- **Не добавлять** в негативы: `domestic`, `home` (может задеть `home-grown American`), `manufacturer` (очевидно), `USA`

### Работа с негативами после запуска

Первые 30 дней: **ежедневная** проверка Search Terms Report. Все нерелевантные фразы → в негативы день в день.

С 31 дня: 2–3 раза в неделю.

Через 3 месяца список негативов должен быть 500–700 фраз. Через 6 месяцев — 800–1200. Это нормально.

---

## 10. Технические требования до запуска

**Без выполнения всех пунктов запуск невозможен.**

### 🔴 Технические требования

| # | Требование | Ответственный |
|---|---|---|
| 1 | GA4 установлен и работает | Разработчик |
| 2 | Google Ads связан с GA4 через GTM | PPC + разработчик |
| 3 | **Enhanced Conversions** включены (для лучшего matching в OCT) | PPC |
| 4 | **OCT (Offline Conversion Tracking)** настроен: GCLID → форма → CRM → обратно в Ads | PPC + CRM-специалист |
| 5 | **CRM stages размечены:** MQL (форма заполнена) → SQL (Марк квалифицировал) → Opportunity → Won | Sales + CRM |
| 6 | Google Ads conversion tracking настроен на: submit form (primary), download PDF (secondary), phone click (secondary) | PPC |
| 7 | Consent Mode v2 (для US-таргета менее критично, но лучше сразу) | Разработчик |

### 🔴 Контентные требования

| # | Требование | Ответственный |
|---|---|---|
| 8 | Посадочная `/american-made/` создана и опубликована | Копирайтер + разработчик |
| 9 | Форма RFQ работает, лид приходит в CRM | Разработчик + CRM |
| 10 | Placeholder-телефон заменён на реальный | Разработчик |
| 11 | Убраны имена клиентов (Bechtel, Fluor, Kiewit, AWS, Azure, Google, Duke, Dominion) | Копирайтер |
| 12 | Убран год основания с главной | Копирайтер |
| 13 | Починены счётчики (0 yrs / 0 MVA / 0 kV / 0 wks) | Разработчик |
| 14 | Убран блок «IRA-eligible» с карточки Data Centers | Копирайтер |
| 15 | Проверено утверждение «DOE and DOD procurement qualified» — есть ли за ним документ | Игорь / юрист |

### 🔴 Организационные требования

| # | Требование | Ответственный |
|---|---|---|
| 16 | Account-Level Negative List (250+ фраз) загружен | PPC |
| 17 | `domestic` УБРАН из существующих негативов | PPC |
| 18 | Назначен еженедельный 30-минутный созвон Марка с PPC-специалистом | Sales |
| 19 | Определён CPA-порог, при превышении которого пауза и разбор | Игорь + PPC |

---

## 11. Календарь запуска на 12 недель

| Неделя | Действие | Что мониторим |
|---|---|---|
| **−3 до −1** | Подготовка: техника, /american-made/, чистка сайта, negatives list, OCT | Готовность чек-листа |
| **1** | **День 1:** запуск Power (5 ad groups, кроме Power_Manufacturer) | Search Terms ежедневно. Негативы добавляем каждый день |
| **2** | Запуск Retargeting-кампании (когда наберётся 100+ посетителей в GA4) | Impression share, Quality Score первых ключей |
| **3** | Оценка первых данных. Если QS > 6 в основных группах — включаем Power_Manufacturer | Отчёт по CPA micro-conversions |
| **4** | **Запуск GSU-кампании** | Не менять структуру Power ещё 2 недели |
| **5–6** | Первая ротация объявлений. Отсекаем худший RSA в каждой ad group | RSA performance по impressions и CTR |
| **7** | **Запуск Auto-кампании** | |
| **8** | Первый полный отчёт Марка о качестве лидов. Ревизия ключей — какие приводят RFQ, какие только клики | Cost per qualified interaction |
| **9–10** | Пересборка объявлений на основе того, что реально работает | |
| **10** | **Запуск Mobile-кампании** | |
| **11–12** | Первая серьёзная оптимизация. Убираем ключи с CPA > 3× среднего. Готовим отчёт для Игоря | Полный отчёт по каналу |

**После недели 12:** первое стратегическое решение — масштабировать, сузить или добавить Markets-кампании (Data Centers, Defense, Renewables, EPC).

---

## 12. Бюджет — три сценария

| Сценарий | Месячный бюджет | Что реалистично ожидать |
|---|---|---|
| **Минимальный** | $3000 | Только Power. Данные для базового обучения. 1–2 квалифицированных обращения за 3 месяца |
| **Рабочий (рекомендуемый)** | $7000–8000 | Power + GSU + Retargeting. Honest test для канала. 3–5 квалифицированных обращений за 3 месяца |
| **Ускоренный** | $12000–15000 | Все продукты параллельно + расширенная гео. 5–8 обращений за 3 месяца, выше риск ошибок оптимизации |

**Рекомендация:** **Рабочий сценарий**. Ускоренный только если есть жёсткий дедлайн и готовность к тому, что часть денег точно уйдёт на обучение алгоритма.

### Распределение внутри рабочего сценария ($7500/месяц)

| Кампания | Бюджет/месяц | % |
|---|---|---|
| Power | $4500 | 60% |
| GSU (с недели 4) | $2000 | 27% |
| Retargeting | $1000 | 13% |

После недель 7 и 10 (запуск Auto и Mobile) бюджет перераспределяется на основе первых данных.

---

## 13. Что мониторить и когда

### Ежедневно первые 4 недели (потом 3 раза в неделю)

- **Search Terms Report** — каждое утро. Всё нерелевантное → в негативы моментально
- **Anomaly detection** — резкие всплески или падения impressions
- **Budget pacing** — не сжигаем ли бюджет за первые часы дня

### Еженедельно

- **CPA по конверсиям** (primary и secondary)
- **Quality Score** изменения по ключам. Уход QS на 1 балл вниз — разбираться немедленно
- **Impression share** и `impression share lost due to budget/rank`
- **Ad group performance** — есть ли ad groups с нулевыми конверсиями и высоким spend
- **RSA asset performance** — какие headlines работают, какие "Low"
- **Search terms** ретроспективно за неделю

### Ежемесячно

- **N-gram analysis** по search terms — какие паттерны фраз конвертят
- **Ad copy testing rotation** — вводим новые RSA, убираем худшие
- **Device performance** — desktop / mobile / tablet
- **Geo performance** — по штатам, если гео широкий
- **Conversion path analysis** — путь пользователя от клика до RFQ

### Раз в квартал

- **Стратегический обзор** — что расширить, что убрать, что переструктурировать
- **Отчёт Игорю** — pipeline, CPL, качество лидов, prognosis

---

## 14. Метрики успеха

### Метрика №1 — Cost per Qualified Interaction (CPQI)

Формула: `Total Ads Spend / (SQL + значимые сессии > 2 минут)`

Целевой диапазон: **$2500–$8000**. Ниже — либо ошибка в квалификации, либо неправильный трафик. Выше — сигнал для пересмотра.

### Метрика №2 — Cost per SQL

Целевой диапазон первые 6 месяцев: **$8000–$15000**.

Это дорого по меркам обычного B2B — но одна сделка LPT = $5–10M. Стандарт индустрии для LPT.

### Метрика №3 — Pipeline Contribution

Сколько pipeline value ($) сгенерировала реклама. Основная метрика для отчёта Игорю.

### Метрика №4 — SQL Rate

`SQL / All Ads-Sourced Leads`. Целевой диапазон: **15–30%**. Ниже — трафик низкого качества, надо чистить негативы. Выше — вероятно слишком узкий охват.

### Что НЕ является метрикой успеха

- Клики (сами по себе)
- CTR (сам по себе)
- Скачивания даташитов (secondary, не основная)
- Impression share (только диагностика)
- Cost per click (только диагностика)

**Реклама на LPT-рынке работает или не работает по единственному критерию:** приносит ли она квалифицированные RFQ, которые Марк может довести до сделки.

---

## Приложение: краткая справка "делать / не делать"

### ✅ Делать

- Manual CPC 9–12 месяцев
- OCT из CRM
- 60% Exact / 40% Phrase
- 250+ негативов в Account-Level list
- Отдельные посадочные под интенты
- 3 RSA на ad group, разные углы
- Ежедневный Search Terms Report первые 30 дней
- Еженедельный созвон с Марком
- Одна структурная правка в неделю максимум
- Конкретные цифры и compliance-теги в headlines
- Все extensions (sitelinks, callouts, structured snippets)
- **Явный список 27 штатов в Locations to Target**
- **Явный список 23 штата + территории в Locations to Exclude**
- **Location Options: Target = Presence, Exclude = Presence or Interest**
- **Bid adjustments по трём кругам штатов**

### ❌ Не делать

- Smart Bidding до 30+ квалифицированных SQL
- Performance Max в первые 12 месяцев
- Broad Match
- Обучать алгоритм на скачиваниях даташитов
- Держать `domestic` в негативах
- Запускать все продукты одновременно
- Одна посадочная для всех интентов
- Слова `Best`, `Leading`, `Premium`, `#1` в headlines
- Имена конкурентов в тексте объявлений (только в ключах)
- Менять структуру чаще раза в 3 недели после запуска
- Ожидать заявки в первые 6–8 недель
- **Ставить United States целиком как локацию**
- **Оставлять Location Options по умолчанию (Presence or Interest для target)**
- **City-level targeting в первые 3 месяца**

---

*План подготовлен на основе консенсуса двух независимых экспертов по B2B PPC для тяжёлого industrial-оборудования. Все цифры (CPC, CTR, CR, CPA) — рыночные ориентиры и могут корректироваться после первых 6–8 недель работы.*

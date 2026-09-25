# LIMIK — Negative Keywords List for Google Ads

**Отрицательные ключевые слова для рекламных кампаний**

*Для PPC-специалиста · Ниша: Large Power Transformers (LPT) · Рынок США · Июль 2026*

---

## Как использовать этот список

### Уровень применения

Все негативы загружаются как **Account-Level Negative Keyword List** через **Shared Library → Negative Keyword Lists** и применяются ко всем поисковым кампаниям сразу.

Причина: одна общая логика фильтрации для всех продуктов (Power, GSU, Auto, Mobile). Никаких product-specific негативов на старте — только один общий список.

### Match types

- **Broad Match** используется для отдельных слов и коротких фраз (по умолчанию).
- **Phrase Match** ("в кавычках") используется для составных фраз, где важен порядок слов (например: `"how does a transformer work"`).
- **Exact Match** ([в скобках]) в негативах используется редко — только когда нужно точное совпадение.

Формат в таблицах ниже:
- `слово` — Broad Match
- `"фраза"` — Phrase Match
- `[точная фраза]` — Exact Match

### Порядок работы

1. Загрузить весь список ниже в один Account-Level Negative Keyword List
2. **УБРАТЬ** слово `domestic` из существующего списка негативов (если оно там есть)
3. Первые 30 дней после запуска — ежедневная проверка Search Terms Report → пополнение списка
4. Через 3 месяца список должен вырасти до 500–700 фраз
5. Через 6 месяцев — 800–1200 фраз. Это нормально для B2B-ниши

---

## ⚠️ Критически важно перед загрузкой

### Слова, которые НЕЛЬЗЯ добавлять в негативы

| Слово | Почему нельзя |
|---|---|
| `domestic` | Ключевой коммерческий термин для нас: `domestic power transformer manufacturer`, `domestic content`, `US domestic supplier`. Уберёт весь кластер BABA |
| `home` | Может задеть `home-grown American manufacturer`. Использовать только Phrase, если добавлять (`"home use"`) |
| `manufacturer` | Очевидно |
| `supplier` | Очевидно |
| `usa` / `american` / `united states` | Наши коммерческие слова |
| `custom` | Наш дифференциатор — custom-engineered transformers |
| `engineering` / `engineer` | Часть нашего позиционирования |
| `utility` / `utilities` | Наш целевой сегмент |
| `substation` | Наш продукт |
| `industrial` | Часть нашей целевой аудитории |

---

## Список отрицательных ключей — 250+ фраз

### 1. Ремонт, сервис, обслуживание

Люди ищут починку, а не покупку нового.

```
repair
repairs
repairing
fix
fixing
broken
maintenance
service
services
servicing
refurbish
refurbished
refurbishment
rewinding
rewind
oil filtration
oil testing
oil test
oil change
oil analysis
oil sample
inspection
inspections
troubleshoot
troubleshooting
diagnostics
diagnostic
"how to repair"
"how to fix"
"how to test"
```

### 2. Вторичный рынок и аренда

Не наш сегмент. Мы производитель нового оборудования.

```
used
second hand
"second-hand"
pre-owned
rental
rentals
rent
renting
lease
leasing
resale
auction
surplus
salvage
scrap
recycling
recycle
```

### 3. География — страны-конкуренты и другие регионы

Отсекаем поиск иностранных производителей.

```
china
chinese
"made in china"
india
indian
"made in india"
pakistan
pakistani
mexico
mexican
germany
german
korea
korean
japan
japanese
turkey
turkish
russia
russian
brazil
brazilian
italy
italian
france
french
uk
europe
european
canada
canadian
philippines
vietnam
thailand
indonesia
```

### 4. HR, работа, карьера

Ищут работу, а не оборудование.

```
job
jobs
"job openings"
career
careers
"career opportunities"
hiring
hire
apply
application
resume
cv
interview
salary
salaries
wage
wages
"how much do"
apprentice
apprenticeship
intern
internship
recruiter
recruitment
```

### 5. Информационные / образовательные запросы

Хотят разобраться, а не купить.

```
"what is"
"what are"
"how does"
"how do"
"how to"
"how it works"
"how does it work"
tutorial
tutorials
lesson
lessons
course
courses
class
classes
lecture
lectures
training
"training program"
certification
certified
academy
school
education
"for dummies"
"for beginners"
basics
"basic principles"
"introduction to"
"guide to"
"beginner's guide"
"comprehensive guide"
explained
"in simple terms"
definition
definitions
meaning
```

### 6. Академические и научные запросы

Университеты, исследования, диссертации.

```
student
students
university
universities
college
research
"research paper"
"academic paper"
thesis
dissertation
"case study"
whitepaper
"white paper"
"phd"
professor
lecturer
scholarly
```

### 7. Аналитика, отчёты, рынок

Аналитики Bloomberg, McKinsey — не покупатели.

```
"market size"
"market report"
"market analysis"
"market forecast"
"market share"
"market research"
"market trends"
"market outlook"
"industry report"
"industry analysis"
"industry outlook"
"industry overview"
"research report"
"market study"
statista
statistics
"statistical data"
"data report"
"annual report"
gartner
mckinsey
bloomberg terminal
```

### 8. Документы, схемы, чертежи

Ищут PDF, а не производителя.

```
pdf
"pdf download"
"free download"
manual
manuals
datasheet
"data sheet"
schematic
schematics
diagram
diagrams
wiring
"wiring diagram"
autocad
dwg
"dwg file"
"cad file"
"3d model"
"3d models"
blueprint
blueprints
drawing
drawings
"technical drawing"
```

### 9. Микро-электроника, DIY, хобби

Совсем не наш продукт — трансформаторы для аудио, Arduino, моделизма.

```
arduino
raspberry
"raspberry pi"
hobby
hobbyist
diy
"do it yourself"
audio
"audio transformer"
guitar
"guitar amp"
"guitar amplifier"
amplifier
amp
tube
"tube amplifier"
"vacuum tube"
speaker
microphone
mic
"tesla coil"
model
"model train"
train
railway
microwave
"microwave oven"
plasma
```

### 10. Малое напряжение и бытовое оборудование

Не наш класс.

```
12v
24v
36v
48v
110v
120v
220v
230v
240v
120 volt
220 volt
240 volt
low voltage
lv
adapter
"power adapter"
"wall adapter"
"travel adapter"
"voltage converter"
"step down"
"step-down"
"step up converter"
"buck converter"
"boost converter"
converter
pcb
"printed circuit"
```

### 11. B2C и бытовые применения

Не наши покупатели.

```
residential
residence
"home use"
household
consumer
"consumer grade"
retail
hvac
"air conditioning"
"pool pump"
"hot tub"
"electric vehicle"
ev
"ev charging"
"ev charger"
tesla
"solar panel"
"solar panels"
```

### 12. Ретейл-платформы и маркетплейсы

Тут не купят LPT.

```
amazon
ebay
alibaba
aliexpress
walmart
"home depot"
lowes
grainger
mcmaster
"mcmaster-carr"
digikey
mouser
newark
"harbor freight"
```

### 13. Нецелевые типы трансформаторов

Продукты, которых мы не делаем.

```
isolation
"isolation transformer"
"current transformer"
"potential transformer"
"instrument transformer"
"voltage transformer"
toroidal
"toroidal transformer"
variac
"pole mounted"
"pad mounted"
"pad-mount"
"pole-mount"
"dry type"
"dry-type"
"cast resin"
"cast-resin"
"encapsulated transformer"
"control transformer"
"buck-boost"
"pulse transformer"
"switching transformer"
"flyback transformer"
"ignition transformer"
"neon transformer"
"welder transformer"
"welding transformer"
"microwave transformer"
"furnace transformer"
"heater transformer"
"lighting transformer"
"landscape transformer"
"door bell"
"doorbell"
```

### 14. Дистрибутивные трансформаторы

Не наш класс. Мы делаем LPT — крупные силовые.

```
distribution
"distribution transformer"
"distribution transformers"
"single phase distribution"
"three phase distribution"
```

### 15. Ценовые низкоквалифицированные запросы

Кто спрашивает "how much" — не наш procurement.

```
cheap
cheapest
"low cost"
"low-cost"
"lowest price"
budget
"budget friendly"
"budget-friendly"
"affordable"
"how much does"
"how much is"
"how much do"
"price of"
"price list"
"pricing list"
"cost of"
free
discount
discounts
deal
deals
sale
sales
promo
promotion
promotions
coupon
coupons
```

### 16. Игры, развлечения, поп-культура

Transformers (фильм и игрушки) — вечная проблема семантического пересечения.

```
movie
movies
film
films
toy
toys
game
games
gaming
gameplay
optimus
bumblebee
megatron
"transformers movie"
"transformers game"
"transformers toy"
"transformers action"
autobot
autobots
decepticon
decepticons
hasbro
lego
cartoon
anime
```

### 17. Общие поисковые "мусорные" модификаторы

```
wikipedia
wiki
reddit
quora
"yahoo answers"
answers
forum
forums
"stack exchange"
youtube
video
videos
"youtube channel"
review
reviews
rating
ratings
comparison
compare
"vs comparison"
"top 10"
"best 10"
"list of"
"top list"
ranking
rankings
```

### 18. Расходники и компоненты

Ищут запчасти, а не готовое изделие.

```
bushing
bushings
tap changer
"tap-changer"
"tap changer parts"
gasket
gaskets
"radiator fan"
"cooling fan"
"cooling fans"
core
"core lamination"
"silicon steel"
crgo
winding
windings
"copper wire"
"aluminum wire"
insulator
insulators
"insulating oil"
"transformer oil"
"nomex"
"pressboard"
kraft paper
"kraft paper"
"buchholz relay"
```

### 19. Установка, транспортировка, аксессуары

```
installation
installer
install
installing
"installation guide"
"installation manual"
transportation
transport
shipping
freight
delivery service
"delivery service"
crane
"crane service"
foundation
"concrete foundation"
"transformer pad"
"transformer vault"
"transformer enclosure"
"transformer housing"
```

### 20. Юридические и специфические запросы

```
lawsuit
"class action"
recall
"product recall"
"safety notice"
"safety recall"
patent
patents
trademark
license
licensing
insurance
warranty claim
```

---

## Итого

**Общее количество:** ~280 отрицательных ключей в 20 категориях.

Этого достаточно для безопасного запуска. После первых 30 дней список вырастет за счёт реальных Search Terms.

---

## После запуска — процесс поддержания

### Первые 30 дней — ежедневно

1. Открыть **Search Terms Report** каждое утро
2. Отсортировать по impressions (по убыванию)
3. Отфильтровать по "No conversions"
4. Каждую нерелевантную фразу → добавить в Account-Level Negative List **тем же match type**, каким она пришла
5. При добавлении отдельного слова из фразы — **проверить контекст**: не заденет ли легитимный запрос

### После 30 дней — 2–3 раза в неделю

Тот же процесс, но реже.

### Ежемесячно

- **N-gram analysis** по накопленным Search Terms — найти паттерны, которых нет в текущем списке
- Пересмотр категорий: не появились ли новые типы мусорного трафика

### Правило "красной линии"

Если один и тот же нерелевантный запрос появляется **третий раз за неделю** — что-то не так в структуре ключей или в списке негативов. Немедленный разбор.

---

## Что делать перед загрузкой

**Чек-лист перед импортом:**

- [ ] Убрать `domestic` из существующего списка негативов
- [ ] Проверить, что `home` не стоит в Broad — только Phrase
- [ ] Создать Shared Negative Keyword List в Google Ads
- [ ] Импортировать список пачками (Google Ads принимает CSV)
- [ ] Применить список ко всем существующим и будущим поисковым кампаниям
- [ ] Задокументировать дату загрузки для будущего аудита

---

*Список подготовлен на основе консенсуса двух независимых экспертов по B2B PPC для тяжёлого industrial-оборудования. Все негативы основаны на реальных паттернах поискового мусора для трансформаторной тематики.*

# LIMIK Core — концепт-рендери модуля (ТЗ і промпти)

Складено 2026-09-29. Рішення користувача: рендери модуля генеруємо через AI за референсами (виняток із правила «не генерувати фото через AI» — лише концепт-рендери продукту LIMIK Core, див. AGENTS.md). Логотип і написи наносимо вручну у Photoshop: генератори спотворюють текст і логотипи.
На сайті під рендерами — дрібний підпис **«Concept rendering»** (продукту ще немає; чесно для інвесторів і реклами).

## Референси
1. Schneider Electric, силовий модуль у розрізі: студійний рендер на білому, знято одну довгу стінку, чистий «каталожний» вигляд. → стиль для розрізу.
2. 20-ft модуль із драйкулерами на даху й розрізом дугою: інформативно (зони електрика / UPS / газ / стійки), але перевантажено й застаріло. → беремо лише ідею зон.
3. Boreas, 40-ft: прозора бокова стінка, вентилятори конденсаторів у торці, модуль на бетонній плиті. → простий і зрозумілий.
4. Anduril × AWS Menace-I (реальне фото): матовий чорний 20-ft, великі білі цифри «01», назва вертикально, технічна мікротипографіка. → референс брендування.

## Рішення по вигляду
- **Колір корпусу:** глибокий темно-синій, матовий, близький до RAL 5011 Steel Blue (на фото `#000821` читається як чорний, тому для фарби беремо трохи світліший синій). Рама й кутові фітинги — у колір корпусу.
- **Брендування (стиль Menace-I, у наших кольорах):** великий білий напис **LIMIK CORE** на боці, номер моделі **40** / **20** великими цифрами, тонка голуба лінія `#05B2FC` вздовж низу, лого LIMIK на дверях, дрібна технічна мікротипографіка (модель, kW, U.S.-manufactured). Без жовто-чорних «warning»-смуг.
- **Охолодження:**
  - **Core 40:** драйкулери на даху, на низькій рамі без огорожі (огорожа з референсу 2 візуально шумить). Одразу читається як ЦОД, компактний силует. На сайті вже написано «drycooler or chillers».
  - **Core 20:** вентилятори конденсаторів у торцевій стінці (як Boreas), без надбудови на даху.
- **Наша перевага в кадрі:** поруч із Core 40 — pad-mount MV-трансформатор LIMIK у тих самих кольорах. Цього немає в жодного конкурента.

## Список кадрів
| № | Кадр | Куди | Формат |
|---|---|---|---|
| 1 | Core 40 зовні, 3/4, на бетонній плиті, поруч MV-трансформатор, сутінки | hero (фон) | 21:9, 3840 px |
| 2 | Core 40 у розрізі, студія, світлий фон | «What is» / Platform / специфікації | 21:9 і 2:1 |
| 3 | Core 20, 3/4, ізольовано на світло-сірому | картка Core 20 | 16:10 |
| 4 | Core 40, 3/4, ізольовано на світло-сірому | картка Core 40 | 16:10 |
| 5 | Кампус: 6–8 модулів Core 40 у ряд + трансформатори, вид згори під кутом, сутінки | картка Campus | 16:10 |

## Промпти (англійською, для генератора)
Загальний хвіст до кожного: `photorealistic 3D product render, industrial design, clean studio lighting, sharp details, no text, no logos, blank side panels, 8k`

1. **Hero:** `A 40-foot high-cube shipping-container modular AI data center, matte deep navy blue steel (RAL 5011), low-profile drycooler units mounted on the roof on a slim steel frame, a matching navy pad-mount medium-voltage transformer beside it, cable trench between them, set on a clean concrete pad at an industrial site, three-quarter front view from low angle, blue-hour dusk sky, soft rim light, subtle cool lights in door windows, wide cinematic 21:9 composition with empty sky on the left for headline text`
2. **Розріз:** `Cutaway 3D render of a 40-foot modular AI data center container, one long side wall removed, matte deep navy blue exterior shell, interior clean light gray: left zone electrical switchgear and UPS cabinets, center zone coolant distribution units with insulated liquid-cooling pipes, right zone a row of black high-density GPU server racks with hot aisle containment, overhead cable trays, drycoolers on the roof, isolated on a seamless light gray studio background, soft shadow, three-quarter view, catalog style like Schneider Electric product renders`
3. **Core 20:** `A 20-foot high-cube shipping-container micro data center, matte deep navy blue steel (RAL 5011), integrated condenser fans in the end wall, single personnel door on the side, compact and clean, isolated on a seamless light gray studio background, soft floor shadow, three-quarter view`
4. **Core 40:** `A 40-foot high-cube shipping-container modular AI data center, matte deep navy blue steel (RAL 5011), low-profile drycoolers on the roof on a slim frame, personnel door and service hatches on the side, isolated on a seamless light gray studio background, soft floor shadow, three-quarter view`
5. **Кампус:** `Aerial three-quarter view of a modular AI data center campus: eight identical 40-foot navy blue container data center modules with roof drycoolers in a neat row on concrete pads, pad-mount medium-voltage transformers between them, a small outdoor electrical yard at the end, gravel and access road, open landscape, blue-hour dusk, realistic scale`

## Після генерації (Photoshop)
- Нанести: LIMIK CORE, номер моделі, лого LIMIK, голуба лінія `#05B2FC`, мікротипографіка.
- Експорт WebP; кадри 3–4 — на прозорому фоні (PNG/WebP з альфою).
- Підпис на сайті: «Concept rendering».

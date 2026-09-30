# LIMIK Core — тексти конфігурацій для погодження

Дата: 2026-09-30. Статус: **чернетка контенту, не застосована до сайту**. Користувач погодив текст із зауваженням: не обмежувати застосування корпоративним AI та дослідженнями. Нижче підготовлено ширше позиціонування на цей запит. Візуальний напрям CANCOM погоджено. Числа 100/600 kW залишаються попередніми концепційними орієнтирами; це не підтвердження готової інженерної комплектації. Джерела: [матриця](../research/limik-core-concept-matrix-2026-09-30.md), [CANCOM](../research/cancom-analysis-2026-09-30.md), [план](../plans/modular-configurations-update.md).

Тексти для англомовного сайту нижче готові до перенесення після погодження концепції. Українські пояснення — для обговорення з користувачем. Прихований `data-benchmark` не замінює видимої примітки. Скіл Ogilvy Copywriting застосовано для чіткого позиціонування й конкретного опису без непідтверджених рекламних обіцянок; його загальні рекомендації не змінюють погоджений дизайн та анімацію.

## 1. Вступ до Configurations

Eyebrow: **Configurations**

Heading: **Choose the scale for your compute and IT infrastructure**

Intro:

> Plan a compact server deployment, a high-density compute module, or a multi-module campus. Each concept combines IT space, power and cooling around your equipment, workloads and site.

Видима примітка біля параметрів, перед картками:

> **Concept configurations.** Capacities and equipment scope below are preliminary planning targets. Final specifications, availability and delivery schedules require project engineering and supplier confirmation.

Слово Concept має бути видно також у мітках карток, щоб статус не губився при переході прямо до окремої моделі.

## 2. Core 20

Мітка: **Compact · concept**

Назва: **Core 20**

Короткий сценарій:

> Compact infrastructure for servers, storage and local computing.

Теги: **2 IT racks** · **100 kW IT target** · **Existing site power**

Розгорнутий опис:

> For business applications, data storage and processing close to users or equipment, including smaller compute and AI deployments. The proposed two-rack configuration uses existing site power, with UPS backup. Cooling is matched to your hardware; the liquid-cooled base uses a separate heat-rejection unit. A dedicated transformer is outside the base scope.

Українською: компактна інфраструктура для серверів бізнес-застосунків, сховищ даних та локальної обробки біля користувачів або обладнання; невеликі обчислювальні й AI-кластери також можливі після перевірки. Планується дві стійки й 100 kW IT для попередньої рідинної бази; звичайне повітряне обладнання потребує іншої комплектації охолодження й окремої перевірки доступної потужності. Новий трансформатор у базу не входить. Не обіцяємо відсутність будь-яких електромонтажних робіт.

Кнопка розкриття: **View configuration**; відкритий стан: **Details open**.

Кнопка заявки: **Request Core 20**.

Планований підпис під власним візуалом:

> Core 20 concept: compact IT space with separate site cooling equipment.

## 3. Core 40

Мітка: **High-density · concept**

Назва: **Core 40**

Короткий сценарій:

> A dedicated module for high-density computing.

Теги: **6 IT racks** · **600 kW IT target** · **Planned MV transformer**

Розгорнутий опис:

> For scientific computing, engineering simulation, rendering and AI workloads that need dense server infrastructure. The proposed liquid-cooled configuration has four compute positions and two network or storage positions, with UPS backup and an external LIMIK medium-voltage transformer. Power and cooling are matched to your hardware within the 600 kW total IT target.

Українською: основний модуль для щільних обчислювальних систем: наукових розрахунків, інженерного моделювання, рендерингу та AI. Роль визначається вимогами обладнання, а не лише назвою задачі. Чотири обчислювальні позиції та дві для мережі/сховищ, зовнішній трансформатор LIMIK, UPS і комбіноване охолодження. 600 kW — попередній IT-бюджет рідинної бази, не потужність кожної стійки й не гарантія 600 kW для повністю повітряного наповнення. Порожня стійка може замінюватися готовою OEM-стійкою замовника.

Кнопка заявки: **Request Core 40**. Розкриття та відкритий стан — як у Core 20.

Планований підпис під власним візуалом:

> Core 40 concept cutaway: IT racks, coolant distribution and service access. Transformer, UPS batteries and heat rejection are outside the IT enclosure.

Не позначати всі зовнішні блоки як відсутні в комплектації: розміщення зовні не означає постачання замовником. Трансформатор і технічні блоки плануються в поставці Core 40; генератор є опцією.

## 4. Core Campus

Мітка: **Multi-module · concept**

Назва: **Core Campus**

Короткий сценарій:

> A site plan for phased, multi-module deployment.

Теги: **Multiple Core 40 modules** · **Project-specific capacity** · **Site power design**

Розгорнутий опис:

> For organizations and operators planning a larger computing or IT site. Core Campus brings multiple modules into a site plan with transformer capacity, power distribution, cooling and backup defined for each phase. Module count and equipment configurations follow your workloads, available grid capacity and expansion plan.

Українською: індивідуальний проєкт кількох Core 40. Кількість модулів і спільне живлення/охолодження визначаються для кожної черги. Приклад двох модулів дає 1.2 MW IT, але це не універсальна комплектація Campus. LIMIK не приписуємо будівництво всієї підстанції.

Кнопка заявки: **Discuss Core Campus**. Розкриття та відкритий стан — як у Core 20.

Планований підпис під власним візуалом:

> Core Campus concept: multiple data center modules with site power and cooling infrastructure planned in phases.

## 5. Компактне порівняння

Title: **Compare the planning targets**

| Criterion | Core 20 | Core 40 | Core Campus |
|---|---|---|---|
| IT capacity target | 100 kW | 600 kW | Defined by module count and site design |
| IT rack positions | 2 | 6: 4 compute + 2 network/storage | Defined per phase |
| Power source | Existing 480 V site service | Site MV supply via planned transformer | Project-specific MV/LV design |
| Transformer scope | Outside base scope | External LIMIK transformer planned in base | LIMIK transformers sized per project |
| Cooling concept | Liquid + air; external heat rejection | Liquid + air; external heat rejection | Module-level or shared systems |
| UPS and cooling redundancy | N+1 component target | N+1 component target | Defined per project |
| Compute hardware | Customer-supplied | Customer-supplied | Customer-supplied |

Примітки під порівнянням:

> IT capacity includes servers, networking and storage. Site power must also cover cooling and electrical losses. The 480 V baseline is for U.S. projects; other voltages require a different electrical configuration.

> N+1 refers to specified UPS and cooling components. It does not mean two independent power paths or certified site availability.

> Capacity targets describe the proposed liquid-cooled base. Air-cooled servers or a different equipment mix require a cooling and capacity review.

Не додавати 150 kW до коротких тегів усіх карток. Якщо цей орієнтир буде погоджено, показувати його в технічних деталях Core 40 разом із сумарним лімітом і розподілом стійок.

## 6. Комплектація

Title: **What the concept includes**

| Planned in the base scope | Optional scope | Supplied by the customer |
|---|---|---|
| Enclosure and IT rack positions; rack power distribution; UPS and batteries; liquid and air cooling; external heat rejection; monitoring, access control, leak and fire protection systems. Core 40 also includes a planned external LIMIK transformer. Campus scope is defined per project. | Generator and transfer system; longer battery autonomy; additional redundancy; heat recovery; climate-specific free cooling; service arrangements. | Servers and GPUs; networking and storage; software; prepared site, foundations, permits, approved power connection and external network connectivity. |

Note:

> Final equipment, responsibilities and site works are defined in the project scope. External equipment needs additional space and service access around the module.

Пожежогасіння, типи батарей, конкретні виробники й технічні номінали не визначаються цим рекламним текстом. П'ятихвилинна автономія, 1.25 MVA, 150/800 kW підключення й точні резерви залишаються в матриці для інженерного обговорення; короткі картки ними не перевантажуємо.

## 7. Допомога з вибором

Heading: **Which LIMIK Core concept fits your site?**

Body:

> Share your target IT capacity, rack hardware and available power. These details form the starting point for a configuration and site review.

CTA: **Discuss my site**

Не обіцяємо відповідь за 48 годин без підтвердження клієнтом; фактична форма зараз демонстраційна. Заміна підпису не змінює її поведінку або не підключає надсилання.

## 8. Пов'язані тексти — пакет для майбутнього перенесення

Звірено поточний HTML секцій Hero, What is, Platform, Configurations, Specifications, Applications, Timeline, Manufacturing, FAQ/JSON-LD і форми. Нижче — необхідні зміни згадок для послідовної концепції, а не виконані правки сайту.

### Hero

H1: **LIMIK Core: modular data centers for compute and IT**

Lead:

> Plan infrastructure for business applications, data storage, high-performance computing and AI. LIMIK Core brings IT space, power and cooling into one modular concept, configured around your equipment and site.

CTA: **Discuss your project**. Micro: **Concept planning · Specifications confirmed per project**.

Заміна H1 потрібна, оскільки «U.S.-built» зараз створює враження готового виробленого модуля. Це не висновок щодо вже існуючого виробництва трансформаторів LIMIK.

### What is

Heading: **IT space, power and cooling planned together**

Body:

> LIMIK Core is a proposed modular data center line for customer-supplied servers, storage and networking equipment. The concept separates IT space from external power and heat-rejection equipment, with the layout, cooling and site connections developed around your workloads and selected configuration.

Панель орієнтирів: Core 20 — **100 kW IT target**; Core 40 — **600 kW IT target**; Campus — **Project-specific**. Якщо ці числа погоджено, використовувати їх замість неузгоджених показників lead time / climate. Не міняти геометрію або поведінку лічильників до етапу реалізації й відповідної перевірки.

### Platform

Intro:

> The proposed platform coordinates the site power source, rack distribution, cooling and controls. Equipment selection and supplier responsibilities are confirmed during project engineering.

Grid & transformer:

> Core 20 starts with a review of existing site power. Core 40 proposes an external LIMIK medium-voltage transformer. Campus transformer capacity and MV distribution are defined for the site; complete substation works are a separate scope.

Distribution & backup:

> Rack distribution and UPS backup are planned around the selected hardware. N+1 component redundancy is the base target; independent power paths and longer autonomy require a separate design.

Liquid cooling:

> The base concept uses direct-to-chip cooling with coolant distribution units, plus air cooling for remaining components. External heat rejection is sized to site climate and coolant temperatures. PUE is determined by the completed site design.

Compute & controls:

> IT space, service access and monitoring are planned around customer-supplied racks or servers. Hardware compatibility requires a review of dimensions, weight, electrical connections and cooling requirements.

Теги без нових сертифікацій: **Site power review / Transformer scope per model**; **N+1 component target / UPS backup**; **Liquid + air / External heat rejection**; **Customer hardware / Leak monitoring**. Прибрати непідтверджені PUE 1.2, all-platform chip compatibility та «без точок відмови».

### Specifications

Використати порівняння з розділу 5. Детально: 100/600 kW IT targets, 150/800 kW preliminary site connection budgets, Core 20 2 × 50 kW; Core 40 4 × 145 + 2 × 10 kW. 150 kW per AI rack — лише зі збереженням сумарного бюджету Core 40. Рейтинг трансформатора 1.25 MVA — попередній розрахунок. Немає затверджених PUE, climate range, NEMA-rating, сертифікації Tier, SKU батарей або сумісності з конкретними GPU. Для кожного такого поля текст **Defined during project engineering**, якщо поле залишається в макеті.

### Timeline

Heading: **From concept to a project schedule**

Intro:

> Delivery timing is established after the equipment scope, engineering requirements and supplier lead times are confirmed. Site preparation and utility connection follow their own schedules.

Етапи без календарних обіцянок: **01 · Define the project** → **02 · Confirm design and suppliers** → **03 · Plan assembly and factory testing** → **04 · Arrange delivery and site commissioning**.

Тексти етапів: **Review the workload, hardware and site power.** / **Confirm drawings, scope and long-lead equipment.** / **Set the build sequence and acceptance test requirements.** / **Coordinate site readiness, transport and on-site testing.**

Parallel power track:

> For projects with LIMIK transformers, the power equipment schedule is coordinated with the module plan. A shared delivery date is confirmed only after supplier and production review.

6–9 місяців залишаються внутрішнім плановим припущенням для першої лінійки. Рекомендація для публічного тексту — **Project-specific schedule**, доки виробництво не підтвердить строк. Попередні 16–24 тижні не залишати в інших секціях після майбутнього перенесення.

### FAQ — відповіді, пов'язані з конфігураціями

**Which LIMIK Core configuration fits my site?**

> Core 20 is the compact concept for servers, storage and local computing using existing site power. Core 40 is the high-density compute concept with a planned external transformer. Core Campus is a site-specific design for multiple modules. The starting point is your workloads, rack hardware, target IT load and available power.

**Is the power transformer included?**

> An external LIMIK medium-voltage transformer is proposed in the Core 40 base scope. Core 20 relies on suitable existing site service. Campus transformer requirements and supply scope are defined per project.

**Which GPUs are supported?**

> AI and HPC equipment are among the intended applications. Compatibility with a specific GPU server or rack system must be confirmed against its power, cooling, dimensions, weight and connection requirements. Compute hardware is customer-supplied.

**Is LIMIK Core only for AI?**

> No. The concept also addresses business applications, storage, local data processing and high-performance computing. Power, cooling and rack layout must be matched to the equipment; the high-density liquid-cooled base is not automatically suitable for every server configuration.

**How is LIMIK Core cooled?**

> The base concept combines direct-to-chip liquid cooling with air cooling for remaining components and external heat rejection. Equipment selection depends on the server heat split, coolant requirements and site climate. Fully air-cooled configurations require a separate design.

**What rack density is planned?**

> The Core 20 base target is two 50 kW racks. Core 40 allocates 145 kW to each of four compute positions and 10 kW to each of two network or storage positions. A compute position may be planned up to 150 kW only while keeping the total Core 40 IT load within 600 kW and confirming cooling requirements.

**What redundancy is planned?**

> The base target is N+1 for specified UPS and cooling components. This does not establish two independent power paths or remove every site-level single point of failure. Additional redundancy is defined during project engineering.

**What is the delivery schedule?**

> Delivery timing is project-specific and requires confirmation of engineering, supplier availability and production planning. Readiness for shipment, transport, utility connection and site commissioning are separate milestones.

**What site preparation is required?**

> The site needs a suitable foundation, approved electrical capacity, network connectivity and space for external technical equipment. Core 20 starts with an existing 480 V supply review; Core 40 requires an MV supply and transformer installation. Permits, access and responsibility for site works are defined per project.

**Can the module be relocated?**

> Relocation feasibility depends on the final enclosure, installed equipment and permitted transport route. Standard ISO transport dimensions are not yet confirmed for LIMIK Core.

**Can it operate in extreme climates?**

> The enclosure and cooling package must be designed for the project's ambient temperatures and local conditions. A general operating range has not yet been confirmed for LIMIK Core.

Для майбутньої реалізації ці відповіді є попередніми концепційними, не confirmed answers. Не переносити їх автоматично до підтвердженого FAQPage JSON-LD; застосувати правило `data-unconfirmed` та звірку з SEO-правилами. Поточну JSON-LD-розмітку в цьому кроці не змінено.

### Межі наступного перенесення

- Зберегти `data-model="Core 20"`, `Core 40`, `Core Campus`, значення `q-model` і робочі `data-go`-переходи; нові CTA не повинні втратити вибір конфігурації. JS підставляє View configuration / Details open — ці рядки збережено.
- Публічні capacity targets мають показувати статус concept, а не лише невидимий `data-benchmark`.
- Не фіксувати ширину 3.6 m на картках; необхідність широкого Core 20 ще не доведена. Позначення 20/40 ft у технічних деталях — попередня довжина, не затверджені ISO-габарити.
- В Applications і Manufacturing лишаються окремі твердження «capacity this year», «skipping the interconnection queue», U.S.-built, full-load FAT та строки великих трансформаторів. Перед публікацією їх треба підтвердити або привести до статусу концепції. Не перетворювати цю чернетку на аудит усієї сторінки; правки не виконані.
- Форма, NDA, сервіс та гарантований response time залишаються окремими непідтвердженими можливостями. Не запускати рекламу чи публікацію під виглядом погодження текстів.

## 9. Що погоджується наступним

Рекомендовано погодити цілісний пакет: назви й сценарії трьох моделей; базу 100 kW / 2 стійки та 600 kW / 6 стійок; трансформатор у планованій базі Core 40; зовнішні технічні блоки; обладнання замовника; видимий статус концепції; CTA-запити; публічний строк «за проєктом». Конкретна ширина, готова BOM, строки першого виробу, PUE, сертифікації, гарантії й сумісність GPU цим погодженням не встановлюються.

Перевірка цього кроку: звірено числа з матрицею, ролі моделей і комплектацію між текстами; збережено точні назви для передачі вибору у форму; перевірено локальні посилання та git diff. Браузер, адаптивність і надсилання форми не тестувалися, оскільки робочий код не змінювався.

## 10. Уточнення позиціонування після зауваження користувача

Користувач погодив текст, але попросив розширити сфери застосування. Рекомендація агента: **модульний дата-центр для обчислень та IT-інфраструктури**, зі спеціалізацією на щільних обчислювальних системах. Продаємо інфраструктуру розміщення обладнання — корпус, живлення, охолодження й контроль; не обчислювальну послугу, готовий AI-продукт або результат дослідження.

Первинні джерела повторно перевірено 2026-09-30 саме щодо позиціонування:

| Джерело | Як позиціонує продукт | Висновок для LIMIK |
|---|---|---|
| [CANCOM Mobile](https://physical-infrastructure.cancom.com/mobile-data-centers-from-cancom/) | Додаткові IT-ресурси, обчислювальна потужність і сховища; розширення або тимчасова заміна наявного дата-центру | Назва продукту може охоплювати різні навантаження |
| [Eaton Modular data center](https://www.eaton.com/us/en-us/catalog/low-voltage-power-distribution-controls-systems/modular-data-center.html) | Модульна інфраструктура під сервери замовника, вимоги IT та майданчика; різні варіанти живлення й охолодження | Основна цінність — інфраструктура під обладнання, не тільки AI |
| [Module-it](https://www.module-it.com/en/) | Загальні дата-центри; окремі напрямки промисловості, HPC/AI й публічної інфраструктури | Загальна категорія продукту + конкретні сценарії застосування |
| [ModulEdge](https://www.moduledge.com/) | AI та edge; змішані навантаження; промислові, телекомунікаційні й інші застосування | Навіть AI-акцент не вимагає обмежувати всі сценарії AI |

Це позиціонування конкурентів, не доказ реалізованої підтримки цих навантажень LIMIK. Наш висновок: верхній рівень — **Modular Data Centers**; пояснення — **For enterprise IT, high-performance computing, edge workloads and AI**. AI залишається важливим застосуванням і технічною спеціалізацією Core 40; окрема сторінка або рекламна кампанія може пізніше фокусуватися на AI без звуження всієї лінійки.

Рекомендовані групи сценаріїв для майбутнього контенту: корпоративні сервери/бізнес-застосунки; зберігання даних; наукові розрахунки й інженерне моделювання; рендеринг та обробка даних; локальна/edge-обробка; AI. Це сценарії для проєктування під конкретне обладнання, не шість нових продуктів. Не обіцяємо автоматично аварійний резерв із реплікацією, телекомунікаційні сертифікації, військовий захист чи повітряне охолодження на повній потужності.

Модель визначається масштабом, щільністю стійок і доступним живленням, а не галуззю клієнта. Назва навантаження не встановлює спосіб охолодження: звичайний сервер може потребувати повітря, HPC або AI — повітря чи рідину залежно від OEM. Тому широке позиціонування не змінює автоматично технічну матрицю 100/600 kW; для іншого теплового балансу потрібна перекомплектація й новий розрахунок.

Оновлено саме цю чернетку та план. URL `modular-ai-data-centers/`, меню, SEO, HTML/CSS/JS і публікацію не змінено; ці питання належать до наступної погодженої реалізації. Фінальне широке формулювання представлене користувачу для оцінки; не оголошувати його вже застосованим.

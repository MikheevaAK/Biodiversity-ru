<template>
    <div class="art">
        <BaseHero title="Исследователь и&nbsp;художник: искусство в&nbsp;экспедиции" :descr="heroDescr"
            :img="'img/hero10.jpg'" :imgMobile="'img/hero10-mobile.jpg'" />
        <MainSection>
            <section class="section-white">
                <BaseTextBlock class="mb-40">
                    <div class="art__position-info-open">
                        Открываем <br /> Арктику вместе
                    </div>
                    <span>
                        <p class="mb-10">
                            Все грани отношений человека и&nbsp;арктической природы демонстрирует подготовленный при
                            поддержке компании &laquo;Норникель&raquo; масштабный выставочный проект
                            &laquo;Исследователь
                            и&nbsp;художник: искусство в&nbsp;экспедиции&raquo;.
                        </p>
                        <p>
                            Выставка приурочена к&nbsp;завершению второго года совместного проекта
                            &laquo;Норникеля&raquo;
                            и&nbsp;СО&nbsp;РАН по&nbsp;исследованию биоразнообразия &laquo;Большая Научная
                            экспедиция&raquo;. Это исследование стало уникальным благодаря своему масштабу.
                            В&nbsp;России
                            подобных исследований не&nbsp;проводилось за&nbsp;весь постсоветский период.
                        </p>
                    </span>
                </BaseTextBlock>

                <div class="art__youtube-video mb-100">
                    <iframe width="100%" height="100%" frameborder="0" allowfullscreen
                        :src="`https://www.youtube.com/embed/snEfjPiaNRg?modestbranding=0&controls=0&showinfo=0&rel=0&showinfo=0`">
                    </iframe>
                </div>

                <BaseTextBlock class="mb-100">
                    <span>
                        <p class="mb-10">
                            Выставочный проект удалось реализовать благодаря совместной работе компании
                            &laquo;Норникель&raquo;, Сибирского отделения РАН, парка &laquo;Зарядье&raquo;,
                            Государственного
                            Дарвиновского музея и&nbsp;РГХПУ им. С.&nbsp;Г.&nbsp;Строганова.
                        </p>
                        <p class="mb-10">
                            Главная цель проекта&nbsp;&mdash; популяризация среди широкой общественности
                            кросс-культурной
                            связки природы и&nbsp;человека, науки и&nbsp;искусства.
                        </p>
                        <p>
                            Экспонаты предоставили ведущие тематические музеи России и&nbsp;частные коллекционеры.
                            Зрители
                            увидели артефакты времён царя Алексея Михайловича и&nbsp;современные перформансы
                            от&nbsp;участников Красноярской, Якутской и&nbsp;Московской биеннале современного искусства.
                        </p>
                    </span>
                    <div class="position-info">
                        <BaseNumberBlock textTop="413" textBottom="экспонатов собрано в рамках выставочного проекта " />
                    </div>
                </BaseTextBlock>

                <div class="art__quote mb-100">
                    <div class="art__quote-quotation-mark"></div>
                    <div class="art__quote-text">
                        Для нашей компании очень важна триада &laquo;наука&nbsp;&mdash; искусство&nbsp;&mdash;
                        культура&raquo;. Мы&nbsp;хотим, чтобы результаты наших экспедиций были доступны, понятны
                        и&nbsp;донесены до&nbsp;максимально большого количества людей. Приятно, что
                        собранные объекты могут показать всю историю и&nbsp;все грани отношения человека к&nbsp;Арктике.
                    </div>
                    <div class="art__quote-name">
                        Станислав Селезнёв
                    </div>
                    <div class="art__quote-status">
                        Вице-президент &laquo;Норникеля&raquo; по&nbsp;экологии и&nbsp;промышленной безопасности
                    </div>
                    <picture>
                        <source type="image/webp" srcset="img/art/StanislavSeleznev.webp">
                        <img class="art__quote-img" src="img/art/StanislavSeleznev.png" alt="Станислав Селезнёв">
                    </picture>
                    <img class="art__quote-strip" src="img/strip.png" alt="">
                </div>

                <BaseTextBlock v-if="isMobile" class="mb-60" title="Участники">
                    <span>
                        Проект носит междисциплинарный и&nbsp;кросс-культурный характер. В&nbsp;проекте
                        и&nbsp;научно-просветительской программе приняли участие художественные галереи, музеи
                        и&nbsp;природные заповедники.
                    </span>
                </BaseTextBlock>

                <ParticipantsSwiper class="mb-60" />

                <BaseTextBlock class="mb-40" :title="!isMobile ? 'Выставка в парке «Зарядье»' : ''">
                    <div class="art__position-info-open">
                        Три выставочные <br />площадки
                    </div>
                    <div class="art__position-info-icon">
                        <img src="img/art/icon-1.png" alt="">
                    </div>

                    <div v-if="isMobile" class="art__position-info-title">
                        Выставка в парке <br />«Зарядье»
                    </div>

                    <span>
                        <p class="mb-10">
                            В&nbsp;павильоне &laquo;Заповедное посольство&raquo; представлены работы Science Art. Это
                            попытка современных художников исследовать экосистемы и&nbsp;творчески переосмыслить
                            проблемы
                            промышленных территорий, состояния воды и&nbsp;в&nbsp;целом хрупкого биоценоза арктических
                            земель. Работы отсылают к&nbsp;примитивному и&nbsp;первозданному, напоминают о&nbsp;мире
                            абсолютной гармонии между человеком и&nbsp;природой и&nbsp;заставляют задуматься
                            о&nbsp;механизмах приспособления и&nbsp;адаптации природы к&nbsp;индустриальной среде.
                        </p>
                        <p class="mb-10">
                            В&nbsp;Старом Английском дворе, где некогда планировались первые экспедиции в&nbsp;Арктику,
                            зрителям показали исторические экспонаты: гравированные и&nbsp;рукописные карты, рисунки
                            и&nbsp;путевые дневники учёных и&nbsp;художников, а&nbsp;также этнографическую коллекцию.
                        </p>
                        <p>
                            Особое место в&nbsp;экспозиции заняли картины первого художника за&nbsp;Полярным
                            кругом&nbsp;&mdash; Александра Борисова. Из&nbsp;архангельского Музея художественного
                            освоения
                            Арктики, который носит имя живописца-полярника, в&nbsp;Москву привезли 16&nbsp;оригинальных
                            полотен, написанных им&nbsp;на&nbsp;Новой Земле более века назад.
                        </p>
                    </span>
                </BaseTextBlock>

                <div class="art__swiper-wrap">
                    <swiper class="art__swiper" :speed="1000" :navigation="true" :modules="modules" :loop="true"
                        :slides-per-view="1" :space-between="50">
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-1.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-2.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-3.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-4.jpg" loading="lazy" />
                        </SwiperSlide>
                    </swiper>
                </div>

                <div class="art__exhibits mb-100">
                    <BaseNumberBlock textTop="239" textBottom="экспонатов" />

                    <div class="art__exhibits-list">
                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-1.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-1.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Народное <br />искусство
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-2.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-2.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Природные <br />материалы
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-3.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-3.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Экспериментальные <br />техники
                            </p>
                        </div>
                    </div>
                </div>

                <div class="art__quote mb-100">
                    <div class="art__quote-quotation-mark"></div>
                    <div class="art__quote-text">
                        Сильное впечатление произвела на&nbsp;меня Новая земля: её&nbsp;мрачные горы и&nbsp;вечные
                        странники
                        Ледовитого океана&nbsp;&mdash; полярные льды.
                    </div>
                    <div class="art__quote-name">
                        Александр Борисов
                    </div>
                    <div class="art__quote-status art__quote-status-AlexanderBorisov">
                        Первый художник за&nbsp;Полярным кругом <br />(1866–1934 гг.)
                    </div>
                    <picture>
                        <source type="image/webp" srcset="img/art/AlexanderBorisov.webp">
                        <img loading="lazy" class="art__quote-img art__quote-img-AlexanderBorisov"
                            src="img/art/AlexanderBorisov.png" alt="Александр Борисов">
                    </picture>
                    <img class="art__quote-strip" src="img/strip.png" alt="">
                </div>

                <BaseTextBlock class="mb-40" :title="!isMobile ? 'Выставка <br/>в Дарвиновском музее' : ''">
                    <div class="art__position-info-icon">
                        <img src="img/art/icon-2.png" alt="">
                    </div>
                    <div v-if="isMobile" class="art__position-info-title">
                        Выставка <br />в Дарвиновском музее
                    </div>
                    <span>
                        <p class="mb-10">
                            На&nbsp;площадке музея развернулась экспозиция полевых дневников и&nbsp;рисунков
                            из&nbsp;экспедиций известнейших учёных, зоологов, художников и&nbsp;экологов, которые
                            зафиксировали уникальное биоразнообразие в&nbsp;процессе трансформации, на&nbsp;фоне
                            климатических изменений.
                        </p>
                        <p class="mb-10">
                            В&nbsp;центре внимания&nbsp;&mdash; мастер научной и&nbsp;художественной иллюстрации,
                            скульптор
                            Василий Алексеевич Ватагин, широко известный по&nbsp;иллюстрациям к&nbsp;книгам Джозефа
                            Редьярда, Джека Лондона и&nbsp;Виталия Валентиновича Бианки.
                        </p>
                        <p>
                            Не&nbsp;менее знаковая фигура&nbsp;&mdash; творец и&nbsp;путешественник Николай Николаевич
                            Кондаков, который вместе с&nbsp;Отто Юльевичем Шмидтом участвовал в&nbsp;экспедиции
                            на&nbsp;Северную Землю на&nbsp;ледокольном пароходе &laquo;Владимир Русанов&raquo;. Его
                            полярные
                            рисунки отражают образ Севера начала 1940-х годов: белые медведи, розовые чайки, лежбища
                            моржей
                            и&nbsp;охота на&nbsp;нарвалов.
                        </p>
                    </span>
                </BaseTextBlock>

                <div class="art__swiper-wrap">
                    <swiper class="art__swiper" :speed="1000" :navigation="true" :modules="modules" :loop="true"
                        :slides-per-view="1" :space-between="50">
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-5.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-6.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-7.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-8.jpg" loading="lazy" />
                        </SwiperSlide>
                    </swiper>
                </div>

                <div class="art__exhibits mb-100">
                    <BaseNumberBlock textTop="56" textBottom="экспонатов" />

                    <div class="art__exhibits-list">
                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-4.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-4.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Зарисовки <br />и дневники
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-5.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-5.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Скульптуры
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-6.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-6.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Животный мир <br />Арктики
                            </p>
                        </div>
                    </div>
                </div>

                <div class="art__quote art__quote-VladimirBurmatov mb-100">
                    <div class="art__quote-quotation-mark"></div>
                    <div class="art__quote-text">
                        Выставочный проект &laquo;Искусство в&nbsp;экспедиции&raquo;&nbsp;&mdash; настоящий прорыв. Это
                        совершенно новый язык, которым сегодня нам рассказывают об&nbsp;Арктике. Этот проект реализован
                        на&nbsp;стыке научной мысли, серьёзных научных открытий и&nbsp;современных
                        технологий.
                    </div>
                    <div class="art__quote-name">
                        Владимир Бурматов
                    </div>
                    <div class="art__quote-status art__quote-status-VladimirBurmatov">
                        Депутат Государственной Думы Федерального Собрания Российской Федерации, первый заместитель
                        председателя комитета Государственной Думы по&nbsp;экологии
                    </div>
                    <picture>
                        <source type="image/webp" srcset="img/art/VladimirBurmatov.webp">
                        <img loading="lazy" class="art__quote-img art__quote-img-VladimirBurmatov"
                            src="img/art/VladimirBurmatov.png" alt="Владимир Бурматов">
                    </picture>
                    <img class="art__quote-strip" src="img/strip.png" alt="">
                </div>

                <BaseTextBlock class="mb-40" :title="!isMobile ? 'Выставка в РГХПУ <br/>им. С. Г. Строганова' : ''">
                    <div class="art__position-info-icon">
                        <img src="img/art/icon-3.png" alt="">
                    </div>
                    <div v-if="isMobile" class="art__position-info-title">
                        Выставка в РГХПУ <br />им. С. Г. Строганова
                    </div>
                    <span>
                        <p class="mb-10">
                            Экспозиция посвящена связи художественных практик и&nbsp;дизайн-проектирования
                            с&nbsp;охраной
                            природы и&nbsp;экологией. В&nbsp;фокусе&nbsp;&mdash; знаковая для бионики фигура
                            учёного-зоолога
                            Василия Алексеевича Ватагина. Именно он&nbsp;впервые в&nbsp;истории училища ввел для
                            студентов
                            обязательные практики в&nbsp;зоопарке.
                        </p>
                        <p>
                            Благодаря наставничеству В.&nbsp;А.&nbsp;Ватагина бионика становится важнейшей дисциплиной
                            формирования дизайнера и&nbsp;художника. На&nbsp;выставке представлены работы
                            из&nbsp;металла,
                            дерева, кости, кожи и&nbsp;меха в&nbsp;традиции художественных ремёсел коренных народов
                            Севера.
                        </p>
                    </span>
                </BaseTextBlock>

                <div class="art__swiper-wrap">
                    <swiper class="art__swiper" :speed="1000" :navigation="true" :modules="modules" :loop="true"
                        :slides-per-view="1" :space-between="50">
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-9.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-10.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-11.jpg" loading="lazy" />
                        </SwiperSlide>
                        <SwiperSlide :lazy="true">
                            <img src="../../public/img/art/swiper-12.jpg" loading="lazy" />
                        </SwiperSlide>
                    </swiper>
                </div>

                <div class="art__exhibits mb-100">
                    <BaseNumberBlock textTop="88" textBottom="экспонатов" />

                    <div class="art__exhibits-list">
                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-7.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-7.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Рисунки <br />и графика
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-8.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-8.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Косторезное <br />искусство
                            </p>
                        </div>

                        <div class="art__exhibits-item">
                            <picture>
                                <source type="image/webp" srcset="img/art/exhibit-9.webp">
                                <img loading="lazy" class="art__exhibits-img" src="img/art/exhibit-9.png" alt="">
                            </picture>
                            <p class="art__exhibits-text">
                                Современные <br />материалы
                            </p>
                        </div>
                    </div>
                </div>

                <div class="art__quote mb-100">
                    <div class="art__quote-quotation-mark"></div>
                    <div class="art__quote-text">
                        Проект интересен своей сложностью, объединившей три разные институции одной темой, носящей
                        междисциплинарный и&nbsp;кросс-культурный характер. Даёт возможность охватить широким взглядом
                        многовековую историю региона, осознать значение климатических изменений в&nbsp;Арктике
                        <br />и&nbsp;по-новому увидеть проблему сосуществования природы, человека и&nbsp;технологий.
                    </div>
                    <div class="art__quote-name">
                        Кирилл Гаврилин
                    </div>
                    <div class="art__quote-status art__quote-status-KirillGavrilin">
                        Кандидат искусствоведения, профессор, заведующий кафедрой Истории искусств и&nbsp;гуманитарных
                        наук РГХПУ им. С.&nbsp;Г.&nbsp;Строганова
                    </div>
                    <picture>
                        <source type="image/webp" srcset="img/art/KirillGavrilin.webp">
                        <img loading="lazy" class="art__quote-img art__quote-img-KirillGavrilin"
                            src="img/art/KirillGavrilin.png" alt="Кирилл Гаврилин">
                    </picture>
                    <img class="art__quote-strip" src="img/strip.png" alt="">
                </div>

                <div class="mb-100">
                    <div class="art__man">
                        <picture>
                            <source type="image/webp" srcset="img/art/art-man.webp">
                            <img loading="lazy" src="img/art/art-man.png">
                        </picture>
                    </div>
                    <BaseTextBlock>
                        <p class="mb-10">
                            Поддержка экологических и&nbsp;социально значимых проектов во&nbsp;всех регионах
                            присутствия&nbsp;&mdash; важная часть работы компании.
                        </p>
                        <p class="mb-10">
                            &laquo;Норникель&raquo; ежегодно инициирует масштабные научно-исследовательские экспедиции
                            с&nbsp;привлечением российских учёных, краеведов и&nbsp;сотрудников заповедников.
                        </p>
                        <p>
                            При этом Север для компании&nbsp;&mdash; не&nbsp;только место работы,
                            но&nbsp;и&nbsp;территория
                            вдохновения: в&nbsp;2023 году &laquo;Норникель&raquo; спонсировал &laquo;Арт-сезоны
                            на&nbsp;Таймыре&raquo;.
                        </p>
                    </BaseTextBlock>
                </div>
                <img class="line line-bottom" src="img/strip.png" alt="">
            </section>

            <section class="section-blue">
                <BaseTextBlock class="mb-40">
                    <div class="art__position-info-open">
                        Лекции <br />и мастер-классы
                    </div>
                    <p>
                        Помимо масштабных экспозиций, проект включал широкую научно-просветительскую программу
                        с&nbsp;лекциями, мастер-классами, тематическими документальными и&nbsp;художественными
                        фильмами. Записи лекций доступны зрителям в&nbsp;любой точке мира.
                    </p>
                </BaseTextBlock>

                <div class="art__bottom">
                    <div class="art__list-wrap mb-100">
                        <div class="art__list" :style="{ height: `${blockHeight}rem` }">
                            <div class="art__list-left">
                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Жизнь в&nbsp;экспедиции: как случаются научные открытия&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Александр Осадчиев, главный научный сотрудник МФТИ
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Необычные экспедиции. По&nbsp;материалам дневников
                                        художников-анималистов&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Антонина Нефёдова, старший научный сотрудник
                                        Государственного
                                        Дарвиновского музея
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Проблемы освоения и&nbsp;экологическая безопасность горнорудных
                                        территорий:
                                        история и&nbsp;современность&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Гажит Цыбикмитова, ведущий научный сотрудник Института
                                        природных
                                        ресурсов, экологии и&nbsp;криологии СО&nbsp;РАН
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Художник во&nbsp;льдах: Александр Борисов и&nbsp;его экспедиции
                                        (1896&ndash;1903)&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Иван Катышев, заведующий Музеем художественного освоения
                                        Арктики
                                        им. А.&nbsp;А.&nbsp;Борисова
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Арктический бёрдвотчинг&nbsp;&mdash; совмещение прекрасного
                                        с&nbsp;полезным&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Елена Валова, научный сотрудник заповедника
                                        &laquo;Пасвик&raquo;
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Мастер-класс по&nbsp;макрофотосъёмке&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Виктор Глупов, член-корреспондент РАН, директор ФГБУН
                                        &laquo;Институт систематики и&nbsp;экологии животных СО&nbsp;РАН&raquo;
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        «Зрение животных»
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Виктор Глупов, член-корреспондент РАН, директор ФГБУН
                                        &laquo;Институт систематики и&nbsp;экологии животных СО&nbsp;РАН&raquo;
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Полёты во&nbsp;сне и&nbsp;наяву. Экологическая утопия Томаса
                                        Сарасено&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Анна Резцова, арт-критик, куратор выставочных проектов,
                                        художник
                                    </div>
                                </div>
                            </div>

                            <div class="art__list-right">
                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Экологическая политика будущего&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Екатерина Близнецкая, преподаватель Кафедры международных
                                        комплексных проблем природопользования и&nbsp;экологии МГИМО МИД России, эксперт
                                        Информационного центра ФАО
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Познавательный туризм. Край диких оленей и&nbsp;прекрасных озёр
                                        Мончетундры&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Татьяна Кочеткова, экскурсовод, научный сотрудник
                                        Лапландского
                                        заповедника
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Скромное обаяние искусства теней: история создания фотограмм
                                        с&nbsp;начала
                                        XIX&nbsp;в.&nbsp;до&nbsp;наших дней&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Лара Федотова, художница, участница проекта &laquo;Искусство
                                        в&nbsp;экспедиции&raquo;
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Заповедной системе России 107&nbsp;лет&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Светлана Юшкова, исполняющая обязанности замдиректора
                                        по&nbsp;экологическому просвещению и&nbsp;познавательному туризму Национального
                                        парка &laquo;Красноярские Столбы&raquo;
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;У&nbsp;истоков экологии: А.&nbsp;Н.&nbsp;Формозов, учёный
                                        и&nbsp;художник&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Антонина Нефёдова, старший научный сотрудник
                                        Государственного
                                        Дарвиновского музея
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Шаманизм и&nbsp;ритуальные практики в&nbsp;культуре коренных народов
                                        Таймыра&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Лейла Ландина, директор Таймырского Дома народного
                                        творчества
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Машина: враг, помощник или партнёр? Робо-арт, как размышление
                                        о&nbsp;новой
                                        социальной реальности&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Анна Резцова, арт-критик, куратор выставочных проектов,
                                        художник
                                    </div>
                                </div>

                                <div class="art__list-item">
                                    <div class="art__list-item-title">
                                        &laquo;Владимир Вернадский&nbsp;&mdash; теория deep media&raquo;
                                    </div>
                                    <div class="art__list-item-text">
                                        Спикер&nbsp;&mdash; Анна Резцова, арт-критик, куратор выставочных проектов,
                                        художник
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="art__list-ten"  :class="{ 'art__list-ten-hidden': (this.blockHeight === 715) || (this.blockHeight === 76) }"></div>

                        <button class="art__list-button"
                            :class="{ 'art__list-button-open': (this.blockHeight === 715) || (this.blockHeight === 76) }"
                            @click="increaseHeight">
                            <span>
                                Открыть весь список
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9"
                                fill="none">
                                <path d="M1 0.5L7 7.5L13 0.500001" stroke="#333333" />
                            </svg>
                        </button>
                    </div>

                    <div class="art__swiper-wrap mb-100">
                        <swiper class="art__swiper" :speed="1000" :navigation="true" :modules="modules" :loop="true"
                            :slides-per-view="1" :space-between="50">
                            <SwiperSlide :lazy="true">
                                <img src="../../public/img/art/swiper-13.jpg" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide :lazy="true">
                                <img src="../../public/img/art/swiper-14.jpg" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide :lazy="true">
                                <img src="../../public/img/art/swiper-15.jpg" loading="lazy" />
                            </SwiperSlide>
                        </swiper>
                    </div>
                </div>
                <BaseSidebar class="art__sidebar">
                    <p>
                        Проект &laquo;Исследователь и&nbsp;художник: искусство в&nbsp;экспедиции&raquo;&nbsp;&mdash;
                        один из&nbsp;многих реализуемых компанией &laquo;Норникель&raquo; способов поддержать
                        экологическую культуру в&nbsp;регионах присутствия.
                    </p>
                </BaseSidebar>
                <img class="line line-bottom" src="img/strip.png" alt="">
            </section>

        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseNumberBlock from '@/components/BaseNumberBlock.vue'
import ParticipantsSwiper from '@/components/ParticipantsSwiper.vue'
import BaseSidebar from '@/components/BaseSidebar.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        MainSection,
        BaseTextBlock,
        BaseNumberBlock,
        Swiper,
        SwiperSlide,
        BaseSidebar,
        ParticipantsSwiper,
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 768
        },
    },
    data() {
        return {
            blockHeight: window.innerWidth <= 768 ? 132 : 29,
            heroDescr: 'Результатом российских экспедиций в&nbsp;Арктику на&nbsp;протяжении четырёх столетий стали не&nbsp;только значимые научные открытия. Важная сторона истории&nbsp;&mdash; погружение в&nbsp;культурный контекст и&nbsp;попытка художественного осмысления созданных природой образов Севера.',
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation()
        })
    },
    methods: {
        scrollAnimation() {
            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));
            collageItems.forEach((elem) => {

                this.oneScrollTrigger = gsap.fromTo(elem, {
                    y: 50,
                }, {
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        start: '0% 100%',
                        end: 'bottom 75%',
                        trigger: elem,
                        scrub: true,
                        // markers: true,
                    },
                });
            });

            const sidebarItems = Array.from(document.querySelectorAll(".sidebar"));
            sidebarItems.forEach((elem) => {
                this.twoScrollTrigger = gsap.fromTo(elem, {
                    y: 50,
                }, {
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        start: '0% 100%',
                        end: 'bottom 75%',
                        trigger: elem,
                        // markers: true,
                        scrub: true,
                    },
                });
            });
        },
        increaseHeight() {
            if (window.innerWidth <= 768) {
                if (this.blockHeight === 715) {
                    this.blockHeight -= 583;
                } else {
                    this.blockHeight += 583;
                }
            } else {
                if (this.blockHeight === 76) {
                    this.blockHeight -= 47;
                } else {
                    this.blockHeight += 47;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.art {
    .hero__descr {
        width: 41rem !important;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    &__position-info-open {
        position: absolute;
        top: 0;
        left: -24.4rem;
        color: var(--blue-deep, #004C97);
        font-size: 2.125rem;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 768px) {
            position: relative;
            left: 0;
            font-size: 7.4667rem;
            margin-bottom: 6.4rem;
        }
    }

    &__position-info-icon {
        position: absolute;
        bottom: 0;
        right: -24rem;
        width: 5.3125rem;
        height: auto;

        @media (max-width: 768px) {
            position: relative;
            right: unset;
            margin-bottom: 6.4rem;
            width: 13.6rem;
        }

    }

    &__position-info-title {
        @media (max-width: 768px) {
            margin-bottom: 6.4rem;
            font-size: 5.8667rem;
            font-weight: 600;
            line-height: 130%;
        }
    }

    &__youtube-video {
        width: 83.4375rem;
        height: 37.5rem;
        margin: 0 auto;
        border-radius: 30px;
        overflow: hidden;

        @media (max-width: 768px) {
            height: 43rem;
            margin-bottom: 10rem !important;
        }
    }

    &__quote {
        position: relative;
        padding: 5.62rem 14rem 4.44rem;
        overflow: hidden;

        @media (max-width: 768px) {
            padding: 12rem 9.5rem 52rem 9.5rem;
            margin-bottom: 7.5rem !important;
        }

        &-VladimirBurmatov {
                @media (max-width: 768px) {
                    padding: 12rem 9.5rem 26rem 9.5rem;
                }
            }

        &-quotation-mark {
            position: absolute;
            top: 0;
            left: 8.69rem;
            width: 6.25rem;
            height: 2.69rem;
            background-image: url('data:image/svg+xml;utf8,<svg width="86" height="45" viewBox="0 0 86 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.08 0.91999H45.14L30.84 44.48H0.0400003L18.08 0.91999ZM58.56 0.91999H85.62L71.32 44.48H40.52L58.56 0.91999Z" fill="%23004C97"/></svg>');
            background-repeat: no-repeat;
            background-size: contain;

            @media (max-width: 768px) {
                left: 9.5rem;
                width: 13.25rem;
                height: 6.69rem;
            }
        }

        &-text {
            width: 48.6rem;
            margin-bottom: 4.5rem;
            font-size: 2rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                width: 100%;
                font-size: 5.334rem;
                margin-bottom: 9.87rem;
            }
        }

        &-name {
            margin-bottom: 1.38rem;
            font-size: 1.375rem;
            color: var(--blue-deep, #004C97);
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 5.334rem;
                margin-bottom: 5.9rem;
            }
        }

        &-status {
            position: relative;
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 130%;
            width: 27rem;
            z-index: 1;

            @media (max-width: 768px) {
                font-size: 4.5rem;
                width: 100%;
            }

            &-AlexanderBorisov {
                @media (max-width: 768px) {
                    width: 43rem;
                }
            }

            &-VladimirBurmatov {
                @media (max-width: 768px) {
                    width: 43rem;
                }
            }

            &-KirillGavrilin {
                @media (max-width: 768px) {
                    width: 52rem;
                }
            }
        }

        &-img {
            position: absolute;
            top: 4.5rem;
            right: 3.62rem;
            width: 30rem;
            height: 31.375rem;

            @media (max-width: 768px) {
                top: 96.5rem;
                right: -26.38rem;
                width: 85.867rem;
                height: 89.6rem;
            }

            &-AlexanderBorisov {
                top: -4.62rem;

                @media (max-width: 768px) {
                    top: 45.38rem;
                }
            }

            &-KirillGavrilin {
                top: unset;
                bottom: 1rem;
            }
        }

        &-strip {
            position: absolute;
            bottom: 0rem;
            left: 0;
            height: 9.5rem;

            @media (max-width: 768px) {
                height: 32rem;
                bottom: -3rem;
            }
        }
    }

    &__exhibits {
        position: relative;
        padding: 3.25rem 3.38rem 2.81rem 3.38rem;

        @media (max-width: 768px) {
            padding: 0 4.5rem;
        }

        .number-block {
            position: relative;
            left: unset;
            margin-bottom: 2.63rem;

            @media (max-width: 768px) {
                margin-bottom: 15rem;
                left: 4.5rem;
            }
        }

        &-list {
            display: flex;
            padding: 0 6.56rem 0 1.56rem;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
                padding: 0;
            }
        }

        &-item {
            display: flex;
            align-items: flex-end;

            @media (max-width: 768px) {
                align-items: center;
                gap: 4rem;

                &:nth-child(2) {
                    flex-direction: row-reverse;
                }
            }
        }

        &-img {
            width: 15.5rem;
            height: 15.5rem;
            border-radius: 100%;

            @media (max-width: 768px) {
                width: 47.5rem;
                height: 47.5rem;
            }
        }

        &-text {
            margin-bottom: 1.94rem;
            color: var(--blue-deep, #004C97);
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.53334rem;
            }
        }
    }

    &__swiper {
        width: 100%;
        height: 41.5rem;
        border-radius: 16px;

        @media (max-width: 768px) {
            height: 95.2rem;
        }

        &-wrap {
            padding: 0 3.38rem;
            margin: 3.5rem;
            width: 100%;
            margin: 0 auto;

            @media (max-width: 768px) {
                padding: 0 9.5rem;
            }
        }

        .swiper-slide {
            border-radius: 16px;
            overflow: hidden;
            width: 100%;
            height: 100%;

            @media (max-width: 768px) {
                img {
                    object-fit: cover;
                    height: 100%;
                }
            }
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 4.6875rem;
            height: 4.6875rem;

            @media (max-width: 768px) {
                display: none;
            }

            &::after {
                width: 100%;
                height: 100%;
            }
        }

        .swiper-button-next {
            &::after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" fill="none">  <circle cx="37.5" cy="37.5" r="37.5" fill="white" fill-opacity="0.2"/>  <path d="M34.0881 46.0226L40.9062 38.3521L34.0881 30.6816" stroke="white" stroke-width="2.95455"/></svg>');
            }
        }

        .swiper-button-prev {
            &::after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" fill="none">  <circle cx="37.5" cy="37.5" r="37.5" transform="rotate(-180 37.5 37.5)" fill="white" fill-opacity="0.2"/>  <path d="M40.9041 28.9774L34.0859 36.6479L40.9041 44.3184" stroke="white" stroke-width="2.95455"/></svg>');
            }
        }
    }

    .section-white {
        position: relative;
        margin-bottom: 0;

        .line {
            transform: rotate(180deg);
            position: absolute;
            width: 100%;
            height: 10.5rem;
            bottom: -15rem;
            z-index: 1;

            @media (max-width: 768px) {
                height: 20.5rem;
                bottom: -145px;
            }
        }
    }

    .section-blue {
        padding-top: 8rem;
        position: relative;
        background-color: #F3F7FA;
        padding-bottom: 1.72rem;

        @media (max-width: 768px) {
            padding-top: 14rem;
        }

        .line {
            position: absolute;
            width: 100%;
            height: 10.5rem;

            @media (max-width: 768px) {
                height: 40rem;
            }

            &-bottom {
                bottom: -1.5rem;

                @media (max-width: 768px) {
                    bottom: -10.5rem;
                }
            }
        }
    }

    &__man {
        width: 34rem;
        height: auto;
        margin: 0 auto;
        margin-bottom: 0.81rem;

        @media (max-width: 768px) {
            width: 80.56rem;
            margin-bottom: 5rem;
        }
    }

    &__sidebar {
        margin-bottom: 6rem;
        width: 46.125rem;

        @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 25rem;
        }

        .sidebar__text {
            color: var(--blue-deep, #004C97);
        }

        .sidebar__line-top,
        .sidebar__line-bottom {
            filter: grayscale(1) invert(1) sepia(1) saturate(1) hue-rotate(180deg) brightness(1.2);
        }
    }

    &__list {
        display: flex;
        gap: 1.69rem;
        margin-bottom: 2rem;
        overflow: hidden;
        transition: height 0.5s;

        @media (max-width: 768px) {
            flex-direction: column;
            margin-bottom: 7rem;
            gap: 8.54rem;
        }

        &-ten {
            position: absolute;
            bottom: 3rem;
            width: 100%;
            left: 0;
            background: linear-gradient(180deg, rgba(243, 247, 250, 0) 0%, #F3F7FA 100%);
            height: 5rem;

            @media (max-width: 768px) {
                bottom: 8rem;
                height: 25rem;
            }

            &-hidden {
                display: none;
            }
        }

        &-wrap {
            position: relative;
            padding: 2rem 8.31rem 0 33rem;

            @media (max-width: 768px) {
                padding: 0 9.5rem;
            }
        }

        &-right,
        &-left {
            width: 25.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            @media (max-width: 768px) {
                width: 100%;
                gap: 8.54rem;
            }
        }

        &-item {
            &-title {
                margin-bottom: 1rem;
                font-size: 1.125rem;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    font-size: 4.27rem;
                    margin-bottom: 4.27rem;
                }
            }

            &-text {
                font-size: 1.125rem;
                font-weight: 300;
                line-height: 130%;

                @media (max-width: 768px) {
                    font-size: 4.5rem;
                    
                }
            }
        }

        &-button {
            background-color: transparent;
            outline: none;
            border: none;
            display: flex;
            gap: 0.38rem;
            align-items: center;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 130%;
            cursor: pointer;

            @media (max-width: 768px) {
                gap: 1rem;
                font-size: 4rem;
                color: var(--blue-deep, #004C97);
            }

            svg {
                width: 0.75rem;
                height: 0.4375rem;
                transition: all .5s;

                @media (max-width: 768px) {
                    width: 3.2rem;
                    height: 0.47em;

                    path {
                        stroke: var(--blue-deep, #004C97);
                    }
                }
            }

            &-open {
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }

    &__bottom {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column-reverse;
        }
    }
}
</style>
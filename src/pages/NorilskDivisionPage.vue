<template>
    <div class="division">
        <BaseHero :title="'Норильский дивизион. Природные сокровища Южного Таймыра'" :descr="heroDescr"
            :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-60" title="Особенности дивизиона'" :tooltip="true">
                    <p class="mb-10">
                        Горнодобывающие, металлургические и&nbsp;энергетические объекты Норильского
                        <BaseTooltip :word="'дивизиона'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или&nbsp;объекты
                            с&nbsp;общей задачей:
                            например, перевозкой сырья или&nbsp;энергоснабжением. Деление на&nbsp;дивизионы
                            (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной
                            организацией.
                        </BaseTooltip> расположены в зоне,
                        где ещё сохранилась «вечная мерзлота», в&nbsp;гористой местности. Предприятия образуют
                        плотную
                        промышленную сеть, поэтому состояние природного окружения на&nbsp;этих территориях требует
                        большого
                        внимания со&nbsp;стороны компании.
                    </p>
                    <p>
                        «Норникель» понимает свою ответственность за&nbsp;состояние окружающей среды и&nbsp;много
                        внимания уделяет
                        здоровью экосистем во&nbsp;всех дивизионах. Восстанавливать экологическое равновесие на
                        &nbsp;евере
                        Красноярского края компания начала с&nbsp;исследования наземной и&nbsp;водной флоры
                        и&nbsp;фауны и&nbsp;определения
                        границ промышленного воздействия.

                    </p>
                </BaseTextBlock>

                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="'до&nbsp;280&nbsp;дней'" :textBottom="'устойчивых морозов'" />
                    <BaseNumberBlock :textTop="'до&nbsp;500&nbsp;метров'"
                        :textBottom="'толщина многолетнемёрзлых пород'" />
                    <BaseNumberBlock :textTop="'-53&nbsp;˚С'" :textBottom="'минимальная температура'" />
                </div>

                <BigMap :circales="circales" :img="'img/division-big-map'" :imgMobile="'img/division-big-map-mobile'">
                    <BaseNumberBlock :textTop="'44 объекта'" :textBottom="'входит в Норильский дивизион'" />
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                            </svg>

                            <div class="circale-block__text">
                                Промышленные объекты
                            </div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#0077C8" />
                            </svg>

                            <div class="circale-block__text">
                                Энергетические объекты
                            </div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div class="circale-block__text">
                                Особо охраняемые природные территории
                            </div>
                        </div>
                    </div>
                </BigMap>

                <section class="scroll">
                    <div class="scroll-bg bg-1">
                    </div>
                    <div class="scroll-bg bg-2">
                    </div>
                    <div class="scroll-bg bg-3">
                    </div>
                    <div class="scroll-wrap">
                        <div class="scroll-card card-1 text-block__descr">
                            <p>
                                Большой Норильск
                            </p>
                            <p>
                                Норильский промышленный район, или&nbsp;Большой Норильск, образован местными
                                предприятиями &laquo;Норникеля&raquo;. Также в&nbsp;район входят города Норильск,
                                Дудинка и&nbsp;ещё несколько населённых пунктов. Здесь в&nbsp;условиях
                                многолетней мерзлоты компания добывает и&nbsp;перерабатывает медь, драгоценные
                                металлы, теллур, серу и&nbsp;селен.
                            </p>
                            <BaseDropdownInfo title="Предприятия" :color="'#D38235'"
                                :text="'<ul><li>Талнахский рудный узел: 5 рудников</li><li>Норильский рудный узел: 1 рудник</li><li>Талнахская обогатительная фабрика</li><li>Норильская обогатительная фабрика</li><li>Надеждинский металлургический завод</li><li>Медный завод</li></ul>'" />
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                            <p>
                                Энергетические объекты
                            </p>
                            <p>
                                Теплом и&nbsp;светом Промышленный район обеспечивают теплоцентрали, ГЭС
                                и&nbsp;газодобывающие предприятия &laquo;Норникеля&raquo;.
                            </p>
                            <BaseDropdownInfo title="Объекты" :color="'#D38235'"
                                :text="'<ul><li>Южно-Солёнинское газоконденсатное месторождение</li><li>Мессояхское газовое месторождение</li><li>Северо-Солёнинское газоконденсатное месторождение</li><li>Пеляткинское газоконденсатное месторождение</li><li>ТЭЦ-1 г. Норильск</li><li>ТЭЦ-2 г. Талнах</li><li>ТЭЦ-3 г. Кайеркан</li><li>Курейская ГЭС</li><li>Усть-Хантайская ГЭС</li></ul>'" />
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                            <p>
                                Путоранский заповедник
                            </p>
                            <p>
                                Природный объект, важный для&nbsp;поддержания и&nbsp;восстановления местного
                                биоразнообразия. Расстояние от&nbsp;Промышленного района до&nbsp;границ
                                заповедника&nbsp;&mdash; более 50&nbsp;км. По&nbsp;словам специалистов, этого
                                достаточно, чтобы сохранить местные экосистемы в&nbsp;неприкосновенности
                                и&nbsp;исключить воздействие предприятий.
                            </p>
                        </div>
                    </div>
                </section>

                <BaseSidebar class="mb-100">
                    <p>
                        В&nbsp;результате проведённых в&nbsp;2023 году исследований учёные пришли к&nbsp;выводу
                        об&nbsp;отсутствии значимого воздействия предприятий Норильского дивизиона на&nbsp;биологическое
                        разнообразие и&nbsp;экосистему Путоранского заповедника и&nbsp;его буферной зоны.
                    </p>
                </BaseSidebar>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Норильского&nbsp;дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой Научной экспедиции 2023&nbsp;года, радиус
                        <BaseTooltip :word="'кумулятивного'">
                            Под кумулятивным понимается суммарное воздействие всех антропогенных объектов: города,
                            Кольской и&nbsp;других ГМК, а&nbsp;также расположенных в&nbsp;исследуемой зоне предприятий.
                            Достоверно отделить одно влияние от&nbsp;другого по&nbsp;реакции природных организмов
                            невозможно.
                        </BaseTooltip> воздействия
                        Норильского промышленного района на&nbsp;наземные экосистемы южного Таймыра&nbsp;&mdash;
                        не&nbsp;больше 11&nbsp;км.
                    </p>
                    <p>
                        Эффект от&nbsp;промышленной нагрузки наиболее выражен на&nbsp;расстоянии до&nbsp;1&nbsp;км для
                        наземных экосистем и&nbsp;до&nbsp;7&nbsp;км&nbsp;&mdash; для водных. Зона умеренного воздействия
                        протянулась для первых на&nbsp;5&nbsp;км, для вторых&nbsp;&mdash; на&nbsp;7&ndash;15&nbsp;км.
                        С&nbsp;удалением от&nbsp;промышленной и&nbsp;жилой зон признаки воздействия сходят на&nbsp;нет.
                        Там, где влияние предприятий не&nbsp;обнаруживается, исследователи создают полигоны для изучения
                        первозданного, или
                        <BaseTooltip :word="'фонового'">
                            Фоновыми учёные называют участки, на&nbsp;которых не&nbsp;обнаружено признаков воздействия.
                            Экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние
                            биоразнообразия на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют
                            эти данные для наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip>, состояния местных экосистем.
                    </p>
                </BaseTextBlock>
                <div class="division-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp"
                            :srcset="'img/division-radius-mobile.webp'">
                        <source media="(max-width: 768px)" :srcset="'img/division-radius-mobile.png'">
                        <source type="image/webp" :srcset="'img/division-radius.webp'">
                        <img loading="lazy" :src="'img/division-radius.png'" alt="">
                    </picture>

                    <div class="division-radius__descr">
                        <span>*</span>
                        <span>
                            Для водных экосистем в&nbsp;районе объектов Кайеркан&nbsp;&mdash; Надежда &mdash;Центр зона
                            незначительного воздействия составляет 15&ndash;25&nbsp;км.
                        </span>
                    </div>
                </div>

                <div class="division-factors mb-60">
                    <div class="division-factors__left">
                        <div class="division-factors__descr">
                            К&nbsp;основным факторам воздействия в&nbsp;Норильском дивизионе учёные относят
                        </div>
                        <img loading="lazy" class="division-factors__img-grass" src="img/grass.png" alt="">
                    </div>
                    <ul class="division-factors__items">
                        <li class="division-factors__item">
                            <div class="division-factors__item-title">Выбросы</div>
                            <div class="division-factors__item-text">
                                Загрязнение среды выбросами химических веществ в&nbsp;атмосферу, выбросами
                                и&nbsp;разливами нефтепродуктов, а&nbsp;также остатками отвального материала.
                            </div>
                        </li>
                        <li class="division-factors__item">
                            <div class="division-factors__item-title">Опасные вещества</div>
                            <div class="division-factors__item-text">
                                Поступление с&nbsp;площади водосбора из&nbsp;точечных и&nbsp;рассеянных <br />источников
                                различных токсических и&nbsp;закисляющих веществ, а&nbsp;также органики.
                            </div>
                        </li>
                        <li class="division-factors__item">
                            <div class="division-factors__item-title">Нарушение ландшафта</div>
                            <div class="division-factors__item-text">
                                Механическое нарушение микроландшафта и&nbsp;почвенно-растительного покрова,
                                фрагментация среды, формирование квазиприродных и&nbsp;искусственных местообитаний.
                            </div>
                        </li>
                        <li class="division-factors__item">
                            <div class="division-factors__item-title">Пирогенное воздействие</div>
                            <div class="division-factors__item-text">
                                Пожары могут полностью уничтожить или трансформировать природный биоценоз.
                            </div>
                        </li>
                    </ul>
                </div>
                <BaseSidebar class="mb-100">
                    <p>
                        Компания &laquo;Норникель&raquo; ведёт большую работу по&nbsp;нейтрализации факторов негативного
                        воздействия. Экологическая стратегия компании ежегодно актуализируется, узнать подробности можно
                        на&nbsp;официальном сайте &laquo;Норникеля&raquo;.
                    </p>
                </BaseSidebar>

                <BaseTextBlock class="text mb-100 max-width" title="Почвенный покров">
                    <p class="mb-10">
                        В&nbsp;зонах воздействия объектов Норильского дивизиона учёные обнаружили природную аномалию:
                        в&nbsp;почвах повышено содержание тяжёлых металлов, наблюдается дефицит калия и&nbsp;фосфора.
                        Такие почвы обладают средней буферностью к&nbsp;загрязнению тяжёлыми металлами.
                    </p>
                    <p class="mb-10">
                        В&nbsp;ходе исследования учёные выявили почвы, соответствующие землям с&nbsp;накопленным
                        техногенным воздействием. Для них характерно закисление диоксидом серы и&nbsp;захламление
                        строительным мусором.
                    </p>
                    <p>
                        Почвы Норильского дивизиона нуждаются в&nbsp;улучшении качества и&nbsp;реабилитации для снижения
                        негативного воздействия на&nbsp;другие компоненты окружающей среды. В&nbsp;частности, учёные
                        рекомендовали подмешивать небольшое количество извести на&nbsp;участки, которые подверглись
                        воздействию диоксида серы. Для уборки мусора в&nbsp;компании &laquo;Норникель&raquo; действует
                        программа &laquo;Чистый Норильск&raquo;.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="text mb-60 max-width" title="ИПСЭ как повод увеличить усилия">
                    <p class="mb-10">
                        Для эффективного отслеживания изменений в&nbsp;районе работы своих объектов компания
                        &laquo;Норникель&raquo; поручила учёным разработать <a href="/indicator">Интегральный показатель
                            состояния экосистем</a>
                        (ИПСЭ).
                    </p>
                    <p class="mb-10">
                        Сопоставление данных о&nbsp;состоянии различных компонентов наземных и&nbsp;водных экосистем
                        в&nbsp;зонах воздействия и&nbsp;на&nbsp;фоновых территориях позволяет узнать, есть&nbsp;ли
                        отклонение от&nbsp;&laquo;нормы&raquo;.
                    </p>
                    <p>
                        По&nbsp;результатам проведенного в&nbsp;2022&ndash;2023 годах исследования, в&nbsp;районе
                        объектов Норильского дивизиона значение ИПСЭ составляет 0,87 для наземных экосистем и&nbsp;0,84
                        для водных. Близость показателя к&nbsp;единице показывает, что условные потери биоразнообразия
                        в&nbsp;зоне воздействия не&nbsp;так велики.
                    </p>
                </BaseTextBlock>

                <div class="division__factors-img" v-if="!isMobile">
                    <picture>
                        <source type="image/webp" srcset="img/division-factors.webp">
                        <img loading="lazy" src="img/division-factors.png" alt="">
                    </picture>
                </div>

                <div v-else>
                    <picture style="overflow: hidden; width: 100%; display: block;">
                        <source type="image/webp" srcset="img/terrestrial-ecosystem-3.webp">
                        <img loading="lazy" src="img/terrestrial-ecosystem-3.png" alt="">
                    </picture>

                    <picture>
                        <source type="image/webp" srcset="img/aquatic-ecosystems-3.webp">
                        <img loading="lazy" src="img/aquatic-ecosystems-3.png" alt="">
                    </picture>
                </div>

            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает на&nbsp;юге&nbsp;Таймыра
                    </div>
                    <div class="section-orange__descr">
                        <p class="mb-10">
                            В&nbsp;зоне, прилегающей к&nbsp;Промышленному району, в&nbsp;условной зоне воздействия
                            предприятий, участники Большой Научной экспедиции обнаружили
                            <BaseTooltip :word="'охраняемые виды'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или
                                уже сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых
                                и&nbsp;заносят в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные.
                                Охранный статус запрещает охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания
                                краснокнижных растений и&nbsp;грибов ограничены строительство и&nbsp;другая
                                хозяйственная деятельность.
                            </BaseTooltip> животных
                            и&nbsp;растений, а&nbsp;также несколько участков с&nbsp;уникальными экосистемами.
                        </p>
                        <p>
                            Среди типичных представителей арктической флоры и&nbsp;фауны биологи отобрали
                            <BaseTooltip :word="'индикаторные виды'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что
                                в&nbsp;экосистеме что-то пошло не&nbsp;так.
                            </BaseTooltip>. Наблюдение за&nbsp;их&nbsp;поведением сможет многое рассказать
                            о&nbsp;состоянии
                            природного окружения дивизиона.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna-nor">
                    <div class="flora-and-fauna-nor__wrap">
                        <BaseTextBlock title="Флора">
                            <p class="mb-10">
                                Растительный покров региона образуют мхи и&nbsp;лишайники, низкорослые травы
                                и&nbsp;кустарники.
                            </p>
                            <p>
                                Участки лиственничных лесов и&nbsp;зарослей ольховника стали домом для травянистых
                                многолетников, редких или отсутствующих в&nbsp;других типах сообществ. Обилие здесь
                                древесных растений помогает поддерживать разнообразие грибов.
                            </p>
                        </BaseTextBlock>
                        <BaseTextBlock title="Фауна">
                            <p class="mb-10">
                                Территория дивизиона не&nbsp;отличается большим разнообразием млекопитающих, что типично
                                для
                                южных тундр. Птиц гораздо больше, но&nbsp;многие обитают здесь сезонно, из&nbsp;зимующих
                                видов&nbsp;&mdash; белая и&nbsp;тундряная куропатки, ворон.
                            </p>
                            <p>
                                В&nbsp;местных озёрах водится ценная промысловая рыба: сибирский сиг и&nbsp;разные виды
                                гольца.
                            </p>
                        </BaseTextBlock>
                    </div>
                    <div class="wrap-numbers">
                        <BaseNumberBlock class="" :textTop="'75 видов'" textBottom="птиц" />
                        <BaseNumberBlock class="" :textTop="'17 видов'" textBottom="млекопитающих" />
                        <BaseNumberBlock class="" :textTop="'13 видов'" textBottom="рыб" />
                    </div>
                </div>

                <BaseTextBlock class="division__spider" title="Биоиндикаторы состояния экосистем">
                    <span>
                        <p class="mb-10">
                            Ключевым биоиндикатором для эффективной оценки состояния нарушенных экосистем являются
                            почвенные микроартроподы&nbsp;&mdash; Орибатиды. Учёные отмечают, что их&nbsp;плотность
                            увеличивается от&nbsp;пояса значительного воздействия к&nbsp;фону.
                        </p>
                        <p class="mb-10">
                            Среди беспозвоночных одним из&nbsp;индикаторов выступает бродячий волк-паук. Выявлена
                            отрицательная связь суммарной численности сообщества пауков со&nbsp;степенью воздействия.
                            Этот показатель может быть использован при мониторинге состояния окружающей среды
                            в&nbsp;Норильском дивизионе.
                        </p>
                        <p>
                            По&nbsp;потенциальным биоиндикаторам среди водных организмов требуются дальнейшие
                            исследования для подтверждения и&nbsp;более точной оценки их&nbsp;индикаторных возможностей.
                        </p>
                    </span>
                    <div class="position-info">
                        <picture>
                            <source type="image/webp" srcset="img/spider.webp">
                            <img loading="lazy" src="img/spider.png" alt="">
                        </picture>
                    </div>
                </BaseTextBlock>

                <div class="collage">
                    <div class="legend">
                        <BaseCollageInfo text="Охраняемые виды" :color="'#71464E'" />
                        <BaseCollageInfo text="Индикаторные виды" />
                    </div>

                    <div class="collage__eagle">
                        <video @loadeddata="videoLoadedOne" autoplay loop muted playsinline preload="none">
                            <source
                                src="https://www.dropbox.com/scl/fi/7ofqzyjl9ja3h3ffyha6h/eagle.mov?rlkey=6xql3op0vtdtcd3s3i6iv0bzu&st=evc04g2d&dl=0"
                                type="video/mp4">
                            <source src="video/eagle.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingOne">
                            <source type="image/webp" srcset="img/collage-eagle.webp">
                            <img loading="lazy" src="img/collage-eagle.png" alt="">
                        </picture>
                    </div>
                    <div class="collage__merlin">
                        <video @loadeddata="videoLoadedTwo" autoplay loop muted playsinline preload="none">
                            <source src="video/merlin.mov" type="video/mp4">
                            <source src="video/merlin.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingTwo">
                            <source type="image/webp" srcset="img/merlin.webp">
                            <img loading="lazy" src="img/merlin.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__sapsan">
                        <video @loadeddata="videoLoadedThree" autoplay loop muted playsinline preload="none">
                            <source
                                src="https://www.dropbox.com/scl/fi/vrryrs1jjqj68hsho0xop/sapsan.mov?rlkey=4kdmze87pgabpy44pjygwiybn&st=tnan3j0l&dl=0"
                                type="video/mp4">
                            <source src="video/sapsan.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingThree">
                            <source type="image/webp" srcset="img/sapsan.webp">
                            <img loading="lazy" src="img/sapsan.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__deep">
                        <video @loadeddata="videoLoadedFour" autoplay loop muted playsinline preload="none">
                            <source
                                src="https://www.dropbox.com/scl/fi/06c8xlgu43sqhvnqpw8uk/deep-big.mov?rlkey=3q9y6yv0o6xx69y8nmqkrisy2&st=kdczywm0&dl=0"
                                type="video/mp4">
                            <source src="video/deep-big.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingFour">
                            <source type="image/webp" srcset="img/deep-big.webp">
                            <img loading="lazy" src="img/deep-big.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__shrew">
                        <video autoplay loop muted playsinline>
                            <source src="video/shrew.mov" type="video/mp4">
                            <source src="video/shrew.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__warbler">
                        <video autoplay loop muted playsinline>
                            <source src="video/warbler.mov" type="video/mp4">
                            <source src="video/warbler.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__warbler-2">
                        <video autoplay loop muted playsinline>
                            <source src="video/warbler-2.mov" type="video/mp4">
                            <source src="video/warbler-2.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__lentils">
                        <video autoplay loop muted playsinline>
                            <source src="video/lentils.mov" type="video/mp4">
                            <source src="video/lentils.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__oatmeal">
                        <video autoplay loop muted playsinline>
                            <source src="video/oatmeal.mov" type="video/mp4">
                            <source src="video/oatmeal.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__white-partridge">
                        <video autoplay loop muted playsinline>
                            <source src="video/white-partridge.mov" type="video/mp4">
                            <source src="video/white-partridge.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__bug">
                        <video autoplay loop muted playsinline>
                            <source src="video/bug.mov" type="video/mp4">
                            <source src="video/bug.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__plover">
                        <video autoplay loop muted playsinline>
                            <source src="video/plover.mov" type="video/mp4">
                            <source src="video/plover.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__char">
                        <video @loadeddata="videoLoadedThirteen" autoplay loop muted playsinline>
                            <source src="video/char.mov" type="video/mp4">
                            <source src="video/char.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingThirteen">
                            <source type="image/webp" srcset="img/char.webp">
                            <img loading="lazy" src="img/char.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__fish">
                        <video autoplay loop muted playsinline>
                            <source src="video/collage-fish.mov" type="video/mp4">
                            <source src="video/collage-fish.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__wolverine">
                        <video @loadeddata="videoLoadedNine" autoplay loop muted playsinline>
                            <source src="video/wolverine.mov" type="video/mp4">
                            <source src="video/wolverine.webm" type="video/webm">
                        </video>

                        <picture v-if="!videoLoadedNine">
                            <source type="image/webp" srcset="img/wolverine.webp">
                            <img loading="lazy" src="img/wolverine.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__vole">
                        <video autoplay loop muted playsinline>
                            <source src="video/vole.mov" type="video/mp4">
                            <source src="video/vole.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__goose">
                        <video @loadeddata="videoLoadedEight" autoplay loop muted playsinline>
                            <source src="video/goose.mov" type="video/mp4">
                            <source src="video/goose.webm" type="video/webm">
                        </video>

                        <picture v-if="!videoLoadedEight">
                            <source type="image/webp" srcset="img/goose.webp">
                            <img loading="lazy" src="img/goose.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__watercolor">
                        <picture>
                            <source type="image/webp" srcset="img/watercolor.webp">
                            <img loading="lazy" src="img/watercolor.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__watercolor-2">
                        <picture>
                            <source type="image/webp" srcset="img/watercolor.webp">
                            <img loading="lazy" src="img/watercolor.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__watercolor-3">
                        <picture>
                            <source type="image/webp" srcset="img/watercolor-4.webp">
                            <img loading="lazy" src="img/watercolor-4.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__watercolor-4">
                        <picture>
                            <source type="image/webp" srcset="img/watercolor-5.webp">
                            <img loading="lazy" src="img/watercolor-5.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__swan">
                        <video @loadeddata="videoLoadedTen" autoplay loop muted playsinline>
                            <source src="video/swan.mov" type="video/mp4">
                            <source src="video/swan.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingTen">
                            <source type="image/webp" srcset="img/collage-kola-swan.webp">
                            <img loading="lazy" src="img/collage-kola-swan.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__loon">
                        <video @loadeddata="videoLoadedEleven" autoplay loop muted playsinline preload="none">
                            <source src="video/loon.mov" type="video/mp4">
                            <source src="video/loon.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingEleven">
                            <source type="image/webp" srcset="img/loon.webp">
                            <img loading="lazy" src="img/loon.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__hare">
                        <video @loadeddata="videoLoadedTwelve" autoplay loop muted playsinline>
                            <source src="video/hare.mov" type="video/mp4">
                            <source src="video/hare.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingTwelve">
                            <source type="image/webp" srcset="img/hare.webp">
                            <img loading="lazy" src="img/hare.png" alt="">
                        </picture>
                    </div>


                    <BaseCollageInfo class="eagle" title="Орлан-белохвост" :color="'#71464E'"
                        :text="'Размах его крыльев достигает 2,4&nbsp;м. Птица нередко питается падалью и&nbsp;считается природным санитаром'" />

                    <BaseCollageInfo class="falcon" title="Сапсан" :color="'#71464E'"
                        :text="'Самая быстрая птица на планете'" />

                    <BaseCollageInfo class="warbler" title="Пеночка-таловка"
                        :text="'Встречается также в&nbsp;Забайкалье'" />
                    <BaseCollageInfo class="lentils" title="Чечевица"
                        :text="'Издаёт ритмичные звуки, в&nbsp;которых слышится: <br/>&laquo;Че-че-ви-цу?&raquo;'" />

                    <BaseCollageInfo class="willow-warbler" title="Пеночка-весничка"
                        :text="'Кроме Норильского обитает также в&nbsp;Кольском дивизионе'" />

                    <BaseDropdownInfo class="merlin" title="Кречет" :color="'#71464E'" :is-modal="true"
                        :pulsation-color="'finn'"
                        :text="'Самая крупная птица из&nbsp;отряда соколиных. За&nbsp;последние 20&nbsp;лет её&nbsp;популяция в&nbsp;России сократилась втрое. &laquo;Норникель&raquo; вложил 50&nbsp;млн рублей в&nbsp;поддержку и&nbsp;сохранение вида в&nbsp;2022&ndash;2023&nbsp;гг'" />

                    <BaseCollageInfo class="oatmeal" title="Полярная овсянка" />
                    <BaseCollageInfo class="larch" title="Лиственница сибирская" :color="'#71464E'" />

                    <BaseCollageInfo class="ptarmigan" title="Белая куропатка"
                        :text="'Тело птицы сохраняет&nbsp;постоянную температуру 45&nbsp;ºC'" />

                    <BaseCollageInfo class="shrew" title="Тундряная бурозубка"
                        :text="'За&nbsp;сутки может съесть в&nbsp;4&nbsp;раза больше, чем весит'" />

                    <BaseCollageInfo class="wolverine" title="Росомаха" :color="'#71464E'" />

                    <BaseCollageInfo class="olkhovnik" title="Ольховник кустарниковый"
                        :text="'Древесина срубленной ольхи окрашивается в&nbsp;красный цвет'" />

                    <BaseCollageInfo class="willow" title="Ива мохнатая" />
                    <BaseCollageInfo class="vole" title="Полёвка-экономка" />

                    <BaseCollageInfo class="hare" title="Заяц-беляк"
                        :text="'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60&nbsp;км/ч. Обитает также в&nbsp;Забайкальском дивизионе'" />

                    <BaseDropdownInfo class="plover" title="Золотистая ржанка" :color="'#71464E'" :is-modal="true"
                        :pulsation-color="'finn'"
                        :text="'В&nbsp;древности считалось, что один взгляд на&nbsp;эту пёструю птичку излечивает от&nbsp;желтухи'" />

                    <BaseCollageInfo class="gooseberry" title="Гуменник" :color="'#71464E'"
                        :text="'В&nbsp;полёте поднимается на&nbsp;высоту до&nbsp;10&nbsp;км'" />

                    <BaseCollageInfo class="loon" title="Чернозобая гагара" :color="'#71464E'"
                        :text="'Умеет нырять на&nbsp;глубину до&nbsp;20&nbsp;метров'" />

                    <BaseCollageInfo class="swan" title="Лебедь-кликун" :color="'#71464E'"
                        :text="'Мощными крыльями может отразить атаку мелких хищников. Встречается также в&nbsp;Кольском дивизионе'" />

                    <BaseCollageInfo class="palia" title="Боганидская палия" />
                    <BaseDropdownInfo class="char" title="Арктический голец" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />

                    <BaseDropdownInfo class="ground-beetles" title="Жужелицы" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Такие виды, как Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus и&nbsp;Nebria gyllenhali, отрицательно реагируют на&nbsp;промышленное воздействие и&nbsp;помогают исследователям фиксировать изменения в&nbsp;окружающей среде. Потенциально индикаторный вид жуков-жужелиц&nbsp;&mdash; Куртонотус альпинус (Curtonotus alpinus): его динамическая плотность снижается при удалении от&nbsp;предприятий компании'" />
                    <BaseDropdownInfo class="myxomycetes" title="Миксомицеты" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Миксомицеты занимают промежуточное положение между растениями и&nbsp;животными: похожие внешне на&nbsp;грибы, они постоянно передвигаются и&nbsp;едят. На&nbsp;территории воздействия предприятий исследователи обнаружили 14&nbsp;видов этих существ'" />
                    <BaseDropdownInfo class="microalgae" title="Микроводоросли" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'В&nbsp;реках и&nbsp;озёрах дивизиона биологи обнаружили два вида микроводорослей, способных рассказать об&nbsp;экологической обстановке. Похожая на&nbsp;звезду Asterionella formosa живёт только в&nbsp;чистых водоёмах, в&nbsp;то&nbsp;время как её&nbsp;антагонист Dictyosphaerium pulchellum развивается в&nbsp;загрязнённой воде'" />

                    <BaseDropdownInfo class="zooplankton" title="Зоопланктон" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Чтобы оценить состояние водоёмов, исследователи отобрали виды зоопланктона, сигнализирующие о&nbsp;качестве воды. Например, планктонный рачок Limnocalanus macrurus любит чистую воду, а&nbsp;если начинает доминировать планктонная коловратка Brachionus sericus&nbsp;&mdash; вода загрязнена'" />

                    <BaseDropdownInfo class="deer" title="Дикий северный олень" :color="'#71464E'"
                        :pulsation-color="'finn'" :is-modal="true"
                        :text="'Отличительная особенность этого вида&nbsp;&mdash; наличие рогов у&nbsp;самок. Наименее изученная и&nbsp;малочисленная популяция дикого северного оленя&nbsp;&mdash; гыданская, она занесена в&nbsp;Красную книгу ЯНАО. По&nbsp;данным исследований, олени почти не&nbsp;мигрируют на&nbsp;дальние расстояния и&nbsp;круглый год остаются в&nbsp;арктической тундре'" />
                    <BaseDropdownInfo class="lycosus-moss" title="Плаунок плаунковидный" :is-modal="true"
                        :pulsation-color="'finn'" :color="'#71464E'"
                        :text="'Сокращающийся в&nbsp;численности вид, уязвимый. Внешне напоминает мох, но&nbsp;является сосудистым растением. Предпочитает влажные луга, болота, северные торфяники и&nbsp;мшистые места'" />
                    <BaseDropdownInfo class="hare_mobile" title="Заяц-беляк" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60&nbsp;км/ч'" />
                </div>
                <BaseTextBlock class="mb-100" :tooltip="true">
                    <p class="mb-10">
                        В&nbsp;месте расположения Норильского дивизиона, в&nbsp;долине Медвежьего ручья учёные
                        обнаружили уникальную экосистему&nbsp;&mdash; выжившие тундростепи. Эти современники эпохи
                        мамонтов и&nbsp;шерстистых носорогов сохранились благодаря уникальному сочетанию
                        почвенных и&nbsp;климатических условий.
                    </p>
                    <p>
                        <BaseTooltip :word="'Реликтовые'">
                            Биологические реликты&nbsp;&mdash; дожившие до&nbsp;нашего времени без изменений
                            представители прошлых эволюционных эпох. Реликтовыми могут быть организмы, виды или
                            целые природные сообщества. Как правило, в&nbsp;прошлом реликты были широко
                            распространены
                            и&nbsp;играли ключевую роль в&nbsp;формировании условий жизни на&nbsp;определённой
                            территории.
                        </BaseTooltip>
                        экосистемы&nbsp;&mdash; свидетели прошлых геологических эпох&nbsp;&mdash; могут поведать
                        учёным о&nbsp;развитии планеты. Кроме того, это ценный ресурс видов, которые в&nbsp;условиях
                        глобального изменения климата могут заселять новые места обитания.
                    </p>
                </BaseTextBlock>

                <div class="division__new-ward mb-60">
                    <div class="division__new-ward-title">
                        Обнаружен новый вид жука-долгоносика
                    </div>
                    <div class="division__new-ward-descr">
                        В&nbsp;ходе Большой Научной экспедиции в&nbsp;Норильском дивизионе учёные открыли новый вид
                        жука-долгоносика. Имя для него выбирали голосованием среди жителей Норильска и&nbsp;работников
                        &laquo;Норникеля&raquo;. Победил вариант &laquo;Путоранчик&raquo;. Жука назвали в&nbsp;честь
                        одного из&nbsp;удивительнейших мест Росси, объекта всемирного наследия ЮНЕСКО, территории
                        реликтовых животных и&nbsp;растений, место с&nbsp;тысячью озёр, водопадами
                        и&nbsp;величественными каньонами&nbsp;&mdash; плато Путорана.
                    </div>
                    <picture class="division__new-ward-img">
                        <source type="image/webp" srcset="img/bug.webp">
                        <img loading="lazy" src="img/bug-1.png" alt="">
                    </picture>
                </div>

                <div class="habitat-map">
                    <div class="habitat-map__legend">
                        <div class="habitat-map__legend-top">
                            <div class="habitat-map__legend-title">
                                Зона воздействия предприятий
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#D38235" />
                                </svg>
                                <div>Интенсивная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                </svg>
                                <div>Умеренная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                </svg>
                                <div>Незначительная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                </svg>
                                <div>Фоновая</div>
                            </div>
                        </div>
                        <div class="habitat-map__legend-bottom">
                            <div class="habitat-map__legend-title">
                                Виды
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                1 – Кречет
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Сапсан
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Орлан-белохвост
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Гуменник
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Золотистая ржанка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Лебедь-кликун
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                7 – Чернозобая гагара
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                8 – Плаунок плаунковидный
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                9 – Реликтовые тундростепи
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isMobile" class="habitat-map__title">
                            Карта обитания охраняемых видов
                        </div>
                        <div v-if="isMobile" class="habitat-map__title">
                            Зона воздействия предприятий и виды
                        </div>
                        <div class="habitat-map__list">
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#D38235" />
                                    </svg>
                                    <div>Интенсивная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Орлан-белохвост</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Сапсан</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                    </svg>
                                    <div>Умеренная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Плаунок</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                    </svg>
                                    <div>Незначительная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Реликтовые&nbsp;тундростепи</li>
                                    <li>Кречет и Сапсан</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                    </svg>
                                    <div>Фоновая</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                </ul>
                            </div>

                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }"
                                @click="idMap = 1">
                                Большой Норильск / Дудинка
                            </div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }"
                                @click="idMap = 2">
                                Пеляткинское / Мессояха
                            </div>
                        </div>
                    </div>

                    <picture v-show="idMap === 1">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-1.webp">
                        <img loading="lazy" src="img/habitat-map-1.png" alt="">
                    </picture>

                    <picture v-show="idMap === 2">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-2.webp">
                        <img loading="lazy" src="img/habitat-map-2.png" alt="">
                    </picture>

                    <div v-show="idMap === 1">
                        <div class="habitat-map__name-lake">
                            оз. Пясино
                        </div>
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            Талнах
                        </div>
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            Норильск
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            Дудинка
                        </div>
                    </div>
                    <div v-show="idMap === 2">
                        <div class="habitat-map__river">
                            р. Енисей
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
                            <span>
                                Пеляткинское газоконденсатное
                                месторождение
                            </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-5">
                            <div class="habitat-map__city-circale"></div>

                            <span>
                                Мессояхское газоконденсатное месторождение
                            </span>
                        </div>
                    </div>
                </div>
                <BaseTextBlock class="mb-100">
                    <p>
                        Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум
                        или&nbsp;другие факторы воздействия. Ведь для&nbsp;их&nbsp;выживания главное&nbsp;&mdash;
                        наличие корма и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Уникальные экосистемы, редкие и&nbsp;индикаторные виды и&nbsp;места
                        их&nbsp;обитания&nbsp;&mdash; всё это элементы системы, с&nbsp;помощью которой компания
                        контролирует уровень промышленного воздействия и&nbsp;сохраняет обилие и&nbsp;разнообразие
                        природы
                        в&nbsp;дивизионе.
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import BigMap from '@/components/BigMap.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import MainSection from '@/layout/MainSection'
import BaseSidebar from '@/components/BaseSidebar'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        SectionOrange,
        SectionWhite,
        BigMap,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        BaseTooltip,
        BaseNumberBlock,
        BaseCollageInfo,
        BaseDropdownInfo
    },
    data() {
        return {
            isLoadingOne: false,
            isLoadingTwo: false,
            isLoadingThree: false,
            isLoadingFour: false,
            isLoadingFive: false,
            isLoadingSix: false,
            isLoadingSeven: false,
            isLoadingEight: false,
            isLoadingNine: false,
            isLoadingTen: false,
            isLoadingEleven: false,
            isLoadingTwelve: false,
            isLoadingThirteen: false,
            isLoadingLast: false,
            map1: 1,
            map2: 2,
            idMap: 1,
            circales: [{
                color: 'green',
                number: '1'
            },
            {
                color: 'blue',
                number: '2'
            },
            {
                color: 'blue',
                number: '3'
            },
            {
                color: 'blue',
                number: '4'
            },
            {
                color: 'purple',
                number: '5'
            },
            {
                color: 'purple',
                number: '6'
            },
            {
                color: 'purple',
                number: '7'
            }
            ],
            isMobile: (window.innerWidth <= 768),
            heroDescr: 'Какие виды животных и&nbsp;растений живут по&nbsp;соседству с&nbsp;промышленным гигантом&nbsp;Красноярского края&nbsp;&mdash; Большим Норильском'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation()
            // this.parallax()
        })
    },
    methods: {
        videoLoadedOne() {
            this.isLoadingOne = true;
        },
        videoLoadedTwo() {
            this.isLoadingTwo = true;
        },
        videoLoadedThree() {
            this.isLoadingThree = true;
        },
        videoLoadedFour() {
            this.isLoadingFour = true;
        },
        videoLoadedFive() {
            this.isLoadingFive = true;
        },
        videoLoadedSix() {
            this.isLoadingSix = true;
        },
        videoLoadedSeven() {
            this.isLoadingSeven = true;
        },
        videoLoadedEight() {
            this.isLoadingEight = true;
        },
        videoLoadedNine() {
            this.isLoadingNine = true;
        },
        videoLoadedTen() {
            this.isLoadingTen = true;
        },
        videoLoadedEleven() {
            this.isLoadingEleven = true;
        },
        videoLoadedTwelve() {
            this.isLoadingTwelve = true;
        },
        videoLoadedThirteen() {
            this.isLoadingThirteen = true;
        },
        videoLoadedLast() {
            this.isLoadingLast = true;
        },
        onResize() {
            this.isMobile = (window.innerWidth <= 768);
        },
        scrollMobile() {
            const collageItems = Array.from(document.querySelectorAll(".scroll-bg.active"))

            collageItems.forEach((elem) => {
                elem.css('background-position', '0px ' + document.scrollTop() + 'px')
            })
        },
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

            this.ScrollTrigger = gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".scroll",
                    start: '0%',
                    scrub: true,
                    toggleClass: { className: "active", targets: ".scroll-bg" }
                },
            })
            if (window.innerWidth <= 768) {
                this.scrollMobile()
            }

            gsap.fromTo(".bg-1", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-1",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-2',
                    // markers: true,
                    scrub: true
                },

            });

            gsap.fromTo(".bg-2", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-2",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-3',
                    // markers: true,
                    scrub: true,
                },

            });

            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".card-3",
                    start: () => "+=120%",
                    end: () => "+=" + (document.querySelector(".scroll-wrap").offsetHeight),
                    // markers: true,
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-bg" }
                },
            });
        },
        // parallax() {
        //     if (window.innerWidth > 768) {
        //         gsap.fromTo(".collage__eagle", { y: 105 }, {
        //             y: -20,
        //             scrollTrigger: {
        //                 trigger: ".collage",
        //                 start: 'top 100%',
        //                 end: '13%',
        //                 // markers: true,
        //                 scrub: true
        //             },

        //         });

        //         gsap.fromTo(".collage__merlin", { y: 55 }, {
        //             y: -15,
        //             scrollTrigger: {
        //                 trigger: ".collage",
        //                 start: '25% 100%',
        //                 end: '33%',
        //                 // markers: true,
        //                 scrub: true
        //             },

        //         });

        //         gsap.fromTo(".collage__loach", { y: 50 }, {
        //             y: -0,
        //             scrollTrigger: {
        //                 trigger: ".collage",
        //                 start: '90% 100%',
        //                 end: 'bottom',
        //                 // markers: true,
        //                 scrub: true
        //             },

        //         });

        //         gsap.fromTo(".collage__loon", { y: 35 }, {
        //             y: -10,
        //             scrollTrigger: {
        //                 trigger: ".collage",
        //                 start: '80% 100%',
        //                 end: '100%',
        //                 // markers: true,
        //                 scrub: true
        //             },

        //         });
        //     }
        // }
    }
}
</script>

<style lang="scss">
.division {
    .big-map {
        margin-bottom: 3.81rem;
        height: 40.19419rem;

        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 21.3334rem;
            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 14.4rem;
                left: 57rem;
            }

            @media (max-width: 768px) {
                top: 56.4rem;
                left: 70rem;
            }

            &__2 {
                top: 10rem;
                left: 43.3rem;

                @media (max-width: 768px) {
                    top: 48.4rem;
                    left: 44.2rem;
                }
            }

            &__3 {
                top: 23.6rem;
                left: 39.7rem;

                @media (max-width: 768px) {
                    top: 73.4rem;
                    left: 38rem;
                }
            }

            &__4 {
                top: 32.8rem;
                left: 42rem;

                @media (max-width: 768px) {
                    top: 90.5rem;
                    left: 42rem;
                }
            }

            &__5 {
                top: 11.8rem;
                left: 41.6rem;

                @media (max-width: 768px) {
                    top: 51.6rem;
                    left: 40.9rem;
                }
            }

            &__6 {
                top: 11.8rem;
                left: 34.85rem;

                @media (max-width: 768px) {
                    top: 51.4rem;
                    left: 28rem;
                }
            }

            &__7 {
                top: 14.7rem;
                left: 23.55rem;

                @media (max-width: 768px) {
                    top: 57.4rem;
                    left: 7.7rem;
                }
            }
        }

        .circales {
            position: absolute;
            top: 8.31rem;
            left: 8.63rem;
            width: 11.94rem;
            display: flex;
            flex-direction: column;
            gap: 1.12rem;

            @media (max-width: 768px) {
                top: 0;
                flex-direction: row;
                flex-wrap: wrap;
                width: 81.4rem;
                gap: 3.3rem;
            }

            .circale-block {
                display: flex;
                align-items: flex-start;
                gap: 1.06rem;

                @media (max-width: 768px) {
                    width: 39rem;

                    &:last-child {
                        width: 51rem;
                    }
                }

                &__img {
                    width: 0.875rem;
                    height: 0.875rem;
                    flex-shrink: 0;

                    @media (max-width: 768px) {
                        width: 1.87rem;
                        height: 1.87rem;
                    }
                }

                &__text {
                    font-size: 0.9375rem;
                    font-weight: 300;
                    line-height: 130%;

                    @media (max-width: 768px) {
                        font-size: 3.46667rem;
                    }
                }
            }
        }

        .number-block {
            bottom: 5.63rem;
            left: unset;
            right: 7.81rem;

            @media (max-width: 768px) {
                margin-left: 9.5rem;
                width: unset;
            }
        }
    }

    .scroll {
        position: relative;
        width: 100%;

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            height: 100vh;
            background-position: bottom;
            background-size: calc(100% - 13.5rem) 49rem;
            background-repeat: no-repeat;

            @media (max-width: 768px) {
                background-position: center;
                background-size: 100%;
            }

            &.active {
                background-attachment: fixed;
                height: 100%;

                @media (max-width: 768px) {
                    height: 100%;
                    background-size: 100%;
                    position: fixed;
                    background-attachment: unset;
                }

                &.remove-active {
                    background-attachment: unset;
                    background-position: 6.75rem 352vh;
                    background-size: calc(100% - 13.5rem) 49rem;

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-1 {
                z-index: 3;
                background-image: url(../../public/img/map-1.jpg);
            }

            &.bg-2 {
                z-index: 2;
                background-image: url(../../public/img/map-2.jpg);
            }

            &.bg-3 {
                z-index: 1;
                background-image: url(../../public/img/map-3.jpg);
            }

            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/map-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/map-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/map-3-mobile.jpg);
                }
            }
        }

        &-wrap {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-right: 1.25rem;
        }

        &-card {
            padding: 1.5rem;
            margin-bottom: 100vh;
            width: 34.2rem;
            border-radius: 0.25rem;
            background: #FFF;

            &:first-child {
                margin-top: 50vh;
            }

            @media (max-width: 768px) {
                padding: 4.2666rem;
                margin: 0 auto 100vh auto;
                width: 93%;

                &:first-child {
                    margin-top: 100vh;
                }
            }

            p {
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 130%;

                @media (max-width: 768px) {
                    font-size: 4.53334rem;
                }

                &:first-child {
                    margin-bottom: 1.56rem;
                    font-size: 1.25rem;
                    font-weight: 600;

                    @media (max-width: 768px) {
                        margin-bottom: 6.6667rem;
                        font-size: 4.8rem;
                    }
                }
            }

            .dropdown-info {
                margin-top: 1.88rem;

                @media (max-width: 768px) {
                    margin-top: 7.4666rem;
                }

                &__title {
                    font-size: 1.25rem;

                    @media (max-width: 768px) {
                        font-size: 4.8rem;
                    }
                }

                &__text {
                    background: #F7F6F2;
                    width: 27rem;
                    font-size: 1.04167rem;
                    padding: 3.5rem 1.4375rem 1.5625rem 3.375rem;

                    @media (max-width: 768px) {
                        left: -4.3rem;
                        top: -4.3rem;
                        width: 91.734rem;
                        font-size: 3.73334rem;
                        padding: 14.9334rem 6.1333rem 6.6666rem 13.8666rem;
                    }
                }

                ul {
                    list-style-type: disc;

                    li {
                        padding-left: 0.94rem;
                    }

                    li:not(:last-child) {
                        margin-bottom: 0.8rem;

                        @media (max-width: 768px) {
                            margin-bottom: 3.2rem;
                        }
                    }
                }
            }
        }
    }

    &-radius {
        &__descr {
            margin-top: 0.5rem;
            display: flex;
            justify-content: flex-end;
            gap: 0.31rem;
            padding: 0 1.44rem;
            font-size: 0.8125rem;
            font-weight: 300;
            line-height: 130%;
            color: var(--Gray-3, #828282);

            @media (max-width: 768px) {
                font-size: 3rem;
                padding: 0 4rem;
                margin-top: 2rem;
            }

            span:last-child {
                width: 26rem;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }
        }
    }

    .sidebar {
        width: 51.125rem;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__factors-img {
        margin: 0 auto;
        width: 73.125rem;
        height: 26.9375rem;
    }

    &-factors {
        display: flex;
        gap: 4.75rem;
        margin-left: auto;
        margin-right: auto;
        width: 75.0625rem;
        padding: 3.13rem 3rem 3.88rem 3rem;
        border-radius: 19px;
        border: 1px solid var(--grey, #626261);

        @media (max-width: 768px) {
            width: unset;
            padding: 5rem;
            gap: 6.4rem;
            flex-direction: column;
            margin-left: 9.5rem;
            margin-right: 9.5rem;
        }

        &__left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (max-width: 768px) {
                gap: 6.4rem;
            }
        }

        &__img-grass {
            margin-bottom: 0.63rem;
            width: 17.5625rem;
            height: 9.6875rem;

            @media (max-width: 768px) {
                width: 50%;
                height: auto;
                margin-bottom: 0;
            }
        }

        &__descr {
            width: 17.0625rem;
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 130%;
            flex-shrink: 0;

            @media (max-width: 768px) {
                width: unset;
                font-size: 4.8rem;
            }
        }

        &__items {
            display: flex;
            gap: 5.94rem 2.87rem;
            flex-wrap: wrap;

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 6.4rem;
            }
        }

        &__item {
            width: 19.875rem;
            display: flex;
            flex-direction: column;
            gap: 1.19rem;
            font-size: 1.125rem;
            font-weight: 300;

            @media (max-width: 768px) {
                width: unset;
                font-size: 4.8rem;
                line-height: 130%;
                gap: 5rem;
            }

            &-title {
                padding: 0.4375rem 0.625rem;
                border-radius: 27px;
                background: var(--copper, #D38235);
                color: var(--white, #FFF);
                width: max-content;

                @media (max-width: 768px) {
                    padding: 0.5rem 2rem;
                }
            }

            &-text {
                line-height: 130%;
            }
        }
    }

    .flora-and-fauna-nor {
        margin: 0 auto;
        width: 68.5rem;
        margin-bottom: 8.69rem;

        @media (max-width: 768px) {
            margin-bottom: 16rem;
            width: unset;
        }

        &__wrap {
            display: flex;
            gap: 5.44rem;

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 10.6667rem;
            }
        }

        .wrap-numbers {
            display: flex;
            gap: 2.88rem;
            margin-top: 2.88rem;

            @media (max-width: 768px) {
                margin-top: 0;
                gap: 0;
                padding: 0 9.5rem;
                flex-direction: column;
            }
        }

        .text-block__wrap {
            margin: 0;

            &:first-child {
                width: 32.375rem;

                .number-block {
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 7.4rem;
                    }
                }
            }

            &:last-child {
                width: 29.5rem;

                .wrap-numbers {
                    display: flex;
                    gap: 2.88rem;
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 0;
                        gap: 0;
                        flex-direction: column;
                    }
                }
            }

            @media (max-width: 768px) {

                &:first-child,
                &:last-child {
                    width: 100%;
                }
            }
        }
    }

    &__spider {
        .position-info {
            position: absolute;
            bottom: 0;
            right: -17rem;

            @media (max-width: 768px) {
                position: relative;
                bottom: 0;
                right: 0;
                text-align: end;
                margin-bottom: 10rem;
            }

            img {
                width: 19.9375rem;

                @media (max-width: 768px) {
                    width: 50%;
                }
            }
        }
    }

    .number-blocks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6.75rem;
        width: 60.5rem;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 7.467rem;
            width: 100%;
            align-items: flex-start;
        }

        .number-block {
            position: static;
            width: max-content;

            @media (max-width: 768px) {
                margin-top: 0;
            }
        }
    }

    .flora-and-fauna {
        display: flex;
        gap: 5.44rem;
        width: 63.5rem;
        margin: 0 auto;

        @media (max-width: 768px) {
            flex-direction: column;
            width: unset;
            gap: 12.27rem;
            margin-bottom: 16rem;
        }

        .text-block__wrap {
            margin: 0;

            &:first-child {
                width: 29.375rem;
            }

            &:last-child {
                width: 28.625rem;

                .number-block {
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 7.4rem;
                    }
                }
            }

            @media (max-width: 768px) {

                &:first-child,
                &:last-child {
                    width: 100%;
                }
            }
        }
    }

    .collage {
        position: relative;
        margin-bottom: 1.25rem;
        height: 347rem;
        width: 100%;
        background-image: url(../../public/img/collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        z-index: 11;

        @supports (background-image: url(../../public/img/collage.webp)) {
            background-image: url(../../public/img/collage.webp);
        }

        @media (max-width: 768px) {
            height: 810rem;
            background-position: left 18rem;
            background-image: url(../../public/img/collage-mobile.png);

            @supports (background-image: url(../../public/img/collage-mobile.webp)) {
                background-image: url(../../public/img/collage-mobile.webp);
            }
        }

        .dropdown-info__text {
            @media (max-width: 768px) {
                width: 93.34rem;
                padding: 10.6667rem 5.3333rem 3.7333rem 12.2666rem;
            }
        }

        .legend {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            top: 9.5rem;

            .block-info {
                position: static;
                font-size: 1.25rem;

                @media (max-width: 768px) {
                    font-size: 4.53334rem;
                }
            }

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
                top: -1rem;
                padding-left: 10rem;

                .block-info__text {
                    font-size: 4.53334rem;
                    line-height: 130%;
                }
            }
        }

        video {
            position: absolute;
            width: 100%;
        }

        &__eagle {
            position: absolute;
            top: 0rem;
            left: 8rem;
            width: 52.2223rem;

            video {
                width: 129%;
                top: 1rem;
                left: -8rem;
                transform: rotate(12deg);
            }

            @media (max-width: 768px) {
                top: 22rem;
                left: 4rem;
                width: 65.2223rem;
            }
        }

        &__merlin {
            position: absolute;
            top: 87.7rem;
            left: 12.3rem;
            width: 38rem;

            video {
                width: 280%;
                left: -31rem;
                top: -46rem;

                @media (max-width: 768px) {
                    width: 270%;
                    left: -45rem;
                    top: -67rem;
                }
            }

            @media (max-width: 768px) {
                top: 143rem;
                left: 0rem;
                width: 58rem;
            }
        }

        &__sapsan {
            position: absolute;
            top: 53.5rem;
            left: 25.3rem;
            width: 27rem;

            video {
                width: 200%;
                left: -9rem;
                top: -4rem;
                transform: rotate(-35deg);
            }

            @media (max-width: 768px) {
                top: 92.5rem;
                left: 46.3rem;
                width: 37rem;
            }
        }

        &__char {
            position: absolute;
            top: 311rem;
            left: 3.3rem;
            width: 34rem;
            transform: rotate(-10deg);

            video {
                width: 113%;
                left: -2rem;
                top: 1rem;
                transform: rotate(11deg);

                @media (max-width: 768px) {
                    left: -6rem;
                }
            }

            @media (max-width: 768px) {
                top: 772rem;
                left: 53.3rem;
                width: 44rem;
                transform: scaleX(-1) rotate(-17deg);
            }
        }

        &__warbler {
            position: absolute;
            top: 71rem;
            left: 54.3rem;
            width: 20rem;
            transform: rotate(-10deg);

            video {
                width: 113%;
                left: -2rem;
                top: 1rem;
                transform: rotate(11deg);
            }

            @media (max-width: 768px) {
                top: 206rem;
                left: 2rem;
                width: 30rem;
            }
        }

        &__warbler-2 {
            position: absolute;
            top: 46.5rem;
            left: 65rem;
            width: 17rem;
            transform: rotate(-15deg);

            video {
                width: 113%;
                left: -2rem;
                top: 1rem;
                transform: rotate(11deg);
            }

            @media (max-width: 768px) {
                top: 185.5rem;
                left: 59rem;
                width: 29rem;
                transform: rotate(-23deg);
            }
        }

        &__lentils {
            position: absolute;
            top: 44.3rem;
            left: -2.2rem;
            width: 23rem;
            transform: scaleX(-1);

            @media (max-width: 768px) {
                top: 242.3rem;
                left: 1.8rem;
                width: 33rem;
            }
        }

        &__oatmeal {
            position: absolute;
            top: 103.5rem;
            left: 46.5rem;
            width: 23rem;

            @media (max-width: 768px) {
                top: 219.5rem;
                left: 63.5rem;
                width: 37rem;
                transform: scaleX(-1);
            }
        }

        &__shrew {
            position: absolute;
            top: 180rem;
            left: 13rem;
            width: 24rem;
            transform: scaleX(-1);

            @media (max-width: 768px) {
                top: 582rem;
                left: 39rem;
                width: 37rem;
                transform: rotate(20deg);
            }
        }

        &__fish {
            position: absolute;
            top: 321.2rem;
            left: 36.6rem;
            width: 30rem;

            @media (max-width: 768px) {
                top: 760.2rem;
                width: 50rem;
                transform: scaleX(-1);
                left: 2rem;
            }
        }

        &__deep {
            position: absolute;
            top: 127rem;
            left: 12rem;
            width: 75rem;

            video {
                transform: scaleX(-1);
                width: 131%;
                left: -19rem;
                top: -15rem;

                @media (max-width: 768px) {
                    left: -22rem;
                }
            }

            @media (max-width: 768px) {
                top: 286rem;
                left: 0rem;
                width: 93rem;
                transform: scalex(-1);
            }
        }

        &__white-partridge {
            position: absolute;
            top: 161.5rem;
            left: -3rem;
            width: 27rem;
            transform: scaleX(-1);

            @media (max-width: 768px) {
                top: 358.5rem;
                width: 36rem;
            }
        }

        &__swan {
            position: absolute;
            width: 46.3rem;
            top: 261.5rem;
            left: -2.4rem;

            @media (max-width: 768px) {
                width: 64.3rem;
                top: 635.5rem;
                left: -17.4rem;
            }
        }

        &__loon {
            position: absolute;
            top: 281.1rem;
            left: 46.3rem;
            width: 31.903rem;

            video {
                width: 118%;
                top: -4.8rem;
                left: -2rem;

                @media (max-width: 768px) {
                    top: -7.8rem;
                }
            }

            @media (max-width: 768px) {
                top: 692.1rem;
                left: 46.3rem;
                width: 47rem;
                transform: scaleX(-1);
            }
        }

        &__hare {
            position: absolute;
            top: 214.5rem;
            left: 5.5rem;
            width: 21rem;

            video {
                width: 175%;
                top: -6rem;
                left: -8rem;
            }

            @media (max-width: 768px) {
                top: 550.5rem;
                left: 2.5rem;
                width: 27rem;
            }
        }

        &__wolverine {
            position: absolute;
            top: 184rem;
            left: 54.5rem;
            width: 44rem;

            video {
                width: 134%;
                top: -6rem;
                left: -7rem;
            }

            @media (max-width: 768px) {
                top: 398rem;
                left: 46.5rem;
                width: 58rem;
            }
        }

        &__vole {
            position: absolute;
            top: 234.5rem;
            left: 76.2rem;
            width: 27rem;

            @media (max-width: 768px) {
                top: 344.5rem;
                left: 67.2rem;
                width: 38rem;
            }
        }

        &__goose {
            position: absolute;
            top: 247.5rem;
            left: 38rem;
            width: 26rem;

            video {
                width: 135%;
                top: -3rem;
                left: -4rem;
            }

            @media (max-width: 768px) {
                top: 622.5rem;
                left: 67rem;
                width: 31rem;
                transform: scaleX(-1);
            }
        }

        &__watercolor {
            position: absolute;
            top: 20rem;
            left: 5rem;
            width: 35rem;
            mix-blend-mode: multiply;
            transform: rotate(167deg);
            z-index: -1;

            @media (max-width: 768px) {
                top: 26rem;
                left: -14rem;
                width: 67rem;
            }
        }

        &__watercolor-2 {
            position: absolute;
            top: 83rem;
            left: 62rem;
            width: 34rem;
            mix-blend-mode: multiply;
            transform: rotate(167deg);

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__watercolor-3 {
            position: absolute;
            top: 246rem;
            left: 32rem;
            width: 36rem;
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 623rem;
                left: 65rem;
                width: 36rem;
                transform: rotate(6deg);
            }
        }

        &__watercolor-4 {
            position: absolute;
            top: 144rem;
            left: 29rem;
            width: 70rem;
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 306rem;
                left: 15rem;
                width: 86rem;
            }
        }

        &__bug {
            position: absolute;
            top: 262.5rem;
            left: 85.2rem;
            width: 13rem;
            transform: rotate(45deg);

            @media (max-width: 768px) {
                top: 485rem;
                left: 51rem;
                width: 26rem;
                transform: rotate(-48deg);
            }
        }

        &__plover {
            position: absolute;
            top: 228rem;
            left: 28rem;
            width: 30rem;

            @media (max-width: 768px) {
                top: 495rem;
                left: 46rem;
                width: 50rem;
                transform: scaleX(-1);
            }
        }

        .eagle {
            width: 15rem;
            top: 25.7rem;
            right: 42.3rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 34rem;
                right: 8rem;
            }
        }

        .falcon {
            width: 12rem;
            top: 58.45rem;
            right: 46.2rem;

            @media (max-width: 768px) {
                width: 33rem;
                top: 94rem;
                right: 53rem;
            }
        }

        .warbler {
            width: 11rem;
            top: 48.4rem;
            right: 28.5rem;

            @media (max-width: 768px) {
                top: 193rem;
                right: 41rem;

                .block-info__text p {
                    display: none;
                }
            }
        }

        .lentils {
            width: 11rem;
            top: 50.4rem;
            left: 17.5rem;

            @media (max-width: 768px) {
                top: 256.4rem;
                left: 29.5rem;
                width: 41rem;
            }
        }

        .willow-warbler {
            width: 12rem;
            top: 76rem;
            right: 36rem;

            @media (max-width: 768px) {
                top: 205.5rem;
                right: 72.5rem;

                .block-info__text p {
                    display: none;
                }
            }
        }

        .merlin {
            position: absolute;
            top: 94rem;
            left: 44rem;

            @media (max-width: 768px) {
                top: 135rem;
                left: 12rem;
            }
        }

        .oatmeal {
            width: 7rem;
            top: 116.5rem;
            right: 30.5rem;

            @media (max-width: 768px) {
                top: 223rem;
                right: 42.5rem;
            }
        }

        .larch {
            width: 7rem;
            top: 137rem;
            right: 15.5rem;

            @media (max-width: 768px) {
                top: 154rem;
                right: 30rem;
            }
        }

        .deer {
            position: absolute;
            top: 143rem;
            left: 42rem;

            @media (max-width: 768px) {
                top: 301rem;
                left: 5rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .ptarmigan {
            width: 13rem;
            top: 172.2rem;
            left: 18.8rem;

            @media (max-width: 768px) {
                top: 371.2rem;
                left: 25.8rem;
            }
        }

        .shrew {
            width: 15rem;
            top: 189.8rem;
            left: 30.2rem;

            @media (max-width: 768px) {
                width: 31rem;
                top: 553rem;
                left: 37.2rem;
            }
        }

        .wolverine {
            width: 7rem;
            top: 195.9rem;
            right: 40.7rem;

            @media (max-width: 768px) {
                top: 399rem;
                right: 20.7rem;
            }
        }

        .olkhovnik {
            width: 14rem;
            top: 205rem;
            left: 46.7rem;

            @media (max-width: 768px) {
                top: 412rem;
                width: 50rem;
                left: 4rem;
            }
        }

        .willow {
            width: 9rem;
            top: 234rem;
            right: 17rem;

            @media (max-width: 768px) {
                top: 561rem;
                right: 19rem;
            }
        }

        .vole {
            width: 7rem;
            top: 237.3rem;
            right: 8.7rem;

            @media (max-width: 768px) {
                top: 364rem;
                right: 18.7rem;
            }
        }

        .hare {
            width: 15rem;
            top: 233.5rem;
            left: 27rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                bottom: 260rem;
                left: 7rem;

                @media (max-width: 768px) {
                    display: block;

                    .dropdown-info__title {
                        max-width: unset;
                    }
                }
            }
        }

        .plover {
            position: absolute;
            top: 241rem;
            left: 49rem;

            @media (max-width: 768px) {
                top: 513rem;
                left: 13rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .gooseberry {
            width: 14rem;
            top: 259.7rem;
            right: 23.9rem;

            @media (max-width: 768px) {
                width: 48rem;
                top: 627rem;
                right: 23.9rem;
            }
        }

        .loon {
            width: 14rem;
            top: 287.2rem;
            right: 12.9rem;

            @media (max-width: 768px) {
                width: 38rem;
                top: 681rem;
                right: 1.9rem;
            }
        }

        .swan {
            width: 18rem;
            top: 284.69rem;
            left: 38.9rem;

            @media (max-width: 768px) {
                width: 43rem;
                top: 677rem;
                left: 2.9rem;
            }
        }

        .lycosus-moss {
            position: absolute;
            top: 255rem;
            left: 18rem;

            .dropdown-info__title {
                max-width: 12rem;
            }

            .dropdown-info__text {
                padding-top: 3.56rem;
            }

            .dropdown-info__wrap {
                align-items: flex-start;
            }

            @media (max-width: 768px) {
                top: unset;
                bottom: 193rem;
                left: 4rem;

                .dropdown-info__wrap {
                    align-items: center;
                }

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .char {
            position: absolute;
            top: 316.8rem;
            left: 24rem;

            @media (max-width: 768px) {
                top: 772rem;
                left: 52rem;

                .dropdown-info__title {
                    font-size: 3.2rem;
                    max-width: 33rem;
                }
            }
        }

        .palia {
            bottom: 21.4rem;
            left: 46rem;

            @media (max-width: 768px) {
                bottom: 44.4rem;
                left: 10rem;

                .block-info__title {
                    font-size: 3.2rem;
                }
            }
        }

        .ground-beetles {
            position: absolute;
            bottom: 80rem;
            right: 17rem;

            @media (max-width: 768px) {
                bottom: 311rem;
                right: 40rem;
            }
        }

        .myxomycetes {
            position: absolute;
            top: 225rem;
            right: 18rem;

            @media (max-width: 768px) {
                top: 453rem;
                right: 31rem;
            }
        }

        .microalgae {
            position: absolute;
            bottom: 41rem;
            left: 20rem;

            @media (max-width: 768px) {
                bottom: 86rem;
                left: 11rem;

                .dropdown-info__title {
                    font-size: 3.2rem;
                }
            }
        }

        .zooplankton {
            position: absolute;
            bottom: 37rem;
            right: 39rem;

            @media (max-width: 768px) {
                bottom: 74rem;
                right: 22rem;

                .dropdown-info__title {
                    font-size: 3.2rem;
                }
            }
        }
    }

    .section-orange {
        &__title {
            color: var(--copper, #D38235);
            margin-bottom: 2.19rem;
            font-size: 2.125rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 7.4667rem;
                margin-bottom: 6.4rem;
            }
        }

        .text {
            width: 38.25rem;
            text-align: center;

            @media (max-width: 768px) {
                width: unset;
                text-align: start;
            }
        }

        .number-block {
            position: static;
        }
    }

    .habitat-map {
        position: relative;
        margin-bottom: 4.5rem;
        height: 40rem;

        @media (max-width: 768px) {
            height: unset;
        }

        &__wrap {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);

            @media (max-width: 768px) {
                position: static;
                transform: translateX(0);
                margin-bottom: 5.867rem;
                padding: 0 5rem;
            }
        }

        &__title {
            margin-bottom: 1.63rem;
            font-size: 1.375rem;
            font-weight: 600;
            line-height: 130%;
            text-align: center;

            @media (max-width: 768px) {
                text-align: start;
                width: 52.5rem;
                margin-bottom: 7.75rem;
                font-size: 4.8rem
            }
        }

        &__buttons {
            display: flex;
            gap: 1rem;

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 2rem;
            }
        }

        &__button {
            cursor: pointer;
            padding: 0.8125rem 1.25rem;
            border-radius: 3.125rem;
            border: 1px solid var(--sea, #21285C);
            font-size: 1.25rem;
            color: #21285C;
            line-height: 130%;
            opacity: 0.4;
            transition: .2s;

            @media (max-width: 768px) {
                padding: 4rem 6rem;
                border-radius: 8.125rem;
                font-size: 4.53334rem;
                text-align: center;
            }

            &_active {
                opacity: 1;
            }

            &:hover {
                color: var(--copper, #D38235);
                border-color: #D38235;
                opacity: 1;
            }
        }

        &__legend {
            position: absolute;
            left: 7.37rem;
            top: 10.19rem;
            width: 12.4rem;

            @media (max-width: 768px) {
                display: none;
            }

            &-title {
                margin-bottom: 1rem;
                font-size: 0.9375rem;
                font-weight: 700;
                line-height: 130%;
            }

            &-text {
                font-size: 0.9375rem;
                font-weight: 300;
                line-height: 130%;
            }

            &-top {
                margin-bottom: 2.81rem;

                &-item {
                    display: flex;
                    gap: 0.56rem;
                    align-items: center;

                    &:not(:last-child) {
                        margin-bottom: 0.62rem;
                    }

                    svg {
                        width: 0.875rem;
                        height: 0.875rem;
                    }
                }
            }

            &-bottom {
                &-item {
                    &:not(:last-child) {
                        margin-bottom: 0.69rem;
                    }
                }
            }
        }

        &__list {
            display: none;
            flex-wrap: wrap;
            row-gap: 6rem;
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                display: flex;
            }

            &-item {
                display: flex;
                margin-bottom: 2rem;
                align-items: center;
                gap: 1rem;
                font-size: 4.2042rem;
                line-height: 130%;

                &-wrap {
                    width: 50%;
                }

                svg {
                    width: 3.7333rem;
                    height: 3.7333rem;
                }
            }

            &-list {
                margin-left: 4rem;
                padding-left: 4rem;
                font-size: 3.6036rem;
                font-weight: 300;
                line-height: 130%;

                li {
                    list-style-type: disc;

                    &:not(:last-child) {
                        margin-bottom: 2.66rem;
                    }
                }
            }
        }

        &__river,
        &__name-lake {
            position: absolute;
            color: var(--blue-deep, #004C97);
            font-size: 0.5625rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 2.4rem;
            }
        }

        &__name-lake {
            top: 14rem;
            right: 28rem;

            @media (max-width: 768px) {
                top: unset;
                right: 25rem;
                bottom: 57rem;
            }
        }

        &__river {
            top: 16rem;
            transform: rotate(49deg);
            right: 24.7rem;

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__city {
            position: absolute;
            width: max-content;
            display: flex;
            align-items: center;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 130%;
            gap: 0.31rem;

            @media (max-width: 768px) {
                font-size: 3.2rem;
                gap: 1rem;
            }

            &-circale {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 100%;
                transition-timing-function: ease-in;
                transition-duration: 0.7s;
                transition: all 2.3s;
                z-index: 2;
                background-color: rgba(#333, 1);
                flex-shrink: 0;

                @media (min-width: 769px) {
                    width: 0.375rem;
                    height: 0.375rem;
                    animation: ripple-black 0.9s infinite;
                }
            }

            &-1 {
                top: 16rem;
                right: 10.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 48rem;
                    right: 6.5rem;
                }
            }

            &-2 {
                top: 26.5rem;
                right: 15rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 36rem;
                    right: 9rem;
                    left: unset;
                }
            }

            &-3 {
                top: 22.5rem;
                left: 28.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 40rem;
                    left: 10.5rem;
                }
            }

            &-4 {
                width: 8rem;
                flex-direction: column;
                align-items: flex-start;
                gap: 3.34rem;
                top: 17.5rem;
                left: 34rem;

                &::after {
                    position: absolute;
                    content: '';
                    top: 0.1rem;
                    left: 0.15rem;
                    height: 3.34375rem;
                    width: 1px;
                    background-color: #000;
                }

                @media (max-width: 768px) {
                    flex-direction: row;
                    top: unset;
                    bottom: 36rem;
                    right: unset;
                    left: 11.5rem;
                    gap: 1.34rem;

                    &::after {
                        display: none;
                    }
                }
            }

            &-5 {
                width: 8rem;
                flex-direction: column-reverse;
                align-items: flex-start;
                gap: 3.34rem;
                top: 29.2rem;
                left: 57.2rem;

                &::after {
                    position: absolute;
                    bottom: 0.1rem;
                    left: 0.15rem;
                    content: '';
                    height: 3.34375rem;
                    width: 1px;
                    background-color: #000;
                }

                @media (max-width: 768px) {
                    flex-direction: row;
                    top: unset;
                    bottom: 8rem;
                    left: 39rem;
                    gap: 1.34rem;

                    &::after {
                        display: none;
                    }
                }
            }
        }
    }

    &__new-ward {
        position: relative;
        border-radius: 19px;
        border: 1px solid var(--grey, #626261);
        width: 67.09rem;
        padding: 4.378rem 3.34rem 2.777rem 16rem;
        margin: 0 auto;
        display: flex;
        gap: 2rem;

        @media (max-width: 768px) {
            width: unset;
            margin: 0 9.5rem;
            padding: 21rem 3.76rem 7.47rem 3.76rem;
            flex-direction: column;
            align-items: center;
            margin-bottom: 6rem !important;
        }

        &-title {
            font-size: 1.527778rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.8rem;
                text-align: center;
                width: 54rem;
            }
        }

        &-descr {
            width: 33.278rem;
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 130%;
            flex-shrink: 0;

            @media (max-width: 768px) {
                width: unset;
                font-size: 4.53334rem;
                text-align: center;
            }
        }

        &-img {
            position: absolute;
            display: block;
            width: 22.375rem;
            height: auto;
            top: 4.5rem;
            left: -5rem;
            z-index: 1;

            @media (max-width: 768px) {
                width: 35rem;
                left: 23.5rem;
                top: -13.5rem;
            }
        }
    }

    .text-block__wrap a {
        text-decoration: 0.5px underline;
        text-decoration-skip-ink: none;
        text-underline-offset: 0.2rem;
    }
}
</style>
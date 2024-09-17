<template>
    <div class="kola">
        <BaseHero title="Кольский дивизион. Природные обитатели Кольского Заполярья" :descr="heroDescr"
            :img="'img/hero5.jpg'" :imgMobile="'img/hero5-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" title="Особенности дивизиона" :tooltip="true">
                    <p class="mb-10">
                        Кольский
                        <BaseTooltip :word="'дивизион'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или&nbsp;объекты с&nbsp;общей
                            задачей,
                            например, перевозкой сырья или&nbsp;энергоснабжением. Деление на&nbsp;дивизионы
                            (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной
                            организацией.
                        </BaseTooltip>
                        &laquo;Норникеля&raquo; составляют объекты Кольской горно-металлургической
                        компании (ГМК), созданные на&nbsp;базе старейших предприятий по&nbsp;добыче и&nbsp;переработке
                        никеля&nbsp;&mdash; комбинатов &laquo;Североникель&raquo; и&nbsp;&laquo;Печенганикель&raquo;.
                        Подразделения ГМК территориально удалены друг от&nbsp;друга и&nbsp;образуют два
                        кластера&nbsp;&mdash; &laquo;Мончегорский&raquo; и&nbsp;&laquo;Никель&nbsp;&mdash;
                        Заполярный&raquo;.
                    </p>
                    <p>
                        Сегодня компания &laquo;Норникель&raquo; много внимания уделяет модернизации предприятий
                        Кольского
                        дивизиона, стремясь сократить промышленный след и&nbsp;бережно относясь к&nbsp;окружающей среде.
                    </p>
                </BaseTextBlock>

                <BigMap :circales="circales" img="img/kola-big-map" imgMobile="img/kola-big-map-mobile">
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                            </svg>

                            <div class="circale-block__text">Промышленные объекты</div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div class="circale-block__text">Особо охраняемые природные территории</div>
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
                    <div class="scroll-bg bg-4">
                    </div>
                    <div class="scroll-wrap">
                        <div class="scroll-card card-1 text-block__descr">
                            <p>Промышленная площадка «Никель — Заполярный»</p>
                            <p>
                                Отвечает за&nbsp;разработку месторождений, расположенных между посёлком Никель
                                и&nbsp;городом Заполярный на&nbsp;западе Мурманской области. Здесь компания добывает
                                руду,
                                содержащую никель, медь и&nbsp;другие полезные компоненты, а&nbsp;затем обогащает
                                её&nbsp;на&nbsp;фабрике Заполярного, получая медно-никелевый концентрат.
                            </p>
                            <BaseDropdownInfo title="Объекты" :color="'#D38235'"
                                :text="'<ul><li>Рудник Северный</li><li>Рудник Каула-Котсельваара</li><li>Обогатительная фабрика г. Заполярный</li></ul>'" />
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                            <p>Заповедник «Пасвик»</p>
                            <p>
                                Призван сохранить северные сосновые леса, обширные болотные угодья мирового значения
                                и&nbsp;фауны водоплавающих птиц Мурманской области. Территория заповедника находится
                                в&nbsp;юго-западном направлении от&nbsp;промышленной площадки &laquo;Никель&nbsp;&mdash;
                                Заполярный&raquo;.
                            </p>
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                            <p>Промышленная площадка «Мончегорск»</p>
                            <p>Расположена юго-западнее жилой застройки города Мончегорск, в&nbsp;центральной части
                                региона.
                                Объединяет металлургические объекты Кольской ГМК, где производят катодные никель
                                и&nbsp;медь, карбонильный никель, электролитный кобальт, концентраты драгоценных
                                металлов,
                                меди и&nbsp;никеля, а&nbsp;также серную кислоту.
                            </p>
                            <BaseDropdownInfo title="Объекты" :color="'#D38235'"
                                :text="'<ul><li>Рафинировочный цех</li><li>Химико-металлургический цех</li><li>Цеха электролиза никеля №1 и №2</li></ul>'" />
                        </div>
                        <div class="scroll-card card-4 text-block__descr">
                            <p>Лапландский заповедник</p>
                            <p>Ближайший и&nbsp;важнейший для&nbsp;восстановления и&nbsp;сохранения разнообразия видов
                                в&nbsp;районе воздействия промышленных объектов Мончегорской площадки. Заповедник был
                                создан
                                для&nbsp;охраны западной популяции горно-тундровой формы дикого северного оленя
                                и&nbsp;отдельных
                                уникальных для&nbsp;Кольского полуострова экосистем. Часть
                                <BaseTooltip :word="'буферной зоны'">
                                    Периметры безопасности, которые защищают и&nbsp;поддерживают жизнедеятельность
                                    охраняемых растений, растительной группы или&nbsp;целой природной территории.
                                    В&nbsp;буферных
                                    зонах нельзя вырубать деревья, охотиться и&nbsp;передвигаться на&nbsp;автомобиле.
                                </BaseTooltip> заповедника попадает
                                в&nbsp;пояса умеренного и&nbsp;незначительного воздействия предприятий
                                &laquo;Норникеля&raquo;.
                            </p>
                        </div>
                    </div>
                </section>

                <BaseTextBlock class="text mb-40" title="Модернизация производства">
                    <p class="mb-10">
                        Сегодня &laquo;Норникель&raquo; активно модернизирует действующие предприятия Кольской ГМК
                        и&nbsp;закрывает устаревшие, опираясь на&nbsp;современное видение экологичного производства.
                    </p>
                    <p class="mb-10">
                        <b>2020 год</b>&nbsp;&mdash; Компания закрыла одно из&nbsp;самых старых производств
                        в&nbsp;регионе&nbsp;&mdash; плавильный цех в&nbsp;посёлке Никель.
                    </p>
                    <p>
                        <b>2021 год</b>&nbsp;&mdash; В&nbsp;Мончегорске была остановлена рафинировочная медная площадка,
                        производящая медь по&nbsp;устаревшей технологии.
                    </p>
                </BaseTextBlock>

                <div class="modernization">
                    <div class="modernization__item">
                        <div class="modernization__item-top">2015</div>
                        <div class="modernization__item-mid">
                            <div class="modernization__mid-text_1">
                                2020
                            </div>
                            <div class="modernization__mid-text_2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28"
                                    fill="none">
                                    <path
                                        d="M9 28L17.6603 13L0.339745 13L9 28ZM7.5 -6.55666e-08L7.5 14.5L10.5 14.5L10.5 6.55666e-08L7.5 -6.55666e-08Z"
                                        fill="#333333" />
                                </svg>
                                71<span>%</span>
                            </div>
                            <div class="modernization__mid-bg"></div>
                        </div>
                        <div class="modernization__item-bottom">
                            Объём выбросов SO₂ в&nbsp;районе&nbsp;п.&nbsp;Никель&nbsp;и&nbsp;г.&nbsp;Заполярный
                        </div>
                    </div>
                    <div class="modernization__item">
                        <div class="modernization__item-top">2015</div>
                        <div class="modernization__item-mid">
                            <div class="modernization__mid-text_1">
                                2021
                            </div>
                            <div class="modernization__mid-text_2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28"
                                    fill="none">
                                    <path
                                        d="M9 28L17.6603 13L0.339745 13L9 28ZM7.5 -6.55666e-08L7.5 14.5L10.5 14.5L10.5 6.55666e-08L7.5 -6.55666e-08Z"
                                        fill="#333333" />
                                </svg>
                                90<span>%</span>
                            </div>
                            <div class="modernization__mid-bg"></div>
                        </div>
                        <div class="modernization__item-bottom">
                            Общий объём выбросов SO₂ предприятиями Кольского&nbsp;дивизиона
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="text text-w mb-40"
                    :title="'Зона воздействия предприятий Кольского&nbsp;дивизиона'">
                    <p class="mb-10">
                        Опираясь на&nbsp;состояние экосистем в&nbsp;регионе, участники Большой Научной экспедиции
                        определили предполагаемый радиус общего
                        <BaseTooltip :word="'кумулятивного'">
                            Под кумулятивным понимается суммарное воздействие всех антропогенных объектов: города,
                            Кольской и&nbsp;других ГМК, а&nbsp;также расположенных в&nbsp;исследуемой зоне предприятий.
                            Достоверно отделить одно влияние от&nbsp;другого по&nbsp;реакции природных организмов
                            невозможно.
                        </BaseTooltip>
                        воздействия на&nbsp;наземные
                        экосистемы&nbsp;&mdash; 15&ndash;20&nbsp;км от&nbsp;объектов промышленных площадок
                        &laquo;Мончегорск&raquo; и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;. Для водных
                        экосистем граница отнесена ещё дальше&nbsp;&mdash; 20&ndash;30&nbsp;км. В&nbsp;исследованиях
                        2022 года оценивалась суммарная зона воздействия промплощадок &laquo;Кольской ГМК&raquo;
                        и&nbsp;других объектов, оказывающих антропогенное влияние.
                    </p>
                    <p class="mb-10">
                        Трансформация природных сообществ напрямую зависит от&nbsp;интенсивности воздействия. Влияние
                        предприятий имеет выраженный характер только в&nbsp;зоне интенсивного воздействия. Как правило,
                        даже эти изменения составляют в&nbsp;среднем около&nbsp;20% условных потерь и&nbsp;постепенно
                        сводятся к&nbsp;нулю. По&nbsp;данным исследований, наибольшие изменения в&nbsp;наземных
                        экосистемах наблюдаются в&nbsp;пределах 1&ndash;4&nbsp;км от&nbsp;комбинатов, в&nbsp;водных
                        экосистемах&nbsp;&mdash; в&nbsp;2&ndash;4&nbsp;км.
                    </p>
                    <p class="mb-10">
                        Зона умеренного воздействия протянулась на&nbsp;4&ndash;12&nbsp;км от&nbsp;промплощадок,
                        а&nbsp;незначительного&nbsp;&mdash; на&nbsp;12&ndash;20&nbsp;км. Протяжённее радиус воздействия
                        только на&nbsp;водные экосистемы в&nbsp;районе площадки &laquo;Мончегорск&raquo;: 25 (30) км.
                    </p>
                    <p class="mb-10">
                        Всего за&nbsp;три года на&nbsp;территории заповедника &laquo;Пасвик&raquo; наблюдается активное
                        восстановление, связанное с&nbsp;сокращением длившегося 70&nbsp;лет негативного воздействия.
                    </p>
                    <p class="mb-10">
                        Площадки исторического воздействия были включены во&nbsp;внимание при проведении исследований
                        в&nbsp;2022 и&nbsp;2023&nbsp;годах, как площадки, на&nbsp;которых рекомендуется организовать
                        режим постоянного мониторинга.
                    </p>
                    <p>
                        Также в&nbsp;2020 году был закрыт плавильный цех в&nbsp;Никеле, оказывающий негативное
                        воздействие на&nbsp;территории &laquo;Пасвика&raquo;. За&nbsp;пределами 20&ndash;30&nbsp;км
                        состояние среды исследователи расценивают как фоновое.
                    </p>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <div class="transbaikal-radius__wrap">
                        <div class="transbaikal-radius__wrap-top mb-10">> 20 км*</div>
                        <div class="transbaikal-radius__wrap-mid mb-10">Фоновая зона</div>
                        <div class="transbaikal-radius__wrap-bottom">
                            За пределами этого радиуса показатели биоразнообразия приняты за
                            <BaseTooltip :word="'фоновые'">
                                На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия
                                предприятий,
                                экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние
                                биоразнообразия на&nbsp;фоновых территориях принимают за&nbsp;эталонное
                                и&nbsp;используют
                                эти данные для&nbsp;наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                            </BaseTooltip>
                        </div>
                    </div>
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/kola-radius-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/kola-radius-mobile.png">
                        <source type="image/webp" srcset="img/kola-radius.webp">
                        <img loading="lazy" src="img/kola-radius.png" alt="">
                    </picture>
                    <div class="transbaikal-radius__descr">
                        <span>*</span>
                        <span>
                            Для водных экосистем в&nbsp;районе площадки &laquo;Мончегорск&raquo; зона незначительного
                            воздействия составляет&nbsp;25 (30) км.
                        </span>
                    </div>
                </div>

                <div class="transbaikal-factors mb-60">
                    <div class="transbaikal-factors__left">
                        <div class="transbaikal-factors__descr">
                            К&nbsp;основным факторам негативного воздействия объектов Кольского дивизиона учёные относят
                        </div>
                        <img loading="lazy" class="transbaikal-factors__img-grass" src="img/grass.png" alt="">
                    </div>
                    <ul class="transbaikal-factors__items">
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Отчуждение территорий</div>
                            <div class="transbaikal-factors__item-text">
                                Полная или глубокая трансформация ландшафта, в&nbsp;том числе с&nbsp;образованием
                                техногенной пустоши.
                            </div>
                        </li>
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Выбросы в атмосферу</div>
                            <div class="transbaikal-factors__item-text">
                                В&nbsp;поясе значительного воздействия проявляются в&nbsp;виде следов химических ожогов
                                на&nbsp;стволах деревьев и&nbsp;кустарников и&nbsp;на&nbsp;мохово-лишайниковом покрове.
                            </div>
                        </li>
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Сточные воды</div>
                            <div class="transbaikal-factors__item-text">
                                Выражается в&nbsp;поступлении с&nbsp;площади водосбора из&nbsp;точечных
                                и&nbsp;рассеянных источников различных токсических веществ и&nbsp;органики.
                            </div>
                        </li>
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Пирогенное воздействие</div>
                            <div class="transbaikal-factors__item-text">
                                Искусственные пожары можно отнести скорее к&nbsp;косвенному воздействию, так как
                                в&nbsp;пределах исследуемой зоны они не&nbsp;применяются в&nbsp;технологическом цикле.
                            </div>
                        </li>
                    </ul>
                </div>

                <BaseSidebar class="mb-140">
                    Компания &laquo;Норникель&raquo; ведёт большую работу по&nbsp;нейтрализации факторов негативного
                    воздействия. Экологическая стратегия компании ежегодно актуализируется, узнать подробности можно
                    на&nbsp;официальном сайте &laquo;Норникеля&raquo;.
                </BaseSidebar>

                <BaseTextBlock class="text mb-100" title="Почвенный покров" :tooltip="true">
                    <p class="mb-10">
                        Высокое содержание тяжёлых металлов в&nbsp;почве в&nbsp;зоне Кольского дивизиона во&nbsp;многом
                        связано с&nbsp;природной аномалией. Научная экспедиция не&nbsp;выявила негативного влияния стока
                        поверхностных вод с&nbsp;хвостохранилища в&nbsp;городе Заполярный на&nbsp;прилегающие почвы
                        и&nbsp;содержание в&nbsp;них мышьяка и&nbsp;тяжёлых металлов.
                    </p>
                    <p>
                        Учёные рекомендуют улучшить качество земель с&nbsp;накопленным техногенным воздействием путём
                        их&nbsp;ремедиации, то&nbsp;есть очистки от&nbsp;высокой концентрации загрязнений, опасных для
                        местной флоры и&nbsp;фауны.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="text mb-100" title="ИПСЭ как повод увеличить усилия" :tooltip="true">
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
                        По&nbsp;результатам проведённого в&nbsp;2022&ndash;2023 годах исследования, в&nbsp;районе
                        объектов Кольского дивизиона значение ИПСЭ составляет 0,92 для наземных экосистем и&nbsp;0,84
                        для водных. Близость показателя к&nbsp;единице показывает, что условные потери биоразнообразия
                        в&nbsp;зоне воздействия минимальны.
                    </p>
                </BaseTextBlock>

                <div v-if="!isMobile">
                    <picture>
                        <source type="image/webp" srcset="img/transbaikal-factors.webp">
                        <img loading="lazy" src="img/transbaikal-factors.png" alt="">
                    </picture>
                </div>

                <div v-else>
                    <picture style="overflow: hidden; width: 100%; display: block;">
                        <source type="image/webp" srcset="img/terrestrial-ecosystem.webp">
                        <img loading="lazy" style="width: 155%; object-position: -15rem;" src="img/terrestrial-ecosystem.png" alt="">
                    </picture>

                    <picture>
                        <source type="image/webp" srcset="img/aquatic-ecosystems.webp">
                        <img loading="lazy" src="img/aquatic-ecosystems.png" alt="">
                    </picture>
                </div>

                <BaseSidebar>
                    &laquo;Норникель&raquo; намерен регулярно проводить замеры ИПСЭ, чтобы отслеживать эффективность
                    работы <br />по&nbsp;сохранению экосистем.
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60 mb-60-m" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает в&nbsp;Кольском&nbsp;Заполярье
                    </div>
                    <div class="section-orange__descr">
                        В&nbsp;зоне, прилегающей к&nbsp;промышленным площадкам &laquo;Мончегорск&raquo;
                        и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;, участники Большой Научной экспедиции
                        обнаружили несколько
                        <BaseTooltip :word="'охраняемых видов'">
                            Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается
                            или&nbsp;уже
                            сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых
                            и&nbsp;заносят
                            в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или&nbsp;региональные. Охранный статус
                            запрещает
                            охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений
                            и&nbsp;грибов
                            ограничены строительство и&nbsp;другая хозяйственная деятельность.
                        </BaseTooltip>
                        растений и&nbsp;птиц и&nbsp;выделили участки, критически
                        важные для жизни и&nbsp;благополучия местных обитателей. Для дальнейших наблюдений
                        за&nbsp;состоянием биоразнообразия также отобрали
                        <BaseTooltip :word="'индикаторные виды'">
                            Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для&nbsp;региона
                            организмов,
                            наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                            в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что
                            в&nbsp;экосистеме
                            что-то пошло не&nbsp;так.
                        </BaseTooltip> растений и&nbsp;животных.
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <div class="flora-and-fauna__wrap">
                        <BaseTextBlock title="Флора">
                            <p class="mb-10">
                                В&nbsp;районе Заполярного и&nbsp;посёлка Никель преобладают лесотундровые невысокие
                                древесные растения и&nbsp;кустарники, участки
                                <BaseTooltip :word="'криволесья'">
                                    В&nbsp;криволесьях растут деревья и&nbsp;кустарники с&nbsp;изогнутыми стволами
                                    и&nbsp;ветвями. Причудливые формы им&nbsp;придают сильные ветры, снег и&nbsp;сила
                                    тяжести.
                                </BaseTooltip> чередуются с&nbsp;заболоченными
                                территориями. Повсюду встречаются мхи и&nbsp;лишайники, а&nbsp;также северные ягоды:
                                черника, морошка, брусника и&nbsp;клюква.
                            </p>
                            <p>
                                Предприятия вблизи Мончегорска расположены в&nbsp;зоне северной тайги, леса здесь
                                в&nbsp;основном редкостойные, разделённые озёрами и&nbsp;болотами. Гористые участки
                                добавляют к&nbsp;местной растительности тундровые виды кустарников и&nbsp;трав.
                            </p>
                        </BaseTextBlock>
                        <BaseTextBlock title="Фауна">
                            <p class="mb-10">

                                Животный мир в&nbsp;окрестностях промплощадок &laquo;Мончегорск&raquo;
                                и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;, как и&nbsp;на&nbsp;всей территории
                                Крайнего Севера, не&nbsp;слишком разнообразен. Видовым богатством отличаются лишь птицы,
                                причём в&nbsp;зоне интенсивного воздействия, рядом с&nbsp;постройками, этот показатель
                                выше
                                из-за
                                <BaseTooltip :word="'синантропных'">
                                    Синантропные виды насекомых, птиц, животных и&nbsp;растений научились жить рядом
                                    с&nbsp;людьми. Они используют жилые постройки в&nbsp;качестве мест обитания
                                    и&nbsp;могут
                                    питаться пищевыми запасами людей или&nbsp;отходами.
                                </BaseTooltip> и&nbsp;водоплавающих видов. Близость лесов привлекает сюда белую
                                куропатку и&nbsp;глухаря.
                            </p>
                            <p>
                                Озёра и&nbsp;реки дивизиона богаты разными видами рыб: сиг, хариус, радужная форель,
                                голец,
                                в&nbsp;больших количествах водятся окунь и&nbsp;щука.
                            </p>

                        </BaseTextBlock>
                    </div>
                    <div class="wrap-numbers">
                        <BaseNumberBlock class="" :textTop="'82 вида'" textBottom="сосудистых растений" />
                        <BaseNumberBlock class="" :textTop="'77 видов'" textBottom="птиц" />
                        <BaseNumberBlock class="" :textTop="'14&nbsp;видов'" textBottom="млекопитающих" />
                        <BaseNumberBlock class="" :textTop="'13&nbsp;видов'" textBottom="рыб" />
                    </div>
                </div>

                <BaseSidebar class="mb-100">
                    Учёным не&nbsp;удалось выявить связь между обилием и&nbsp;видовым богатством млекопитающих
                    и&nbsp;степенью негативного воздействия.
                </BaseSidebar>

                <BaseTextBlock class="mb-140 kola__shrew" :title="'Биоиндикаторы состояния экосистем'">
                    <span>
                        <p class="mb-10">
                            Ключевым биоиндикатором для эффективной оценки состояния нарушенных экосистем являются
                            почвенные микроартроподы&nbsp;&mdash; Орибатиды. Как правило, плотность их&nbsp;населения
                            увеличивается от&nbsp;пояса значительного воздействия к&nbsp;фону. Существенные отличия
                            в&nbsp;разных поясах выявлены для микроартропод в&nbsp;целом и&nbsp;для отдельных групп:
                            орибатиды, коллемболы.
                        </p>
                        <p class="mb-10">
                            Среди млекопитающих индикатором значительного воздействия стала бурозубка. Потенциально
                            индикаторные&nbsp;&mdash; массовые виды птиц, например, юрок, пеночка-весничка
                            и&nbsp;чечётка.
                        </p>
                        <p>
                            Среди водных организмов учёные также выделили потенциальные индикаторные группы и&nbsp;виды:
                            фитопланктон, зоопланктон, зообентос и&nbsp;ихтиофауну, в&nbsp;том числе гольца
                            и&nbsp;сига. По&nbsp;ним требуются дальнейшие исследования для подтверждения и&nbsp;более
                            точной оценки их&nbsp;индикаторных возможностей.
                        </p>
                    </span>
                    <div class="position-info">
                        <picture>
                            <source type="image/webp" srcset="img/shrew.webp">
                            <img loading="lazy" src="img/shrew.png" alt="">
                        </picture>
                        
                        <div class="position-info__descr">
                            Среди млекопитающих индикатором значительного воздействия стала бурозубка.
                        </div>

                        <BaseDropdownInfo title="Бурозубка" :pulsation-color="'Green-Mist'"
                        :text="'Индикатор значительного воздействия — отсутствие в&nbsp;отловах бурозубок'" />
                    </div>
                </BaseTextBlock>

                <div class="legend">
                    <BaseCollageInfo text="Охраняемые виды" :color="'#71464E'" />
                    <BaseCollageInfo text="Индикаторные виды" />
                </div>
                <div class="collage mb-100">
                    <!-- <video v-if="!isMobile" autoplay loop muted playsinline class="collage__video" preload="auto">
                        <source src="video/kola.mp4" type="video/mp4">
                    </video> -->
                    <div class="collage__golden-eagle"></div>
                    <div class="collage__bluethroat"></div>
                    <BaseDropdownInfo class="golden-eagle" title="Беркут" :is-modal="true" :color="'#71464E'"
                        :pulsation-color="'finn'"
                        :text="'Самый крупный из&nbsp;орлов: размах крыльев достигает 230&nbsp;см при длине тела до&nbsp;93&nbsp;см. Беркуты чувствительны к&nbsp;беспокойству со&nbsp;стороны человека, чаще обитают в&nbsp;горах и&nbsp;реже на&nbsp;равнинных ландшафтах. За&nbsp;последние столетия вид исчез из&nbsp;многих районов из-за массового истребления, пестицидов, увеличения числа городов и&nbsp;изъятия земель под&nbsp;хозяйственные нужды'" />

                    <BaseCollageInfo class="belobrovik" title="Белобровик"
                        :text="'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища'" />
                    <BaseDropdownInfo class="belobrovik_mobile" title="Белобровик" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища'" />

                    <BaseCollageInfo class="tap-dancing" title="Чечётка"
                        :text="'Песня чечётки напоминает перестук каблуков в&nbsp;танце'" />

                    <BaseCollageInfo class="bluethroat" title="Варакушка"
                        :text="'Прекрасный имитатор: в&nbsp;пении заимствует звуки у&nbsp;других птиц'" />

                    <BaseCollageInfo class="redstart-coot" title="Горихвостка-лысушка"
                        :text="'Красный хвост самцов, слегка подёргиваясь, напоминает горящее пламя&nbsp;&mdash; &laquo;горихвост&raquo;'" />

                    <BaseCollageInfo class="yurok" title="Юрок" />
                    <BaseCollageInfo class="warbler" title="Пеночка-весничка" />

                    <BaseDropdownInfo class="ground-beetles" title="Жужелицы" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'В&nbsp;Кольском дивизионе исследователи обнаружили 17&nbsp;видов жужелиц, из&nbsp;них два были назначены индикаторами: Carabus glabratus и&nbsp;Amara brunnea.<br/>Carabus glabratus отрицательно реагирует на&nbsp;промышленное воздействие: чем оно интенсивнее, тем меньше плотность вида на&nbsp;территории.<br/>Вид Carabus glabratus отмечен только на&nbsp;фоновых полигонах. В&nbsp;свою очередь, численность Amara brunnea увеличивается в&nbsp;районах с&nbsp;интенсивным воздействием и&nbsp;постепенно снижается ближе к&nbsp;фоновым территориям'" />

                    <BaseDropdownInfo class="spiders" title="Пауки" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="'Наименьшее видовое разнообразие пауков учёные отметили в&nbsp;зонах интенсивного воздействия дивизиона. Индикаторами среди обнаруженных видов стали три бродячих паука-охотника: Паук-волк, Паук-гназофида и&nbsp;Паук-мешкопряд. Пауки-волки составляют основу населения, они не&nbsp;строят ловчих сетей, быстро передвигаются и&nbsp;активно заселяют новые участки'" />

                    <BaseDropdownInfo class="ants" title="Муравьи" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="'Из&nbsp;12&nbsp;видов муравьёв, обнаруженных участниками Экспедиции в&nbsp;Кольском дивизионе, четыре представителя рода Formica стали индикаторами: Северный чёрный муравей, Красноголовый муравей, Волосистый лесной муравей и&nbsp;Кровавый муравей-рабовладелец. Распределение и&nbsp;численность этих муравьёв помогли учёным подтвердить предположения о&nbsp;поясах воздействия промышленных объектов на&nbsp;природу дивизиона'" />

                    <BaseDropdownInfo class="shrew" title="Бурозубка" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="'Индикатор значительного воздействия&nbsp;&mdash; отсутствие в&nbsp;отловах бурозубок'" />
                    <BaseCollageInfo class="vole" title="Красно-серая полёвка" />

                    <BaseCollageInfo class="kokushnik" title="Кокушник комарниковый" :width="'10rem'"
                        :color="'#71464E'" />

                    <BaseDropdownInfo class="fingerroot" title="Пальчатокоренник пятнистый" :is-modal="true"
                        :width="'10rem'" :color="'#71464E'" :pulsation-color="'finn'"
                        :text="'Пятнышки на&nbsp;листьях этого северного представителя орхидей в&nbsp;народе считались следами слёз, которые обронила кукушка от&nbsp;одиночества, поэтому ещё одно название этого вида&nbsp;&mdash; &laquo;кукушкины слёзки&raquo;. Развитие семян пальчатокоренника возможно в&nbsp;симбиозе с&nbsp;определёнными видами грибов, а&nbsp;зацветает растение на&nbsp;6&ndash;8 год после прорастания'" />

                    <BaseCollageInfo class="ledum" title="Багульник болотный" :width="'10rem'" />

                    <div class="background background-1"></div>
                    <BaseCollageInfo class="swan" title="Лебедь-кликун" :color="'#71464E'"
                        :text="'Получил название за&nbsp;громкие, трубные крики, которые часто издает в&nbsp;полёте. Способен развить скорость до&nbsp;80&nbsp;км/ч. Является Национальным символом Финляндии'" />

                    <BaseDropdownInfo class="broody" title="Клуша" :is-modal="true" :color="'#71464E'"
                        :pulsation-color="'finn'"
                        :text="'Представители этого вида чаек были встречены участниками Большой Научной экспедиции в&nbsp;зонах интенсивного воздействия предприятий Мончегорска и&nbsp;Мурманска. Кроме крупных водоёмов, птиц привлекают сюда пищевые отходы на&nbsp;свалках. На&nbsp;численность вида негативно влияет заселение мест обитания людьми и&nbsp;загрязнение воздуха промышленными выбросами'" />

                    <div class="background background-2"></div>

                    <BaseDropdownInfo class="zooplankton" title="Зоопланктон" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'В&nbsp;водоёмах пояса интенсивного воздействия размножается коловратка Asplanchna priodonta, а&nbsp;в&nbsp;пробах из&nbsp;зоны незначительного воздействия и&nbsp;на&nbsp;фоновых территориях исследователи обнаружили ветвистоусого рачка Holopedium gibberum'" />

                    <div class="background background-3"></div>
                    <BaseDropdownInfo class="phytoplankton" title="Фитопланктон" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Зелёные водоросли Scenedesmus quadricauda встречаются только в&nbsp;пробах из&nbsp;зоны интенсивного воздействия Кольского дивизиона, а&nbsp;цианобактерия Oscillatoria amoena обитает исключительно на&nbsp;территории фона. Всего учёные зафиксировали 169 видов фитопланктона'" />

                    <div class="background background-4"></div>
                    <BaseCollageInfo class="tubifex" title="Трубочник обыкновенный"
                        :text="'Общеизвестный индикатор органического загрязнения водоёмов'" />

                    <div class="background background-5"></div>
                    <BaseDropdownInfo class="loach" title="Арктический голец" :is-modal="true"
                        :pulsation-color="'Green-Mist'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />

                    <div class="background background-6"></div>
                    <BaseCollageInfo class="grayling" title="Европейский хариус" :color="'#71464E'"
                        :text="'Вес рыбы может достигать 6,7&nbsp;кг'" />

                    <div class="collage__swan"></div>
                    <div class="collage__grayling"></div>
                </div>
                <BaseTextBlock class="mb-100">
                    <p class="mb-10">
                        Заповедники Лапландский и&nbsp;&laquo;Пасвик&raquo;, по&nbsp;мнению специалистов РАН, являются
                        местами обитания, критически важными для природных сообществ дивизиона. На&nbsp;заповедных
                        территориях обнаружены охраняемые и&nbsp;
                        <BaseTooltip :word="'эндемичные виды'">
                            Вид животного или&nbsp;растения, который встречается на&nbsp;какой-либо территории
                            и&nbsp;больше
                            нигде. Из-за
                            того, что их&nbsp;ареал обитания ограничен, эндемиков нередко заносят в&nbsp;Красные книги
                            как
                            редкие или&nbsp;исчезающие виды.
                        </BaseTooltip>, найдены уникальные экологические
                        системы.
                    </p>
                    <p class="mb-10">
                        Участки заповедников, оказавшиеся в&nbsp;поясе промышленного воздействия, нуждаются
                        в&nbsp;постоянном мониторинге. Особое внимание компания уже уделяет местам, попавшим в&nbsp;зону
                        воздействия закрытого плавильного цеха в&nbsp;посёлке Никель.
                    </p>
                    <p>
                        &laquo;Норникель&raquo; регулярно оказывает финансовую помощь заповедникам и&nbsp;спонсирует
                        программы по&nbsp;изучению и&nbsp;восстановлению видов.
                    </p>
                </BaseTextBlock>

                <div class="kola__new-ward mb-40">
                    <div class="kola__new-ward-title">
                        Спасение кита Станислава
                    </div>
                    <div class="kola__new-ward-descr">
                        В&nbsp;июне 2024 года в&nbsp;Териберской бухте Баренцева моря краснокнижный горбатый кит
                        запутался в&nbsp;рыболовных сетях. Редкое животное могло погибнуть, если&nbsp;бы
                        не&nbsp;слаженная работа спасательного отряда &laquo;Друзья океана&raquo; при поддержке
                        &laquo;Норникеля&raquo;. Несмотря на&nbsp;сложное запутывание, тяжёлые погодные условия
                        и&nbsp;хитрость и&nbsp;ловкость Станислава, спасателям за&nbsp;несколько дней удалось освободить
                        кита.
                    </div>
                    <picture class="kola__new-ward-img">
                        <img loading="lazy" src="img/whale.png" alt="">
                    </picture>

                    <picture class="kola__new-ward-bg">
                        <source type="image/webp" srcset="img/bg/blue.webp">
                        <img loading="lazy" src="img/bg/blue.png" alt="">
                    </picture>
                </div>

                <div class="kola__button mb-60">
                    <a href="https://www.youtube.com/watch?v=EmbC8ODraFo" target="_blank">
                        Смотреть видео
                    </a>
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
                                1 – Клуша
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Беркут
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Лебедь-кликун
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Европейский хариус
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Пальчатокоренник пятнистый
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Кокушник комарниковый
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isMobile" class="habitat-map__title">Карта обитания охраняемых видов</div>
                        <div v-if="isMobile" class="habitat-map__title">Зона воздействия предприятий и виды</div>
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
                                    <li>Клуша</li>
                                    <li>Беркут</li>
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
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
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
                                    <li>Беркут</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Пальчатокоренник пятнистый</li>
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
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
                                </ul>
                            </div>

                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }"
                                @click="idMap = 1">
                                Мончегорск
                            </div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }"
                                @click="idMap = 2">
                                Никель — Заполярный
                            </div>
                        </div>
                    </div>

                    <picture v-show="idMap === 1">
                        <source media="(max-width: 768px)" type="image/webp"
                            srcset="img/habitat-map-kola-1-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-1.webp">
                        <img loading="lazy" src="img/habitat-map-kola-1.png" alt="">
                    </picture>

                    <picture v-show="idMap === 2">
                        <source media="(max-width: 768px)" type="image/webp"
                            srcset="img/habitat-map-kola-2-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-2.webp">
                        <img loading="lazy" src="img/habitat-map-kola-2.png" alt="">
                    </picture>

                    <div v-show="idMap === 1">
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            <span>Мончегорск</span>
                        </div>
                        <div class="habitat-map__river">
                            Имандра
                        </div>
                    </div>
                    <div v-show="idMap === 2">
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span>Никель</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            <span>Заполярный</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
                            <span>Мурманск</span>
                        </div>
                        <div class="habitat-map__name-sea">
                            Баренцево <br />море
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="mb-40">
                    Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум
                    или&nbsp;другие факторы воздействия. Ведь для&nbsp;их&nbsp;выживания главное&nbsp;&mdash; наличие
                    корма
                    и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Минимизировать накопленный за&nbsp;многие десятилетия техногенный след, восстановить
                        и&nbsp;сохранить экосистемы Кольского Заполярья&nbsp;&mdash; важные пункты экологической
                        программы
                        &laquo;Норникеля&raquo; в&nbsp;Кольском&nbsp;дивизионе.
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import BigMap from '@/components/BigMap.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import MainSection from '@/layout/MainSection'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import BaseNumberBlock from '@/components/BaseNumberBlock'

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
        BaseDropdownInfo,
        BaseCollageInfo,
        BaseNumberBlock
    },
    data() {
        return {
            map1: 1,
            map2: 2,
            idMap: 1,
            isMobile: (window.innerWidth <= 768),
            circales: [
                {
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'green',
                    number: '2'
                },
                {
                    color: 'purple',
                    number: '3'
                },
                {
                    color: 'purple',
                    number: '4'
                },
            ],
            heroDescr: 'Растительный и&nbsp;животный мир рядом с&nbsp;промышленными площадками &laquo;Норникеля&raquo; в&nbsp;Мурманской области'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation()
            this.parallax()
        })
    },
    methods: {
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

                this.oneScrollTrigger = gsap.fromTo(elem,
                    {
                        y: 50,
                    },
                    {
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
                this.twoScrollTrigger = gsap.fromTo(elem,
                    {
                        y: 50,
                    },
                    {
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

            gsap.fromTo(".bg-1",
                { opacity: '1' },
                {
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

            gsap.fromTo(".bg-2",
                { opacity: '1' },
                {
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

            gsap.fromTo(".bg-3",
                { opacity: '1' },
                {
                    opacity: '0',
                    scrollTrigger: {
                        trigger: ".card-3",
                        start: 'top 0%',
                        end: 'bottom 50%',
                        endTrigger: '.card-4',
                        // markers: true,
                        scrub: true,
                    },

                });

            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".card-4",
                    start: () => "+=120%",
                    end: () => "+=" + (document.querySelector(".scroll-wrap").offsetHeight),
                    // markers: true,
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-bg" }
                },
            });
        },
        parallax() {
            if (window.innerWidth > 768) {
                gsap.fromTo(".collage__golden-eagle",
                    { y: 115 },
                    {
                        y: -15,
                        scrollTrigger: {
                            trigger: ".collage",
                            start: 'top 100%',
                            end: '10%',
                            // markers: true,
                            scrub: true
                        },

                    });

                gsap.fromTo(".collage__bluethroat",
                    { y: 55 },
                    {
                        y: -15,
                        scrollTrigger: {
                            trigger: ".collage",
                            start: '24% 100%',
                            end: '29%',
                            // markers: true,
                            scrub: true
                        },

                    });

                gsap.fromTo(".collage__swan",
                    { y: 30 },
                    {
                        y: -10,
                        scrollTrigger: {
                            trigger: ".collage",
                            start: '75% 100%',
                            end: 'bottom',
                            // markers: true,
                            scrub: true
                        },

                    });

                gsap.fromTo(".collage__grayling",
                    { y: 40 },
                    {
                        y: -10,
                        scrollTrigger: {
                            trigger: ".collage",
                            start: '90% 100%',
                            end: '100%',
                            // markers: true,
                            scrub: true
                        },

                    });
            }
        }
    }
}
</script>

<style lang="scss">
.kola {
    .text-w {
        width: 34.3rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .big-map {
        margin-bottom: 2.7778rem;

        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 21.3334rem;
            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 25.5rem;
                left: 46.5rem;
            }

            @media (max-width: 768px) {
                top: 78.5rem;
                left: 39rem;
            }

            &__2 {
                top: 14.2rem;
                left: 35.7rem;

                @media (max-width: 768px) {
                    top: 48.5rem;
                    left: 10.5rem;
                }
            }

            &__3 {
                top: 9rem;
                left: 39.7rem;

                @media (max-width: 768px) {
                    top: 31.5rem;
                    left: 23.5rem;
                }
            }

            &__4 {
                top: 28rem;
                left: 50.3rem;

                @media (max-width: 768px) {
                    top: 94.7rem;
                    left: 62rem;
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
    }

    .scroll {
        position: relative;
        width: 100%;

        .card-4 {
            position: relative;
        }

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            height: 100vh;
            background-position: bottom;
            background-size: 100%;
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
                    background-position: 0 500vh;
                    background-size: 100%;

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-1 {
                z-index: 4;
                background-image: url(../../public/img/pasvik-1.jpg);
            }

            &.bg-2 {
                z-index: 3;
                background-image: url(../../public/img/pasvik-2.jpg);
            }

            &.bg-3 {
                z-index: 2;
                background-image: url(../../public/img/pasvik-3.jpg);
            }

            &.bg-4 {
                z-index: 1;
                background-image: url(../../public/img/pasvik-4.jpg);
            }

            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/pasvik-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/pasvik-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/pasvik-3-mobile.jpg);
                }

                &.bg-4 {
                    background-image: url(../../public/img/pasvik-4-mobile.jpg);
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
            width: 38rem;
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

    .transbaikal-radius {
        position: relative;

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
                width: 22.875rem;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }
        }

        &__wrap {
            position: absolute;
            top: 3.54166rem;
            right: 10.2083rem;
            padding: 0.69445rem;
            width: 16rem;
            font-size: 1.04167rem;
            line-height: 130%;
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                font-size: 4rem;
                padding: 0;
                width: 56rem;
                align-items: center;
                text-align: center;
                right: 22rem;
            }

            &-top {
                font-weight: 600;
            }

            &-mid {
                font-weight: 400;
            }
        }

        .clue__hidden {
            left: -13rem;
            width: 38rem;

            @media (max-width: 768px) {
                left: 0;
                width: unset;
            }
        }
    }

    .transbaikal-factors {
        display: flex;
        gap: 1.75rem;
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

    .section-orange {
        margin-bottom: 0;

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

        .mb-60-m.mb-60 {
            @media (max-width: 768px) {
                margin-bottom: 10.6667rem;
            }
        }

        .number-block {
            position: static;
        }

        .sidebar__text {
            padding: 0;
        }
    }

    .flora-and-fauna {
        margin: 0 auto;
        width: 68.5rem;
        margin-bottom: 8.69rem;

        @media (max-width: 768px) {
            margin-bottom: 16rem;
            width: unset;
        }

        &__wrap {
            display: flex;
            gap: 4.44rem;

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
            width: 32.375rem;

            @media (max-width: 768px) {

                &:first-child,
                &:last-child {
                    width: 100%;
                }
            }
        }
    }

    .legend {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.28rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 9.6rem;
            gap: 2rem;
            margin-bottom: 8.8rem
        }

        .block-info {
            position: static;
        }
    }

    .collage {
        position: relative;
        height: 339rem;
        width: 100%;
        background-image: url(../../public/img/kola-collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 11;

        @supports (background-image: url(../../public/img/kola-collage.webp)) {
            background-image: url(../../public/img/kola-collage.webp);
        }

        @media (max-width: 768px) {
            height: 797rem;
            background-image: url(../../public/img/kola-collage-mobile.png);

            @supports (background-image: url(../../public/img/kola-collage-mobile.webp)) {
                background-image: url(../../public/img/kola-collage-mobile.webp);
            }
        }

        &__video {
            width: 100%;
            position: absolute;
            right: -0.1rem;
        }


        .dropdown-info__text {
            @media (max-width: 768px) {
                width: 93.34rem;
                padding: 10.6667rem 5.3333rem 3.7333rem 12.2666rem;
            }
        }

        .background {
            position: absolute;
            background-color: #fff;
            opacity: 0.8;
            mix-blend-mode: hard-light;
            filter: blur(30px);

            @media (max-width: 768px) {
                filter: blur(11px);
            }

            &-1 {
                bottom: 64rem;
                left: 8.5rem;
                width: 19.25rem;
                height: 8.417rem;
                transform: rotate(13.682deg);

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &-2 {
                bottom: 37rem;
                left: 31rem;
                width: 9rem;
                height: 5rem;

                @media (max-width: 768px) {
                    bottom: 101rem;
                    left: 8rem;
                    width: 45rem;
                    height: 14rem;
                }
            }

            &-3 {
                bottom: 33rem;
                right: 45rem;
                width: 10rem;
                height: 5rem;

                @media (max-width: 768px) {
                    bottom: 89rem;
                    right: 8rem;
                    width: 35rem;
                    height: 5rem;
                }
            }

            &-4 {
                bottom: 21rem;
                left: 18rem;
                width: 13rem;
                height: 7rem;

                @media (max-width: 768px) {
                    bottom: 74rem;
                    left: 33rem;
                    width: 30rem;
                    height: 6rem;
                }
            }

            &-5 {
                bottom: 12rem;
                left: 45rem;
                width: 13rem;
                height: 1rem;

                @media (max-width: 768px) {
                    bottom: 54rem;
                    left: 18rem;
                    width: 25rem;
                    height: 9rem;
                }
            }

            &-6 {
                bottom: 34rem;
                right: 15rem;
                width: 12rem;
                height: 4rem;

                @media (max-width: 768px) {
                    bottom: 52rem;
                    right: 10rem;
                    width: 31rem;
                    height: 14rem;
                }
            }
        }

        &__golden-eagle {
            position: absolute;
            width: 54rem;
            height: 44.66rem;
            top: 1rem;
            left: 45rem;
            background-image: url(../../public/img/collage-kola-golden-eagle.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-golden-eagle.webp)) {
                background-image: url(../../public/img/collage-kola-golden-eagle.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__bluethroat {
            position: absolute;
            width: 23.9rem;
            height: 20.7rem;
            top: 80.5rem;
            left: 62.5rem;
            background-image: url(../../public/img/collage-kola-bluethroat.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-bluethroat.webp)) {
                background-image: url(../../public/img/collage-kola-bluethroat.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__swan {
            position: absolute;
            width: 41.32rem;
            height: 30.2088rem;
            top: 261.5rem;
            left: 3.6rem;
            background-image: url(../../public/img/collage-kola-swan.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-swan.webp)) {
                background-image: url(../../public/img/collage-kola-swan.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__grayling {
            position: absolute;
            width: 34.7223rem;
            height: 25.4866rem;
            top: 299.7rem;
            left: 63.7rem;
            background-image: url(../../public/img/collage-kola-grayling.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-grayling.webp)) {
                background-image: url(../../public/img/collage-kola-grayling.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        .golden-eagle {
            position: absolute;
            top: 23rem;
            right: 35rem;

            @media (max-width: 768px) {
                top: 69rem;
                left: 7.5rem;
                right: 0;
            }
        }

        .belobrovik {
            width: 15rem;
            top: 47rem;
            right: 5.07rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                top: 111rem;
                right: 17rem;

                @media (max-width: 768px) {
                    display: block;
                }
            }
        }

        .tap-dancing {
            width: 13rem;
            top: 64.7rem;
            left: 52.8rem;

            @media (max-width: 768px) {
                width: 35rem;
                top: 135rem;
                left: 55rem;
            }
        }

        .bluethroat {
            width: 13rem;
            top: 82rem;
            left: 57rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 0rem;
                left: unset;
                right: 2rem;
            }
        }

        .redstart-coot {
            width: 13rem;
            top: 103.7rem;
            left: 46rem;

            @media (max-width: 768px) {
                width: 45rem;
                top: 185.2rem;
                left: 25rem;
            }
        }

        .yurok {
            width: 10rem;
            top: 117rem;
            right: 23.7rem;

            @media (max-width: 768px) {
                top: 231rem;
                right: 23.7rem;
            }
        }

        .warbler {
            width: 10rem;
            top: 115.5rem;
            left: 5.5rem;

            @media (max-width: 768px) {
                top: 94rem;
                left: 32rem;
            }
        }

        .ground-beetles {
            position: absolute;
            top: 135rem;
            left: 7.5rem;

            @media (max-width: 768px) {
                top: 220rem;
                left: 12rem;
            }
        }

        .spiders {
            position: absolute;
            top: 121.5rem;
            left: 33rem;

            @media (max-width: 768px) {
                top: unset;
                bottom: 237rem;
                left: unset;
                right: 26rem;
            }
        }

        .ants {
            position: absolute;
            top: 180rem;
            right: 28rem;

            @media (max-width: 768px) {
                top: unset;
                bottom: 206rem;
                right: 16rem;
            }
        }

        .shrew {
            position: absolute;
            bottom: 145rem;
            right: 11.5rem;

            @media (max-width: 768px) {
                bottom: 329rem;
                right: unset;
                left: 12rem;
            }
        }

        .kokushnik {
            bottom: 138rem;
            left: 17rem;

            @media (max-width: 768px) {
                bottom: 402rem;
                left: 3rem;
            }
        }

        .fingerroot {
            position: absolute;
            bottom: 134rem;
            right: 8rem;

            .dropdown-info__text {
                padding: 3.56rem 0.62rem 0.88rem 3.13rem;
            }

            @media (max-width: 768px) {
                bottom: 387rem;
                right: 26rem;
            }
        }

        .ledum {
            bottom: 91rem;
            left: 25rem;

            @media (max-width: 768px) {
                bottom: 235rem;
                left: 8rem;
            }
        }

        .vole {
            width: 10rem;
            bottom: 87rem;
            left: 5rem;

            @media (max-width: 768px) {
                width: 28rem;
                bottom: 285rem;
                left: 4rem;
            }
        }

        .swan {
            width: 17rem;
            bottom: 62rem;
            left: 10.5rem;

            @media (max-width: 768px) {
                width: 56rem;
                bottom: 167rem;
                left: 6rem;
            }
        }

        .broody {
            position: absolute;
            bottom: 62.7rem;
            right: 31.5rem;

            @media (max-width: 768px) {
                bottom: 133rem;
                right: 13rem;
            }
        }

        .zooplankton {
            position: absolute;
            bottom: 39rem;
            left: 30rem;

            @media (max-width: 768px) {
                bottom: 74rem;
                left: 32rem;
            }
        }

        .phytoplankton {
            position: absolute;
            bottom: 34rem;
            right: 45rem;

            @media (max-width: 768px) {
                bottom: 90rem;
                right: 21rem;
            }
        }

        .tubifex {
            bottom: 21.5rem;
            left: 17rem;
            width: 14.5rem;

            @media (max-width: 768px) {
                bottom: 96rem;
                left: 5rem;
                width: 52rem;
            }
        }

        .loach {
            bottom: 12.5rem;
            left: 46rem;
            position: absolute;

            @media (max-width: 768px) {
                bottom: 53rem;
                left: 13rem;
            }

        }

        .grayling {
            bottom: 33rem;
            right: 15rem;
            width: 12rem;

            @media (max-width: 768px) {
                bottom: 50rem;
                right: 6rem;
                width: 40rem;
            }
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
        &__name-sea {
            position: absolute;
            color: var(--blue-deep, #004C97);
            font-size: 0.57rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 2.4rem;
            }
        }

        &__name-sea {
            text-align: center;
            top: 14rem;
            right: 35rem;

            @media (max-width: 768px) {
                top: unset;
                right: 9rem;
                bottom: 53rem;
            }
        }

        &__river {
            bottom: 24rem;
            right: 49.5rem;

            @media (max-width: 768px) {
                bottom: 29.5rem;
                right: 44.5rem;
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
                top: 12.5rem;
                left: 43rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 58rem;
                    left: 40rem;
                }
            }

            &-2 {
                display: flex;
                top: 16rem;
                left: 32rem;
                flex-direction: row-reverse;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 53rem;
                    left: 9rem;
                }
            }

            &-3 {
                top: 16.4rem;
                left: 37.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 53rem;
                    left: 26rem;

                }
            }

            &-4 {
                top: 25rem;
                right: 36.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    right: 8rem;
                    bottom: 28rem;
                }
            }
        }
    }

    &__shrew {
        .position-info {
            position: absolute;
            bottom: 0;
            right: -29rem;
            width: 21rem;

            @media (max-width: 768px) {
                width: unset;
                position: relative;
                right: 0;
                top: 11rem;
            }

            img {
                position: absolute;
                top: -9.5rem;
                left: -3rem;
                width: 11rem;

                @media (max-width: 768px) {
                    top: -15rem;
                    left: 51rem;
                    width: 27rem;
                }
            }

            .dropdown-info {
                position: absolute;
                top: -4.3rem;
                left: 4.8rem;

                @media (max-width: 768px) {
                    position: relative;
                    top: unset;
                    left: unset;
                }
            }

            .dropdown-info__text {
                @media (max-width: 768px) {
                    top: -4rem;
                    left: -4rem;
                    width: 83.6rem;
                    padding: 15rem 5rem 5rem 5rem;
                }
            }

            &__descr {
                @media (max-width: 768px) {
                    font-size: 4.53334rem;
                    padding-left: 5.3334rem;
                    margin-bottom: 5.3334rem;
                    width: 85%;
                    border-left: 1px solid #333;
                }
            }
        }
    }

    .text-block__wrap a {
        text-decoration: 0.5px underline;
        text-decoration-skip-ink: none;
        text-underline-offset: 0.2rem;
    }

    .modernization {
        width: 83.4rem;
        margin: 0 auto;
        margin-bottom: 6.25rem;

        @media (max-width: 768px) {
            width: unset;
            padding: 0 9.5rem;
            margin-bottom: 6.25rem;
        }

        &__item {
            &:not(:last-child) {
                margin-bottom: 2.09rem;

                @media (max-width: 768px) {
                    margin-bottom: 7.4667rem;
                }
            }

            &-top {
                margin-bottom: 1.31945rem;
                font-size: 1.52778rem;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    margin-bottom: 4.2667rem;
                    font-size: 3.2rem;
                }
            }

            &-mid {
                margin-bottom: 1.3rem;
                position: relative;
                height: 1px;
                width: 100%;
                background-color: #333;

                @media (max-width: 768px) {
                    margin-bottom: 3.7334rem;
                }
            }

            &-bottom {
                width: 19rem;
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 130%;

                @media (max-width: 768px) {
                    width: 42rem;
                    font-size: 3.2rem;
                }
            }

            &:last-child {
                .modernization__mid-bg {
                    width: 8.34rem;
                }

                .modernization__mid-text_1 {
                    right: 5rem;
                }

                .modernization__mid-text_2 {
                    right: 1rem;

                    @media (max-width: 768px) {
                        right: 0;
                    }
                }

                .modernization__item-bottom {
                    width: 22rem;

                    @media (max-width: 768px) {
                        width: 37rem;
                    }
                }
            }
        }

        &__mid-text_1 {
            position: absolute;
            top: -3rem;
            right: 21rem;
            font-size: 1.52778rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                top: -8rem;
                right: 20rem;
                font-size: 3.2rem;
            }
        }

        &__mid-text_2 {
            position: absolute;
            top: 1rem;
            right: 18.5rem;
            font-size: 2.77778rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 10.66667rem;
                top: 3rem;
                right: 0;

                span {
                    font-size: 4.8rem;
                }
            }

            svg {
                width: 1.25rem;
                height: 1.9445rem;

                @media (max-width: 768px) {
                    width: 4.8rem;
                    height: 7.467rem;
                }
            }
        }

        &__mid-bg {
            position: absolute;
            top: -0.5rem;
            right: 0;
            height: 1.1112rem;
            width: 25rem;
            background-color: #CEEDFF;

            @media (max-width: 768px) {
                height: 4.267rem;
                top: -2rem;
            }
        }
    }

    &__button {
        position: relative;
        z-index: 2;
        padding: 0 17.79rem;

        @media (max-width: 768px) {
            padding: 0 9.5rem;
        }

        a {
            padding: 0.81rem 1.69rem;
            border-radius: 50px;
            border: 1px solid var(--sea, #21285C);
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 130%;
            text-align: center;
            transition: all .2s;

            &:hover {
                border: 1px solid var(--copper, #D38235);
                background: var(--copper, #D38235);
                color: #fff;
                text-decoration-line: underline;
                text-decoration-skip-ink: none;
                text-underline-offset: 0.2rem;
            }

            @media (max-width: 768px) {
                display: block;
                width: 100%;
                font-size: 4.8rem;
                padding: 2rem 2rem;
            }
        }
    }

    &__new-ward {
        position: relative;
        border-radius: 19px;
        border: 1px solid var(--grey, #626261);
        width: 67.09rem;
        padding: 4.378rem 3.34rem 2.777rem 19rem;
        margin: 0 auto;
        display: flex;
        gap: 1.2rem;

        @media (max-width: 768px) {
            width: unset;
            margin: 0 9.5rem;
            padding: 14rem 3.76rem 7.47rem 3.76rem;
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
            width: 32.278rem;
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
            width: 35.25rem;
            height: auto;
            top: 5.5rem;
            left: -7.366rem;
            z-index: 1;

            @media (max-width: 768px) {
                width: 71.5rem;
                left: 5.5rem;
                top: -14.5rem;
            }
        }

        &-bg {
            position: absolute;
            display: block;
            width: 26rem;
            height: auto;
            top: 0.5rem;
            left: -6.366rem;
            z-index: 0;

            @media (max-width: 768px) {
                width: 60rem;
                top: -25.5rem;
                left: 6.634rem;
            }
        }
    }
}
</style>
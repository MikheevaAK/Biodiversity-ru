<template>
    <div class="transbaikal">
        <BaseHero :title="'Забайкальский дивизион. Природа в&nbsp;окрестностях Быстринского комбината'"
            :descr="heroDescr" :img="'img/hero4.jpg'" :imgMobile="'img/hero4-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" title="Особенности дивизиона" :tooltip="true">
                    <span>
                        Забайкальский
                    </span>
                    <BaseTooltip word="дивизион">
                        <span>
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или&nbsp;объекты с&nbsp;общей
                            задачей,
                            например, перевозкой сырья или&nbsp;энергоснабжением. Деление на&nbsp;дивизионы
                            (от&nbsp;французского
                            слова
                            division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                        </span>
                    </BaseTooltip>

                    <span>
                        «Норникеля» отвечает за&nbsp;разработку золото-железо-медных руд Быстринского
                        месторождения. Сегодня это крупнейший проект в&nbsp;отрасли, начатый с&nbsp;нуля,
                        на&nbsp;неосвоенных территориях.
                        Это позволило компании уже на&nbsp;старте внедрить передовые практики добычи и&nbsp;переработки
                        руды, в&nbsp;том
                        числе сокращающие воздействие на&nbsp;окружающую среду.
                    </span>
                </BaseTextBlock>

                <BigMap :circales="circales" :img="'img/transbaikal-big-map'" class="mb-100"
                    :imgMobile="'img/transbaikal-big-map-mobile'">
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
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div class="circale-block__text">
                                Особо охраняемые природные территории
                            </div>
                        </div>
                    </div>
                </BigMap>

                <BaseTextBlock class="text mb-40 max-width" title="Быстринский горно-обогатительный комбинат">
                    <p>
                        Комбинат расположился в&nbsp;труднодоступной местности Газимуро-Заводского района Забайкальского
                        края. Здесь перерабатывают руду Быстринского месторождения и&nbsp;получают медный, магнетитовый
                        и&nbsp;золотосодержащий концентраты.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="text mb-40" title="Урюмканский заказник">
                    <p>
                        Созданный в&nbsp;80-х природный заказник сохраняет экосистемы Забайкалья и&nbsp;поддерживает
                        экологический баланс. Промышленные объекты дивизиона расположены на&nbsp;расстоянии 22&nbsp;км
                        от&nbsp;границ заказника и,&nbsp;по&nbsp;мнению исследователей, не&nbsp;влияют на&nbsp;его
                        природных
                        обитателей.
                    </p>
                </BaseTextBlock>

                <picture>
                    <source media="(max-width: 768px)" type="image/webp" :srcset="'img/area-mobile.webp'">
                    <source media="(max-width: 768px)" :srcset="'img/area-mobile.png'">
                    <source type="image/webp" :srcset="'img/area.webp'">
                    <img loading="lazy" class="mb-100" :src="'img/area.png'" alt="">
                </picture>

                <div class="transbaikal-scroll mb-100">
                    <BaseTextBlock class="text" title="Экотехнологии Быстринского ГОК">
                        <p>
                            При создании &laquo;Быстры&raquo; и&nbsp;её&nbsp;инфраструктуры использовались передовые
                            технологии, сокращающие экологический след предприятия.
                        </p>
                    </BaseTextBlock>
                    <svg class="mobile-icon-scroll" xmlns="http://www.w3.org/2000/svg" width="49" height="43"
                        viewBox="0 0 49 43" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.2522 15.3469C17.4445 15.3469 17.6377 15.2811 17.7955 15.1466C18.147 14.8469 18.1887 14.3193 17.8885 13.9682C16.736 12.6208 16.1013 10.9023 16.1013 9.12929C16.1013 5.01713 19.4518 1.67171 23.5701 1.67171C27.6885 1.67171 31.039 5.01713 31.039 9.12929C31.039 10.9023 30.4043 12.6208 29.2518 13.9681C28.9516 14.3191 28.9932 14.8467 29.3447 15.1465C29.6964 15.4463 30.2248 15.4047 30.5249 15.0538C31.936 13.404 32.7132 11.3 32.7132 9.12929C32.7132 4.09535 28.6116 0 23.5701 0C18.5286 0 14.4271 4.09535 14.4271 9.12929C14.4271 11.3 15.2042 13.404 16.6153 15.0538C16.7809 15.2475 17.0158 15.3469 17.2522 15.3469ZM37.2992 33.2569C37.117 35.1289 36.3767 36.89 35.2146 38.2162C33.6211 40.0348 31.4197 40.9569 28.6713 40.9569C23.6455 40.9569 20.6547 36.6329 20.626 36.5906C20.6157 36.5752 20.6048 36.5602 20.5935 36.5456C18.475 33.8071 14.7644 26.9786 13.6775 24.9511C13.6716 24.9401 13.6735 24.9258 13.6762 24.9181C14.7728 24.2996 16.1283 24.6072 16.9038 25.6516L20.6622 30.7131C20.8773 31.0028 21.2541 31.1221 21.5972 31.009C21.9401 30.8959 22.1718 30.576 22.1718 30.2153V9.24948C22.1718 8.82245 22.3392 8.41513 22.6312 8.13203C22.888 7.88286 23.2153 7.75121 23.5609 7.76116C24.2858 7.78222 24.8757 8.47155 24.8757 9.2978V20.3073V22.4185C24.8757 22.8802 25.2504 23.2544 25.7128 23.2544C26.175 23.2544 26.5499 22.8802 26.5499 22.4185V20.3307C26.581 19.5318 27.1726 18.9069 27.8998 18.9069C28.6452 18.9069 29.2517 19.5749 29.2517 20.3958V23.2098C29.2517 23.6714 29.6266 24.0456 30.0888 24.0456C30.5512 24.0456 30.9259 23.6714 30.9259 23.2098C30.9259 22.3889 31.5324 21.7209 32.278 21.7209C33.0234 21.7209 33.6298 22.3889 33.6298 23.2098V25.4738C33.6298 25.578 33.6493 25.6813 33.6874 25.7783L33.7276 25.881C33.864 26.2291 34.215 26.4449 34.588 26.4084C34.9606 26.3723 35.264 26.0935 35.3308 25.7257C35.4567 25.0333 36.0139 24.5307 36.656 24.5307C37.3905 24.5307 37.99 25.1789 38.0076 25.983L37.2992 33.2569ZM36.656 22.859C38.3247 22.859 39.6823 24.2767 39.6823 26.0195C39.6823 26.0465 39.6809 26.0735 39.6783 26.1004L38.9656 33.4187C38.7498 35.6354 37.8651 37.7301 36.4745 39.3169C34.5764 41.4834 31.878 42.6286 28.6713 42.6286C22.8888 42.6286 19.5497 37.9781 19.253 37.5474C17.1139 34.7734 13.6108 28.3692 12.2015 25.7399C11.7699 24.9349 12.0546 23.9176 12.8359 23.4721C14.6816 22.4199 16.958 22.9178 18.2488 24.656L20.4975 27.6845V9.24948C20.4975 8.37334 20.8501 7.52896 21.4648 6.93283C22.0491 6.36612 22.8122 6.06663 23.6096 6.09012C25.2309 6.13726 26.5499 7.57627 26.5499 9.2978V17.5632C26.956 17.353 27.4144 17.2352 27.8998 17.2352C29.5641 17.2352 30.919 18.6459 30.9259 20.3826C31.333 20.1693 31.7923 20.0492 32.2779 20.0492C33.9408 20.0492 35.2948 21.4576 35.304 23.192C35.7134 22.9782 36.1736 22.859 36.656 22.859ZM27.3682 12.8811C26.9907 12.6146 26.9009 12.0931 27.1677 11.7161C27.694 10.9726 27.9722 10.0971 27.9722 9.18462C27.9722 6.76098 25.9974 4.7892 23.5701 4.7892C21.1428 4.7892 19.1681 6.76098 19.1681 9.18462C19.1681 10.1102 19.4533 10.9958 19.993 11.7454C20.2629 12.1202 20.1774 12.6426 19.8019 12.912C19.6541 13.0182 19.4832 13.0692 19.314 13.0693C19.0537 13.0693 18.7971 12.9484 18.6336 12.7212C17.8879 11.6855 17.4938 10.4626 17.4938 9.18462C17.4938 5.8392 20.2196 3.11749 23.5701 3.11749C26.9206 3.11749 29.6464 5.8392 29.6464 9.18462C29.6464 10.4446 29.2621 11.6536 28.535 12.6809C28.2682 13.0579 27.7457 13.1476 27.3682 12.8811Z"
                            fill="#C5C5C6" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.99145 9.48455L3.16866 8.8144H9.47678C9.93505 8.8144 10.3065 8.44165 10.3065 7.98181C10.3065 7.52197 9.93505 7.14922 9.47678 7.14922H3.16858L3.99136 6.47907C4.34716 6.18925 4.40151 5.66496 4.11267 5.30787C3.82375 4.95085 3.30126 4.8964 2.94562 5.18623L0.306926 7.33539L0.305017 7.33705C0.282531 7.35554 0.260875 7.37527 0.24038 7.39608C0.235152 7.40125 0.230755 7.40682 0.225776 7.41215C0.210841 7.42806 0.196403 7.44429 0.182795 7.46128C0.176489 7.4691 0.170846 7.47726 0.164872 7.48534C0.153338 7.50074 0.142137 7.51648 0.131765 7.53271C0.126289 7.54129 0.121144 7.55003 0.116082 7.55877C0.106208 7.57551 0.0967494 7.59266 0.088037 7.61014C0.0838053 7.61872 0.0795732 7.62729 0.0757563 7.63595C0.0672098 7.65452 0.0595764 7.6735 0.0524405 7.69274C0.0494534 7.70098 0.0462175 7.70922 0.0433963 7.71755C0.0366753 7.73786 0.0310329 7.75851 0.0258054 7.77941C0.023814 7.78732 0.0214075 7.79506 0.0196651 7.80314C0.0148525 7.82512 0.0113676 7.84751 0.00829744 7.87016C0.00730176 7.87732 0.00589116 7.8844 0.0050614 7.89172C0.00190833 7.92128 0 7.95126 0 7.98181C0 8.01228 0.00190833 8.04226 0.0050614 8.0719C0.00589116 8.07914 0.00730176 8.08622 0.00829744 8.09338C0.0113676 8.11602 0.0148525 8.13842 0.0196651 8.1604C0.0214075 8.16839 0.023814 8.17622 0.0258054 8.18421C0.0310329 8.20511 0.0366753 8.22576 0.0433963 8.24599C0.0462175 8.2544 0.0493705 8.26256 0.0524405 8.2708C0.0594934 8.29004 0.0671269 8.30894 0.0756734 8.32759C0.0795733 8.33624 0.0838052 8.3449 0.0881199 8.35348C0.0967494 8.37096 0.106125 8.38795 0.115917 8.40468C0.121061 8.41351 0.126289 8.42233 0.131848 8.43099C0.142137 8.44698 0.15309 8.46247 0.164457 8.4777C0.170514 8.48603 0.176489 8.49444 0.182961 8.5026C0.195988 8.51891 0.210011 8.5344 0.224282 8.54972C0.229842 8.55572 0.234903 8.56196 0.240629 8.56779C0.260958 8.58835 0.282282 8.60784 0.304603 8.62624L0.306843 8.62823L2.94554 10.7774C3.0993 10.9027 3.28425 10.9636 3.46796 10.9636C3.70941 10.9636 3.94871 10.8584 4.11267 10.6557C4.40151 10.2987 4.34716 9.77438 3.99145 9.48455Z"
                            fill="#C5C5C6" />
                        <path
                            d="M45.138 8.81443H38.8298C38.3716 8.81443 38 8.44168 38 7.98184C38 7.522 38.3716 7.14925 38.8298 7.14925H45.138L44.3153 6.4791C43.9595 6.18936 43.9051 5.66499 44.1939 5.30798C44.4826 4.95088 45.0054 4.89635 45.3611 5.18625L47.9998 7.33542L48.0016 7.33708C48.0242 7.35565 48.0457 7.3753 48.0662 7.39611C48.0715 7.40127 48.076 7.40694 48.0809 7.41226C48.0958 7.42817 48.1103 7.44432 48.1239 7.4613C48.1301 7.46913 48.1359 7.47737 48.1419 7.48545C48.1533 7.50094 48.1645 7.51659 48.1749 7.53274C48.1803 7.54132 48.1855 7.55006 48.1905 7.5588C48.2005 7.57562 48.2099 7.59269 48.2186 7.61017C48.2228 7.61875 48.227 7.62732 48.2309 7.63606C48.2394 7.65455 48.247 7.67353 48.2542 7.69276C48.2572 7.70101 48.2604 7.70925 48.2632 7.71766C48.2699 7.73781 48.2757 7.75846 48.2808 7.77927C48.2829 7.78735 48.2852 7.79517 48.287 7.80325C48.2918 7.82523 48.2952 7.84754 48.2982 7.87011C48.2993 7.87735 48.3008 7.88451 48.3016 7.89175C48.3047 7.92131 48.3066 7.95137 48.3066 7.98184C48.3066 8.01231 48.3047 8.04237 48.3016 8.07193C48.3008 8.07917 48.2993 8.08625 48.2983 8.09341C48.2953 8.11605 48.2918 8.13845 48.287 8.16051C48.2852 8.16851 48.2829 8.17625 48.2808 8.18424C48.2757 8.20514 48.2699 8.22587 48.2632 8.24602C48.2604 8.25443 48.2572 8.26259 48.2542 8.27083C48.2471 8.29015 48.2395 8.30905 48.231 8.32761C48.227 8.33636 48.2228 8.34493 48.2185 8.35351C48.2099 8.37099 48.2006 8.38798 48.1907 8.40479C48.1856 8.41362 48.1803 8.42236 48.1748 8.43102C48.1645 8.44701 48.1535 8.46249 48.1422 8.47781C48.1361 8.48606 48.1301 8.49455 48.1237 8.50262C48.1107 8.51894 48.0967 8.53451 48.0824 8.54975C48.0768 8.55574 48.0718 8.56207 48.066 8.5679C48.0457 8.58846 48.0244 8.60795 48.002 8.62626L47.9999 8.62826L45.3612 10.7775C45.2073 10.9027 45.0225 10.9637 44.8387 10.9637C44.5973 10.9637 44.3579 10.8584 44.1939 10.6558C43.9051 10.2988 43.9595 9.7744 44.3152 9.48458L45.138 8.81443Z"
                            fill="#C5C5C6" />
                    </svg>

                    <TransbaikalScrollSwiper />
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Забайкальского&nbsp;дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой Научной экспедиции, зона
                        <BaseTooltip :word="'кумулятивного'">
                            Под кумулятивным понимается суммарное воздействие всех антропогенных объектов: города,
                            Кольской и&nbsp;других ГМК, а&nbsp;также расположенных в&nbsp;исследуемой зоне предприятий.
                            Достоверно отделить одно влияние от&nbsp;другого по&nbsp;реакции природных организмов
                            невозможно.
                        </BaseTooltip> воздействия объектов
                        &laquo;Норникеля&raquo; на&nbsp;наземные экосистемы дивизиона ограничена радиусом 10&nbsp;км,
                        на&nbsp;водные&nbsp;&mdash; 20&nbsp;км.
                    </p>
                    <p class="mb-10">
                        Пояс интенсивного воздействия на&nbsp;наземные экосистемы не&nbsp;выходит за&nbsp;границы
                        комбината, где учёные обнаружили изменения в&nbsp;составе некоторых видов. Влияние предприятий
                        имеет выраженный характер только в&nbsp;зоне интенсивного воздействия. Как правило, даже эти
                        изменения составляют в&nbsp;среднем около&nbsp;20% условных потерь и&nbsp;постепенно сводятся
                        к&nbsp;нулю.
                    </p>
                    <p class="mb-10">
                        Зона умеренного воздействия протянулась на&nbsp;4&nbsp;км. Для водных экосистем граница
                        значительного воздействия проходит не&nbsp;далее 2&nbsp;км от&nbsp;границ комбината,
                        умеренного&nbsp;&mdash; 2&ndash;14&nbsp;км.
                    </p>
                    <p class="mb-10">
                        Сдвиг экологического равновесия связан не&nbsp;только с&nbsp;техническим нарушением почвы
                        и&nbsp;растительности, но&nbsp;и&nbsp;с&nbsp;местной природной аномалией: земля в&nbsp;районе
                        Быстринского месторождения биологически малопродуктивна, так как содержит повышенное количество
                        полуметалла мышьяка, который является канцерогеном.
                    </p>

                    <p>По&nbsp;мере удаления от&nbsp;объектов комбината признаки промышленного воздействия сходят
                        на&nbsp;нет, приближаясь к&nbsp;состоянию
                        <BaseTooltip :word="'фоновых'">
                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия
                            предприятий,
                            экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние
                            биоразнообразия
                            на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют эти данные для
                            наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip> территорий.
                    </p>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp"
                            :srcset="'img/transbaikal-radius-mobile.webp'">
                        <source media="(max-width: 768px)" :srcset="'img/transbaikal-radius-mobile.png'">
                        <img loading="lazy" :src="'img/transbaikal-radius.png'" alt="">
                    </picture>
                    <div class="transbaikal-radius__descr">
                        <span>*</span>
                        <span>
                            Для водных экосистем зона незначительного воздействия составляет 20&nbsp;км. Расширение зоны
                            воздействия объясняется сбросом поллютантов на&nbsp;нижерасположенные участки речной
                            системы.
                        </span>
                    </div>
                </div>

                <div class="transbaikal-factors mb-60">
                    <div class="transbaikal-factors__left">
                        <div class="transbaikal-factors__descr">
                            К&nbsp;основным факторам негативного воздействия объектов Забайкальского дивизиона учёные
                            относят
                        </div>
                        <img loading="lazy" class="transbaikal-factors__img-grass" src="img/grass.png" alt="">
                    </div>
                    <ul class="transbaikal-factors__items">
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Отчуждение территорий</div>
                            <div class="transbaikal-factors__item-text">
                                А&nbsp;также их&nbsp;фрагментация. Характерно для наземных экосистем.
                            </div>
                        </li>
                        <li class="transbaikal-factors__item">
                            <div class="transbaikal-factors__item-title">Поступление поллютантов</div>
                            <div class="transbaikal-factors__item-text">
                                Поступают с&nbsp;площади водосбора поллютантов: тяжёлых металлов и&nbsp;органических
                                загрязнителей. Потенциально усиливать негативное воздействие могут сильные паводки,
                                характерные для территорий Забайкальского дивизиона.
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
                        В&nbsp;районе объектов Забайкальского дивизиона учёные выявили природную аномалию: в&nbsp;почве
                        повышено содержание мышьяка, что приводит к&nbsp;её&nbsp;низкому плодородию.
                    </p>
                    <p>
                        Пространственное распределение тяжёлых металлов и&nbsp;мышьяка в&nbsp;почвах в&nbsp;зоне
                        воздействия хвостохранилища БГОКа свидетельствует о&nbsp;пылеаэрозольном загрязнении поверхности
                        почв мышьяком севернее дамбы хвостохранилища. Его вероятный источник&nbsp;&mdash; отсыпка
                        хвостохранилища.
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
                        объектов Забайкальского дивизиона значение ИПСЭ составляет 0,96 для наземных экосистем
                        и&nbsp;1,07 для водных. Показатели говорят о&nbsp;минимальных условных потерях биоразнообразия
                        в&nbsp;зоне воздействия: состояние экосистем в&nbsp;зоне воздействия практически соответствует
                        фоновой зоне.
                    </p>
                </BaseTextBlock>

                <div class="transbaikal__factors-img" v-if="!isMobile">
                    <picture>
                        <source type="image/webp" srcset="img/transbaikal-factors-1.webp">
                        <img loading="lazy" src="img/transbaikal-factors-1.png" alt="">
                    </picture>
                </div>

                <div v-else>
                    <picture style="overflow: hidden; width: 100%; display: block;">
                        <source type="image/webp" srcset="img/terrestrial-ecosystem-2.webp">
                        <img loading="lazy" style="width: 125%; object-position: -14rem;"
                            src="img/terrestrial-ecosystem-2.png" alt="">
                    </picture>

                    <picture>
                        <source type="image/webp" srcset="img/aquatic-ecosystems-2.webp">
                        <img loading="lazy" class="mb-40" src="img/aquatic-ecosystems-2.png" alt="">
                    </picture>
                </div>

                <BaseSidebar>
                    <p>
                        &laquo;Норникель&raquo; намерен регулярно проводить замеры ИПСЭ, чтобы отслеживать эффективность
                        работы <br />по&nbsp;сохранению экосистем.
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60 mb-60-m" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает в&nbsp;Забайкалье
                    </div>
                    <div class="section-orange__descr">
                        <p>
                            В&nbsp;прилегающей к&nbsp;Быстринскому комбинату зоне участники Большой Научной экспедиции
                            обнаружили 32
                            <BaseTooltip :word="'охраняемых'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается
                                или&nbsp;уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых
                                и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или&nbsp;региональные. Охранный статус
                                запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений
                                и&nbsp;грибов
                                ограничены строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip> вида растений и&nbsp;птиц, а&nbsp;также отобрали
                            <BaseTooltip :word="'индикаторные'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для&nbsp;региона
                                организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что
                                в&nbsp;экосистеме
                                что-то пошло не&nbsp;так.
                            </BaseTooltip> виды для будущих наблюдений за&nbsp;местной экосистемой.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <div class="flora-and-fauna__wrap">
                        <BaseTextBlock title="Флора">
                            <p class="mb-10">
                                В&nbsp;районе дивизиона горные хребты чередуются с&nbsp;межгорными долинами. Такой
                                рельеф создаёт условия для высокого разнообразия местной растительности.
                            </p>
                            <p>
                                Преобладают леса с&nbsp;лиственницами, соснами, берёзами и&nbsp;осинами. Второе место
                                по&nbsp;площади занимают луга, на&nbsp;южных склонах хребтов формируются степи.
                                По&nbsp;межгорным долинам протекают реки, образуя болота, заболоченные и&nbsp;пойменные
                                луга.
                            </p>
                        </BaseTextBlock>
                        <BaseTextBlock title="Фауна">
                            <p class="mb-10">
                                Среди животных встречаются в&nbsp;основном таёжные виды и&nbsp;некоторые представители
                                лесостепной и&nbsp;приамурской природных зон. Типичные обитатели дивизиона&nbsp;&mdash;
                                лоси, сибирские косули, горностаи и&nbsp;соболи. В&nbsp;лесах водятся лисицы
                                и&nbsp;волки.
                            </p>
                            <p>
                                Зимой в&nbsp;регионе обитают синицы, свиристели и&nbsp;снегири, из&nbsp;тетеревиных
                                распространены рябчик и&nbsp;глухарь. Разнообразие птиц становится гораздо богаче
                                в&nbsp;тёплое время года.
                            </p>
                        </BaseTextBlock>
                    </div>
                    <div class="wrap-numbers">
                        <BaseNumberBlock class="" :textTop="'271 вид'" textBottom="сосудистых растений" />
                        <BaseNumberBlock class="" :textTop="'135 видов'" textBottom="птиц" />
                        <BaseNumberBlock class="" :textTop="'31 вид'" textBottom="млекопитающих" />
                        <BaseNumberBlock class="" :textTop="'9 видов'" textBottom="рыб" />
                    </div>
                </div>

                <BaseTextBlock class="mb-140 transbaikal__mouse" title="Биоиндикаторы состояния экосистем">
                    <span>
                        <p class="mb-10">
                            Ключевым биоиндикатором для эффективной оценки состояния нарушенных экосистем являются
                            почвенные микроартроподы&nbsp;&mdash; Орибатиды. Они наиболее чувствительны
                            к&nbsp;негативному воздействию. В&nbsp;районе БГОКа оно главным образом отразилось
                            на&nbsp;структуре сообществ орибатид, которая может служить основным параметром для оценки
                            степени воздействия в&nbsp;данном районе.
                        </p>
                        <p class="mb-10">
                            Помимо индикаторных групп, учёные в&nbsp;ходе исследования выделили потенциальные
                            индикаторы. Это те&nbsp;живые организмы, которые дают наиболее быструю и&nbsp;явную реакцию
                            на&nbsp;воздействие. При этом их&nbsp;достаточно легко отслеживать в&nbsp;рамках ежегодного
                            мониторинга.
                        </p>
                        <p>
                            Среди млекопитающих потенциальные индикаторы&nbsp;&mdash; полёвка Максимовича
                            и&nbsp;восточноазиатская мышь. Среди птиц учёные отметили пятнистого конька
                            и&nbsp;толстоклювую камышовку, среди земноводных&nbsp;&mdash; сибирскую лягушку.
                            <br />В&nbsp;водных системах важно наблюдать за&nbsp;зоопланктоном и&nbsp;рыбой:
                            в&nbsp;качестве
                            индикаторов эталонных участков рекомендуются ленок и&nbsp;сибирский голец-усач.
                        </p>
                    </span>
                    <div class="position-info">
                        <picture>
                            <source type="image/webp" srcset="img/mouse.webp">
                            <img loading="lazy" src="img/mouse.png" alt="">
                        </picture>

                        <div class="position-info__descr">
                            Рядом с&nbsp;Быстринским комбинатом учёные отметили высочайший уровень доминирования,
                            поэтому выбрали полёвку Максимовича потенциально индикаторным видом.
                        </div>

                        <BaseDropdownInfo :title="'Полёвка Максимовича'" :pulsation-color="'Green-Mist'"
                            :text="'Доминирует среди других 10&nbsp;видов грызунов на&nbsp;территории всех зон воздействия дивизиона. Рядом с&nbsp;Быстринским комбинатом учёные отметили высочайший уровень доминирования, поэтому выбрали полёвку Максимовича потенциально индикаторным видом. А&nbsp;в&nbsp;зоне среднего воздействия её&nbsp;численность увеличивается за&nbsp;счёт прироста разнообразия микромест обитаний'" />
                    </div>
                </BaseTextBlock>
                <div class="collage mb-100">
                    <div class="legend">
                        <BaseCollageInfo text="Охраняемые виды" :color="'#71464E'" />
                        <BaseCollageInfo text="Индикаторные виды" />
                    </div>
                    <div class="collage__eagle">
                        <video @loadeddata="videoLoadedOne" autoplay loop muted="true" playsinline="true"
                            preload="none">
                            <source src="video/spotted-eagle.mov" type="video/mp4">
                            <source src="video/spotted-eagle.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingOne">
                            <source type="image/webp" srcset="img/collage-2-eagle.webp">
                            <img loading="lazy" src="img/collage-2-eagle.png" alt="">
                        </picture>
                    </div>
                    <div class="collage__harrier">
                        <video @loadeddata="videoLoadedTwo" autoplay loop muted="true" playsinline="true"
                            preload="none">
                            <source src="video/harrier.mov" type="video/mp4">
                            <source src="video/harrier.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingTwo">
                            <source type="image/webp" srcset="img/collage-2-harrier.webp">
                            <img loading="lazy" src="img/collage-2-harrier.png" alt="">
                        </picture>
                    </div>
                    <div class="collage__fish">
                        <video @loadeddata="videoLoadedThree" autoplay loop muted="true" playsinline="true"
                            preload="none">
                            <source src="video/bitterling.mov" type="video/mp4">
                            <source src="video/bitterling.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingThree">
                            <source type="image/webp" srcset="img/collage-2-fish.webp">
                            <img loading="lazy" src="img/collage-2-fish.png" alt="">
                        </picture>
                    </div>
                    <div class="collage__curlew">
                        <video @loadeddata="videoLoadedFour" autoplay loop muted="true" playsinline="true"
                            preload="none">
                            <source src="video/curlew.mov" type="video/mp4">
                            <source src="video/curlew.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingFour">
                            <source type="image/webp" srcset="img/collage-2-curlew.webp">
                            <img loading="lazy" src="img/collage-2-curlew.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__dubrovnik">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/dubrovnik.mov" type="video/mp4">
                            <source src="video/dubrovnik.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__warbler">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/warbler-2.mov" type="video/mp4">
                            <source src="video/warbler-2.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__deep">
                        <video @loadeddata="videoLoadedFive" autoplay loop muted="true" playsinline="true">
                            <source src="video/deep.mov" type="video/mp4">
                            <source src="video/deep.webm" type="video/webm">
                        </video>
                        <picture v-if="!isLoadingFive">
                            <source type="image/webp" srcset="img/deep.webp">
                            <img loading="lazy" src="img/deep.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__сolumns">
                        <video autoplay loop muted="true" playsinline="true">
                            <source
                                src="https://www.dropbox.com/scl/fi/lbrr28qgrh7oo87vqg50l/columns.mov?rlkey=apl2jxye9g1afmv2q58g75sd0&st=pww80lyh&dl=0"
                                type="video/mp4">
                            <source src="video/columns.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__bug">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/bug.mov" type="video/mp4">
                            <source src="video/bug.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__shrew">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/shrew.mov" type="video/mp4">
                            <source src="video/shrew.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__ant">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/ant.mov" type="video/mp4">
                            <source src="video/ant.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__fox">
                        <video @loadeddata="videoLoadedSix" autoplay loop muted="true" playsinline="true"
                            preload="none">
                            <source src="video/fox.mov" type="video/mp4">
                            <source src="video/fox.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingSix">
                            <source type="image/webp" srcset="img/fox.webp">
                            <img loading="lazy" src="img/fox.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__hare">
                        <video @loadeddata="videoLoadedSeven" autoplay loop muted="true" playsinline="true">
                            <source src="video/hare.mov" type="video/mp4">
                            <source src="video/hare.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingSeven">
                            <source type="image/webp" srcset="img/hare.webp">
                            <img loading="lazy" src="img/hare.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__wolf">
                        <video @loadeddata="videoLoadedEight" autoplay loop muted="true" playsinline="true">
                            <source
                                src="https://www.dropbox.com/scl/fi/vp274brwbk720e1tkrz6e/wolf.mov?rlkey=29gmbdpow4sn2o0jq65uj9mwr&st=op3kl63o&dl=0"
                                type="video/mp4">
                            <source src="video/wolf.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingEight">
                            <source type="image/webp" srcset="img/wolf.webp">
                            <img loading="lazy" src="img/wolf.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__siberian">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/siberian.mov" type="video/mp4">
                            <source src="video/siberian.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__puffy">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/puffy.mov" type="video/mp4">
                            <source src="video/puffy.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__muscovite">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/muscovite.mov" type="video/mp4">
                            <source src="video/muscovite.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__ermine">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/ermine.mov" type="video/mp4">
                            <source src="video/ermine.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__gudgeon">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/gudgeon.mov" type="video/mp4">
                            <source src="video/gudgeon.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__crane">
                        <video @loadeddata="videoLoadedNine" autoplay loop muted="true" playsinline="true">
                            <source
                                src="https://www.dropbox.com/scl/fi/gylayil752eyw0l9gz2is/crane.mov?rlkey=hemk4pq20dsuyhxsqdgz1kifo&st=ssesqmvw&dl=0"
                                type="video/mp4">
                            <source src="video/crane.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingNine">
                            <source type="image/webp" srcset="img/crane.webp">
                            <img loading="lazy" src="img/crane.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__killer-whale">
                        <video @loadeddata="videoLoadedTen" autoplay loop muted="true" playsinline="true">
                            <source src="video/killer-whale.mov" type="video/mp4">
                            <source src="video/killer-whale.webm" type="video/webm">
                        </video>

                        <picture v-if="!isLoadingTen">
                            <source type="image/webp" srcset="img/killer-whale.webp">
                            <img loading="lazy" src="img/killer-whale.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__mouse-2">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/mouse-2.mov" type="video/mp4">
                            <source src="video/mouse-2.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__mouse-3">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/mouse-3.mov" type="video/mp4">
                            <source src="video/mouse-3.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__wren">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/wren.mov" type="video/mp4">
                            <source src="video/wren.webm" type="video/webm">
                        </video>
                    </div>

                    <div class="collage__grouse">
                        <video autoplay loop muted="true" playsinline="true">
                            <source src="video/grouse.mov" type="video/mp4">
                            <source src="video/grouse.webm" type="video/webm">
                        </video>
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
                            <source type="image/webp" srcset="img/watercolor-6.webp">
                            <img loading="lazy" src="img/watercolor-6.png" alt="">
                        </picture>
                    </div>

                    <div class="collage__watercolor-4">
                        <picture>
                            <source type="image/webp" srcset="img/watercolor-7.webp">
                            <img loading="lazy" src="img/watercolor-7.png" alt="">
                        </picture>
                    </div>

                    <BaseCollageInfo class="myxomycetes" title="Миксомицeты" :color="'#C5C5C6'"
                        :text="'На&nbsp;субстрате с&nbsp;полигона ЗБ_8 была выращена колония ползающих грибов нового для науки вида рода Physarum Pers.'" />

                    <BaseCollageInfo class="eagle" title="Большой подорлик" :color="'#71464E'"
                        :text="'Размах крыльев в&nbsp;2,5&nbsp;раза длиннее тела&nbsp;—&nbsp;около 180&nbsp;см'" />

                    <BaseCollageInfo class="harrier" title="Полевой лунь" :color="'#71464E'"
                        :text="'Самки крупнее самцов почти в&nbsp;два раза и&nbsp;весят до&nbsp;600&nbsp;г'" />

                    <BaseCollageInfo class="puffy" title="Пухляк"
                        :text="'Устраивает повсюду множество кладовых из&nbsp;семян и&nbsp;помнит, где они находятся'" />

                    <BaseDropdownInfo :is-modal="true" class="warbler" title="Толстоклювая пеночка"
                        :pulsation-color="'Green-Mist'"
                        :text="'Поёт свою песню, каждый раз меняя тональность, поэтому разные специалисты описывают её&nbsp;голос по-разному'" />

                    <BaseCollageInfo class="mottled-breast" title="Сибирская пестрогрудка" :color="'#71464E'"
                        :text="'Голосом напоминает жужжание электропроводов'" />

                    <BaseCollageInfo class="moskovka" title="Московка"
                        :text="'Когда московка возбуждена, она приподнимает перья на&nbsp;лбу в&nbsp;виде небольшого хохолка'" />

                    <BaseCollageInfo class="lily-dwarf" title="Лилия карликовая" :color="'#71464E'"
                        :text="'Цветы часто срывают на&nbsp;букеты, что резко ограничивает семенное размножение вида'" />

                    <BaseCollageInfo class="rowan" title="Рябина сибирская" :color="'#71464E'"
                        :text="'Легко приспосабливается к&nbsp;новым условиям, выдерживает холод и&nbsp;засуху'" />

                    <BaseCollageInfo class="ground-beetle" :title="'Жужелица Карабус&nbsp;крюбери'" :color="'#71464E'"
                        :text="'Редкий, малоизученный вид, встречаются единичные особи'" />

                    <BaseCollageInfo class="shrew" title="Бурозубка"
                        :text="'Быстро стареет из-за необычайно интенсивного обмена веществ'" />

                    <BaseCollageInfo class="black-cohosh" title="Клопогон даурский" :color="'#71464E'"
                        :text="'Живописное лекарственное растение отпугивает насекомых сильным запахом'" />

                    <BaseCollageInfo class="spiraea-average" title="Спирея средняя" />

                    <BaseDropdownInfo :is-modal="true" class="spotted-pipit" title="Пятнистый конёк"
                        :pulsation-color="'Green-Mist'"
                        :text="'Потенциально индикаторный вид. Его численность закономерно возрастает по&nbsp;мере удаления от&nbsp;объектов компании'" />


                    <BaseCollageInfo class="grouse" title="Рябчик"
                        :text="'Российская популяция&nbsp;вида самая многочисленная&nbsp;&mdash; около 40&nbsp;млн птиц'" />

                    <BaseDropdownInfo :is-modal="true" class="mouse" title="Полёвка Максимовича"
                        :pulsation-color="'Green-Mist'"
                        :text="'Доминирует среди других 10&nbsp;видов грызунов на&nbsp;территории всех зон воздействия дивизиона. Рядом с&nbsp;Быстринским комбинатом учёные отметили высочайший уровень доминирования, поэтому выбрали полёвку Максимовича потенциально индикаторным видом. А&nbsp;в&nbsp;зоне среднего воздействия её&nbsp;численность увеличивается за&nbsp;счёт прироста разнообразия микромест обитаний'" />

                    <BaseCollageInfo class="krasodnev" title="Красоднев малый" :color="'#71464E'"
                        :text="'Каждый цветок красоднева распускается лишь на&nbsp;один день'" />

                    <BaseCollageInfo class="slipper" title="Венерин башмачок" :color="'#71464E'"
                        :text="'Имеет причудливое строение цветка, напоминающего носок обуви'" />

                    <BaseCollageInfo class="curlew" title="Большой кроншнеп" :color="'#71464E'"
                        :text="'Изогнутый клюв птицы достигает 140&nbsp;мм'" />

                    <BaseCollageInfo class="crane" title="Журавль-красавка" :color="'#71464E'"
                        :text="'Самый маленький из&nbsp;журавлей, его рост меньше метра'" />

                    <BaseCollageInfo class="ledum" title="Багульник болотный"
                        :text="'В&nbsp;народных поверьях багульнику приписывались приворотные свойства'" />
                    <div class="background background-1"></div>
                    <div class="background background-2"></div>
                    <div class="background background-3"></div>
                    <div class="background background-4"></div>
                    <div class="background-text background-text-1">
                        Амурский горчак
                    </div>
                    <div class="background-text background-text-2">
                        Пескарь сибирский
                    </div>

                    <BaseDropdownInfo :is-modal="true" class="dubrovnik" title="Дубровник" :color="'#71464E'"
                        :pulsation-color="'finn'"
                        :text="'Имеет китайское происхождение. В&nbsp;19&nbsp;веке вид проник в&nbsp;Европу и&nbsp;очень быстро освоил её: в&nbsp;1920-х годах птичек с&nbsp;яркой внешностью можно было встретить уже в&nbsp;Финляндии. За&nbsp;последнее время популяция дубровника в&nbsp;мире сократилась на&nbsp;90%, вид занесён в&nbsp;Красную книгу России'" />
                    <BaseDropdownInfo :is-modal="true" class="moskovka_mobile" title="Московка"
                        :pulsation-color="'Green-Mist'"
                        :text="'Во&nbsp;время когда московка возбуждена, она приподнимает перья на&nbsp;лбу в&nbsp;виде небольшого хохолка.'" />
                    <BaseDropdownInfo :is-modal="true" class="siberian-deer" title="Сибирская косуля"
                        :pulsation-color="'Green-Mist'"
                        :text="'Как показали исследования, численность сибирских косуль рядом с&nbsp;Быстринским ГОК и&nbsp;на&nbsp;территории за&nbsp;пределами радиуса промышленного воздействия одинаковая. Вид встречается настолько часто, что учёные РАН выбрали его индикатором состояния экосистем дивизиона'" />

                    <BaseDropdownInfo :is-modal="true" class="ants" title="Муравьи" :pulsation-color="'Green-Mist'"
                        :text="'В&nbsp;Забайкальском дивизионе исследователи обнаружили 29&nbsp;видов муравьёв, из&nbsp;них три были выбраны индикаторами состояния экосистем: Чёрный болотный муравей, Черноголовый муравей и&nbsp;Бледноногий садовый муравей'" />

                    <BaseDropdownInfo :is-modal="true" class="hare" title="Заяц-беляк" :pulsation-color="'Green-Mist'"
                        :text="'Широко расставленные глаза помогают быстрее заметить опасность и&nbsp;убежать. Спасаясь, развивает скорость до&nbsp;60&nbsp;км/ч. Обитает также в&nbsp;Норильском дивизионе'" />

                    <BaseDropdownInfo :is-modal="true" class="shrew_mobile" title="Бурозубка"
                        :pulsation-color="'Green-Mist'"
                        :text="'Быстро стареет из-за необычайно интенсивного обмена веществ'" />


                    <BaseDropdownInfo :is-modal="true" class="maksimovichs-vole" title="Полёвка Максимовича"
                        :pulsation-color="'Green-Mist'"
                        :text="'Доминирует среди других 10&nbsp;видов грызунов на&nbsp;территории всех зон воздействия Забайкальского дивизиона. Рядом с&nbsp;Быстринским комбинатом исследователи отметили особенно высокий уровень доминирования, поэтому выбрали полёвку Максимовича видом-индикатором'" />
                    <BaseDropdownInfo :is-modal="true" class="killer-whale" title="Касатка" :color="'#71464E'"
                        :pulsation-color="'finn'"
                        :text="'Охота&nbsp;&mdash; одна из&nbsp;причин сокращения численности этого вида уток. В&nbsp;брачный период самцы касаток приобретают выразительный элегантный окрас, из-за чего становятся желанным трофеем'" />
                    <BaseDropdownInfo :is-modal="true" class="zooplankton-2" title="Зоопланктон"
                        :pulsation-color="'Green-Mist'"
                        :text="'В&nbsp;водоёмах Забайкалья учёные использовали три вида как индикаторы степени воздействия: планктонная коловратка Lophocharis oxysternon присутствовала только в&nbsp;реках фоновых территорий, личинки подёнок Ephoron nigridorsum не&nbsp;обнаруживались в&nbsp;зоне интенсивного воздействия, а&nbsp;отделить пояса интенсивного и&nbsp;умеренного воздействия помогли личинки веснянок Agnetina extremа'" />

                </div>

                <div class="transbaikal__new-ward mb-60">
                    <div class="transbaikal__new-ward-title">
                        Обнаружен новый вид грибов — агарикомицеты
                    </div>
                    <div class="transbaikal__new-ward-descr">
                        Во&nbsp;время изучения микологического разнообразия на&nbsp;обследованных полигонах обнаружен
                        новый для России вид грибов&nbsp;&mdash; Entoloma sublaevisporum. Также учёные нашли новый для
                        Забайкальского края вид&nbsp;&mdash; Entoloma formosum (Fr.) Noordel.
                    </div>
                    <picture class="transbaikal__new-ward-img">
                        <source type="image/webp" srcset="img/mushroom.webp">
                        <img loading="lazy" src="img/mushroom.png" alt="">
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
                            <div class="habitat-map__legend-title">Виды</div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                1 – Касатка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Большой подорлик
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Полевой лунь
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Большой кроншнеп
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Журавль-красавка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Дубровник
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                7 – Сибирская&nbsp;пестрогрудка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                8 – Рябина сибирская
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                9 – Лилия карликовая
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                10 – Красоднев малый
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                11 – Клопогон даурский
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                12 – Венерин башмачок
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
                                    <li>Касатка</li>
                                    <li>Венерин башмачок</li>
                                    <li>Клопогон даурский</li>
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
                                    <li>Большой кроншнеп</li>
                                    <li>Журавль-красавка</li>
                                    <li>Рябина сибирская</li>
                                    <li>Клопогон даурский</li>
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
                                    <li>Полевой лунь</li>
                                    <li>Сибирская пестрогрудка</li>
                                    <li>Лилия карликовая</li>
                                    <li>Красоднев малый</li>
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
                                    <li>Большой подорлик</li>
                                    <li>Венерин башмачок</li>
                                    <li>Дубровник</li>
                                    <li>Красоднев малый</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="habitat-map__city habitat-map__city-1">
                        <div class="habitat-map__city-circale"></div>

                        <span>
                            Быстринский ГОК
                        </span>
                    </div>
                    <div class="habitat-map__city habitat-map__city-2">
                        <div class="habitat-map__city-circale"></div>

                        <span>
                            село Газимурский Завод
                        </span>
                    </div>
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/habitat-map-mobile.png">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-mobile.webp">
                        <img loading="lazy" src="img/habitat-map.jpg" alt="">
                    </picture>

                </div>
                <BaseTextBlock class="mb-40">
                    <p>
                        Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум
                        или&nbsp;другие факторы воздействия. Ведь для их&nbsp;выживания главное&nbsp;&mdash; наличие
                        корма
                        и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Усиление промышленного воздействия природными факторами требует от&nbsp;&laquo;Норникеля&raquo;
                        внимательного отношения к&nbsp;состоянию экосистем дивизиона. Компания совместно с&nbsp;учёными
                        продолжит исследования в&nbsp;районе месторождения, чтобы сделать эти места максимально
                        безопасными
                        для&nbsp;их&nbsp;обитателей.
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import BigMap from '@/components/BigMap.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import MainSection from '@/layout/MainSection'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseNumberBlock from '@/components/BaseNumberBlock'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import TransbaikalScrollSwiper from '@/components/TransbaikalScrollSwiper.vue'
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
        TransbaikalScrollSwiper,
        BaseDropdownInfo,
        BaseNumberBlock,
        BaseCollageInfo
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
            isMobile: (window.innerWidth <= 768),
            circales: [
                {
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'purple',
                    number: '2'
                }
            ],
            heroDescr: 'Кто обитает на&nbsp;территории одного из&nbsp;самых современных и&nbsp;технологичных дивизионов &laquo;Норникеля&raquo;'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation()
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
        },
    }
}
</script>

<style lang="scss">
.transbaikal {
    .big-map {
        @media (max-width: 768px) {
            display: flex;

            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 19rem;
                right: 29rem;
            }

            @media (max-width: 768px) {
                top: 43rem;
                left: 73rem;
            }

            &__2 {
                top: 26.3rem;
                right: 39.3rem;

                @media (max-width: 768px) {
                    top: 58rem;
                    left: 54rem;
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

    .hero__wrap {
        width: 51rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .hero__descr {
        width: 43rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .max-width {
        .text-block__title {
            width: 20rem;

            @media (max-width: 768px) {
                width: unset;
            }
        }
    }

    .legend {
        position: relative;
        top: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.28rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 9.6rem;
            gap: 2rem;
            top: 0;
        }

        .block-info {
            position: static;

            @media (max-width: 768px) {
                font-size: 4.73334rem;
            }
        }
    }

    &__mouse {
        z-index: 2;

        .position-info {
            position: absolute;
            bottom: 0;
            right: -29rem;
            width: 23rem;

            @media (max-width: 768px) {
                width: unset;
                position: relative;
                right: 0;
                top: 11rem;
            }

            img {
                position: absolute;
                top: -7rem;
                left: -3rem;
                width: 11rem;

                @media (max-width: 768px) {
                    top: -17rem;
                    left: 51rem;
                    width: 38rem;
                }
            }

            .dropdown-info {
                position: absolute;
                top: -4.3rem;
                left: 6.8rem;
                width: 12rem;

                @media (max-width: 768px) {
                    position: relative;
                    top: unset;
                    left: unset;
                    width: unset;
                }

                &__wrap {
                    align-items: flex-start;

                    @media (max-width: 768px) {
                        align-items: center;
                    }
                }

                &__text {
                    padding: 3.56rem 0.62rem 0.88rem 3.13rem;

                    @media (max-width: 768px) {
                        top: -4rem;
                        left: -4rem;
                        width: 83.6rem;
                        padding: 15rem 5rem 5rem 5rem;
                    }
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

    .collage {
        position: relative;
        height: 389rem;
        width: 100%;
        background-image: url(../../public/img/collage-2.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        @supports (background-image: url(../../public/img/collage-2.webp)) {
            background-image: url(../../public/img/collage-2.webp);
        }

        @media (max-width: 768px) {
            height: 1416rem;
            background-image: url(../../public/img/collage-2-mobile.png);

            @supports (background-image: url(../../public/img/collage-2-mobile.webp)) {
                background-image: url(../../public/img/collage-2-mobile.webp);
            }
        }

        video {
            position: absolute;
            width: 100%;
        }

        &__eagle {
            position: absolute;
            top: 8.4rem;
            left: 9.9rem;
            width: 43.4723rem;

            video {
                top: -3rem;
                left: -1rem;
            }

            @media (max-width: 768px) {
                top: 64.4rem;
                left: 23.9rem;
                width: 80.4723rem;
            }
        }

        &__harrier {
            position: absolute;
            top: 45.4rem;
            left: 1.1rem;
            width: 38.405rem;

            video {
                top: 8rem;
                transform: rotate(14deg);
                left: -1rem;

                @media (max-width: 768px) {
                    top: 12rem;
                }
            }

            @media (max-width: 768px) {
                top: 11.4rem;
                left: -1.9rem;
                transform: scaleX(-1);
                width: 58.405rem;
            }
        }

        &__curlew {
            position: absolute;
            top: 305rem;
            left: 45.4rem;
            width: 36.667rem;

            video {
                transform: scaleX(-1);
                width: 120%;
                top: -4rem;
                left: -3rem;
            }

            @media (max-width: 768px) {
                top: 1164rem;
                left: 36.4rem;
                width: 68.667rem;
            }
        }

        &__fish {
            position: absolute;
            top: 356.6rem;
            left: 61.8rem;
            width: 26.53rem;

            video {
                width: 167%;
                top: 1rem;
                transform: rotate(5deg);
                left: -19rem;

                @media (max-width: 768px) {
                    top: 2rem;
                    left: -33rem;
                }
            }

            @media (max-width: 768px) {
                top: 1334.6rem;
                left: 54.8rem;
                width: 48.53rem;
            }
        }

        &__dubrovnik {
            position: absolute;
            top: 52rem;
            left: 59.8rem;
            width: 19rem;
            transform: rotate(-8deg);

            @media (max-width: 768px) {
                top: 155rem;
                left: 12.8rem;
                width: 36rem;
                transform: scaleX(-1);
            }
        }

        &__warbler {
            position: absolute;
            top: 95.7rem;
            left: 35.4rem;
            width: 18rem;

            @media (max-width: 768px) {
                top: 309.7rem;
                left: 6.4rem;
                width: 37rem;
                transform: scaleX(-1);
            }
        }

        &__deep {
            position: absolute;
            top: 106.6rem;
            left: -0.2rem;
            width: 44.53rem;

            video {
                width: 113%;
                top: -7rem;
                left: -4rem;

                @media (max-width: 768px) {
                    top: -12rem;
                    left: -7rem;
                }
            }

            @media (max-width: 768px) {
                top: 392.6rem;
                left: 3.8rem;
                width: 86.53rem;
            }
        }

        &__сolumns {
            position: absolute;
            top: 140rem;
            left: 40rem;
            width: 41rem;

            @media (max-width: 768px) {
                top: 336rem;
                left: 14rem;
                width: 95rem;
            }
        }

        &__bug {
            position: absolute;
            top: 165.5rem;
            left: 26.6rem;
            width: 12rem;
            transform: rotate(-28deg);


            @media (max-width: 768px) {
                top: 813.5rem;
                left: 29.6rem;
                width: 26rem;
                transform: rotate(-52deg);
            }
        }

        &__shrew {
            position: absolute;
            top: 176rem;
            left: 48rem;
            width: 24rem;
            transform: rotate(-9deg);


            @media (max-width: 768px) {
                top: 865rem;
                left: 58rem;
                width: 48rem;
            }
        }

        &__ant {
            position: absolute;
            top: 208rem;
            left: 42rem;
            width: 11rem;
            transform: rotate(84deg);


            @media (max-width: 768px) {
                top: 771rem;
                left: 70rem;
                width: 25rem;
                transform: rotate(92deg) scaleX(-1);
            }
        }

        &__fox {
            position: absolute;
            top: 184.6rem;
            left: 53rem;
            width: 44rem;

            video {
                width: 125%;
                top: -8rem;
                left: -6rem;

                @media (max-width: 768px) {
                    top: -15rem;
                    left: -10rem;
                }
            }

            @media (max-width: 768px) {
                top: 679.6rem;
                left: 11rem;
                width: 75rem;
            }
        }

        &__hare {
            position: absolute;
            top: 237rem;
            left: 19rem;
            width: 16rem;

            video {
                width: 176%;
                top: -5rem;
                left: -6rem;

                @media (max-width: 768px) {
                    width: 181%;
                    top: -11rem;
                    left: -13rem;
                }
            }

            @media (max-width: 768px) {
                top: 514rem;
                left: 62rem;
                width: 31rem;
            }
        }

        &__wolf {
            position: absolute;
            top: 215rem;
            left: 33rem;
            width: 67rem;

            video {
                width: 92%;
                top: -3rem;
                left: -3rem;

                @media (max-width: 768px) {
                    width: 90%;
                    top: -4rem;
                    left: -5rem;
                }
            }

            @media (max-width: 768px) {
                top: 888rem;
                left: 0rem;
                width: 115rem;
            }
        }

        &__siberian {
            position: absolute;
            top: 93rem;
            left: 78rem;
            width: 16rem;

            @media (max-width: 768px) {
                top: 276rem;
                left: 73rem;
                width: 33rem;
            }
        }

        &__puffy {
            position: absolute;
            top: 68rem;
            left: 72rem;
            width: 18rem;
            transform: scaleX(-1);


            @media (max-width: 768px) {
                top: 226rem;
                left: 22rem;
                width: 33rem;
            }
        }

        &__muscovite {
            position: absolute;
            top: 112rem;
            left: 69rem;
            width: 15rem;
            transform: scaleX(-1);

            @media (max-width: 768px) {
                top: 192rem;
                left: 67rem;
                width: 33rem;
            }
        }

        &__ermine {
            position: absolute;
            top: 268rem;
            left: 65rem;
            width: 34rem;

            @media (max-width: 768px) {
                top: 1093rem;
                left: 43rem;
                width: 62rem;
            }
        }

        &__gudgeon {
            position: absolute;
            top: 357rem;
            left: 31rem;
            width: 52rem;

            @media (max-width: 768px) {
                top: 1349rem;
                left: 6rem;
                width: 95rem;
            }
        }

        &__crane {
            position: absolute;
            top: 316rem;
            left: 4rem;
            width: 28rem;

            video {
                width: 200%;
                top: -18rem;
                left: -12rem;
                transform: scaleX(-1);

                @media (max-width: 768px) {
                    width: 190%;
                    top: -32rem;
                    left: -21rem;
                }
            }

            @media (max-width: 768px) {
                top: 1248rem;
                left: 3rem;
                width: 55rem;
            }
        }

        &__killer-whale {
            position: absolute;
            top: 343rem;
            left: 75rem;
            width: 20rem;

            video {
                width: 150%;
                top: -5rem;
                left: -5rem;

                @media (max-width: 768px) {
                    width: 157%;
                    top: -10rem;
                    left: -10rem;
                }
            }

            @media (max-width: 768px) {
                top: 1304rem;
                left: 57rem;
                width: 36rem;
                transform: scaleX(-1);
            }
        }

        &__mouse-2 {
            position: absolute;
            top: 285rem;
            left: 51rem;
            width: 20rem;

            @media (max-width: 768px) {
                top: 1008rem;
                left: -6rem;
                width: 50rem;
            }
        }

        &__mouse-3 {
            position: absolute;
            top: 294rem;
            left: -3rem;
            width: 20rem;
            transform: scaleX(-1);

            @media (max-width: 768px) {
                top: 543rem;
                left: 3rem;
                width: 37rem;
                transform: rotate(-8deg);
            }
        }

        &__grouse {
            position: absolute;
            top: 265rem;
            left: 28rem;
            width: 27rem;

            @media (max-width: 768px) {
                top: 644rem;
                left: 4rem;
                width: 48rem;

            }
        }

        &__wren {
            position: absolute;
            top: 269rem;
            left: -1rem;
            width: 25rem;

            @media (max-width: 768px) {
                top: 727rem;
                left: -4rem;
                width: 47rem;
            }
        }

        &__watercolor {
            position: absolute;
            top: 18rem;
            left: 2rem;
            width: 42rem;
            transform: rotate(154deg);
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 65rem;
                left: 16rem;
                width: 58rem;
            }
        }

        &__watercolor-2 {
            position: absolute;
            top: 88rem;
            left: 63rem;
            width: 35rem;
            transform: rotate(154deg);
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 262rem;
                left: -3rem;
                width: 59rem;
            }
        }

        &__watercolor-3 {
            position: absolute;
            top: 125rem;
            left: 0rem;
            width: 50rem;
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 425rem;
                width: 83rem;
            }
        }

        &__watercolor-4 {
            position: absolute;
            top: 294rem;
            left: 46rem;
            width: 43rem;
            mix-blend-mode: multiply;

            @media (max-width: 768px) {
                top: 1150rem;
                left: 37rem;
                width: 75rem;

            }
        }

        .eagle {
            width: 14rem;
            top: 30rem;
            left: 14rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 104rem;
                left: 16rem;
            }
        }

        .myxomycetes {
            width: 14rem;
            top: 159rem;
            left: 7rem;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .harrier {
            width: 14rem;
            top: 78rem;
            left: 5rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 31rem;
                left: 52rem;
            }
        }

        .puffy {
            width: 15rem;
            top: 79.5rem;
            right: 4rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 244rem;
                right: 15rem;
            }
        }

        .warbler {
            position: absolute;
            top: 100.5rem;
            left: 30.5rem;

            .dropdown-info__title {
                max-width: 10rem;
            }

            .dropdown-info__text {
                padding-top: 3.56rem;
            }

            @media (max-width: 768px) {
                top: 326rem;
                left: 33rem;
            }
        }

        .mottled-breast {
            width: 13rem;
            top: 102.5rem;
            right: 4.5rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 292rem;
                right: 1rem;
            }
        }

        .moskovka {
            width: 16rem;
            top: 119.5rem;
            right: 7rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                top: 194rem;
                right: 7rem;

                @media (max-width: 768px) {
                    display: block;

                    .dropdown-info__title {
                        max-width: unset;
                    }
                }
            }
        }

        .lily-dwarf {
            width: 16rem;
            top: 131rem;
            right: 40rem;

            @media (max-width: 768px) {
                width: 60rem;
                top: 494rem;
                right: 35rem;
            }
        }

        .rowan {
            width: 15rem;
            top: 162rem;
            right: 12rem;

            @media (max-width: 768px) {
                width: 50rem;
                top: 575rem;
                right: 37rem;
            }
        }

        .ground-beetle {
            width: 16rem;
            top: 164rem;
            left: 27rem;

            @media (max-width: 768px) {
                width: 46rem;
                top: 827rem;
                left: 51rem;
            }
        }

        .black-cohosh {
            width: 16rem;
            top: 220.5rem;
            left: 10rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 847rem;
                left: 5rem;
            }
        }

        .spiraea-average {
            width: 9rem;
            top: 225rem;
            right: 5rem;

            @media (max-width: 768px) {
                width: 18rem;
                top: 900rem;
                right: 6rem;
            }
        }

        .spotted-pipit {
            top: 270.5rem;
            left: 9.5rem;

            @media (max-width: 768px) {
                top: 723rem;
                left: 34rem;
                width: max-content;
            }
        }

        .grouse {
            width: 12.5rem;
            top: 272.5rem;
            left: 52rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 627rem;
                left: 13rem;
            }
        }

        .mouse {
            position: absolute;
            top: 292rem;
            right: 18rem;

            @media (max-width: 768px) {
                top: 1037rem;
                right: 34rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .krasodnev {
            width: 13rem;
            top: 292rem;
            left: 30rem;

            @media (max-width: 768px) {
                width: 48rem;
                top: 1077rem;
                left: 6rem;
            }
        }

        .slipper {
            width: 12rem;
            top: 306rem;
            right: 3rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 988rem;
                right: 19rem;
            }
        }

        .curlew {
            width: 13rem;
            top: 304rem;
            right: 39rem;

            @media (max-width: 768px) {
                width: 43rem;
                top: 1148rem;
                right: 2rem;
            }
        }

        .crane {
            width: 13rem;
            top: 321rem;
            left: 8rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 1259rem;
                left: 56rem;
            }
        }

        .ledum {
            width: 13rem;
            top: 327rem;
            left: 32rem;

            @media (max-width: 768px) {
                width: 43rem;
                top: 1162rem;
                left: 4rem;
            }
        }

        .hare {
            position: absolute;
            top: 245rem;
            left: 12rem;

            @media (max-width: 768px) {
                bottom: 885rem;
                left: 34rem;
                top: unset;

                .dropdown-info__title {
                    max-width: unset;
                }
            }

        }

        .dubrovnik {
            position: absolute;
            top: 60rem;
            right: 18rem;

            @media (max-width: 768px) {
                top: 161rem;
                right: 43rem;
            }
        }

        .siberian-deer {
            position: absolute;
            top: 122rem;
            left: 14rem;

            @media (max-width: 768px) {
                top: 419rem;
                left: 35rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .ants {
            position: absolute;
            bottom: 178rem;
            left: 43.6rem;

            @media (max-width: 768px) {
                bottom: 650rem;
                left: 61rem;
            }
        }

        .maksimovichs-vole {
            position: absolute;
            bottom: 80.5rem;
            left: 4.3rem;

            @media (max-width: 768px) {
                bottom: 865rem;
                left: 4rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .shrew {
            width: 10.5rem;
            top: 174rem;
            left: 54rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                bottom: 542rem;
                left: 64rem;

                @media (max-width: 768px) {
                    display: block;

                    .dropdown-info__title {
                        max-width: unset;
                    }
                }
            }
        }

        .killer-whale {
            position: absolute;
            bottom: 36rem;
            right: 22.5rem;

            @media (max-width: 768px) {
                bottom: 86rem;
                left: 61rem;
            }
        }

        .zooplankton-2 {
            position: absolute;
            bottom: 24rem;
            right: 47rem;

            @media (max-width: 768px) {
                bottom: 65.5rem;
                left: 24rem;
            }
        }

        .background {
            position: absolute;
            background-color: #fff;
            opacity: 0.8;
            mix-blend-mode: hard-light;
            filter: blur(30px);

            &-1 {
                bottom: 79rem;
                left: 5.5rem;
                width: 15.25rem;
                height: 3.417rem;
                background-color: #C3C3C3;

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &-2 {
                bottom: 22rem;
                left: 43.5rem;
                width: 12.25rem;
                height: 3.417rem;

                @media (max-width: 768px) {
                    bottom: 61rem;
                    left: 25.5rem;
                    width: 32.25rem;
                    height: 16.417rem;
                }
            }

            &-3 {
                bottom: 25rem;
                left: 64.5rem;
                width: 8.25rem;
                height: 3.417rem;

                @media (max-width: 768px) {
                    bottom: 42rem;
                    left: 56.5rem;
                    width: 28.25rem;
                    height: 11.417rem;
                }
            }

            &-4 {
                bottom: 13.5rem;
                right: 34.5rem;
                width: 7.25rem;
                height: 4.417rem;

                @media (max-width: 768px) {
                    bottom: 35.5rem;
                    right: 60.5rem;
                    width: 25.25rem;
                    height: 13.417rem;
                }
            }

            &-text {
                position: absolute;
                font-size: 1.04rem;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    font-size: 4rem;
                }

                &-1 {
                    bottom: 25.3rem;
                    left: 63.1rem;

                    @media (max-width: 768px) {
                        bottom: 44.3rem;
                        left: 62.1rem;
                        width: 32rem;
                    }
                }

                &-2 {
                    width: 9rem;
                    bottom: 14.5rem;
                    right: 31rem;

                    @media (max-width: 768px) {
                        bottom: 37.5rem;
                        right: 72rem;
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
                width: 27rem;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }
        }
    }

    &-factors {
        position: relative;
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
            position: absolute;
            bottom: 0;
            left: 30rem;
            width: 13.92588rem;
            height: 7.6875rem;

            @media (max-width: 768px) {
                position: relative;
                width: 50%;
                height: auto;
                margin-bottom: 0;
                left: 0;
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

            &:last-child {
                width: 24rem;

                @media (max-width: 768px) {
                    width: unset;
                }
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

    &__factors-img {
        margin: 0 auto;
        width: 68.6875rem;
        height: 30.5625rem;
    }

    .habitat-map {
        position: relative;
        margin-bottom: 4.5rem;

        @media (max-width: 768px) {
            height: unset;
        }

        &__wrap {
            position: absolute;
            top: 1rem;
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
            font-size: 1.53rem;
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

        &__legend {
            position: absolute;
            left: 7.37rem;
            top: 10.19rem;
            width: 14.4rem;

            @media (max-width: 768px) {
                display: none;
            }

            &-title {
                margin-bottom: 1rem;
                font-size: 1.04167rem;
                font-weight: 700;
                line-height: 130%;
            }

            &-text {
                font-size: 1.04167rem;
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

        &__city {
            position: absolute;
            width: 5rem;
            display: flex;
            flex-direction: column;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 130%;
            gap: 0.25rem;

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
                top: 33rem;
                left: 51rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 36rem;
                    left: 56rem;
                }
            }

            &-2 {
                left: 44.8rem;
                bottom: 13.3rem;

                @media (max-width: 768px) {
                    display: flex;
                    bottom: 36rem;
                    left: 23rem;
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
            width: 39.25rem;
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
                width: 29.375rem;

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

    .text-block__wrap a {
        text-decoration: 0.5px underline;
        text-decoration-skip-ink: none;
        text-underline-offset: 0.2rem;
    }

    &__new-ward {
        position: relative;
        border-radius: 19px;
        border: 1px solid var(--grey, #626261);
        width: 67.09rem;
        padding: 4.378rem 3.34rem 2.777rem 16rem;
        margin: 0 auto;
        display: flex;
        gap: 3rem;

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
            width: 11.5rem;
            height: auto;
            top: 5rem;
            left: 1.81rem;
            z-index: 1;

            @media (max-width: 768px) {
                width: 35rem;
                left: 23.5rem;
                top: -13.5rem;
            }
        }
    }
}
</style>
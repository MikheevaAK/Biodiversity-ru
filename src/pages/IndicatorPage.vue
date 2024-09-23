<template>
    <div class="indicator">
        <BaseHero title="Загадочный ИПСЭ" :descr="heroDescr" :img="'img/hero9.jpg'"
            :imgMobile="'img/hero9-mobile.jpg'" />
        <MainSection>
            <BaseTextBlock class="mb-40" title="Суть метода">
                Начиная с&nbsp;2022 года на&nbsp;территориях вокруг промышленных площадок &laquo;Норникеля&raquo;
                специалисты собирают сведения о&nbsp;состоянии различных компонентов наземных и&nbsp;водных экосистем:
                флоры, фауны и&nbsp;почв.
            </BaseTextBlock>

            <section class="scroll mb-100">
                <div class="scroll-bg bg-1"></div>
                <div class="scroll-bg bg-2"></div>
                <div class="scroll-bg bg-3"></div>
                <div class="scroll-wrap">
                    <div class="scroll-card card-1 text-block__descr">
                        <BaseTextBlock title="Сбор данных в зонах воздействия">
                            Для животных и&nbsp;растений это показатели видового разнообразия и&nbsp;обилия индикаторных
                            групп. Для рек, озёр и&nbsp;почв&nbsp;&mdash; содержание тех или&nbsp;иных химических
                            элементов,
                            присутствие живых организмов и&nbsp;т.&nbsp;п.
                        </BaseTextBlock>
                    </div>
                    <div class="scroll-card card-2 text-block__descr">
                        <BaseTextBlock title="Сбор данных на фоновых территориях">
                            Такая работа проводится не&nbsp;только в&nbsp;зонах промышленного воздействия,
                            но&nbsp;и&nbsp;на&nbsp;фоновых площадках&nbsp;&mdash; там, где экосистемы сохранились
                            в&nbsp;первозданном виде. Показатели фоновых площадок при этом принимаются
                            за&nbsp;&laquo;норму&raquo;.
                        </BaseTextBlock>
                    </div>
                    <div class="scroll-card card-3 text-block__descr">
                        <BaseTextBlock title="Сопоставление данных">
                            <p class="mb-10">
                                Собранные в&nbsp;зонах воздействия данные сравниваются с&nbsp;фоновыми показателями. Так
                                удаётся получить информацию о&nbsp;состоянии экосистем на&nbsp;территориях вокруг
                                промышленных объектов &laquo;Норникеля&raquo; и&nbsp;узнать, есть&nbsp;ли отклонения
                                от&nbsp;&laquo;нормы&raquo;.
                            </p>
                            <p>
                                Поскольку реакция на&nbsp;антропогенное воздействие у&nbsp;разных организмов может
                                отличаться, для более точного результата при расчёте ИПСЭ учитываются показатели
                                по&nbsp;целому комплексу индикаторных групп и&nbsp;видов. Для фоновых территорий ИПСЭ
                                априори принимается за&nbsp;единицу.
                            </p>
                        </BaseTextBlock>
                    </div>
                </div>
            </section>

            <BaseTextBlock class="mb-40" title="Как считается ИПСЭ дивизиона">
                <p class="mb-10">
                    Отклонение от&nbsp;фона просчитывается для каждого индикатора в&nbsp;отдельности по&nbsp;каждой зоне
                    воздействия:
                    Показатель зоны&nbsp;/ Показатель фона = Коэффициент индикатора в&nbsp;зоне.
                </p>
                <p>
                    Полученные результаты суммируются, а&nbsp;затем делятся на&nbsp;общее количество индикаторов.
                    Получаем
                    ИПСЭ в&nbsp;зоне воздействия.
                </p>
            </BaseTextBlock>

            <section class="indicator__calculation">
                <div class="indicator__calculation-circle indicator__calculation-circle-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
                        <circle cx="57.5" cy="57.5" r="57.5" fill="#D38235" />
                    </svg>
                    <div class="indicator__calculation-circle-1-number indicator__calculation-circle-number">1,6</div>
                </div>

                <div class="indicator__calculation-circle indicator__calculation-circle-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <circle cx="29" cy="29" r="29" fill="#F9C492" />
                    </svg>
                    <div class="indicator__calculation-circle-2-number indicator__calculation-circle-number">0,8</div>
                </div>

                <div class=" indicator__calculation-circle indicator__calculation-circle-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                        <circle cx="44" cy="44" r="44" fill="#A3550C" />
                    </svg>
                    <div class="indicator__calculation-circle-3-number indicator__calculation-circle-number">1,2</div>
                </div>

                <div class="indicator__calculation-circle-num">
                    3,6
                </div>

                <div class="indicator__calculation-circle-4">
                    <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.5" r="57.5" fill="url(#paint0_linear_2510_20796)" />
                        <path
                            d="M35.2872 39H34.2792V26.994H35.3052V37.164L42.8292 26.994H43.8732V39H42.8472V28.686L35.2872 39ZM56.5491 39H55.5051V27.93H47.8911V39H46.8651V26.994H56.5491V39ZM65.1553 39.216C61.7533 39.216 59.0713 36.696 59.0713 33.006C59.0713 29.316 61.7533 26.796 65.1553 26.796C67.0633 26.796 68.5033 27.642 69.5293 28.92L68.6653 29.478C67.9093 28.434 66.5953 27.732 65.1553 27.732C62.3293 27.732 60.1513 29.874 60.1513 33.006C60.1513 36.102 62.3293 38.28 65.1553 38.28C66.5953 38.28 67.9093 37.578 68.6653 36.534L69.5293 37.074C68.4673 38.388 67.0633 39.216 65.1553 39.216ZM75.0891 39.216C73.1631 39.216 71.7771 38.388 70.6971 37.074L71.5611 36.534C72.3351 37.578 73.6491 38.28 75.0891 38.28C77.8071 38.28 79.9311 36.246 80.0571 33.312H73.3251V32.376H80.0391C79.7691 29.604 77.6991 27.732 75.0891 27.732C73.6491 27.732 72.3351 28.434 71.5611 29.478L70.7151 28.92C71.7231 27.642 73.1631 26.796 75.0891 26.796C78.4731 26.796 81.1731 29.316 81.1731 33.006C81.1731 36.696 78.4731 39.216 75.0891 39.216ZM41.1607 56.216C39.4327 56.216 38.1727 55.676 37.2907 54.776L37.7767 54.164C38.5867 54.992 39.7567 55.406 41.1607 55.406C42.8707 55.406 44.0407 54.722 44.0407 53.642C44.0407 52.4 42.6367 51.986 40.9807 51.986H38.9647V51.194H40.9807C42.5287 51.194 43.8787 50.654 43.8787 49.484C43.8787 48.53 42.6187 47.9 40.9987 47.9C39.7207 47.9 38.7487 48.26 37.9927 49.052L37.4527 48.476C38.2627 47.666 39.3787 47.09 40.9627 47.09C43.1587 47.09 44.8687 47.918 44.8687 49.412C44.8687 50.78 43.4647 51.446 42.4927 51.572C43.4827 51.644 45.0487 52.22 45.0487 53.696C45.0487 55.136 43.6267 56.216 41.1607 56.216ZM51.1427 56.216C48.6047 56.216 46.9667 54.182 46.9667 51.644C46.9667 49.106 48.6047 47.09 51.1427 47.09C53.7167 47.09 55.3367 49.106 55.3367 51.644C55.3367 54.182 53.7167 56.216 51.1427 56.216ZM51.1427 55.37C53.1947 55.37 54.3287 53.588 54.3287 51.644C54.3287 49.718 53.1947 47.936 51.1427 47.936C49.1267 47.936 47.9747 49.718 47.9747 51.644C47.9747 53.588 49.1267 55.37 51.1427 55.37ZM58.6899 56H57.7539V47.306H58.6899V51.086H63.6219V47.306H64.5579V56H63.6219V51.914H58.6899V56ZM67.4746 47.306H68.4106V50.852H71.7946C73.5226 50.852 74.4406 52.04 74.4406 53.426C74.4406 54.812 73.5226 56 71.7946 56H67.4746V47.306ZM71.7226 51.68H68.4106V55.154H71.7226C72.8566 55.154 73.4506 54.434 73.4506 53.426C73.4506 52.418 72.8746 51.68 71.7226 51.68ZM76.8706 56H75.9166V47.306H76.8706V56Z"
                            fill="white" />
                        <path
                            d="M48.27 88H44.76V72.55L41.49 75.94L39.45 73.81L45.21 67.99H48.27V88ZM56.3365 86.86C56.3365 88.93 55.1665 90.82 53.5165 91.99L52.1065 90.82C53.0665 90.25 54.0565 89.02 54.2665 88C54.1765 88.03 53.9365 88.09 53.7565 88.09C52.7365 88.09 51.9565 87.31 51.9565 86.2C51.9565 85.06 52.8865 84.13 53.9965 84.13C55.2265 84.13 56.3365 85.12 56.3365 86.86ZM73.74 88H59.25V85.24C67.02 79.36 70.05 76.75 70.05 73.87C70.05 71.77 68.25 70.81 66.42 70.81C64.08 70.81 62.28 71.77 61.02 73.21L58.98 70.9C60.75 68.77 63.57 67.69 66.36 67.69C70.23 67.69 73.62 69.88 73.62 73.87C73.62 77.56 70.23 80.86 64.86 84.91H73.74V88Z"
                            fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_2510_20796" x1="136.5" y1="69.5" x2="0.0237397"
                                y2="67.6998" gradientUnits="userSpaceOnUse">
                                <stop offset="0.147404" stop-color="#A3550C" />
                                <stop offset="0.489005" stop-color="#D38235" />
                                <stop offset="0.942814" stop-color="#F9C492" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="indicator__calculation-steps">
                    <div class="indicator__calculation-step indicator__calculation-step-1">
                        <div class="indicator__calculation-step-number">1</div>
                        <div class="indicator__calculation-step-descr">
                            Просчитываем отклонения для каждого индикатора
                            в&nbsp;зоне воздействия
                        </div>
                    </div>
                    <div class="indicator__calculation-step indicator__calculation-step-2">
                        <div class="indicator__calculation-step-number">2</div>
                        <div class="indicator__calculation-step-descr">
                            Суммируем все коэффициенты
                        </div>
                    </div>
                    <div class="indicator__calculation-step indicator__calculation-step-3">
                        <div class="indicator__calculation-step-number">3</div>
                        <div class="indicator__calculation-step-descr">
                            Делим сумму на&nbsp;количество индикаторов
                            в&nbsp;зоне
                        </div>
                    </div>
                </div>
            </section>
            <BaseTextBlock class="mb-60">
                <p>
                    Если принять ИПСЭ фона = 1, то&nbsp;для зон воздействия возможны три варианта:
                </p>
                <div class="indicator__comparison">
                    <div class="indicator__comparison-item">
                        <div class="indicator__comparison-num">
                            ИПСЭ зоны = 1
                        </div>
                        <div class="indicator__comparison-text">
                            соответствие фону в&nbsp;конкретной зоне воздействия
                        </div>
                    </div>
                    <div class="indicator__comparison-item">
                        <div class="indicator__comparison-num">
                            ИПСЭ зоны &#60; 1
                        </div>
                        <div class="indicator__comparison-text">
                            в&nbsp;рассматриваемой зоне воздействия отмечаются условные потери биоразнообразия
                        </div>

                    </div>
                    <div class="indicator__comparison-item">
                        <div class="indicator__comparison-num">
                            ИПСЭ зоны > 1
                        </div>
                        <div class="indicator__comparison-text">
                            условный прирост биоразнообразия в&nbsp;рассматриваемой зоне воздействия
                        </div>
                    </div>
                </div>
            </BaseTextBlock>

            <BaseTextBlock class="mb-60">
                <p class="mb-10">
                    ИПСЭ дивизиона&nbsp;&mdash; это средневзвешенное значение ИПСЭ во&nbsp;всех зонах воздействия,
                    с&nbsp;учётом ширины каждой зоны.
                </p>
                <p class="mb-10">
                    Дело в&nbsp;том, что в&nbsp;разных дивизионах характер деятельности предприятий может отличаться,
                    соответственно, может отличаться и&nbsp;ширина зон воздействия объектов. Если не&nbsp;учитывать эту
                    особенность, то&nbsp;сравнивать ИПСЭ дивизионов между
                    собой некорректно.
                </p>
                <p>
                    Поправка на&nbsp;ширину служит &laquo;усреднителем&raquo; в&nbsp;этих сложных математических
                    вычислениях.
                </p>
            </BaseTextBlock>

            <div class="indicator__block">
                <BaseTextQuotes>
                    <p class="mb-10">
                        Как правило, от&nbsp;промышленного воздействия заметно страдают те&nbsp;территории, которые
                        находятся в&nbsp;непосредственной близости от&nbsp;предприятий&nbsp;&mdash; в&nbsp;зонах
                        интенсивного воздействия. В&nbsp;зонах умеренного или&nbsp;незначительного
                        воздействия ситуация может слабо отличаться от&nbsp;фоновой, а&nbsp;временами быть даже лучше.
                    </p>
                    <p class="mb-10">
                        Так, например, локальное увеличение разнообразия может быть связано с&nbsp;новыми экологическими
                        нишами, которые появляются в&nbsp;результате деятельности человека (например, искусственные
                        водоёмы или&nbsp;изменение микроландшафта, замена деревьев кустарниками).
                        Хорошо это или&nbsp;плохо для&nbsp;экосистемы, ответ не&nbsp;всегда однозначен.
                    </p>
                    <p>
                        Например, в&nbsp;Забайкалье для расчистки территорий под&nbsp;промышленные нужды пришлось
                        вырубать деревья. В&nbsp;местах вырубки стали интенсивно расти молодые деревья
                        и&nbsp;кустарники, что&nbsp;привлекло много косуль. Парнокопытные были рады обилию
                        корма, индекс биоразнообразия был высок. Но&nbsp;учёные сказали, что&nbsp;так&nbsp;работает
                        иммунитет природы: по&nbsp;аналогии с&nbsp;человеком, в&nbsp;местах ран скапливаются кровяные
                        тельца для&nbsp;их&nbsp;заживления.
                    </p>
                </BaseTextQuotes>

                <video @loadeddata="videoLoaded" autoplay loop muted playsinline>
                    <source src="video/deep.mov" type="video/mp4">
                    <source src="video/deep.webm" type="video/webm">
                </video>
                <picture v-if="!isLoadingOne">
                    <source type="image/webp" srcset="img/deep.webp">
                    <img loading="lazy" src="img/deep.png" alt="">
                </picture>
            </div>

            <picture>
                <source type="image/webp" srcset="img/indicator-deer-mobile.webp">
                <img loading="lazy" class="indicator__deer mb-100" src="img/indicator-deer-mobile.png">
            </picture>

            <BaseTextBlock title="Наблюдения во времени">
                <p class="mb-10">
                    Метод показывает свою эффективность как&nbsp;при&nbsp;оценке ситуации за&nbsp;конкретный год, так
                    и&nbsp;в&nbsp;динамике,&nbsp;&mdash; всё зависит от&nbsp;задач. В&nbsp;первом случае
                    он&nbsp;позволяет выявлять и&nbsp;уточнять границы поясов воздействия.
                </p>
                <p class="mb-10">
                    Во&nbsp;втором&nbsp;&mdash; изменение ИПСЭ во&nbsp;времени (∆ ИПСЭ) помогает определить условные
                    потери или прирост биоразнообразия из-за&nbsp;производственной деятельности от&nbsp;года
                    к&nbsp;году. А&nbsp;по&nbsp;прошествии нескольких лет ИПСЭ позволит
                    сделать ретроспективный анализ.
                </p>
                <p>
                    Именно поэтому компания намерена регулярно проводить исследования по&nbsp;аналогичным параметрам
                    и&nbsp;по&nbsp;единым методикам. Это поможет отследить, насколько эффективной окажется
                    её&nbsp;работа по&nbsp;сохранению экосистем, и&nbsp;при необходимости
                    принять меры.
                </p>
            </BaseTextBlock>

            <picture>
                <source media="(max-width: 768px)" srcset="img/indicator-schedule-mobile.png">
                <source type="image/webp" srcset="img/indicator-schedule.webp">
                <img loading="lazy" class="indicator__schedule" src="img/indicator-schedule.png">
            </picture>

            <BaseTextBlock class="mb-100" title="Природное или&nbsp;техногенное воздействие?">
                Отличить сокращение численности индикаторных групп или&nbsp;вида по&nbsp;естественным причинам
                от&nbsp;тех, что связаны с&nbsp;промышленным воздействием, не&nbsp;всегда бывает просто. Чтобы сделать
                это, учёные проводят наблюдения на&nbsp;разных участках
                изучаемой территории.
            </BaseTextBlock>

            <section class="scroll-2 mb-80">
                <div class="scroll-2-bg bg-4"></div>
                <div class="scroll-2-bg bg-5"></div>
                <div class="scroll-2-bg bg-6"></div>
                <div class="scroll-2-wrap">
                    <div class="scroll-2-card card-4 text-block__descr">
                        Значительные колебания численности видов могут отмечаться не&nbsp;только в&nbsp;зоне воздействия
                        предприятий, но&nbsp;и&nbsp;на&nbsp;фоновых территориях. Это также важно учитывать при расчётах.
                        Отличия в&nbsp;динамике этих колебаний на&nbsp;фоновой площадке
                        от&nbsp;динамики в&nbsp;зоне воздействия и&nbsp;позволяют сделать выводы.
                    </div>
                    <div class="scroll-2-card card-5 text-block__descr">
                        Если в&nbsp;зоне воздействия численность падает, и&nbsp;на&nbsp;фоновой площадке
                        тоже&nbsp;&mdash; это естественное колебание.
                    </div>
                    <div class="scroll-2-card card-6 text-block__descr">
                        В&nbsp;зоне воздействия падает, а&nbsp;на&nbsp;фоновой площадке стабильно&nbsp;&mdash; значит,
                        причина в&nbsp;деятельности предприятия.
                    </div>
                </div>
            </section>

            <BaseTextQuotes class="mb-100">
                Уровень воды в&nbsp;реке может заметно повыситься относительно многолетних значений из-за аномально
                снежной зимы. В&nbsp;результате паводка под водой окажутся те&nbsp;территории, которые обычно
                не&nbsp;затапливает. На&nbsp;биоразнообразии это скажется
                негативно, однако причины у&nbsp;таких изменений будут исключительно природными.
            </BaseTextQuotes>

            <BaseTextBlock class="mb-60" title="Особенности ИПСЭ">
                Уже первый год работы с&nbsp;ИПСЭ показал, что это действенный, но&nbsp;не&nbsp;универсальный метод.
                Например, он&nbsp;хорошо показывает изменения для массовых индикаторных видов, а&nbsp;вот для оценки
                ситуации с&nbsp;малочисленными видами практически
                не&nbsp;применим. Учёные нередко сравнивают ИПСЭ с&nbsp;градусником, который врачи используют для замера
                температуры у&nbsp;пришедшего к&nbsp;ним на&nbsp;приём человека. ИПСЭ показывает симптом,
                а&nbsp;не&nbsp;причину. Чтобы разобраться, почему
                изменяется биоразнообразие, нужно смотреть на&nbsp;детали.
            </BaseTextBlock>

            <div class="indicator__drop mb-60">
                <div class="indicator__drop-wrap">
                    <div class="indicator__drop-text">
                        Снижение ИПСЭ&nbsp;&mdash; повод рассмотреть ситуацию поближе, провести анализ и&nbsp;обосновать
                        выводы. А&nbsp;это всегда требует времени. Другими словами, негативная динамика (∆)
                        ИПСЭ&nbsp;&mdash; это не&nbsp;приговор, а&nbsp;сигнал к&nbsp;действию.
                    </div>
                </div>
            </div>

            <BaseTextQuotes class="mb-60 indicator__impact">
                В&nbsp;Норильске в&nbsp;зоне интенсивного воздействия энтомологи обнаружили огромную по&nbsp;сравнению
                с&nbsp;другими участками численность жужелиц. На&nbsp;первый взгляд&nbsp;&mdash; это хороший показатель.
                Однако причиной оказалась вспышка массового
                размножения одного вида жуков. Такое событие часто связано с&nbsp;тем, что почвенные насекомые осваивают
                новые места обитания. Это не&nbsp;всегда говорит о&nbsp;благополучии экосистемы, поскольку может
                происходить, например, из-за нарушения
                естественного микроландшафта при&nbsp;горных разработках. Подобные факторы вносят искажения
                в&nbsp;научные наблюдения, и&nbsp;для анализа каждого такого случая нужны очень узкие экспертные знания.
                Обосновать такие выводы могут только учёные.
            </BaseTextQuotes>

            <BaseTextBlock class="mb-100">
                В&nbsp;&laquo;Норникеле&raquo; надеются, что ИПСЭ поможет выстроить рабочую систему управления
                воздействием на&nbsp;биоразнообразие и&nbsp;в&nbsp;перспективе добиться отсутствия нетто-потерь
                биоразнообразия, а&nbsp;в&nbsp;идеале&nbsp;&mdash; его чистого
                прироста.
            </BaseTextBlock>

            <BaseSidebar>
                <p class="mb-10">
                    &laquo;Норникель&raquo; стал первой компанией в&nbsp;России, которая &laquo;оцифровала&raquo; такое
                    многоликое биоразнообразие. ИПСЭ позволяет быстро и&nbsp;эффективно оценивать состояние экосистем,
                    улавливать как негативные, так и&nbsp;позитивные изменения.
                </p>
                <p>
                    Это поможет компании оперативно проводить мероприятия для&nbsp;снижения негативного воздействия
                    на&nbsp;окружающую среду и&nbsp;принимать наилучшие решения, которые способствуют восстановлению
                    биоразнообразия и&nbsp;оздоровлению экосистем.
                </p>
            </BaseSidebar>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseTextQuotes from '@/components/BaseTextQuotes.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        BaseTextQuotes,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
    },
    data() {
        return {
            isLoadingOne: false,
            oneScrollTrigger: null,
            twoScrollTrigger: null,
            threeScrollTrigger: null,
            heroDescr: 'Как оценить состояние экосистемы? Как&nbsp;отличить естественные процессы в&nbsp;сообществе живых организмов от&nbsp;изменений, которые происходят под&nbsp;влиянием антропогенных и&nbsp;техногенных факторов? &laquo;Норникель&raquo; уделяет большое внимание сохранению биоразнообразия, и&nbsp;для&nbsp;него это важные вопросы. Чтобы&nbsp;получить на&nbsp;них ответ и&nbsp;эффективно отслеживать изменения, компания поручила учёным разработать показатель для оценки состояния экосистем. И&nbsp;учёные разработали для компании Интегральный показатель состояния экосистем, сокращённо&nbsp;&mdash; ИПСЭ.'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation()
        })
    },
    beforeDestroy() {
        this.oneScrollTrigger.kill()
        this.oneScrollTrigger = null

        this.twoScrollTrigger.kill()
        this.twoScrollTrigger = null

        this.threeScrollTrigger.kill()
        this.threeScrollTrigger = null
    },
    methods: {
        videoLoaded() {
            this.isLoadingOne = true;
        },
        scrollMobile() {
            const collageItems = Array.from(document.querySelectorAll(".scroll-bg.active"))

            collageItems.forEach((elem) => {
                elem.css('background-position', '0px ' + document.scrollTop() + 'px')
            })

            const collageItems2 = Array.from(document.querySelectorAll(".scroll-2-bg.active"))

            collageItems2.forEach((elem) => {
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

            const quotesItems = Array.from(document.querySelectorAll(".text-quotes"));
            quotesItems.forEach((elem) => {
                gsap.fromTo(elem, {
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

            if (window.innerWidth <= 768) {
                this.scrollMobile()
            }

            this.oneScrollTrigger = gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".scroll",
                    start: '0%',
                    scrub: true,
                    toggleClass: { className: "active", targets: ".scroll-bg" }
                },
            })

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
                    start: () => "+=100%",
                    end: () => "+=" + (document.querySelector(".scroll-wrap").offsetHeight),
                    // markers: true,
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-bg" }
                },
            });

            this.animationBlock()

            this.twoScrollTrigger = gsap.to(".scroll-2-bg", {
                scrollTrigger: {
                    trigger: ".scroll-2",
                    start: 'top 20%',
                    scrub: true,
                    // markers: true,
                    toggleClass: { className: "active", targets: ".scroll-2-bg" }
                },
            })

            gsap.fromTo(".bg-4", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-4",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-5',
                    // markers: true,
                    scrub: true
                },

            });
            gsap.fromTo(".bg-5", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-5",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-6',
                    // markers: true,
                    scrub: true
                },

            });

            gsap.to(".scroll-2-bg", {
                scrollTrigger: {
                    trigger: ".card-6",
                    start: () => "+=180%",
                    end: () => "+=" + (document.querySelector(".scroll-2-wrap").offsetHeight),
                    // markers: true,
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-2-bg" }
                },
            });
        },
        animationBlock() {
            if (window.innerWidth > 768) {
                this.threeScrollTrigger = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".indicator__calculation",
                        start: 'top 10%',
                        end: '600%',
                        // markers: true,
                        pin: true,
                        scrub: true,
                    },
                })

                this.threeScrollTrigger.to(".indicator__calculation-circle", { xPercent: 170 })
                    .to(".indicator__calculation-circle", { xPercent: 200, opacity: 0 })
                    .to(".indicator__calculation-circle-1", { xPercent: 370, yPercent: 70 })
                    .to(".indicator__calculation-circle-2", { xPercent: 492, yPercent: 0 }, "<")
                    .to(".indicator__calculation-circle-3", { xPercent: 483, yPercent: -80 }, "<")
                    .to(".indicator__calculation-circle-number", { display: "none" }, "<")
                    .to(".indicator__calculation-step-2", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle", { opacity: 1 })
                    .to(".indicator__calculation-circle-1", { opacity: 1, repeat: 0, rotation: 360, transformOrigin: "50px 10%", ease: "linear", })
                    .to(".indicator__calculation-circle-2", { opacity: 1, repeat: 0, rotation: 360, transformOrigin: "10px 70%", ease: "linear", }, "<")
                    .to(".indicator__calculation-circle-3", { opacity: 1, repeat: 0, rotation: 360, transformOrigin: "30px 50%", ease: "linear", }, "<")
                    .to(".indicator__calculation-circle-num", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle", { opacity: 0 })
                    .to(".indicator__calculation-circle-num", { opacity: 1 }, "<")
                    .to(".indicator__calculation-step-3", { opacity: 1 })
                    .to(".indicator__calculation-circle-4", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle-4", { xPercent: 150 })

            } else {
                this.threeScrollTrigger = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".indicator__calculation",
                        start: 'top 10%',
                        end: '600%',
                        // markers: true,
                        pin: true,
                        scrub: true,
                    },
                })

                this.threeScrollTrigger.to(".indicator__calculation-circle", { yPercent: 170 })
                    .to(".indicator__calculation-circle", { yPercent: 200, opacity: 0 })
                    .to(".indicator__calculation-circle-1", { yPercent: 350, xPercent: -95 })
                    .to(".indicator__calculation-circle-2", { yPercent: 492, xPercent: 0 }, "<")
                    .to(".indicator__calculation-circle-3", { yPercent: 450, xPercent: 130 }, "<")
                    .to(".indicator__calculation-circle-number", { display: "none" }, "<")
                    .to(".indicator__calculation-step-1", { display: "none", opacity: 0 }, "<")
                    .to(".indicator__calculation-step-2", { display: "block", opacity: 1 })
                    .to(".indicator__calculation-circle", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle-1", { opacity: 1, repeat: 0, rotation: -360, transformOrigin: "30px 10%", ease: "linear", })
                    .to(".indicator__calculation-circle-2", { opacity: 1, repeat: 0, rotation: -360, transformOrigin: "10px 70%", ease: "linear", }, "<")
                    .to(".indicator__calculation-circle-3", { opacity: 1, repeat: 0, rotation: -360, transformOrigin: "20px 40%", ease: "linear", }, "<")
                    .to(".indicator__calculation-circle-num", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle", { opacity: 0 })
                    .to(".indicator__calculation-circle-num", { opacity: 1 }, "<")
                    .to(".indicator__calculation-step-2", { display: "none", opacity: 0 }, "<")
                    .to(".indicator__calculation-step-3", { display: "block", opacity: 1 })
                    .to(".indicator__calculation-circle-4", { opacity: 1 }, "<")
                    .to(".indicator__calculation-circle-4", { yPercent: 50 })

            }
        }

    }
}
</script>

<style lang="scss">
.indicator {
    .hero {
        @media (max-width: 768px) {
            min-height: unset;
            height: 206rem;
        }
    }

    .sidebar {
        width: 50rem;

        @media (max-width: 768px) {
            width: unset;
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
            background-position: bottom 3rem right 0;
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
                    background-position: 0 348vh;
                    background-size: contain;

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-1 {
                z-index: 3;
                background-image: url(../../public/img/indicator-1.jpg);
            }

            &.bg-2 {
                z-index: 2;
                background-image: url(../../public/img/indicator-2.jpg);
            }

            &.bg-3 {
                z-index: 1;
                background-image: url(../../public/img/indicator-3.jpg);
            }

            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/indicator-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/indicator-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/indicator-3-mobile.jpg);
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

            .text-block__wrap {
                padding: 0;
            }

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

            .text-block__wrap {
                width: 100%;
            }
        }
    }

    &__calculation {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 5.55556rem;
        width: 100%;
        height: 43.4723rem;
        background-image: url(../../public/img/indicator-bg.svg);
        background-repeat: no-repeat;
        background-position: center 5.55556rem;
        background-size: 68.3334rem 23.4723rem;

        @media (max-width: 768px) {
            height: 181.3334rem;
            padding: 0 0 13rem 0;
            background-image: url(../../public/img/indicator-bg-mobile.svg);
            background-position: center 6rem;
            background-size: 66rem 142rem;
        }

        &-steps {
            display: flex;
            gap: 8rem;
            width: 68.3rem;

            @media (max-width: 768px) {
                position: relative;
                width: 59.3rem;
                height: 58px;
            }
        }

        &-step {
            display: flex;
            align-items: center;
            gap: 0.556rem;
            color: #A46A32;
            opacity: 0.2;

            @media (max-width: 768px) {
                position: absolute;
                display: none;
                opacity: 0;
            }

            &-number {
                font-size: 4.16667rem;
                font-weight: 300;
                line-height: 130%;

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &-descr {
                font-size: 1.25rem;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    font-size: 4rem;
                    text-align: center;
                }
            }
        }

        &-step-1 {
            opacity: 1;
            width: 29rem;

            @media (max-width: 768px) {
                display: block;
                width: unset;
            }
        }

        &-circle-1 {
            position: absolute;
            width: 7.9866rem;
            height: 7.9866rem;
            top: 6.5972rem;
            left: 17.56945rem;

            @media (max-width: 768px) {
                width: 19rem;
                height: 19rem;
                top: 8rem;
                left: 65rem;
            }

            &-number {
                position: absolute;
                top: 2.7778rem;
                left: 2.7778rem;
                font-size: 2.08333rem;
                color: #fff;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    top: 6.5rem;
                    left: 6.5rem;
                    font-size: 5rem;
                }
            }
        }

        &-circle-2 {
            position: absolute;
            width: 4.028rem;
            height: 4.028rem;
            top: 15.06944rem;
            left: 25rem;

            @media (max-width: 768px) {
                width: 11rem;
                height: 11rem;
                top: 16rem;
                left: 44.5rem;
            }

            &-number {
                position: absolute;
                top: 0.764rem;
                left: 0.4861rem;
                font-size: 2.08333rem;
                color: #fff;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    top: 2.5rem;
                    left: 2rem;
                    font-size: 5rem;
                }
            }
        }

        &-circle-3 {
            position: absolute;
            width: 6.1112rem;
            height: 6.1112rem;
            top: 20.55556rem;
            left: 17rem;

            @media (max-width: 768px) {
                width: 14.4rem;
                height: 14.4rem;
                top: 10rem;
                left: 18rem;
            }

            &-number {
                position: absolute;
                top: 1.80555rem;
                left: 1.80555rem;
                font-size: 2.08333rem;
                color: #fff;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    top: 4rem;
                    left: 4rem;
                    font-size: 5rem;
                }
            }
        }

        &-circle-4 {
            position: absolute;
            width: 7.9866rem;
            height: 7.9866rem;
            top: 13.26388rem;
            left: 61.9rem;
            opacity: 0;

            @media (max-width: 768px) {
                width: 20rem;
                height: 20rem;
                top: 117rem;
                left: 40rem;
            }
        }

        &-circle-num {
            position: absolute;
            top: 15.7rem;
            left: 48.1rem;
            font-size: 2.08333rem;
            color: #fff;
            font-weight: 600;
            line-height: 130%;
            opacity: 0;

            @media (max-width: 768px) {
                top: 80rem;
                left: 46rem;
                font-size: 5rem;
            }
        }
    }

    &__comparison {
        margin-top: 2.2222rem;
        display: flex;
        flex-direction: column;
        gap: 1.6667rem;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            margin-top: 6.4rem;
            gap: 6.4rem;
            font-size: 4.53334rem;
        }

        &-item {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;
            }
        }

        &-num {
            margin-right: 1.6rem;
            width: 10rem;
            height: 1.7rem;
            padding: 0.1rem 0.7rem;
            border-radius: 20px;
            color: #FFF;
            font-weight: 600;
            flex-shrink: 0;
            background: linear-gradient(270deg, #A3550C -42.51%, #D38235 19.39%, #F9C492 114.21%), #CEEDFF;

            @media (max-width: 768px) {
                margin-right: 0;
                margin-bottom: 3.2rem;
                width: 37rem;
                height: 6.4rem;
                padding: 0.5rem 2rem;
            }
        }
    }

    .scroll-2 {
        position: relative;
        width: 100%;

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            height: 100vh;
            background-position: top;
            background-size: 68.34rem 32.23rem;
            background-repeat: no-repeat;

            @media (max-width: 768px) {
                background-position: center;
                background-size: 100%;
            }

            &.active {
                background-attachment: fixed;
                background-position: center;
                height: 100%;

                @media (max-width: 768px) {
                    height: 100%;
                    background-size: 100%;
                    position: fixed;
                    background-attachment: unset;
                }

                &.remove-active {
                    background-attachment: unset;
                    background-position: 15.9rem 325vh;
                    background-size: 68.34rem 32.23rem;

                    @media (max-width: 768px) {
                        background-position: 0rem 360vh;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-4 {
                z-index: 3;
                background-image: url(../../public/img/impact-zone-1.jpg);
            }

            &.bg-5 {
                z-index: 2;
                background-image: url(../../public/img/impact-zone-2.jpg);
            }

            &.bg-6 {
                z-index: 1;
                background-image: url(../../public/img/impact-zone-3.jpg);
            }

            @media (max-width: 768px) {
                &.bg-4 {
                    background-image: url(../../public/img/impact-zone-1-mobile.jpg);
                }

                &.bg-5 {
                    background-image: url(../../public/img/impact-zone-2-mobile.jpg);
                }

                &.bg-6 {
                    background-image: url(../../public/img/impact-zone-3-mobile.jpg);
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
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 100vh;
            width: 41rem;
            border-radius: 0.25rem;
            background: #FFF;
            text-align: center;

            .text-block__wrap {
                padding: 0;
            }

            &:first-child {
                margin-top: 50vh;
            }

            @media (max-width: 768px) {
                padding: 4.2666rem;
                margin: 0 auto 100vh auto;
                width: 93%;
                text-align: left;

                &:first-child {
                    margin-top: 100vh;
                }
            }

            .text-block__wrap {
                width: 100%;
            }
        }
    }

    &__deer {
        display: none;

        @media (max-width: 768px) {
            display: block;
            position: relative;
            top: -5rem;

            &.mb-100 {
                margin-bottom: 13.3334rem;
            }
        }
    }

    &__block {
        position: relative;
        padding-bottom: 31rem;
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/img/indicator-deer.png);

        @supports (background-image: url(../../public/img/indicator-deer.webp)) {
            background-image: url(../../public/img/indicator-deer.webp);
        }

        @media (max-width: 768px) {
            padding-bottom: 0;
            background-image: none;
        }

        img {
            position: absolute;
            width: 31%;
            left: 3rem;
            bottom: 8rem;

            @media (max-width: 768px) {
                display: none;
            }
        }

        video {
            position: absolute;
            width: 31%;
            left: 3rem;
            bottom: 8rem;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    &__schedule {
        display: block;
        margin: 0 auto;
        margin-top: 5.6rem;
        margin-bottom: 8.3rem;
        width: 68.34rem;
        height: 36.53rem;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
            margin-bottom: 10rem;
            margin-top: 11rem;
        }
    }

    &__impact {
        @media (max-width: 768px) {
            &.mb-60 {
                margin-bottom: 11rem;
            }
        }
    }

    &__drop {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 68.34rem;
        height: 23.473rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/img/indicator-drop.png);

        @supports (background-image: url(../../public/img/indicator-drop.webp)) {
            background-image: url(../../public/img/indicator-drop.webp);
        }

        @media (max-width: 768px) {
            width: 90.134rem;
            height: 220rem;
            background-image: url(../../public/img/indicator-drop-mobile.png);

            &.mb-60 {
                margin-bottom: 4.8rem;
            }
        }

        &-wrap {
            width: 34.1rem;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &-text {
            width: 24.792rem;
            color: var(--coppre-text, #A46A32);
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                width: 53%;
                margin: 0 auto;
                font-size: 4.26667rem;
                text-align: center;
                position: relative;
                top: -26rem;
            }
        }
    }
}
</style>
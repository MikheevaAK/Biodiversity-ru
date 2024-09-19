<template>
    <div class="pyasino">
        <BaseHero title="Вдохнуть <br/>жизнь в озеро" :descr="heroDescr" :img="'img/hero1.jpg'" :imgMobile="'img/hero1-mobile.jpg'" />
        <MainSection>
            <section class="lake">
                <div class="lake__introduction mb-100">
                    <picture>
                        <source type="image/webp" srcset="img/introduction.webp">
                        <img loading="lazy" class="lake__introduction-img" src="img/introduction.png">
                    </picture>
                    <BaseTextBlock>
                        <p class="mb-10">
                            В&nbsp;Арктике очень много озёр, особенно тех, которые наполняют подземные родники. В&nbsp;них рыба не&nbsp;водится из-за очень скудной питательной базы. В&nbsp;других&nbsp;же озёрах рыбы настолько много, что её&nbsp;можно вылавливать в&nbsp;производственных
                            масштабах. Но&nbsp;бывает и&nbsp;так, что озеро в&nbsp;какой‑то момент пустеет &mdash; в&nbsp;этом случае вылов запрещают до&nbsp;полного восстановления рыбопродуктивности водоёма.
                        </p>
                        <p>
                            Этот процесс может занимать десятилетия, но&nbsp;учёные придумали, как его ускорить оригинальным и&nbsp;экологичным способом. Эксперимент по&nbsp;повышению рыбопродуктивности сейчас проходит на&nbsp;озере Пясино.
                        </p>
                        <BaseNumberBlock textTop="> 50 озёр" textBottom="находится на территории Северного Таймыра" />
                    </BaseTextBlock>
                </div>
    
                <div class="lake__map mb-100">
                    <BaseTextBlock title="Озеро Пясино">
                        <p>
                            Находится в&nbsp;20&nbsp;километрах от&nbsp;Норильска. Говорят, что&nbsp;сто лет назад в&nbsp;нём водилась рыба и&nbsp;озеро даже использовалось местными жителями для рыболовного промысла. Но&nbsp;затем водоём начал пустеть. Произошло это из-за промышленного
                            освоения территорий или&nbsp;избыточного вылова&nbsp;&mdash; не&nbsp;ясно.
                        </p>
                    </BaseTextBlock>
                    <div class="lake__map-img">
                        <div class="circle"></div>
                        <picture>
                            <source type="image/webp" srcset="img/lake-map.webp">
                            <img loading="lazy" src="img/lake-map.png">
                        </picture>
                    </div>
                </div>
    
                <BaseTextBlock title="Что делает озеро рыбопродуктивным?">
                    <p>
                        Озеро&nbsp;&mdash; это дом для&nbsp;множества живых организмов: от&nbsp;неразличимых невооружённым взглядом бактерий до&nbsp;крупных рыб и&nbsp;водных млекопитающих. В&nbsp;арктических водоёмах фауна уникальна по&nbsp;видовому составу, но&nbsp;её&nbsp;численность
                        и&nbsp;биомасса невысока. Флора тоже достаточно бедная: в&nbsp;северных водоёмах нет крупных водорослей, а&nbsp;только микроскопические&nbsp;&mdash; фитопланктон.
                    </p>
                </BaseTextBlock>
    
            </section>
    
            <section class="scroll mb-100">
                <div class="scroll-bg bg-1">
                </div>
                <div class="scroll-bg bg-2">
                </div>
                <div class="scroll-bg bg-3">
                    <video v-if="!isMobile" autoplay loop muted playsinline class="pyasino__video" preload="auto">
                        <source src="video/fish.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="scroll-bg bg-4">
                </div>
                <div class="scroll-wrap">
                    <div class="scroll-card card-1 text-block__descr">
                        <div>
                            <p class="mb-10">
                                С&nbsp;помощью солнечного света фитопланктон перерабатывает углекислый газ в&nbsp;кислород, а&nbsp;значит, даёт возможность другим организмам жить и&nbsp;дышать.
                            </p>
                            <p>
                                При этом микроводоросли&nbsp;&mdash; не&nbsp;только лёгкие водоёма, но&nbsp;и&nbsp;пища для&nbsp;зоопланктона: мелких рачков, моллюсков и&nbsp;личинок водных животных.
                            </p>
                        </div>
                    </div>
                    <div class="scroll-card card-2 text-block__descr">
                        Зоопланктоном питаются мальки и&nbsp;некоторые виды рыб, а&nbsp;ими, в&nbsp;свою очередь,&nbsp;&mdash; хищные рыбы.
                    </div>
                    <div class="scroll-card card-3 text-block__descr">
                        На&nbsp;вершине этой пищевой или, как её&nbsp;называют учёные, трофической цепи&nbsp;&mdash; водоплавающие птицы. Они поедают рыбу, а&nbsp;помёт&nbsp;&mdash; продукт их&nbsp;жизнедеятельности&nbsp;&mdash; попадает в&nbsp;воду и&nbsp;становится питательной
                        средой для&nbsp;фитопланктона. Круг замыкается.
                    </div>
                    <div class="scroll-card card-4 text-block__descr">
                        Если&nbsp;же из&nbsp;трофической цепи исключить хотя&nbsp;бы одно звено или изменить состав и&nbsp;соотношение обитателей озера, система начинает разрушаться. Сброс недоочищенных бытовых и&nbsp;производственных сточных вод, аварийные разливы нефтепродуктов
                        или чересчур интенсивный вылов рыбы могут привести к&nbsp;нарушению баланса экосистемы.
                    </div>
                </div>
            </section>
    
            <section class="work-on-mistakes mb-100">
                <BaseTextBlock class="mb-40" title="Работа над ошибками">
                    <p class="mb-10">
                        По&nbsp;словам учёных, ситуацию можно исправить. Для&nbsp;этого нужно повысить эффективность очистки хозяйственно-бытовых сточных вод, сбрасываемых в&nbsp;окрестные водоёмы, и&nbsp;восстановить популяции обитающих в&nbsp;них организмов, начав с&nbsp;основ
                        пищевой цепи&nbsp;&mdash; фитопланктона.
                    </p>
                    <p class="mb-10">
                        Один из&nbsp;способов решить проблему&nbsp;&mdash; внести в&nbsp;озеро минеральные удобрения. В&nbsp;насыщенной питательными веществами воде ускорится рост микроводорослей, которые станут кормом для&nbsp;зоопланктона и&nbsp;рыб.
                    </p>
                    <p>
                        Метод действенный, но, к&nbsp;сожалению, не&nbsp;без недостатков. Если ошибиться с&nbsp;составом удобрений или внести их&nbsp;слишком много, в&nbsp;озере начнут бурно размножаться сине-зелёные водоросли&nbsp;&mdash; цианобактерии. Учёные называют это
                        явление &laquo;цветением&raquo; воды.
                    </p>
                </BaseTextBlock>
    
                <div class="work-on-mistakes__img mb-40"></div>
    
                <BaseTextBlock class="mb-40">
                    <p>
                        Массовая гибель живых организмов из-за цветения воды приведёт к&nbsp;гниению их&nbsp;останков и&nbsp;загрязнению воды. Разумеется, в&nbsp;здоровой экосистеме цианобактерии также присутствуют, но&nbsp;здесь важен баланс. А&nbsp;преобладание какого‑то одного
                        вида его нарушает.
                    </p>
                </BaseTextBlock>
    
                <BaseSidebar>
                    <p>
                        &laquo;Цветение&raquo; воды цианобактериями может продолжаться десятилетиями после того, как в&nbsp;озеро внесли удобрения. Так&nbsp;попытка решить одну проблему может привести к&nbsp;другой, не&nbsp;менее серьёзной.
                    </p>
                </BaseSidebar>
            </section>
    
            <section class="in-search-section">
                <BaseTextBlock title="В поиске альтернатив">
                    <div>
                        <p class="mb-10">
                            Пытаясь найти замену минеральным удобрениям, учёные обратили внимание на&nbsp;удобрение природное&nbsp;&mdash; помёт водоплавающих птиц. В&nbsp;естественных условиях именно он&nbsp;обеспечивает баланс питательных веществ в&nbsp;озёрах. Если&nbsp;же птицы
                            по&nbsp;каким‑то причинам перестали гнездиться рядом с&nbsp;озером, помёт в&nbsp;воду можно добавить искусственно. Эту экологичную технологию назвали гуанотрофикацией.
                        </p>
                        <p class="mb-10">
                            По&nbsp;мнению специалистов, в&nbsp;удобренном помётом водоёме вместо цианобактерий появятся другие виды фитопланктона&nbsp;&mdash; диатомовые и&nbsp;зелёные водоросли. Они лежат в&nbsp;основе пищевой цепочки ценных пород рыб, а&nbsp;их&nbsp;размножение
                            не&nbsp;вызывает вредоносное &laquo;цветение&raquo; воды.
                        </p>
                        <p>
                            Чтобы проверить гипотезу, летом 2022 года учёные отправились в&nbsp;экспедицию по&nbsp;Таймыру. За&nbsp;несколько недель они облетели на&nbsp;специальном гидросамолёте местные озёра.
                        </p>
                    </div>
                    <BaseNumberBlock class="hidden-mobile" textTop="21 озеро" textBottom="обследовали учёные в&nbsp;ходе экспедиции" />
                </BaseTextBlock>
                <div class="in-search">
                    <div class="in-search__plane"></div>
                    <div class="in-search__gull"></div>
                    <div class="in-search__seagulls"></div>
                    <div class="in-search__fish"></div>
                    <BaseTextBlock class="hidden-mobile">
                        <p>
                            На&nbsp;одних водоёмах птиц не&nbsp;было вовсе, рядом с&nbsp;другими гнездились большие колонии из&nbsp;десятков и&nbsp;даже сотен особей. Из&nbsp;каждого озера биологи взяли образцы воды, которые позднее направили на&nbsp;анализ.
                            <br/>
                            <br/> Результаты лабораторных исследований подтвердили правильность догадки учёных. В&nbsp;озёрах, рядом с&nbsp;которыми гнездятся птицы (то&nbsp;есть там, где помёт попадает в&nbsp;воду), баланс растворённых в&nbsp;воде питательных
                            веществ действительно оказался лучше. В&nbsp;то&nbsp;же время в&nbsp;планктоне преобладали полезные диатомовые и&nbsp;зелёные водоросли, а&nbsp;доля цианобактерий оказалась заметно меньше, чем в&nbsp;озёрах без&nbsp;птиц.
                            <br/>
                            <br/> Иными словами, в&nbsp;таких озёрах было сбалансированное сообщество фитопланктона. Благодаря этому в&nbsp;водоёмах водились ценные кормовые организмы, необходимые для&nbsp;питания уникальных арктических видов рыб.
                        </p>
                        <BaseNumberBlock textTop="на 16 п.п." textBottom="ниже доля цианобактерий в озёрах, где есть птицы" />
                    </BaseTextBlock>
                </div>
                <BaseTextBlock class="visiable-mobile">
                    <div>
                        <p class="mb-10">
                            На&nbsp;одних водоёмах птиц не&nbsp;было вовсе, рядом с&nbsp;другими гнездились большие колонии из&nbsp;десятков и&nbsp;даже сотен особей. Из&nbsp;каждого озера биологи взяли образцы воды, которые позднее направили на&nbsp;анализ.
                        </p>
                        <p class="mb-10">
                            Результаты лабораторных исследований подтвердили правильность догадки учёных. В&nbsp;озёрах, рядом с&nbsp;которыми гнездятся птицы (то&nbsp;есть там, где помёт попадает в&nbsp;воду), баланс растворённых в&nbsp;воде питательных веществ действительно оказался
                            лучше. В&nbsp;то&nbsp;же время в&nbsp;планктоне преобладали полезные диатомовые и&nbsp;зелёные водоросли, а&nbsp;доля цианобактерий оказалась заметно меньше, чем в&nbsp;озёрах без&nbsp;птиц.
                        </p>
                        <p>
                            Иными словами, в&nbsp;таких озёрах было сбалансированное сообщество фитопланктона. Благодаря этому в&nbsp;водоёмах водились ценные кормовые организмы, необходимые для&nbsp;питания уникальных арктических видов рыб.
                        </p>
                    </div>
                    <BaseNumberBlock textTop="на 16 п.п." textBottom="ниже доля цианобактерий в озёрах, где есть птицы" />
                </BaseTextBlock>
            </section>
    
            <section class="shares">
                <h3 class="shares__title">
                    Доля различных видов фитопланктона в&nbsp;озёрах с птицами и без&nbsp;птиц
                </h3>
                <div class="shares__wrap">
                    <div class="shares__name-scales">
                        <div class="scales__text">Цианобактерии</div>
                        <div class="scales__text">Диатомеи</div>
                        <div class="scales__text">Зелёные водоросли</div>
                    </div>
                    <div class="shares__item">
                        <div class="shares__img-wrap">
                            <img loading="lazy" class="shares__img-img" src="img/nest.png">
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Цианобактерии</div>
                            <BaseScale :percent="'32,6%'" class="mr-4-31" :hasClass="'scale-1'" />
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Диатомеи</div>
                            <BaseScale :percent="'27,9%'" class="mr-4-31" :hasClass="'scale-3'" />
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Зелёные водоросли</div>
                            <BaseScale :percent="'10,2%'" class="mr-4-31" :hasClass="'scale-5'" />
                        </div>
                    </div>
                    <div class="shares__item">
                        <div class="shares__img-wrap">
                            <img loading="lazy" class="shares__img-img" src="img/bird.png">
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Цианобактерии</div>
                            <BaseScale :percent="'16,2%'" :hasClass="'scale-2'" />
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Диатомеи</div>
                            <BaseScale :percent="'39,9%'" :hasClass="'scale-4'" />
                        </div>
                        <div class="scales__text-wrap">
                            <div class="scales__text-mobile">Зелёные водоросли</div>
                            <BaseScale :percent="'20,2%'" :hasClass="'scale-6'" />
                        </div>
                    </div>
                </div>
    
                <BaseTextBlock class="mb-40">
                    <p>
                        Поможет&nbsp;ли гуанотрофикация вернуть жизнь в&nbsp;арктические озёра&nbsp;&mdash; вопрос пока открытый, и&nbsp;быстро ответить на&nbsp;него не&nbsp;получится. И&nbsp;всё&nbsp;же итоги первого года внушают сдержанный оптимизм, а&nbsp;учёные продолжают
                        свои исследования, которые активно поддерживаются компанией &laquo;Норникель&raquo;.
                    </p>
                </BaseTextBlock>
    
                <BaseSidebar class="remove-padding">
                    <p>
                        &laquo;Норникель&raquo; вместе с&nbsp;учёными надеются разработать и&nbsp;опробовать экотехнологию гуанотрофикации, которая позволит, при&nbsp;необходимости, повышать качество воды и&nbsp;продуктивность арктических озёр.
                    </p>
                </BaseSidebar>
            </section>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue';
import MainSection from '@/layout/MainSection.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar.vue'
import BaseScale from '@/components/BaseScale.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'App',
    data() {
        return {
            oneScrollTrigger: null,
            twoScrollTrigger: null,
            threeScrollTrigger: null,
            ScrollTrigger: null,
            heroDescrEn: 'The Far North is&nbsp;often referred to&nbsp;as&nbsp;the country&rsquo;s treasure trove, as&nbsp;the region has a&nbsp;wealth of&nbsp;minerals. This mineral wealth benefits the economy, but compromises the environment. With the arrival of&nbsp;humans, not only the land but also the water are subjected to&nbsp;change: rivers, lakes, groundwater, and even permafrost.',
            heroDescr: 'Крайний Север нередко называют сокровищницей страны — так много здесь полезных ископаемых. Однако то, что хорошо для экономики, для природы — экологическая нагрузка. С приходом человека меняется не только земля, но и вода: реки, озёра, грунтовые воды и даже многолетняя мерзлота.'
        }
    },
    components: {
        BaseHero,
        BaseTextBlock,
        BaseSidebar,
        BaseScale,
        MainSection,
        BaseNumberBlock
    },
    mounted() {
        this.$nextTick(function() {
            this.scrollAnimation()
            this.parallax()
        })
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 768
        },
    },
    beforeDestroy() {
        this.oneScrollTrigger.kill()
        this.oneScrollTrigger = null

        this.twoScrollTrigger.kill()
        this.twoScrollTrigger = null
    },
    methods: {
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

            gsap.fromTo(".bg-3", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-3",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-4',
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

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-1", { width: '0' }, {
                    width: '5.75rem',
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        // markers: true,
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-1", { width: '0' }, {
                    width: '24.534rem',
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            }

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-2", { width: '0' }, {
                    width: '2.875rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-2", { width: '0' }, {
                    width: '12.267rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        scrub: true,
                    },
                });
            }

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-3", { width: '0' }, {
                    width: '4.94rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        // markers: true,
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-3", { width: '0' }, {
                    width: '21.067rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        scrub: true,
                    },
                });
            }

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-4", { width: '0' }, {
                    width: '7rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        // markers: true,
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-4", { width: '0' }, {
                    width: '29.867rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            }

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-5", { width: '0' }, {
                    width: '1.94rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        // markers: true,
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-5", { width: '0' }, {
                    width: '15.2rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            }

            if (window.innerWidth > 768) {
                gsap.fromTo(".scale-6", { width: '0' }, {
                    width: '3.6rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 50%',
                        end: 'bottom 40%',
                        // markers: true,
                        scrub: true,
                    },
                });
            } else {
                gsap.fromTo(".scale-6", { width: '0' }, {
                    width: '8.267rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".shares__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            }
        },
        parallax() {
            if (window.innerWidth > 768) {
                gsap.fromTo(".in-search__plane", { y: 200 }, {
                    y: 0,
                    scrollTrigger: {
                        trigger: ".in-search-section",
                        start: 'top 50%',
                        end: '25%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".in-search__gull", { y: 100 }, {
                    y: -50,
                    scrollTrigger: {
                        trigger: ".in-search-section",
                        start: 'top 50%',
                        end: '65%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".in-search__seagulls", { y: 120 }, {
                    y: -20,
                    scrollTrigger: {
                        trigger: ".in-search-section",
                        start: 'top 50%',
                        end: '35%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".in-search__fish", { x: 60 }, {
                    x: -60,
                    scrollTrigger: {
                        trigger: ".in-search-section",
                        start: '55% 100%',
                        end: '90%',
                        ease: "ease-in-out",
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
.lake {
    &__introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-img {
            margin-bottom: 1.75rem;
            width: 31.625rem;
            height: 7.625rem;
            @media (max-width: 768px) {
                margin-bottom: 5.34rem;
                width: 100%;
                height: 26.667rem;
            }
        }
        .number-block {
            position: absolute;
            @media (max-width: 768px) {
                position: static;
            }
        }
    }
    &__map {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-img {
            position: relative;
            margin-top: 1.88rem;
            width: 21.1875rem;
            height: 32.08944rem;
            @media (max-width: 768px) {
                margin: 0 auto;
                margin-top: 5.34rem;
                width: 80.3rem;
                height: 121.5rem;
            }
            .circle {
                position: absolute;
                top: 26.8rem;
                left: 13.2rem;
                width: 0.4rem;
                height: 0.4rem;
                z-index: 2;
                background-color: #333;
                border-radius: 100%;
                animation: ripple-black 1s infinite;
                @media (max-width: 768px) {
                    top: 101rem;
                    left: 49.7rem;
                    width: 1.375rem;
                    height: 1.375rem;
                }
            }
        }
    }
}

.pyasino__video {
    position: fixed;
    z-index: 8;
    bottom: 0;
    width: 118.5%;
    left: -9.3%;
    opacity: 0;
}

.pyasino .scroll {
    position: relative;
    width: 100%;
    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        height: 100vh;
        width: 100%;
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        @media (max-width: 768px) {
            background-position: top;
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
                background-position: bottom;
                background-size: contain;
                @media (max-width: 768px) {
                    background-position: bottom;
                    position: absolute;
                }
            }

            .pyasino__video {
                opacity: 1;
            }
        }
        &.bg-1 {
            z-index: 4;
            background-image: url(../../public/img/fito-1.jpg);
            @supports (background-image: url(../../public/img/fito-1.webp)) {
                background-image: url(../../public/img/fito-1.webp);
            }
        }
        &.bg-2 {
            z-index: 3;
            background-image: url(../../public/img/fito-2.jpg);
            @supports (background-image: url(../../public/img/fito-2.webp)) {
                background-image: url(../../public/img/fito-2.webp);
            }
        }
        &.bg-3 {
            z-index: 2;
            background-image: url(../../public/img/fito-3.jpg);
            @supports (background-image: url(../../public/img/fito-3.webp)) {
                background-image: url(../../public/img/fito-3.webp);
            }
        }
        &.bg-4 {
            z-index: 1;
            background-image: url(../../public/img/fito-4.jpg);
            @supports (background-image: url(../../public/img/fito-4.webp)) {
                background-image: url(../../public/img/fito-4.webp);
            }
        }
        @media (max-width: 768px) {
            &.bg-1 {
                background-image: url(../../public/img/fito-1-mobile.jpg);
            }
            &.bg-2 {
                background-image: url(../../public/img/fito-2-mobile.jpg);
            }
            &.bg-3 {
                background-image: url(../../public/img/fito-3-mobile.jpg);
            }
            &.bg-4 {
                background-image: url(../../public/img/fito-4-mobile.jpg);
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
    }
}

.work-on-mistakes {
    &__img {
        background-image: url(../../public/img/scheme.png);
        width: 100%;
        height: 33.4723rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @supports (background-image: url(../../public/img/scheme.webp)) {
            background-image: url(../../public/img/scheme.webp);
        }
        @media (max-width: 768px) {
            background-image: url(../../public/img/scheme-mobile.png);
            height: 178.135rem;
            @supports (background-image: url(../../public/img/scheme-mobile.webp)) {
                background-image: url(../../public/img/scheme-mobile.webp);
            }
        }
    }
}

.in-search {
    position: relative;
    margin-bottom: 3.75rem;
    height: 102rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-image: url(../../public/img/in-search.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @supports (background-image: url(../../public/img/in-search.webp)) {
        background-image: url(../../public/img/in-search.webp);
    }
    @media (max-width: 768px) {
        background-image: url(../../public/img/in-search-mobile.png);
        height: 176.535rem;
        margin-bottom: 21.3334rem;
        @supports (background-image: url(../../public/img/in-search-mobile.webp)) {
            background-image: url(../../public/img/in-search-mobile.webp);
        }
    }

    &__plane {
        position: absolute;
        top: -21rem;
        left: 0rem;
        width: 29.5625rem;
        height: 22.4375rem;
        background-image: url(../../public/img/plane.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @supports (background-image: url(../../public/img/plane.webp)) {
            background-image: url(../../public/img/plane.webp);
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    &__gull {
        position: absolute;
        top: 3rem;
        left: 53rem;
        width: 17.153rem;
        height: 14.028rem;
        background-image: url(../../public/img/gull.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @supports (background-image: url(../../public/img/gull.webp)) {
            background-image: url(../../public/img/gull.webp);
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    &__seagulls {
        position: absolute;
        top: 0rem;
        left: 82.76rem;
        width: 13rem;
        height: 5rem;
        background-image: url(../../public/img/seagulls.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @supports (background-image: url(../../public/img/seagulls.webp)) {
            background-image: url(../../public/img/seagulls.webp);
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    &__fish {
        position: absolute;
        top: 53.8rem;
        left: 54rem;
        width: 28.4rem;
        height: 11rem;
        background-image: url(../../public/img/fish.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @supports (background-image: url(../../public/img/fish.webp)) {
            background-image: url(../../public/img/fish.webp);
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
}

.shares {
    padding: 0 13.25rem;
    @media (max-width: 768px) {
        padding: 0;
    }
    &__title {
        margin-left: 4.2rem;
        width: 24rem;
        color: #000;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 130%;
        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 21.3334rem;
            margin-bottom: 4rem;
            padding: 0 4rem;
            flex-wrap: wrap;
            width: 100%;
            font-size: 4.8rem;
        }
    }
    &__wrap {
        margin-left: 4.2rem;
        margin-bottom: 3.75rem;
        display: flex;
        @media (max-width: 768px) {
            margin-left: 0;
            flex-wrap: wrap;
        }
    }
    &__img-wrap {
        position: relative;
        display: flex;
        width: 10.8125rem;
        height: 7.25rem;
        @media (max-width: 768px) {
            margin-bottom: 1.8666rem;
            width: 46.134rem;
            height: 24.8rem;
        }
    }
    &__name-scales {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media (max-width: 768px) {
            display: none;
        }
    }
    &__item {
        @media (max-width: 768px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}

.scales {
    &__text {
        width: 11rem;
        margin-right: 0.69rem;
        color: #000;
        font-size: 1.11111rem;
        font-weight: 300;
        &:not(:last-child) {
            margin-bottom: 1.88rem;
        }
        &-wrap:not(:last-child) {
            margin-bottom: 1.88rem;
            @media (max-width: 768px) {
                margin-bottom: 0;
            }
        }
        &-mobile {
            display: none;
            @media (max-width: 768px) {
                display: block;
                padding: 0 4rem;
                margin-bottom: 1.867rem;
                font-size: 4.2667rem;
                line-height: 130%;
            }
        }
    }
}

.scale__wrap.mr-4-31 {
    @media (max-width: 768px) {
        margin-right: 0;
    }
}

.remove-padding .sidebar__text {
    padding: 0;
}
</style>
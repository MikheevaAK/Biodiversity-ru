<template>
    <div class="treasures-3-container__wrap">
        <div class="treasures-3-container">

            <div class="treasures-3-item treasures-3-item_1">
                <div class="treasures-3-item__title">Овцебык</div>
                <div class="treasures-3-item__descr">
                    <p>
                        Когда‑то эти животные паслись по&nbsp;соседству с&nbsp;мамонтами. Пару тысяч лет назад изменение климата и&nbsp;охота привели к&nbsp;тому, что овцебыки исчезли с&nbsp;сибирских просторов. Вновь они появились здесь только в&nbsp;1970-х годах&nbsp;&mdash; несколько десятков животных завезли из&nbsp;Канады. Сейчас на&nbsp;Таймыре обитает около 14&nbsp;тыс. овцебыков, и&nbsp;на&nbsp;окраинах плато Путорана можно встретить их&nbsp;стада.
                    </p>
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_2">
                <div class="treasures-3-item__title">Путоранский снежный баран</div>
                <div class="treasures-3-item__descr">
                    Уникальный эндемичный подвид снежного барана. Ареал его расположен на&nbsp;плато Путорана и&nbsp;более чем на&nbsp;тысячу километров удалён от&nbsp;районов распространения других подвидов снежного барана. Учёные не&nbsp;исключают, что путоранский подвид может быть реликтовым. Занесён в&nbsp;Красную книгу.
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_3">
                <div class="treasures-3-item__title">Ястребинкa путоранская</div>
                <div class="treasures-3-item__descr">
                    Это растение с&nbsp;небольшими ярко-жёлтыми цветками встречается только на&nbsp;западе плато Путорана, в&nbsp;других местах пока не&nbsp;обнаружено. Занесена в&nbsp;Красную книгу Красноярского края.
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_4">
                <div class="treasures-3-item__title">Сибирский углозуб</div>
                <div class="treasures-3-item__descr">
                    Единственный вид земноводных, способный обитать в&nbsp;зоне многолетней мерзлоты. Выживать во&nbsp;время холодов и&nbsp;долгих зим животному помогает значительное количество глицерина, вырабатываемого печенью.
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_5">
                <div class="treasures-3-item__title">Сапсан</div>
                <div class="treasures-3-item__descr">
                    Этот сокол считается самой быстрой птицей на&nbsp;планете: во&nbsp;время пикирования он&nbsp;развивает скорость до&nbsp;322&nbsp;км/ч. Сапсан распространён практически на&nbsp;всех континентах (за&nbsp;исключением Антарктиды), однако численность его невысока&nbsp;&mdash; в&nbsp;России этот сокол внесён в&nbsp;Красную книгу.
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_6">
                <div class="treasures-3-item__title">Пискулька</div>
                <div class="treasures-3-item__descr">
                    Своё название эта птица получила за&nbsp;характерный звук, издаваемый во&nbsp;время полёта. Занесена в&nbsp;Красную книгу России, всякая охота на&nbsp;неё запрещена.
                </div>
            </div>

            <div class="treasures-3-item treasures-3-item_7">
                <div class="treasures-3-item__title">Муксун</div>
                <div class="treasures-3-item__descr">
                    В&nbsp;недавнем прошлом являлся одним из&nbsp;основных промысловых видов в&nbsp;бассейнах Енисея, Пясины, Таймыры и&nbsp;Хатанги. Однако в&nbsp;последние годы его численность стремительно сокращается.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default {
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".treasures-3-container .treasures-3-item");
                gsap.to(".treasures-3-container", {
                    xPercent: -9.9 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".treasures-3",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".treasures-3-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>


<style lang="scss">
.treasures-3 {
    position: relative;
    overflow: hidden;

    &-container {
        position: relative;
        display: flex;
        width: 243rem;
        height: 38.12rem;
        background-image: url(../../public/img/treasures-scroll-3.png);
        background-repeat: no-repeat;
        background-size: 100%;

        @media (max-width: 768px) {
            width: 933rem;
            height: 100%;
            background-image: url(../../public/img/treasures-scroll-3-mobile.png);

            &__wrap {
                width: unset;
                height: 144.467rem;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

    &-item {
        position: absolute;

        &__title {
            padding: 0.4375rem 0.625rem;
            margin-bottom: 1.06rem;
            width: max-content;
            font-size: 0.9375rem;
            font-weight: 300;
            line-height: 130%;
            color: #fff;
            border-radius: 1.6875rem;
            background: var(--grey, #626261);

            @media (max-width: 768px) {
                font-size: 4rem;
                padding: 1.8716rem 2.6737rem;
                border-radius: 7.22rem;
                margin-bottom: 4.5456rem;
            }
        }

        &__descr {
            font-size: 1.0417rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4rem;
            }
        }

        &_1 {
            width: 18.7rem;
            top: 14rem;
            left: 46rem;

            @media (max-width: 768px) {
                width: 71.2rem;
                top: 48rem;
                left: 172rem;
            }
        }

        &_2 {
            width: 27.5rem;
            top: 1rem;
            left: 86rem;

            @media (max-width: 768px) {
                width: 82rem;
                top: 0;
                left: 331rem;
            }
        }

        &_3 {
            width: 18rem;
            top: 10rem;
            left: 117rem;

            @media (max-width: 768px) {
                width: 59rem;
                top: 31rem;
                left: 442rem;
            }
        }

        &_4 {
            width: 20.778rem;
            top: 16rem;
            left: 137rem;

            @media (max-width: 768px) {
                width: 72.778rem;
                top: 53rem;
                left: 519rem;
            }
        }

        &_5 {
            width: 19.23rem;
            top: 0;
            left: 153rem;

            @media (max-width: 768px) {
                width: 71.23rem;
                top: 0;
                left: 588rem;
            }
        }

        &_6 {
            width: 17.32rem;
            top: 7rem;
            left: 183rem;

            @media (max-width: 768px) {
                width: 64.32rem;
                top: 23rem;
                left: 699rem;
            }
        }

        &_7 {
            width: 17.32rem;
            top: 2rem;
            left: 218rem;

            @media (max-width: 768px) {
                width: 65.32rem;
                top: 10rem;
                left: 835rem;
            }
        }
    }
}

.swiper {
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
}
</style>
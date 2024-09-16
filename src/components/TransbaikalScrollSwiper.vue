<template>
    <div class="transbaikal-scroll-container__wrap">
        <div class="transbaikal-scroll-container">
            <div class="transbaikal-scroll-item filter">
                <picture>
                    <source type="image/webp" srcset="img/filter-1.webp">
                    <img class="transbaikal-scroll-item__img" src="img/filter-1.png" alt="">
                </picture>
                <div class="transbaikal-scroll-item__text-block">
                    <div class="transbaikal-scroll-item__title">Чистый воздух</div>
                    <div>Сократить выбросы в&nbsp;атмосферу помогают:</div>
                    <ul class="transbaikal-scroll-item__list">
                        <li class="transbaikal-scroll-item__list-item">уловители золы и&nbsp;пыли
                        </li>
                        <li class="transbaikal-scroll-item__list-item">электрофильтры
                        </li>
                        <li class="transbaikal-scroll-item__list-item">современная техника с&nbsp;нейтрализаторами выхлопных
                            газов
                        </li>
                        <li class="transbaikal-scroll-item__list-item">качественное топливо
                        </li>
                    </ul>
                </div>
            </div>
            <div class="transbaikal-scroll-item cycle">
                <picture>
                    <source type="image/webp" srcset="img/cycle.webp">
                    <img class="transbaikal-scroll-item__img" src="img/cycle.png" alt="">
                </picture>

                <div class="transbaikal-scroll-item__text-block">
                    <div class="transbaikal-scroll-item__title">Меньший расход воды</div>

                    <div>
                        Использованная на&nbsp;предприятии вода проходит многоступенчатую систему очистки, а&nbsp;затем
                        возвращается на&nbsp;следующий технологический цикл.
                    </div>
                    <BaseNumberBlock class="" :textTop="'92%&nbsp;воды'"
                        textBottom="используется на производстве повторно" />
                </div>
            </div>
            <div class="transbaikal-scroll-item disposal">
                <picture>
                    <source type="image/webp" srcset="img/disposal.webp">
                    <img class="transbaikal-scroll-item__img" src="img/disposal.png" alt="">
                </picture>

                <div class="transbaikal-scroll-item__text-block">
                    <div class="transbaikal-scroll-item__title">Безопасная утилизация отходов</div>
                    <div>Полигон отходов комбината оснащён:</div>
                    <ul class="transbaikal-scroll-item__list">
                        <li class="transbaikal-scroll-item__list-item">дренажной системой
                        </li>
                        <li class="transbaikal-scroll-item__list-item">насосными станциями
                        </li>
                        <li class="transbaikal-scroll-item__list-item">очистными сооружениями
                        </li>
                        <li class="transbaikal-scroll-item__list-item">геомембраной, защищающей грунт от&nbsp;загрязнений
                        </li>
                    </ul>
                </div>
            </div>
            <div class="transbaikal-scroll-item hydroelectric-station">
                <picture>
                    <source type="image/webp" srcset="img/hydroelectric-station.webp">
                    <img class="transbaikal-scroll-item__img" src="img/hydroelectric-station.png" alt="">
                </picture>

                <div class="transbaikal-scroll-item__text-block">
                    <div class="transbaikal-scroll-item__title">Возобновляемые источники энергии</div>
                    <div>&laquo;Быстра&raquo; уже использует мощности ГЭС как альтернативу углеродному топливу
                        и&nbsp;прорабатывает варианты реализации проекта по&nbsp;установке солнечной электростанции (СЭС).
                    </div>
                    <BaseNumberBlock class="" :textTop="'~34%&nbsp;энергии'"
                        textBottom="поступает&nbsp;на&nbsp;комбинат&nbsp;от&nbsp;ГЭС" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default {
    components: {
        BaseNumberBlock
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".transbaikal-scroll-container .transbaikal-scroll-item");
                gsap.to(panels, {
                    xPercent: -62 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".transbaikal-scroll",
                        pin: true,
                        start: "top +5%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".transbaikal-scroll-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    },
}
</script>


<style lang="scss">
.transbaikal-scroll {
    position: relative;
    overflow: hidden;

    .text {
        position: absolute;
        left: 32.56944rem;

        @media (max-width: 768px) {
            position: static;
            transform: unset;
            margin-bottom: 4.26rem;
        }
    }

    .mobile-icon-scroll {
        display: none;
        position: absolute;
        width: 12.8rem;
        height: 11.2rem;
        top: 50rem;
        right: 7rem;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .number-block {
        position: static;
        margin-top: 3rem;

        @media (max-width: 768px) {
            margin-top: 9rem;
        }
    }


    &-container {
        display: flex;
        width: 183.5625rem;
        height: 44.9375rem;

        @media (max-width: 768px) {
            width: 580rem;
            height: 100%;

            &__wrap {
                width: unset;
                height: 139.467rem;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

    .transbaikal-scroll-item {
        position: relative;

        @media (max-width: 768px) {
            height: 123.78rem;
        }

        &__text-block {
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                font-size: 4rem;
                line-height: 130%;
            }
        }

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

        &__list {
            width: 17.875rem;
            display: flex;
            flex-direction: column;
            gap: 0.94rem;
            margin-bottom: 1.25rem;
            list-style-type: disc;

            @media (max-width: 768px) {
                width: unset;
                gap: 4rem;
            }
        }
    }

    .filter {
        width: 49.816rem;
        display: flex;
        gap: 1.56rem;
        padding: 10.44rem 1.67rem 2.65rem 3.55rem;
        align-items: center;

        @media (max-width: 768px) {
            width: 119.78rem;
            gap: 3rem;
            padding: 14.2rem 13.4rem 0 5.07rem;
        }

        .transbaikal-scroll-item {
            &__img {
                width: 22rem;
                height: 36.9rem;

                @media (max-width: 768px) {
                    width: 51.3rem;
                    height: 85.88rem;
                }
            }

            &__list {
                padding-left: 1rem;
                margin-top: 0.94rem;

                @media (max-width: 768px) {
                    grid-template: 4rem;
                }
            }
        }
    }

    .cycle {
        width: 47.125rem;
        padding: 14.87rem 5.12rem 2.12rem 0;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            width: 155rem;
            padding: 23rem 16.3rem 0 0;
        }

        .transbaikal-scroll-item {
            &__img {
                width: 31.81rem;
                height: 31.112rem;

                @media (max-width: 768px) {
                    width: 85.34rem;
                    height: 83rem;
                }
            }

            &__text-block {
                margin-left: -2rem;
            }
        }
    }

    .disposal {
        width: 46.38rem;
        padding: 13rem 1.13rem 1.56rem 0;
        display: flex;
        align-items: center;
        gap: 1.38rem;

        @media (max-width: 768px) {
            width: 145.5rem;
            gap: 4.5456rem;
            padding: 17rem 13.13rem 1.56rem 0;
        }

        .transbaikal-scroll-item {
            &__img {
                width: 23.9rem;
                height: 33.75rem;

                @media (max-width: 768px) {
                    width: 63.5rem;
                    height: 91.8rem;
                }
            }

            &__list {
                width: 22.875rem;
                margin-top: 0.94rem;
                padding-left: 1rem;

                @media (max-width: 768px) {
                    width: 79rem;
                    margin-top: 4rem;
                }
            }
        }
    }

    .hydroelectric-station {
        width: 49.09rem;
        padding: 11.5rem 5.12rem 1.31rem 0;
        display: flex;
        align-items: center;
        gap: 1.47rem;

        @media (max-width: 768px) {
            width: 157.3rem;
            padding: 17.5rem 5.12rem 1.31rem 0;
        }

        .transbaikal-scroll-item {
            &__img {
                width: 25.03075rem;
                height: 32.125rem;
                object-fit: contain;

                @media (max-width: 768px) {
                    width: 72.73rem;
                    height: 74.4rem;
                }
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
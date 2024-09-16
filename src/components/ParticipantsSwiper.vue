<template>
    <div class="participants-container__wrap">
        <BaseTextBlock v-if="!isMobile" class="mb-100" title="Участники">
            <span>
                Проект носит междисциплинарный и&nbsp;кросс-культурный характер. В&nbsp;проекте
                и&nbsp;научно-просветительской программе приняли участие художественные галереи, музеи
                и&nbsp;природные заповедники.
            </span>
        </BaseTextBlock>
        <div class="participants-container">
            <div class="participants-item">
                <img src="img/art/participants/participants-1.svg" alt="">
                <div class="participants-item__title">
                    Музейное объединение «Художественная культура Русского Севера»
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-2.svg" alt="">
                <div class="participants-item__title">
                    «Северный морской музей», Архангельск
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-3.svg" alt="">
                <div class="participants-item__title">
                    «Таймырский краеведческий музей», Дудинка
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-4.svg" alt="">
                <div class="participants-item__title">
                    «Таймырский Дом народного творчества», Дудинка
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-5.svg" alt="">
                <div class="participants-item__title">
                    «Краевой краеведческий музей», Красноярск
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-6.svg" alt="">
                <div class="participants-item__title">
                    Художественная галерея «Музей Норильска», Норильск
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-7.svg" alt="">
                <div class="participants-item__title">
                    «Российский государственный музей Арктики и Антарктики», Санкт-Петербург
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-8.svg" alt="">
                <div class="participants-item__title">
                    Сибирское отделение РАН, Новосибирск
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-9.svg" alt="">
                <div class="participants-item__title">
                    Институт океанологии РАН им.&nbsp;П.&nbsp;П.&nbsp;Ширшова, Москва
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-10.svg" alt="">
                <div class="participants-item__title">
                    Государственный Дарвиновский музей, Москва
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-11.svg" alt="">
                <div class="participants-item__title">
                    Заповедник «Лапландский», Мончегорск
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-12.svg" alt="">
                <div class="participants-item__title">
                    Заповедник &laquo;Пасвик&raquo;, пгт&nbsp;Никель
                </div>
            </div>

            <div class="participants-item">
                <img src="img/art/participants/participants-13.svg" alt="">
                <div class="participants-item__title">
                    Национальный парк «Красноярские столбы», Красноярск
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BaseTextBlock from '@/components/BaseTextBlock.vue'

gsap.registerPlugin(ScrollTrigger);


export default {
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    components: {
        BaseTextBlock,
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 768
        },
    },
    methods: {
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".participants-container .participants-item");
                gsap.to(panels, {
                    xPercent: -70 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".participants-container__wrap",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".participants-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss">
.participants {
    position: relative;

    &__wrap {
        overflow: hidden;
    }

    .mobile-icon-scroll {
        display: none;
        position: absolute;
        width: 12.8rem;
        height: 11.2rem;
        top: -20rem;
        right: 7rem;

        @media (max-width: 768px) {
            display: block;
        }
    }

    &-container {
        margin-left: 3.69rem;
        margin-bottom: 4.94rem;
        display: flex;
        gap: 2.125rem;
        width: 220rem;
        // height: 30.139rem;

        @media (max-width: 768px) {
            width: 500rem;
            height: 45.34rem;
            gap: 9rem;
            margin-left: 9.5rem;
            margin-bottom: 0;

            &__wrap {
                margin-bottom: 16rem;
                width: unset;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

}

.participants-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 13.6875rem;

    @media (max-width: 768px) {
        width: 85.07rem;
        align-items: center;
        justify-content: flex-start;
    }

    img {
        width: auto;
        height: 9.5625rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            width: 32.54rem;
            height: auto;
            margin-bottom: 3rem;
        }
    }

    &__title {
        font-size: 0.9375rem;
        height: 5.5rem;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 768px) {
            font-size: 2.4rem;
        }
    }
}
</style>
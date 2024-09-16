<template>
    <div class="treasures-1-container__wrap">
        <div class="treasures-1-container">

            <div class="treasures-1-item treasures-1-item_1">
                <div class="treasures-1-item__title">Луток</div>
                <div class="treasures-1-item__descr">
                    <p class="mb-10">
                        Эта утка&nbsp;&mdash; символ &laquo;Пасвика&raquo;. Её&nbsp;изображение с&nbsp;2021 года находится
                        на&nbsp;логотипе заповедника.
                    </p>
                    <p>
                        В&nbsp;других частях России луток довольно редок, но&nbsp;в&nbsp;&laquo;Пасвике&raquo; это один
                        из&nbsp;самых массовых и&nbsp;типичных видов.
                    </p>
                </div>
            </div>

            <div class="treasures-1-item treasures-1-item_2">
                <div class="treasures-1-item__title">Жемчужница европейская</div>
                <div class="treasures-1-item__descr">
                    Рекордсмен-долгожитель среди пресноводных беспозвоночных: эти моллюски могут прожить свыше 100,
                    а&nbsp;по&nbsp;некоторым данным, более 200&nbsp;лет.
                </div>
            </div>

            <div class="treasures-1-item treasures-1-item_3">
                <div class="treasures-1-item__title">Гапломитриум Хукера</div>
                <div class="treasures-1-item__descr">
                    В&nbsp;Мурманской области известно всего 10&nbsp;местонахождений этого мха, причём каждое из&nbsp;них
                    крайне малочисленное&nbsp;&mdash; не&nbsp;более 30&nbsp;особей.
                </div>
            </div>

            <div class="treasures-1-item treasures-1-item_4">
                <div class="treasures-1-item__title">Акулепейра лапландская</div>
                <div class="treasures-1-item__descr">
                    Паук-кругопряд, обитающий на&nbsp;территории Скандинавского полуострова и&nbsp;в&nbsp;Мурманской
                    области. На&nbsp;территории заповедника &laquo;Пасвик&raquo; удалось встретить всего двух самок.
                </div>
            </div>

            <div class="treasures-1-item treasures-1-item_5">
                <div class="treasures-1-item__title">Обыкновенная кутора</div>
                <div class="treasures-1-item__descr">
                    Эта крупная землеройка&nbsp;&mdash; отличный пловец, поэтому охотится не&nbsp;только на&nbsp;насекомых,
                    но&nbsp;также на&nbsp;рыб и&nbsp;птенцов водоплавающих птиц. В&nbsp;её&nbsp;слюне содержится&nbsp;яд,
                    обладающий парализующим действием. Благодаря этому кутора может делать запасы из&nbsp;живых,
                    но&nbsp;обездвиженных животных.
                </div>
            </div>

            <div class="treasures-1-item treasures-1-item_6">
                <div class="treasures-1-item__title">Бородатая неясыть</div>
                <div class="treasures-1-item__descr">
                    Один из&nbsp;самых крупных видов неясытей. В&nbsp;отличие от&nbsp;многих других сов активна
                    не&nbsp;только по&nbsp;ночам, но&nbsp;и&nbsp;в&nbsp;светлое время суток.
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
                const panels = gsap.utils.toArray(".treasures-1-container .treasures-1-item");
                gsap.to(".treasures-1-container", {
                    xPercent: -8.8 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".treasures-1",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".treasures-1-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>


<style lang="scss">
.treasures-1 {
    position: relative;
    overflow: hidden;

    &-container {
        display: flex;
        width: 178rem;
        height: 38.12rem;
        background-image: url(../../public/img/treasures-scroll-1.png);
        background-repeat: no-repeat;
        background-size: 100%;

        @media (max-width: 768px) {
            width: 554rem;
            height: 100%;
            background-position: bottom;
            background-image: url(../../public/img/treasures-scroll-1-mobile.png);

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

    &-item {
        @media (max-width: 768px) {
            height: 139.467rem;
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

        &__descr {
            font-size: 1.0417rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4rem;
            }
        }

        &_1 {
            width: 38.889rem;
            padding: 6.5278rem 15.904rem 0 5.21rem;

            @media (max-width: 768px) {
                width: 118rem;
                padding: 14rem 11.46rem 0 16rem;
            }
        }

        &_2 {
            width: 25.487rem;
            padding: 10rem 9.1rem 0 0;

            @media (max-width: 768px) {
                width: 69rem;
                padding: 34rem 15rem 0 0;
            }
        }

        &_3 {
            width: 25.4866rem;
            padding: 19rem 5.3472rem 0 3rem;

            @media (max-width: 768px) {
                width: 103rem;
                padding: 76rem 17rem 0 0;
            }
        }

        &_4 {
            width: 22.778rem;
            padding: 10.97rem 7.56945rem 14.514rem 0;

            @media (max-width: 768px) {
                width: 95rem;
                padding: 155px 88px 0 0;
            }
        }

        &_5 {
            width: 48.23rem;
            padding: 6.458rem 27.4rem 0 0;

            @media (max-width: 768px) {
                width: 186rem;
                padding: 24rem 81rem 0 0;
            }
        }

        &_6 {
            width: 16.32rem;
            padding: 9rem 1rem 0 0;

            @media (max-width: 768px) {
                width: 81rem;
                padding: 31rem 6.4rem 0 0;
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
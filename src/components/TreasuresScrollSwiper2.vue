<template>
    <div class="treasures-2-container__wrap">
        <div class="treasures-2-container">

            <div class="treasures-2-item treasures-2-item_1">
                <div class="treasures-2-item__title">Росянка</div>
                <div class="treasures-2-item__descr">
                    <p>
                        Листья этого растения покрыты капельками клейкого сока. Садящиеся на&nbsp;них насекомые
                        оказываются
                        в&nbsp;ловушке: они прилипают и&nbsp;уже не&nbsp;могут улететь. После этого росянка закручивает
                        лист, полностью обволакивая свою жертву, и&nbsp;в&nbsp;течение нескольких дней переваривает
                        добычу.
                    </p>
                </div>
            </div>

            <div class="lizard">
                <video @loadeddata="videoLoaded" autoplay loop muted playsinline>
                    <source src="video/lizard.mov" type="video/mp4">
                    <source src="video/lizard.webm" type="video/webm">
                </video>
                <picture v-if="!isLoadingOne">
                    <source type="image/webp" srcset="img/lizard.webp">
                    <img loading="lazy" src="img/lizard.png" alt="">
                </picture>
            </div>

            <div class="swan">
                <video @loadeddata="videoLoadedTwo" autoplay loop muted playsinline>
                    <source src="video/swan.mov" type="video/mp4">
                    <source src="video/swan.webm" type="video/webm">
                </video>
                <picture v-if="!isLoadingTwo">
                    <source type="image/webp" srcset="img/collage-kola-swan.webp">
                    <img loading="lazy" src="img/collage-kola-swan.png" alt="">
                </picture>
            </div>

            <div class="shrike">
                <video autoplay loop muted playsinline>
                    <source src="video/shrike.mov" type="video/mp4">
                    <source src="video/shrike.webm" type="video/webm">
                </video>
            </div>

            <div class="deep">
                <video autoplay loop muted playsinline>
                    <source
                        src="https://www.dropbox.com/scl/fi/06c8xlgu43sqhvnqpw8uk/deep-big.mov?rlkey=3q9y6yv0o6xx69y8nmqkrisy2&st=kdczywm0&dl=0"
                        type="video/mp4">
                    <source src="video/deep-big.webm" type="video/webm">
                </video>
            </div>

            <div class="treasures-2-item treasures-2-item_2">
                <div class="treasures-2-item__title">Живородящая ящерица</div>
                <div class="treasures-2-item__descr">
                    Благодаря своей устойчивости к&nbsp;низким температурам этот вид ящерицы может обитать даже
                    в&nbsp;районе Полярного круга. Зимуют эти рептилии под землёй, забираясь в&nbsp;укрытия
                    на&nbsp;глубину
                    до&nbsp;40&nbsp;см.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_3">
                <div class="treasures-2-item__title">Калипсо луковичная</div>
                <div class="treasures-2-item__descr">
                    Один из&nbsp;10&nbsp;видов орхидей, произрастающих на&nbsp;территории заповедника. Своё название
                    растение получило в&nbsp;честь нимфы из&nbsp;древнегреческой мифологии&nbsp;&mdash; Калипсо.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_4">
                <div class="treasures-2-item__title">Лебедь-кликун</div>
                <div class="treasures-2-item__descr">
                    В&nbsp;Лапландский заповедник эти птицы прилетают с&nbsp;мест зимовки в&nbsp;марте&nbsp;&mdash;
                    начале
                    апреля. Холода им&nbsp;не&nbsp;страшны&nbsp;&mdash; главное, чтобы была открытая вода, где лебеди
                    могут
                    кормиться. Эти птицы моногамны и&nbsp;образуют пару на&nbsp;всю жизнь.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_5">
                <div class="treasures-2-item__title">Обыкновенный серый сорокопут</div>
                <div class="treasures-2-item__descr">
                    Эта крупная певчая птица&nbsp;&mdash; безжалостный охотник. Основу её&nbsp;рациона составляют
                    мышевидные
                    грызуны, ящерицы и&nbsp;крупные насекомые. Пойманную добычу сорокопут может запасать впрок,
                    нанизывая
                    жертв на&nbsp;острые сучки и&nbsp;шипы.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_6">
                <div class="treasures-2-item__title">Дикий северный олень</div>
                <div class="treasures-2-item__descr">
                    Единственный вид оленей, у&nbsp;которого рога имеют как самцы, так и&nbsp;самки. В&nbsp;Лапландском
                    заповеднике обитает примерно 1000 этих животных. Чтобы пережить суровые зимы, олени на&nbsp;время
                    сбиваются в&nbsp;стада по&nbsp;100 и&nbsp;более особей.
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
    data() {
        return {
            isLoadingOne: false,
            isLoadingTwo: false,
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
        videoLoaded() {
            this.isLoadingOne = true;
        },
        videoLoadedTwo() {
            this.isLoadingTwo = true;
        },
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".treasures-2-container .treasures-2-item");
                gsap.to(".treasures-2-container", {
                    xPercent: -9.2 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".treasures-2",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".treasures-2-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>


<style lang="scss">
.treasures-2 {
    position: relative;
    overflow: hidden;
    background-color: #F7F6F2;

    &-container {
        display: flex;
        width: 184rem;
        height: 38.12rem;
        background-image: url(../../public/img/treasures-scroll-2.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;

        @media (max-width: 768px) {
            width: 652rem;
            height: 100%;
            background-size: 100%;
            background-image: url(../../public/img/treasures-scroll-2-mobile.png);

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

    video {
        position: absolute;
        width: 100%;
    }

    .lizard {
        position: absolute;
        top: 25rem;
        left: 20rem;
        width: 17rem;

        video {
            transform: scaleX(-1);
            width: 145%;
            top: -1rem;
            left: -4rem;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .swan {
        position: absolute;
        top: 12rem;
        left: 64rem;
        width: 34rem;

        video {
            width: 109%;
            top: -2rem;
            left: -2rem;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .deep {
        position: absolute;
        top: 0rem;
        left: 132rem;
        width: 50rem;
        transform: scaleX(-1);

        @media (max-width: 768px) {
            display: none;
        }
    }

    .shrike {
        position: absolute;
        top: 3rem;
        left: 100rem;
        width: 27rem;
        transform: rotate(-14deg);

        @media (max-width: 768px) {
            display: none;
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
            width: 27.889rem;
            padding: 4.1rem 3.795rem 0 3.5rem;

            @media (max-width: 768px) {
                width: 105rem;
                padding: 12rem 11.46rem 0 16rem;
            }
        }

        &_2 {
            width: 20.487rem;
            padding: 13.403rem 4.1rem 0 0;

            @media (max-width: 768px) {
                width: 67rem;
                padding: 34rem 11rem 0 0;
            }
        }

        &_3 {
            width: 23.4866rem;
            padding: 4rem 5.3472rem 0 0;

            @media (max-width: 768px) {
                width: 78rem;
                padding: 4rem 14rem 0 0;
            }
        }

        &_4 {
            width: 58.778rem;
            padding: 9.97rem 38rem 0 0;

            @media (max-width: 768px) {
                width: 199rem;
                padding: 20.97rem 131rem 0 0;
            }
        }

        &_5 {
            width: 38.23rem;
            padding: 10.458rem 19.4rem 0 0;

            @media (max-width: 768px) {
                width: 125rem;
                padding: 36rem 60rem 0 0;
            }
        }

        &_6 {
            width: 26.32rem;
            padding: 3.2rem 1rem 0 0;

            @media (max-width: 768px) {
                width: 98rem;
                padding: 13rem 15.4rem 0 0;
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
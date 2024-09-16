<template>
    <section class="scroll mb-100">
        <div class="scroll-bg bg-1">
        </div>
        <div class="scroll-bg bg-2">
        </div>
        <div class="scroll-bg bg-3">
        </div>
        <div class="scroll-bg bg-4">
        </div>
        <div class="scroll-wrap">
            <slot></slot>
        </div>
    </section>
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
    beforeDestroy() {
        this.ScrollTrigger.kill()
        this.ScrollTrigger = null
    },
    methods: {
        scrollMobile() {
            const collageItems = Array.from(document.querySelectorAll(".scroll-bg.active"))

            collageItems.forEach((elem) => {
                elem.css('background-position', '0px ' + document.scrollTop() + 'px')
            })
        },
        scrollAnimation() {
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
                        scrub: true,
                    },

                });

            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".card-4",
                    start: () => "+=120%",
                    end: () => "+=" + (document.querySelector(".scroll-wrap").offsetHeight),
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-bg" }
                },
            });
        }
    }
}
</script>

<style lang="scss">
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
        width: 100%;
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 768px) {
            background-position: top;
            background-size: contain;
        }

        &.active {
            background-attachment: fixed;
            height: 100%;

            @media (max-width: 768px) {
                height: 100%;
                background-size: contain;
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
        }

        &.bg-1 {
            z-index: 4;
        }

        &.bg-2 {
            z-index: 3;
        }

        &.bg-3 {
            z-index: 2;
        }

        &.bg-4 {
            z-index: 1;
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
</style>
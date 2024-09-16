<template>
    <section class="section-orange">
        <img class="line line-top" src="img/section-line-top.png" alt="">
        <slot></slot>
        <img v-if="this.$route.path !== '/big-expedition'" class="line line-bottom" src="img/section-line-bottom.png" alt="">
    </section>
</template>

<style lang="scss" scoped>
.section-orange {
    position: relative;
    background: #F7F6F2;
    margin-bottom: 9.5rem;
    padding-bottom: 3.72rem;

    @media (max-width: 768px) {
        margin-bottom: 22rem;
    }

    .line {
        position: absolute;
        width: 100%;
        height: 9.5rem;


        @media (max-width: 768px) {
            height: 12rem;
        }

        &-top {
            top: -9.5rem;

            @media (max-width: 768px) {
                top: -12rem;
            }
        }

        &-bottom {
            bottom: -9.5rem;

            @media (max-width: 768px) {
                bottom: -12rem;
            }
        }
    }
}
</style>
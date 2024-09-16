<template>
    <div class="number-block">
        <div class="number-block__top" v-html="textTop"></div>
        <div class="number-block__bottom" v-html="textBottom"></div>
    </div>
</template>

<script>
export default {
    props: {
        textTop: {
            type: String,
            default: ''
        },
        textBottom: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.number-block {
    padding-left: 1.25rem;
    width: 17rem;
    border-left: 1px solid #333333;
    color: var(--gray-1, #333);
    position: absolute;
    bottom: 0;
    left: 37rem;

    @media (max-width: 768px) {
        position: static;
        margin-top: 7.45rem;
        width: 100%;
        left: 0;
        padding-left: 5.33334rem;
    }

    &__top {
        font-size: 2.77778rem;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 768px) {
            font-size: 10.67rem;
        }
    }

    &__bottom {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            font-size: 4.53334rem;
        }
    }
}
</style>
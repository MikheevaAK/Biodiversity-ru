<template>
    <div class="block-info" :style="{ width: width }">
        <div class="block-info__img">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" :fill="color" />
            </svg>
        </div>
        <div class="block-info__text">
            <div class="block-info__title" v-if="title" v-html="title"></div>
            <p v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#C2C095'
        },
        width: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
        ,
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.block-info {
    position: absolute;
    display: flex;
    gap: 0.62rem;
    font-size: 1.04167rem;
    line-height: 130%;

    @media (max-width: 768px) {
        font-size: 3.73334rem;
        gap: 1.6rem;
    }

    &__img {
        width: 0.875rem;
        height: 0.875rem;
        flex-shrink: 0;

        @media (max-width: 768px) {
            width: 1.87rem;
            height: 1.87rem;
        }
    }

    &__title {
        margin-bottom: 0.5rem;
        font-weight: 600;

        @media (max-width: 768px) {
            margin-bottom: 1.6667rem;
        }
    }
}
</style>
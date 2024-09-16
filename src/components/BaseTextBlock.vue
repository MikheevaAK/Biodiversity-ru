<template>
    <div class="text-block__wrap" :class="{ 'text-block__wrap-index': tooltip }">
        <h3 v-if="title" class="text-block__title">
            <span v-html="title"></span>
            <div v-if="undertitle" class="text-block__undertitle">{{ undertitle }}</div>
        </h3>
        <div class="text-block__descr">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        tooltip: {
            type: Boolean,
            default: false
        },
        undertitle: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss">
.text-block {
    position: relative;

    &__wrap {
        position: relative;
        margin: 0 auto;
        width: 34rem;

        &-index {
            z-index: 10;
        }

        @media (max-width: 768px) {
            padding: 0 9.5rem;
            width: 100%;
        }
    }

    &__title {
        margin-bottom: 1.75rem;
        color: var(--gray-1, #333);
        font-size: 1.52778rem;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 768px) {
            margin-bottom: 6.4rem;
            font-size: 5.8667rem;
        }
    }

    &__undertitle {
        margin-top: 0.6rem;
        color: #D38235;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            font-size: 4.8rem;
            margin-top: 3rem;
        }
    }

    &__descr {
        color: var(--gray-1, #333);
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            font-size: 4.53334rem;
        }
    }
}
</style>
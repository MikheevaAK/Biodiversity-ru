<template>
    <div class="scale__wrap">
        <div class="scale">
            <div class="scale-active" :class="hasClass"></div>
        </div>
        <div class="scale__percent"> {{ percent }}</div>
    </div>
</template>

<script>
export default {
    props: {
        percent: {
            type: String,
            default: ''
        },
        hasClass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.scale {
    position: relative;
    height: 0.75rem;
    width: 17.5625rem;
    background: var(--gray-5, #E0E0E0);

    @media (max-width: 768px) {
        width: 74.934rem;
        height: 3.2rem;
    }

    &-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background: var(--copper, #D38235);
    }

    &__wrap {
        display: flex;
        gap: 0.69rem;
        align-items: center;

        @media (max-width: 768px) {
            justify-content: space-between;
            width: 100%;
            padding: 0 4rem;
            margin-bottom: 3.7333rem;

            &:not(:last-child) {
                margin-bottom: 3.7333rem;
            }
        }
    }

    &__percent {
        color: #000;
        font-size: 1rem;
        font-weight: 600;

        @media (max-width: 768px) {
            font-size: 4.2667rem;
        }
    }
}
</style>
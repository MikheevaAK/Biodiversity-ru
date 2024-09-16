<template>
    <div class="sidebar">
        <div class="sidebar__line sidebar__line-top"></div>
        <div class="sidebar__text">
            <slot></slot>
        </div>
        <div class="sidebar__line sidebar__line-bottom"></div>
    </div>
</template>

<style lang="scss">
.sidebar {
    display: flex;
    margin: 0 auto;
    width: 44.125rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0 4rem;
        gap: 6.4rem;
    }

    &__line {
        width: 13.8125rem;
        height: 0.75rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 768px) {
            width: 58.95rem;
            height: 3.2rem;
        }

        &-top {
            background-image: url(../../public/img/line-top.png);
        }

        &-bottom {
            background-image: url(../../public/img/line-bottom.png);
        }

    }

    &__text {
        padding: 0 2.5rem;
        font-size: 1.38889rem;
        font-weight: 300;
        line-height: 130%;
        text-align: center;
        color: var(--copper, #D38235);

        @media (max-width: 768px) {
            padding: 0;
            font-size: 4.8rem;
        }
    }
}
</style>
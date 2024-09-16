<template>
    <div class="text-quotes">
        <div class="quote-left">&#171;</div>
        <div class="quote-right">&#187;</div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
.text-quotes {
    position: relative;
    margin: 0 auto;
    width: 34.1rem;
    padding: 1.46rem 1.32rem;
    background: #F7F6F2;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 130%;

    @media (max-width: 768px) {
        width: unset;
        padding: 5.6rem 5.0667rem;
        margin: 0 4.2667rem;
        font-size: 4.53334rem;
    }

    .quote-left,
    .quote-right {
        position: absolute;
        color: #D38235;
        top: 40%;
        font-size: 5.556rem;
        font-weight: 300;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .quote-left {
        left: -4rem;
    }

    .quote-right {
        right: -4rem;
    }
}
</style>
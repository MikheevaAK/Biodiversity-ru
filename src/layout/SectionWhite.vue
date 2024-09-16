<template>
    <section class="section-white">
        <slot></slot>
    </section>
</template>

<style lang="scss">
.section-white {
    margin-bottom: 9.5rem;

    @media (max-width: 768px) {
        margin-bottom: 22rem;
    }
}
</style>
<template>
    <div class="clue">
        <div v-if="!isModile" class="clue__external" @mouseover="toggalShow" @mouseout="toggalShow">{{ word }}
        </div>
        <div v-if="isModile" class="clue__external" @click="toggalShow">{{ word }}</div>
        <div v-if="show" class="clue__substrate"></div>
        <div v-if="show" class="clue__hidden">
            <svg v-if="isModile" class="clue__hidden-close" @click="toggalShow" xmlns="http://www.w3.org/2000/svg"
                width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M16 1L1 16" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 1L16 16" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            isModile: (window.innerWidth <= 768)
        }
    },
    props: {
        word: {
            type: String,
            default: ''
        },
    },
    methods: {
        toggalShow() {
            this.show = !this.show

            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));

            if (this.show && this.isModile) {
                document.body.style.overflow = 'hidden'
                collageItems.forEach((elem) => {
                    elem.style.transform = 'unset'
                })
            } else {
                document.body.style.overflow = 'auto'

                collageItems.forEach((elem) => {
                    elem.style.transform = 'auto'
                })
            }
        },
        onResize() {
            this.isMobile = (window.innerWidth <= 768);
        },
    }
}
</script>

<style lang="scss">
.clue {
    display: inline-block;

    &__external {
        display: inline-block;
        text-decoration-line: underline;
        text-decoration-skip-ink: none;
        color: var(--copper, #D38235);
        cursor: pointer;
    }

    &__hidden {
        position: absolute;
        left: 0;
        width: 100%;
        text-align: left;
        padding: 1.5rem;
        border-radius: 0.25rem;
        background: var(--white, #FFF);
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.20);
        z-index: 3;

        @media (max-width: 768px) {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
            border-radius: unset;
            box-shadow: unset;
            padding: 13.3334rem 5.3334rem 7.467rem 5.3334rem;
        }

        &-close {
            position: absolute;
            top: 6.1332rem;
            right: 5.3334rem;
            width: 4rem;
            height: 4rem;
        }
    }

    &__substrate {
        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.7;
            background: #F7F6F2;
            z-index: 2;
        }
    }
}
</style>
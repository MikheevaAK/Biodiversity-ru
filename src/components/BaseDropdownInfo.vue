<template>
    <div class="dropdown-info">
        <div @click="toggleInfo" class="dropdown-info__wrap" :class="toggleClass">
            <div class="dropdown-info__svg" :style="{ background: color }" :class="`pulsation_${pulsationColor}`">
                <svg class="dropdown-info__minus" xmlns="http://www.w3.org/2000/svg" width="12" height="2"
                    viewBox="0 0 12 2" fill="none">
                    <path d="M11 0.999996L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 1L11 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                <svg class="dropdown-info__minus" :class="{ 'dropdown-info__minus_close': show }"
                    xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                    <path d="M11 0.999996L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 1L11 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div class="dropdown-info__title">
                {{ title }}
            </div>
        </div>
        <Transition name="dropdown-info">
            <div v-if="show && (!isModal || isModal && !isMobile)" class="dropdown-info__text" v-html="text"></div>
        </Transition>

        <div v-if="show && isModal && isMobile" class="modal">
            <div class="modal__substrate"></div>
            <div class="modal__wrap">
                <svg class="modal-close" @click="toggleInfo" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                    viewBox="0 0 17 17" fill="none">
                    <path d="M16 1L1 16" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 1L16 16" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="modal__title">
                    {{ title }}
                </div>
                <div class="modal__text" v-html="text"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            isMobile: window.innerWidth <= 768,
            toggleClass: ''
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#C2C095'
        },
        isModal: {
            type: Boolean,
            default: false
        },
        pulsationColor: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        onResize() {
            this.isMobile = (window.innerWidth <= 768);
        },
        toggleInfo() {
            this.show = !this.show

            if (this.show && this.isModal && this.isMobile) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            
            let isTimeout = null
            if (this.show && (!this.isModal || this.isModal && !this.isMobile)) {
                clearTimeout(isTimeout)
                this.toggleClass = 'z-index'
            } else {
                clearTimeout(isTimeout)
                isTimeout = setTimeout(function() {
                    this.toggleClass = ''
                }.bind(this), 500)
            }
        },
    },
}
</script>

<style lang="scss">
.dropdown-info {
    position: relative;
    font-size: 1.04167rem;
    line-height: 130%;

    @media (max-width: 768px) {
        font-size: 3.73334rem;
    }

    &__wrap {
        display: flex;
        align-items: center;
        gap: 0.88rem;
        position: relative;
        z-index: 2;
        animation-name: none;
        cursor: pointer;

        @media (max-width: 768px) {
            gap: 2rem;
        }
    }

    &__svg {
        position: relative;
        display: flex;
        padding: 0.5rem;
        width: 1.625rem;
        height: 1.625rem;
        flex-shrink: 0;
        border-radius: 50%;

        @media (max-width: 768px) {
            padding: 2.2rem;
            width: 7.467rem;
            height: 7.467rem;
        }
    }

    &__minus {
        position: absolute;
        width: 0.625rem;
        height: 0.625rem;
        transition: .5s;

        @media (max-width: 768px) {
            width: 3.2rem;
            height: 3.2rem;
        }

        &:last-child {
            transform: rotateZ(90deg);
        }

        &_close {
            transform: rotateZ(0deg) !important;
        }
    }

    &__title {
        font-weight: 600;
        max-width: 14rem;

        @media (max-width: 768px) {
            font-size: 3.75rem;
        }
    }

    &__text {
        position: absolute;
        width: 19.6rem;
        padding: 2.56rem 0.62rem 0.88rem 3.13rem;
        border-radius: 0.25rem;
        background: #FFF;
        z-index: 3;
        top: -0.62rem;
        left: -0.62rem;
        transform-origin: top left;
    }

    &-enter-active {
        animation: bounce-in .5s;
    }

    &-leave-active {
        animation: bounce-in .5s reverse;
    }

    .modal {
        &__substrate {
            @media (max-width: 768px) {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.7;
                background: #F7F6F2;
                z-index: 3;
            }
        }

        &__wrap {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
            background: #fff;
            z-index: 3;
            padding: 13.3334rem 5.3334rem 7.467rem 5.3334rem;
        }

        &-close {
            position: absolute;
            top: 6.1332rem;
            right: 5.3334rem;
            width: 4rem;
            height: 4rem;
            z-index: 3;
        }

        &__title {
            margin-bottom: 2rem;
            font-size: 4.8rem;
            font-weight: 600;
            line-height: 130%;
        }
    }

    .z-index {
        z-index: 4;
    }

    .pulsation_Green-Mist {
        animation: ripple-Green-Mist 1s infinite;
    }

    .pulsation_finn {
        animation: ripple-finn 1s infinite;
    }

    .pulsation_blue {
        animation: ripple-blue-big 1s infinite;
    }

    .pulsation_pantone {
        animation: ripple-pantone 1s infinite;
    }
}
</style>
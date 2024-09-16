<template>
    <div class="photo-block">
        <button @click="isShow = true" class="photo-block__button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path
                    d="M19 13.7276C19 14.1616 18.8276 14.5778 18.5207 14.8847C18.2138 15.1916 17.7976 15.364 17.3636 15.364H2.63636C2.20237 15.364 1.78616 15.1916 1.47928 14.8847C1.1724 14.5778 1 14.1616 1 13.7276V4.72763C1 4.29364 1.1724 3.87742 1.47928 3.57054C1.78616 3.26367 2.20237 3.09126 2.63636 3.09126H5.90909L7.54546 0.636719H12.4545L14.0909 3.09126H17.3636C17.7976 3.09126 18.2138 3.26367 18.5207 3.57054C18.8276 3.87742 19 4.29364 19 4.72763V13.7276Z"
                    stroke="white" stroke-width="0.818182" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M10.0006 12.0175C11.9124 12.0175 13.4621 10.5189 13.4621 8.67035C13.4621 6.82179 11.9124 5.32324 10.0006 5.32324C8.08885 5.32324 6.53906 6.82179 6.53906 8.67035C6.53906 10.5189 8.08885 12.0175 10.0006 12.0175Z"
                    stroke="white" stroke-width="0.818182" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

        <transition name="fade" mode="out-in">
            <div class="photo-block__modal" v-if="isShow">
                <div class="photo-block__modal-wrap" :style="{ 'background-image': image }">
                    <button @click="isShow = false" class="photo-block__button-close">
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="58" height="58" rx="29" fill="white"/>
                        <path d="M19.3555 18.6465L39.3555 38.6465" stroke="black" stroke-linecap="round"/>
                        <path d="M39.3555 19.3535L19.3555 39.3535" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <a v-if="linkUrl" target="_blank" :href="linkUrl" class="photo-block__modal-link">{{ linkTitle }}</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: ''
        },
        imgMobile: {
            type: String,
            default: ''
        },
        linkTitle: {
            type: String,
            default: ''
        },
        linkUrl: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            isShow: false
        }
    },
    watch: {
        isShow(newVal) {
            window.document.querySelector('body').style.overflow = newVal ? 'hidden' : ''
        }
    },
    computed: {
        image() {
            if (window.innerWidth > 768) {
                return 'url(' + this.img + ')'
            } else {
                return 'url(' + this.imgMobile + ')'
            }

        }
    }
}
</script>

<style lang="scss">
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.photo-block {
    &__button {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--turquoise, #009CA6);
        box-shadow: 0px 3.27273px 40.90909px 0px rgba(157, 148, 140, 0.20);
        border: none;
        outline: none;
        cursor: pointer;
        animation: ripple-green .9s linear infinite;

        @media (max-width: 768px) {
            width: 7.9rem;
            height: 7.9rem;
        }

        svg {
            width: 1.25rem;
            height: 1.023rem;

            @media (max-width: 768px) {
                width: 3.8rem;
                height: 3.23rem;
            }
        }
    }

    &__modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.60);
        overflow: hidden;
        z-index: 20;

        &-link {
            position: absolute;
            bottom: 1.389rem;
            left: 1.67rem;
            color:#FFF;
            font-size: 16px;
            font-weight: 300;
            line-height: 130%;
            text-decoration-line: underline;
            text-decoration-skip-ink: none;
        }
    }

    &__modal-wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 30px;
        z-index: 3;
        width: 94.934rem;
        max-height: 46.3199rem;
        height: 100%;
        background-color: #fff;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 768px) {
            width: 100%;
            max-height: 144rem;
        }
    }

    &__button-close {
        position: absolute;
        z-index: 1;
        width: 4.028rem;
        height: 4.028rem;
        top: 1.1111rem;
        right: 1.1111rem;
        border: none;
        outline: none;
        background-color: transparent;

        @media (max-width: 768px) {
            width: 10.667rem;
            height: 10.667rem;
            top: 2.4rem;
            right: 2.4rem;
        }
    }
}
</style>
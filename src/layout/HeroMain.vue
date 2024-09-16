<template>
    <div class="hero-main">
        <video v-if="!isMobile" autoplay loop muted playsinline class="hero-main__video">
            <source src="img/video/main.mp4" type="video/mp4">
        </video>
        <div class="container">
            <a href="/" class="hero-main__link">
                <svg v-if="this.$route.path === '/'" xmlns="http://www.w3.org/2000/svg" width="118" height="27"
                    viewBox="0 0 118 27" fill="none">
                    <g clip-path="url(#clip0_3185_3993)">
                        <mask id="mask0_3185_3993" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="118" height="28">
                            <path d="M118 0H0V27.0231H118V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3185_3993)">
                            <path
                                d="M80.6069 13.5587V8.99316H78.0872V18.0025H80.4256L83.1555 13.4747V18.0025H85.6746V8.99316H83.3368L80.6069 13.5587ZM66.0728 12.6355C66.0728 12.9629 65.9228 13.5956 65.1498 13.5956H64.2576V11.2108H65.2626C65.5301 11.2108 66.0728 11.449 66.0728 12.1529V12.6355ZM65.5325 8.99316H61.5985V18.0025H64.2576V15.7909H65.5325C67.252 15.7909 68.661 14.758 68.661 12.9183V11.864C68.661 10.0261 67.252 8.99316 65.5325 8.99316ZM103.206 13.7602C103.206 15.1317 102.876 15.3306 102.4 15.568C102.193 15.6735 101.631 15.6503 101.631 15.6503V18.0025H102.673C104.912 18.0025 105.739 16.5812 105.772 13.4044C105.781 12.6843 105.768 11.9763 105.772 11.3428H107.264V18.0025H109.924V8.99316H103.206V13.7602ZM58.0245 14.9714C58.0245 15.568 57.5776 16.0567 57.03 16.0567H56.8027C56.2551 16.0567 55.8067 15.568 55.8067 14.9714V12.05C55.8067 11.4525 56.2551 10.9664 56.8027 10.9664H57.03C57.5776 10.9664 58.0245 11.4525 58.0245 12.05V14.9714ZM57.5674 8.84653H56.2653C54.5439 8.84653 53.1349 10.1829 53.1349 12.2548V14.7691C53.1349 16.8521 54.5439 18.18 56.2653 18.18H57.5674C59.2855 18.18 60.6968 16.8402 60.6968 14.7691V12.2548C60.6968 10.0723 59.2855 8.84653 57.5674 8.84653ZM94.4353 8.99316H91.556L90.1524 12.3963H89.4987V8.99316H86.8367V18.0025H89.4987V14.7991H90.15L91.5861 18.0025H94.6384L92.3827 13.4576L94.4353 8.99316ZM97.7303 14.5813H100.728V12.4383H97.7303V11.3428H100.999V8.99316H95.0731V18.0025H101.246V15.6503H97.7303V14.5813ZM114.599 15.7832H113.597V13.8167H114.489C115.242 13.8167 115.412 14.4177 115.412 14.8077C115.412 15.6169 114.801 15.7832 114.599 15.7832ZM114.87 11.6205H113.597V8.99316H110.937V18.0025H114.87C116.591 18.0025 118 16.9661 118 15.1291V14.4939C118 12.6543 116.591 11.6205 114.87 11.6205ZM74.2631 12.326H71.9944V8.99316H69.3341V18.0025H71.9944V14.7991H74.2631V18.0025H76.9233V8.99316H74.2631V12.326ZM49.5725 12.326H47.3043V8.99316H44.6444V18.0025H47.3043V14.7991H49.5725V18.0025H52.2341V8.99316H49.5725V12.326ZM31.6923 21.0148C30.4964 22.3195 29.0449 23.2419 27.4636 23.7288V3.29602C29.0449 3.78207 30.4964 4.70444 31.6923 6.00656C33.5301 8.01074 34.5418 10.6776 34.5418 13.5107C34.5418 16.3472 33.5301 19.0124 31.6923 21.0148ZM12.4022 14.4159V3.49662L24.8004 12.6115V23.5282L12.4022 14.4159ZM9.74298 23.7288C8.16084 23.2444 6.70855 22.3195 5.51348 21.0148C3.67408 19.0124 2.65997 16.3472 2.65997 13.5124C2.65997 10.6776 3.67408 8.01074 5.51348 6.00656C6.70855 4.70444 8.16084 3.78207 9.74298 3.29602V23.7288ZM24.8004 0V9.11399L12.4022 0.000857224C5.55281 0.000857224 0 6.05028 0 13.5124C0 20.9762 5.55281 27.0231 12.4022 27.0231V17.9091L24.8004 27.0231C31.6514 27.0231 37.2042 20.9762 37.2042 13.5107C37.2042 6.05028 31.6514 0 24.8004 0Z"
                                fill="white" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_3185_3993">
                            <rect width="118" height="27" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <svg v-else-if="this.$route.path !== '/'" width="159" height="33" viewBox="0 0 159 33" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_335_4036)">
                        <path
                            d="M66.7953 15.0451H63.7297V10.971H60.163V21.971H63.7297V18.0715H66.7953V21.971H70.3915V10.971H66.7953V15.0451ZM100.075 15.0451H97.0095V10.971H93.4132V21.971H97.0095V18.0715H100.075V21.971H103.642V10.971H100.075V15.0451ZM154.785 14.172H153.075V10.971H149.508V21.971H154.814C157.143 21.971 159.029 20.7197 159.029 18.4789V17.6932C159.029 15.4525 157.143 14.172 154.814 14.172M154.461 19.2646H153.105V16.8493H154.313C155.315 16.8493 155.551 17.5768 155.551 18.0715C155.551 19.0609 154.726 19.2646 154.461 19.2646ZM131.734 17.8096H135.772V15.1906H131.734V13.8519H136.126V10.971H128.137V21.971H136.45V19.09H131.704V17.7805L131.734 17.8096ZM127.283 10.971H123.421L121.534 15.1324H120.65V10.971H117.083V21.971H120.65V18.0715H121.534L123.48 21.971H127.607L124.571 16.4128L127.341 10.971H127.283ZM77.6135 10.7964H75.8448C73.5161 10.7964 71.6296 12.426 71.6296 14.9578V18.0424C71.6296 20.5742 73.5161 22.2038 75.8448 22.2038H77.6135C79.9422 22.2038 81.8287 20.5742 81.8287 18.0424V14.9578C81.8287 12.2805 79.9422 10.7964 77.6135 10.7964ZM78.2325 18.2752C78.2325 19.0027 77.6135 19.5847 76.8765 19.5847H76.5523C75.8154 19.5847 75.2258 19.0027 75.2258 18.2752V14.6959C75.2258 13.9683 75.8154 13.3863 76.5523 13.3863H76.8765C77.6135 13.3863 78.2325 13.9683 78.2325 14.6959V18.2752ZM139.132 16.7911C139.132 18.4789 138.69 18.7117 138.042 19.0027C137.747 19.1191 137.01 19.1191 137.01 19.1191V22.0001H138.425C141.432 22.0001 142.552 20.2832 142.611 16.3837C142.611 15.5107 142.611 14.6377 142.611 13.8519H144.615V21.971H148.182V10.971H139.132V16.7911ZM88.3726 10.971H83.0667V21.971H86.663V19.2646H88.3726C90.7013 19.2646 92.5879 18.0133 92.5879 15.7435V14.4631C92.5879 12.2223 90.7013 10.9419 88.3726 10.9419M89.1096 15.3943C89.1096 15.8017 88.9032 16.5583 87.8715 16.5583H86.663V13.6482H88.0189C88.3726 13.6482 89.1096 13.9392 89.1096 14.7832V15.3652V15.3943ZM108.712 16.5292V10.9419H105.322V21.9419H108.476L112.161 16.4128V21.9419H115.551V10.9419H112.397L108.712 16.5292Z"
                            fill="#626261" />
                        <path d="M16.7136 21.8836L33.4271 33V11.1455L16.7136 0V21.8836Z" fill="#00589C" />
                        <path d="M16.7136 0C7.48721 0 0 7.39153 0 16.5C0 25.6085 7.48721 33 16.7136 33V0Z"
                            fill="#0080C8" />
                        <path
                            d="M33.4272 33C42.6535 33 50.1408 25.6085 50.1408 16.5C50.1408 7.39153 42.6535 0 33.4272 0V33Z"
                            fill="#0080C8" />
                    </g>
                    <defs>
                        <clipPath id="clip0_335_4036">
                            <rect width="159" height="33" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <div class="hero-main__wrap" v-if="!isMobile" >
                <h1 class="hero-main__title">
                    Сохраняя экосистемы
                </h1>
                <p class="hero-main__descr">
                    Узнайте, какие подходы использует &laquo;Норникель&raquo; для сохранения природных экосистем, какая
                    экотехнология восстановления водоёмов оказалась наиболее перспективной, где найти биологические
                    реликты и&nbsp;как &laquo;Норникель&raquo; спасает жизни королей Арктики.
                </p>
            </div>
        </div>

        <div v-if="isButton" class="hero-main__button" @click.prevent="scrollToMain()">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path
                    d="M30.4508 18.0598C30.4508 18.3748 30.3458 18.5848 30.1358 18.7948L21.7358 27.1948C21.3158 27.6148 20.6858 27.6148 20.2658 27.1948L11.8658 18.7948C11.4458 18.3748 11.4458 17.7448 11.8658 17.3248C12.2858 16.9048 12.9158 16.9048 13.3358 17.3248L21.0008 24.9898L28.6658 17.3248C29.0858 16.9048 29.7158 16.9048 30.1358 17.3248C30.3458 17.5348 30.4508 17.8498 30.4508 18.0598Z"
                    fill="white" />
                <path
                    d="M42 21C42 32.55 32.55 42 21 42C9.45 42 -4.13073e-07 32.55 -9.17939e-07 21C-1.12448e-06 16.275 1.575 11.865 4.41 8.085C4.725 7.665 5.46 7.56 5.88 7.875C6.3 8.19 6.405 8.925 6.09 9.345C3.465 12.705 2.1 16.8 2.1 21C2.1 31.395 10.605 39.9 21 39.9C31.395 39.9 39.9 31.395 39.9 21C39.9 10.605 31.395 2.1 21 2.1C17.64 2.1 14.28 3.045 11.34 4.725C10.815 5.04 10.185 4.83 9.87 4.41C9.555 3.885 9.765 3.255 10.185 2.94C13.545 1.05 17.22 -7.5271e-07 21 -9.17939e-07C32.55 -1.42281e-06 42 9.45 42 21Z"
                    fill="white" />
            </svg>
        </div>
        <div class="hero-main-strip"></div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        descr: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        imgMobile: {
            type: String,
            default: ''
        },
        isButton: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        image() {
            if (window.innerWidth > 768) {
                return 'url(' + this.img + ')'
            } else {
                return 'url(' + this.imgMobile + ')'
            }

        },
        isMobile() {
            return window.innerWidth <= 768
        },
    },
    methods: {
        scroll() {
            const el = document.getElementById('main');
            const y = el.getBoundingClientRect().top + window.screenY;

            window.scrollBy({ top: y, behavior: 'smooth' });
        },
        scrollToMain() {
            this.scroll()
        }
    }
}
</script>

<style lang="scss">
.hero-main {
    position: relative;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    background-position: top right;
    background-size: cover;
    background-repeat: no-repeat;


    @media (max-width: 768px) {
        background-position: top;
    }

    &__video {
        min-height: 100vh;
        width: 100%;
        object-fit: cover;
    }

    &-strip {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2.2rem;
        height: 8.125rem;
        background-image: url(../../public/img/strip.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 768px) {
            left: -107px;
            right: 0;
            bottom: -4.2rem;
            height: 26.67rem;
        }
    }

    .container {
        position: absolute;
        inset: 0;
        // padding: 31vh 5.03rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        @media (max-width: 768px) {
            padding: 18.8rem 4.3rem;
        }
    }

    &__wrap {
        width: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 19vh;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__title {
        margin-bottom: 0.5vh;
        font-size: 4.9vh;
        font-weight: 600;
        line-height: 120%;
        text-transform: uppercase;
        color: var(--copper, #D38235);

        @media (max-width: 768px) {
            margin-bottom: 7.24637rem;
            font-size: 10.66rem;
        }
    }

    &__descr {
        // width: 26.375rem;
        text-align: center;
        // font-size: 1.125rem;
        width: 55vh;
        font-size: 2.1vh;
        font-weight: 400;
        line-height: 120%;
        color: var(--gray-1, #333);

        @media (max-width: 768px) {
            font-size: 5rem;
            width: unset;
        }
    }

    &__link {
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
        width: 9.9375rem;
        height: 2.0625rem;
        display: block;

        @media (max-width: 768px) {
            top: 5rem;
            left: 4.3rem;
            width: 23.5rem;
            height: 5rem;
        }
    }

    &__button {
        position: absolute;
        bottom: 5rem;
        left: calc(50% - 21px);
        width: 42px;
        height: 42px;
        cursor: pointer;
        animation-duration: 1.2s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: scroll;
        background: none repeat scroll;


        @media (max-width: 768px) {
            bottom: 17rem;
        }
    }
}
</style>
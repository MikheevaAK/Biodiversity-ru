<template>
    <nav class="nav">
        <a :href="link" class="lang">
            <span>RU</span>
        </a>
        <div class="social">
            <ul v-show="isOpenShare">
                <li v-for="item in socials" :key="item.name">
                    <a :id="item.name" target="_blank" :href="getShareLink(item.name)" class="social__link" v-html="item.icon"></a>
                </li>
            </ul>
        </div>
        <div class="burger">
            <svg xmlns="http://www.w3.org/2000/svg" :class="{'burger_active' :isOpenLinks }" width="55" height="55" viewBox="0 0 55 55" fill="none">
                        <rect width="55" height="55" fill="#0077C8"/>
                        <path d="M16 34.1172H39.5294" :class="{'first' :isOpenLinks }" stroke="white" stroke-linecap="round"/>
                        <path d="M16 27.0586H39.5294" class="second" stroke="white" stroke-linecap="round"/>
                        <path d="M16 20H39.5294" class="third" stroke="white" stroke-linecap="round"/>
                    </svg>
            <transition name="links">
                <ul class="burger__list" v-show="isOpenLinks">
                    <li class="burger__item burger__item_display">
                        <a :href="link">RU</a>
                    </li>
                    <li class="burger__item" v-for="(item, index) in links" :key="index" :class="{'burger__item_active' : item.link === $route.path}">
                        <a :href="item.link">{{ item.title }}</a>
                    </li>
                </ul>
            </transition>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            link: `https://life.nornickel.com${document.location.pathname}`,
            socials: [{
                    name: 'telegram',
                    link: '',
                    icon: '<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group 1974"><rect id="Rectangle 8" width="55" height="55" fill="#0077C8"/><g id="Group 1973"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M35.4949 19H35.1923L18.3303 25.6892C18.1278 25.7932 17.9264 26.1075 18.0265 26.3155C18.0265 26.4206 18.229 26.5246 18.3303 26.6298L22.4701 28.1978L24.0856 33.4229C24.1868 33.7361 24.3893 33.8412 24.6919 33.7361C24.7932 33.7361 24.7932 33.7361 24.8944 33.6321L27.2152 31.7509C27.4177 31.5418 27.8215 31.5418 28.0229 31.7509L32.1628 34.8858C32.3653 35.095 32.669 34.991 32.8704 34.7818C32.8704 34.6767 32.9716 34.6767 32.9716 34.5727L36 19.5223C35.8988 19.3131 35.6963 19 35.4949 19ZM31.9614 22.5543L25.3984 28.9281C25.1959 29.1372 24.9934 29.4504 24.9934 29.7635L24.792 31.5406C24.792 31.6446 24.6908 31.7498 24.5895 31.7498C24.4894 31.7498 24.3882 31.6446 24.3882 31.5406L23.9337 29.9726L23.4803 28.4046C23.3791 28.0915 23.4803 27.6732 23.7829 27.4641L31.7589 22.344H31.9614V22.552V22.5543Z" fill="white"/></g></g></svg>'
                },
                {
                    name: 'vk',
                    link: '',
                    icon: '<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group 1977"><rect id="Rectangle 8" width="55" height="55" fill="#0077C8"/><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M35.0724 28.9934C35.7691 29.6228 36.5053 30.2156 37.1292 30.9086C37.4059 31.2166 37.6678 31.5331 37.8654 31.8912C38.1496 32.3997 37.8938 32.9582 37.401 32.9888H34.3423C33.5517 33.0486 32.9242 32.7541 32.3942 32.2542C31.9705 31.8558 31.5789 31.4292 31.1713 31.0174C31.0078 30.844 30.8227 30.692 30.6203 30.5651C30.2028 30.3134 29.8408 30.3904 29.6012 30.7937C29.3578 31.2031 29.3022 31.6578 29.28 32.1149C29.2466 32.7822 29.0292 32.957 28.3041 32.9888C26.7599 33.0548 25.2912 32.8384 23.9286 32.1161C22.7254 31.4806 21.794 30.5823 20.9824 29.5654C19.4024 27.5818 18.193 25.4063 17.106 23.1672C16.8614 22.6637 17.0405 22.3935 17.6408 22.3838C18.6389 22.3671 19.6372 22.3667 20.6353 22.3825C21.0429 22.3887 21.311 22.6025 21.4666 22.9582C22.0009 24.1948 22.6827 25.3638 23.4975 26.4402C23.7186 26.7287 23.9434 27.0159 24.2646 27.22C24.6191 27.4449 24.8897 27.3716 25.0564 27.0049C25.1639 26.7727 25.2096 26.5233 25.2331 26.274C25.3122 25.4197 25.322 24.5654 25.1837 23.7147C25.0984 23.1831 24.776 22.8384 24.2016 22.7382C23.9101 22.6869 23.9521 22.5867 24.0941 22.4327C24.3412 22.1662 24.5722 22 25.033 22H28.4882C29.0317 22.099 29.1552 22.3251 29.2293 22.8335L29.2318 26.3877C29.2256 26.5832 29.338 27.1662 29.7198 27.2958C30.0249 27.3887 30.2262 27.1613 30.4091 26.9829C31.238 26.1689 31.8297 25.2083 32.3572 24.2134C32.5919 23.7746 32.792 23.3212 32.9872 22.8665C33.1329 22.5304 33.359 22.3654 33.7691 22.3703L37.0971 22.374C37.1959 22.374 37.2947 22.3752 37.3911 22.3911C37.9519 22.4791 38.1063 22.7028 37.9321 23.21C37.6604 24.0044 37.1292 24.6681 36.6103 25.3317C36.0545 26.043 35.4615 26.7299 34.9106 27.4449C34.4041 28.0975 34.4448 28.4263 35.0724 28.9934Z" fill="white"/></g></svg>'
                },
                {
                    name: 'ok',
                    link: '',
                    icon: '<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group 1978"><rect id="Rectangle 8" width="55" height="55" fill="#0077C8"/><g id="Group 1993"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M27.5209 18C30.0122 18.0067 32.0117 20.0427 31.9999 22.5589C31.9871 25.0162 29.9545 27.0089 27.4663 27C25.0039 26.9922 22.9841 24.9528 23.0001 22.49C23.0129 20.0005 25.0338 17.9933 27.5209 18ZM27.5145 24.7039C28.7355 24.6994 29.7086 23.7192 29.7043 22.4967C29.7 21.2741 28.7248 20.3006 27.5027 20.2995C26.2699 20.2984 25.2861 21.2886 25.2958 22.5222C25.3043 23.7414 26.2891 24.7083 27.5145 24.7039Z" fill="white"/><path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M32.7117 28.85C32.1441 29.4256 31.4621 29.8426 30.7041 30.1326C29.988 30.408 29.2026 30.5462 28.426 30.638C28.5437 30.7649 28.5987 30.8272 28.6713 30.8986C29.7273 31.949 30.7855 32.9926 31.8372 34.0453C32.1958 34.4034 32.2695 34.8476 32.0726 35.2645C31.8581 35.7201 31.3752 36.0203 30.901 35.9875C30.6007 35.9671 30.3675 35.8198 30.1596 35.6135C29.3632 34.8204 28.5525 34.0419 27.7726 33.234C27.5449 32.9994 27.436 33.0436 27.2358 33.2476C26.435 34.0634 25.621 34.8679 24.8025 35.6657C24.4351 36.0249 23.9984 36.0894 23.5705 35.8844C23.1184 35.6679 22.8302 35.209 22.8522 34.749C22.8676 34.4374 23.0227 34.1994 23.2383 33.9864C24.2833 32.9552 25.3229 31.9207 26.3646 30.8873C26.4339 30.8193 26.4977 30.7468 26.5978 30.6403C25.1787 30.493 23.8972 30.1474 22.8016 29.2987C22.6652 29.1933 22.5244 29.0913 22.4012 28.9723C21.9205 28.5168 21.8732 27.9944 22.2516 27.4562C22.5772 26.9962 23.1217 26.8727 23.6893 27.1378C23.7993 27.1877 23.9027 27.2523 24.0028 27.3214C26.0467 28.7106 28.8539 28.7491 30.9043 27.3826C31.1067 27.2296 31.3246 27.1027 31.5754 27.0392C32.0649 26.9146 32.5214 27.0925 32.7843 27.5163C33.0846 28.0012 33.0813 28.4738 32.7117 28.85Z" fill="white"/></g></g></svg>'
                },
            ],
            links: [{
                    link: '/',
                    title: 'Главная',
                },
                {
                    link: '/norilsk-division',
                    title: 'Норильский дивизион',
                },
                {
                    link: '/kola-division',
                    title: 'Кольский дивизион',
                },
                {
                    link: '/transbaikal-division',
                    title: 'Забайкальский дивизион',
                },
                {
                    link: '/expedition',
                    title: 'Большая Норильская',
                },
                {
                    link: '/big-expedition',
                    title: 'Научная экспедиция',
                },
                {
                    link: '/white-bears',
                    title: 'Спасение белых медведей',
                },
                {
                    link: '/pyasino',
                    title: 'Вдохнуть жизнь в озеро',
                },
                {
                    link: '/indicator',
                    title: 'Загадочный ИПСЭ',
                },
                {
                    link: '/treasures-of-biodiversity',
                    title: 'Сокровищницы биоразнообразия',
                },
                {
                    link: '/art-on-the-expedition',
                    title: 'Искусство в экспедиции',
                },
            ],
            isOpenShare: false,
            isOpenLinks: false,
            share: {
                title: 'Сохраняя экосистемы',
                text: 'Интерактивный проект об экологических проектах «Норникеля» по сохранению природных экосистем.',
                tgImg: `${document.location.origin}/img/opengraph-telegram.jpg`,
                vkImg: `${document.location.origin}/img/opengraph-vk.jpg`,
            },
        }
    },
    mounted() {
        this.openShare()
        this.openLinks()
        document.addEventListener('click', this.dropdown)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.dropdown)
    },
    methods: {
        getShareLink(name) {
            if (name === 'vk') {
                return `https://vkontakte.ru/share.php?url=${document.location.href}&title=${this.share.title}&image=${this.share.vkImg}&noparse=false`
            }
            if (name === 'ok') {
                return `https://connect.ok.ru/offer?url=${document.location.href}&title=${this.share.title}&description=${this.share.text}&imageUrl=${this.share.vkImg}`
            }
            if (name === 'telegram') {
                return `https://t.me/share/url?url=${document.location.href}&title=${this.share.title}`
            }
        },
        openShare() {
            if (window.innerWidth > 768) {
                document.querySelector('.social').addEventListener("mouseover", () => {
                    this.isOpenShare = true
                })
                document.querySelector('.social').addEventListener("mouseout", () => {
                    this.isOpenShare = false
                })
            } else {
                document.querySelector('.social').addEventListener("click", () => {
                    this.isOpenShare = !this.isOpenShare
                })
            }
        },
        openLinks() {
            document.querySelector('.burger').addEventListener("click", () => {
                this.isOpenLinks = !this.isOpenLinks
            })
        },
        dropdown(e) {
            if (!this.$el.contains(e.target)) {
                this.isOpenShare = false
                this.isOpenLinks = false
            }
        },
    }
}
</script>

<style lang="scss">
.nav {
    position: fixed;
    top: 0;
    right: 1.25rem;
    z-index: 20;
    display: flex;
    @media (max-width: 768px) {
        right: 4rem;
        max-height: 12.77rem;
    }
}

.lang {
    position: relative;
    width: 3.4375rem;
    height: 3.4375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.1875rem;
    font-weight: 300;
    line-height: 2.25rem;
    background-color: #0077C8;
    transition: all .2s linear;
    &:hover {
        background-color: #00589C;
    }
    @media (max-width: 768px) {
        display: none;
    }
}

.social {
    position: relative;
    width: 3.4375rem;
    height: 3.4375rem;
    background-image: url(../../public/img/svg/sharing.svg);
    background-size: 100%;
    background-position: center;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 12.77rem;
        height: 12.77rem;
    }
    ul {
        position: absolute;
        top: 100%;
    }
    &__link {
        display: block;
        width: 3.4375rem;
        height: 3.4375rem;
        svg {
            width: 3.4375rem;
            height: 3.4375rem;
            @media (max-width: 768px) {
                width: 12.77rem;
                height: 12.77rem;
            }
        }
        @media (max-width: 768px) {
            width: 12.77rem;
            height: 12.77rem;
        }
        &:hover svg path {
            fill: #004C97;
        }
    }
}

.burger {
    background-size: 100%;
    background-position: center;
    width: 3.4375rem;
    height: 3.4375rem;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 12.77rem;
        height: 12.77rem;
    }
    path {
        transition: transform 0.25s;
    }
    &_active {
        position: relative;
        z-index: 3;
        .first {
            transform: rotate(45deg);
            transform-origin: 40px 33px;
        }
        .second {
            display: none;
        }
        .third {
            transform: rotate(-45deg);
            transform-origin: 35px 20px;
        }
    }
    &__list {
        position: absolute;
        top: 0;
        right: 0;
        padding: 3.844rem 1.4rem 2.8rem 0;
        background-color: #0077C8;
        width: 18.519rem;
        display: flex;
        flex-direction: column;
        gap: 1.5374rem;
        @media (max-width: 768px) {
            padding: 8rem 8.3333rem 10rem 0;
            width: 73.47rem;
            gap: 6.4rem;
        }
    }
    &__item {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;
        padding-left: 1.4rem;
        @media (max-width: 768px) {
            font-size: 4.53334rem;
            padding-left: 5.3333rem;
        }
        &_active {
            position: relative;
            font-weight: 600;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background-color: #FD7F07;
                width: 0.3477rem;
                @media (max-width: 768px) {
                    width: 1.334rem;
                }
            }
        }
        &_display {
            display: none;
            @media (max-width: 768px) {
                display: block;
            }
        }
        a {
            transition: .3s;
            border-bottom: 1.5px solid transparent;
        }
        &:hover a {
            border-bottom-color: #004C97;
        }
    }
}

.links-enter-active {
    animation: link-in .3s;
}

.links-leave-active {
    animation: link-in .3s reverse;
}

@keyframes link-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
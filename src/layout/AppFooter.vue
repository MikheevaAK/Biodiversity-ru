<template>
    <footer class="footer" :class="{ 'footer_orange': this.$route.path === '/big-expedition' || this.$route.path === '/' }">
        <div v-if="this.$route.path !== '/'" class="footer__top mb-100">
            <div class="footer__map">
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/norilsk-division'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/art-on-the-expedition'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/kola-division'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/transbaikal-division'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/expedition'}"></div>
                <div class="footer__block footer__block-big" :class="{ 'footer__block_active': this.$route.path === '/big-expedition'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/pyasino'}"></div>
                <div class="footer__block footer__block-big" :class="{ 'footer__block_active': this.$route.path === '/white-bears'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/indicator'}"></div>
                <div class="footer__block footer__block-small" :class="{ 'footer__block_active': this.$route.path === '/treasures-of-biodiversity'}"></div>
            </div>
            <div class="footer__top-descr">
                Вы&nbsp;собрали новую часть карты биоразнообразия &laquo;Норникель&raquo;.
            </div>
            <a href="/#map" class="footer__top-link">
                    <span>
                        Вернуться на&nbsp;карту
                    </span>
                </a>
        </div>
        <div v-if="this.$route.path !== '/'" class="footer__mid">
            <div class="footer__mid-descr">
                <span>
                    Читать ещё 
                </span>
            </div>
    
            <div class="footer__mid-img"></div>
            <div class="footer__mid-wrap">
                <ul class="footer__mid-list">
                    <li class="footer__mid-link" :class="{'disable' : link.link === $route.path}" v-for="(link, index) in list1" :key="index">
                        <a :href="link.link">{{ link.title }}</a>
                    </li>
                </ul>
                <ul class="footer__mid-list">
                    <li class="footer__mid-link" :class="{'disable' : link.link === $route.path}" v-for="(link, index) in list2" :key="index">
                        <a :href="link.link">{{ link.title }}</a>
                    </li>
                </ul>
                <ul class="footer__mid-list">
                    <li class="footer__mid-link" :class="{'disable' : link.link === $route.path}" v-for="(link, index) in list3" :key="index">
                        <a :href="link.link">{{ link.title }}</a>
                    </li>
                </ul>
                <ul class="footer__mid-list">
                    <li class="footer__mid-link" :class="{'disable' : link.link === $route.path}" v-for="(link, index) in list4" :key="index">
                        <a :href="link.link">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    
        <div class="footer__bottom" :class="{ 'footer__bottom_white': this.$route.path === '/big-expedition' || this.$route.path === '/' }">
            <div class="footer__bottom-left">
                <a class="footer__bottom-logo" href="https://nornickel.ru/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="34" viewBox="0 0 165 34" fill="none">
                        <g clip-path="url(#clip0_2037_4860)">
                            <path
                                d="M69.316 15.501H66.1347V11.3034H62.4333V22.6368H66.1347V18.6191H69.316V22.6368H73.0479V11.3034H69.316V15.501ZM103.852 15.501H100.67V11.3034H96.9384V22.6368H100.67V18.6191H103.852V22.6368H107.553V11.3034H103.852V15.501ZM160.626 14.6015H158.852V11.3034H155.15V22.6368H160.656C163.073 22.6368 165.031 21.3475 165.031 19.0389V18.2294C165.031 15.9207 163.073 14.6015 160.656 14.6015M160.289 19.8484H158.882V17.3599H160.136C161.176 17.3599 161.421 18.1094 161.421 18.6191C161.421 19.6385 160.565 19.8484 160.289 19.8484ZM136.705 18.3493H140.896V15.6509H136.705V14.2717H141.263V11.3034H132.973V22.6368H141.599V19.6685H136.674V18.3193L136.705 18.3493ZM132.086 11.3034H128.079L126.121 15.5909H125.203V11.3034H121.502V22.6368H125.203V18.6191H126.121L128.14 22.6368H132.422L129.272 16.9101L132.147 11.3034H132.086ZM80.5424 11.1235H78.707C76.2904 11.1235 74.3327 12.8025 74.3327 15.411V18.5891C74.3327 21.1976 76.2904 22.8766 78.707 22.8766H80.5424C82.9589 22.8766 84.9167 21.1976 84.9167 18.5891V15.411C84.9167 12.6526 82.9589 11.1235 80.5424 11.1235ZM81.1847 18.829C81.1847 19.5786 80.5424 20.1782 79.7776 20.1782H79.4411C78.6764 20.1782 78.0646 19.5786 78.0646 18.829V15.1412C78.0646 14.3916 78.6764 13.792 79.4411 13.792H79.7776C80.5424 13.792 81.1847 14.3916 81.1847 15.1412V18.829ZM144.383 17.2999C144.383 19.0389 143.924 19.2787 143.251 19.5786C142.945 19.6985 142.18 19.6985 142.18 19.6985V22.6667H143.649C146.769 22.6667 147.931 20.8978 147.992 16.8801C147.992 15.9807 147.992 15.0812 147.992 14.2717H150.072V22.6368H153.774V11.3034H144.383V17.2999ZM91.7075 11.3034H86.2014V22.6368H89.9334V19.8484H91.7075C94.1241 19.8484 96.0819 18.5592 96.0819 16.2205V14.9013C96.0819 12.5927 94.1241 11.2734 91.7075 11.2734M92.4723 15.8607C92.4723 16.2805 92.2582 17.06 91.1875 17.06H89.9334V14.0618H91.3405C91.7075 14.0618 92.4723 14.3616 92.4723 15.2311V15.8308V15.8607ZM112.814 17.0301V11.2734H109.297V22.6068H112.57L116.393 16.9101V22.6068H119.911V11.2734H116.638L112.814 17.0301Z"
                                fill="#626261" />
                            <path d="M17.3442 22.5467L34.6885 34V11.4832L17.3442 0V22.5467Z" fill="#00589C" />
                            <path d="M17.3443 0C7.76974 0 0 7.61552 0 17C0 26.3845 7.76974 34 17.3443 34V0Z"
                                fill="#0080C8" />
                            <path
                                d="M34.6885 34C44.263 34 52.0327 26.3845 52.0327 17C52.0327 7.61552 44.263 0 34.6885 0V34Z"
                                fill="#0080C8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2037_4860">
                                <rect width="165" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <div class="footer__bottom-left-line">|</div>
                <p class="footer__bottom-text">
                    <span>
                        Создано в агентстве <a class="footer__bottom-link" href="https://www.infografika.agency/"
                        target="_blank">Инфографика</a>
                    </span>
                </p>
            </div>
            <div class="footer__bottom-right" :class="{'main-page' : this.$route.path === '/'}">
                <a href="https://t.me/nornickel_official" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.9666 34.7665C27.245 34.7665 34.7666 27.2449 34.7666 17.9665C34.7666 8.68812 27.245 1.1665 17.9666 1.1665C8.68824 1.1665 1.16663 8.68812 1.16663 17.9665C1.16663 27.2449 8.68824 34.7665 17.9666 34.7665ZM11.9075 18.7784L7.34772 17.1732C6.88401 17.0273 6.88401 16.3706 7.34772 16.2247L26.1278 9.36628C26.5142 9.22036 26.9006 9.58516 26.8233 9.94997L23.4228 25.272C23.3455 25.6368 22.8818 25.7827 22.5727 25.5638L18.0129 22.4265C17.7038 22.2076 17.3174 22.2076 17.0855 22.4265L14.5352 24.3964C14.226 24.6153 13.7623 24.5424 13.685 24.1775L11.9075 18.7784ZM22.4181 12.7955L13.4532 17.9758C13.0668 18.1217 12.9122 18.5595 13.144 18.9243L14.0714 22.1346C14.1487 22.4265 14.5352 22.3535 14.5352 22.1346L14.767 20.3835C14.767 20.0187 14.9989 19.7269 15.2307 19.508L22.5727 13.0144C22.7273 12.9414 22.5727 12.7225 22.4181 12.7955Z"
                                fill="#626261" />
                        </svg>
                    </a>
                <a href="https://www.youtube.com/user/NornikOfficial" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g clip-path="url(#clip0_2037_4851)">
                                <path
                                    d="M20.3072 17.2094L16.3767 15.3754C16.0337 15.2162 15.7519 15.3947 15.7519 15.7744V19.2289C15.7519 19.6087 16.0337 19.7872 16.3767 19.6279L20.3054 17.7939C20.6502 17.6329 20.6502 17.3704 20.3072 17.2094ZM17.5019 0.70166C8.2234 0.70166 0.701904 8.22316 0.701904 17.5017C0.701904 26.7802 8.2234 34.3017 17.5019 34.3017C26.7804 34.3017 34.3019 26.7802 34.3019 17.5017C34.3019 8.22316 26.7804 0.70166 17.5019 0.70166ZM17.5019 24.3267C8.9024 24.3267 8.7519 23.5514 8.7519 17.5017C8.7519 11.4519 8.9024 10.6767 17.5019 10.6767C26.1014 10.6767 26.2519 11.4519 26.2519 17.5017C26.2519 23.5514 26.1014 24.3267 17.5019 24.3267Z"
                                    fill="#626261" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2037_4851">
                                    <rect width="35" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                <a href="https://vk.com/nornickel_official" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g clip-path="url(#clip0_2037_4853)">
                                <path
                                    d="M17.5019 0.70166C8.2234 0.70166 0.701904 8.22316 0.701904 17.5017C0.701904 26.7802 8.2234 34.3017 17.5019 34.3017C26.7804 34.3017 34.3019 26.7802 34.3019 17.5017C34.3019 8.22316 26.7804 0.70166 17.5019 0.70166ZM23.9629 19.6559C23.9629 19.6559 25.4487 21.1224 25.8144 21.8032C25.8249 21.8172 25.8302 21.8312 25.8337 21.8382C25.9824 22.0884 26.0174 22.2827 25.9439 22.4279C25.8214 22.6694 25.4014 22.7884 25.2579 22.7989H22.6329C22.4509 22.7989 22.0694 22.7517 21.6074 22.4332C21.2522 22.1847 20.9022 21.7769 20.5609 21.3797C20.0517 20.7882 19.6107 20.2772 19.1662 20.2772C19.1097 20.2771 19.0536 20.2859 18.9999 20.3034C18.6639 20.4119 18.2334 20.8914 18.2334 22.1689C18.2334 22.5679 17.9184 22.7972 17.6962 22.7972H16.4939C16.0844 22.7972 13.9512 22.6537 12.0612 20.6604C9.74765 18.2192 7.66515 13.3227 7.64765 13.2772C7.5164 12.9604 7.78765 12.7907 8.0834 12.7907H10.7347C11.0882 12.7907 11.2037 13.0059 11.2842 13.1967C11.3787 13.4189 11.7252 14.3027 12.2939 15.2967C13.2162 16.9172 13.7814 17.5752 14.2347 17.5752C14.3196 17.5742 14.4031 17.5525 14.4779 17.5122C15.0694 17.1832 14.9592 15.0744 14.9329 14.6369C14.9329 14.5547 14.9312 13.6937 14.6284 13.2807C14.4114 12.9814 14.0422 12.8677 13.8182 12.8257C13.9088 12.7006 14.0283 12.5991 14.1664 12.5299C14.5724 12.3269 15.3039 12.2972 16.0302 12.2972H16.4344C17.2219 12.3077 17.4249 12.3584 17.7102 12.4302C18.2877 12.5684 18.2999 12.9412 18.2492 14.2169C18.2334 14.5792 18.2177 14.9887 18.2177 15.4717C18.2177 15.5767 18.2124 15.6887 18.2124 15.8077C18.1949 16.4569 18.1739 17.1937 18.6324 17.4964C18.6922 17.5339 18.7613 17.5539 18.8319 17.5542C18.9912 17.5542 19.4707 17.5542 20.7692 15.3264C21.1696 14.6094 21.5176 13.8642 21.8104 13.0969C21.8367 13.0514 21.9137 12.9114 22.0047 12.8572C22.0718 12.8229 22.1463 12.8055 22.2217 12.8064H25.3384C25.6779 12.8064 25.9107 12.8572 25.9544 12.9884C26.0314 13.1967 25.9404 13.8319 24.5177 15.7587L23.8824 16.5969C22.5927 18.2874 22.5927 18.3732 23.9629 19.6559Z"
                                    fill="#626261" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2037_4853">
                                    <rect width="35" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                <a href="https://ok.ru/group/55429567348892" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.5002" cy="16.8" r="16.8" fill="#626261" />
                            <path
                                d="M23.002 19.3738C23.448 18.9278 23.5117 18.2906 23.1294 17.6535C22.8108 17.1437 22.2374 16.8889 21.6002 17.0163C21.3454 17.08 21.0905 17.2074 20.8356 17.3986C18.8604 18.7366 16.1843 18.6729 14.2091 17.3349C14.0816 17.2712 13.9542 17.2074 13.8268 17.1437C13.1259 16.8251 12.425 16.9526 12.0427 17.5897C11.5967 18.2269 11.6604 18.9278 12.2338 19.5012C12.3613 19.6287 12.4887 19.6924 12.5524 19.8198L12.6162 19.8835C13.5082 20.5844 14.5914 21.0305 15.9931 21.2216L15.1648 22.0499C14.4639 22.7508 13.6993 23.5154 12.9985 24.2163C12.8073 24.4074 12.5524 24.726 12.5524 25.172C12.5524 25.7455 12.871 26.3189 13.4445 26.5738C13.6356 26.7012 13.8268 26.7012 14.0179 26.7012C14.3365 26.7012 14.7188 26.5738 14.9737 26.2552C15.9294 25.2995 16.694 24.5349 17.4586 23.7703C17.5224 23.7066 17.5223 23.7066 17.5223 23.7066C17.5223 23.7066 17.5861 23.7066 17.5861 23.7703C18.0958 24.3437 18.6693 24.8535 19.179 25.4269C19.4339 25.6818 19.6887 25.9367 19.9436 26.1915C20.2622 26.5101 20.517 26.6375 20.8993 26.6375C21.4728 26.7013 22.11 26.3189 22.3648 25.7455C22.6197 25.2358 22.4923 24.5986 22.0462 24.2163C21.4091 23.5791 20.7719 22.8782 20.071 22.2411L18.9878 21.1579C19.5613 21.0942 20.1985 20.9667 20.7719 20.7119C21.7277 20.3933 22.4285 19.9473 23.002 19.3738Z"
                                fill="white" />
                            <path
                                d="M17.5223 17.5897C20.2622 17.5897 22.4923 15.4234 22.4923 12.6835C22.4923 11.3455 21.9825 10.0711 21.0268 9.11539C20.071 8.15964 18.8604 7.6499 17.5861 7.6499C14.8462 7.6499 12.6799 9.87999 12.6161 12.5561C12.6161 13.8942 13.1259 15.1048 14.0816 16.0605C14.9737 17.08 16.1843 17.5897 17.5223 17.5897ZM16.1206 11.2181C16.5029 10.8357 17.0126 10.6446 17.5223 10.6446C18.6692 10.6446 19.4976 11.5366 19.4976 12.6198C19.4976 13.7667 18.6055 14.595 17.5223 14.595C16.3754 14.595 15.5471 13.703 15.5471 12.6198C15.5471 12.1101 15.7383 11.6004 16.1206 11.2181Z"
                                fill="white" />
                            <path
                                d="M23.002 19.3738C23.448 18.9278 23.5117 18.2906 23.1294 17.6535C22.8108 17.1437 22.2374 16.8889 21.6002 17.0163C21.3454 17.08 21.0905 17.2074 20.8356 17.3986C18.8604 18.7366 16.1843 18.6729 14.2091 17.3349C14.0816 17.2712 13.9542 17.2074 13.8268 17.1437C13.1259 16.8251 12.425 16.9526 12.0427 17.5897C11.5967 18.2269 11.6604 18.9278 12.2338 19.5012C12.3613 19.6287 12.4887 19.6924 12.5524 19.8198L12.6162 19.8835C13.5082 20.5844 14.5914 21.0305 15.9931 21.2216L15.1648 22.0499C14.4639 22.7508 13.6993 23.5154 12.9985 24.2163C12.8073 24.4074 12.5524 24.726 12.5524 25.172C12.5524 25.7455 12.871 26.3189 13.4445 26.5738C13.6356 26.7012 13.8268 26.7012 14.0179 26.7012C14.3365 26.7012 14.7188 26.5738 14.9737 26.2552C15.9294 25.2995 16.694 24.5349 17.4586 23.7703C17.5224 23.7066 17.5223 23.7066 17.5223 23.7066C17.5223 23.7066 17.5861 23.7066 17.5861 23.7703C18.0958 24.3437 18.6693 24.8535 19.179 25.4269C19.4339 25.6818 19.6887 25.9367 19.9436 26.1915C20.2622 26.5101 20.517 26.6375 20.8993 26.6375C21.4728 26.7013 22.11 26.3189 22.3648 25.7455C22.6197 25.2358 22.4923 24.5986 22.0462 24.2163C21.4091 23.5791 20.7719 22.8782 20.071 22.2411L18.9878 21.1579C19.5613 21.0942 20.1985 20.9667 20.7719 20.7119C21.7277 20.3933 22.4285 19.9473 23.002 19.3738Z"
                                fill="white" />
                        </svg>
                    </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            list1: [{
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
            ],
            list2: [{
                    link: '/expedition',
                    title: 'Большая Норильская',
                },
                {
                    link: '/big-expedition',
                    title: 'Научная экспедиция',
                },
            ],
            list3: [{
                    link: '/white-bears',
                    title: 'Спасение белых медведей',
                },
                {
                    link: '/pyasino',
                    title: 'Вдохнуть жизнь в озеро',
                },
            ],
            list4: [{
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
        }
    },
}
</script>

<style lang="scss">
.footer {
    &_orange {
        background-color: #F7F6F2;
        .footer__mid-link {
            @media (max-width: 768px) {
                background-color: #fff;
            }
        }
    }
    &__top {
        padding: 6.44rem 7.1rem 0 7.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 768px) {
            padding: 21.3334rem 0 0 0;
        }
        &-link {
            position: relative;
            display: inline-block;
            padding: 1.125rem 3.375rem;
            color: #fff;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 130%;
            border-radius: 3.125rem;
            background: #D38235;
            transition: all .25s ease-out;
            z-index: 10;
            &:hover {
                transform: scale(1.05);
            }
            @media (max-width: 768px) {
                font-size: 4.8rem;
                padding: 4.87rem 13rem;
                border-radius: 13rem;
            }
        }
        &-descr {
            font-size: 1.25rem;
            line-height: 130%;
            margin-bottom: 2.75rem;
            width: 20.3125rem;
            text-align: center;
            @media (max-width: 768px) {
                margin-bottom: 5.3334rem;
                font-size: 4.53334rem;
                width: 100%;
            }
        }
    }
    &__map {
        margin-bottom: 1rem;
        width: 5.15rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.13rem;
        @media (max-width: 768px) {
            margin-bottom: 3.867rem;
            width: 21.6rem;
            gap: 0.56rem;
        }
    }
    &__block {
        height: 1.75781rem;
        border-radius: 0.05625rem;
        background: var(--gray-5, #E0E0E0);
        @media (max-width: 768px) {
            height: 7.47rem;
        }
        &_active {
            background: var(--gray-4, #BDBDBD);
        }
        &-big {
            width: 2.51013rem;
            @media (max-width: 768px) {
                width: 10.5rem;
            }
        }
        &-small {
            width: 1.17rem;
            @media (max-width: 768px) {
                width: 4.91rem;
            }
        }
    }
    &__mid {
        position: relative;
        padding: 0 5.5rem 3.5rem 5.5rem;
        @media (max-width: 768px) {
            padding: 0 0 11.06rem 0;
        }
        &-descr {
            position: absolute;
            font-size: 1.25rem;
            padding-left: 3rem;
            top: 1rem;
            font-weight: 600;
            line-height: 130%;
            color: #000;
            @media (max-width: 768px) {
                padding: 0;
                top: 5rem;
                left: 0;
                right: 0;
                font-size: 5.86667rem;
                text-align: center;
            }
        }
        &-img {
            width: 100%;
            height: 14.5rem;
            background-image: url(../../public/img/footer.png);
            background-size: cover;
            margin-bottom: 1.44rem;
            background-repeat: no-repeat;
            @supports (background-image: url(../../public/img/footer.webp)) {
                background-image: url(../../public/img/footer.webp);
            }
            @media (max-width: 768px) {
                width: 69.87rem;
                height: 46.6667rem;
                margin: 0 auto;
                margin-bottom: 5.3334rem;
                background-image: url(../../public/img/footer-mobile.png);
                background-position: center;
                @supports (background-image: url(../../public/img/footer-mobile.webp)) {
                    background-image: url(../../public/img/footer-mobile.webp);
                }
            }
        }
        &-wrap {
            padding-left: 3rem;
            display: flex;
            gap: 7rem;
            width: 100%;
            @media (max-width: 768px) {
                flex-direction: column;
                padding: 0 11rem;
                gap: 5.334rem;
            }
        }
        &-list {
            display: flex;
            flex-direction: column;
            gap: 1.38rem;
            width: 19.4375rem;
            @media (max-width: 768px) {
                width: 100%;
                gap: 5.334rem;
            }
        }
        &-link {
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 130%;
            transition: color .3s ease;
            @media (max-width: 768px) {
                text-align: center;
                border-radius: 8px;
                background: #F7F6F2;
                padding: 1.8667rem 0;
                font-size: 4.8rem;
            }
            &:not(.disable):hover {
                color: #D38235;
            }
            &.disable {
                pointer-events: none;
                color: #BDBDBD;
            }
        }
    }
    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3.96rem 6.75rem 1.5rem 6.75rem;
        width: 100%;
        height: 7.375rem;
        background-image: url(../../public/img/section-line-top.png);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom;
        &_white {
            background-image: url(../../public/img/footer-line-white.png);
        }
        @media (max-width: 768px) {
            flex-direction: column-reverse;
            align-items: flex-start;
            padding: 0 12.8rem 8.5333rem 12.8rem;
            height: 59.594rem;
            background-size: cover;
            background-position: 28%;
        }
        &-left {
            display: flex;
            align-items: center;
            gap: 0.94rem;
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 2.134rem;
                &-line {
                    display: none;
                }
            }
        }
        &-logo {
            height: 2.125rem;

            @media (max-width: 768px) {
                height: 9.067rem;
            }
        }
        &-text {
            color: var(--grey, #626261);
            font-size: 0.875rem;
            font-weight: 350;
            line-height: 150%;
            @media (max-width: 768px) {
                font-size: 3.73333rem;
            }
        }
        &-link {
            text-decoration: underline;
            text-decoration-skip-ink: none;
        }
        &-right {
            display: flex;
            gap: 0.75rem;
            @media (max-width: 768px) {
                width: 100%;
                gap: 3.2rem;
                justify-content: center;
            }
            a {
                width: 2.431rem;
                height: 2.431rem;
                @media (max-width: 768px) {
                    width: 9.334rem;
                    height: 9.334rem;
                }
                svg path {
                    transition: all .3s ease;
                }
                &:not(:last-child):hover svg path {
                    fill: var(--copper, #D38235);
                }
                &:last-child:hover svg circle {
                    fill: var(--copper, #D38235);
                }
            }
            &.main-page {
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
}
</style>
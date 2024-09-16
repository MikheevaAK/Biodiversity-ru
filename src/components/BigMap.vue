<template>
    <div class="big-map">
        <slot></slot>
        <picture>
            <source media="(max-width: 768px)" type="image/webp" :srcset="imgMobile+ '.webp'">
            <source media="(max-width: 768px)" :srcset="imgMobile+ '.png'">
            <source type="image/webp" :srcset="img+ '.webp'">
            <img :src="img + '.png'" alt="">
        </picture>
        <div v-for="(circale, index) in circales" :key="index" class="map-circale" :class="{
            'map-circale__blue': circale.color === 'blue',
            'map-circale__green': circale.color === 'green',
            'map-circale__purple': circale.color === 'purple',
            'map-circale__1': circale.number === '1',
            'map-circale__2': circale.number === '2',
            'map-circale__3': circale.number === '3',
            'map-circale__4': circale.number === '4',
            'map-circale__5': circale.number === '5',
            'map-circale__6': circale.number === '6',
            'map-circale__7': circale.number === '7'
        }"></div>
    </div>
</template>

<script>
export default {
    props: {
        circales: [],
        img: {
            type: String,
            default: ''
        },
        imgMobile: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
// Variables
$blue: #0077C8;
$green: #009CA6;
$purple: #654EA3;

.big-map {
    position: relative;
    width: 100%;

    .text {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 768px) {
            position: static;
            transform: unset;
        }
    }


    .map-circale {
        position: absolute;
        width: 0.9724rem;
        height: 0.9724rem;
        border-radius: 100%;
        animation: ripple 1.5s linear;
        transition-timing-function: ease-in;
        transition-duration: 0.7s;
        transition: all 2.3s;
        z-index: 2;

        @media (max-width: 768px) {
            width: 2rem;
            height: 2rem;
        }

        &__blue {
            background-color: rgba($blue, 1);
            animation: ripple-blue 0.9s infinite;
        }

        &__green {
            background-color: rgba($green, 1);
            animation: ripple-green 0.9s infinite;
        }

        &__purple {
            background-color: rgba($purple, 1);
            animation: ripple-purple 0.9s infinite;
        }
    }
}
</style>
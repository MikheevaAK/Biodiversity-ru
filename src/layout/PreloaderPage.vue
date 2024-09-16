<template>
    <Transition name="loader">
        <div v-if="show" class="preloader">
            <img class="loader-img" src="img/loader.gif" alt="">
        </div>
    </Transition>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
            };
        },
        mounted() {
            setTimeout(() => {
                this.show = false;
            }, 5000)
            window.addEventListener('load', () => {
                this.show = false
            })
        },
    }
</script>

<style lang="scss">
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0080C8;
    z-index: 1000;

    .loader-img {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 77.5px;
        height: 77.5px;
    }
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
  
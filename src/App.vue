<template>
  <div class="app">
    <PreloaderPage  />
    <AppNav />
      <router-view :key="this.$route.path"></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue'
import AppFooter from '@/layout/AppFooter.vue'
import PreloaderPage from './layout/PreloaderPage.vue'

export default {
  name: 'App', 
  components: {
    AppNav,
    AppFooter,
    PreloaderPage
  },
  mounted() {
    localStorage.setItem((this.$route.path).slice(1), true)
    window.addEventListener( "pageshow", function ( event ) {
        var historyTraversal = event.persisted || 
                              ( typeof window.performance != "undefined" && 
                                    window.performance.navigation.type === 2 );
        if ( historyTraversal ) {
          window.location.reload();
        }
      });
  },
}
</script>

<style>
.app {
  position: relative;
}
</style>

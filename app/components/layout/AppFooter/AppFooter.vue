<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <p class="footer__copy">© {{ year }} Anatoli Trebko</p>
      <p class="footer__built">Built with Nuxt 4 + GSAP</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "./AppFooter.scss";
</style>

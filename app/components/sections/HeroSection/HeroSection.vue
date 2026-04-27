<script setup lang="ts">
const titleRef = ref<HTMLElement | null>(null)
const displayedText = ref('')
const fullText = 'Anatoli Trebko'
let timeout: ReturnType<typeof setTimeout>

function typeWriter(index = 0) {
  if (index <= fullText.length) {
    displayedText.value = fullText.slice(0, index)
    timeout = setTimeout(() => typeWriter(index + 1), 80)
  }
}

onMounted(() => {
  setTimeout(() => typeWriter(), 300)
})

onUnmounted(() => {
  clearTimeout(timeout)
})
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero__glow" aria-hidden="true" />

    <div class="hero__container container">
      <div class="hero__badge reveal">
        <span class="hero__badge-dot" />
        Available for new opportunities
      </div>

      <h1 class="hero__title" ref="titleRef">
        {{ displayedText }}<span class="hero__cursor" aria-hidden="true" />
      </h1>

      <p class="hero__role reveal reveal--delay-1">
        Frontend Developer
      </p>

      <p class="hero__subtitle reveal reveal--delay-2">
        Building fast, animated interfaces with<br />
        <strong>Nuxt 3</strong>, <strong>Vue 3</strong> and <strong>TypeScript</strong>
      </p>

      <div class="hero__actions reveal reveal--delay-3">
        <a href="#projects" class="hero__btn hero__btn--primary">
          View Projects
        </a>
        <a
          href="/cv-anatoli-trebko.pdf"
          class="hero__btn hero__btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </a>
      </div>

      <div class="hero__scroll reveal reveal--delay-4" aria-hidden="true">
        <span class="hero__scroll-line" />
        <span class="hero__scroll-label">scroll</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "./HeroSection.scss";
</style>

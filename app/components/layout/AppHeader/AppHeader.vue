<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container container">
      <a href="#" class="header__logo" aria-label="Home">
        <span class="header__logo-dot" aria-hidden="true" />
        <span class="header__logo-text">AT</span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="header__nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="/cv-anatoli-trebko.pdf"
        class="header__cta"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download CV
      </a>

      <button
        class="header__burger"
        :class="{ 'header__burger--open': isMenuOpen }"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        aria-expanded="isMenuOpen"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "./AppHeader.scss";
</style>

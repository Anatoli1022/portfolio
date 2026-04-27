<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const { observe } = useScrollReveal()

const links = [
  {
    label: 'Email',
    href: 'mailto:toliktrebko@gmail.com',
    value: 'toliktrebko@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Anatoli1022',
    value: 'github.com/Anatoli1022',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/анатолий-требко-9a456526b/',
    value: 'linkedin.com/in/anatoli',
    external: true,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Anatoli952',
    value: '@Anatoli952',
    external: true,
  },
]

onMounted(() => {
  if (!sectionRef.value) return
  const revealEls = sectionRef.value.querySelectorAll<HTMLElement>('.reveal')
  observe(revealEls)
})
</script>

<template>
  <section class="contact" id="contact" ref="sectionRef">
    <div class="contact__container container">
      <p class="contact__label reveal">Contact</p>
      <h2 class="contact__heading reveal reveal--delay-1">
        Let's work together
      </h2>
      <p class="contact__subheading reveal reveal--delay-2">
        Available for remote roles and freelance projects.
        Don't hesitate to reach out.
      </p>

      <a
        href="mailto:toliktrebko@gmail.com"
        class="contact__email reveal reveal--delay-3"
      >
        toliktrebko@gmail.com
      </a>

      <ul class="contact__links reveal reveal--delay-4">
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            class="contact__link"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
          >
            <span class="contact__link-label">{{ link.label }}</span>
            <span class="contact__link-value">{{ link.value }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "./ContactSection.scss";
</style>

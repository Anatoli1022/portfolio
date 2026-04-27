<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useScrollReveal();

const stack = [
  { label: "Nuxt 4", icon: "/img/about/nuxt.svg" },
  { label: "Vue 3", icon: "/img/about/vue.svg" },

  { label: "TypeScript", icon: "/img/about/typescript.svg" },

  { label: "React", icon: "/img/about/react.svg" },
  { label: "Next.js", icon: "/img/about/next.svg" },

  // { label: "Framer Motion", icon: "⬡" },
  { label: "PostgreSQL", icon: "/img/about/postgresql.svg" },
  { label: "Drizzle ORM", icon: "/img/about/drizzle.svg" },
  { label: "Node.js", icon: "/img/about/node.svg" },
  { label: "SCSS", icon: "/img/about/scss.webp" },
  { label: "TailwindCSS", icon: "/img/about/tailwindcss.svg" },
  { label: "GSAP", icon: "/img/about/gsap.svg" },
];

onMounted(() => {
  if (!sectionRef.value) return;
  const revealEls = sectionRef.value.querySelectorAll<HTMLElement>(".reveal");
  observe(revealEls);
});
</script>

<template>
  <section class="about" id="about" ref="sectionRef">
    <div class="container">
      <div class="about__content">
        <div class="about__text-col">
          <p class="about__label reveal">About me</p>
          <h2 class="about__heading reveal reveal--delay-1">
            3 years building things<br />
            for the web
          </h2>
          <p class="about__body reveal reveal--delay-2">
            I've worked on everything from corporate calculation systems that
            generate PDFs, to real estate analytics dashboards and fullstack
            Nuxt apps with PostgreSQL. I care about clean code, fast UIs and
            transitions that feel right.
          </p>
          <p class="about__body reveal reveal--delay-2">
            Currently at <strong>Slowdive</strong> (Moscow), building
            interactive quizzes and account management flows. Open to remote
            opportunities.
          </p>

          <div class="about__meta reveal reveal--delay-3">
            <div class="about__meta-item">
              <span class="about__meta-value">3+</span>
              <span class="about__meta-key">Years of experience</span>
            </div>
            <div class="about__meta-item">
              <span class="about__meta-value">10+</span>
              <span class="about__meta-key">Projects shipped</span>
            </div>
            <div class="about__meta-item">
              <span class="about__meta-value">3</span>
              <span class="about__meta-key">Companies</span>
            </div>
          </div>
        </div>

        <div class="about__stack-col reveal reveal--delay-2">
          <p class="about__stack-title">Tech stack</p>
          <ul class="about__stack">
            <li
              v-for="(item, index) in stack"
              :key="item.label"
              class="about__stack-item"
              :style="{ '--delay': `${index * 0.04}s` }"
            >
              <img
                :src="item.icon"
                :alt="item.label"
                class="about__stack-icon"
                width="16"
                height="16"
                loading="lazy"
              />
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "./AboutSection.scss";
</style>

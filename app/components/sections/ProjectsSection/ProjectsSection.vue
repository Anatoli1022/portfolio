<script setup lang="ts">
import { projects } from "~/data/projects";
import type { ProjectType } from "~/types/project";

type FilterValue = "all" | ProjectType;

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useScrollReveal();

const filters: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Pet Projects", value: "pet" },
];

const activeFilter = ref<FilterValue>("all");

const filteredProjects = computed(() =>
  activeFilter.value === "all"
    ? projects
    : projects.filter((p) => p.type === activeFilter.value),
);

onMounted(() => {
  if (!sectionRef.value) return;
  const revealEls = sectionRef.value.querySelectorAll<HTMLElement>(".reveal");
  observe(revealEls);
});
</script>

<template>
  <section class="projects" id="projects" ref="sectionRef">
    <div class="projects__container container">
      <div class="projects__header">
        <p class="projects__label reveal">Projects</p>
        <h2 class="projects__heading reveal reveal--delay-1">
          Things I've built
        </h2>
        <p class="projects__subheading reveal reveal--delay-2">
          A mix of commercial work and personal experiments.
        </p>
      </div>

      <div
        class="projects__filters reveal reveal--delay-3"
        role="tablist"
        aria-label="Project filter"
      >
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="projects__filter"
          :class="{ 'projects__filter--active': activeFilter === filter.value }"
          role="tab"
          :aria-selected="activeFilter === filter.value"
          type="button"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <ul :key="activeFilter" class="projects__grid">
        <li
          v-for="project in filteredProjects"
          :key="project.id"
          class="projects__item"
        >
          <ProjectCard :project="project" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "./ProjectsSection.scss";
</style>

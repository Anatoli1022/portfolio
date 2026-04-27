<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="project-card"
    :class="{
      'project-card--has-image': project.image,
      'project-card--no-scroll': project.noScroll,
    }"
  >
    <div v-if="project.image" class="project-card__media">
      <img
        :src="project.image"
        :alt="project.imageAlt"
        class="project-card__image"
        loading="lazy"
        decoding="async"
      >
    </div>

    <div class="project-card__body">
    <div class="project-card__header">
      <span
        class="project-card__type"
        :class="`project-card__type--${project.type}`"
      >
        {{ project.type === 'commercial' ? 'Commercial' : 'Pet Project' }}
      </span>

      <div class="project-card__links">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          class="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
          </svg>
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          class="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live site"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <span v-if="!project.githubUrl && !project.liveUrl" class="project-card__nda">
          NDA
        </span>
      </div>
    </div>

    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__description">{{ project.shortDescription }}</p>

    <ul class="project-card__stack">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="project-card__tech"
      >
        {{ tech }}
      </li>
    </ul>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "./ProjectCard.scss";
</style>

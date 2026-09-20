<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-arche-beige dark:bg-surface-dark transition-colors duration-500">
    <article class="max-w-3xl mx-auto">
      <header class="mb-14 border-b border-black/10 dark:border-white/10 pb-8 mt-12">
        <h1 class="font-display text-4xl md:text-6xl tracking-tight text-arche-green dark:text-arche-beige mb-4 uppercase">
          {{ title }}
        </h1>
        <p v-if="lastUpdated" class="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-white/50">
          {{ t('legalLayout.lastUpdate') }} : {{ lastUpdated }}
        </p>
      </header>
      <div class="legal-content font-sans">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<style scoped>
@reference "../style.css";

.legal-content :deep(h2) {
  @apply text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight;
}

.legal-content :deep(p) {
  @apply text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6;
}
</style>
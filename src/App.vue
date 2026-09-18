<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

watch(locale, () => {
  document.title = route.meta.titleKey ? `${t(route.meta.titleKey)}` : 'Client App'
})
</script>

<template>
  <div
    class="min-h-screen w-full overflow-x-hidden bg-surface-light dark:bg-surface-dark transition-colors duration-300"
  >
    <router-view />
  </div>
</template>

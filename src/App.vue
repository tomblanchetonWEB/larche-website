<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Moon, Sun, Globe } from '@lucide/vue'

const { t, locale } = useI18n()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('user-locale', locale.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="min-h-screen w-full font-sans relative selection:bg-arche-green selection:text-arche-beige flex flex-col">
    <nav class="absolute top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-transparent">
      <div class="flex-1 flex justify-start">
        <router-link to="/" class="font-display text-xl md:text-2xl font-bold tracking-widest text-white drop-shadow-md hover:opacity-80 transition-opacity">
          {{ t('nav.logo') }}
        </router-link>
      </div>

      <div class="hidden md:flex items-center justify-center gap-12 flex-1">
        <router-link to="/menu" class="text-base font-medium text-white/95 drop-shadow-md hover:text-white transition-colors">{{ t('nav.menu') }}</router-link>
        <router-link to="/events" class="text-base font-medium text-white/95 drop-shadow-md hover:text-white transition-colors">{{ t('nav.events') }}</router-link>
        <router-link to="/contact" class="text-base font-medium text-white/95 drop-shadow-md hover:text-white transition-colors">{{ t('nav.contact') }}</router-link>
      </div>

      <div class="flex-1 flex items-center justify-end gap-6">
        <button @click="toggleTheme" class="text-white drop-shadow-md hover:opacity-70 transition-opacity">
          <Moon v-if="isDark" class="w-5 h-5" />
          <Sun v-else class="w-5 h-5" />
        </button>

        <button @click="toggleLanguage" class="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors shadow-lg">
          <Globe class="w-4 h-4 drop-shadow-sm" />
          <span class="drop-shadow-sm">{{ locale }}</span>
        </button>
      </div>
    </nav>

    <main class="flex-grow w-full">
      <router-view />
    </main>

    <footer class="w-full bg-arche-beige dark:bg-surface-dark text-gray-800 dark:text-arche-beige py-16 px-8 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div class="flex flex-col gap-6 max-w-sm justify-between">
          <div>
            <span class="font-display text-xl md:text-2xl font-bold tracking-widest text-arche-green dark:text-arche-beige">{{ t('nav.logo') }}</span>
          </div>
          
          <div class="flex items-center gap-4 mt-2">
            <button @click="toggleTheme" class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <Moon v-if="isDark" class="w-4 h-4" />
              <Sun v-else class="w-4 h-4" />
            </button>

            <button @click="toggleLanguage" class="flex items-center gap-2 px-4 h-10 rounded-full border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider">
              <Globe class="w-4 h-4" />
              <span>{{ locale }}</span>
            </button>
          </div>

          <p class="text-gray-500 dark:text-arche-beige/60 text-xs mt-4">{{ t('footer.copyright') }}</p>
        </div>

        <div class="flex flex-wrap gap-16 md:gap-24">
          <div class="flex flex-col gap-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-arche-beige/50 mb-2">{{ t('footer.explorer') }}</h3>
            <router-link to="/menu" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('nav.menu') }}</router-link>
            <router-link to="/events" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('nav.events') }}</router-link>
            <router-link to="/contact" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('nav.contact') }}</router-link>
          </div>
          
          <div class="flex flex-col gap-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-arche-beige/50 mb-2">{{ t('footer.legal') }}</h3>
            <a href="#" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('footer.terms') }}</a>
            <a href="#" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('footer.privacy') }}</a>
            <a href="#" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ t('footer.legalNotice') }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

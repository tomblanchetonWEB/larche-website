<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { i18n } from './i18n'
import { Moon, Sun, Globe, Menu, X } from '@lucide/vue'

const route = useRoute()
const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const isLanding = computed(() => route.path === '/')

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
  const currentLang = i18n.global.locale.value
  const newLang = currentLang === 'fr' ? 'en' : 'fr'

  i18n.global.locale.value = newLang
  localStorage.setItem('user-locale', newLang)

  if (route.meta.titleKey) {
    document.title = i18n.global.t(route.meta.titleKey)
  } else {
    document.title = "L'ARCHE."
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(() => route.path, () => {
  closeMobileMenu()
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  const savedLocale = localStorage.getItem('user-locale')
  if (savedLocale) {
    i18n.global.locale.value = savedLocale
  }
})
</script>

<template>
  <div class="min-h-screen w-full font-sans relative selection:bg-arche-green selection:text-arche-beige flex flex-col">
    <!-- Desktop Navigation -->
    <nav class="absolute top-0 left-0 w-full z-40 px-8 md:px-12 py-6 flex items-center justify-between bg-transparent">
      <div class="flex-1 flex justify-start">
        <router-link to="/"
          class="font-display text-xl md:text-2xl font-bold tracking-widest transition-colors"
          :class="isLanding ? 'text-white drop-shadow-md hover:text-arche-beige' : 'text-arche-green dark:text-arche-beige hover:opacity-80'">
          {{ $t('nav.logo') }}
        </router-link>
      </div>

      <div class="hidden md:flex items-center justify-center gap-12 flex-1">
        <router-link to="/menu"
          class="text-base font-medium transition-colors"
          :class="isLanding ? 'text-white/95 drop-shadow-md hover:text-white' : 'text-arche-green/80 dark:text-arche-beige/80 hover:text-arche-green dark:hover:text-white'">
          {{ $t('nav.menu') }}
        </router-link>
        <router-link to="/events"
          class="text-base font-medium transition-colors"
          :class="isLanding ? 'text-white/95 drop-shadow-md hover:text-white' : 'text-arche-green/80 dark:text-arche-beige/80 hover:text-arche-green dark:hover:text-white'">
          {{ $t('nav.events') }}
        </router-link>
        <router-link to="/story"
          class="text-base font-medium transition-colors"
          :class="isLanding ? 'text-white/95 drop-shadow-md hover:text-white' : 'text-arche-green/80 dark:text-arche-beige/80 hover:text-arche-green dark:hover:text-white'">
          {{ $t('nav.story') }}
        </router-link>
      </div>

      <div class="hidden md:flex flex-1 items-center justify-end gap-6">
        <button @click="toggleTheme"
          class="transition-colors"
          :class="isLanding ? 'text-white drop-shadow-md hover:opacity-70' : 'text-arche-green dark:text-arche-beige hover:opacity-70'">
          <Moon v-if="isDark" class="w-5 h-5" />
          <Sun v-else class="w-5 h-5" />
        </button>

        <button @click="toggleLanguage"
          class="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg border backdrop-blur-md"
          :class="isLanding
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            : 'bg-arche-green/5 border-arche-green/20 text-arche-green hover:bg-arche-green/10 dark:bg-white/5 dark:border-white/10 dark:text-arche-beige dark:hover:bg-white/10'">
          <Globe class="w-4 h-4" :class="isLanding ? 'drop-shadow-sm' : ''" />
          <span :class="isLanding ? 'drop-shadow-sm' : ''">{{ $i18n.locale }}</span>
        </button>
      </div>

      <div class="flex md:hidden flex-1 items-center justify-end">
        <button @click="isMobileMenuOpen = true"
          class="transition-colors"
          :class="isLanding ? 'text-white drop-shadow-md hover:opacity-70' : 'text-arche-green dark:text-arche-beige hover:opacity-70'">
          <Menu class="w-7 h-7" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col">
        <div class="px-8 py-6 flex items-center justify-between">
          <div class="flex-1 flex justify-start">
            <span class="font-display text-xl font-bold tracking-widest text-white">{{ $t('nav.logo') }}</span>
          </div>
          <div class="flex-1 flex justify-end">
            <button @click="closeMobileMenu" class="text-white hover:opacity-70 transition-opacity">
              <X class="w-7 h-7" />
            </button>
          </div>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center gap-10">
          <router-link @click="closeMobileMenu" to="/menu" class="text-3xl font-display uppercase tracking-widest text-white hover:text-white/70 transition-colors">{{ $t('nav.menu') }}</router-link>
          <router-link @click="closeMobileMenu" to="/events" class="text-3xl font-display uppercase tracking-widest text-white hover:text-white/70 transition-colors">{{ $t('nav.events') }}</router-link>
          <router-link @click="closeMobileMenu" to="/story" class="text-3xl font-display uppercase tracking-widest text-white hover:text-white/70 transition-colors">{{ $t('nav.story') }}</router-link>
        </div>

        <div class="py-12 flex items-center justify-center gap-8 border-t border-white/10 mx-8">
          <button @click="toggleTheme" class="text-white hover:opacity-70 transition-opacity">
            <Moon v-if="isDark" class="w-6 h-6" />
            <Sun v-else class="w-6 h-6" />
          </button>

          <button @click="toggleLanguage" class="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
            <Globe class="w-5 h-5" />
            <span>{{ $i18n.locale }}</span>
          </button>
        </div>
      </div>
    </transition>

    <main class="grow w-full">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-arche-beige dark:bg-surface-dark text-gray-800 dark:text-arche-beige py-16 px-8 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div class="flex flex-col gap-6 max-w-sm">
          <div class="flex flex-col gap-1">
            <span class="font-display text-xl md:text-2xl font-bold tracking-widest text-arche-green dark:text-arche-beige">{{ $t('nav.logo') }}</span>
            <p class="text-gray-500 dark:text-arche-beige/60 text-xs">{{ $t('footer.copyright') }}</p>
          </div>

          <div class="flex items-center gap-4 mt-2">
            <button @click="toggleTheme" class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <Moon v-if="isDark" class="w-4 h-4" />
              <Sun v-else class="w-4 h-4" />
            </button>

            <button @click="toggleLanguage" class="flex items-center gap-2 px-4 h-10 rounded-full border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-arche-beige">
              <Globe class="w-4 h-4" />
              <span>{{ $i18n.locale }}</span>
            </button>

            <a href="https://www.instagram.com/larche_clf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-arche-beige">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div class="flex flex-wrap gap-16 md:gap-24">
          <div class="flex flex-col gap-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-arche-beige/50 mb-2">{{ $t('footer.explorer') }}</h3>
            <router-link to="/menu" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('nav.menu') }}</router-link>
            <router-link to="/events" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('nav.events') }}</router-link>
            <router-link to="/story" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('nav.story') }}</router-link>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-arche-beige/50 mb-2">{{ $t('footer.legal') }}</h3>
            <router-link to="/terms" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('footer.terms') }}</router-link>
            <router-link to="/privacy" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('footer.privacy') }}</router-link>
            <router-link to="/legal" class="text-sm hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('footer.legalNotice') }}</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

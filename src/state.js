import { ref } from 'vue'

// Global state for theme management
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
export const isDarkMode = ref(prefersDark)

export const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  applyTheme()
}

export const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

applyTheme()
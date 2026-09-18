import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '../i18n'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    meta: { titleKey: 'home.pageTitle' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.beforeEach((to, from) => {
  if (to.meta.titleKey) {
    const translatedTitle = i18n.global.t(to.meta.titleKey)
    document.title = `${translatedTitle}`
  } else {
    document.title = 'Client App'
  }

  return true
})

import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '../i18n'
import LandingPage from '../views/LandingPage.vue'
import MenuPage from '../views/MenuPage.vue'
import EventsPage from '../views/EventsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import TermsPage from '../views/TermsPage.vue'
import LegalPage from '../views/LegalPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    meta: { titleKey: 'pageTitle.home' },
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
    meta: { titleKey: 'pageTitle.menu' },
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage,
    meta: { titleKey: 'pageTitle.events' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { titleKey: 'pageTitle.contact' },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage,
    meta: { titleKey: 'pageTitle.privacy' },
  },
  {
    path: '/legal',
    name: 'Legal',
    component: LegalPage,
    meta: { titleKey: 'pageTitle.legal' },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage,
    meta: { titleKey: 'pageTitle.terms' },
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
    document.title = "L'ARCHE."
  }

  return true
})

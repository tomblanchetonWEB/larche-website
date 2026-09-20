<script setup>
import { useI18n } from 'vue-i18n'
import noeImg from '/assets/images/template.webp'

const { t } = useI18n()
</script>

<template>
  <div class="w-full flex flex-col">
    <section class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-arche-beige dark:bg-surface-dark transition-colors duration-300">
      <div
        class="absolute inset-0 z-0"
        style="
          --fade: linear-gradient(to bottom,
            #000 0%,
            #000 62%,
            rgba(0,0,0,.985) 68%,
            rgba(0,0,0,.94)  73%,
            rgba(0,0,0,.86)  78%,
            rgba(0,0,0,.73)  83%,
            rgba(0,0,0,.56)  88%,
            rgba(0,0,0,.36)  93%,
            rgba(0,0,0,.16)  97%,
            transparent     100%);
          -webkit-mask-image: var(--fade);
          mask-image: var(--fade);
        "
      >
        <img :src="noeImg" alt="Hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/25"></div>
      </div>
      <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence baseFrequency=\'.9\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')">
      </div>

      <div class="relative z-30 text-center flex flex-col items-center px-4">
        <h1 class="font-display text-5xl md:text-8xl text-white tracking-tight mb-4 drop-shadow-xl uppercase">
          {{ t('hero.title') }}
        </h1>
        <p class="text-white/95 font-sans text-lg md:text-xl max-w-md drop-shadow-lg font-medium">
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </section>

    <section class="relative z-30 w-full min-h-[70vh] bg-arche-beige dark:bg-surface-dark flex flex-col items-center justify-center px-6 py-24 transition-colors duration-300">
      <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <div class="flex flex-col justify-center gap-10">
          <div>
            <h2 class="font-display text-2xl md:text-3xl text-arche-green dark:text-arche-beige mb-4 uppercase tracking-widest">{{ t('info.title') }}</h2>
            <p class="font-sans text-lg text-gray-700 dark:text-gray-300">{{ t('info.address') }}</p>
          </div>
          <div>
            <h3 class="font-display text-2xl md:text-3xl text-arche-green dark:text-arche-beige mb-4 uppercase tracking-widest">{{ t('info.booking') }}</h3>
            <a :href="'tel:' + t('info.phone').replace(/\s/g, '')" class="font-sans text-3xl font-medium text-gray-900 dark:text-white hover:text-arche-green dark:hover:text-arche-green transition-colors">
              {{ t('info.phone') }}
            </a>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h2 class="font-display text-2xl md:text-3xl text-arche-green dark:text-arche-beige mb-8 uppercase tracking-widest">{{ t('info.hoursTitle') }}</h2>
          <ul class="flex flex-col gap-5 font-sans text-lg">
            <li class="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-3 text-gray-500 dark:text-gray-400">
              <span>{{ t('info.days.mon') }}</span>
              <span>{{ t('info.times.closed') }}</span>
            </li>
            <li class="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-3 text-gray-900 dark:text-white font-medium">
              <span>{{ t('info.days.tueWed') }}</span>
              <span>{{ t('info.times.tueWed') }}</span>
            </li>
            <li class="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-3 text-gray-900 dark:text-white font-medium">
              <span>{{ t('info.days.thuFri') }}</span>
              <span>{{ t('info.times.thuFri') }}</span>
            </li>
            <li class="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-3 text-gray-900 dark:text-white font-medium">
              <span>{{ t('info.days.sat') }}</span>
              <span>{{ t('info.times.sat') }}</span>
            </li>
            <li class="flex justify-between pb-3 text-gray-500 dark:text-gray-400">
              <span>{{ t('info.days.sun') }}</span>
              <span>{{ t('info.times.closed') }}</span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  </div>
</template>

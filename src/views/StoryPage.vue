<script setup>
import { onMounted } from 'vue'
import noeImg from '../assets/images/noe.jpg'
import placeImg from '../assets/images/place.png'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="w-full min-h-screen bg-arche-beige dark:bg-surface-dark transition-colors duration-300 pt-32 pb-24 md:pb-40 selection:bg-arche-green selection:text-white dark:selection:bg-arche-beige dark:selection:text-surface-dark overflow-hidden relative">
    <div class="absolute top-24 left-0 md:-left-8 text-[7rem] md:text-[14rem] lg:text-[18rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none z-0 whitespace-nowrap">
      ORIGIN
    </div>

    <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
      <div class="w-full border-b-2 border-black dark:border-arche-beige pb-8 md:pb-16 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div class="flex flex-col gap-4">
          <p class="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-red-600 dark:text-red-500 ml-1 md:ml-1.5">
            {{ $t('storyPage.tagline') }}
          </p>
          <h1 class="font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-black dark:text-arche-beige leading-none">
            {{ $t('storyPage.title') }}
          </h1>
        </div>
        <p class="font-sans text-lg md:text-xl font-light text-gray-600 dark:text-arche-beige/70 max-w-sm leading-relaxed">
          {{ $t('storyPage.subtitle') }}
        </p>
      </div>

      <div class="flex flex-col gap-16 md:gap-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 relative group">
            <div class="w-full aspect-4/5 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 relative z-10">
              <img :src="noeImg" :alt="$t('storyPage.imageAlt1')" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -left-4 w-full h-full border-2 border-black/10 dark:border-arche-beige/10 rounded-2xl z-0 hidden md:block"></div>
          </div>

          <div class="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
            <p class="font-sans text-xl md:text-2xl font-medium text-black dark:text-arche-beige leading-relaxed">
              {{ $t('storyPage.p1') }}
            </p>
            <p class="font-sans text-base md:text-lg text-gray-700 dark:text-arche-beige/80 leading-relaxed font-light">
              {{ $t('storyPage.p2') }}
            </p>
          </div>
        </div>

        <div class="my-4 py-12 border-y border-black/10 dark:border-arche-beige/20 text-center">
          <h2 class="font-display text-2xl md:text-4xl uppercase tracking-widest text-arche-green dark:text-arche-beige leading-snug">
            {{ $t('storyPage.quote') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 flex flex-col gap-6 lg:pr-8 order-2 lg:order-1">
            <p class="font-sans text-base md:text-lg text-gray-700 dark:text-arche-beige/80 leading-relaxed font-light">
              {{ $t('storyPage.p3') }}
            </p>
            <p class="font-sans text-base md:text-lg text-gray-700 dark:text-arche-beige/80 leading-relaxed font-light">
              {{ $t('storyPage.p4') }}
            </p>
          </div>

          <div class="lg:col-span-5 relative group order-1 lg:order-2">
            <div class="w-full aspect-4/5 md:aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 relative z-10">
              <img :src="placeImg" :alt="$t('storyPage.imageAlt2')" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-black/10 dark:border-arche-beige/10 rounded-2xl z-0 hidden md:block"></div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
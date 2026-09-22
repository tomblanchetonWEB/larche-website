<script setup>
import { ArrowDown, MapPin, Phone, Clock, Star } from '@lucide/vue'
import heroImg from '../assets/images/hero.webp'
import atmosphere1Img from '../assets/images/atmosphere-1.jpg'
import atmosphere2Img from '../assets/images/atmosphere-2.jpg'
import atmosphere3Img from '../assets/images/atmosphere-3.jpg'

const scrollToInfo = () => {
  const infoSection = document.getElementById('infos')
  if (infoSection) {
    infoSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <!-- Hero Section -->
    <!-- Utilisation de h-[100dvh] pour s'adapter à la barre mobile de Safari/Chrome -->
    <!-- justify-center sur mobile, md:justify-end sur desktop -->
    <section class="relative w-full h-[100dvh] flex flex-col items-center justify-center md:justify-end pb-0 md:pb-32 overflow-hidden bg-arche-beige dark:bg-surface-dark transition-colors duration-300">

      <div
        class="absolute inset-0 z-0"
        style="
          --fade: linear-gradient(to bottom,
            #000 0%, #000 62%, rgba(0,0,0,.985) 68%, rgba(0,0,0,.94) 73%,
            rgba(0,0,0,.86) 78%, rgba(0,0,0,.73) 83%, rgba(0,0,0,.56) 88%,
            rgba(0,0,0,.36) 93%, rgba(0,0,0,.16) 97%, transparent 100%);
          -webkit-mask-image: var(--fade); mask-image: var(--fade);
        "
      >
        <img :src="heroImg" alt="Hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        class="absolute inset-0 z-10 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii45Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+');"
      ></div>

      <div class="relative z-30 text-center flex flex-col items-center px-4 w-full">
        <h1 class="font-display text-5xl md:text-7xl text-white tracking-tight mb-5 drop-shadow-lg uppercase">
          {{ $t('hero.title') }}
        </h1>

        <p class="text-white/90 font-sans text-base md:text-lg max-w-xl drop-shadow-md mb-10 font-light leading-relaxed tracking-wide">
          {{ $t('hero.subtitle') }}
        </p>

        <button @click="scrollToInfo" class="flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl border backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105">
          <span>{{ $t('hero.cta') }}</span>
          <ArrowDown class="w-4 h-4" />
        </button>
      </div>
    </section>

    <!-- Info Section -->
    <section id="infos" class="relative z-30 w-full bg-arche-beige dark:bg-surface-dark py-24 md:py-32 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 border-y border-black/10 dark:border-white/10 py-16">

        <div class="flex flex-col items-center text-center gap-6">
          <MapPin class="w-6 h-6 text-arche-green dark:text-arche-beige" />
          <div class="flex flex-col items-center gap-3">
            <h2 class="font-display text-lg uppercase tracking-widest text-arche-green dark:text-arche-beige">{{ $t('info.addressTitle') }}</h2>
            <p class="font-sans text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">{{ $t('info.address') }}</p>
          </div>
        </div>

        <div class="flex flex-col items-center text-center gap-6">
          <Phone class="w-6 h-6 text-arche-green dark:text-arche-beige" />
          <div class="flex flex-col items-center gap-3">
            <h2 class="font-display text-lg uppercase tracking-widest text-arche-green dark:text-arche-beige">{{ $t('info.bookingTitle') }}</h2>
            <a :href="'tel:' + $t('info.phone').replace(/\s/g, '')" class="font-sans text-base text-gray-700 dark:text-gray-300 hover:text-arche-green dark:hover:text-white transition-colors">{{ $t('info.phone') }}</a>
          </div>
        </div>

        <div class="flex flex-col items-center text-center gap-6">
          <Clock class="w-6 h-6 text-arche-green dark:text-arche-beige" />
          <div class="flex flex-col items-center gap-3 w-full">
            <h2 class="font-display text-lg uppercase tracking-widest text-arche-green dark:text-arche-beige">{{ $t('info.hoursTitle') }}</h2>
            <ul class="font-sans text-sm text-gray-700 dark:text-gray-300 w-full max-w-55 flex flex-col gap-2.5">
              <li class="flex justify-between w-full">
                <span>{{ $t('info.hours.d1') }}</span>
                <span>{{ $t('info.hours.h1') }}</span>
              </li>
              <li class="flex justify-between w-full">
                <span>{{ $t('info.hours.d2') }}</span>
                <span>{{ $t('info.hours.h2') }}</span>
              </li>
              <li class="flex justify-between w-full">
                <span>{{ $t('info.hours.d3') }}</span>
                <span>{{ $t('info.hours.h3') }}</span>
              </li>
              <li class="flex justify-between w-full">
                <span>{{ $t('info.hours.d4') }}</span>
                <span>{{ $t('info.hours.h4') }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Gallery Section -->
    <section class="relative z-30 w-full bg-arche-beige dark:bg-surface-dark pb-24 md:pb-32 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl md:text-5xl text-arche-green dark:text-arche-beige mb-6 uppercase tracking-widest">
            {{ $t('ambiance.title') }}
          </h2>
          <p class="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('ambiance.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-200 md:h-150">
          <div class="rounded-2xl w-full h-full md:col-span-2 md:row-span-2 transition-all duration-300 hover:opacity-90 cursor-pointer overflow-hidden bg-black/5">
            <img :src="atmosphere1Img" alt="L'Arche Ambiance 1" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-2xl w-full h-full transition-all duration-300 hover:opacity-90 cursor-pointer overflow-hidden bg-black/5">
            <img :src="atmosphere2Img" alt="L'Arche Ambiance 2" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-2xl w-full h-full transition-all duration-300 hover:opacity-90 cursor-pointer overflow-hidden bg-black/5">
            <img :src="atmosphere3Img" alt="L'Arche Ambiance 3" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="mt-14 flex justify-center">
          <a href="https://www.instagram.com/larche_clf/" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-arche-green dark:text-arche-beige hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span class="font-sans text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-current transition-colors pb-0.5">
              {{ $t('ambiance.instagram') }}
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="relative z-30 w-full bg-[#E8E6DD] dark:bg-[#151a13] py-24 md:py-32 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl md:text-5xl text-arche-green dark:text-arche-beige mb-6 uppercase tracking-widest">
            {{ $t('reviews.title') }}
          </h2>
          <p class="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('reviews.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-arche-beige dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col gap-6">
            <div class="flex items-center gap-1">
              <Star v-for="s in 5" :key="s" class="w-4 h-4 fill-arche-green text-arche-green dark:fill-arche-beige dark:text-arche-beige" />
            </div>
            <p class="font-sans text-base md:text-lg text-gray-800 dark:text-gray-200 italic leading-relaxed grow">
              "{{ $t(`reviews.r${i}.text`) }}"
            </p>
            <p class="font-sans text-sm md:text-base font-bold text-arche-green dark:text-arche-beige tracking-wide">
              {{ $t(`reviews.r${i}.name`) }}
            </p>
          </div>
        </div>

        <div class="mt-14 flex justify-center">
          <a href="https://www.google.com/maps/place/L'arche+bar/@45.7774542,3.0825316,536m/data=!3m1!1e3!4m8!3m7!1s0x47f71bd6df70b777:0xb9b849e9b41c252b!8m2!3d45.7769693!4d3.0852331!9m1!1b1!16s%2Fg%2F11h1l1c7nw?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-arche-green dark:text-arche-beige hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0a7.487 7.487 0 0 0-7.487 7.487c0 4.144 7.487 16.513 7.487 16.513s7.488-12.37 7.488-16.513A7.487 7.487 0 0 0 12 0zm0 11.23a3.744 3.744 0 1 1 0-7.487 3.744 3.744 0 0 1 0 7.488z" />
            </svg>
            <span class="font-sans text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-current transition-colors pb-0.5">
              {{ $t('reviews.googleAction') }}
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
// Import the static QR code image
import qrMenuImg from '../assets/images/qr-menu.png'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="w-full min-h-screen bg-arche-beige dark:bg-surface-dark transition-colors duration-300 pt-32 pb-24 md:pb-40 selection:bg-arche-green selection:text-white dark:selection:bg-arche-beige dark:selection:text-surface-dark overflow-hidden relative">

    <!-- Brutalist Background Watermark -->
    <div class="absolute top-40 -left-10 text-[8rem] md:text-[16rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none z-0 whitespace-nowrap">
      AGENDA
    </div>

    <div class="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

      <!-- Centered Header -->
      <div class="w-full border-b-2 border-black dark:border-arche-beige pb-8 md:pb-12 mb-12 md:mb-16 flex flex-col items-center text-center gap-6">
        <h1 class="font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-black dark:text-arche-beige leading-none">
          {{ $t('eventsPage.title') }}
        </h1>
        <p class="font-sans text-xl md:text-2xl font-medium text-arche-green dark:text-arche-beige max-w-lg leading-relaxed">
          {{ $t('eventsPage.subtitle') }}
        </p>
      </div>

      <!-- Content (Description + Static QR Code) -->
      <div class="flex flex-col items-center text-center gap-16">
        
        <p class="font-sans text-lg md:text-xl text-gray-700 dark:text-arche-beige/80 leading-relaxed font-light max-w-2xl">
          {{ $t('eventsPage.description') }}
        </p>

        <!-- QR Code Section -->
        <div class="flex flex-col items-center gap-8 p-8 md:p-12 border border-black/10 dark:border-arche-beige/20 rounded-3xl bg-black/5 dark:bg-white/5 w-full max-w-md">
          <h2 class="font-display text-2xl md:text-3xl uppercase tracking-widest text-black dark:text-arche-beige">
            {{ $t('eventsPage.qrTitle') }}
          </h2>

          <!-- Clickable link wrapping the static local image -->
          <a href="https://tomblanchetonweb.github.io/larche-website/menu" class="group relative block p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            
            <img 
              :src="qrMenuImg" 
              alt="QR Code Menu L'Arche" 
              class="w-48 h-48 object-contain transition-opacity group-hover:opacity-30" 
            />
            
            <!-- Hover overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="bg-arche-green text-white font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full">Ouvrir la carte</span>
            </div>
          </a>

          <p class="font-sans text-sm font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-arche-beige/60">
            {{ $t('eventsPage.qrScan') }}
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

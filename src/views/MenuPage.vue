<script setup>
import { onMounted, ref } from 'vue'

// Array defining the categories to iterate through
const menuCategories = [
  { id: 'coffee', key: 'coffee' },
  { id: 'cocktails', key: 'cocktails' },
  { id: 'wine', key: 'wine' },
  { id: 'softs', key: 'softs' }
]

// Smooth scroll to the specific category section
const scrollToCategory = (categoryId) => {
  const element = document.getElementById(categoryId)
  if (element) {
    // Add offset for fixed header navigation
    const offset = 120 
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <!-- Main container needs padding top to account for the absolute navbar in App.vue -->
  <div class="w-full min-h-screen bg-arche-beige dark:bg-surface-dark transition-colors duration-300 pt-32 pb-24 md:pb-40 selection:bg-black selection:text-white dark:selection:bg-arche-beige dark:selection:text-surface-dark">
    
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Brutalist Header -->
      <div class="w-full border-b-2 border-black dark:border-arche-beige pb-8 md:pb-16 mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div class="flex flex-col gap-4">
          <!-- Optical alignment correction using positive left margin to align with the large L -->
          <p class="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-red-600 dark:text-red-500 ml-1 md:ml-1.5">
            {{ $t('menuPage.warning') }}
          </p>
          <h1 class="font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-black dark:text-arche-beige leading-none">
            {{ $t('menuPage.title') }}
          </h1>
        </div>
        <p class="font-sans text-lg md:text-xl font-light text-gray-600 dark:text-arche-beige/70 max-w-sm leading-relaxed">
          {{ $t('menuPage.subtitle') }}
        </p>
      </div>

      <!-- Layout: Sticky Sidebar (Left) + Scrolling Content (Right) -->
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
        
        <!-- Sticky Navigation -->
        <div class="lg:w-1/4">
          <div class="sticky top-40 flex flex-col gap-6">
            <button 
              v-for="cat in menuCategories" 
              :key="cat.id"
              @click="scrollToCategory(cat.id)"
              class="text-left font-display text-xl md:text-2xl uppercase tracking-widest text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-arche-beige transition-colors duration-300"
            >
              {{ $t(`menuPage.categories.${cat.key}`) }}
            </button>
          </div>
        </div>

        <!-- Menu Content -->
        <div class="lg:w-3/4 flex flex-col gap-32">
          
          <!-- Category: RAW EXTRACTION (Coffee) -->
          <div id="coffee" class="relative w-full">
            <!-- Brutalist Background Watermark -->
            <div class="absolute -top-10 -left-10 text-[10rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none hidden md:block z-0">
              AROMA
            </div>
            
            <div class="relative z-10 w-full flex flex-col gap-10">
              <h2 class="font-display text-4xl border-b border-black/20 dark:border-arche-beige/20 pb-4 text-black dark:text-arche-beige uppercase tracking-widest">
                {{ $t('menuPage.categories.coffee') }}
              </h2>
              
              <div class="flex flex-col gap-8 w-full">
                <!-- Item C1 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.c1.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.c1.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.c1.desc') }}</p>
                </div>

                <!-- Item C2 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.c2.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.c2.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.c2.desc') }}</p>
                </div>

                <!-- Item C3 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.c3.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.c3.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.c3.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category: POISONS & REMEDIES (Cocktails) -->
          <div id="cocktails" class="relative w-full">
            <div class="absolute -top-10 -left-10 text-[10rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none hidden md:block z-0">
              SPIRITS
            </div>
            
            <div class="relative z-10 w-full flex flex-col gap-10">
              <h2 class="font-display text-4xl border-b border-black/20 dark:border-arche-beige/20 pb-4 text-black dark:text-arche-beige uppercase tracking-widest">
                {{ $t('menuPage.categories.cocktails') }}
              </h2>
              
              <div class="flex flex-col gap-8 w-full">
                <!-- Item K1 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.k1.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.k1.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.k1.desc') }}</p>
                </div>

                <!-- Item K2 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.k2.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.k2.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.k2.desc') }}</p>
                </div>

                <!-- Item K3 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.k3.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.k3.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.k3.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category: FERMENTATIONS (Wine/Beer) -->
          <div id="wine" class="relative w-full">
            <div class="absolute -top-10 -left-10 text-[10rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none hidden md:block z-0">
              TERROIR
            </div>
            
            <div class="relative z-10 w-full flex flex-col gap-10">
              <h2 class="font-display text-4xl border-b border-black/20 dark:border-arche-beige/20 pb-4 text-black dark:text-arche-beige uppercase tracking-widest">
                {{ $t('menuPage.categories.wine') }}
              </h2>
              
              <div class="flex flex-col gap-8 w-full">
                <!-- Item W1 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.w1.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.w1.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.w1.desc') }}</p>
                </div>

                <!-- Item W2 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.w2.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.w2.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.w2.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category: SOFTS (Illusions) -->
          <div id="softs" class="relative w-full">
            <div class="absolute -top-10 -left-10 text-[10rem] font-display font-bold uppercase opacity-5 text-black dark:text-arche-beige pointer-events-none select-none tracking-tighter leading-none hidden md:block z-0">
              FRESH
            </div>
            
            <div class="relative z-10 w-full flex flex-col gap-10">
              <h2 class="font-display text-4xl border-b border-black/20 dark:border-arche-beige/20 pb-4 text-black dark:text-arche-beige uppercase tracking-widest">
                {{ $t('menuPage.categories.softs') }}
              </h2>
              
              <div class="flex flex-col gap-8 w-full">
                <!-- Item S1 -->
                <div class="flex flex-col gap-2 group">
                  <div class="flex justify-between items-baseline gap-4 w-full">
                    <h3 class="font-sans text-xl font-bold uppercase tracking-wide text-black dark:text-arche-beige group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{{ $t('menuPage.items.s1.name') }}</h3>
                    <div class="grow border-b border-dashed border-gray-300 dark:border-gray-700 relative -top-1.5 opacity-50"></div>
                    <span class="font-sans text-lg font-bold text-black dark:text-arche-beige">{{ $t('menuPage.items.s1.price') }}€</span>
                  </div>
                  <p class="font-sans text-sm text-gray-500 dark:text-arche-beige/60">{{ $t('menuPage.items.s1.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure smooth scrolling behavior on the whole document when this page is active */
:root {
  scroll-behavior: smooth;
}
</style>

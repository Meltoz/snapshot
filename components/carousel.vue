<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import gsap from 'gsap'
import type { Card } from '~/models/card'
import { last } from '@antfu/utils';

const props = defineProps<{
  lastName: string;
  firstName: string;
  cards: Card[]
}>()

const currentIndex = ref(0)
const total = computed(() => props.cards.length)

// Vignettes visibles
const visibleThumbnails = computed(() => {
  const start = currentIndex.value + 1
  return Array.from({ length: 3 }, (_, i) => {
    const index = (start + i) % total.value
    return props.cards[index]
  })
})

function next() {
  direction.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % total.value
}

function prev() {
  direction.value = 'prev'
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

// Barre de progression
const progress = computed(() => ((currentIndex.value + 1) / total.value) * 100)

// Animation
const activeImageRef = ref<HTMLElement | null>(null)
const thumbnailsWrapperRef = ref<HTMLElement | null>(null)
const direction = ref<'next' | 'prev'>('next')

function animateMainImage() {
  if (!activeImageRef.value) return

  const xFrom = direction.value === 'next' ? 200 : -200
  gsap.fromTo(
    activeImageRef.value,
    { x: xFrom, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
  )
}

function animateThumbnails() {
  if (!thumbnailsWrapperRef.value) return

  const xFrom = direction.value === 'next' ? 100 : -100
  gsap.fromTo(
    thumbnailsWrapperRef.value,
    { x: xFrom, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
  )
}

onMounted(() => {
  animateMainImage()
  animateThumbnails()
})

watch(currentIndex, () => {
  animateMainImage()
  animateThumbnails()
})
</script>

<template>
  <div class="relative w-full h-[91vh] bg-black text-white overflow-hidden">
    <!-- Image principale -->
    <div class="w-full h-full flex items-center justify-center relative">
      <img
        :src="props.cards[currentIndex].img"
        alt="Image principale"
        class="object-cover w-full h-full absolute top-0 left-0"
        ref="activeImageRef"
      />
    </div>

    <div class="absolute top-1/2 -translate-y-1/2 left-20 w-1/4 h-4/12 bg-black/50 p-5 corner-frame">
      <p class="font-kosugi px-2">{{cards[currentIndex].description}}</p>
      <h2 class="text-8xl font-playfair italic">{{firstName}}</h2>
      <h3 class="text-8xl font-playfair uppercase contour text-transparent">{{lastName}}</h3>
    </div>

    <div
      ref="thumbnailsWrapperRef"
      class="absolute bottom-72 right-16 flex gap-2 z-20"
    >
      <div
        v-for="(thumb, i) in visibleThumbnails"
        :key="i"
        class="w-60 h-64 rounded overflow-hidden shadow-md border border-white/30 bg-white "
      >
          <img
            :src="thumb.img"
            alt="thumbnail"
            class="px-2 mt-5 h-4/6 w-full object-fill rounded-xl"
          />
      </div>
    </div>

    <!-- controls -->
    <div class="flex items-center gap-2 absolute bottom-36 left-7/12 w-2/5  backdrop-blur-xs rounded-full px-2 ">
      <div class="flex items-baseline">
        <button
          @click="next"
          class="cursor-pointer "
        >
          <img src="/images/photographes/next.svg" class="size-12 pb-2"  />
        </button>
        <button
          @click="prev"
          class="cursor-pointer"
        >
          <img src="/images/photographes/next.svg"  class="pb-2 size-12 rotate-180" />
        </button>
      </div>
      <div class="w-full space-y-1">
        <div
          class="h-0.5 bg-red-500 transition-all duration-300"
          :style="{ width: progress + '%' }"
        ></div>
        <div class="h-0.5 bg-white grow"> </div>
      </div>
      <p class="font-playfair italic text-7xl pb-6">0{{currentIndex +1}}</p>
    </div>
  </div>
</template>
<style>
.contour{
  color: transparent;
  -webkit-text-stroke: 1px white;
}.corner-frame::before,
 .corner-frame::after {
   content: "";
   position: absolute;
   width: 30px;
   height: 30px;
   border: 2px solid white;
 }

.corner-frame::before {
  top: -15px;
  left: -15px;
  border-bottom: none;
  border-right: none;
}

.corner-frame::after {
  bottom: -15px;
  right: -15px;
  border-top: none;
  border-left: none;
}

</style>

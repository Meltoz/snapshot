<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import gsap from 'gsap'
import type { Card } from '~/models/card'

const props = defineProps<{
  lastName: string;
  firstName: string;
  cards: Card[]
}>()

const currentIndex = ref(0)
const total = computed(() => props.cards.length)
const progress = computed(() => ((currentIndex.value + 1) / total.value) * 100)

let startX = 0;
let endX = 0;
const swipeThreshold = 15;

const activeImageRef = ref<HTMLElement | null>(null);
const descriptionRef = ref<HTMLElement | null>(null);
const descriptionMobileRef = ref<HTMLElement | null>(null);
const nameRef = ref<string | null>(null)
const thumbnailsWrapperRef = ref<HTMLElement | null>(null)
const direction = ref<'next' | 'prev'>('next')

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
function animateDescription() {
  const isMobile = window.innerWidth < 768
  const target = isMobile ? descriptionMobileRef.value : descriptionRef.value
  if (!target) return

  const tl = gsap.timeline()

  // Étape 2 : effacer
  tl.to(target, {
    duration: 0.2,
    text: '',
    ease: 'none'
  })

  // Étape 3 : écrire le nouveau
  tl.to(target, {
    duration: 2,
    text: props.cards[currentIndex.value].description,
    ease: 'none'
  })
}
function animateName() {
  if(!nameRef.value) return

  const tl =gsap.timeline();

  tl.fromTo(nameRef.value,{
    x:75,
    opacity: 0,

  },{
    x:0,
    opacity:1,
    duration: 1,
    ease: 'power1.out',
  })
}
const handleTouchStart = (event: TouchEvent) => {
  startX = event.touches[0].clientX;
}

const handleTouchEnd = (event: TouchEvent) => {
  endX = event.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      prev();
    } else {
      next();
    }
  }
}

onMounted(() => {
  animateMainImage()
  animateThumbnails()
  animateDescription()
  animateName();
  const container = document.getElementById('carousel-container');
  if (container) {
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
  }
})

watch(currentIndex, () => {
  animateMainImage()
  animateThumbnails()
  animateDescription()
})
</script>

<template>
  <div id="carousel-container"
    class="relative w-full h-[85vh] md:h-[91vh] bg-black text-white overflow-hidden">
    <!-- Image principale -->
    <div class="w-full h-full flex items-center justify-center relative">
      <img
        :src="props.cards[currentIndex].img"
        alt="Image principale"
        class="md:object-cover object-fill w-full h-full absolute top-0 left-0"
        ref="activeImageRef"
      />
    </div>

    <div class="hidden md:block absolute  top-1/2 -translate-y-1/2 left-20 w-1/4 h-4/12 bg-black/50 p-5 corner-frame">
      <p class="font-kosugi px-2 h-10" ref="descriptionRef">{{cards[currentIndex].description}}</p>
      <div ref="nameRef">
        <p class="text-8xl font-playfair italic">{{firstName}}</p>
        <p class="text-8xl font-playfair uppercase contour text-transparent">{{lastName}}</p>
      </div>
    </div>

    <div
      ref="thumbnailsWrapperRef"
      class="hidden md:flex absolute bottom-72 right-16  gap-2 z-20"
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
    <div class="flex items-center gap-2 absolute bottom-10 md:bottom-36 left-10 md:left-7/12 w-10/12 md:w-2/5  backdrop-blur-xs rounded-full px-2 ">
      <div class="hidden md:flex items-baseline ">
        <button
          @click="prev"
          class="cursor-pointer "
        >
          <img src="/images/photographes/next.svg" class="size-12 pb-2"  />
        </button>
        <button
          @click="next"
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
      <p class="font-playfair italic text-3xl md:text-7xl pb-6">0{{currentIndex +1}}</p>
    </div>

  <!--    description mobile-->
    <p class="md:hidden block absolute bottom-5 left-1/2 w-4/5 -translate-x-1/2" ref="descriptionMobileRef">{{cards[currentIndex].description}}</p>
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

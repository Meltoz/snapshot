<template>
  <div
    class="relative w-full h-full overflow-hidden bg-black text-white"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @mousemove="onMove"
    @click="onClick"
    ref="container"
  >
    <h2 class="text-[7rem] px-5 pt-10 font-playfair italic">Découvrir</h2>
    <h3 class="text-[4rem] px-28 -pt-16 font-playfair italic">Nos photographes</h3>
    <!--    grille-->
    <div class="absolute top-1/3 left-0 w-full h-px bg-white"></div>
    <div class="absolute top-2/3 left-0 w-full h-px bg-white"></div>
    <div class="absolute top-0 left-1/3 h-full w-px bg-white"></div>
    <div class="absolute top-0 left-2/3 h-full w-px bg-white"></div>

    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute w-48 h-60 pointer-events-none rounded-lg overflow-hidden shadow-lg transition-opacity duration-300"
      :style="{
        top: image.y + 'px',
        left: image.x + 'px',
        zIndex: index,
        opacity: 1
      }"
    >
      <img :src="image.src" alt="" class="w-full h-full object-cover" />
    </div>
    <NuxtLink to="photographes" class="absolute bottom-20 right-40 text-3xl border border-white px-16 py-2 font-kosugi hover:bg-white hover:text-black hover:border-black transition-colors duration-500 z-50">Voir plus</NuxtLink>
    <!-- Overlay : Image agrandie -->
    <div
      v-if="showImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
      @click="closeImage"
    >
      <img
        :src="selectedImage?.src"
        ref="fullImageRef"
        class="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl object-contain transition-all duration-300"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const container = ref(null)
const isActive = ref(false)
const lastMousePos = ref({ x: 0, y: 0 })

const images = ref([])
let imageIndex = 0
const allImageSources = [
  '/images/photographes/tatuso/img1.png',
  '/images/photographes/tatuso/img2.png',
  '/images/photographes/tatuso/img3.png',
  '/images/photographes/tatuso/img4.png',
  '/images/photographes/tatuso/img5.png',
  '/images/photographes/tatuso/img6.png',
  '/images/photographes/walter/img1.png',
  '/images/photographes/walter/img2.png',
  '/images/photographes/walter/img3.jpg',
  '/images/photographes/walter/img4.png',
  '/images/photographes/walter/img5.png',
  '/images/photographes/walter/img6.png'
]

let lastImageTime = 0
const delayMs = 75

const selectedImage = ref(null)
const showImage = ref(false)
const fullImageRef = ref(null)

function onEnter() {
  if (!showImage.value) isActive.value = true
}

function onLeave() {
  isActive.value = false
}

function onMove(e) {
  if (!isActive.value || !container.value || showImage.value) return

  const now = Date.now()
  if (now - lastImageTime < delayMs) return

  const bounds = container.value.getBoundingClientRect()
  const x = e.clientX - bounds.left - 48
  const y = e.clientY - bounds.top - 48

  const dx = x - lastMousePos.value.x
  const dy = y - lastMousePos.value.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  if (distance < 4) return

  images.value.push({
    x,
    y,
    src: allImageSources[imageIndex % allImageSources.length]
  })

  lastMousePos.value = { x, y }
  lastImageTime = now
  imageIndex++

  const maxImages = 5
  if (images.value.length > maxImages) {
    images.value.shift()
  }
}

function onClick() {
  if (showImage.value || images.value.length === 0) return

  selectedImage.value = images.value[images.value.length - 1]
  showImage.value = true
}

function closeImage() {
  gsap.to(fullImageRef.value, {
    scale: 0.7,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      showImage.value = false
    }
  })
}

// Animation GSAP sur affichage
watch(showImage, async (val) => {
  if (val) {
    await nextTick()
    gsap.fromTo(
      fullImageRef.value,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }
    )
  }
})
</script>

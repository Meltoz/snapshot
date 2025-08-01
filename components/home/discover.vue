<template>
  <div
    class="relative w-full h-full overflow-hidden bg-black text-white"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @mousemove="onMove"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const container = ref(null)
const isActive = ref(false)
const lastMousePos = ref({ x: 0, y: 0 })

const images = ref([])
let imageIndex = 0
const allImageSources = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
]

// Contrôle du délai
let lastImageTime = 0
const delayMs = 75

function onEnter() {
  isActive.value = true
}

function onLeave() {
  isActive.value = false
}

function onMove(e) {
  if (!isActive.value || !container.value) return

  const now = Date.now()
  if (now - lastImageTime < delayMs) return // ignore si trop tôt

  const bounds = container.value.getBoundingClientRect()
  const x = e.clientX - bounds.left - 48
  const y = e.clientY - bounds.top - 48

  // On ajoute une nouvelle image uniquement si la souris a vraiment bougé
  const dx = x - lastMousePos.value.x
  const dy = y - lastMousePos.value.y
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance < 4) return // mouvement trop faible : on ignore

  images.value.push({
    x,
    y,
    src: allImageSources[imageIndex % allImageSources.length]
  })

  lastMousePos.value = { x, y }
  lastImageTime = now
  imageIndex++

  // Optionnel : limite du nombre d'images
  const maxImages = 5
  if (images.value.length > maxImages) {
    images.value.shift()
  }
}
</script>

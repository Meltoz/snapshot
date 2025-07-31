<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const images = ref([
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
])

const overlayImage = ref<null | HTMLImageElement>(null)
const isAnimating = ref(false)

function expandImage(image: string, sourceEl: HTMLElement) {
  const rect = sourceEl.getBoundingClientRect()

  // Si une image est déjà ouverte, referme-la avant d'ouvrir la nouvelle
  if (overlayImage.value && !isAnimating.value) {
    closeCurrentImage(() => {
      createAndAnimateImage(image, rect)
    })
  } else if (!overlayImage.value && !isAnimating.value) {
    createAndAnimateImage(image, rect)
  }
}

function createAndAnimateImage(image: string, rect: DOMRect) {
  isAnimating.value = true

  const clone = document.createElement('img')
  clone.src = image
  clone.className = 'absolute object-cover rounded-lg  cursor-pointer'
  Object.assign(clone.style, {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  })

  document.body.appendChild(clone)
  overlayImage.value = clone

  // Animation plein écran
  gsap.to(clone, {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    borderRadius: 0,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: () => {
      isAnimating.value = false
    }
  })

  // Clic pour refermer
  clone.addEventListener('click', () => {
    if (!isAnimating.value) {
      closeCurrentImage()
    }
  })
}

function closeCurrentImage(callback?: () => void) {
  if (!overlayImage.value) return

  isAnimating.value = true
  const el = overlayImage.value
  const rect = el.getBoundingClientRect()

  // On garde la position actuelle (plein écran), mais on le referme vers sa taille originale simulée
  // Pour plus de réalisme, tu peux retrouver l'image source dans le DOM

  gsap.to(el, {
    top: `${rect.top + window.scrollY + 40}px`, // légère animation vers le bas
    left: `${rect.left}px`,
    width: '80px',
    height: '80px',
    borderRadius: '0.5rem',
    duration: 0.5,
    ease: 'power2.in',
    onComplete: () => {
      el.remove()
      overlayImage.value = null
      isAnimating.value = false
      if (callback) callback()
    }
  })
}
</script>
<template>
  <div class="absolute bottom-4 right-4 flex gap-2 z-50">
    <img
      v-for="(image, index) in images"
      :key="image"
      :src="image"
      class="w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
      @click="expandImage(image, $event.target)"
    />
  </div>
</template>

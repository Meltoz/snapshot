<template>
  <div ref="container" class="bg-black">
    <!-- Parallax Image -->
    <div class="relative h-[35vh] overflow-hidden">
      <img
        ref="parallaxImage"
        src="/images/parallax/arbres.png"
        alt="Parallax"
        class="absolute top-0 left-0 w-full object-contain"
      />
    </div>

    <!-- Infinite Image Slider -->
    <div class="relative -top-24 overflow-hidden bg-transparent">
      <div
        ref="sliderWrapper"
        class="flex w-max gap-10 px-10 items-center"
      >
        <div
          v-for="(img, i) in images"
          :key="`img-${i}`"
          class="shrink-0 w-64 h-56 overflow-hidden object-contain"
        >
          <img
            :src="img"
            alt="Slide Image"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const parallaxImage = ref<HTMLImageElement | null>(null)
const sliderWrapper = ref<HTMLDivElement | null>(null)

const baseImages = [
  '/images/parallax/img1.jpg',
  '/images/parallax/img2.jpg',
  '/images/parallax/img3.jpg',
  '/images/parallax/img4.jpg',
  '/images/parallax/img5.jpg',
  '/images/parallax/img6.jpg',
  '/images/parallax/img7.jpg',
]
const images = [...baseImages, ...baseImages]

onMounted(() => {
  const lenis = new Lenis({ smooth: true })
  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  if (parallaxImage.value) {
    gsap.fromTo(
      parallaxImage.value,
      { y: -200 },       // position de départ
      {
        y: -600,      // position finale
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxImage.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }

  // Infinite slider
  if (sliderWrapper.value) {
    const items = sliderWrapper.value.children
    const totalWidth = Array.from(items).reduce((acc, el) => acc + el.clientWidth + 40, 0)

    gsap.to(sliderWrapper.value, {
      x: `-=${totalWidth / 2}`,
      duration: 55,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
      },
    })
  }
})
</script>


<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

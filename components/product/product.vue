<template>
  <section class="mt-5 h-screen">
    <p class="text-center text-2xl absolute w-full">[{{ year }}]</p>
    <div class="flex justify-between font-playfair absolute">
      <div class="space-y-6 ml-4">
        <p class="text-7xl">{{ brand }}</p>
        <p class="text-6xl italic">{{ model }}</p>
        <div class="h-1 bg-red-500 w-1/12"></div>
        <p class="w-3/12 font-kosugi text-justify text-xs">{{ description }}</p>
      </div>
      <p class="text-3xl basis-5/12">
        “{{ citation }}”
      </p>
    </div>

    <div ref="container" class="relative w-full mx-auto py-14">
      <img
        :src="img"
        alt="Image interactive"
        class="w-1/2 mx-auto h-auto object-cover"
      />

      <!-- Points -->
      <div
        v-for="(point, index) in points"
        :key="'point-' + index"
        class="absolute z-10"
        :style="{
          top: point.y + '%',
          left: point.x + '%',
          transform: 'translate(-50%, -50%)',
        }"
        ref="el => point.pointEl = el"
      >
        <div class="w-5 h-5 bg-white rounded-full border-2 border-black"></div>
      </div>

      <!-- Tooltips (séparés des points) -->
      <div
        v-for="(point, index) in points"
        :key="'tooltip-' + index"
        class="absolute z-50 max-w-[300px] bg-white text-xs px-3 py-1 space-y-5 font-kosugi"
        :style="{
          top: point.tooltipy + '%',
          left: point.tooltipx + '%',
          transform: 'translate(-50%, -50%)',
        }"
        ref="el => point.tooltipEl = el"
      >
        <h3 class="text-2xl">{{ point.title }}</h3>
        <p class="text-justify">{{ point.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import type { Product, Point } from '~/models/product';

const props = defineProps<Product>();

const container = ref<HTMLElement | null>(null);
const containerWidth = ref(0);
const containerHeight = ref(0);



const points = reactive<Point[]>([
  {
    x: 41,
    y: 50,
    tooltipx: 25,
    tooltipy: 70,
    title: 'Écran LCD caché',
    text: 'L’écran principal est replié vers l’intérieur, comme un dos d’appareil argentique. Tu n’y accèdes que si tu l’ouvres. À la place, un petit écran secondaire affiche la simulation de film utilisée. C’est un design pensé pour vivre la photo sans distraction.',
    show: false,
  },
  {
    x: 67,
    y: 26,
    tooltipx: 80,
    tooltipy: 20,
    title: 'Viseur hybride (optique + électonique)',
    text: 'C’est l’un des rares appareils à offrir le choix entre un viseur optique clair et un viseur électronique haute résolution. Tu peux ainsi alterner entre une vision classique sans latence et une prévisualisation en temps réel de ton exposition.',
    show: false,
  },
  {
    x: 74,
    y: 75,
    tooltipx: 85,
    tooltipy: 60,
    title: 'Viseur hybride (optique + électonique)',
    text: 'C’est l’un des rares appareils à offrir le choix entre un viseur optique clair et un viseur électronique haute résolution. Tu peux ainsi alterner entre une vision classique sans latence et une prévisualisation en temps réel de ton exposition.',
    show: false,
  },
]);

function updateContainerSize() {
  if (container.value) {
    containerWidth.value = container.value.clientWidth;
    containerHeight.value = container.value.clientHeight;
  }
}

onMounted(() => {
  updateContainerSize();
  window.addEventListener('resize', updateContainerSize);
});
</script>

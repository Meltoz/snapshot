<template>
  <section class="mt-5 h-screen">
    <p class="text-center text-2xl absolute w-full font-kosugi">[{{ year }}]</p>
    <div class="flex justify-between font-playfair absolute">
      <div class="space-y-6 ml-4">
        <p class="text-7xl">{{ brand }}</p>
        <p class="text-6xl italic">{{ model }}</p>
        <div class="h-1 bg-red-500 w-1/12"></div>
        <p class="w-3/12 font-kosugi text-justify text-md">{{ description }}</p>
      </div>
      <p class="text-[1.6rem] basis-7/12">“{{ citation }}”</p>
    </div>

    <div ref="container" class="relative w-full mx-auto py-24">
      <img :src="img" alt="Image interactive" class="w-1/2 mx-auto h-auto object-cover" />

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
        @mouseenter="hoveredPointIndex = index"
        @mouseleave="hoveredPointIndex = null"
      >
        <!-- Cercle externe -->
        <div class="relative w-8 h-8 cursor-pointer">
          <!-- Halo -->
          <div class="absolute inset-0 rounded-full border border-black animate-ping"></div>

          <!-- Point central -->
          <div class="absolute top-1/2 left-1/2 w-5 h-5 bg-white rounded-full border-2 border-black transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        </div>
      </div>

      <!-- Tooltips -->
      <div v-for="(point, index) in points" :key="'tooltip-' + index">
        <div
          class="absolute z-50 max-w-[300px] bg-white text-xs px-3 py-2 rounded font-kosugi transition-opacity duration-700"
          :class="hoveredPointIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          :style="{
      top: point.tooltipy + '%',
      left: point.tooltipx + '%',
      transform: 'translate(-50%, -50%)',
    }"
        >
          <h3 class="text-2xl mb-2">{{ point.title }}</h3>
          <p class="text-justify">{{ point.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ProductProps } from '~/models/product';

const props = defineProps<ProductProps>();

const container = ref<HTMLElement | null>(null);
const containerWidth = ref(0);
const containerHeight = ref(0);
const hoveredPointIndex = ref<number | null>(null);

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

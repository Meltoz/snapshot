<template>
  <span class="relative p-2">
    <a
      :href="href"
      class="group relative px-6 py-3 font-semibold transition-transform duration-200 font-kosugi border"
      :class="[textColor, bgColor, inverseBg]"
    >
      <span class="relative z-10">
        <slot />
      </span>
    </a>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href: string
  color: 'white' | 'black'
}>()

const textColor = computed(() => (props.color === 'white' ? 'text-black' : 'text-white'))
const bgColor = computed(() => (props.color === 'white' ? 'bg-white border-black' : 'bg-black border-white'))
const inverseBg = computed(() =>
  props.color === 'white'
    ? 'hover:after:bg-black focus-visible:after:bg-black'
    : 'hover:after:bg-white focus-visible:after:bg-white'
)
</script>

<style>
a {
  position: relative;
  z-index: 1; /* stacking context */
  transition: transform 0.2s;
}

a::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translate(4px, 4px);
  transition: transform 0.2s, background-color 0.2s;
  z-index: -1; /* dessous */
  pointer-events: none; /* évite d’intercepter la souris */
}

a:hover {
  transform: translate(-4px, -4px);
}

a:hover::after {
  transform: translate(8px, 8px);
}
</style>

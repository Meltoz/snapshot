<template>
  <span class="relative p-2">
    <a
      :href="href"
      class="group relative px-6 py-3 font-semibold font-kosugi border transition-transform duration-200 ease-out"
      :class="[textColor, bgColor, shadowColor]"
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
const bgColor = computed(() => (props.color === 'white' ? 'bg-white' : 'bg-black'))
const shadowColor = computed(() => (props.color === 'white' ? 'shadow-black' : 'shadow-white'))
</script>

<style scoped>
a {
  position: relative;
  z-index: 1;
}

a::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translate(4px, 4px);
  z-index: -1;
  pointer-events: none;
  transition: transform 0.2s ease-out;
}

/* Couleur de l'ombre pour bouton blanc */
a.shadow-black::after {
  background-color: black;
}

/* Couleur de l'ombre pour bouton noir */
a.shadow-white::after {
  background-color: white;
}

a:hover {
  transform: translate(-4px, -4px);
}

a:hover::after {
  transform: translate(8px, 8px);
}

a:focus-visible {
  transform: translate(-4px, -4px);
}

a:focus-visible::after {
  transform: translate(8px, 8px);
}</style>
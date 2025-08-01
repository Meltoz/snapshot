<template>
  <div class="max-w-full">
    <Header class="sticky top-0 z-50" />
    <slot />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
</script>

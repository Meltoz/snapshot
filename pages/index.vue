<script setup lang="ts">

import transitionConfig from '~/helpers/transition-config';
import Discover from '~/components/home/discover.vue';
import Hero from '~/components/home/hero.vue';

useHead({
  title: 'Snapshot - Fujifilm'
})

definePageMeta({
  pageTransition: transitionConfig
});
</script>

<template>
  <main>
    <hero/>
    <discover class="w-full h-screen" />
  </main>


</template>

<style scoped>

</style>
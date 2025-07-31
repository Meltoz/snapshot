<script setup lang="ts">

import transitionConfig from '~/helpers/transition-config';

definePageMeta({
  pageTransition: transitionConfig
})
</script>

<template>
  <main>
      <carousel />
    <div class="pt-10">
      <p>on est en dessous du carousel</p>
    </div>
  </main>


</template>

<style scoped>

</style>
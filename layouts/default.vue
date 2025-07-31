<template>
  <div class="max-w-full overflow-x-hidden">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/footer.vue';
</script>

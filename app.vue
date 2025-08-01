<template>
    <NuxtLayout>
      <div
        id="transition-overlay"
        class="fixed inset-0 bg-black pointer-events-none z-[9999] opacity-0"
      ></div>
      <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
</script>
<script setup lang="ts">
import transitionConfig from '~/helpers/transition-config';

useHead({
  title: 'Snapshot - Fujifilm',
});

definePageMeta({
  pageTransition: transitionConfig,
});
</script>

<template>
  <div class="bg h-screen text-white">
    <h2 class="font-playfair italic text-5xl py-5 md:text-[116px] mx-4">Photographes</h2>
    <div class="border-b border-t border-white mx-auto max-w-6xl">
      <div class="flex md:flex-row flex-col justify-between border-l border-b border-white py-10">
        <div class="mx-4 md:mx-32 space-y-10">
          <h3 class="text-5xl md:text-6xl font-playfair"><span class="italic">Tatsuo</span> SUZUKI</h3>
          <p class="font-kosugi text-justify">Tatsuo Suzuki est un photographe de rue japonais connu pour ses images percutantes en noir et blanc, capturant l’intensité et l'énergie brute de Tokyo. </p>
          <div class="md:flex hidden justify-end w-full">
            <NuxtLink to="photographes/tatsuo-suzuki" class="bg-white hover:bg-white/80 px-16 py-2 text-black border border-black transition-colors duration-300">Voir les photos</NuxtLink>
          </div>
        </div>
        <img src="/images/photographes/tatsuo.jpg" />
        <NuxtLink to="photographes/tatsuo-suzuki" class="md:hidden block bg-white hover:bg-white/80 px-16 py-2 text-black border border-black transition-colors duration-300">Voir les photos</NuxtLink>
      </div>
      <div class="flex justify-between flex-row-reverse border-r border-white py-10">
        <div class="mx-32 space-y-10">
          <div class="flex justify-end">
            <h3 class="text-6xl font-playfair italic">Walter IOOS</h3>
          </div>

          <p class="font-kosugi text-justify">Walter Iooss Jr. est un photographe américain renommé pour son travail dans le domaine du sport. Il a photographié de nombreuses icônes telles que Michael Jordan, Muhammad Ali ou Serena Williams.</p>
          <NuxtLink to="photographes/walter-ioos" class="bg-white hover:bg-white/80 px-16 py-2 text-black border border-black transition-colors duration-300">Voir les photos</NuxtLink>
        </div>
        <img src="/images/photographes/walter.jpg" />
      </div>
    </div>
  </div>

</template>
<style>
 .bg{
   background-image: url("/images/photographes/background.avif");
   background-position-y: 0;
   background-size: cover;
 }
</style>
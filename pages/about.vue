<script setup lang="ts">
import transitionConfig from '~/helpers/transition-config';
import gsap from 'gsap'
import { ref } from 'vue';

definePageMeta({
  pageTransition: transitionConfig,
});

const designRef = ref<HTMLElement | null>(null);
const devRef = ref<HTMLElement | null>(null);

function animateDesign() {
  if (!designRef.value) return;


  const tl = gsap.timeline();

  tl.fromTo(
    designRef.value,
    {
      x: -20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1',
    }
  );


}

function animateDev(){
  if (!devRef.value) return;
  const tl = gsap.timeline();
  tl.fromTo(devRef.value, {
      x: -20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay:0.2,
      ease: 'power2',
    })
}

onMounted(() => {
  animateDesign();
  animateDev();
});
</script>

<template>
  <div class="">
    <div class="flex flex-col md:flex-row justify-between md:items-center">
      <h2 class="px-5 pt-10 font-playfair italic text-7xl md:text-[7rem]">Crédits</h2>
      <div class="mx-5 md:ml-0 mr-36 mt-14 font-kosugi text-2xl">
        <p>Images from</p>
        <ul>
          <li>+ Fujifilm website</li>
          <li>+ Walter IOOS website</li>
          <li>+ Tatsuo website</li>
          <li>+ Cosmos</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 ml-5 md:ml-80 space-y-5" ref="designRef">
      <p class="font-kosugi text-2xl">Design by :</p>
      <p class="font-playfair text-4xl md:text-7xl italic ml-20">TinyChineseGirl</p>
    </div>
    <div class="mt-20 md:mt-48 ml-5 md:ml-[40%] space-y-5" ref="devRef">
      <p class="font-kosugi text-2xl">Dev by :</p>
      <p class="font-playfair text-4xl md:text-7xl italic ml-20">Meltoz</p>
    </div>
    <!--    grille-->
    <div class="absolute top-1/3 left-0 w-full h-px bg-black"></div>
    <div class="absolute top-2/3 left-0 w-full h-px bg-black"></div>
    <div class="absolute top-0 left-1/3 h-full w-px bg-black"></div>
    <div class="absolute top-0 left-2/3 h-full w-px bg-black"></div>
  </div>
</template>

<style scoped></style>
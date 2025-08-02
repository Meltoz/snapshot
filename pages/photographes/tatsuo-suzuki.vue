<script setup lang="ts">
 import type { Card } from '~/models/card';
 import transitionConfig from '~/helpers/transition-config';

 definePageMeta({
   pageTransition: transitionConfig,
 });
 const cards: Card[] = [{
  img:'/images/photographes/tatuso/img1.png',
   description: 'A girl at the theater ticker counter, Shibuya, Tokyo (2013)'
 }, {
   img:'/images/photographes/tatuso/img2.png',
   description: 'A girl behind the fence, Tokyo (2013)'
 }, {
   img:'/images/photographes/tatuso/img3.png',
   description: 'Ready to fight, Tokyo (2018)'
 }, {
   img:'/images/photographes/tatuso/img4.png',
   description: 'Shibuya ghost'
 }, {
   img:'/images/photographes/tatuso/img5.png',
   description: 'Tokyo street (2018)'
 }, {
   img:'/images/photographes/tatuso/img6.png',
   description: 'Shibuya ghost'
 }];
</script>

<template>
<div>
  <Carousel last-name="Suzuki" first-name="Tatsuo" :cards="cards" />
</div>
</template>

<style scoped>

</style>
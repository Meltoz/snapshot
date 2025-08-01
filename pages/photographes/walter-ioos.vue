<script setup lang="ts">
import type { Card } from '~/models/card';

const cards: Card[] = [{
  img:'/images/photographes/walter/img1.png',
  description: 'Jimmy Orr, Baltimore, MD, 1962'
}, {
  img:'/images/photographes/walter/img2.png',
  description: 'Michelle Kwan, New York, NY, 1997'
}, {
  img:'/images/photographes/walter/img3.jpg',
  description: 'Earvin "Magic" Johnson, Beverly HIlls, CA, 1991'
}, {
  img:'/images/photographes/walter/img4.png',
  description: 'Closing Ceremonies, Los Angeles, CA, 1984'
}, {
  img:'/images/photographes/walter/img5.png',
  description: 'Gymnast, Los Angeles, CA, 1983'
}, {
  img:'/images/photographes/walter/img6.png',
  description: 'Carl Lewis, Houston, TX, 1988 (#2)'
}];
</script>

<template>
<div>
  <carousel last-name="ioos" first-name="Walter" :cards="cards" />
</div>
</template>

<style scoped>

</style>
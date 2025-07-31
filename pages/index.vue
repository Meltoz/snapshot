<script setup lang="ts">
import transitionConfig from '~/helpers/transition-config';
import Discover from '~/components/home/discover.vue';
import Hero from '~/components/home/hero.vue';
import Product from '~/components/product/product.vue';

useHead({
  title: 'Snapshot - Fujifilm',
});

definePageMeta({
  pageTransition: transitionConfig,
});
</script>

<template>
  <main>
    <hero />
    <Product
      brand="Fujifilm"
      model="X-Pro3"
      year="2021"
      description="Le Fujifilm X-Pro3 est un appareil unique qui mise sur une expérience photographique épurée et immersive. Il cache son écran principal pour inciter à se concentrer sur la prise de vue, comme avec un appareil argentique. Il est particulièrement apprécié des photographes de rue et des puristes."
      citation="Photographier avec intention, comme à l’époque de l’argentique"
      img="/images/product/xpro3.png"
      :instax="false"
    />
    <Product
      brand="Instax"
      model="WIDE Evo"
      year="2021"
      description="L’Instax Wide Evo n’est pas encore sorti officiellement (au 29 juillet 2025), mais il est attendu comme la version grand format de l’Instax Mini Evo. Il viserait les créateurs exigeants en combinant fonctions numériques avancées avec impression instantanée Wide (format 108 × 86 mm), très apprécié pour les portraits ou les paysages."
      citation="Exprimez grand. L’instantané devient une scène"
      img="/images/product/wide-evo.png"
      :instax="true"
    />
    <Product
      brand="Fujifilm"
      model="XT5"
      year="2022"
      description="Le Fujifilm X-T5 est un boîtier hybride expert de la série X, qui revient à une ergonomie photographique plus classique. Compact et léger, il embarque pourtant un capteur APS-C haute résolution de 40 Mpx, idéal pour les amateurs de paysages, studio ou impressions grand format."
      citation="L'équilibre parfait entre puissance, légèreté et créativité pure"
      img="/images/product/XT5.png"
      :instax="false"
    />
    <Product
      brand="Instax"
      model="Mini 12"
      year="2023"
      description="L’Instax Mini 12 est un appareil photo instantané simple et ludique, pensé pour un usage quotidien et familial. Son look arrondi et coloré en fait un objet tendance, idéal pour les ados et les amateurs de souvenirs imprimés."
      citation="La simplicité au bout des doigts, pour des souvenirs instantanés tout en douceur"
      img="/images/product/mini12.png"
      :instax="true"
    />
    <Product
      brand="Instax"
      model="Mini 99"
      year="2024"
      description="L’Instax Mini 99 est un appareil photo instantané haut de gamme au design classique et élégant, pensé pour ceux qui veulent un contrôle créatif tout en profitant du charme de l’instantané. Il se distingue nettement des modèles plus simples par ses réglages manuels inédits dans la gamme Instax."
      citation="Prenez le contrôle de la lumière, et donnez du caractère à chaque photo"
      img="/images/product/mini99.png"
      :instax="true"
    />
    <discover class="w-full h-screen" />
    <paralax />
  </main>
</template>

<style scoped></style>
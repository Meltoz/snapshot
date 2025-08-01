<script setup lang="ts">
import transitionConfig from '~/helpers/transition-config';
import Discover from '~/components/home/discover.vue';
import Hero from '~/components/home/hero.vue';
import Product from '~/components/product/product.vue';
import type { ProductProps } from '~/models/product';

useHead({
  title: 'Snapshot - Fujifilm',
});

definePageMeta({
  pageTransition: transitionConfig,
});
const products: ProductProps[] = [
  {
    brand: 'Fujifilm',
    model: 'X-Pro3',
    year: '2019',
    description:
      'Le Fujifilm X-Pro3 est un appareil unique qui mise sur une expérience photographique épurée et immersive. Il cache son écran principal pour inciter à se concentrer sur la prise de vue, comme avec un appareil argentique. Il est particulièrement apprécié des photographes de rue et des puristes.',
    citation: 'Photographier avec intention, comme à l’époque de l’argentique',
    img: '/images/product/xpro3.png',
    instax: false,
    points: [
      {
        x: 41,
        y: 50,
        tooltipx: 25,
        tooltipy: 70,
        title: 'Écran LCD caché',
        text: 'L’écran principal est replié vers l’intérieur, comme un dos d’appareil argentique. Tu n’y accèdes que si tu l’ouvres. À la place, un petit écran secondaire affiche la simulation de film utilisée. C’est un design pensé pour vivre la photo sans distraction.',
      },
      {
        x: 67,
        y: 28,
        tooltipx: 85,
        tooltipy: 28,
        title: 'Viseur hybride (optique + électonique)',
        text: 'C’est l’un des rares appareils à offrir le choix entre un viseur optique clair et un viseur électronique haute résolution. Tu peux ainsi alterner entre une vision classique sans latence et une prévisualisation en temps réel de ton exposition.',
      },
      {
        x: 74,
        y: 75,
        tooltipx: 85,
        tooltipy: 60,
        title: 'Boîtier en titane',
        text: 'Le X-Pro3 est fabriqué en titane, un matériau très résistant à la corrosion et aux chocs. Les finitions Dura Silver et Dura Black offrent une surface traitée pour une durabilité accrue et un look haut de gamme.',
      },
    ],
  },
  {
    brand: 'Fujifilm',
    model: 'XT5',
    year: '2022',
    description: `Le Fujifilm X-T5 est un boîtier hybride expert de la série X, qui revient à une ergonomie photographique plus classique. Compact et léger, il embarque pourtant un capteur APS-C haute résolution de 40 Mpx, idéal pour les amateurs de paysages, studio ou impressions grand format.`,
    citation: `L'équilibre parfait entre puissance, légèreté et créativité pure`,
    img: '/images/product/XT5.png',
    instax: false,
    points: [
      {
        x: 29,
        y: 50,
        tooltipx: 15,
        tooltipy: 62,
        title: 'Écran orientable 3 axes',
        text: 'Contrairement aux écrans totalement articulés, celui du X-T5 s’ouvre sur 3 axes, ce qui est plus pratique pour la photo en mode paysage ou portrait, tout en restant discret. Parfait pour la street photo ou les prises au ras du sol.',
      },
      {
        x: 67,
        y: 16,
        tooltipx: 84,
        tooltipy: 20,
        title: 'Capteur X-Trans CMOS 5 HR de 40 Mpx',
        text: 'Ce capteur APS-C haute résolution offre un niveau de détail exceptionnel, idéal pour l’impression grand format ou le recadrage sans perte. Il conserve la structure X-Trans qui améliore la netteté et la restitution des couleurs',
      },
      {
        x: 72,
        y: 70,
        tooltipx: 85,
        tooltipy: 60,
        title: 'Stabilisation IBIS sur 7 stops',
        text: 'Le X-T5 intègre une stabilisation sur 5 axes directement dans le boîtier, permettant de photographier à main levée à des vitesses lentes sans flou de bougé, et de filmer sans trépied dans de bonnes conditions',
      },
    ],
  },
  {
    brand: 'Instax',
    model: 'Mini 12',
    year: '2023',
    description: `L’Instax Mini 12 est un appareil photo instantané simple et ludique, pensé pour un usage quotidien et familial. Son look arrondi et coloré en fait un objet tendance, idéal pour les ados et les amateurs de souvenirs imprimés.`,
    citation: `La simplicité au bout des doigts, pour des souvenirs instantanés tout en douceur`,
    img: '/images/product/mini12.png',
    instax: true,
    points: [
      {
        x: 37,
        y: 45,
        tooltipx: 25,
        tooltipy: 60,
        title: 'Exposition automatique',
        text: 'L’Instax Mini 12 ajuste automatiquement la vitesse d’obturation et la luminosité selon l’environnement. Même sans aucune connaissance photo, tu obtiens des clichés bien exposés, même en intérieur',
      },
      {
        x: 66,
        y: 29,
        tooltipx: 80,
        tooltipy: 28,
        title: 'Objectif rétractable avec mode gros plan',
        text: 'L’objectif sort automatiquement quand tu allumes l’appareil, et il suffit de tourner une bague pour activer le mode "Close-up". Ce mode permet de faire des photos nettes à 30-50 cm, idéal pour les selfies ou les petits objets.',
      },
      {
        x: 63,
        y: 59,
        tooltipx: 75,
        tooltipy: 70,
        title: 'Impression au format Instax Mini',
        text: 'Les photos sont imprimées instantanément sur un format carte de crédit (86 x 54 mm). C’est le format Instax le plus populaire, parfait pour décorer un mur, offrir ou glisser dans un portefeuille.',
      },
    ],
  }, {
    brand: 'Instax',
    model: 'Mini 99',
    year: '2024',
    description: `L’Instax Mini 99 est un appareil photo instantané haut de gamme au design classique et élégant, pensé pour ceux qui veulent un contrôle créatif tout en profitant du charme de l’instantané. Il se distingue nettement des modèles plus simples par ses réglages manuels inédits dans la gamme Instax.`,
    citation: `Prenez le contrôle de la lumière, et donnez du caractère à chaque photo`,
    img: '/images/product/mini99.png',
    instax: true,
    points: [
      {
        x: 35,
        y: 55,
        tooltipx: 20,
        tooltipy: 70,
        title: '6 effets de lumière intégrés',
        text: 'L’Instax Mini 99 est doté d’un cadran de sélection physique permettant d’ajouter des effets de lumière colorée (rose, vert, bleu, sépia, etc.) au flash, directement à la prise de vue. Ces effets donnent une ambiance unique et créative à chaque photo, sans retouche.',
      },
      {
        x: 60,
        y: 28,
        tooltipx: 75,
        tooltipy: 28,
        title: 'Format instax Mini et design rétro professionnel',
        text: 'Toujours compatible avec le format Instax Mini (86 x 54 mm), le Mini 99 se distingue par son look noir mat texturé, des molettes mécaniques, et un style proche d’un appareil photo argentique. Il s’adresse aux passionnés qui veulent une expérience photographique plus "pro" dans l’univers Instax.',
      },
      {
        x: 51,
        y: 66,
        tooltipx: 65,
        tooltipy: 70,
        title: 'Viseur hybride (optique + électonique)',
        text: 'C’est l’un des rares appareils à offrir le choix entre un viseur optique clair et un viseur électronique haute résolution. Tu peux ainsi alterner entre une vision classique sans latence et une prévisualisation en temps réel de ton exposition.',
      },
    ],
  }, {
    brand: 'Instax',
    model: 'WIDE Evo',
    year: '2025',
    description: `L'Instax Wide Evo n’est pas encore sorti officiellement (au 29 juillet 2025), mais il est attendu comme la version grand format de l’Instax Mini Evo. Il viserait les créateurs exigeants en combinant fonctions numériques avancées avec impression instantanée Wide (format 108 × 86 mm), très apprécié pour les portraits ou les paysages.`,
    citation: 'Exprimez grand. L’instantané devient une scène',
    img: '/images/product/wide-evo.png',
    instax: true,
    points: [
      {
        x: 35,
        y: 75,
        tooltipx: 20,
        tooltipy: 75,
        title: 'Format Instax Wide',
        text: 'L’Instax Wide imprime des images plus grandes (108 x 86 mm), idéales pour les photos de groupe, les paysages ou les albums scrapbooking. Ce format donne plus de place à la composition et au détail.',
      },
      {
        x: 63,
        y: 22,
        tooltipx: 80,
        tooltipy: 30,
        title: 'Filtre numériques et effets d’objectifs',
        text: 'Comme sur le Mini Evo, l’appareil proposerait plusieurs filtres numériques (noir et blanc, rétro, sépia, etc.) combinés à des effets "objectifs" (flou, vignette, miroir) pour une touche créative avant impression.',
      },
      {
        x: 58,
        y: 50,
        tooltipx: 75,
        tooltipy: 65,
        title: 'Écran LCD pour la prévisualisation',
        text: 'Contrairement aux Instax classiques, l’écran permettrait de voir la photo avant impression, de sélectionner uniquement celles que l’on souhaite garder et de retoucher légèrement les images. Moins de gaspillage de films.',
      },
    ],
  },
];
</script>

<template>
  <main>
    <hero />
    <Product v-for="product in products" v-bind="product" class="screen-section h-screen" />
    <discover class="w-full h-screen" />
    <paralax />
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
const snapshot = [
  'Où trouver le magazine',
  'Le dernier numéro',
  'Tous nos numéros',
  'Les hors-séries',
];
const universe = ['A propos', 'Nos galeries', 'Le magazine', 'snapshot immersive'];
const participate = ['Soumettre votre travail', 'Proposez un évènements', 'Concours'];
const link = [
  'A propos',
  'Contact',
  'Protection des données',
  'Cookies',
  'Mentions légales',
  'Réglement du concours',
];
</script>

<template>
  <footer class="bg-black text-white font-kosugi text-xl px-5">
    <section class="flex justify-between">
      <div class="basis-3/12">
        <h4 class="font-kosugi text-7xl mb-5">Snapshot</h4>
        <p class="text-justify">
          Snapshot est un magazine dédié à la photographie contemporaine, mêlant portfolios,
          interviews et réflexions visuelles. Il met en avant des talents émergents comme confirmés,
          avec une attention particulière à la narration et à l'expérimentation photographique.
        </p>
        <div class="flex my-20 gap-10">
          <img src="/logo/insta.svg" class="h-[50px]" alt="insta" />
          <img src="/logo/facebook.svg" class="h-[50px]" alt="facebook" />
        </div>
        <div class="flex justify-between text-3xl">
          <p>Découvrir</p>
          <p>Inspirer</p>
          <p>Partage</p>
        </div>
      </div>
      <div class="flex justify-between basis-7/12 my-5">
        <div class="space-y-7">
          <h5 class="text-3xl">Snapshot magazine</h5>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in snapshot"
              :key="index"
              class="text-white/80 cursor-pointer hover:text-white"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="space-y-7">
          <h5 class="text-3xl">L'univers</h5>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in universe"
              :key="index"
              class="text-white/80 cursor-pointer hover:text-white"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="space-y-7">
          <h5 class="text-3xl">Participez</h5>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in participate"
              :key="index"
              class="text-white/80 cursor-pointer hover:text-white"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="flex justify-between py-5">
      <p class="basis-2/12"><span class="opacity-65">&copy;</span> Snapshot 2025</p>
      <div class="flex justify-between basis-8/12">
        <p
          v-for="(item, index) in link"
          :key="item"
          class="text-white/80 cursor-pointer hover:text-white"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </footer>
</template>

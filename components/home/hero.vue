<script setup lang="ts">
</script>

<template>
  <section class="bg-white font-kosugi">
    <div class="flex flex-col md:flex-row   gap-10  md:gap-40 xl:gap-72 justify-between items-center my-10">
      <div class=" space-y-5 basis-5/12">
        <div class="flex  items-center flex-col">
          <img src="/logo/fujifilm-logo-1.svg" class="h-40 mx-5" />
          <p class="text-justify mx-5">
            Fujifilm (富士フイルム株式会社, Fujifuirumu Kabushiki-gaisha) est une entreprise japonaise
            fondée en 1934, spécialisée à l'origine dans les pellicules photographiques. Aujourd'hui,
            c'est un conglomérat technologique opérant dans la photo, la santé, les matériaux de haute
            technologie et l'imagerie numérique.
          </p>
        </div>

        <div class="flex md:justify-end w-full">
          <cite class="text-6xl text-right font-playfair">“Value from Innovation”</cite>
        </div>
        <div class="h-1 w-9/12 bg-red-500"></div>
        <div class="h-1 w-5/12 bg-red-500"></div>
      </div>
      <div class="relative basis-4/12">
        <div class="absolute -left-[17rem] top-10 invisible xl:visible">
          <img src="/images/hero/boitier.jpg" class="h-52"/>
          <div class="h-[40px] w-[270px] bg-red-500/80 absolute -left-16 -bottom-5"></div>
        </div>
        <div class="border-2 border-red-500 space-y-6 px-5 mx-4 xl:px-10 py-2 xl:py-14">
          <h3 class="text-center">[1948]</h3>
          <p class=" text-justify">
            Fujifilm lance son premier appareil photo, le Fujica Six, un appareil moyen format
            pliable. Il marque les débuts de la marque dans la fabrication d’appareils
            photographiques, jusque-là concentrée uniquement sur la pellicule. Cette entrée sur le
            marché du matériel photo permettra à Fujifilm de développer une expertise complète, du
            film à la prise de vue.
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img src="/images/hero/lens.avif" class="w-full min-h-40 object-cover"/>
      <div class="max-w-[28rem] absolute z-10 top-5 right-5 text-white space-y-6">
        <h3 class="text-center">[2011]</h3>
        <p>Lancement du Fujifilm X100, appareil hybride rétro, qui relance la marque auprès des photographes experts.</p>
      </div>
    </div>
  </section>
</template>

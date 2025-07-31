<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const slider = ref(null)
const content = ref(null);
const touchStartX = ref(0)
const touchEndX = ref(0)

const items = ref([
  {
    title: 'Lossless Youths',
    img: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    title: 'Estrange Bond',
    img: 'https://i.redd.it/tc0aqpv92pn21.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    title: 'The Gate Keeper',
    img: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    title: 'Last Trace Of Us',
    img: 'https://images7.alphacoders.com/878/878663.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    title: 'Urban Decay',
    img: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    title: 'The Migration',
    img: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
])

function next() {
  const first = items.value.shift()
  items.value.push(first)
  animate()
}

function prev() {
  const last = items.value.pop()
  items.value.unshift(last)
  animate()
}

function animate() {
  content.forEach((el, i) => {
    if (i === 1) {
      gsap.fromTo(
        el,
        { opacity: 0, filter: 'blur(5px)', y: 75 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.75,
          delay: 0.3,
          ease: 'power2.out',
        }
      )
    }
  })
}

function getItemStyle(index) {
  const baseLeft = 220
  let style = {
    backgroundImage: `url('${items.value[index].img}')`,
    width: '200px',
    height: '300px',
    left: '0',
    opacity: 1,
  }
  const left = 70;
  if (index === 2) style.left = `${left}%`
  else if (index === 3) style.left = `calc(${left}% + ${baseLeft}px)`
  else if (index === 4) style.left = `calc(${left}% + ${baseLeft * 2}px)`
  else if (index === 5) {
    style.left = `calc(${left}% + ${baseLeft * 3}px)`
    style.opacity = 0
  }

  return style
}

// Gestion du swipe
function handleTouchStart(e) {
  touchStartX.value = e.changedTouches[0].screenX
}

function handleTouchEnd(e) {
  touchEndX.value = e.changedTouches[0].screenX
  const deltaX = touchEndX.value - touchStartX.value

  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) next()
    else prev()
  }
}

onMounted(() => {
  if (slider.value) {
    slider.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    slider.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
})
</script>

<template>
  <main class="relative w-full h-[90vh] shadow-lg overflow-hidden">
    <ul ref="slider" class="slider">
      <li
        v-for="(item, index) in items"
        :key="item.title"
        class="absolute top-1/2 z-10 rounded-2xl bg-center bg-cover shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)] transition-all duration-[750ms]"
        :style="getItemStyle(index)"
        :class="{
          '!w-full !h-full !top-0 !rounded-none shadow-none opacity-100': index === 1
        }"
        :data-index="index"
      >
        <div
          class="absolute top-1/2  z-20 text-white max-w-[400px] opacity-0"
          :class="{ 'block animate-show': index === 1 }"
          ref="content"
        >
          <h2 class="text-xl uppercase drop-shadow">"{{ item.title }}"</h2>
          <p class="my-4 text-sm leading-relaxed drop-shadow">
            {{ item.description }} coucou
          </p>
          <button class="bg-white/10 border-2 border-white px-4 py-3 rounded cursor-pointer text-white">
            Read More
          </button>
        </div>
      </li>
    </ul>

    <nav class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 select-none">
      <button @click="prev" class="bg-white/50 text-black/70 border-2 border-black/60 mx-1 p-3 rounded-full hover:bg-white/30 cursor-pointer">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
      <button @click="next" class="bg-white/50 text-black/70 border-2 border-black/60 mx-1 p-3 rounded-full hover:bg-white/30 cursor-pointer">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </button>
    </nav>
  </main>
</template>

<style scoped>
@keyframes show {
  0% {
    filter: blur(5px);
    transform: translateY(75px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-show {
  animation: show 0.75s ease-in-out 0.3s forwards;
}
</style>

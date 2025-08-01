import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const lenis = new Lenis();

// Update ScrollTrigger à chaque scroll Lenis
lenis.on('scroll', ScrollTrigger.update);

// Raf Lenis sur le ticker de GSAP
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  // Rendre Lenis accessible via inject
  nuxtApp.provide('lenis', lenis);

  // --- Snap scroll section par section ---

  ScrollTrigger.defaults({
    scroller: document.documentElement, // ne pas utiliser 'body'
  });

  gsap.utils.toArray<HTMLElement>('.screen-section').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      snap: {
        snapTo: 1,
        duration: 0.8,
        ease: 'power1.inOut',
      },
    });
  });
});

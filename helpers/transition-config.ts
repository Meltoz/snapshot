import gsap from 'gsap';

import { useTransitionComposable } from '~/composables/transition-composable';
import type { TransitionProps } from 'vue';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition: TransitionProps = {
  name: 'page-transition',
  mode: 'out-in',
  onEnter: (el: any, done: any) => {
    const overlay = document.getElementById('transition-overlay');

    gsap
      .timeline({
        onComplete() {
          toggleTransitionComplete(true); // si tu en as besoin
          done();
        },
      })
      .to(overlay, { opacity: 0, duration: 0.4 }) // le noir disparaît
      .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '<'); // en parallèle : nouvelle page apparaît
  },
  onLeave: (el: any, done: any) => {
    const overlay = document.getElementById('transition-overlay');
    toggleTransitionComplete(false); // optionnel
    gsap
      .timeline({
        onComplete: done,
      })
      .to(el, { opacity: 0, duration: 0.2 }) // ancienne page disparaît
      .to(overlay, { opacity: 1, duration: 0.4 }, '<'); // en parallèle : fond noir apparaît
  },
};

export default pageTransition;

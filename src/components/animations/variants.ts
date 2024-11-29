import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const slideIn: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const scaleUp: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const imageReveal: Variants = {
  initial: { 
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0
  },
  animate: { 
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
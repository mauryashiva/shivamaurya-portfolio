export const isReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const baseEase = [0.22, 1, 0.36, 1];

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: isReducedMotion ? 0.02 : 0.05,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: isReducedMotion ? 10 : 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: isReducedMotion ? 0.12 : 0.22, ease: baseEase },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: isReducedMotion ? 10 : 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: isReducedMotion ? 0.12 : 0.2, ease: baseEase },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: isReducedMotion ? -10 : -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: isReducedMotion ? 0.12 : 0.2, ease: baseEase },
  },
};

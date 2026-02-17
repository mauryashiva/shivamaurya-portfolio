import { Variants, Transition } from "framer-motion";

// The core "pop" spring physics
const popSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const popInUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: popSpring,
  },
};

export const popInLeft: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: popSpring,
  },
};

export const popInRight: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: popSpring,
  },
};

import { useEffect, useRef, useState } from "react";

export function useScrollSpeed() {
  const lastY = useRef(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const handle = () => {
      const current = window.scrollY;
      const diff = Math.abs(current - lastY.current);
      setSpeed(diff);
      lastY.current = current;
    };

    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return speed;
}

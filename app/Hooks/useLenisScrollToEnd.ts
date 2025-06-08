import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useLenisScrollToEnd = (
  ref: React.RefObject<HTMLDivElement | null>,
  onReachEnd: () => void,
  threshold: number = 10,
  throttleTime: number = 200,
) => {
  const lastCalled = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    const checkIfAtEnd = (time: number) => {
      if (!ref.current || time - lastCalled.current < throttleTime) return;

      // @ts-ignore
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom <= windowHeight + threshold) {
        lastCalled.current = time;
        onReachEnd();
      }
    };

    const raf = (time: number) => {
      lenis.raf(time);
      checkIfAtEnd(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [ref, onReachEnd, threshold, throttleTime]);
};

export default useLenisScrollToEnd;

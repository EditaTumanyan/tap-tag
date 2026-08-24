"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ target, final, style }: { target: number; final: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDisplay(final);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const dur = 1100;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(String(Math.round(target * eased)));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(final);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, final]);

  return (
    <div ref={ref} style={style}>
      {display}
    </div>
  );
}

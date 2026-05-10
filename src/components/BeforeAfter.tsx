import { useState, useRef, useCallback } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

interface CompareProps {
  before: string;
  after: string;
  label: string;
}

function CompareSlider({ before, after, label }: CompareProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border shadow-card"
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
      >
        <img src={after} alt={`${label} after cleaning`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${label} before cleaning`}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          />
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-md"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            aria-label="Drag to compare"
            onMouseDown={(e) => {
              e.preventDefault();
              const handle = (ev: MouseEvent) => move(ev.clientX);
              const stop = () => {
                window.removeEventListener("mousemove", handle);
                window.removeEventListener("mouseup", stop);
              };
              window.addEventListener("mousemove", handle);
              window.addEventListener("mouseup", stop);
            }}
            className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-elevated"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            <svg className="-ml-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-primary/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">Before</span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">After</span>
      </div>
      <p className="text-center text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="gallery" className="bg-surface py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Real Results
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            See the difference for yourself.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drag the slider to reveal the transformation.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <CompareSlider before={before1} after={after1} label="Living Room — Deep Clean" />
          <CompareSlider before={before2} after={after2} label="Kitchen — Restoration Clean" />
        </div>
      </div>
    </section>
  );
}

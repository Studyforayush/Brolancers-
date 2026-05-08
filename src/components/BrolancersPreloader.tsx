import { useEffect, useState } from "react";

interface Props {
  onComplete?: () => void;
  duration?: number;
}

// Brand palette
// bg #12051F  cream #F6F1E8  yellow #F6E84A  violet #8B5CFF
const STREAKS = [
  { rotate: -18, delay: 0.05, color: "#F6E84A", x: "-60vw", y: "-12vh" },
  { rotate: 28, delay: 0.18, color: "#8B5CFF", x: "60vw", y: "-22vh" },
  { rotate: -48, delay: 0.3, color: "#F6F1E8", x: "-50vw", y: "28vh" },
  { rotate: 55, delay: 0.42, color: "#8B5CFF", x: "55vw", y: "26vh" },
  { rotate: 8, delay: 0.55, color: "#F6E84A", x: "0", y: "-40vh" },
  { rotate: -8, delay: 0.68, color: "#F6F1E8", x: "0", y: "40vh" },
];

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  delay: Math.random() * 2,
  dur: 4 + Math.random() * 5,
}));

export function BrolancersPreloader({ onComplete, duration = 3600 }: Props) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(1 - Math.pow(1 - p, 2));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setExiting(true);
        setTimeout(() => {
          setHidden(true);
          onComplete?.();
        }, 850);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#12051F] transition-all duration-[850ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
        exiting ? "opacity-0 scale-110 blur-md" : "opacity-100"
      }`}
      aria-hidden={exiting}
    >
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:radial-gradient(#F6F1E8_1px,transparent_1px)] [background-size:3px_3px]" />

      {/* Floating particles (cream) */}
      <div className="absolute inset-0">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#F6F1E8]/60 blur-[1px] animate-brolancers-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Converging streaks (brand only) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {STREAKS.map((s, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-brolancers-converge"
            style={{
              ["--from-x" as any]: s.x,
              ["--from-y" as any]: s.y,
              ["--rot" as any]: `${s.rotate}deg`,
              animationDelay: `${s.delay}s`,
            }}
          >
            <div
              className="h-[2px] w-[55vw] max-w-[640px] rounded-full opacity-0 blur-[0.5px] animate-brolancers-streak-fade"
              style={{
                background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                boxShadow: `0 0 18px ${s.color}55`,
                animationDelay: `${s.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Soft violet pulse glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#8B5CFF_0%,transparent_65%)] opacity-25 blur-3xl animate-brolancers-spin-slow" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-44 w-44 rounded-full bg-[#F6E84A]/10 blur-2xl animate-brolancers-pulse" />
      </div>

      {/* Ripple bursts */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F6F1E8]/25 opacity-0 animate-brolancers-ripple"
            style={{ animationDelay: `${1.5 + i * 0.25}s` }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="select-none text-center font-semibold tracking-[0.18em] text-[clamp(2.5rem,8vw,5.5rem)] leading-none">
            <span className="inline-block animate-brolancers-logo-in text-[#F6F1E8] drop-shadow-[0_0_30px_rgba(139,92,255,0.35)]">
              BRO<span className="text-[#F6E84A]">L</span>ANCERS
            </span>
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3 opacity-0 animate-brolancers-fade-up [animation-delay:1.4s]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#F6F1E8]/60" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#F6F1E8]/60">
              Creative · AI · Studio
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#F6F1E8]/60" />
          </div>
        </div>

        {/* Loader bar */}
        <div className="mt-14 flex w-[min(320px,70vw)] flex-col items-center gap-3 opacity-0 animate-brolancers-fade-up [animation-delay:1.6s]">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[#F6F1E8]/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#8B5CFF] via-[#F6F1E8] to-[#F6E84A] shadow-[0_0_12px_rgba(139,92,255,0.5)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[#F6F1E8]/50">
            <span>Loading</span>
            <span>{Math.round(progress * 100).toString().padStart(3, "0")}%</span>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#12051F_100%)]" />
    </div>
  );
}

export default BrolancersPreloader;

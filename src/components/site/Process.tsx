import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { n: "01", t: "Discover the brand", d: "We learn your audience, voice, and goals." },
  { n: "02", t: "Plan the campaign", d: "Concept, hooks, scripts, and posting strategy." },
  { n: "03", t: "Create AI visuals", d: "Custom AI shots, scenes, and brand-fit imagery." },
  { n: "04", t: "Edit videos & reels", d: "Cinematic cuts, sound design, motion graphics." },
  { n: "05", t: "Launch content", d: "Distribute across the right platforms." },
  { n: "06", t: "Improve based on response", d: "Iterate using data and performance." },
];

export default function Process() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-row", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="process" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">/ Process</p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-6xl">
            From Idea To <span className="text-[#F6E84A]">Campaign-Ready</span> Content
          </h2>
        </div>

        <div className="divide-y divide-[#F6F1E8]/10 border-y border-[#F6F1E8]/10">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="step-row group grid grid-cols-[60px_1fr] items-center gap-6 py-7 transition-colors hover:bg-[#F6F1E8]/[0.02] sm:grid-cols-[80px_1fr_2fr]"
            >
              <span className="font-mono text-sm text-[#8B5CFF]">{s.n}</span>
              <h3 className="text-2xl font-medium text-[#F6F1E8] transition group-hover:text-[#F6E84A] sm:text-3xl">
                {s.t}
              </h3>
              <p className="col-span-2 text-[#F6F1E8]/60 sm:col-span-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Play } from "lucide-react";

// NOTE: Replace these placeholder cards with real video/image thumbnails when available.
const VISUAL_CARDS = [
  { tag: "AI Ad", label: "Hotel · Reel", from: "#8B5CFF", to: "#12051F" },
  { tag: "Promo", label: "School · 30s", from: "#F6E84A", to: "#12051F" },
  { tag: "Reel", label: "Store · Drop", from: "#F6F1E8", to: "#12051F" },
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", {
        yPercent: 110,
        duration: 1,
        stagger: 0.12,
      })
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .from(
          ".hero-card",
          { y: 40, opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.1 },
          "-=0.7"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen overflow-hidden pt-40 md:pt-48"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#8B5CFF33_0%,transparent_60%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F6F1E8]/15 bg-[#F6F1E8]/5 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[#F6F1E8]/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F6E84A]" />
              AI Content · Video · Marketing
            </div>

            <h1 className="font-semibold leading-[1.02] tracking-tight text-[#F6F1E8] text-[clamp(2.5rem,6vw,5.5rem)]">
              {[
                ["AI-Powered ", "Content"],
                ["That Makes ", "Brands"],
                ["Impossible ", "To Ignore"],
              ].map((parts, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="hero-line inline-block">
                    {i === 0 ? (
                      <>
                        <span className="text-[#F6E84A]">AI-Powered</span> Content
                      </>
                    ) : i === 2 ? (
                      <>
                        <span className="text-[#F6E84A]">Impossible</span> To Ignore
                      </>
                    ) : (
                      parts.join("")
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-sub mt-6 max-w-xl text-base text-[#F6F1E8]/70 sm:text-lg">
              We create scroll-stopping videos, AI visuals, reels, ads, and digital
              campaigns for hotels, schools, stores, creators, and modern businesses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="hero-cta group inline-flex items-center gap-2 rounded-full bg-[#F6F1E8] px-6 py-3.5 text-sm font-medium text-[#12051F] transition hover:bg-[#F6F1E8]/90"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 text-[#8B5CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="hero-cta group inline-flex items-center gap-2 rounded-full border border-[#F6F1E8]/20 bg-[#F6F1E8]/5 px-6 py-3.5 text-sm font-medium text-[#F6F1E8] backdrop-blur transition hover:bg-[#F6F1E8]/10"
              >
                <Play className="h-3.5 w-3.5 text-[#F6E84A]" />
                View Work
              </a>
            </div>
          </div>

          {/* Visual cards stack */}
          <div className="relative mx-auto h-[380px] w-full max-w-[480px] sm:h-[460px]">
            {VISUAL_CARDS.map((c, i) => (
              <div
                key={i}
                className="hero-card absolute overflow-hidden rounded-3xl border border-[#F6F1E8]/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
                style={{
                  width: "78%",
                  aspectRatio: "9/12",
                  left: `${i * 11}%`,
                  top: `${i * 8}%`,
                  transform: `rotate(${(i - 1) * 4}deg)`,
                  background: `linear-gradient(160deg, ${c.from}, ${c.to})`,
                  zIndex: i,
                }}
              >
                {/* Replace this gradient block with a real <video>/<img> later */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute left-4 top-4 rounded-full bg-[#12051F]/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.3em] text-[#F6F1E8] backdrop-blur">
                  {c.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#F6F1E8]/90">
                    {c.label}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F6F1E8]">
                    <Play className="h-3 w-3 text-[#12051F]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

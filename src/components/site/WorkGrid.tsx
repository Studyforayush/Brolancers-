import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";

import schoolPromoVideo from "../../videos/Education  School Admission Prom.mp4";
import restaurantSocialVideo from "../../videos/F&B  Restaurant Social Campaign.mp4";
import creatorLaunchVideo from "../../videos/Personal Brand  Creator Launch Package reel.mp4";
import aiContentSuiteVideo from "../../videos/AI Content Creation Suite.mp4";
import startupAIBrandAdVideo from "../../videos/Startup-AI-Brand-Ad.mp4";

gsap.registerPlugin(ScrollTrigger);

const WORK = [
  {
    title: "AI Content Creation Suite",
    client: "Tech Startup",
    service: "AI Content",
    h: 420,
    grad: ["#8B5CFF", "#12051F"],
    videoSrc: aiContentSuiteVideo,
  },
  {
    title: "School Admission Promo",
    client: "Education",
    service: "Promo Video",
    h: 320,
    grad: ["#F6E84A", "#3a1858"],
    videoSrc: schoolPromoVideo,
  },
  {
    title: "Store Product Video",
    client: "Retail",
    service: "Product Ad",
    h: 380,
    grad: ["#F6F1E8", "#2a1042"],
    videoSrc: undefined,
  },
  {
    title: "AI Brand Ad",
    client: "Startup",
    service: "AI Visual",
    h: 460,
    grad: ["#8B5CFF", "#F6E84A"],
    videoSrc: startupAIBrandAdVideo,
  },
  {
    title: "Restaurant Social Campaign",
    client: "F&B",
    service: "Social Pack",
    h: 340,
    grad: ["#3a1858", "#8B5CFF"],
    videoSrc: restaurantSocialVideo,
  },
  {
    title: "Creator Launch Package",
    client: "Personal Brand",
    service: "Full Pack",
    h: 400,
    grad: ["#F6E84A", "#12051F"],
    videoSrc: creatorLaunchVideo,
  },
];

export default function WorkGrid() {
  const root = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
        gsap.to(card, {
          yPercent: i % 2 === 0 ? -8 : -16,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="work" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">/ Selected Work</p>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-6xl">
              Selected Work Built To <br />
              <span className="text-[#F6E84A]">Stop The Scroll</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-[0.3em] text-[#F6F1E8]/70 hover:text-[#F6F1E8]">
            All Projects →
          </a>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {WORK.map((w, i) => (
            <div
              key={i}
              role={w.videoSrc ? "button" : undefined}
              tabIndex={w.videoSrc ? 0 : undefined}
              onClick={() => w.videoSrc && setActiveVideo(w.videoSrc)}
              className="work-card group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-[#F6F1E8]/10 transition hover:border-[#F6E84A]/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              style={{ height: w.h }}
            >
              {w.videoSrc ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
                  src={w.videoSrc}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="metadata"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: `linear-gradient(160deg, ${w.grad[0]}, ${w.grad[1]})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12051F] via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-[#12051F]/60 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-[#F6F1E8] backdrop-blur">
                {w.service}
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#F6E84A]">{w.client}</p>
                    <h3 className="mt-1 text-lg font-medium text-[#F6F1E8]">{w.title}</h3>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F6F1E8] transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 text-[#8B5CFF]" />
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#F6F1E8]/70">
                  View Case Study
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
          <div className="relative w-full max-w-6xl rounded-[2rem] border border-[#ffffff]/10 bg-[#12051F] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ffffff]/10 bg-[#12051F]/90 text-[#F6F1E8] transition hover:bg-[#F6F1E8]/10"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              className="h-[70vh] w-full rounded-[2rem] object-cover"
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

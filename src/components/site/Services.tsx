import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "AI Video Ads",
    description:
      "High-quality AI-generated videos for brands, reels, ads, and storytelling.",
  },
  {
    title: "Reels & Shorts",
    description:
      "Short-form motion with cinematic polish, optimized for social engagement.",
  },
  {
    title: "Digital Marketing",
    description:
      "Creative campaigns, content strategy, and performance-focused marketing for businesses.",
  },
  {
    title: "Brand Campaigns",
    description:
      "Story-led launches and brand campaigns designed to capture attention.",
  },
  {
    title: "Product Promo Videos",
    description:
      "Product promos with cinematic motion and sharp narrative for maximum engagement.",
  },
  {
    title: "Hotel / School / Store Content",
    description:
      "Premium content for stores, hotels, schools, and local brands to grow online.",
  },
  {
    title: "Social Media Content",
    description:
      "Social-first content designed to convert, retain, and build brand buzz.",
  },
  {
    title: "Creative Strategy",
    description:
      "Strategy-led creative systems built for scalable launch, retainer, and growth campaigns.",
  },
];

export default function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">
            / Services
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-6xl">
            Content Systems For <br />
            Brands That Want <span className="text-[#F6E84A]">Attention</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              tabIndex={0}
              className="svc-card group relative overflow-hidden rounded-3xl border border-[#F6F1E8]/10 bg-gradient-to-br from-[#1d0a32] to-[#12051F] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#8B5CFF]/40 focus:outline-none focus:ring-2 focus:ring-[#8B5CFF]/20"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F6E84A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#8B5CFF] transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <h3 className="text-xl font-medium text-[#F6F1E8]">{service.title}</h3>

              <div className="svc-card__overlay absolute inset-x-0 bottom-0 z-10 mt-8 rounded-[2rem] border border-white/10 bg-[#12051F]/85 px-7 py-6 text-[#F6F1E8] opacity-0 shadow-[0_28px_80px_rgba(139,92,255,0.14)] backdrop-blur-xl transition-all duration-400 ease-out will-change-transform will-change-opacity translate-y-4 pointer-events-none">
                <p className="text-sm leading-6">{service.description}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B5CFF]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

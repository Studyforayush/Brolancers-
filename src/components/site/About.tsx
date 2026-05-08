export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">/ About</p>
          <p className="text-2xl font-medium leading-[1.25] text-[#F6F1E8] sm:text-4xl">
            Brolancers is a modern <span className="text-[#F6E84A]">AI content</span> and digital marketing studio
            helping businesses turn simple ideas into premium videos, campaigns, and social media
            content. We mix storytelling, AI visuals, editing, and marketing strategy to make brands
            look <span className="text-[#F6E84A]">sharper online</span>.
          </p>
        </div>

        <div className="relative h-[320px]">
          {/* floating creative cards */}
          {[
            { l: "Reels", t: "5%", r: "0%", bg: "#8B5CFF" },
            { l: "AI Ads", t: "40%", r: "30%", bg: "#F6E84A" },
            { l: "Campaigns", t: "65%", r: "5%", bg: "#F6F1E8" },
          ].map((c, i) => (
            <div
              key={i}
              className="absolute flex h-24 w-40 items-center justify-center rounded-2xl text-xs uppercase tracking-[0.3em]"
              style={{
                top: c.t,
                right: c.r,
                background: c.bg,
                color: "#12051F",
                transform: `rotate(${(i - 1) * 6}deg)`,
              }}
            >
              {c.l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

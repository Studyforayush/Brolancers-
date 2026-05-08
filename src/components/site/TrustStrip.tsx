const ITEMS = [
  "Hotels",
  "Schools",
  "Stores",
  "Restaurants",
  "Creators",
  "Startups",
  "Local Brands",
  "Campaigns",
];

export default function TrustStrip() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative my-24 overflow-hidden border-y border-[#F6F1E8]/10 py-6">
      <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm uppercase tracking-[0.4em] text-[#F6F1E8]/60">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>Built for {it}</span>
            <span className="text-[#F6E84A]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

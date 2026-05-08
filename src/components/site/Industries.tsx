import { ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  "Hotels",
  "Schools",
  "Restaurants",
  "Local Stores",
  "Real Estate",
  "Coaching Institutes",
  "Personal Brands",
  "Startups",
];

export default function Industries() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">/ Industries</p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-6xl">
            Built For Businesses That <br /> Need <span className="text-[#F6E84A]">Better Content</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((i) => (
            <button
              key={i}
              className="group inline-flex items-center gap-2 rounded-full border border-[#F6F1E8]/15 bg-[#F6F1E8]/[0.03] px-5 py-3 text-sm text-[#F6F1E8] backdrop-blur transition-all hover:border-[#F6E84A]/60 hover:bg-[#F6E84A]/[0.06] hover:text-[#F6E84A]"
            >
              {i}
              <ArrowUpRight className="h-3.5 w-3.5 text-[#8B5CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

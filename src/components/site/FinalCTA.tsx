import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[400px] max-w-4xl -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#8B5CFF33_0%,transparent_60%)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-7xl">
          Ready To Make Your Brand <br />
          Look <span className="text-[#F6E84A]">Premium Online?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#F6F1E8]/70 sm:text-lg">
          Let's build videos, reels, and campaigns that make people notice your business.
        </p>
        <a
          href="mailto:hello@brolancers.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F6F1E8] px-8 py-4 text-base font-medium text-[#12051F] transition hover:scale-[1.02]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#F6E84A]" />
          Start a Project
          <ArrowUpRight className="h-5 w-5 text-[#8B5CFF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}

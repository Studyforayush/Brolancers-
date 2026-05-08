import { Mail, Phone, Sparkles } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="relative px-6 py-24 bg-[#110417] text-[#F6F1E8]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(139,92,255,0.28),transparent_55%)] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#F6E84A]/20 bg-[#F6E84A]/5 px-4 py-2 text-sm text-[#F6E84A] shadow-[0_0_40px_rgba(246,232,74,0.08)]">
            <Sparkles className="h-4 w-4 text-[#F6E84A]" />
            Last section: Contact & Info
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#F6F1E8]/40">Contact</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#F6F1E8] sm:text-5xl">
              Let’s craft your next premium digital campaign together.
            </h2>
            <p className="max-w-2xl text-lg text-[#F6F1E8]/70">
              Reach out for AI-first video ads, brand storytelling, or high-impact content that converts. We’ll help your business look sharp and feel memorable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:hello@brolancers.com"
              className="group flex items-start gap-4 rounded-3xl border border-[#F6E84A]/15 bg-[#1d0c34] p-6 transition hover:border-[#F6E84A]/40 hover:bg-[#22103e]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F6E84A]/10 text-[#F6E84A]">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#F6E84A]">Email</p>
                <p className="mt-2 text-sm text-[#F6F1E8]/70">hello@brolancers.com</p>
              </div>
            </a>
            <div className="group flex items-start gap-4 rounded-3xl border border-[#8B5CFF]/15 bg-[#1d0c34] p-6 transition hover:border-[#8B5CFF]/40 hover:bg-[#22103e]">
              <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#8B5CFF]/10 text-[#8B5CFF]">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#8B5CFF]">Phone</p>
                <p className="mt-2 text-sm text-[#F6F1E8]/70">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ffffff]/10 bg-[#15071e]/80 p-8 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F6F1E8]/40">Send a message</p>
            <h3 className="text-3xl font-semibold text-[#F6F1E8]">Drop your brief or mail us directly</h3>
            <p className="text-sm text-[#F6F1E8]/70">
              Use the form below and we’ll respond fast with a tailored plan for your brand.
            </p>
          </div>
          <form
            action="mailto:hello@brolancers.com"
            method="GET"
            className="space-y-6"
          >
            <label className="block text-sm text-[#F6F1E8]/80">
              Name
              <input
                type="text"
                name="subject"
                placeholder="Your name"
                className="mt-2 w-full rounded-3xl border border-[#F6F1E8]/10 bg-[#12051F] px-4 py-3 text-[#F6F1E8] outline-none transition focus:border-[#8B5CFF]/50"
              />
            </label>
            <label className="block text-sm text-[#F6F1E8]/80">
              Email
              <input
                type="email"
                name="cc"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-[#F6F1E8]/10 bg-[#12051F] px-4 py-3 text-[#F6F1E8] outline-none transition focus:border-[#8B5CFF]/50"
              />
            </label>
            <label className="block text-sm text-[#F6F1E8]/80">
              Message
              <textarea
                name="body"
                placeholder="Tell us about your project"
                rows={5}
                className="mt-2 w-full resize-none rounded-3xl border border-[#F6F1E8]/10 bg-[#12051F] px-4 py-3 text-[#F6F1E8] outline-none transition focus:border-[#8B5CFF]/50"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F6E84A] via-[#F4E94A] to-[#D7C200] px-6 py-4 text-sm font-semibold text-[#12051F] shadow-[0_16px_40px_rgba(246,232,74,0.25)] transition hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(246,232,74,0.3)]"
            >
              Mail Us Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(1100px,94vw)] -translate-x-1/2 transition-all duration-700 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <nav className="flex items-center justify-between rounded-full border border-[#F6F1E8]/10 bg-[#12051F]/60 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 text-[#F6F1E8]">
          <span className="inline-block h-2 w-2 rounded-full bg-[#F6E84A] shadow-[0_0_10px_#F6E84A]" />
          <span className="text-sm font-semibold tracking-[0.18em]">
            BRO<span className="text-[#F6E84A]">L</span>ANCERS
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-[#F6F1E8]/80 transition hover:text-[#F6F1E8]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F6E84A] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-[#F6F1E8] px-4 py-2 text-sm font-medium text-[#12051F] transition hover:bg-[#F6F1E8]/90 md:inline-flex"
        >
          Let's Talk
          <ArrowUpRight className="h-4 w-4 text-[#8B5CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-[#F6F1E8]/15 p-2 text-[#F6F1E8] md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="mt-2 rounded-3xl border border-[#F6F1E8]/10 bg-[#12051F]/90 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-[#F6F1E8]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#F6F1E8] px-4 py-2 text-sm font-medium text-[#12051F]"
              >
                Let's Talk <ArrowUpRight className="h-4 w-4 text-[#8B5CFF]" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

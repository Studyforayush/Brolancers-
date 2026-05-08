const LINKS = ["Work", "Services", "Process", "About", "Contact"];
const SOCIAL = ["Instagram", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="border-t border-[#F6F1E8]/10 px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[#F6F1E8]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F6E84A]" />
            <span className="text-sm font-semibold tracking-[0.18em]">
              BRO<span className="text-[#F6E84A]">L</span>ANCERS
            </span>
          </div>
          <p className="mt-3 text-sm text-[#F6F1E8]/60">
            AI Content · Video Ads · Digital Marketing
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <ul className="flex flex-wrap gap-5 text-sm text-[#F6F1E8]/70">
            {LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-[#F6E84A]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5 text-sm text-[#F6F1E8]/70">
            {SOCIAL.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-[#F6E84A]">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-xs text-[#F6F1E8]/40">
        © {new Date().getFullYear()} Brolancers. All rights reserved.
      </div>
    </footer>
  );
}

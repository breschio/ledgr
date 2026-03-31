export function Nav() {
  return (
    <nav
      className="[font-synthesis:none] mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-6 antialiased text-xs/4 md:px-20"
      aria-label="Primary"
    >
      <div className="inline-block shrink-0 font-['Instrument_Serif',serif] text-[28px]/8.5 tracking-[-0.02em] text-[#1A1916]">
        Ledgr.
      </div>
      <div className="flex flex-wrap items-center gap-6 sm:gap-10">
        <a
          href="#capture"
          className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm font-medium text-[#1A1916]"
        >
          Features
        </a>
        <a
          href="#get-started"
          className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm font-medium text-[#9A9690]"
        >
          Pricing
        </a>
        <a
          href="#about"
          className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm font-medium text-[#9A9690]"
        >
          About
        </a>
        <a
          href="#get-started"
          className="flex items-center justify-center rounded-[10px] bg-[#1A1916] px-6 py-2.5"
        >
          <span className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm font-semibold text-white">
            Get Started
          </span>
        </a>
      </div>
    </nav>
  )
}

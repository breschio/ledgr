export function SiteFooter() {
  return (
    <footer
      id="about"
      className="[font-synthesis:none] border-t border-solid border-[#E5E2DC] antialiased text-xs/4"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:px-20">
        <div className="inline-block shrink-0 font-['Instrument_Serif',serif] text-[22px]/7 tracking-[-0.02em] text-[#1A1916]">
          Ledgr.
        </div>
        <nav className="flex flex-wrap gap-8" aria-label="Footer">
          <a
            href="#privacy"
            className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]"
          >
            Terms
          </a>
          <a
            href="#support"
            className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]"
          >
            Support
          </a>
        </nav>
        <div className="inline-block w-full shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#C4BFB6] sm:w-auto">
          © 2026 Ledgr. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

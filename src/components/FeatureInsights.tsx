import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

function LightStatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-2 pt-6">
      <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-semibold text-[#1A1916]">
        9:41
      </div>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <rect x="0" y="3" width="3" height="9" rx="1" fill="#1A1916" />
          <rect x="4.5" y="2" width="3" height="10" rx="1" fill="#1A1916" />
          <rect x="9" y="0" width="3" height="12" rx="1" fill="#1A1916" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#C4BFB6" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M8 3.5C9.8 3.5 11.4 4.2 12.6 5.4L14 4C12.4 2.4 10.3 1.5 8 1.5C5.7 1.5 3.6 2.4 2 4L3.4 5.4C4.6 4.2 6.2 3.5 8 3.5Z" fill="#1A1916" />
          <path d="M8 7C9 7 9.9 7.4 10.6 8L12 6.6C10.9 5.6 9.5 5 8 5C6.5 5 5.1 5.6 4 6.6L5.4 8C6.1 7.4 7 7 8 7Z" fill="#1A1916" />
          <circle cx="8" cy="10.5" r="1.5" fill="#1A1916" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <rect x="0" y="1" width="22" height="10" rx="2" stroke="#1A1916" />
          <rect x="1.5" y="2.5" width="16" height="7" rx="1" fill="#1A1916" />
          <rect x="23" y="4" width="2" height="4" rx="0.5" fill="#1A1916" />
        </svg>
      </div>
    </div>
  )
}

function TabBar({ activeTab = 'insights' }: { activeTab?: string }) {
  const active = '#1A1916'
  const inactive = '#C4BFB6'
  return (
    <div className="mt-auto flex items-center justify-around border-t border-solid border-[#E5E2DC] bg-[#FAF9F6] px-6 pb-7 pt-3">
      <div className="flex flex-col items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M3 8.5L11 2L19 8.5V19C19 19.6 18.6 20 18 20H4C3.4 20 3 19.6 3 19V8.5Z" stroke={activeTab === 'home' ? active : inactive} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <div className={`inline-block font-['DM_Sans',sans-serif] text-[10px]/3 ${activeTab === 'home' ? 'font-semibold text-[#1A1916]' : 'font-medium text-[#C4BFB6]'}`}>
          Home
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M4 6H18M4 11H18M4 16H12" stroke={activeTab === 'insights' ? active : inactive} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className={`inline-block font-['DM_Sans',sans-serif] text-[10px]/3 ${activeTab === 'insights' ? 'font-semibold text-[#1A1916]' : 'font-medium text-[#C4BFB6]'}`}>
          Insights
        </div>
      </div>
      <div className="-mt-5 flex size-12 shrink-0 items-center justify-center rounded-full bg-[#D4502C]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M11 5V17M5 11H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M18 8H4L5 19H17L18 8Z" stroke={inactive} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 8V5C8 3.3 9.3 2 11 2C12.7 2 14 3.3 14 5V8" stroke={inactive} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="inline-block font-['DM_Sans',sans-serif] text-[10px]/3 font-medium text-[#C4BFB6]">
          Receipts
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <circle cx="11" cy="8" r="4" stroke={inactive} strokeWidth="1.5" />
          <path d="M4 20C4 16.7 7.1 14 11 14C14.9 14 18 16.7 18 20" stroke={inactive} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="inline-block font-['DM_Sans',sans-serif] text-[10px]/3 font-medium text-[#C4BFB6]">
          Profile
        </div>
      </div>
    </div>
  )
}

export function FeatureInsights() {
  return (
    <section
      id="insights"
      className="bg-[#1A1916] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="feature-insights-heading"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[min(120px,12vh)] lg:flex-row lg:items-center lg:gap-20 lg:px-20">
        <Stagger className="flex flex-1 flex-col gap-5">
          <FadeIn direction="up">
            <p className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#D4502C]">
              Insights
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <h2
              id="feature-insights-heading"
              className="inline-block font-['Instrument_Serif',serif] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-white lg:text-[56px]/[58px]"
            >
              See where it goes.
            </h2>
          </FadeIn>
          <FadeIn direction="up">
            <p className="max-w-[420px] font-['DM_Sans',sans-serif] text-lg/7 text-[#FFFFFF73]">
              Breakdowns by category, merchant, and month. No spreadsheets. No
              guesswork. Just clarity.
            </p>
          </FadeIn>
        </Stagger>

        <FadeIn
          direction="scale"
          delay={0.15}
          className="phone-scale flex flex-1 items-center justify-center"
        >
          <PhoneMockup>
            <LightStatusBar />

            {/* Title */}
            <div className="flex flex-col gap-1 p-6">
              <div className="inline-block font-['Instrument_Serif',sans-serif] text-[28px]/8.5 tracking-[-0.02em] text-[#1A1916]">
                Insights
              </div>
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]">
                March 2026
              </div>
            </div>

            {/* By Category */}
            <div className="mx-6 flex flex-col gap-5 rounded-2xl border border-solid border-[#E5E2DC] bg-white p-6">
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#9A9690]">
                By Category
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">Travel</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$1,240</div>
                  </div>
                  <div className="h-2 w-full shrink-0 rounded-full bg-[#EEEDE9]">
                    <div className="h-2 w-[82%] rounded-full bg-[#D4502C]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">Food</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$892</div>
                  </div>
                  <div className="h-2 w-full shrink-0 rounded-full bg-[#EEEDE9]">
                    <div className="h-2 w-[59%] rounded-full bg-[#E8956E]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">Office</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$715</div>
                  </div>
                  <div className="h-2 w-full shrink-0 rounded-full bg-[#EEEDE9]">
                    <div className="h-2 w-[47%] rounded-full bg-[#C4BFB6]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="flex gap-3 px-6 py-4">
              <div className="flex flex-1 flex-col gap-1 rounded-[14px] border border-solid border-[#E5E2DC] bg-white p-4">
                <div className="inline-block font-['DM_Sans',sans-serif] text-[11px]/3.5 font-medium uppercase tracking-[0.08em] text-[#9A9690]">
                  Avg / Day
                </div>
                <div className="inline-block font-['Instrument_Serif',sans-serif] text-[28px]/8.5 tracking-[-0.02em] text-[#1A1916]">
                  $101
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1 rounded-[14px] border border-solid border-[#E5E2DC] bg-white p-4">
                <div className="inline-block font-['DM_Sans',sans-serif] text-[11px]/3.5 font-medium uppercase tracking-[0.08em] text-[#9A9690]">
                  Receipts
                </div>
                <div className="inline-block font-['Instrument_Serif',sans-serif] text-[28px]/8.5 tracking-[-0.02em] text-[#1A1916]">
                  12
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1 rounded-[14px] border border-solid border-[#E5E2DC] bg-white p-4">
                <div className="inline-block font-['DM_Sans',sans-serif] text-[11px]/3.5 font-medium uppercase tracking-[0.08em] text-[#9A9690]">
                  vs Feb
                </div>
                <div className="inline-block font-['Instrument_Serif',sans-serif] text-[28px]/8.5 tracking-[-0.02em] text-[#D4502C]">
                  +18%
                </div>
              </div>
            </div>

            {/* Top Merchants */}
            <div className="mx-6 flex flex-col gap-4 rounded-2xl border border-solid border-[#E5E2DC] bg-white p-6">
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#9A9690]">
                Top Merchants
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 border-b border-solid border-[#EEEDE9] py-2.5">
                  <div className="w-5 shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 font-medium text-[#C4BFB6]">1</div>
                  <div className="flex-1 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">Hilton Hotels</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]">3 visits</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$890</div>
                </div>
                <div className="flex items-center gap-3 border-b border-solid border-[#EEEDE9] py-2.5">
                  <div className="w-5 shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 font-medium text-[#C4BFB6]">2</div>
                  <div className="flex-1 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">WeWork</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]">1 visit</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$350</div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                  <div className="w-5 shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 font-medium text-[#C4BFB6]">3</div>
                  <div className="flex-1 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1916]">Osteria Francescana</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-[13px]/4 text-[#9A9690]">2 visits</div>
                  <div className="shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-[#1A1916]">$312</div>
                </div>
              </div>
            </div>

            <TabBar activeTab="insights" />
          </PhoneMockup>
        </FadeIn>
      </div>
    </section>
  )
}

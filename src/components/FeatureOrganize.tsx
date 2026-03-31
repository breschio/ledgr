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

export function FeatureOrganize() {
  return (
    <section
      id="organize"
      className="bg-[#EEEDE9] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="feature-organize-heading"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[min(120px,12vh)] lg:flex-row lg:items-center lg:gap-20 lg:px-20">
        <FadeIn
          direction="scale"
          delay={0.15}
          className="phone-scale order-2 flex flex-1 items-center justify-center lg:order-1"
        >
          <PhoneMockup>
            <LightStatusBar />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 pt-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[17px]/5.5 font-semibold tracking-[-0.01em] text-[#1A1916]">
                New Expense
              </div>
              <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-medium text-[#8A8A86]">
                Cancel
              </div>
            </div>

            {/* Amount */}
            <div className="flex flex-col items-center gap-2 px-6 pb-7 pt-8">
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-[0.06em] text-[#9A9690]">
                Amount
              </div>
              <div className="inline-block font-['Instrument_Serif',sans-serif] text-[56px]/[68px] tracking-[-0.03em] text-[#1A1A1A]">
                $42.50
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-3 px-6 pb-6">
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-[0.06em] text-[#9A9690]">
                Category
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-[#D4502C] px-4 py-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <path d="M8 2C5.8 2 4 3.8 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.8 10.2 2 8 2ZM8 7.5C7.2 7.5 6.5 6.8 6.5 6C6.5 5.2 7.2 4.5 8 4.5C8.8 4.5 9.5 5.2 9.5 6C9.5 6.8 8.8 7.5 8 7.5Z" fill="#FFFFFF" />
                  </svg>
                  <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-semibold text-white">
                    Travel
                  </div>
                </div>
                {['Food', 'Transport', 'Shopping', 'Office'].map((label) => (
                  <div key={label} className="flex items-center rounded-full bg-[#EEEDE9] px-4 py-2">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 font-medium text-[#1A1A1A]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form fields */}
            <div className="flex flex-col px-6 pt-2">
              <div className="flex items-center justify-between border-b border-solid border-[#E5E2DC] py-4">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="#8A8A86" strokeWidth="1.5" />
                    <path d="M2 8H18" stroke="#8A8A86" strokeWidth="1.5" />
                    <path d="M6 2V5" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 2V5" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 text-[#9A9690]">Date</div>
                </div>
                <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-medium text-[#1A1916]">
                  Mar 28, 2026
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-solid border-[#E5E2DC] py-4">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <path d="M3 10V17H17V10" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 6L3 3H17L19 6" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 6H19V8C19 9.1 18.1 10 17 10C15.9 10 15 9.1 15 8C15 9.1 14.1 10 13 10C11.9 10 11 9.1 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 9.1 6.1 10 5 10C3.9 10 3 9.1 3 8C3 9.1 2.1 10 1 10V6Z" stroke="#8A8A86" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 text-[#9A9690]">Merchant</div>
                </div>
                <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-medium text-[#1A1916]">
                  Hilton Hotels
                </div>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <path d="M4 4H16V16H4V4Z" stroke="#8A8A86" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M7 8H13" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 11H11" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 text-[#9A9690]">Note</div>
                </div>
                <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-medium text-[#1A1916]">
                  Client dinner stay
                </div>
              </div>
            </div>

            {/* Receipt section (collapsed) */}
            <div className="flex h-0 flex-col gap-3 px-6 pt-6">
              <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-[0.06em] text-[#8A8A86]">
                Receipt
              </div>
              <div className="flex gap-3">
                <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-[#DDD9D2] px-4 py-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9Z" stroke="#FF5C35" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="13" r="4" stroke="#FF5C35" strokeWidth="1.5" />
                  </svg>
                  <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-semibold text-[#D4502C]">
                    Take Photo
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-[#DDD9D2] px-4 py-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                    <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium text-[#8A8A86]">
                    Upload File
                  </div>
                </div>
              </div>
            </div>

            {/* Save button */}
            <div className="flex flex-1 items-end px-6 pb-10 pt-6">
              <div className="flex w-full items-center justify-center rounded-xl bg-[#D4502C] p-4">
                <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-base/5 font-semibold tracking-[-0.01em] text-white">
                  Save Expense
                </div>
              </div>
            </div>
          </PhoneMockup>
        </FadeIn>

        <Stagger className="order-1 flex flex-1 flex-col gap-5 lg:order-2">
          <FadeIn direction="up">
            <p className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#D4502C]">
              Organize
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <h2
              id="feature-organize-heading"
              className="inline-block font-['Instrument_Serif',serif] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-[#1A1916] lg:text-[56px]/[58px]"
            >
              A place for everything.
            </h2>
          </FadeIn>
          <FadeIn direction="up">
            <p className="max-w-[420px] font-['DM_Sans',sans-serif] text-lg/7 text-[#9A9690]">
              Smart categories that learn your habits. Budgets that keep you honest.
              All in a feed that feels as natural as scrolling.
            </p>
          </FadeIn>
        </Stagger>
      </div>
    </section>
  )
}

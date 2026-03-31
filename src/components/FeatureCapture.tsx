import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

function DarkStatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-2 pt-6">
      <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[15px]/4.5 font-semibold text-white">
        9:41
      </div>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <rect x="0" y="3" width="3" height="9" rx="1" fill="#FFFFFF" />
          <rect x="4.5" y="2" width="3" height="10" rx="1" fill="#FFFFFF" />
          <rect x="9" y="0" width="3" height="12" rx="1" fill="#FFFFFF" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#555555" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <path d="M8 3.5C9.8 3.5 11.4 4.2 12.6 5.4L14 4C12.4 2.4 10.3 1.5 8 1.5C5.7 1.5 3.6 2.4 2 4L3.4 5.4C4.6 4.2 6.2 3.5 8 3.5Z" fill="#FFFFFF" />
          <path d="M8 7C9 7 9.9 7.4 10.6 8L12 6.6C10.9 5.6 9.5 5 8 5C6.5 5 5.1 5.6 4 6.6L5.4 8C6.1 7.4 7 7 8 7Z" fill="#FFFFFF" />
          <circle cx="8" cy="10.5" r="1.5" fill="#FFFFFF" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
          <rect x="0" y="1" width="22" height="10" rx="2" stroke="#FFFFFF" />
          <rect x="1.5" y="2.5" width="16" height="7" rx="1" fill="#FFFFFF" />
          <rect x="23" y="4" width="2" height="4" rx="0.5" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  )
}

export function FeatureCapture() {
  return (
    <section
      id="capture"
      className="bg-[#EEEDE9] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="feature-capture-heading"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[min(120px,12vh)] lg:flex-row lg:items-center lg:gap-[60px] lg:px-20">
        <FadeIn
          direction="scale"
          delay={0.15}
          className="phone-scale order-2 flex flex-1 items-center justify-center lg:order-1"
        >
          <PhoneMockup screenBg="#0A0A0A">
            <DarkStatusBar />

            {/* Camera header */}
            <div className="flex items-center justify-between px-6 pb-3 pt-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M20 8L8 20M8 8L20 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex items-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                  <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                  <path d="M4 4L20 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Camera viewfinder */}
            <div className="relative flex flex-1 items-center justify-center p-6">
              <div className="relative flex flex-1 self-stretch overflow-clip rounded-2xl bg-[#1A1A18]">
                <div
                  className="absolute inset-0 bg-cover bg-[51%_58%]"
                  style={{ backgroundImage: 'url(/camera-bg.png)' }}
                />
                {/* Receipt overlay */}
                <div className="absolute bottom-[112px] left-[45px] right-[43px] top-[88px] flex flex-col rounded-[3px] bg-[#FFFFFFF0] px-4 py-5 [box-shadow:0_4px_16px_#00000014]">
                  <div className="flex flex-col items-center gap-[3px] pb-2.5">
                    <div className="inline-block font-['DM_Sans',sans-serif] text-sm/4.5 font-extrabold tracking-[0.06em] text-[#222222]">
                      HILTON HOTELS
                    </div>
                    <div className="inline-block font-['DM_Sans',sans-serif] text-[9px]/3 text-[#888888]">123 Main Street</div>
                    <div className="inline-block font-['DM_Sans',sans-serif] text-[9px]/3 text-[#888888]">New York, NY 10001</div>
                    <div className="inline-block font-['DM_Sans',sans-serif] text-[9px]/3 text-[#888888]">Tel: (212) 555-0147</div>
                  </div>
                  <div className="mb-2 border-t border-dashed border-[#BCBCBC]" />
                  <div className="flex justify-between py-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">Date: 03/28/2026</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">14:32</div>
                  </div>
                  <div className="flex justify-between pb-1.5 pt-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">Server: Maria</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">Chk #4072</div>
                  </div>
                  <div className="mb-2 border-t border-dashed border-[#BCBCBC]" />
                  <div className="flex justify-between py-[3px]">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">1x Room Service - Club</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">28.00</div>
                  </div>
                  <div className="flex justify-between py-[3px]">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">1x Sparkling Water</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">6.50</div>
                  </div>
                  <div className="flex justify-between py-[3px]">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">1x Espresso</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#444444]">8.00</div>
                  </div>
                  <div className="my-1.5 border-t border-solid border-[#D0D0D0]" />
                  <div className="flex justify-between py-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#555555]">Subtotal</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#555555]">42.50</div>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#555555]">Tax (8.875%)</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[10px]/3 text-[#555555]">3.78</div>
                  </div>
                  <div className="my-1.5 border-t border-solid border-[#999999]" />
                  <div className="flex justify-between py-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-xs/4 font-extrabold text-[#222222]">TOTAL</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-xs/4 font-extrabold text-[#222222]">$46.28</div>
                  </div>
                  <div className="mb-1.5 mt-2 border-t border-dashed border-[#BCBCBC]" />
                  <div className="flex justify-between py-0.5">
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">VISA ****4821</div>
                    <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-[9px]/3 text-[#666666]">$46.28</div>
                  </div>
                  <div className="flex flex-col items-center gap-[3px] pt-2.5">
                    <div className="inline-block font-['DM_Sans',sans-serif] text-[8px]/2.5 text-[#AAAAAA]">Thank you for staying with us!</div>
                    <div className="inline-block font-['DM_Sans',sans-serif] text-[8px]/2.5 text-[#AAAAAA]">Guest: Room 412</div>
                  </div>
                </div>
                {/* Corner brackets */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[57px] top-[95px]" aria-hidden>
                  <path d="M2 12V4C2 2.9 2.9 2 4 2H12" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[49px] top-[95px]" aria-hidden>
                  <path d="M30 12V4C30 2.9 29.1 2 28 2H20" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[120px] left-[57px]" aria-hidden>
                  <path d="M2 20V28C2 29.1 2.9 30 4 30H12" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[120px] right-[47px]" aria-hidden>
                  <path d="M30 20V28C30 29.1 29.1 30 28 30H20" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Align text */}
            <div className="flex items-center justify-center px-6 pb-1 pt-4">
              <div className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-sm/4.5 tracking-[0.01em] text-[#FFFFFF8C]">
                Align receipt within the frame
              </div>
            </div>

            {/* Camera controls */}
            <div className="flex items-center justify-center gap-12 px-6 pb-12 pt-4">
              <div className="size-11 shrink-0 rounded-lg border-[1.5px] border-solid border-[#FFFFFF40] bg-[#FFFFFF26]" />
              <div className="flex size-[72px] shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-white">
                <div className="size-[58px] shrink-0 rounded-full bg-white" />
              </div>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF26]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                  <path d="M16 7H20V3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 11C2 6 6 2 11 2C14.5 2 17.5 4 19 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 15H2V19" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 11C20 16 16 20 11 20C7.5 20 4.5 18 3 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </PhoneMockup>
        </FadeIn>

        <Stagger className="order-1 flex flex-col gap-5 lg:order-2 lg:shrink-0">
          <FadeIn direction="up">
            <p className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#D4502C]">
              Capture
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <h2
              id="feature-capture-heading"
              className="inline-block font-['Instrument_Serif',serif] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-[#1A1916] lg:text-[56px]/[58px]"
            >
              Point. Shoot. Filed.
            </h2>
          </FadeIn>
          <FadeIn direction="up">
            <p className="max-w-[420px] font-['DM_Sans',sans-serif] text-lg/7 text-[#9A9690]">
              Your camera becomes a scanner. Ledgr reads the receipt, extracts every
              line item, and categorizes it — before you finish your coffee.
            </p>
          </FadeIn>
        </Stagger>
      </div>
    </section>
  )
}

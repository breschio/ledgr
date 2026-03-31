import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

export function FeatureCapture() {
  const captureClipSrc = `${import.meta.env.BASE_URL}clips/CameraClip.mp4`

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
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
              aria-label="Capture demo showing a receipt being framed and scanned"
            >
              <source src={captureClipSrc} type="video/mp4" />
            </video>
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

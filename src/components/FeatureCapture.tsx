import { clipUrl } from '../clipUrl'
import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

export function FeatureCapture() {
  const captureClipSrc = clipUrl('clips/CameraClip.mp4')

  return (
    <section
      id="capture"
      className="bg-[#EEEDE9] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="feature-capture-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-6 py-[min(120px,12vh)] md:flex-row md:items-center md:justify-between md:gap-8 md:px-20">
        <FadeIn
          direction="scale"
          delay={0.15}
          className="phone-scale order-2 flex shrink-0 items-center justify-center px-10 md:order-1 md:translate-x-[156px] md:px-0 lg:translate-x-[180px]"
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

        <Stagger className="order-1 flex flex-col items-center gap-6 text-center md:order-2 md:mr-[80px] md:max-w-[460px] md:items-start md:gap-8 md:text-left lg:shrink-0">
          <FadeIn direction="up">
            <p className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#D4502C]">
              Capture
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <h2
              id="feature-capture-heading"
              className="inline-block font-['Instrument_Serif',serif] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-[#1A1916] md:text-[56px]/[58px]"
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

import { clipUrl } from '../clipUrl'
import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

export function FeatureInsights() {
  const insightsClipSrc = clipUrl('clips/InsightsClip.mp4')
  const backgroundVideoSrc = clipUrl('hero-pixel-bg.webm')

  return (
    <section
      id="insights"
      className="relative isolate overflow-hidden bg-[#FAF9F6] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="feature-insights-heading"
    >
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={backgroundVideoSrc} type="video/webm" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[#FAF9F6]/55"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-6 py-[min(120px,12vh)] md:flex-row md:items-center md:justify-between md:gap-8 md:px-20">
        <Stagger className="flex flex-col items-center gap-6 text-center md:ml-[80px] md:max-w-[460px] md:items-start md:gap-8 md:text-left">
          <FadeIn direction="up">
            <p className="inline-block font-['DM_Sans',sans-serif] text-[13px]/4 font-medium uppercase tracking-widest text-[#D4502C]">
              Insights
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <h2
              id="feature-insights-heading"
              className="inline-block font-['Instrument_Serif',serif] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-[#1A1916] md:text-[56px]/[58px]"
            >
              See where it goes.
            </h2>
          </FadeIn>
          <FadeIn direction="up">
            <p className="max-w-[420px] font-['DM_Sans',sans-serif] text-lg/7 text-[#9A9690]">
              Breakdowns by category, merchant, and month. No spreadsheets. No
              guesswork. Just clarity.
            </p>
          </FadeIn>
        </Stagger>

        <FadeIn
          direction="scale"
          delay={0.15}
          className="phone-scale flex shrink-0 items-center justify-center px-10 md:-translate-x-[156px] md:px-0 lg:-translate-x-[180px]"
        >
          <PhoneMockup>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
              aria-label="Insights demo showing category breakdowns and merchant analytics"
            >
              <source src={insightsClipSrc} type="video/mp4" />
            </video>
          </PhoneMockup>
        </FadeIn>
      </div>
    </section>
  )
}

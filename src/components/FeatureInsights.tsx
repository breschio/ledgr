import { FadeIn, Stagger } from './FadeIn'
import { PhoneMockup } from './PhoneMockup'

export function FeatureInsights() {
  const insightsClipSrc = `${import.meta.env.BASE_URL}clips/InsightsClip.mp4`

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

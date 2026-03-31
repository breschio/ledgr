import { FadeIn, Stagger } from './FadeIn'

export function CtaSection() {
  return (
    <section
      id="get-started"
      className="[font-synthesis:none] w-full antialiased text-xs/4"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 py-[min(120px,12vh)] md:px-20">
      <Stagger className="flex flex-col items-center gap-8" stagger={0.12}>
        <FadeIn direction="up">
          <h2
            id="cta-heading"
            className="inline-block max-w-[720px] text-center font-['Instrument_Serif',serif] text-[clamp(2.25rem,6vw,4rem)] leading-[1.1] tracking-[-0.03em] text-[#1A1916] lg:text-[64px]/[66px]"
          >
            Your receipts deserve better.
          </h2>
        </FadeIn>
        <FadeIn direction="up">
          <p className="text-center font-['DM_Sans',sans-serif] text-lg/5.5 text-[#9A9690]">
            Free for personal use. No credit card required.
          </p>
        </FadeIn>
        <FadeIn direction="up">
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center rounded-[14px] border-0 bg-[#D4502C] px-12 py-4.5"
          >
            <span className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-lg/5.5 font-semibold text-white">
              Get Started — It&apos;s Free
            </span>
          </button>
        </FadeIn>
      </Stagger>
      </div>
    </section>
  )
}

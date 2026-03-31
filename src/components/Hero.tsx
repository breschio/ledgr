import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { FadeIn, Stagger } from './FadeIn'

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -88])
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.965])

  return (
    <section
      ref={sectionRef}
      className="relative [font-synthesis:none] mx-auto flex max-w-[1440px] flex-col items-center gap-6 overflow-hidden px-6 pb-10 pt-12 antialiased text-xs/4 md:min-h-[calc(100svh-88px)] md:flex-row md:items-center md:justify-between md:gap-8 md:px-20 md:pb-[min(64px,7vh)] md:pt-[min(56px,6vh)]"
      aria-labelledby="hero-heading"
    >
      <Stagger className="flex flex-col items-center gap-6 md:max-w-[460px] md:-translate-y-10 md:items-start md:gap-8 md:py-12 lg:-translate-y-14">
        <FadeIn direction="up">
          <h1
            id="hero-heading"
            className="flex flex-col items-center gap-2 md:items-start md:gap-0"
          >
            <span className="inline-block text-center font-['Instrument_Serif',serif] text-5xl/[50px] tracking-[-0.02em] text-[#1A1916] md:text-left md:text-[clamp(3rem,5.8vw,4.5rem)] md:leading-[0.98]">
              Every receipt,
            </span>
            <span className="inline-block text-center font-['Instrument_Serif',serif] text-5xl/[50px] italic tracking-[-0.02em] text-[#D4502C] md:text-left md:text-[clamp(3rem,5.8vw,4.5rem)] md:leading-[0.98]">
              accounted for.
            </span>
          </h1>
        </FadeIn>
        <FadeIn direction="up">
          <p className="max-w-[320px] text-center font-['DM_Sans',sans-serif] text-base/6 text-[#9A9690] md:max-w-[440px] md:self-stretch md:text-left md:text-lg/7">
            Snap. Categorize. Done. The expense tracker that respects your time
            and your taste.
          </p>
        </FadeIn>
        <FadeIn direction="up" className="w-full md:w-auto">
          <div className="flex w-full flex-col gap-2.5 md:w-auto md:flex-row md:gap-4">
            <a
              href="#get-started"
              className="flex items-center justify-center rounded-xl bg-[#D4502C] p-4 md:px-10 md:py-4"
            >
              <span className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-base/5 font-semibold text-white">
                Start Free
              </span>
            </a>
            <a
              href="#capture"
              className="flex items-center justify-center rounded-xl border border-solid border-[#DDD9D2] p-4 md:px-10 md:py-4"
            >
              <span className="inline-block shrink-0 font-['DM_Sans',sans-serif] text-base/5 font-medium text-[#1A1916]">
                See How It Works
              </span>
            </a>
          </div>
        </FadeIn>
      </Stagger>

      <FadeIn
        direction="scale"
        delay={0.2}
        className="flex shrink-0 items-center justify-center px-10 md:min-h-[78svh] md:-translate-x-14 md:px-0 md:pb-[max(0px,6vh)] md:pt-[max(0px,2vh)] lg:-translate-x-20"
      >
        <motion.div
          style={{ y: phoneY, scale: phoneScale, transformOrigin: 'center top' }}
          className="flex items-start justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-auto max-h-[min(68vh,640px)] max-w-[320px] md:max-h-[min(96svh,1378px)] md:max-w-[773px]"
            aria-label="App demo: scanning a receipt, categorizing expenses, and viewing insights"
          >
            <source src="/AppFlow.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </FadeIn>
    </section>
  )
}

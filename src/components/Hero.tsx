import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { clipUrl } from '../clipUrl'
import { FadeIn, Stagger } from './FadeIn'
import { Nav } from './Nav'
import { PhoneMockup } from './PhoneMockup'

export function Hero() {
  const heroVideoSrc = clipUrl('AppFlow.mp4')
  const backgroundVideoSrc = clipUrl('hero-pixel-bg.webm')
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
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-[#FAF9F6] [font-synthesis:none] antialiased text-xs/4"
      aria-labelledby="hero-heading"
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
      <header className="relative z-[2] mx-auto w-full">
        <Nav />
      </header>
      <div className="relative z-[2] mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center gap-6 px-6 pb-10 pt-6 text-xs/4 md:flex-row md:items-center md:justify-between md:gap-8 md:px-20 md:pb-[min(64px,7vh)] md:pt-[min(40px,5vh)]">
        <Stagger className="flex flex-col items-center gap-6 md:ml-[80px] md:max-w-[460px] md:-translate-y-10 md:items-start md:gap-8 md:py-12 lg:-translate-y-14">
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
          className="flex shrink-0 items-center justify-center px-10 md:min-h-[78svh] md:-translate-x-[156px] md:px-0 md:pb-[max(0px,6vh)] md:pt-[max(0px,2vh)] lg:-translate-x-[180px]"
        >
          <motion.div
            style={{ y: phoneY, scale: phoneScale, transformOrigin: 'center top' }}
            className="flex items-start justify-center"
          >
            <div className="phone-scale">
              <PhoneMockup>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label="App demo: scanning a receipt, categorizing expenses, and viewing insights"
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
              </PhoneMockup>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}

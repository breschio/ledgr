import { CtaSection } from './components/CtaSection'
import { FeatureCapture } from './components/FeatureCapture'
import { FeatureInsights } from './components/FeatureInsights'
import { FeatureOrganize } from './components/FeatureOrganize'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-svh bg-[#FAF9F6] font-sans text-[#1A1916]">
      <header className="mx-auto w-full">
        <Nav />
      </header>
      <main className="mx-auto w-full">
        <Hero />
        <FeatureCapture />
        <FeatureInsights />
        <FeatureOrganize />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

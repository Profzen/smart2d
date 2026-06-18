import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { PositioningSection } from "@/components/sections/positioning"
import { ExpertiseSection } from "@/components/sections/expertise"
import { OracleSection } from "@/components/sections/oracle-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { WhySection } from "@/components/sections/why-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PositioningSection />
        <ExpertiseSection />
        <OracleSection />
        <ServicesSection />
        <SolutionsSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

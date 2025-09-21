import { Navigation } from "@/components/navigation"
import { SponsorsHeroSection } from "@/components/sponsors-hero-section"
import { SponsorsBenefitsSection } from "@/components/sponsors-benefits-section"
import { SponsorsApplicationSection } from "@/components/sponsors-application-section"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SponsorsHeroSection />
      <SponsorsBenefitsSection />
      <SponsorsApplicationSection />
    </main>
  )
}

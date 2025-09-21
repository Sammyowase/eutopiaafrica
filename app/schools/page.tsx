import { Navigation } from "@/components/navigation"
import { SchoolsHeroSection } from "@/components/schools-hero-section"
import { SchoolsBenefitsSection } from "@/components/schools-benefits-section"
import { SchoolsApplicationSection } from "@/components/schools-application-section"

export default function SchoolsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SchoolsHeroSection />
      <SchoolsBenefitsSection />
      <SchoolsApplicationSection />
    </main>
  )
}

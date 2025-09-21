import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { WishlistSection } from "@/components/wishlist-section"
import { VibeSection } from "@/components/vibe-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { VisionSection } from "@/components/vision-section"
import { PajamaShopSection } from "@/components/pajama-shop-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <ValuePropositionSection />
      <WishlistSection />
      <VibeSection />
      <SocialProofSection />
      <VisionSection />
      <PajamaShopSection />
      <FinalCTASection />
    </main>
  )
}

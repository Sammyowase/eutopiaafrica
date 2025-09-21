"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SponsorsHeroSection() {
  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-accent/10 to-primary/10 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <div className="text-6xl mb-6 sparkle-animation">🎁</div>

          <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
            Not Every Brand Gets Into the Claw Machine.
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Thousands of students. Pajamas. Fireworks. Cameras flashing. And in the middle of it all — your product,
              in their hands, in their posts, in their hostels.
            </p>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20">
              <CardContent className="p-6 space-y-4">
                <p className="font-semibold text-primary">
                  This isn't ordinary sponsorship. It's direct access to Gen Z hearts — the buyers of today and
                  tomorrow.
                </p>

                <div className="text-left space-y-4">
                  <p className="font-medium flex items-center">
                    <span className="text-2xl mr-2">👉</span>
                    Here's the magic:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Students live together in hostels. If your product slaps, it spreads like wildfire</li>
                    <li>• Your brand becomes part of the conversation, the hype, the clout</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">🚀</span>
            Apply for a Slot
          </Button>

          <p className="text-sm text-muted-foreground">
            Limited slots available • Only 2 brands per category, per school
          </p>
        </div>
      </div>
    </section>
  )
}

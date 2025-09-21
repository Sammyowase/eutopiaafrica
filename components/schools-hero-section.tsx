"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SchoolsHeroSection() {
  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <div className="text-6xl mb-6 sparkle-animation">✨</div>

          <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
            Only a Few Schools Will Host this Magic.
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Christmas wish party isn't for everyone. We're creating a new Christmas tradition — and only a few
              selected universities will be allowed to host it this December.
            </p>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20">
              <CardContent className="p-6">
                <p className="font-semibold text-primary mb-4">
                  Slots are extremely limited. Once we finalize approvals, the list closes — and the spotlight shifts
                  elsewhere.
                </p>

                <div className="space-y-4 text-left">
                  <p className="font-medium">Hosting means:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🎥</span>
                      <span>National buzz</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🚀</span>
                      <span>Students posting, trending</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">👑</span>
                      <span>Prestige as a values + fun campus</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">🎓</span>
            Claim Your Spot
          </Button>

          <p className="text-sm text-muted-foreground">
            Application deadline: December 1st, 2024 • Limited to 10 universities nationwide
          </p>
        </div>
      </div>
    </section>
  )
}

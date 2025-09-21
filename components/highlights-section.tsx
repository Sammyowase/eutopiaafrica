"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Camera, Gift, Utensils, Film, Mic, Crown, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Camera,
    title: "Christmas Photo Shoot (FREE)",
    description:
      "Step on the red carpet, strike a pose with your crew in cozy pajamas. Professional shots — the kind you post on Christmas Day and make everyone jealous.",
    color: "bg-card",
  },
  {
    icon: Gift,
    title: "Claw Machine Madness",
    description: "Win free gifts, surprises & even wishes granted live.",
    color: "bg-secondary/30",
  },
  {
    icon: Utensils,
    title: "BBQ & Mocktails",
    description: "Juicy grills + drinks that slap, no hangovers.",
    color: "bg-accent/10",
  },
  {
    icon: Film,
    title: "Outdoor Movie Night",
    description: "Under the stars, in your coziest pajamas.",
    color: "bg-primary/10",
  },
  {
    icon: Mic,
    title: "Sing-Along + Karaoke",
    description: "From High School Musical to Christmas classics — your voice, your vibe.",
    color: "bg-card",
  },
  {
    icon: Crown,
    title: "Pajama King & Queen",
    description: "Slay your nightwear. Crown + bragging rights included.",
    color: "bg-secondary/30",
  },
  {
    icon: Sparkles,
    title: "Lantern Release + Fireworks",
    description: "End the night in pure magic.",
    color: "bg-accent/10",
  },
]

export function HighlightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="highlights" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight">
            What's Waiting for You at Midnight in PJs?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Seven incredible experiences, one unforgettable night. This isn't just a party — it's a Christmas tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <Card
                key={index}
                className={`${highlight.color} border-2 border-transparent hover:border-accent/50 transition-all duration-300 cursor-pointer group ${
                  hoveredIndex === index ? "scale-105 shadow-xl" : "hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-card-foreground leading-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

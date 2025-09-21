"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pajamaCategories = [
  {
    emoji: "👯‍♀️",
    title: "Besties Sets",
    description: "Matching PJs for you and your squad",
    price: "From ₦8,000",
    color: "bg-gradient-to-br from-pink-50 to-accent/10",
  },
  {
    emoji: "💑",
    title: "Couple Sets",
    description: "Adorable matching sets for couples",
    price: "From ₦12,000",
    color: "bg-gradient-to-br from-red-50 to-primary/10",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family Vibes",
    description: "Christmas PJs for the whole family",
    price: "From ₦15,000",
    color: "bg-gradient-to-br from-green-50 to-secondary/20",
  },
]

export function PajamaShopSection() {
  return (
    <section id="tickets" className="py-20 px-4 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Get Your PJs! 🎄</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Want to slay the Midnight in PJs red carpet? Shop matching Christmas pajamas for you & your squad right
            here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pajamaCategories.map((category, index) => (
            <Card
              key={index}
              className={`${category.color} border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{category.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="text-lg font-semibold text-accent mb-4">{category.price}</div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-accent/50 hover:bg-accent hover:text-white bg-transparent"
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30">
          <CardContent className="p-8 text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4"
            >
              <span className="mr-2">🛍️</span>
              Shop the Collection
            </Button>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">Limited stock</span> — order early so you don't miss out!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

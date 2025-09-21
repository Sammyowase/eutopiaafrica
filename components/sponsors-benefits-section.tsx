import { Card, CardContent } from "@/components/ui/card"

const sponsorshipRules = [
  {
    emoji: "🎯",
    title: "Exclusive Category Access",
    description: "Only 2 brands per category, per school. Once a slot is gone, it's gone forever.",
  },
  {
    emoji: "👥",
    title: "Direct Gen Z Engagement",
    description: "Reach thousands of university students in their most relaxed, authentic moments.",
  },
  {
    emoji: "📱",
    title: "Organic Social Media Buzz",
    description: "Students naturally share their wins, creating authentic user-generated content.",
  },
  {
    emoji: "🏠",
    title: "Hostel Network Effect",
    description: "Products spread through tight-knit student communities where recommendations matter.",
  },
  {
    emoji: "🎪",
    title: "Event Integration",
    description: "Your brand becomes part of the experience, not just an advertisement.",
  },
  {
    emoji: "📊",
    title: "Measurable Impact",
    description: "Track engagement, social mentions, and direct student feedback in real-time.",
  },
]

const categories = [
  { emoji: "💍", name: "Jewelry & Accessories" },
  { emoji: "👟", name: "Sneakers & Streetwear" },
  { emoji: "💄", name: "Beauty & Skincare" },
  { emoji: "📱", name: "Tech & Gadgets" },
  { emoji: "🥤", name: "Food & Drinks" },
]

export function SponsorsBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Rules of the Game</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting picked is a privilege, not a guarantee. Here's what makes this opportunity special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipRules.map((rule, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{rule.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{rule.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Section */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Available Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{category.emoji}</div>
                  <p className="text-sm font-medium text-muted-foreground">{category.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              <span className="font-semibold text-accent">Only 2 brands per category</span> •
              <span className="font-semibold text-primary"> First come, first served</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

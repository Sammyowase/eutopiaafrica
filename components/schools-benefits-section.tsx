import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    emoji: "📈",
    title: "Increased Student Engagement",
    description: "Boost campus morale and create lasting memories for your student body during the holiday season.",
  },
  {
    emoji: "🌟",
    title: "National Recognition",
    description: "Your university will be featured across social media platforms, gaining nationwide visibility.",
  },
  {
    emoji: "🤝",
    title: "Community Building",
    description: "Strengthen bonds between students, faculty, and the local community through shared celebration.",
  },
  {
    emoji: "💡",
    title: "Innovation in Student Life",
    description:
      "Position your institution as forward-thinking and student-centered in your approach to campus events.",
  },
  {
    emoji: "📸",
    title: "Content Creation Opportunities",
    description: "Generate authentic, shareable content that showcases your campus culture and student life.",
  },
  {
    emoji: "🎯",
    title: "Recruitment Advantage",
    description: "Attract prospective students by demonstrating your commitment to creating memorable experiences.",
  },
]

export function SchoolsBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Why Partner with Midnight in PJs?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the select group of universities creating the next generation of Christmas traditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

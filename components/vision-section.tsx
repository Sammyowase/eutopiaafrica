export function VisionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="text-6xl mb-6 sparkle-animation">🌟</div>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">
            We're redefining Christmas for students
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From <span className="line-through text-red-500">Detty December</span> to{" "}
            <span className="text-accent font-semibold">Joy, Love & Light</span>
          </p>
          <div className="pt-8">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
              <p className="text-lg font-medium text-primary">
                "Christmas should bring us together, not tear us apart."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

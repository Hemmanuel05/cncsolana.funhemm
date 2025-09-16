export default function About() {
  const features = [
    {
      emoji: "🤝",
      title: "Create Together", 
      description: "Micro‑grants, bounties, and on‑chain rewards for community builds."
    },
    {
      emoji: "🔗",
      title: "Open & On‑chain",
      description: "Transparent tokenomics and community‑owned treasury mechanics."
    },
    {
      emoji: "🎉",
      title: "Fun First",
      description: "Memes, hacks, art drops, and collabs. Ship it, share it, celebrate it."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Creativity & Collaboration
          </h2>
          <p className="text-xl text-muted-foreground mb-4">A memecoin for makers</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for the culture of shipping cool things together. CNC fuels experiments, supports creators,
            and rewards collaboration across the Solana ecosystem.
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>✅ Launched on Pump.fun | ✅ X account & community created | ✅ DexScreener updated</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300"
              data-testid={`feature-card-${index}`}
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-meme font-bold text-gradient mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

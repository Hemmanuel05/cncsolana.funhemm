export default function Roadmap() {
  const phases = [
    {
      number: "✓",
      title: "Phase 1",
      subtitle: "Launch & Stream",
      color: "bg-green-500",
      items: ["✅ Launch on Pump.fun", "✅ Open live stream & socials", "✅ Memes + community art drop"]
    },
    {
      number: "2",
      title: "Phase 2", 
      subtitle: "Collab Tools",
      color: "bg-yellow-500",
      items: ["Creator bounties", "On‑chain attestations", "Mini‑grants from treasury"]
    },
    {
      number: "3",
      title: "Phase 3",
      subtitle: "Ecosystem", 
      color: "bg-blue-500",
      items: ["Partner integrations", "Community governance", "CEX outreach"]
    },
    {
      number: "4",
      title: "Phase 4",
      subtitle: "Sustain",
      color: "bg-purple-500", 
      items: ["Revenue‑backed treasury", "Retro‑rewards", "Grants season & hackathon"]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Roadmap
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300"
                data-testid={`roadmap-phase-${index + 1}`}
              >
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 mx-auto ${phase.color} rounded-full flex items-center justify-center text-white font-bold mb-2`}>
                    {phase.number}
                  </div>
                  <h3 className="text-xl font-meme font-bold text-gradient">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

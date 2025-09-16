export default function Schedule() {
  const timelineEvents = [
    { emoji: "✓", title: "Website Live", time: "Now", color: "bg-green-500" },
    { emoji: "🏆", title: "Talent Show", time: "Next Week", color: "bg-yellow-500" },
    { emoji: "🎵", title: "TikTok Shills", time: "Week 2", color: "bg-pink-500" },
    { emoji: "📺", title: "X Live Stage", time: "Week 3", color: "bg-blue-500" },
    { emoji: "🎤", title: "Interviews", time: "Week 4", color: "bg-purple-500" },
    { emoji: "👥", title: "Mod Hiring", time: "Ongoing", color: "bg-indigo-500" },
    { emoji: "🎲", title: "Raffles/Merch", time: "Q4", color: "bg-cyan-500" }
  ];

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Timeline
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto mobile-scroll">
            <div className="flex space-x-6 pb-4" style={{minWidth: '800px'}}>
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-4 w-64 hover-glow transition-all duration-300"
                  data-testid={`timeline-event-${index}`}
                >
                  <div className="text-center">
                    <div className={`w-8 h-8 mx-auto ${event.color} rounded-full flex items-center justify-center text-white font-bold mb-2`}>
                      {event.emoji}
                    </div>
                    <h3 className="font-meme font-bold text-gradient">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

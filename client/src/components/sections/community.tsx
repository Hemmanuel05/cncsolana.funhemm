import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Community() {
  const [formData, setFormData] = useState({ name: "", idea: "" });
  const { toast } = useToast();

  const payoutStrategies = [
    { emoji: "👥", text: "Pay mods/workers for coin support" },
    { emoji: "🏆", text: "Talent show top 3 payouts (after site launch)" },
    { emoji: "🎵", text: "Pay TikTok creators to shill" },
    { emoji: "👕", text: "Merch down the line" },
    { emoji: "🎬", text: "Pay clip farmers" },
    { emoji: "⭐", text: "Pay KOLs" },
    { emoji: "📺", text: "Go live on X for stage" },
    { emoji: "🎤", text: "Bring projects for interviews" },
    { emoji: "🌍", text: "Hire mods in regions/languages" },
    { emoji: "🤖", text: "Run volume bots" },
    { emoji: "🎲", text: "Raffles" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.idea) {
      toast({
        title: "Idea Submitted!",
        description: "Thanks for joining the revolution!",
      });
      setFormData({ name: "", idea: "" });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="community" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Community Plans
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Payout Strategies */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-4">💰 Payout Strategies</h3>
            <div className="space-y-3 text-sm">
              {payoutStrategies.map((strategy, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`payout-strategy-${index}`}>
                  <span>{strategy.emoji}</span>
                  <span>{strategy.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Join Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-4">🚀 Join the Revolution</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="communityName" className="block text-sm font-medium text-muted-foreground mb-2">
                  X Username
                </Label>
                <Input
                  id="communityName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full"
                  data-testid="input-community-name"
                />
              </div>
              <div>
                <Label htmlFor="communityIdea" className="block text-sm font-medium text-muted-foreground mb-2">
                  Share Your Idea
                </Label>
                <Textarea
                  id="communityIdea"
                  rows={4}
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  placeholder="How can you contribute to $CNC?"
                  className="w-full"
                  data-testid="textarea-community-idea"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover-glow transition-all duration-300"
                data-testid="button-join-revolution"
              >
                Join the Revolution 🔥
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function SubmitIdea() {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.description) {
      toast({
        title: "Idea Received – Thanks for Contributing!",
        description: "We'll review your submission and get back to you soon.",
      });
      setFormData({ name: "", email: "", description: "" });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="ideas" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-4">
              Submit Your $CNC Idea
            </h2>
            <p className="text-lg text-muted-foreground">Got a brilliant idea for the community? Share it with us!</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="ideaName" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your X Username *
                </Label>
                <Input
                  id="ideaName"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full"
                  data-testid="input-idea-name"
                />
              </div>
              <div>
                <Label htmlFor="ideaEmail" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email *
                </Label>
                <Input
                  id="ideaEmail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full"
                  data-testid="input-idea-email"
                />
              </div>
              <div>
                <Label htmlFor="ideaDescription" className="block text-sm font-medium text-muted-foreground mb-2">
                  Idea Description *
                </Label>
                <Textarea
                  id="ideaDescription"
                  rows={6}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your idea for $CNC..."
                  className="w-full"
                  data-testid="textarea-idea-description"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover-glow transition-all duration-300"
                data-testid="button-submit-idea"
              >
                Submit Idea 💡
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

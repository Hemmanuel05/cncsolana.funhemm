import dexLogo from '@assets/dex_1758036623952.jpg';

export default function Socials() {
  const socialLinks = [
    {
      emoji: "🐦",
      title: "@cncsolana",
      description: "Official X Handle",
      url: "https://x.com/cncsolana"
    }
  ];


  return (
    <section id="socials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Join Our Community
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-6">Follow Us</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-muted rounded-lg hover-glow transition-all duration-300"
                  data-testid={`link-social-${index}`}
                >
                  <span className="text-2xl">{link.emoji}</span>
                  <div>
                    <p className="font-bold">{link.title}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Price Tracking */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-6">Track $CNC</h3>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden" data-testid="dexscreener-logo-large">
                  <img 
                    src={dexLogo} 
                    alt="DexScreener logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-2">
                  <span className="text-green-400 bounce-arrow text-2xl" data-testid="arrow-up-large">↑</span>
                  <span className="text-red-400 pulse-arrow text-2xl" data-testid="arrow-down-large">↓</span>
                </div>
              </div>
              <a 
                href="https://dexscreener.com/solana/bbk1eedb6vz53g25h8egurcpbbhn1w8vefrrmkkepump"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover-glow transition-all duration-300"
                data-testid="link-dexscreener-main"
              >
                📈 Live Price on DexScreener
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

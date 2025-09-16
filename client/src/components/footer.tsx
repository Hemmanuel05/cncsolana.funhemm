import cncLogo from '@assets/cnc_1758033632825.png';

export default function Footer() {
  const footerLinks = [
    { emoji: "🐦", label: "Twitter", url: "https://x.com/CNSOLANA_X" },
    { emoji: "👥", label: "Community", url: "https://x.com/communities/CNSOLANA" },
    { emoji: "🚀", label: "Pump.fun", url: "https://pump.fun/BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump" }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/90 flex items-center justify-center border-2 border-cnc-orange">
            <img 
              src={cncLogo} 
              alt="CNC Solana Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <p className="text-xl font-meme font-bold text-gradient mb-4">
            Join the $CNC Revolution on cncsolana.fun
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                {link.emoji} {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CNSOLANA. Fuel Creativity, Reward Collaboration.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Socials() {
  const socialLinks = [
    {
      emoji: "🐦",
      title: "@CNSOLANA_X",
      description: "Official Twitter Account",
      url: "https://x.com/CNSOLANA_X"
    },
    {
      emoji: "🐦",
      title: "@cncsolana",
      description: "Official X Handle",
      url: "https://x.com/cncsolana"
    }
  ];

  const mockTweets = [
    {
      handle: "@CNSOLANA_X",
      time: "2h",
      content: "🚀 $CNC holders - the future is bright! New partnerships incoming... 👀 #CNSOLANA #Solana"
    },
    {
      handle: "@CNSOLANA_X", 
      time: "4h",
      content: "Community talent show submissions are INSANE! 🔥 Can't wait to announce winners next week! 🏆 #CNCTalent"
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
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg" data-testid="dexscreener-logo-large">
                  DS
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

        {/* Twitter Timeline Placeholder */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <h3 className="text-xl font-meme font-bold text-gradient mb-4">Latest Tweets</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Follow @CNSOLANA_X for the latest updates and community news
            </p>
            <div className="space-y-4 text-left">
              {mockTweets.map((tweet, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg" data-testid={`mock-tweet-${index}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="font-bold">{tweet.handle}</span>
                    <span className="text-sm text-muted-foreground">{tweet.time}</span>
                  </div>
                  <p className="text-sm">{tweet.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import phantomLogo from '@assets/phantom_1758034456075.png';
import pillImage from '@assets/pump_1758036717572.jpg';

export default function HowToBuy() {
  const steps = [
    { emoji: "👛", title: "Step 1", description: "Get a Solana wallet (Phantom, Backpack)", image: phantomLogo },
    { emoji: "💳", title: "Step 2", description: "Buy SOL on exchange (Binance/Coinbase)" },
    { emoji: "💊", title: "Step 3", description: "Connect wallet to Pump.fun", image: pillImage },
    { emoji: "🔍", title: "Step 4", description: "Search mint address and buy $CNC" }
  ];

  return (
    <section id="buy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            How to Buy $CNC
          </h2>
          <p className="text-lg text-muted-foreground">Follow these simple steps to join the revolution</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover-glow transition-all duration-300"
                data-testid={`buy-step-${index + 1}`}
              >
                <div className="text-4xl mb-4 flex items-center justify-center">
                  {step.image ? (
                    <img 
                      src={step.image} 
                      alt={`${step.title} icon`}
                      className="w-12 h-12 object-contain"
                      data-testid={`img-step-${index + 1}`}
                    />
                  ) : (
                    step.emoji
                  )}
                </div>
                <h3 className="font-meme font-bold text-gradient mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-2">Mint Address:</p>
              <p className="text-sm font-mono break-all" data-testid="text-buy-mint-address">
                BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold hover-glow transition-all duration-300"
                data-testid="button-connect-wallet"
              >
                🔗 Connect Wallet (Coming Soon)
              </button>
              <a 
                href="https://pump.fun/BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover-glow transition-all duration-300 text-center"
                data-testid="link-pump-fun"
              >
                🚀 Buy on Pump.fun
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Tokenomics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-4">📊 Token Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Supply:</span>
                <span className="font-bold" data-testid="text-total-supply">1,000,000,000 $CNC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Liquidity:</span>
                <span className="font-bold text-green-400" data-testid="text-liquidity-status">Locked on PumpSwap</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground mb-2">Mint Address:</p>
                <p className="text-xs bg-muted p-2 rounded font-mono break-all" data-testid="text-mint-address">
                  BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-4">📈 Track Price</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold" data-testid="dexscreener-logo">
                DS
              </div>
              <div className="flex space-x-2">
                <span className="text-green-400 bounce-arrow" data-testid="arrow-up">↑</span>
                <span className="text-red-400 pulse-arrow" data-testid="arrow-down">↓</span>
              </div>
            </div>
            <a 
              href="https://dexscreener.com/solana/bbk1eedb6vz53g25h8egurcpbbhn1w8vefrrmkkepump"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full bg-primary text-primary-foreground py-3 rounded-lg text-center font-bold hover-glow transition-all duration-300"
              data-testid="link-dexscreener"
            >
              Track on DexScreener
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

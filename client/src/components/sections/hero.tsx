import cncLogo from '@assets/cnc_1758033632825.png';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Spinning Logo */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto spin-slow rounded-full bg-white/90 flex items-center justify-center mb-4 hover-glow hero-logo border-4 border-cnc-orange shadow-2xl">
            <img 
              src={cncLogo} 
              alt="CNC Solana Logo" 
              className="w-40 h-40 object-contain"
              data-testid="img-main-logo"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-meme font-bold text-white mb-4 hero-title">
          Creativity & Collaboration
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-meme hero-subtitle">
          Fuel Creativity, Reward Collaboration – $CNC on Solana
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Powering community builds with micro-grants, bounties, and on-chain rewards.
        </p>
        
        <a 
          href="https://pump.fun/BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cnc-orange text-white px-8 py-4 rounded-full text-xl font-bold hover-glow transition-all duration-300 transform hover:scale-105 shadow-lg"
          data-testid="button-buy-cta"
        >
          🚀 Buy $CNC Now
        </a>
      </div>
    </section>
  );
}

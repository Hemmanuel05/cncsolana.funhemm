import { useState, useEffect } from "react";

export default function LiveStream() {
  const [tokenData, setTokenData] = useState({
    price: "0.00",
    marketCap: "0",
    volume24h: "0",
    isConnected: false
  });

  useEffect(() => {
    let ws: WebSocket;
    const TOKEN_ADDRESS = "BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump";

    const connectWebSocket = () => {
      try {
        ws = new WebSocket('wss://pumpportal.fun/api/data');
        
        ws.onopen = () => {
          setTokenData(prev => ({ ...prev, isConnected: true }));
          ws.send(JSON.stringify({
            method: "subscribeTokenTrade",
            keys: [TOKEN_ADDRESS]
          }));
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.mint === TOKEN_ADDRESS || data.symbol === "CNC") {
              setTokenData(prev => ({
                ...prev,
                price: data.priceUSD || prev.price,
                marketCap: data.marketCap || prev.marketCap,
                volume24h: data.volume24h || prev.volume24h
              }));
            }
          } catch (error) {
            console.log("WebSocket message parsing error:", error);
          }
        };

        ws.onclose = () => {
          setTokenData(prev => ({ ...prev, isConnected: false }));
          setTimeout(connectWebSocket, 3000);
        };

        ws.onerror = () => {
          setTokenData(prev => ({ ...prev, isConnected: false }));
        };
      } catch (error) {
        console.log("WebSocket connection error:", error);
      }
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const formatNumber = (num: string | number) => {
    const value = typeof num === 'string' ? parseFloat(num) : num;
    if (value > 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } else if (value > 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toFixed(2);
  };

  return (
    <section id="live-stream" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-meme font-bold text-gradient mb-6">
            Live Stream
          </h2>
          <p className="text-lg text-muted-foreground">Real-time $CNC token data and trading activity</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Live Data Widget */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-meme font-bold text-gradient">Live Token Data</h3>
              <div className="flex items-center space-x-2">
                <div 
                  className={`w-3 h-3 rounded-full ${tokenData.isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
                  data-testid="connection-status"
                ></div>
                <span className="text-sm text-muted-foreground">
                  {tokenData.isConnected ? 'Live' : 'Reconnecting...'}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Current Price:</span>
                <span className="text-2xl font-bold text-green-400" data-testid="live-price">
                  ${tokenData.price}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Market Cap:</span>
                <span className="font-bold" data-testid="live-market-cap">
                  ${formatNumber(tokenData.marketCap)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">24h Volume:</span>
                <span className="font-bold" data-testid="live-volume">
                  ${formatNumber(tokenData.volume24h)}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <a 
                href="https://pump.fun/coin/BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground py-3 rounded-lg text-center font-bold hover-glow transition-all duration-300"
                data-testid="link-pump-fun-live"
              >
                View Full Trading Page
              </a>
            </div>
          </div>

          {/* Pump.fun Embed */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-6">Trading Interface</h3>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <iframe 
                src="https://pump.fun/coin/BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump"
                width="100%" 
                height="100%"
                style={{ border: 'none' }}
                title="Pump.fun $CNC Trading Interface"
                data-testid="iframe-pump-fun"
              />
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-meme font-bold text-gradient mb-6">Recent Activity</h3>
            <div className="text-center text-muted-foreground py-8">
              <div className="animate-pulse">
                📊 Loading live trading activity...
              </div>
              <p className="text-sm mt-2">
                Real-time trades and token movements will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
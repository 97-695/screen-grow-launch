import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Prize {
  id: number;
  text: string;
  color: string;
}

const prizes: Prize[] = [
  { id: 1, text: "FRETE GRÁTIS", color: "#10b981" },
  { id: 2, text: "35% OFF", color: "#3b82f6" },
  { id: 3, text: "R$ 20 OFF", color: "#22c55e" },
  { id: 4, text: "R$ 30 OFF", color: "#8b5cf6" },
  { id: 5, text: "R$ 50 OFF", color: "#ef4444" },
  { id: 6, text: "15% OFF", color: "#f59e0b" },
  { id: 7, text: "BRINDE EXTRA", color: "#06b6d4" },
  { id: 8, text: "25% OFF", color: "#f97316" },
];

const SpinWheel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState<Prize | null>(null);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setPrize(null);

    // Random prize selection
    const winningIndex = Math.floor(Math.random() * prizes.length);
    const winningPrize = prizes[winningIndex];

    // Calculate rotation
    const degreesPerSegment = 360 / prizes.length;
    const extraSpins = 8; // More full rotations for dramatic effect
    const targetAngle = 360 - (winningIndex * degreesPerSegment + degreesPerSegment / 2);
    const finalRotation = rotation + extraSpins * 360 + targetAngle;

    setRotation(finalRotation);

    // Show prize after animation
    setTimeout(() => {
      setIsSpinning(false);
      setPrize(winningPrize);
      setHasSpun(true);
      toast({
        title: "🎉 Parabéns!",
        description: `Você ganhou: ${winningPrize.text}`,
        duration: 5000,
      });
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative bg-gradient-to-br from-background to-background/95 rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-scale-in border-2 border-primary/20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/80 rounded-full p-1 hover:bg-background"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold mb-4 shadow-lg animate-pulse">
            <Gift className="w-5 h-5" />
            OFERTA ESPECIAL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Gire a Roleta da Sorte!
          </h2>
          <p className="text-muted-foreground text-lg">Ganhe descontos exclusivos e frete grátis</p>
        </div>

        {/* Wheel Container */}
        <div className="relative mb-8">
          {/* Pointer - Triangle arrow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 z-20">
            <div className="relative">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-destructive drop-shadow-2xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-destructive rounded-full -translate-y-1" />
            </div>
          </div>

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-primary via-destructive to-primary opacity-30 animate-pulse" />

          {/* Wheel */}
          <div className="relative w-full aspect-square max-w-[320px] mx-auto">
            <div 
              className="absolute inset-0 rounded-full shadow-2xl"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Wheel segments */}
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index - 90;
                  const nextAngle = (360 / prizes.length) * (index + 1) - 90;
                  const midAngle = (angle + nextAngle) / 2;

                  const startRad = (angle * Math.PI) / 180;
                  const endRad = (nextAngle * Math.PI) / 180;

                  const x1 = 100 + 95 * Math.cos(startRad);
                  const y1 = 100 + 95 * Math.sin(startRad);
                  const x2 = 100 + 95 * Math.cos(endRad);
                  const y2 = 100 + 95 * Math.sin(endRad);

                  const largeArcFlag = 0;
                  const path = `M 100 100 L ${x1} ${y1} A 95 95 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                  // Text position - adjusted for better readability
                  const textRadius = 65;
                  const textX = 100 + textRadius * Math.cos((midAngle * Math.PI) / 180);
                  const textY = 100 + textRadius * Math.sin((midAngle * Math.PI) / 180);

                  // Split text for longer prizes
                  const words = prize.text.split(' ');
                  const isLongText = words.length > 1;

                  return (
                    <g key={prize.id}>
                      <path 
                        d={path} 
                        fill={prize.color} 
                        stroke="white" 
                        strokeWidth="3"
                        className="transition-opacity"
                      />
                      {isLongText ? (
                        <>
                          <text
                            x={textX}
                            y={textY - 5}
                            fill="white"
                            fontSize="9"
                            fontWeight="900"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`rotate(${midAngle + 90}, ${textX}, ${textY - 5})`}
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                          >
                            {words[0]}
                          </text>
                          <text
                            x={textX}
                            y={textY + 6}
                            fill="white"
                            fontSize="9"
                            fontWeight="900"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`rotate(${midAngle + 90}, ${textX}, ${textY + 6})`}
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                          >
                            {words.slice(1).join(' ')}
                          </text>
                        </>
                      ) : (
                        <text
                          x={textX}
                          y={textY}
                          fill="white"
                          fontSize="11"
                          fontWeight="900"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                        >
                          {prize.text}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
              
              {/* Center button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                <Gift className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Prize Display */}
        {prize && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-6 text-center animate-fade-in border-2 border-primary shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2 animate-pulse">🎉 {prize.text}</div>
            <p className="text-sm text-muted-foreground font-medium">Use este desconto no checkout!</p>
          </div>
        )}

        {/* Spin Button */}
        {!hasSpun ? (
          <Button
            size="lg"
            variant="cta"
            onClick={spinWheel}
            disabled={isSpinning}
            className="w-full text-lg h-14 shadow-xl hover:shadow-2xl transition-all"
          >
            {isSpinning ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                Girando...
              </span>
            ) : (
              "🎰 GIRAR A ROLETA AGORA"
            )}
          </Button>
        ) : (
          <div className="space-y-3">
            <Button
              size="lg"
              variant="cta"
              onClick={() => {
                setIsOpen(false);
                window.location.href = 'https://go.ironpayapp.com.br/dqqxi7fw1g';
              }}
              className="w-full text-lg h-14 shadow-xl hover:shadow-2xl transition-all"
            >
              🛒 USAR MEU DESCONTO AGORA
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Continuar Navegando
            </Button>
          </div>
        )}

        <p className="text-xs text-center text-muted-foreground mt-4 opacity-70">
          ⏰ Válido apenas para compras realizadas hoje • Uma chance por pessoa
        </p>
      </div>
    </div>
  );
};

export default SpinWheel;

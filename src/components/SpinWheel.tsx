import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Prize {
  id: number;
  text: string;
  color: string;
  discount?: number;
}

const prizes: Prize[] = [
  { id: 1, text: "FRETE GRÁTIS", color: "hsl(var(--success))" },
  { id: 2, text: "35% OFF", color: "hsl(var(--primary))", discount: 35 },
  { id: 3, text: "R$ 20 OFF", color: "hsl(142, 76%, 36%)" },
  { id: 4, text: "R$ 30 OFF", color: "hsl(262, 83%, 58%)" },
  { id: 5, text: "R$ 50 OFF", color: "hsl(346, 77%, 50%)" },
  { id: 6, text: "15% OFF", color: "hsl(43, 96%, 56%)" },
  { id: 7, text: "BRINDE EXTRA", color: "hsl(199, 89%, 48%)" },
  { id: 8, text: "25% OFF", color: "hsl(32, 95%, 44%)" },
];

const SpinWheel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState<Prize | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setPrize(null);

    // Random prize selection
    const winningIndex = Math.floor(Math.random() * prizes.length);
    const winningPrize = prizes[winningIndex];

    // Calculate rotation (multiple full spins + final position)
    const degreesPerSegment = 360 / prizes.length;
    const extraSpins = 5; // Number of full rotations
    const finalRotation = extraSpins * 360 + (360 - winningIndex * degreesPerSegment) + degreesPerSegment / 2;

    setRotation(finalRotation);

    // Show prize after animation
    setTimeout(() => {
      setIsSpinning(false);
      setPrize(winningPrize);
      toast({
        title: "🎉 Parabéns!",
        description: `Você ganhou: ${winningPrize.text}`,
        duration: 5000,
      });
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 animate-scale-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-3">
            <Gift className="w-4 h-4" />
            OFERTA ESPECIAL
          </div>
          <h2 className="text-2xl font-bold mb-2">Gire a Roleta da Sorte!</h2>
          <p className="text-muted-foreground">Ganhe descontos exclusivos e frete grátis</p>
        </div>

        {/* Wheel Container */}
        <div className="relative mb-6">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-destructive drop-shadow-lg" />
          </div>

          {/* Wheel */}
          <div className="relative w-full aspect-square max-w-[300px] mx-auto">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full transition-transform duration-[4000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                const nextAngle = (360 / prizes.length) * (index + 1);
                const midAngle = (angle + nextAngle) / 2;

                // Convert to radians
                const startRad = (angle * Math.PI) / 180;
                const endRad = (nextAngle * Math.PI) / 180;

                // Calculate path
                const x1 = 100 + 100 * Math.cos(startRad);
                const y1 = 100 + 100 * Math.sin(startRad);
                const x2 = 100 + 100 * Math.cos(endRad);
                const y2 = 100 + 100 * Math.sin(endRad);

                const largeArcFlag = nextAngle - angle > 180 ? 1 : 0;

                const path = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                // Text position
                const textRadius = 65;
                const textX = 100 + textRadius * Math.cos((midAngle * Math.PI) / 180);
                const textY = 100 + textRadius * Math.sin((midAngle * Math.PI) / 180);

                return (
                  <g key={prize.id}>
                    <path d={path} fill={prize.color} stroke="white" strokeWidth="2" />
                    <text
                      x={textX}
                      y={textY}
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                    >
                      {prize.text}
                    </text>
                  </g>
                );
              })}
              {/* Center circle */}
              <circle cx="100" cy="100" r="15" fill="white" stroke="hsl(var(--primary))" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Prize Display */}
        {prize && (
          <div className="bg-gradient-subtle rounded-xl p-4 mb-4 text-center animate-fade-in border-2 border-primary">
            <div className="text-3xl font-bold text-primary mb-2">{prize.text}</div>
            <p className="text-sm text-muted-foreground">Use este desconto no checkout!</p>
          </div>
        )}

        {/* Spin Button */}
        <Button
          size="lg"
          variant="cta"
          onClick={spinWheel}
          disabled={isSpinning}
          className="w-full"
        >
          {isSpinning ? "Girando..." : prize ? "Girar Novamente" : "GIRAR A ROLETA"}
        </Button>

        {prize && (
          <Button
            size="lg"
            variant="default"
            onClick={() => {
              setIsOpen(false);
              window.location.href = 'https://go.ironpayapp.com.br/dqqxi7fw1g';
            }}
            className="w-full mt-3"
          >
            Usar Meu Desconto Agora
          </Button>
        )}

        <p className="text-xs text-center text-muted-foreground mt-4">
          * Válido apenas para compras realizadas hoje
        </p>
      </div>
    </div>
  );
};

export default SpinWheel;

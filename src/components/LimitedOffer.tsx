import { Clock, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to end of day
    const updateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    checkoutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-destructive/5 border-y-4 border-destructive">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <Clock className="w-4 h-4" />
              OFERTA LIMITADA
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              🔥 50% OFF Termina Hoje!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Não perca esta oportunidade única. Estoque limitado disponível!
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-background rounded-xl p-4 shadow-lg min-w-[80px]">
                <div className="text-3xl md:text-4xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Horas</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">:</div>
              <div className="bg-background rounded-xl p-4 shadow-lg min-w-[80px]">
                <div className="text-3xl md:text-4xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Minutos</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">:</div>
              <div className="bg-background rounded-xl p-4 shadow-lg min-w-[80px]">
                <div className="text-3xl md:text-4xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground uppercase">Segundos</div>
              </div>
            </div>

            <Button 
              size="xl" 
              variant="cta"
              onClick={scrollToCheckout}
              className="text-lg px-12 mb-8"
            >
              Aproveitar Oferta Agora
            </Button>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-background rounded-xl p-6 text-center shadow-soft">
              <Package className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Estoque Limitado</div>
              <div className="text-sm text-muted-foreground">Apenas 47 unidades restantes</div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-soft">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Oferta Expira Hoje</div>
              <div className="text-sm text-muted-foreground">Retorna ao preço original amanhã</div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-soft">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">Alta Demanda</div>
              <div className="text-sm text-muted-foreground">15 vendidos nas últimas 24h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;

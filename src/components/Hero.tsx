import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Announcement Bar */}
      <div className="bg-destructive text-destructive-foreground py-2 px-4 text-center text-sm font-semibold">
        🔥 PROMOÇÃO VÁLIDA ATÉ HOJE! 50% OFF - ESTOQUE LIMITADO!
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>4.8/5 - Baseado em 231 avaliações</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Seu Celular em Uma{" "}
              <span className="text-primary">Tela Grande</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Amplifique a tela do seu smartphone até 3x com design nostálgico de TV retrô. 
              Perfeito para assistir filmes, séries e vídeos no celular - sem precisar de energia, WiFi ou Bluetooth!
            </p>

            {/* Price Section */}
            <div className="flex items-center justify-center lg:justify-start gap-4 py-4">
              <div className="text-left">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-foreground">R$ 159,90</span>
                  <span className="text-3xl text-muted-foreground line-through">R$ 319,80</span>
                  <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm font-bold">
                    -50%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Preço promocional válido hoje</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                variant="cta" 
                onClick={() => window.location.href = 'https://go.ironpayapp.com.br/dqqxi7fw1g'}
                className="group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Garantir Meu Screen Grow
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => {
                  const benefitsSection = document.getElementById('benefits');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Benefícios
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success text-xs">✓</span>
                </div>
                <span>Envio Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success text-xs">✓</span>
                </div>
                <span>Boleto e Cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success text-xs">✓</span>
                </div>
                <span>Pagamento Seguro</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src="https://screengrow.shop/cdn/shop/files/image0_4.gif?v=1757244892&width=1200" 
                alt="Screen Grow™ - Amplificador de Tela Retrô para Smartphone"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-background border-4 border-background shadow-lg rounded-2xl p-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">231+</div>
                <div className="text-xs text-muted-foreground">Clientes Felizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, CheckCircle } from "lucide-react";
import detailImage from "@/assets/detail-shot.jpg";

const FinalCTA = () => {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={detailImage} 
                  alt="Screen Grow™ em uso"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Oferta Especial Ativa</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto Para Transformar a Experiência no Seu Celular?
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Amplificação 3x maior para assistir vídeos com máximo conforto</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Design nostálgico que combina estilo e funcionalidade</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Portátil e sem necessidade de energia - use em qualquer lugar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Aceitamos boleto e cartão de crédito</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-subtle rounded-xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Preço Original</div>
                    <div className="text-2xl text-muted-foreground line-through">R$ 319,80</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Preço Hoje</div>
                    <div className="text-4xl font-bold text-primary">R$ 159,90</div>
                  </div>
                </div>
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg text-center font-semibold text-sm">
                  🔥 ECONOMIZE R$ 159,90 (50% OFF) - VÁLIDO HOJE!
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="xl" 
                variant="cta"
                onClick={() => window.location.href = 'https://go.ironpayapp.com.br/dqqxi7fw1g'}
                className="w-full text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Garantir Meu Screen Grow - R$ 159,90
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                🔒 Pagamento seguro • 💳 Aceitamos boleto e cartão de crédito • 📦 Envio rastreado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

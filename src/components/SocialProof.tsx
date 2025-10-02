import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    name: "Jesse D.",
    rating: 5,
    text: "Chegou muito mais rápido do que esperado, bem embalado e a qualidade é ótima. Definitivamente recomendo!"
  },
  {
    name: "Arlen C.",
    rating: 5,
    text: "Muito feliz com meu pedido, vou levar isso para todos os lugares comigo haha"
  },
  {
    name: "Miles K.",
    rating: 5,
    text: "Ótimo presente, envio rápido. Bom vendedor."
  },
  {
    name: "Michaelia D.",
    rating: 5,
    text: "Não consigo acreditar como isso funciona bem! Exatamente como nos vídeos"
  },
  {
    name: "Christian C.",
    rating: 5,
    text: "Exatamente como mostrado, funciona muito bem"
  },
  {
    name: "Trista C.",
    rating: 5,
    text: "Satisfeita com minha compra"
  }
];

const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>4.8 de 5.0 estrelas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que Nossos Clientes <span className="text-primary">Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 231 avaliações verificadas de clientes satisfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
              <p className="font-semibold text-sm text-muted-foreground">— {review.name}</p>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">231+</div>
            <div className="text-sm text-muted-foreground">Avaliações</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-sm text-muted-foreground">Classificação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Vendidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

import { Shield, Truck, RotateCcw, Lock } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de Satisfação",
    description: "100% garantido ou seu dinheiro de volta - sem perguntas"
  },
  {
    icon: Truck,
    title: "Envio Rápido e Seguro",
    description: "Envio rastreado para sua porta com proteção total"
  },
  {
    icon: RotateCcw,
    title: "Devolução Fácil",
    description: "Não está satisfeito? Devolva em até 30 dias gratuitamente"
  },
  {
    icon: Lock,
    title: "Pagamento 100% Seguro",
    description: "Seus dados estão protegidos com criptografia SSL"
  }
];

const Guarantee = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compra <span className="text-primary">100% Segura</span> e Garantida
            </h2>
            <p className="text-lg text-muted-foreground">
              Sua satisfação é nossa prioridade. Compre com total confiança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-subtle hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-4">
                  <guarantee.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>

          {/* Money Back Badge */}
          <div className="mt-12 bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center shadow-lg">
            <div className="max-w-2xl mx-auto">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Garantia de 30 Dias</h3>
              <p className="text-lg opacity-90">
                Se você não estiver completamente satisfeito com o Screen Grow™, 
                devolvemos 100% do seu dinheiro. Sem complicações, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

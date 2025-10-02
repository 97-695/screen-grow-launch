import { Smartphone, Battery, Eye, Tv, Globe, Gift } from "lucide-react";

const benefits = [
  {
    icon: Tv,
    title: "Tela 3x Maior",
    description: "Amplifique sua experiência visual - transforme seu smartphone numa tela grande estilo TV"
  },
  {
    icon: Battery,
    title: "Sem Energia Necessária",
    description: "100% livre de cabos! Não precisa de bateria, WiFi ou Bluetooth - funciona em qualquer lugar"
  },
  {
    icon: Eye,
    title: "Protege Seus Olhos",
    description: "Reduza a fadiga ocular com uma tela maior - perfeito para longas sessões de vídeo"
  },
  {
    icon: Smartphone,
    title: "Universal",
    description: "Funciona com todos os smartphones de 4 a 6.7+ polegadas - iPhone, Samsung, Android"
  },
  {
    icon: Globe,
    title: "Portátil & Dobrável",
    description: "Leve e fácil de transportar - perfeito para viagens, camping ou qualquer lugar"
  },
  {
    icon: Gift,
    title: "Design Retrô",
    description: "Visual nostálgico de TV antiga que combina estilo vintage com funcionalidade moderna"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por Que Você Vai <span className="text-primary">Amar</span> o Screen Grow™?
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que um simples amplificador - é uma experiência completa de entretenimento portátil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

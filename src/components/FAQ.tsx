import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ele reduz ou distorce a qualidade da imagem?",
    answer: "De jeito nenhum. Nosso amplificador de tela simplesmente amplia o que já está na tela do seu telefone usando uma lente óptica. Ele não estica pixels nem altera a resolução - apenas torna a imagem maior e mais fácil de ver."
  },
  {
    question: "Com quais tamanhos de telefone ele funciona?",
    answer: "Nosso amplificador funciona com TODOS os smartphones - desde telas menores de 4 polegadas até dispositivos maiores de 6,7+ polegadas (como iPhones, Samsungs e Androids)."
  },
  {
    question: "Preciso de baterias, WiFi ou Bluetooth para usar?",
    answer: "Não! Nosso amplificador é 100% livre de plugues. Não requer energia, internet ou conexões de qualquer tipo. Funciona em qualquer lugar, a qualquer hora - em casa, viajando ou ao ar livre."
  },
  {
    question: "É seguro para meus olhos?",
    answer: "Sim - na verdade, pode ajudar a reduzir o cansaço. Assistir vídeos em uma tela pequena de telefone pode causar tensão ocular e fadiga. Ao ampliar a imagem, o amplificador torna a visualização mais confortável e natural, especialmente para sessões mais longas."
  },
  {
    question: "Quão portátil é? Posso levá-lo comigo?",
    answer: "Nosso amplificador de tela é leve e dobrável, facilitando o transporte em uma bolsa ou mochila. Muitos clientes o levam em viagens, usam em voos ou montam durante noites de cinema em família sem precisar de TV."
  },
  {
    question: "Quanto tempo leva o envio?",
    answer: "Oferecemos envio rápido e rastreado. A maioria dos pedidos chega em 7-14 dias úteis, dependendo da sua localização."
  },
  {
    question: "Qual é a política de devolução?",
    answer: "Oferecemos uma garantia de satisfação de 30 dias. Se você não estiver completamente satisfeito, pode devolver o produto para um reembolso total - sem perguntas."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa saber sobre o Screen Grow™
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 shadow-soft border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

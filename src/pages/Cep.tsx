import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Package } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Cep = () => {
  const navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 5) {
      return numbers;
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanCep = cep.replace(/\D/g, "");
    
    if (cleanCep.length !== 8) {
      toast({
        title: "CEP inválido",
        description: "Por favor, insira um CEP válido com 8 dígitos.",
        variant: "destructive",
      });
      return;
    }

    if (!nome.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, insira seu nome completo.",
        variant: "destructive",
      });
      return;
    }

    if (!endereco.trim()) {
      toast({
        title: "Endereço obrigatório",
        description: "Por favor, insira seu endereço completo.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simula validação
    setTimeout(() => {
      toast({
        title: "✓ Dados confirmados!",
        description: "Redirecionando para o pagamento...",
      });
      
      setTimeout(() => {
        window.location.href = 'https://go.invictuspay.app.br/6l6axoqwwl';
      }, 1000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-2xl p-8 border-2 border-primary/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-4 shadow-lg">
              <Package className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dados de Entrega
            </h1>
            <p className="text-muted-foreground">
              Preencha seus dados para finalizar a compra
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium text-foreground">
                Nome Completo
              </label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="text-lg h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cep" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                CEP
              </label>
              <Input
                id="cep"
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={handleCepChange}
                maxLength={9}
                className="text-lg h-12 text-center font-semibold"
                required
              />
              <p className="text-xs text-muted-foreground">
                Digite apenas números, formataremos para você
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="endereco" className="text-sm font-medium text-foreground">
                Endereço Completo
              </label>
              <Input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro, cidade"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="text-lg h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="complemento" className="text-sm font-medium text-foreground">
                Complemento (Opcional)
              </label>
              <Input
                id="complemento"
                type="text"
                placeholder="Apartamento, bloco, etc."
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                className="text-lg h-12"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="cta"
              disabled={isLoading}
              className="w-full text-lg h-14 shadow-xl hover:shadow-2xl transition-all"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  Processando...
                </span>
              ) : (
                "💳 PAGAR AGORA"
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full"
            >
              Voltar para o Início
            </Button>
          </form>

          {/* Info */}
          <div className="mt-5 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-xs text-center text-muted-foreground">
              🔒 Seus dados estão seguros • 🎁 Desconto garantido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cep;

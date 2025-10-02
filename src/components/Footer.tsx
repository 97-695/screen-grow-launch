const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">Screen Grow™</h3>
            <p className="text-background/80 text-sm">
              Transforme seu smartphone em uma experiência de tela grande
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-background transition-colors">Termos de Serviço</a>
            <span>•</span>
            <a href="#" className="hover:text-background transition-colors">Contato</a>
          </div>

          <div className="pt-4 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Screen Grow™. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

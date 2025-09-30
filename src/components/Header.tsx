import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Maria Karolina Carvalho - Advocacia e Consultoria Jurídica" className="h-12 md:h-14" />
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 bg-primary text-primary-foreground border-primary hover:bg-primary/90"
          onClick={() => window.open('https://wa.me/558695600304?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.', '_blank')}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;
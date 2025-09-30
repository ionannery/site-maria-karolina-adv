import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/foto-03.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-20 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Dra. Maria Karolina Carvalho
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-primary">
                Especialista em Direito Previdenciário
              </h2>
              <blockquote className="text-lg text-text-medium leading-relaxed italic">
                "É um direito de toda mãe. Meu papel é garantir que a burocracia do INSS não impeça você de receber o apoio financeiro que merece nesse momento tão importante."
              </blockquote>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg gap-2"
              onClick={() => window.open('https://wa.me/558695600304?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Fale comigo agora
            </Button>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-text-medium text-sm">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-text-medium text-sm">Taxa de aprovação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Dra. Maria Karolina Carvalho - Advogada Especialista"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
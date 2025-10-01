import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Headphones, CheckCircle } from "lucide-react";
import backgroundImage from "@/assets/foto-03.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Coluna da Imagem */}
          <div className="order-2 lg:order-1">
            <img 
              src={backgroundImage} 
              alt="Dra. Maria Karolina Carvalho"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Coluna do Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-text-dark mb-6">
              Está Pronta para Garantir Seu Benefício?
            </h2>
            <p className="text-lg text-text-medium mb-6">
              Não deixe que a complexidade da lei previdenciária te impeça de ter tranquilidade no período pós-parto ou adoção. Fale com quem entende!
            </p>
            <p className="text-text-medium mb-8">
              Preencha o formulário abaixo ou nos chame no WhatsApp para uma análise gratuita do seu caso com a Dra. Maria Karolina Carvalho.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">
                    Prazos são importantes
                  </h3>
                  <p className="text-text-medium text-sm">
                    Alguns benefícios têm prazo para solicitação
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">
                    Atendimento imediato
                  </h3>
                  <p className="text-text-medium text-sm">
                    Nossa equipe responde em minutos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">
                    Consulta gratuita
                  </h3>
                  <p className="text-text-medium text-sm">
                    Primeira avaliação sem custo
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl gap-3 mb-6 w-full lg:w-auto"
              onClick={() => window.open('https://wa.me/558695600304?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.', '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp agora
            </Button>
            
            <div className="flex flex-wrap gap-4 text-sm text-text-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Sem risco</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Pagamento apenas em caso de sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
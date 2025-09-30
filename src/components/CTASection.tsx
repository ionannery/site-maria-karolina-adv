import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, HeadphonesIcon, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-6">
            Está Pronta para Garantir Seu Benefício?
          </h2>
          <p className="text-lg text-text-medium max-w-4xl mx-auto mb-8">
            Não deixe que a complexidade da lei previdenciária te impeça de ter tranquilidade no período pós-parto ou adoção. Fale com quem entende!
          </p>
          <p className="text-text-medium max-w-4xl mx-auto">
            Preencha o formulário abaixo ou nos chame no WhatsApp para uma análise gratuita do seu caso com a Dra. Maria Karolina Carvalho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-text-dark mb-2">
              Prazos são importantes
            </h3>
            <p className="text-text-medium text-sm">
              Alguns benefícios têm prazo para solicitação
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeadphonesIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-text-dark mb-2">
              Atendimento imediato
            </h3>
            <p className="text-text-medium text-sm">
              Nossa equipe responde em minutos
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-text-dark mb-2">
              Consulta gratuita
            </h3>
            <p className="text-text-medium text-sm">
              Primeira avaliação sem custo
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl gap-3 mb-6"
            onClick={() => window.open('https://wa.me/558695600304?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.', '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp agora
          </Button>
          
          <div className="flex justify-center items-center gap-6 text-sm text-text-medium">
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
    </section>
  );
};

export default CTASection;
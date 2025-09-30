import { Search, Calculator, Shield, Heart } from "lucide-react";
import backgroundImage from "@/assets/foto-02.jpg";

const ServicesSection = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-text-dark/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Por que escolher meus serviços?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Ofereço o melhor atendimento para garantir que você receba seu salário-maternidade sem complicações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Análise Detalhada
            </h3>
            <p className="text-text-medium">
              Verificamos se você cumpre o requisito de apenas uma contribuição e se está no prazo correto.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Cálculo Preciso
            </h3>
            <p className="text-text-medium">
              Garantimos o valor máximo que você tem direito, evitando perdas financeiras.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Protocolo Rápido e Seguro
            </h3>
            <p className="text-text-medium">
              Cuidamos de toda a burocracia, do pedido no INSS ao recurso judicial, se necessário.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Atendimento Humanizado
            </h3>
            <p className="text-text-medium">
              Entendemos a importância desse momento. Oferecemos clareza e acompanhamento total.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
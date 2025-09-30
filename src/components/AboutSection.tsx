import maternityImage from "@/assets/foto-01.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={maternityImage} 
              alt="Mãe segurando bebê com carinho - Salário Maternidade"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-text-dark mb-6">
                Sobre Maria Karolina Carvalho
              </h2>
              <p className="text-lg text-text-medium leading-relaxed mb-6">
                Advogada especialista em direito previdenciário com foco total no atendimento humanizado e na garantia dos direitos das mulheres.
              </p>
              <p className="text-text-medium leading-relaxed">
                Especialista em Direito Previdenciário e Trabalhista, com sólida experiência na defesa dos direitos dos segurados e trabalhadores. Há mais de 2 anos atua diretamente na concessão e revisão de benefícios previdenciários, bem como na proteção do trabalhador. Comprometida em oferecer soluções jurídicas personalizadas, une conhecimento técnico, dedicação e estratégia para assegurar os melhores resultados aos seus clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-text-medium text-sm">Casos aprovados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-text-medium text-sm">Taxa de sucesso</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-dark">
                Meus diferenciais:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-medium">Advogada especializada em direito previdenciário</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-medium">Atendimento exclusivo e personalizado para cada cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-medium">Acompanhamento completo do processo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-medium">Consultoria gratuita inicial</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-medium">Pagamento apenas em caso de sucesso</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-dark mb-2">Experiência</h4>
                <p className="text-text-medium text-sm">2+ anos especializados em direito previdenciário</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-2">Dedicação</h4>
                <p className="text-text-medium text-sm">Atendimento personalizado e humanizado</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-2">Resultados</h4>
                <p className="text-text-medium text-sm">98% de taxa de aprovação dos pedidos</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-2">Garantia</h4>
                <p className="text-text-medium text-sm">Pagamento apenas em caso de sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
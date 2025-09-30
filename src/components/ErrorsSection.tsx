import { AlertTriangle, Clock, FileX } from "lucide-react";

const ErrorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-6">
            Os 3 Maiores Erros ao Pedir o Salário Maternidade Sozinha
          </h2>
          <p className="text-lg text-text-medium max-w-3xl mx-auto">
            Muitas mães cometem erros simples que levam ao indeferimento (negativa) do benefício. Não arrisque perder o prazo e o seu dinheiro!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Erro ao Contribuir:
            </h3>
            <p className="text-text-medium">
              Fazer a contribuição sozinha, pode prejudicar o seu benefício
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Perda da Qualidade de Segurado
            </h3>
            <p className="text-text-medium">
              Não saber se o parto ocorreu dentro do "período de graça" do INSS.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileX className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-text-dark mb-4">
              Documentação Incompleta
            </h3>
            <p className="text-text-medium">
              Apresentar a documentação incorreta ou faltante, resultando na negação do pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorsSection;
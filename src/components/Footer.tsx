import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.67 9 11 5.16-1.33 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11h8M8 15h5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Maria Karolina Carvalho</h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              Especialista em Direito Previdenciário e Trabalhista, com sólida experiência na defesa dos direitos dos segurados e trabalhadores. Há mais de 2 anos atua diretamente na concessão e revisão de benefícios previdenciários, bem como na proteção do trabalhador. Comprometida em oferecer soluções jurídicas personalizadas, une conhecimento técnico, dedicação e estratégia para assegurar os melhores resultados aos seus clientes.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://wa.me/558695600304?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:advmariakarolina@gmail.com"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Center Column - Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">(86) 9 9560-0304</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">advmariakarolina@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Rua Leonardo Castelo Branco, 1673,<br />
                  Morada do Sol, Teresina (PI)
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hours & Specializations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  Segunda a Sexta: 8h às 18h<br />
                  Presencial e On-line
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Especializações</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Salário-maternidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Auxílio-doença
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Aposentadoria
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Pensão por morte
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Recursos INSS
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Maria Karolina Carvalho. Todos os direitos reservados.<br />
              OAB/PI 24.098 - Dra. Maria Karolina Carvalho
            </div>
            
            <div className="text-gray-400 text-xs max-w-md text-right">
              <strong>Aviso Legal:</strong> Este site tem caráter meramente informativo. As informações aqui contidas não constituem consulta jurídica.<br />
              Para orientação específica sobre seu caso, agende uma consulta conosco.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
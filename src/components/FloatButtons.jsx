import React, { useState, useEffect } from 'react';
// Ícones da lib react-icons
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Verificar scroll para mostrar/esconder botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo seu número
    const message = 'Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades de trabalho.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-3 z-50">
      {/* Botão WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="
          bg-green-500
          hover:bg-green-600
          active:bg-green-700
          text-white
          p-3
          rounded-full
          shadow-md
          hover:shadow-lg
          active:shadow-sm
          transition-all
          duration-200
          transform
          hover:scale-105
          active:scale-95
          animate-soft-pulse
          hover:animate-none
          group
          focus:outline-none
          focus:ring-2
          focus:ring-green-300
          focus:ring-opacity-50
        "
        title="Fale comigo no WhatsApp"
      >
        <FaWhatsapp className="text-xl group-hover:rotate-6 transition-transform duration-200" />
      </button>

      {/* Botão "Voltar ao Topo" - aparece apenas quando necessário */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            bg-gray-600
            hover:bg-gray-700
            active:bg-gray-800
            text-white
            p-2.5
            rounded-full
            shadow-md
            hover:shadow-lg
            active:shadow-sm
            transition-all
            duration-200
            transform
            hover:scale-105
            active:scale-95
            animate-fade-in
            focus:outline-none
            focus:ring-2
            focus:ring-gray-300
            focus:ring-opacity-50
          "
          title="Voltar ao topo"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes soft-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .animate-soft-pulse {
          animation: soft-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatButtons;

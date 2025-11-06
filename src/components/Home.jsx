import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Home = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animação de digitação para o nome
    const name = nameRef.current;
    const title = titleRef.current;

    if (name && title) {
      setTimeout(() => {
        name.style.opacity = "1";
        name.style.transform = "translateY(0)";
      }, 500);

      setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 1000);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Background animado */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-4">
        {/* Avatar/Foto */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/94794004?v=4"
                alt="Foto de Perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Nome com animação */}
        <h1
          ref={nameRef}
          className="text-5xl md:text-7x1 font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          Tayron Rocha
        </h1>

        {/* Título com animação */}

        <h2
          ref={titleRef}
          className="text-xl md:text-1xl text-gray-600 dark:text-gray-300 mb-8 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          • Engenheiro de Redes • Engenheiro de Software •{" "}
        </h2>

        {/* Descrição */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Apaixonado por tecnologia e inovação. Especializado em Redes de
          computadores, e Gestão de Tecnologia da Informação, automação de redes
          e soluções criativas para problemas complexos.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/tayronroch/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <FaLinkedin className="text-sm" />
            Ver LinkedIn
          </a>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Ver Projetos
          </button>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/tayronroch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tayronroch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:contato@tayronrocha.com"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

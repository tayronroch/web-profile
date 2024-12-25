import React, { useState, useEffect } from 'react';
// Ícones da lib react-icons
import { FaSun, FaMoon, FaArrowUp } from 'react-icons/fa';

const FloatButtons = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para sincronizar com localStorage e preferência do sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDark.matches) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    }
  }, []);

  // Alternar tema escuro / claro
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="
        fixed 
        bottom-4 
        right-4 
        flex 
        flex-col 
        items-center 
        space-y-4
        z-50
      "
    >
      {/* Botão de Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="
          bg-gray-700
          dark:bg-gray-600
          hover:bg-gray-600
          hover:dark:bg-gray-500
          text-white
          p-3
          rounded-full
          shadow
          transition
        "
        title={isDarkMode ? "Tema Claro" : "Tema Escuro"}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Botão “↑ Topo” */}
      <button
        onClick={scrollToTop}
        className="
          bg-blue-600
          hover:bg-blue-500
          text-white
          p-3
          rounded-full
          shadow
          transition
        "
        title="Voltar ao topo"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default FloatButtons;

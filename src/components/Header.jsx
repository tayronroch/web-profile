import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ao montar, checa localStorage ou sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // Se user escolheu algo antes
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    } else {
      // Se não há localStorage, segue a preferência do sistema
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

  // Alterna menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Rola até a seção
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Alterna modo escuro
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

  // Volta ao topo (Home)
  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50 dark:bg-gray-900 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Título */}
        <div className="text-2xl font-bold cursor-pointer">
          Meu Currículo
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-300">
            Home
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-gray-300">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-gray-300">
            Projects
          </button>
          <button onClick={() => scrollToSection('blog')} className="hover:text-gray-300">
            Blog
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-300">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300">
            Contact
          </button>

        
        </div>

        {/* Menu Mobile + Botões */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Botão Dark/Light (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Botão Topo (Mobile) */}
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded"
          >
            ↑ Topo
          </button>

          {/* Botão Menu Hamburguer (Mobile) */}
          <button onClick={toggleMenu}>
            Menu
          </button>
        </div>
      </nav>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Contact
          </button>
          <button
            onClick={scrollToTop}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            ↑ Topo
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

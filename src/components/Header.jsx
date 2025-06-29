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

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass dark:glass-dark">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Título com gradiente */}
        <div className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Tayron Rocha
        </div>

        {/* Menu Desktop com efeitos */}
        <div className="hidden md:flex space-x-6">
          {[
            { id: 'home', label: 'Home' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'blog', label: 'Blog' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group hover:text-blue-500 transition-colors duration-300 font-medium"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Botão Dark Mode */}
        <div className="hidden md:flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-110"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Menu Mobile + Botões */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Botão Dark/Light (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 px-2 py-1 rounded transition-colors duration-300"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Botão Menu Hamburguer (Mobile) */}
          <button 
            onClick={toggleMenu}
            className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 px-3 py-1 rounded transition-colors duration-300"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Dropdown Mobile */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[64px] z-40 transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} glass dark:glass-dark border-t border-gray-200 dark:border-gray-600`}
        style={{ minHeight: isOpen ? '220px' : '0px' }}
      >
        <button
          onClick={() => scrollToSection('home')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('blog')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;

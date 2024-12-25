import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

// Import do nosso novo componente
import FloatButtons from './components/FloatButtons';

function App() {
  return (
    <div className="relative">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Blog />
      <About />
      <Contact />

      {/* Os botões fixos no canto inferior direito */}
      <FloatButtons />
    </div>
  );
}

export default App;

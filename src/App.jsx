import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import FeaturedRepos from './components/FeaturedRepos';
import Projects from './components/Projects';
import Blog from './components/Blog';

// Import do nosso novo componente
import FloatButtons from './components/FloatButtons';

function App() {
  return (
    <div className="relative">
      <Header />
      <Home />
      <Skills />
      <GitHubStats />
      <FeaturedRepos />
      <Projects />
      <Blog />

      {/* Os botões fixos no canto inferior direito */}
      <FloatButtons />
    </div>
  );
}

export default App;

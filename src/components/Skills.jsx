import React, { useEffect, useRef } from 'react';
import { 
  FaBrain, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaShieldAlt, 
  FaUsers, 
  FaLightbulb, 
  FaRocket, 
  FaHeart,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt
} from 'react-icons/fa';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const softSkills = [
    { name: "Pensamento Analítico", icon: FaBrain, level: 95 },
    { name: "Pensamento Criativo", icon: FaLightbulb, level: 90 },
    { name: "Flexibilidade", icon: FaRocket, level: 85 },
    { name: "Agilidade", icon: FaRocket, level: 88 },
    { name: "Resolução de Conflitos", icon: FaHeart, level: 92 },
    { name: "Gestão de Stakeholders", icon: FaUsers, level: 87 },
    { name: "Inteligência Emocional", icon: FaHeart, level: 90 },
    { name: "Empatia", icon: FaHeart, level: 93 },
    { name: "Trabalho em Equipe", icon: FaUsers, level: 89 },
  ];

  const hardSkills = [
    { name: "JavaScript", icon: FaJs, level: 90 },
    { name: "Python", icon: FaPython, level: 85 },
    { name: "React", icon: FaReact, level: 88 },
    { name: "Node.js", icon: FaNodeJs, level: 82 },
    { name: "SQL Databases", icon: FaDatabase, level: 85 },
    { name: "Docker", icon: FaDocker, level: 75 },
    { name: "AWS", icon: FaAws, level: 70 },
    { name: "Git", icon: FaGitAlt, level: 88 },
    { name: "Arquitetura SOLID", icon: FaCode, level: 80 },
  ];

  const SkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;
    
    return (
      <div 
        className={`skill-card fade-in bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            <IconComponent className="text-white text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '0%' }}
            onLoad={(e) => {
              setTimeout(() => {
                e.target.style.width = `${skill.level}%`;
              }, index * 100);
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen w-full flex flex-col justify-center items-center py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Minhas Habilidades
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Uma combinação de habilidades técnicas e interpessoais que me permitem 
          criar soluções inovadoras e trabalhar efetivamente em equipe.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4">
        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Hard Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index + softSkills.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

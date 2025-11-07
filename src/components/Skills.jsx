'use client'

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
  FaGitAlt,
  FaPuzzlePiece
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
    { name: "Troubleshoot", icon: FaPuzzlePiece, level: 100, animation: "bounce" },
    { name: "Pensamento Analítico", icon: FaBrain, level: 95, animation: "pulse" },
    { name: "Pensamento Criativo", icon: FaLightbulb, level: 90, animation: "spin" },
    { name: "Flexibilidade", icon: FaRocket, level: 85, animation: "wiggle" },
    { name: "Agilidade", icon: FaRocket, level: 88, animation: "wiggle" },
    { name: "Resolução de Conflitos", icon: FaHeart, level: 92, animation: "heartbeat" },
    { name: "Gestão de Stakeholders", icon: FaUsers, level: 87, animation: "swing" },
    { name: "Inteligência Emocional", icon: FaHeart, level: 90, animation: "heartbeat" },
    { name: "Empatia", icon: FaHeart, level: 93, animation: "heartbeat" },
    { name: "Trabalho em Equipe", icon: FaUsers, level: 89, animation: "swing" },
  ];

  const hardSkills = [
    { name: "JavaScript", icon: FaJs, level: 90, animation: "tada" },
    { name: "Python", icon: FaPython, level: 85, animation: "rubberBand" },
    { name: "React", icon: FaReact, level: 88, animation: "spin" },
    { name: "Node.js", icon: FaNodeJs, level: 82, animation: "bounce" },
    { name: "SQL Databases", icon: FaDatabase, level: 85, animation: "flip" },
    { name: "Docker", icon: FaDocker, level: 75, animation: "swing" },
    { name: "AWS", icon: FaAws, level: 70, animation: "pulse" },
    { name: "Git", icon: FaGitAlt, level: 88, animation: "tada" },
    { name: "Arquitetura SOLID", icon: FaCode, level: 80, animation: "rubberBand" },
  ];

  const getAnimationClass = (animation) => {
    const animationClasses = {
      bounce: "animate-bounce",
      pulse: "animate-pulse",
      spin: "animate-spin",
      wiggle: "animate-wiggle",
      heartbeat: "animate-heartbeat",
      swing: "animate-swing",
      tada: "animate-tada",
      rubberBand: "animate-rubberBand",
      flip: "animate-flip"
    };
    return animationClasses[animation] || "animate-pulse";
  };

  const SkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;
    
    return (
      <div 
        className={`skill-card fade-in bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-500 group`}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex items-center mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110 ${
            skill.level === 100 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`}>
            <IconComponent 
              className={`text-white text-lg transition-all duration-300 group-hover:scale-125 ${getAnimationClass(skill.animation)}`}
              style={{ animationDuration: skill.animation === 'spin' ? '3s' : '2s' }}
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">{skill.level}%</p>
              {skill.level === 100 && (
                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium animate-pulse">
                  Expert
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
          <div 
            className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${
              skill.level === 100 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}
            style={{ width: '0%' }}
            onLoad={(e) => {
              setTimeout(() => {
                e.target.style.width = `${skill.level}%`;
              }, index * 50);
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
      className="min-h-screen w-full flex flex-col justify-center items-center py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Minhas Habilidades
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Uma combinação de habilidades técnicas e interpessoais que me permitem 
          criar soluções inovadoras e trabalhar efetivamente em equipe.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4">
        {/* Soft Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            Hard Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hardSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index + softSkills.length} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0); }
          15% { transform: rotateZ(-15deg); }
          20% { transform: rotateZ(10deg); }
          25% { transform: rotateZ(-10deg); }
          30% { transform: rotateZ(6deg); }
          35% { transform: rotateZ(-4deg); }
          40%, 100% { transform: rotateZ(0); }
        }
        
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        
        @keyframes swing {
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes tada {
          0% { transform: scale(1); }
          10%, 20% { transform: scale(0.9) rotate(-3deg); }
          30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
          40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
          100% { transform: scale(1) rotate(0); }
        }
        
        @keyframes rubberBand {
          from { transform: scale(1); }
          30% { transform: scaleX(1.25) scaleY(0.75); }
          40% { transform: scaleX(0.75) scaleY(1.25); }
          50% { transform: scaleX(1.15) scaleY(0.85); }
          65% { transform: scaleX(0.95) scaleY(1.05); }
          75% { transform: scaleX(1.05) scaleY(0.95); }
          to { transform: scale(1); }
        }
        
        @keyframes flip {
          0% { transform: perspective(400px) rotateY(0); }
          40% { transform: perspective(400px) rotateY(90deg); }
          60% { transform: perspective(400px) rotateY(180deg); }
          80% { transform: perspective(400px) rotateY(270deg); }
          100% { transform: perspective(400px) rotateY(360deg); }
        }
        
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
        .animate-swing { animation: swing 1s ease-in-out infinite; }
        .animate-tada { animation: tada 1s ease-in-out infinite; }
        .animate-rubberBand { animation: rubberBand 1s ease-in-out infinite; }
        .animate-flip { animation: flip 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Skills;

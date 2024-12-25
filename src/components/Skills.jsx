import React from 'react';

const Skills = () => {
  const softSkills = [
    "Pensamento analítico",
    "Pensamento criativo",
    "Flexibilidade",
    "Agilidade",
    "Resolução de conflitos",
    "Gestão de stakeholders",
    "Inteligência emocional",
    "Empatia",
    "Trabalho em equipe",
  ];

  const hardSkills = [
    "Linguagens de programação: Javascript, Python",
    "Arquitetura de software (SOLID)",
    "Bancos de dados: SQL",
    "Integração e entrega contínua",
    "Gerenciamento de projetos",
    "Gerenciamento de Incidentes de Rede",
    "Conhecimento em segurança da informação"
  ];

  const ProgressBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>100%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
        <div className="bg-blue-600 h-2 rounded" style={{ width: '100%' }}></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="h-screen w-full flex flex-col justify-center items-center transition-colors"
    >
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      <div className="flex flex-col md:flex-row w-10/12 md:w-8/12 gap-8">
        {/* Soft Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
          {softSkills.map((skill, i) => (
            <ProgressBar skill={skill} key={i} />
          ))}
        </div>
        {/* Hard Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Hard Skills</h2>
          {hardSkills.map((skill, i) => (
            <ProgressBar skill={skill} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaMobile,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "LAB - ASR 100X-X Cisco",
      repoLink: "https://github.com/tayronroch/CISCO-ASR-100X-X",
      videoLink: "https://youtube.com/link_para_video_1",
      description:
        "Implementação de concentrador ASR 100X-X da Cisco para ambiente de provedores de Internet para pequenas e médias operações",
      technologies: ["Cisco", "PPPoE", "BPA", "Firewall", "QoS"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "Networking",
      icon: FaServer,
    },
    {
      title: "Lab de Rede 2",
      repoLink: "https://github.com/seuusuario/lab-rede-2",
      videoLink: "https://youtube.com/link_para_video_2",
      description:
        "Sistema de monitoramento de rede em tempo real com dashboard interativo. Inclui alertas automáticos e relatórios detalhados.",
      technologies: ["Python", "React", "Docker", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Full Stack",
      icon: FaCode,
    },
    {
      title: "App Mobile de Gestão",
      repoLink: "https://github.com/seuusuario/app-gestao",
      videoLink: "https://youtube.com/link_para_video_3",
      description:
        "Aplicativo mobile para gestão de projetos e equipes. Interface intuitiva com sincronização em tempo real.",
      technologies: ["React Native", "Node.js", "Firebase", "Redux"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "Mobile",
      icon: FaMobile,
    },
    {
      title: "Sistema de Análise de Dados",
      repoLink: "https://github.com/seuusuario/analise-dados",
      videoLink: "https://youtube.com/link_para_video_4",
      description:
        "Plataforma de análise de dados com machine learning. Processamento de big data e visualizações interativas.",
      technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Science",
      icon: FaCode,
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const IconComponent = project.icon;

    return (
      <div
        className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        {/* Imagem do projeto */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Categoria */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              <IconComponent className="text-xs" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105"
            >
              <FaGithub />
              Repositório
            </a>
            <a
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              <FaYoutube />
              Vídeo
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center items-center py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meus Projetos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Uma seleção dos meus projetos mais recentes, demonstrando habilidades
          técnicas e criatividade na resolução de problemas complexos.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/tayronroch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <FaGithub />
          Ver Mais Projetos no GitHub
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Lab de Rede 1",
      repoLink: "https://github.com/seuusuario/lab-rede-1",
      videoLink: "https://youtube.com/link_para_video_1",
      description: "Descrição do laboratório de rede 1..."
    },
    {
      title: "Lab de Rede 2",
      repoLink: "https://github.com/seuusuario/lab-rede-2",
      videoLink: "https://youtube.com/link_para_video_2",
      description: "Descrição do laboratório de rede 2..."
    }
  ];

  return (
    <section
      id="projects"
      className="h-screen w-full flex flex-col justify-center items-center transition-colors"
    >
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Repositório
              </a>
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Vídeo no YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

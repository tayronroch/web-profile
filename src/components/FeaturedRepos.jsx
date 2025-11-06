import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaCodeBranch,
  FaCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const FeaturedRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  // Cores para as linguagens
  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Kotlin: "#A97BFF",
    Swift: "#ffac45",
    Dart: "#00B4AB",
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const headers = token ? { Authorization: `token ${token}` } : {};

        // Buscar todos os repositórios do usuário
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          { headers }
        );

        if (!response.ok) throw new Error("Erro ao buscar repositórios");
        const data = await response.json();

        // Filtrar e ordenar por stars (pegar os top 6)
        const topRepos = data
          .filter((repo) => !repo.fork) // Opcional: remover forks
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(topRepos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    } else {
      setError("Username do GitHub não configurado no .env.local");
      setLoading(false);
    }
  }, [username, token]);

  if (loading) {
    return (
      <section
        id="featured-repos"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="featured-repos"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            <p>Erro ao carregar repositórios: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section
        id="featured-repos"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>Nenhum repositório encontrado</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="featured-repos"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Repositórios em Destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Meus projetos mais populares no GitHub (Existem varios outros
            privados também!)
          </p>
        </div>

        {/* Grid de repositórios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                {/* Nome do repositório */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate flex-1">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    title="Ver no GitHub"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 min-h-[60px]">
                  {repo.description || "Sem descrição disponível"}
                </p>

                {/* Linguagem */}
                {repo.language && (
                  <div className="flex items-center mb-4">
                    <FaCircle
                      className="text-xs mr-2"
                      style={{ color: languageColors[repo.language] || "#ccc" }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {repo.language}
                    </span>
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="text-blue-500" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                {/* Tags de tópicos (se houver) */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer do card */}
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 border-t border-gray-200 dark:border-gray-600">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  Ver Repositório
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Link para ver todos os repositórios */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Repositórios
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRepos;

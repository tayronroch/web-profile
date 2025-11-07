'use client'

import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaCode } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const headers = token ? { Authorization: `token ${token}` } : {};

        // Buscar dados do usuário
        const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
        if (!userResponse.ok) throw new Error('Erro ao buscar dados do GitHub');
        const userData = await userResponse.json();

        // Buscar repositórios para calcular stars totais
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
        if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
        const reposData = await reposResponse.json();

        // Calcular estatísticas
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
        const languages = reposData
          .filter(repo => repo.language)
          .reduce((acc, repo) => {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
            return acc;
          }, {});

        const topLanguages = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        setStats({
          name: userData.name || username,
          bio: userData.bio,
          avatar: userData.avatar_url,
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          totalStars,
          totalForks,
          topLanguages,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubStats();
    } else {
      setError('Username do GitHub não configurado no .env.local');
      setLoading(false);
    }
  }, [username, token]);

  if (loading) {
    return (
      <section id="github-stats" className="py-20 bg-white dark:bg-gray-900 transition-colors">
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
      <section id="github-stats" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            <p>Erro ao carregar estatísticas do GitHub: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const statCards = [
    {
      icon: <FaCode className="text-3xl" />,
      label: 'Repositórios',
      value: stats.publicRepos,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaStar className="text-3xl" />,
      label: 'Total de Stars',
      value: stats.totalStars,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <FaCodeBranch className="text-3xl" />,
      label: 'Total de Forks',
      value: stats.totalForks,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FaUsers className="text-3xl" />,
      label: 'Seguidores',
      value: stats.followers,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="github-stats" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FaGithub className="text-5xl text-gray-800 dark:text-white mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              GitHub Stats
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Minhas estatísticas e atividades no GitHub
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold opacity-90 mb-1">{card.label}</p>
                    <p className="text-3xl font-bold">{card.value}</p>
                  </div>
                  <div className="opacity-80">{card.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linguagens mais usadas */}
        {stats.topLanguages.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Linguagens Mais Usadas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.topLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transform transition-all duration-300 hover:scale-110"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub README Stats (imagens geradas pela API) */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&count_private=true`}
            alt="GitHub Stats"
            className="rounded-xl shadow-lg max-w-full"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true`}
            alt="GitHub Streak"
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;

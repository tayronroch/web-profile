import React from "react";

const Blog = () => {
  return (
    <section
      id="blog"
      className="h-screen w-full flex flex-col justify-center items-center transition-colors"
    >
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <p className="text-center w-10/12 md:w-6/12 mb-4">
        Futuramente aqui haverá uma seção de blog onde artigos interessantes
        serão compartilhados.
      </p>
      <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded shadow max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-2">Título do Artigo</h2>
        <p className="mb-4">Resumo do artigo...</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Leia Mais
        </button>
      </div>
    </section>
  );
};

export default Blog;

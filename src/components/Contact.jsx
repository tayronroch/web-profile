import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Formulário enviado (exemplo)");
    // Chamada de back-end real ou serviço de email aqui
  };

  return (
    <section
      id="contact"
      className="h-screen w-full flex flex-col justify-center items-center transition-colors"
    >
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 dark:bg-gray-800 p-6 rounded shadow w-10/12 md:w-1/2"
      >
        <div className="mb-4">
          <label className="block mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="mensagem">
            Mensagem:
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Enviar
        </button>
      </form>

      {/* Redes sociais */}
      <div className="flex space-x-4 mt-6">
        <a
          href="https://instagram.com/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com/seu_canal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          YouTube
        </a>
        <a
          href="https://github.com/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://tiktok.com/@seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          TikTok
        </a>
      </div>
    </section>
  );
};

export default Contact;

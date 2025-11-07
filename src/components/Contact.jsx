'use client'

import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado (exemplo)");
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>
      <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded shadow w-full max-w-md px-2">
        <div className="mb-4">
          <label className="block mb-2">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Enviar
        </button>
      </form>

      {/* Redes Sociais */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 text-blue-600">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FaYoutube />
          <span>YouTube</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FaTiktok />
          <span>TikTok</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;

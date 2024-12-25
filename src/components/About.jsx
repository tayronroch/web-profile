import React from 'react';

const About = () => {
  const pdfURL = "/curriculo.pdf";

  return (
    <section
      id="about"
      className="h-screen w-full flex flex-col items-center justify-center transition-colors"
    >
      <h1 className="text-3xl font-bold mb-4">About (Currículo)</h1>
      <p className="mb-4 text-center w-10/12 md:w-6/12">
        Breve descrição sobre você.
      </p>
      <div className="w-10/12 md:w-8/12 h-[60vh] overflow-hidden bg-gray-200 dark:bg-gray-800 rounded">
        <iframe
          src={pdfURL}
          title="Currículo PDF"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;

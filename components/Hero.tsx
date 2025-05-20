const Hero = () => {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-primary to-secondary">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hello <span className="inline-block animate-wave">👋🏼</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          I’m <span className="text-accent">Animesh Chaturvedi</span>, a Frontend Engineer.
        </h2>
        <p className="text-lg max-w-xl text-gray-300 mt-4">
          I create clean, modern, and fully responsive websites that blend seamless design with functionality.
        </p>
        <div className="flex gap-4 mt-8">
          <a href="#projects" className="bg-accent px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition">
            🚀 My Projects
          </a>
          <a href="#experience" className="text-accent border border-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition">
            Experience →
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
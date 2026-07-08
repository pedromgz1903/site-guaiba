import BeforeAfter from "../components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans pb-20">
      
      {/* Cabeçalho */}
      <header className="p-6 bg-black border-b border-zinc-800 flex justify-center">
        <h1 className="text-3xl font-bold tracking-wider text-blue-500">
          GUAÍBA PELÍCULAS
        </h1>
      </header>

      {/* Seção Principal (Hero) */}
      <section className="flex flex-col items-center justify-center p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Conforto, Privacidade e Segurança <br className="hidden md:block"/> para o seu Lar
        </h2>
        
        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Somos especialistas em instalação de películas de alta performance <strong className="text-blue-400">exclusivamente em residências</strong>. Reduza o calor e proteja seus móveis com a melhor tecnologia do mercado.
        </p>
      </section>

      {/* Chamando a nossa seção de Antes e Depois */}
      <BeforeAfter />

    </main>
  );
}

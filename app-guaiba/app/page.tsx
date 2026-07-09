import BeforeAfter from "../components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans pb-20">
      
      {/* Cabeçalho Estilo YouTube */}
      <header className="w-full max-w-5xl mx-auto mb-12">
        
        {/* 1. Imagem de Capa (Banner) */}
        <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative border border-zinc-800">
          <img src="/capaguaiba.png" alt="Capa Guaíba Películas" className="w-full h-full object-cover" />
        </div>

        {/* 2. Seção da Logo, Título e Links */}
        <div className="flex flex-col md:flex-row items-start px-6 mt-4 gap-6">
          
          {/* Logo Redonda (Sobe um pouco para cima da capa) */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-900 -mt-16 relative z-10 bg-black flex-shrink-0">
            <img src="/logo.jpg" alt="Logo Guaíba Películas" className="w-full h-full object-cover" />
          </div>

          {/* Informações e Descrição */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              Guaíba Películas 
              {/* Ícone de Verificado */}
              <span className="bg-zinc-300 text-black rounded-full p-1 text-xs">✓</span>
            </h1>
            
            {/* Descrição Principal */}
            <div className="mt-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
              <p className="text-sm text-gray-300 leading-relaxed">
                Somos especialistas em instalação de películas de alta performance <strong>exclusivamente em residências</strong>. 
                Aqui você acompanha nossos serviços que garantem privacidade, redução de calor e segurança para o seu lar. 
                Atendemos toda a região com o máximo padrão de qualidade.
              </p>

              {/* Seção de Links com Ícones Premium */}
              <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-zinc-700/50">
                
                {/* WhatsApp */}
                <a href="https://wa.me/555199561785" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-green-600/20 text-gray-300 hover:text-green-400 rounded-full text-sm font-medium transition-all border border-zinc-700 hover:border-green-500/50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/guaiba.peliculas?igsh=MTRxaXRiNGQ0NTcydw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-pink-600/20 text-gray-300 hover:text-pink-400 rounded-full text-sm font-medium transition-all border border-zinc-700 hover:border-pink-500/50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61563685867832" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 rounded-full text-sm font-medium transition-all border border-zinc-700 hover:border-blue-500/50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>

                {/* E-mail */}
                <a href="mailto:guaiba.peliculas6@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-600/20 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-all border border-zinc-700 hover:border-zinc-400/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  E-mail
                </a>

              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Chamando a nossa seção de Antes e Depois e os vídeos */}
      <BeforeAfter />

    </main>
  );
}


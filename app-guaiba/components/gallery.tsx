export default function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-zinc-900 w-full border-t border-zinc-800">
      <h3 className="text-3xl font-bold text-white mb-10 text-center">
        Conheça Nossas <span className="text-blue-500">Soluções Residenciais</span>
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl w-full px-6">
        {/* Vídeo - Fumê Escuro */}
        <div className="flex-1 bg-zinc-950 rounded-xl p-4 border border-zinc-800 shadow-lg flex flex-col items-center">
          <h4 className="text-xl font-semibold text-gray-300 mb-4">Película Fumê Escuro</h4>
          <div className="w-full rounded-lg overflow-hidden border-2 border-zinc-700">
            <video 
              src="/fume-escuro.mp4" 
              controls 
              autoPlay 
              loop 
              muted 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-4 text-gray-400 text-sm text-center">
            Máxima privacidade e redução de claridade para as janelas e portas de vidro da sua casa.
          </p>
        </div>

        {/* Fotos Secundárias */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {/* Jateada */}
          <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 shadow-lg flex items-center gap-4">
            <div className="w-1/2 rounded-lg overflow-hidden border-2 border-zinc-700">
              <img src="/jateada.jpg" alt="Película Jateada em banheiro" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-bold text-blue-400">Película Jateada</h4>
              <p className="text-sm text-gray-400 mt-2">Efeito fosco elegante, perfeito para dar privacidade em banheiros e divisórias.</p>
            </div>
          </div>

          {/* Segurança */}
          <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 shadow-lg flex items-center gap-4">
            <div className="w-1/2 rounded-lg overflow-hidden border-2 border-zinc-700">
              <img src="/seguranca.jpg" alt="Película de Segurança residencial" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-bold text-blue-400">Película de Segurança</h4>
              <p className="text-sm text-gray-400 mt-2">Proteção anti-estilhaço. Muito mais tranquilidade e segurança para a sua família.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const features = [
  ["⚽", "Futebol, Futsal e Fut7"],
  ["🏆", "Tabelas e mata-mata"],
  ["📊", "Classificação automática"],
  ["📱", "Feito primeiro para celular"],
];

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-md flex-col">
        <header className="flex items-center justify-between py-3">
          <div>
            <div className="text-2xl font-black tracking-tight">COPEIRO</div>
            <div className="text-[10px] font-bold uppercase tracking-[.28em] text-green-400">by MDM</div>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold">
            Entrar
          </button>
        </header>

        <section className="flex flex-1 flex-col justify-center py-12">
          <div className="mb-5 inline-flex w-fit rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-300">
            Seu campeonato em um só lugar
          </div>
          <h1 className="max-w-sm text-5xl font-black leading-[.96] tracking-[-.05em]">
            Organize. Jogue. <span className="text-green-400">Faça história.</span>
          </h1>
          <p className="mt-5 max-w-sm text-base leading-7 text-zinc-400">
            Crie campeonatos, cadastre times, gere jogos, lance resultados e compartilhe tudo com jogadores e torcida.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {features.map(([icon, text]) => (
              <div key={text} className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
                <div className="mb-3 text-2xl">{icon}</div>
                <div className="text-sm font-semibold leading-5">{text}</div>
              </div>
            ))}
          </div>

          <a
            href="/criar-campeonato"
            className="mt-8 rounded-2xl bg-green-500 px-5 py-4 text-center text-base font-black text-black transition hover:bg-green-400"
          >
            Criar meu campeonato
          </a>
          <p className="mt-3 text-center text-xs text-zinc-500">Simples para organizar. Fácil para acompanhar.</p>
        </section>
      </div>
    </main>
  );
}

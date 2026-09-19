import Brand from "@/components/Brand";

const telas = [
  ["ABERTURA","Organize. Jogue. Faça história.","/"],
  ["LOGIN","Bem-vindo de volta!","/login"],
  ["INÍCIO","Todo campeonato começa com uma boa ideia.","/dashboard"],
  ["CRIAR","Criação guiada em 5 etapas.","/criar-campeonato"],
  ["CAMPEONATO","Copa Cajobi 2027","/c/copa-cajobi-2027"],
  ["JOGOS","Rodadas, placares e próximos confrontos.","/jogos"],
  ["CLASSIFICAÇÃO","Tabela automática por grupos.","/classificacao"],
  ["ARTILHARIA","Ranking de jogadores e estatísticas.","/artilharia"],
];

export default function Apresentacao() {
  return (
    <main className="min-h-screen bg-[#030806] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Brand />
          <p className="mt-5 max-w-xl text-zinc-400">Plataforma mobile-first para organizar campeonatos de Futebol, Futsal e Fut7.</p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {telas.map(([nome, frase, href]) => (
            <a href={href} key={nome} className="group overflow-hidden rounded-[34px] border-[7px] border-[#161b19] bg-[#07110d] shadow-2xl">
              <div className="relative h-[560px] overflow-hidden">
                <img src="/images/stadium.jpg" alt="Futebol" className="absolute inset-0 h-full w-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07110d]/70 to-[#07110d]" />
                <div className="relative flex h-full flex-col p-5">
                  <div className="flex justify-between text-[9px] font-bold"><span>9:41</span><span>COPEIRO</span></div>
                  <div className="mt-10 text-[10px] font-black tracking-widest text-[#35f58a]">{nome}</div>
                  <h2 className="mt-2 text-2xl font-black leading-tight">{frase}</h2>
                  <div className="mt-auto rounded-xl bg-[#35f58a] p-4 text-center text-sm font-black text-black">VER NO APP →</div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[.03] p-7 text-center">
          <h2 className="text-2xl font-black">COPEIRO <span className="text-[#35f58a]">by MDM</span></h2>
          <p className="mt-2 text-sm text-zinc-400">Organize. Jogue. Faça história.</p>
        </div>
      </div>
    </main>
  );
}
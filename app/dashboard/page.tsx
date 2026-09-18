const campeonatos = [
  { nome: "Copa Cajobi 2027", modalidade: "Fut7", times: 12, status: "Em andamento" },
  { nome: "Municipal de Futsal", modalidade: "Futsal", times: 8, status: "Inscrições" },
];

export default function Dashboard() {
  return <main className="min-h-screen px-5 py-6 pb-28"><div className="mx-auto max-w-md">
    <header className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-green-400">COPEIRO · by MDM</p><h1 className="mt-1 text-3xl font-black">Meus campeonatos</h1></div><div className="grid h-11 w-11 place-items-center rounded-full bg-green-500 font-black text-black">M</div></header>
    <a href="/criar-campeonato" className="mt-7 block rounded-2xl bg-green-500 p-4 text-center font-black text-black">＋ Criar campeonato</a>
    <div className="mt-8 space-y-4">{campeonatos.map(c=><a href="/c/copa-cajobi-2027" key={c.nome} className="block rounded-3xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-bold text-green-400">{c.status}</p><h2 className="mt-1 text-xl font-black">{c.nome}</h2><p className="mt-2 text-sm text-zinc-400">{c.modalidade} · {c.times} times</p></div><span className="text-2xl">🏆</span></div></a>)}</div>
  </div></main>
}
"use client";

import { useState } from "react";

const steps = ["Informações", "Modalidade", "Formato", "Times", "Pronto"];

export default function CriarCampeonato() {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen px-5 py-6">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-sm text-zinc-400">← Voltar</a>
        <div className="mt-6 flex gap-2">
          {steps.map((item, index) => (
            <div key={item} className="flex-1">
              <div className={`h-1 rounded-full ${index <= step ? "bg-green-500" : "bg-white/10"}`} />
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs font-bold uppercase tracking-wider text-green-400">
          Etapa {step + 1} de {steps.length} · {steps[step]}
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[.04] p-6">
          {step === 0 && (
            <>
              <h1 className="text-3xl font-black">Vamos criar seu campeonato</h1>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Comece pelo básico. Você poderá alterar essas informações depois.</p>
              <label className="mt-7 block text-sm font-bold">Nome do campeonato</label>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none focus:border-green-500" placeholder="Ex: Copa Cajobi 2027" />
              <label className="mt-5 block text-sm font-bold">Cidade / local</label>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none focus:border-green-500" placeholder="Onde será disputado?" />
            </>
          )}
          {step > 0 && (
            <div className="py-12 text-center">
              <div className="text-5xl">🏆</div>
              <h1 className="mt-5 text-2xl font-black">{steps[step]}</h1>
              <p className="mt-2 text-sm text-zinc-400">Esta etapa entra na próxima evolução do MVP.</p>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 rounded-2xl border border-white/10 px-4 py-4 font-bold">
                Voltar
              </button>
            )}
            <button onClick={() => setStep(Math.min(step + 1, steps.length - 1))} className="flex-1 rounded-2xl bg-green-500 px-4 py-4 font-black text-black">
              Continuar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

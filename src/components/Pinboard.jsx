import React from 'react';
import { Pin, Trash2 } from 'lucide-react';

export default function Pinboard({ fragments, onRemove, onCommit }) {
  const truths = fragments.filter(f => f.tag === 'truth');
  const comforts = fragments.filter(f => f.tag === 'comfort');

  return (
    <section className="relative w-full py-16 md:py-24 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent)] bg-stone-950 text-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 text-amber-400/90">
          <Pin className="w-5 h-5" />
          <h2 className="text-xl tracking-wide uppercase">Lobby Pinboard</h2>
        </div>

        <p className="mt-3 text-sm text-white/60">
          Assemble what you think happened. Choosing comfort over truth will keep the hotel warm, but further from the exit.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="text-white/80 text-sm uppercase tracking-wider">Chosen Fragments</h3>
            <ul className="mt-3 space-y-2">
              {fragments.length === 0 && (
                <li className="text-white/40 text-sm">No fragments yet. Explore the rooms.</li>
              )}
              {fragments.map((f) => (
                <li key={f.id} className="group flex items-start justify-between gap-2 rounded-md bg-black/20 p-3">
                  <div>
                    <p className="text-sm text-white/90">{f.text}</p>
                    <p className="text-xs text-white/40 mt-1">{f.room}</p>
                  </div>
                  <button
                    onClick={() => onRemove?.(f.id)}
                    className="opacity-0 group-hover:opacity-100 transition text-white/50 hover:text-white"
                    aria-label="Remove fragment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="text-white/80 text-sm uppercase tracking-wider">Atmosphere</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-emerald-500/10 p-3">
                <p className="text-emerald-200/90">Truth Fragments</p>
                <p className="text-emerald-300 text-2xl font-semibold">{truths.length}</p>
              </div>
              <div className="rounded-md bg-amber-500/10 p-3">
                <p className="text-amber-200/90">Comfort Fragments</p>
                <p className="text-amber-300 text-2xl font-semibold">{comforts.length}</p>
              </div>
            </div>

            <button
              onClick={onCommit}
              className="mt-4 w-full rounded-md bg-white/10 py-2 text-white/80 hover:bg-white/15 transition"
            >
              Commit to this version of events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

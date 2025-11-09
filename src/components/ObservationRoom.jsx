import React from 'react';
import { Eye, CupSoda, Chair } from 'lucide-react';

export default function ObservationRoom({ onCollect }) {
  // Simple observation puzzle: 5 cups, 4 chairs
  const items = {
    cups: 5,
    chairs: 4,
  };

  const handleSolve = () => {
    onCollect?.({
      id: 'dining-missing-presence',
      text: 'The table is set for two, but only one glass is used. Someone has been gone for a long time.',
      room: 'Anniversary Dining Room',
      tag: 'truth',
    });
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-stone-900 to-black text-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 text-amber-400/90">
          <Eye className="w-5 h-5" />
          <h2 className="text-xl tracking-wide uppercase">Observation Puzzle</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80">
              <CupSoda className="w-5 h-5" />
              <span className="text-sm">Cups</span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-white">{items.cups}</p>
            <p className="text-xs text-white/50">Porcelain, faint lipstick mark on one.</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80">
              <Chair className="w-5 h-5" />
              <span className="text-sm">Chairs</span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-white">{items.chairs}</p>
            <p className="text-xs text-white/50">One is pulled far back from the table.</p>
          </div>

          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-6">
            <p className="text-sm text-amber-200/90">
              Notice the mismatch. What does it mean?
            </p>
            <button
              onClick={handleSolve}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-amber-500/20 px-4 py-2 text-amber-100 hover:bg-amber-500/30 transition"
            >
              Write it on the timeline
            </button>
          </div>
        </div>

        <p className="mt-8 text-sm text-white/50">
          There are no markers, no hints — only what you notice.
        </p>
      </div>
    </section>
  );
}

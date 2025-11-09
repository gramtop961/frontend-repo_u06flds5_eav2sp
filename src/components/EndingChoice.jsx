import React from 'react';

export default function EndingChoice({ onExit, onRemain, mode }) {
  const isTruth = mode === 'truth';

  return (
    <section className="relative w-full py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
          A lobby mirror becomes a window. You watch yourself check in.
        </h2>
        <p className="mt-4 text-white/70">
          You came here to decide whether to leave this place… or remain lost inside yourself forever.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={onExit}
            className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 hover:bg-emerald-400/20 transition"
          >
            Open the exit door
          </button>
          <button
            onClick={onRemain}
            className="rounded-md border border-amber-400/30 bg-amber-400/10 px-6 py-3 hover:bg-amber-400/20 transition"
          >
            Walk back into the hotel
          </button>
        </div>

        <div className="mt-12 text-sm text-white/50">
          {isTruth ? (
            <p>The lights dim and the air cools. It is honest here.</p>
          ) : (
            <p>The hotel holds its warm glow. It is softer here.</p>
          )}
        </div>
      </div>
    </section>
  );
}

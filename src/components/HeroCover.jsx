import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover({ mode = 'comfort', distortion = 0 }) {
  const isComfort = mode === 'comfort';
  const warmth = isComfort ? 'from-amber-800/60 via-amber-600/20 to-black/70' : 'from-slate-900/80 via-slate-800/40 to-black/90';
  const coldVignette = Math.min(80, 30 + Math.floor(distortion * 50));

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmosphere overlays - never block pointer events */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${warmth}`} />
      <div className={`pointer-events-none absolute inset-0`} style={{
        background: `radial-gradient(circle at 50% 60%, transparent 0%, transparent 35%, rgba(0,0,0,0.${coldVignette}) 75%)`
      }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Rooms of the Silent Hotel
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            A quiet mystery. Nothing hunts you. The fear is in what you realize.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-white/60">Psychological • Mystery • Puzzle Adventure</p>

          <div className="mt-10 animate-pulse">
            <span className="text-white/70 text-sm">Scroll to enter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

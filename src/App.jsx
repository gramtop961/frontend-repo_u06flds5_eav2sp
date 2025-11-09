import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import ObservationRoom from './components/ObservationRoom';
import Pinboard from './components/Pinboard';
import EndingChoice from './components/EndingChoice';

function App() {
  const [fragments, setFragments] = useState([]);
  const [committed, setCommitted] = useState(false);
  const [ending, setEnding] = useState(null); // 'exit' | 'remain' | null

  const stats = useMemo(() => {
    const truths = fragments.filter(f => f.tag === 'truth').length;
    const comforts = fragments.filter(f => f.tag === 'comfort').length;
    const total = Math.max(1, truths + comforts);
    return { truths, comforts, total };
  }, [fragments]);

  const atmosphereMode = stats.truths >= stats.comforts ? 'truth' : 'comfort';
  const distortion = Math.min(1, stats.comforts / stats.total);

  const handleCollect = (fragment) => {
    setFragments((prev) => {
      if (prev.some((f) => f.id === fragment.id)) return prev; // avoid duplicates
      return [...prev, fragment];
    });
  };

  const handleRemove = (id) => {
    setFragments((prev) => prev.filter((f) => f.id !== id));
  };

  const handleCommit = () => {
    setCommitted(true);
    // Visual change is driven by counts; no extra action needed here
  };

  const handleExit = () => {
    setEnding('exit');
  };

  const handleRemain = () => {
    setEnding('remain');
    // Soft reset to simulate the loop
    setTimeout(() => {
      setFragments([]);
      setCommitted(false);
      setEnding(null);
    }, 1800);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroCover mode={atmosphereMode === 'truth' ? 'truth' : 'comfort'} distortion={distortion} />

      <ObservationRoom onCollect={handleCollect} />

      <Pinboard
        fragments={fragments}
        onRemove={handleRemove}
        onCommit={handleCommit}
      />

      <section className={`transition-colors duration-700 ${
        committed ? (atmosphereMode === 'truth' ? 'bg-slate-950' : 'bg-stone-950') : 'bg-black'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-white/70 text-sm">
            {committed
              ? atmosphereMode === 'truth'
                ? 'The air cools. Carpets mute their colors. You are closer to the exit.'
                : 'Warmth lingers. The record player hums a comforting note. The hallways feel longer.'
              : 'Commit your current understanding on the pinboard to change the hotel.'}
          </p>
        </div>
      </section>

      <EndingChoice onExit={handleExit} onRemain={handleRemain} mode={atmosphereMode} />

      {ending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {ending === 'exit' ? (
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-medium">You open the door.</h3>
              <p className="mt-2 text-white/70">Light, soft sound, and then—fade.</p>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-medium">You choose memory.</h3>
              <p className="mt-2 text-white/70">The hotel resets in silence.</p>
            </div>
          )}
        </div>
      )}

      {/* Minimal utilities for small animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .animate-fade-in { animation: fadeIn 800ms ease-out both }
      `}</style>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { HeartLetter } from './components/HeartLetter';
import { DreamFuture } from './components/DreamFuture';
import { Nicknames } from './components/Nicknames';
import { Countdown } from './components/Countdown';
import { FinalSurprise } from './components/FinalSurprise';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart } from 'lucide-react';

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#2D2A26] selection:bg-[#FBE8E7] selection:text-[#5B1E29]">
      {!isUnlocked ? (
        <PasswordGate onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <main className="relative">
          <Navbar />
          <Hero />
          <Timeline />
          <Gallery />
          <HeartLetter />
          <DreamFuture />
          <Nicknames />
          <Countdown />
          <FinalSurprise />
          
          {/* Audio Floating Controller */}
          <MusicPlayer />

          {/* Footer */}
          <footer className="py-12 px-4 bg-[#12050A] text-neutral-400 text-center border-t border-[#D4AF37]/20 text-xs">
            <div className="max-w-xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#E8D49E]">
                <Heart className="w-4 h-4 fill-[#9B4450] text-[#9B4450]" />
                <span className="font-serif text-base tracking-wider">Ashhuu &amp; Hiren</span>
                <Heart className="w-4 h-4 fill-[#9B4450] text-[#9B4450]" />
              </div>
              <p className="font-light italic text-[#ECE3C6]/60">
                "Crafted with infinite love, devotion and cherished memories."
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-editorial">
                Save The Dates: 24 &amp; 25 February 2027
              </p>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // If the user places "perfect.mp3" or "music.mp3" in public folder, it picks it up automatically
    const audio = new Audio(`${import.meta.env.BASE_URL}perfect.mp3`);
    audio.loop = true;
    
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });

    audio.addEventListener('error', () => {
      // Graceful fallback if file is not yet added by user
      setAudioLoaded(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // In case audio file isn't uploaded yet, toggle state for romantic visual cue
        setIsPlaying(!isPlaying);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative group">
        <motion.button
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-300 ${
            isPlaying 
              ? 'bg-[#5B1E29] text-[#FDFCF7] border-[#D4AF37]/50 shadow-[#5B1E29]/30' 
              : 'bg-[#FDFCF7]/90 text-[#5B1E29] border-[#D4AF37]/30 hover:border-[#D4AF37]'
          }`}
          aria-label="Toggle Romantic Music"
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Disc className="w-5 h-5 text-[#D4AF37]" />
              </motion.div>
            ) : (
              <Music className="w-5 h-5 text-[#AA820A]" />
            )}
          </div>

          <div className="text-left hidden sm:block pr-1">
            <p className="text-[10px] tracking-widest uppercase font-semibold text-[#8A6D3B]">
              Our Song
            </p>
            <p className="text-xs font-serif font-medium truncate max-w-[120px]">
              Perfect — Ed Sheeran
            </p>
          </div>

          <div className="w-px h-6 bg-[#D4AF37]/30 mx-1 hidden sm:block" />

          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
          ) : (
            <VolumeX className="w-4 h-4 text-neutral-400" />
          )}
        </motion.button>

        {/* Ambient floating music note animation */}
        {isPlaying && (
          <div className="absolute -top-3 -right-2 pointer-events-none">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#AA820A]"></span>
            </span>
          </div>
        )}

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute right-0 bottom-full mb-3 w-64 p-3 bg-[#281219] text-[#FAF7EE] text-xs rounded-xl shadow-2xl border border-[#D4AF37]/20 pointer-events-none"
            >
              <p className="font-serif font-medium text-[#E8D49E] mb-1">🎵 Our Special Melody</p>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                "Perfect" by Ed Sheeran. Plays locally when you drop 'perfect.mp3' in the public folder.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, Key, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [isOpening, setIsOpening] = useState(false);
  const [error, setError] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPw = password.trim().toLowerCase();
    
    if (cleanPw === 'janu') {
      setIsOpening(true);
      setError(false);
      
      // Fire subtle romantic confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FBE8E7', '#9B4450', '#AA820A']
      });

      setTimeout(() => {
        onUnlock();
      }, 1600);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B0B10] px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#5B1E29]/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-lg z-10"
      >
        {/* Envelope Container */}
        <div className="relative rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl bg-[#281219]/90 border border-[#D4AF37]/30 text-center">
          
          {/* Wax seal emblem */}
          <div className="flex justify-center -mt-16 mb-6">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              animate={isOpening ? { scale: [1, 1.2, 0], rotate: 360 } : {}}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-[#AA820A] via-[#D4AF37] to-[#8A6D3B] p-1 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center cursor-pointer"
            >
              <div className="w-full h-full rounded-full border-2 border-[#FAF7EE]/40 flex items-center justify-center bg-[#5B1E29]">
                <Heart className="w-8 h-8 text-[#FAF7EE] fill-[#FAF7EE]" />
              </div>
            </motion.div>
          </div>

          {/* Subtitle & Romantic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            <p className="font-editorial text-[#D4AF37] tracking-[0.25em] uppercase text-xs">
              A Private Love Story
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FDFCF7] tracking-wide font-normal">
              Dear <span className="font-script text-4xl sm:text-5xl text-[#FBE8E7] font-semibold">Ashhuu ❤️</span>
            </h1>
            <p className="text-[#ECE3C6]/80 text-sm sm:text-base font-light italic">
              "Someone has created something special for you..."
            </p>
          </motion.div>

          {/* Password Prompt & Hindi Riddle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-4 rounded-2xl bg-[#1F0A12]/80 border border-[#D4AF37]/15"
          >
            <p className="font-serif text-[#FAF7EE] text-base sm:text-lg italic leading-relaxed">
              "Jo naam tum mujhe pyaar se bulati ho, wahi iss little world ki key hai..."
            </p>
          </motion.div>

          {/* Password Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                disabled={isOpening}
                className="w-full px-5 py-4 pl-12 rounded-xl bg-[#17060D] border border-[#D4AF37]/30 text-[#FDFCF7] placeholder-[#ECE3C6]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all text-center tracking-wider text-lg font-serif"
                autoFocus
              />
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#F87171] text-xs tracking-wide"
              >
                Arey meri Janudii, think of the sweet name you call me! (Hint: starts with 'j'...)
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={isOpening}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E8D49E] to-[#AA820A] text-[#281219] font-medium tracking-widest uppercase text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group transition-all"
            >
              {isOpening ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-[#281219]" />
                  <span>Unfolding Our World...</span>
                </>
              ) : (
                <>
                  <span>Open The Envelope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          {/* Hint disclosure */}
          <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 flex justify-between items-center text-xs text-[#ECE3C6]/50">
            <span>Passcode: 4 letters</span>
            <button 
              type="button"
              onClick={() => setHintOpen(!hintOpen)}
              className="hover:text-[#D4AF37] transition-colors underline underline-offset-4"
            >
              Need a little clue?
            </button>
          </div>

          <AnimatePresence>
            {hintOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 text-xs text-[#D4AF37] italic"
              >
                Password: <strong>janu</strong>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

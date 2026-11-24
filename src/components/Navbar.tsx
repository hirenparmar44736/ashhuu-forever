import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Memories', href: '#gallery' },
    { label: 'Letter', href: '#heart-letter' },
    { label: 'Dreams', href: '#dreams' },
    { label: 'Forever', href: '#final-surprise' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#FDFCF7]/90 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Couple Monogram */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#5B1E29] flex items-center justify-center text-[#FAF7EE] shadow-sm border border-[#D4AF37]/50 group-hover:scale-105 transition-transform">
            <span className="font-serif font-semibold text-xs tracking-wider">A&amp;H</span>
          </div>
          <div>
            <span className="font-serif text-lg tracking-wider text-[#3D121A] font-semibold block leading-none">
              ASHHUU
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A6D3B] font-editorial block">
              &amp; Hiren
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#3D121A] hover:text-[#9B4450] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Wedding Date Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-xs text-[#5B1E29] font-editorial tracking-wider">
          <Heart className="w-3.5 h-3.5 text-[#9B4450] fill-[#9B4450]" />
          <span>24 Feb 2027</span>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#3D121A] hover:bg-[#FAF7EE]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7EE] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider font-medium text-[#3D121A] hover:text-[#9B4450]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

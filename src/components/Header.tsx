import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/30' : 'bg-gradient-to-b from-background/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-orbitron font-black text-primary glitch cursor-pointer" onClick={() => scrollToSection('hero')}>
            CYBERPUNK
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('hero')}
            className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            HOME
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('about')}
            className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            SOBRE
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('characters')}
            className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            PERSONAGENS
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-primary/30 animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('hero')}
              className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors justify-start"
            >
              HOME
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors justify-start"
            >
              SOBRE
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('characters')}
              className="text-lg font-rajdhani font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors justify-start"
            >
              PERSONAGENS
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

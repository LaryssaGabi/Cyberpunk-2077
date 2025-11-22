import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  onPlayTrailer: () => void;
}

const Hero = ({ onPlayTrailer }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Night City" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-primary glitch leading-tight">
            VIVENCIE A EXPERIÊNCIA DEFINITIVA DE
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-foreground leading-none">
            CYBERPUNK 2077
          </h2>
          
          <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mergulhe no futuro sombrio de Night City. Uma megalópole obcecada por poder, glamour e cibernética. 
            Construa sua lenda nas ruas de uma cidade onde as escolhas moldam quem você é.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={onPlayTrailer}
              className="group relative bg-primary text-primary-foreground hover:bg-primary-glow font-orbitron font-bold text-xl px-8 py-6 cyber-border neon-glow transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-6 w-6" />
              ASSISTA AO TRAILER
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-muted-foreground font-mono text-sm">
            <span className="hover:text-primary transition-colors cursor-pointer">XBOX SERIES X|S</span>
            <span className="text-primary">|</span>
            <span className="hover:text-primary transition-colors cursor-pointer">PS5</span>
            <span className="text-primary">|</span>
            <span className="hover:text-primary transition-colors cursor-pointer">PC</span>
            <span className="text-primary">|</span>
            <span className="hover:text-primary transition-colors cursor-pointer">SWITCH</span>
            <span className="text-primary">|</span>
            <span className="hover:text-primary transition-colors cursor-pointer">MAC</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

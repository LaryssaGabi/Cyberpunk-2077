import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import slide1 from '@/assets/slide-1.jpg';
import slide2 from '@/assets/slide-2.jpg';
import slide3 from '@/assets/slide-3.jpg';

const slides = [
  { id: 1, image: slide1, title: 'NIGHT CITY', description: 'Explore as ruas vibrantes e perigosas da megalópole do futuro' },
  { id: 2, image: slide2, title: 'ARSENAL TECH', description: 'Equipamentos cibernéticos de última geração para dominar as ruas' },
  { id: 3, image: slide3, title: 'VELOCIDADE EXTREMA', description: 'Carros futuristas que definem o conceito de alta performance' },
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center text-primary mb-12 glitch">
          GALERIA NIGHT CITY
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden cyber-border neon-glow-cyan">
            <div className="relative h-[500px] md:h-[600px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Slide Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                    <h3 className="text-3xl md:text-4xl font-orbitron font-black text-primary">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl font-rajdhani text-foreground max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary text-primary-foreground backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary text-primary-foreground backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-12 h-1 transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary w-20'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

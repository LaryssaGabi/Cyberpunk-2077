import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoModal from '@/components/VideoModal';
import ImageCarousel from '@/components/ImageCarousel';
import AboutSection from '@/components/AboutSection';
import CharactersSection from '@/components/CharactersSection';

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onPlayTrailer={() => setIsVideoModalOpen(true)} />
        <ImageCarousel />
        <AboutSection />
        <CharactersSection />
      </main>
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="8X2kIfS6fb8"
      />

      {/* Footer */}
      <footer className="bg-card border-t border-primary/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-muted-foreground">
            &copy; 2077 NIGHT CITY. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-primary text-sm mt-2">
            THE FUTURE IS NOW
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

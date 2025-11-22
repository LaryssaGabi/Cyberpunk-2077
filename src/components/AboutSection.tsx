const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-primary glitch">
            WELCOME TO NIGHT CITY
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-rajdhani text-foreground leading-relaxed">
            <p>
              <span className="text-primary font-bold">Cyberpunk 2077</span> é um RPG de ação e aventura de mundo aberto 
              que se passa em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.
            </p>
            
            <p>
              Você joga como <span className="text-cyan font-bold">V</span>, um mercenário fora da lei em busca de um 
              implante único que é a chave para a imortalidade. Você pode personalizar os implantes cibernéticos, 
              as habilidades e o estilo de jogo do seu personagem e explorar uma vasta cidade onde as escolhas 
              que você faz moldam a história e o mundo ao seu redor.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-card border-2 border-primary cyber-border hover-lift">
                <h3 className="text-2xl font-orbitron font-bold text-cyan mb-2">OPEN WORLD</h3>
                <p className="text-muted-foreground">
                  Explore Night City, uma megalópole vibrante com 6 distritos distintos
                </p>
              </div>
              
              <div className="p-6 bg-card border-2 border-cyan cyber-border hover-lift">
                <h3 className="text-2xl font-orbitron font-bold text-magenta mb-2">CUSTOMIZAÇÃO</h3>
                <p className="text-muted-foreground">
                  Modifique seu corpo com implantes cibernéticos e crie seu próprio estilo
                </p>
              </div>
              
              <div className="p-6 bg-card border-2 border-magenta cyber-border hover-lift">
                <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">SUAS ESCOLHAS</h3>
                <p className="text-muted-foreground">
                  Cada decisão molda a história e define quem você se torna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

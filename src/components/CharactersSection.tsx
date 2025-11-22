import { useState } from 'react';
import characterV from '@/assets/character-v.jpg';
import characterJohnny from '@/assets/character-johnny.jpg';
import characterPanam from '@/assets/character-panam.jpg';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Character {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  personality: string;
  abilities: string[];
}

const characters: Character[] = [
  {
    id: 1,
    name: 'V',
    role: 'Mercenário Cibernético',
    image: characterV,
    description: 'V é um mercenário cyberpunk ambicioso que busca fazer nome nas ruas de Night City. Equipado com os implantes mais avançados, V é capaz de hackear sistemas, usar armas devastadoras e adaptar-se a qualquer situação de combate.',
    personality: 'Determinado, adaptável e resiliente. V tem uma natureza multifacetada que é moldada pelas escolhas do jogador, podendo ser diplomático, violento, carismático ou frio, dependendo das decisões tomadas.',
    abilities: [
      'Implantes cibernéticos avançados',
      'Hacking de sistemas e redes neurais',
      'Combate corpo a corpo e armado',
      'Conexão com Johnny Silverhand',
      'Reflexos sobre-humanos'
    ]
  },
  {
    id: 2,
    name: 'Johnny Silverhand',
    role: 'Rockerboy Lendário',
    image: characterJohnny,
    description: 'Johnny Silverhand é uma lenda do rock e um revolucionário anti-corporação. Após sua morte em 2023, sua consciência foi digitalizada em um chip biológico que acaba na cabeça de V, criando uma relação tumultuada entre os dois.',
    personality: 'Rebelde, impulsivo e carismático. Johnny é movido por um ódio profundo às megacorporações e tem uma visão idealista de liberdade. Ele é sarcástico, direto e não tem medo de falar o que pensa.',
    abilities: [
      'Presença digital como engrama',
      'Conhecimento profundo de Night City',
      'Habilidades de combate veterano',
      'Influência nas escolhas de V',
      'Acesso a memórias do passado'
    ]
  },
  {
    id: 3,
    name: 'Panam Palmer',
    role: 'Nômade das Badlands',
    image: characterPanam,
    description: 'Panam é uma nômade do clã Aldecaldos, especialista em combate veicular e mecânica. Forte e independente, ela tem um código de honra rigoroso e faria qualquer coisa por aqueles que considera família.',
    personality: 'Leal, corajosa e temperamental. Panam é apaixonada e protetora com aqueles que ama, mas pode ser teimosa e impulsiva. Ela valoriza a liberdade e a família acima de tudo.',
    abilities: [
      'Especialista em veículos e mecânica',
      'Combate tático em ambiente desértico',
      'Liderança e estratégia de grupo',
      'Conexão com os Aldecaldos',
      'Operação de equipamento pesado'
    ]
  }
];

const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <>
      <section id="characters" className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center text-primary mb-4 glitch">
            PERSONAGENS PRINCIPAIS
          </h2>
          <p className="text-center text-xl font-rajdhani text-muted-foreground mb-12">
            Clique em cada personagem para conhecer suas funções e personalidades
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {characters.map((character) => (
              <div
                key={character.id}
                onClick={() => setSelectedCharacter(character)}
                className="group relative overflow-hidden cyber-border cursor-pointer hover-lift"
              >
                <div className="relative h-[500px]">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h3 className="text-3xl font-orbitron font-black text-primary group-hover:text-primary-glow transition-colors">
                      {character.name}
                    </h3>
                    <p className="text-lg font-rajdhani text-cyan font-semibold">
                      {character.role}
                    </p>
                    <p className="text-sm font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      CLIQUE PARA MAIS DETALHES
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 animate-fade-in overflow-y-auto">
          <div className="relative max-w-4xl w-full my-8">
            <Button
              onClick={() => setSelectedCharacter(null)}
              size="icon"
              className="absolute -top-4 -right-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full z-10"
            >
              <X size={24} />
            </Button>

            <div className="grid md:grid-cols-2 gap-6 bg-card p-8 cyber-border neon-glow">
              {/* Character Image */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Character Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-orbitron font-black text-primary mb-2">
                    {selectedCharacter.name}
                  </h3>
                  <p className="text-xl font-rajdhani text-cyan font-semibold">
                    {selectedCharacter.role}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-orbitron font-bold text-magenta mb-2">DESCRIÇÃO</h4>
                  <p className="text-foreground font-rajdhani leading-relaxed">
                    {selectedCharacter.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-orbitron font-bold text-cyan mb-2">PERSONALIDADE</h4>
                  <p className="text-foreground font-rajdhani leading-relaxed">
                    {selectedCharacter.personality}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-orbitron font-bold text-primary mb-2">HABILIDADES</h4>
                  <ul className="space-y-2">
                    {selectedCharacter.abilities.map((ability, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-foreground font-rajdhani">{ability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharactersSection;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Shield } from 'lucide-react';

const surfaces = [
  { name: 'Mármol', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop' },
  { name: 'Granito', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop' },
  { name: 'Terrazo', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
  { name: 'Porcelanato', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop' },
  { name: 'Concreto', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop' },
  { name: 'Lajas', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Excelencia en cada <span className="text-gold">superficie</span>
            </h2>
            
            <div className="p-6 rounded-xl border border-gold/30 bg-card mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AV SOLUCRET</strong> brinda servicios profesionales de 
                pulido diamantado, vitrificado, sellado y restauración usando maquinaria industrial 
                y técnicos especializados. Trabajamos con los más altos estándares de calidad 
                para garantizar resultados excepcionales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Visión</h4>
                  <p className="text-sm text-muted-foreground">
                    Ser la empresa líder en Perú en restauración y protección de superficies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Misión</h4>
                  <p className="text-sm text-muted-foreground">
                    Ofrecer servicios con estándares altos, insumos de calidad y responsabilidad técnica.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm text-muted-foreground">Certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-sm text-muted-foreground">Garantizados</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px]"
          >
            {surfaces.map((surface, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <motion.div
                  key={surface.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`relative rounded-xl overflow-hidden group ${
                    isLarge ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <img
                    src={surface.image}
                    alt={surface.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium text-cream">{surface.name}</span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

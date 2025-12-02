import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Protección contra humedad y manchas',
  'Realce del color natural de la piedra',
  'Fácil mantenimiento y limpieza',
  'Larga duración y resistencia',
];

const surfaces = ['Mármol', 'Granito', 'Terrazo', 'Laja', 'Piedra pizarra', 'Mosaicos'];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-card border-2 border-gold/30">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold rounded-br-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                <div className="absolute inset-4 rounded-xl border border-gold/30" />
                <div className="text-center p-8">
                  <div className="w-32 h-40 mx-auto bg-gradient-to-b from-gold/40 to-gold/60 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🧴</span>
                  </div>
                  <span className="text-sm font-medium text-gold">1/4 Galón</span>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Producto Destacado
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sellador Profesional para Piedra
              </h2>
              <p className="text-muted-foreground mb-6">
                Sellador de alta calidad diseñado para proteger y realzar la belleza natural 
                de todo tipo de piedras y superficies porosas.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Surfaces */}
              <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground mb-3">Apto para:</p>
                <div className="flex flex-wrap gap-2">
                  {surfaces.map((surface) => (
                    <span
                      key={surface}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-gold/30 text-foreground bg-gold/5"
                    >
                      {surface}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-fit" asChild>
                <a href="https://wa.me/51961801932?text=Hola, me interesa el sellador profesional para piedra" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5" />
                  Consultar Disponibilidad
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

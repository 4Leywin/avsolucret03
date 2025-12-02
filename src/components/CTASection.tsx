import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Quieres darle vida nueva a tus <span className="text-gold">superficies</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-10">
            Solicita tu cotización gratuita hoy y descubre cómo podemos transformar tus espacios 
            con acabados profesionales y duraderos.
          </p>

          {/* CTA Button */}
          <Button variant="hero" asChild>
            <a href="https://wa.me/51961801932?text=Hola, me gustaría solicitar una cotización gratuita" target="_blank" rel="noopener noreferrer">
              Solicita tu Cotización Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

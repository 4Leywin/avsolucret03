import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Propietaria - Residencial San Isidro',
    content: 'Excelente trabajo en el pulido de mi mármol. El equipo fue muy profesional y el resultado superó mis expectativas. Mi piso quedó como nuevo.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Administrador - Edificio Empresarial',
    content: 'Contratamos a AV SOLUCRET para restaurar el terrazo de todo el lobby. Trabajo impecable, cumplieron con los tiempos y el precio fue justo.',
    rating: 5,
  },
  {
    name: 'Ana Lucía Torres',
    role: 'Arquitecta - Estudio Torres & Asociados',
    content: 'Recomiendo sus servicios al 100%. Han trabajado en varios de mis proyectos y siempre entregan resultados de primera calidad.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-gold">clientes</span>
          </h2>
          <p className="text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 relative group"
            >
              {/* Gold border glow */}
              <div className="absolute inset-0 rounded-2xl border border-gold/20 group-hover:border-gold/50 transition-colors duration-300" />
              
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

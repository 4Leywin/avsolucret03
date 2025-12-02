import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Shield, Droplets, Layers } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Pulido Diamantado y Vitrificado',
    description: 'Restauramos el brillo original de tus superficies con tecnología de punta y acabados de cristal.',
    features: ['Mármol', 'Granito', 'Terrazo'],
  },
  {
    icon: Shield,
    title: 'Pulido y Sellado de Pisos',
    description: 'Protección duradera que mantiene tus pisos brillantes y resistentes al desgaste diario.',
    features: ['Concreto', 'Cemento pulido', 'Pisos industriales'],
  },
  {
    icon: Droplets,
    title: 'Decapado, Lavado y Sellado',
    description: 'Limpieza profunda y sellado especializado para lajas y piedras naturales.',
    features: ['Lajas', 'Piedra pizarra', 'Piedras naturales'],
  },
  {
    icon: Layers,
    title: 'Decapado y Sellado Porcelanato',
    description: 'Tratamiento especializado para porcelanatos de alto tránsito con máxima protección.',
    features: ['Porcelanato', 'Cerámicos', 'Alto tránsito'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones <span className="text-gold">profesionales</span>
          </h2>
          <p className="text-muted-foreground">
            Ofrecemos servicios integrales de restauración y mantenimiento de superficies 
            con los más altos estándares de calidad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 group"
            >
              {/* Gold border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
              
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

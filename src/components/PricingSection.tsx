import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Básico',
    description: 'Ideal para mantenimiento',
    price: 'Desde S/15',
    unit: 'por m²',
    features: [
      'Pulido básico',
      'Limpieza profunda',
      'Sellado simple',
      'Garantía 6 meses',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Restauración completa',
    price: 'Desde S/25',
    unit: 'por m²',
    features: [
      'Pulido diamantado',
      'Vitrificado profesional',
      'Sellado premium',
      'Garantía 1 año',
      'Mantenimiento incluido',
    ],
    popular: true,
  },
  {
    name: 'Empresarial',
    description: 'Para grandes espacios',
    price: 'Cotización',
    unit: 'personalizada',
    features: [
      'Evaluación in situ',
      'Proyecto a medida',
      'Precios por volumen',
      'Garantía extendida',
      'Soporte prioritario',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Precios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Paquetes y <span className="text-gold">Precios</span>
          </h2>
          <p className="text-muted-foreground">
            Soluciones flexibles adaptadas a tus necesidades y presupuesto.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? 'bg-card border-2 border-gold shadow-gold'
                  : 'bg-card border border-border shadow-card'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gold text-primary-foreground text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="font-heading text-4xl font-bold text-foreground">{pkg.price}</div>
                <div className="text-sm text-muted-foreground">{pkg.unit}</div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      pkg.popular ? 'bg-gold/20' : 'bg-secondary'
                    }`}>
                      <Check className={`w-3 h-3 ${pkg.popular ? 'text-gold' : 'text-muted-foreground'}`} />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? 'gold' : 'goldOutline'}
                className="w-full"
                asChild
              >
                <a 
                  href={`https://wa.me/51961801932?text=Hola, me interesa el paquete ${pkg.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Solicitar Cotización
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Los precios pueden variar según el estado de la superficie y las condiciones del espacio. 
          Cotización exacta tras evaluación.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;

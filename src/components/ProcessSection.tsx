import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Wrench, Gem, Sparkles, CheckCircle, Handshake } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Evaluación',
    description: 'Visitamos tu espacio para evaluar el estado de las superficies y determinar el tratamiento adecuado.',
  },
  {
    icon: Wrench,
    title: 'Preparación',
    description: 'Preparamos el área de trabajo con los equipos y materiales necesarios para garantizar un proceso limpio.',
  },
  {
    icon: Gem,
    title: 'Pulido Diamantado',
    description: 'Aplicamos técnicas de pulido con discos diamantados de diferentes granulometrías para restaurar el brillo.',
  },
  {
    icon: Sparkles,
    title: 'Vitrificado / Sellado',
    description: 'Aplicamos productos profesionales para vitrificar o sellar la superficie según sus necesidades.',
  },
  {
    icon: CheckCircle,
    title: 'Acabado Final',
    description: 'Realizamos los últimos detalles para lograr un acabado perfecto con brillo espejo.',
  },
  {
    icon: Handshake,
    title: 'Entrega y Recomendaciones',
    description: 'Entregamos el trabajo terminado con recomendaciones de mantenimiento para prolongar los resultados.',
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Nuestro Proceso
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo <span className="text-gold">trabajamos</span>
          </h2>
          <p className="text-muted-foreground">
            Un proceso profesional y transparente de principio a fin para garantizar resultados excepcionales.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold to-gold/30 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="card-premium p-6 lg:p-8">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                      <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0 lg:hidden">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gold uppercase tracking-wider">
                          Paso {index + 1}
                        </span>
                        <h3 className="font-heading text-xl font-semibold text-foreground mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center icon */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card border-2 border-gold items-center justify-center z-10">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>

                {/* Empty space for other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

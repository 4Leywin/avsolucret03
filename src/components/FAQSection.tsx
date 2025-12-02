import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cuánto tiempo dura el proceso de pulido diamantado?',
    answer: 'El tiempo varía según el tamaño del área y el estado de la superficie. En promedio, un proyecto residencial puede tomar entre 1 a 3 días. Proyectos comerciales más grandes pueden requerir más tiempo.',
  },
  {
    question: '¿Qué tipos de superficies pueden pulir?',
    answer: 'Trabajamos con una amplia variedad de superficies: mármol, granito, terrazo, porcelanato, concreto, lajas, piedra pizarra, cuarzo y mosaicos. Cada tipo de superficie requiere un tratamiento especializado.',
  },
  {
    question: '¿Cuánto tiempo dura el brillo después del pulido?',
    answer: 'Con el mantenimiento adecuado, el brillo puede durar entre 3 a 5 años. Ofrecemos recomendaciones de cuidado y productos de mantenimiento para prolongar los resultados.',
  },
  {
    question: '¿Ofrecen garantía por el trabajo realizado?',
    answer: 'Sí, todos nuestros trabajos cuentan con garantía. La duración de la garantía depende del tipo de servicio, pero generalmente ofrecemos garantía de 1 año en pulido y vitrificado.',
  },
  {
    question: '¿Trabajan en toda Lima?',
    answer: 'Sí, cubrimos toda Lima Metropolitana y también realizamos trabajos en provincias para proyectos especiales. Contáctanos para más información sobre cobertura.',
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer: 'Puedes contactarnos por WhatsApp al 961 801 932 o llenar nuestro formulario de contacto. Programamos una visita gratuita para evaluar tu espacio y brindarte una cotización detallada.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Preguntas <span className="text-gold">Frecuentes</span>
            </h2>
            <p className="text-muted-foreground">
              Resolvemos tus dudas más comunes sobre nuestros servicios.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border-none shadow-soft overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-semibold text-foreground hover:text-gold hover:no-underline [&[data-state=open]]:text-gold border-b border-gold/0 [&[data-state=open]]:border-gold/30">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

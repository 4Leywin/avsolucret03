import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CuidadosPorcelanato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
              <a href="/#blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al Blog
              </a>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
                Porcelanato
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Manual de Cuidados del Porcelanato
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Preguntas frecuentes y cuidados preventivos para pisos de
                porcelanato de alto tránsito
              </p>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
                <img
                  src="/blog/02-blog.png"
                  alt="Cuidados del porcelanato"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-card p-8 rounded-2xl border border-gold/20 mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold" />
                  ¿Qué es el porcelanato?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El porcelanato es un material cerámico de alta densidad y baja
                  porosidad, fabricado mediante un proceso de prensado y cocción
                  a altas temperaturas. Es ideal para áreas de alto tránsito
                  debido a su durabilidad, resistencia al desgaste y facilidad
                  de mantenimiento. Sin embargo, requiere cuidados específicos
                  para mantener su apariencia impecable.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold" />
                Cuidados Diarios del Porcelanato
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    1. Limpieza rutinaria
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Para la limpieza diaria del porcelanato, sigue estos pasos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Barre o aspira regularmente para eliminar polvo y
                      partículas
                    </li>
                    <li>
                      Trapea con agua tibia y jabón neutro o limpiador
                      específico para porcelanato
                    </li>
                    <li>Usa un trapeador de microfibra o mopa húmeda</li>
                    <li>Evita exceso de agua, especialmente en las juntas</li>
                    <li>Seca con paño limpio si quedan residuos de agua</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    2. Limpieza de manchas difíciles
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Aunque el porcelanato es resistente a las manchas, ciertos
                    residuos requieren atención especial:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Grasa y aceite:</strong> Limpiador desengrasante
                      neutro
                    </li>
                    <li>
                      <strong>Café, vino o jugos:</strong> Agua tibia con
                      detergente neutro
                    </li>
                    <li>
                      <strong>Restos de cemento:</strong> Limpiador ácido
                      específico (¡solo después de la instalación!)
                    </li>
                    <li>
                      <strong>Marcas de zapatos:</strong> Paño húmedo con jabón
                      neutro
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    3. Cuidado de las juntas
                  </h3>
                  <p className="text-muted-foreground">
                    Las juntas son el punto más vulnerable del porcelanato.
                    Límpialas regularmente con un cepillo suave y solución de
                    agua con jabón neutro. Para juntas muy sucias, considera una
                    limpieza profunda profesional o renovación de la lechada.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-gold" />
                Errores Comunes a Evitar
              </h2>

              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-12">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No uses cera o productos que dejen residuos brillantes
                      artificiales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Evita limpiadores abrasivos o esponjas de metal que rayen
                      la superficie
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No uses ácidos fuertes (solo después de instalación bajo
                      supervisión)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No arrastres muebles pesados sin protección en las patas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Evita dejar agua estancada por tiempo prolongado en las
                      juntas
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-gold" />
                Mantenimiento Profesional
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Decapado profesional
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Con el tiempo, el porcelanato puede acumular capas de
                    suciedad, residuos de limpiadores y opacidad superficial. El
                    decapado profesional incluye:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Eliminación profunda de residuos acumulados</li>
                    <li>Limpieza intensiva de juntas</li>
                    <li>Recuperación del brillo original</li>
                    <li>Se recomienda cada 1-2 años en alto tránsito</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Sellado protector
                  </h3>
                  <p className="text-muted-foreground">
                    Aunque el porcelanato es menos poroso que otras superficies,
                    el sellado de las juntas es fundamental para prevenir
                    manchas y humedad. Un sellador de calidad protege las
                    juntas, facilita la limpieza y previene el crecimiento de
                    moho y hongos.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Pulido y vitrificado
                  </h3>
                  <p className="text-muted-foreground">
                    Para porcelanatos de alto tránsito que han perdido brillo,
                    el pulido y vitrificado profesional restaura la superficie
                    eliminando micro-rayones y opacidad. Ideal para espacios
                    comerciales y áreas de mucho uso.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿El porcelanato se mancha fácilmente?
                  </h4>
                  <p className="text-muted-foreground">
                    No, el porcelanato es muy resistente a las manchas por su
                    baja porosidad. Sin embargo, las juntas sí pueden mancharse
                    si no se limpian regularmente.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cada cuánto debo hacer limpieza profunda?
                  </h4>
                  <p className="text-muted-foreground">
                    En zonas residenciales de tránsito normal, cada 12-18 meses.
                    En áreas comerciales o alto tránsito, cada 6-12 meses.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Por qué mi porcelanato se ve opaco?
                  </h4>
                  <p className="text-muted-foreground">
                    La opacidad puede deberse a acumulación de residuos de
                    limpiadores, suciedad o micro-rayones por el tránsito. Un
                    decapado profesional lo devolverá a su estado original.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Puedo usar vinagre para limpiar porcelanato?
                  </h4>
                  <p className="text-muted-foreground">
                    Aunque algunos lo recomiendan, no es ideal. El vinagre es
                    ácido y puede deteriorar las juntas con el tiempo. Es mejor
                    usar limpiadores neutros específicos para porcelanato.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Las juntas deben sellarse?
                  </h4>
                  <p className="text-muted-foreground">
                    Sí, especialmente en baños, cocinas y áreas húmedas. El
                    sellado de juntas previene manchas, humedad y crecimiento de
                    moho.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/30 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas restaurar tu porcelanato?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ofrecemos servicios especializados de decapado, sellado y
                  restauración para porcelanato de alto tránsito. Recupera el
                  brillo original de tus pisos.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a
                    href="https://wa.me/51961801932?text=Hola, necesito información sobre restauración de porcelanato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Cotización
                  </a>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CuidadosPorcelanato;

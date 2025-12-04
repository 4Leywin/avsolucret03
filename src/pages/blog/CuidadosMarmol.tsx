import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CuidadosMarmol = () => {
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
                Mármol
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cuidados Preventivos del Mármol
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Guía completa de mantenimiento y cuidados para mantener tu
                mármol en perfectas condiciones
              </p>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
                <img
                  src="/blog/01-blog.png"
                  alt="Cuidados del mármol"
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
                  ¿Por qué es importante cuidar el mármol?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El mármol es una piedra natural porosa y delicada que requiere
                  cuidados específicos. Su belleza y elegancia pueden mantenerse
                  por décadas con el mantenimiento adecuado. Al ser una roca
                  calcárea, es sensible a ácidos y puede mancharse fácilmente si
                  no se protege correctamente.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold" />
                Cuidados Diarios Recomendados
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    1. Limpieza diaria con productos neutros
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Utiliza únicamente agua tibia y jabón neutro (pH 7) para la
                    limpieza diaria. Evita productos de limpieza ácidos como
                    vinagre, limón o limpiadores multiusos convencionales.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Usa paños suaves de microfibra</li>
                    <li>Evita estropajos o esponjas abrasivas</li>
                    <li>Seca inmediatamente después de limpiar</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    2. Protección contra derrames
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Limpia inmediatamente cualquier derrame, especialmente de
                    líquidos ácidos como:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Jugo de frutas cítricas (naranja, limón)</li>
                    <li>Vino, café y refrescos</li>
                    <li>Productos de limpieza ácidos</li>
                    <li>Productos de belleza (perfumes, esmaltes)</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    3. Uso de posavasos y manteles
                  </h3>
                  <p className="text-muted-foreground">
                    Protege tu mármol usando siempre posavasos bajo vasos y
                    botellas. Utiliza manteles individuales o salvamanteles bajo
                    platos calientes y objetos decorativos.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-gold" />
                Qué NO hacer con el mármol
              </h2>

              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-12">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Nunca uses limpiadores ácidos (vinagre, limón, productos
                      con amoníaco)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No utilices limpiadores abrasivos o polvos de limpieza
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Evita colocar objetos calientes directamente sobre el
                      mármol
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No uses estropajos de metal o esponjas abrasivas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>No dejes líquidos derramados sin limpiar</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-gold" />
                Mantenimiento Preventivo
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Sellado profesional (cada 1-2 años)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El sellado es fundamental para proteger el mármol de manchas
                    y humedad. Un sellador de calidad crea una barrera
                    protectora invisible que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Repele líquidos y previene manchas</li>
                    <li>Facilita la limpieza diaria</li>
                    <li>Protege contra la humedad</li>
                    <li>Mantiene el brillo natural</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Pulido diamantado profesional
                  </h3>
                  <p className="text-muted-foreground">
                    Con el tiempo, el mármol puede perder su brillo por el
                    tránsito y uso diario. El pulido diamantado restaura el
                    brillo original eliminando micro-rayones y opacidad
                    superficial. Se recomienda cada 2-3 años dependiendo del
                    tránsito.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cada cuánto debo sellar mi piso de mármol?
                  </h4>
                  <p className="text-muted-foreground">
                    Se recomienda sellar el mármol cada 1 a 2 años, dependiendo
                    del tránsito. Zonas de alto tráfico pueden requerir sellado
                    anual.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cómo puedo saber si mi mármol necesita sellado?
                  </h4>
                  <p className="text-muted-foreground">
                    Coloca unas gotas de agua sobre el mármol. Si el agua se
                    absorbe en menos de 5 minutos, es hora de volver a sellar.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿El mármol opaco se puede recuperar?
                  </h4>
                  <p className="text-muted-foreground">
                    Sí, mediante pulido diamantado profesional se puede
                    restaurar el brillo original del mármol eliminando la capa
                    opaca superficial.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Puedo usar cera para dar brillo al mármol?
                  </h4>
                  <p className="text-muted-foreground">
                    No se recomienda. La cera puede crear una capa amarillenta
                    con el tiempo y dificultar futuros tratamientos
                    profesionales.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/30 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas restaurar tu mármol?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Contamos con el equipo y experiencia para devolver el brillo
                  original a tus superficies de mármol. Solicita una evaluación
                  gratuita.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a
                    href="https://wa.me/51961801932?text=Hola, necesito información sobre restauración de mármol"
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

export default CuidadosMarmol;

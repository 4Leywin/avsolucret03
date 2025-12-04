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

const CuidadosLajas = () => {
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
                Lajas
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cuidados de Lajas y Mosaicos
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Manual de cuidados preventivos para lajas, mosaicos Rossello y
                cuarzo
              </p>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
                <img
                  src="/blog/03-blog.png"
                  alt="Cuidados de lajas y mosaicos"
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
                  Características de las piedras naturales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las lajas, mosaicos y piedras naturales como el cuarzo son
                  materiales porosos con texturas únicas y belleza natural. Cada
                  pieza es diferente, lo que les da un carácter especial. Sin
                  embargo, esta porosidad requiere cuidados específicos para
                  mantener su apariencia y protegerlas de manchas, humedad y
                  desgaste. El sellado y mantenimiento adecuado son esenciales
                  para preservar su belleza por décadas.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold" />
                Cuidados Preventivos para Lajas
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    1. Limpieza diaria correcta
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Las lajas tienen texturas rugosas que atrapan suciedad
                    fácilmente. Para su limpieza diaria:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Barre o aspira regularmente para eliminar arena y
                      partículas
                    </li>
                    <li>Usa agua tibia con jabón neutro (pH 7)</li>
                    <li>
                      Utiliza cepillo de cerdas suaves para texturas profundas
                    </li>
                    <li>Enjuaga bien para eliminar residuos de jabón</li>
                    <li>Seca con paño absorbente o deja secar naturalmente</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    2. Protección contra manchas
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Las lajas sin sellar absorben líquidos rápidamente.
                    Protégelas de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Aceites y grasas (especialmente en cocinas y parrillas)
                    </li>
                    <li>Vino, café y bebidas con color</li>
                    <li>Productos químicos de limpieza agresivos</li>
                    <li>Hojas y materia orgánica (en exteriores)</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    <strong>Importante:</strong> Limpia derrames inmediatamente
                    para evitar manchas permanentes.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    3. Cuidado en zonas húmedas
                  </h3>
                  <p className="text-muted-foreground">
                    En baños, duchas y áreas de piscina, las lajas están
                    constantemente expuestas a humedad. Es fundamental mantener
                    una buena ventilación y limpieza para prevenir moho, hongos
                    y manchas de humedad. El sellado en estas áreas debe
                    renovarse con mayor frecuencia.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Cuidados para Mosaicos Rossello
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Características especiales
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Los mosaicos Rossello son piezas artesanales de cemento con
                    diseños únicos. Requieren cuidados similares a las lajas
                    pero con algunas consideraciones especiales:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Son más porosos que las piedras naturales</li>
                    <li>
                      Los colores pueden desvanecerse sin sellado adecuado
                    </li>
                    <li>Necesitan sellado cada 1-2 años obligatoriamente</li>
                    <li>Evita limpiadores ácidos que decoloren el cemento</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Limpieza recomendada
                  </h3>
                  <p className="text-muted-foreground">
                    Usa exclusivamente agua y jabón neutro. Evita cualquier
                    producto químico fuerte, ya que los mosaicos Rossello pueden
                    absorber pigmentos y químicos que alteren permanentemente
                    sus colores característicos.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Mantenimiento de Cuarzo
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Ventajas del cuarzo
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El cuarzo es una superficie engineered (cuarzo natural +
                    resina) más resistente que las piedras naturales. Sus
                    ventajas incluyen:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Baja porosidad, no requiere sellado frecuente</li>
                    <li>Mayor resistencia a manchas y rayones</li>
                    <li>Fácil mantenimiento diario</li>
                    <li>Ideal para encimeras y áreas de trabajo</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Cuidados específicos del cuarzo
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Limpia con agua y jabón suave o limpiador para cuarzo
                    </li>
                    <li>No expongas a calor extremo (usa salvamanteles)</li>
                    <li>Evita productos abrasivos o limpiadores con lejía</li>
                    <li>
                      Limpia derrames inmediatamente, aunque es resistente
                    </li>
                    <li>No uses la superficie como tabla de cortar</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-gold" />
                Errores Comunes que Dañan las Piedras
              </h2>

              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-12">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Usar limpiadores ácidos (vinagre, limón, productos con
                      ácido muriático)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      No sellar piedras porosas después de la instalación
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Usar hidrolavadora a alta presión en piedras delicadas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Dejar hojas o materia orgánica sobre lajas en exteriores
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Ignorar manchas de humedad o moho en juntas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Aplicar cera o selladores inadecuados</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-gold" />
                Mantenimiento Profesional
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Decapado y lavado profundo
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El decapado profesional elimina capas de suciedad, residuos
                    y eflorescencias (manchas blancas de sales) que se acumulan
                    con el tiempo. Este servicio incluye:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Limpieza profunda con productos específicos</li>
                    <li>Eliminación de manchas difíciles</li>
                    <li>Preparación de la superficie para sellado</li>
                    <li>Restauración del color original</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Sellado protector profesional
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    El sellado es ESENCIAL para lajas y mosaicos. Un sellador
                    profesional:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Crea una barrera contra manchas y humedad</li>
                    <li>Realza los colores naturales de la piedra</li>
                    <li>Facilita la limpieza diaria</li>
                    <li>Protege contra eflorescencias</li>
                    <li>Debe renovarse cada 1-2 años según tránsito</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Restauración de lajas antiguas
                  </h3>
                  <p className="text-muted-foreground">
                    Lajas antiguas con manchas profundas o desgaste pueden
                    restaurarse mediante decapado intensivo, tratamiento de
                    manchas específicas y sellado multicapa. Este proceso
                    devuelve la belleza original a piedras que parecían
                    irrecuperables.
                  </p>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cada cuánto debo sellar mis lajas?
                  </h4>
                  <p className="text-muted-foreground">
                    En interiores, cada 1-2 años. En exteriores expuestos a
                    clima y tráfico, cada 6-12 meses. Haz la prueba del agua: si
                    absorbe en menos de 5 minutos, necesita sellado.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Qué son las manchas blancas en mis lajas?
                  </h4>
                  <p className="text-muted-foreground">
                    Son eflorescencias: sales minerales que migran desde el
                    sustrato. Se eliminan con limpieza especializada y se
                    previenen con sellado adecuado y barrera de humedad.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Puedo usar hidrolavadora en lajas exteriores?
                  </h4>
                  <p className="text-muted-foreground">
                    Con precaución y a presión baja/media. Alta presión puede
                    dañar juntas y la superficie de piedras delicadas. Es mejor
                    la limpieza profesional con productos específicos.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Los mosaicos Rossello se pueden restaurar si están
                    manchados?
                  </h4>
                  <p className="text-muted-foreground">
                    Sí, en la mayoría de casos. El decapado profesional y
                    sellado pueden recuperar mosaicos muy manchados, aunque
                    algunas manchas profundas pueden ser permanentes.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿El cuarzo necesita sellado como las lajas?
                  </h4>
                  <p className="text-muted-foreground">
                    No con la misma frecuencia. El cuarzo es menos poroso, pero
                    puede beneficiarse de un sellado ligero cada 2-3 años para
                    mantener su protección óptima.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/30 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas restaurar tus lajas o mosaicos?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ofrecemos servicios especializados de decapado, lavado
                  profundo y sellado para todo tipo de piedras naturales.
                  Recupera la belleza original de tus superficies.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a
                    href="https://wa.me/51961801932?text=Hola, necesito información sobre restauración de lajas y mosaicos"
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

export default CuidadosLajas;

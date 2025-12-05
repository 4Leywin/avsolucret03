import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Shield } from "lucide-react";

const surfaces = [
  {
    name: "Pulido diamantado vitrificado de Mosaicos empastados",
    image: "/gallery/pulido-diamantado-vitrificado.jpeg",
  },
  {
    name: "Pulido diamantado de Mármol crema Marfil - alto brillo",
    image: "/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
  },
  {
    name: "Pulido diamantado y sellado de concreto expuesto",
    image: "/gallery/pulido-diamantado-y-sellado.jpeg",
  },
  {
    name: "Pulido diamantado de mármol Travertino",
    image: "/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
  },
  {
    name: "Decapado y sellado de lajas",
    image: "/gallery/decapado-y-sellado-de-lajas.jpeg",
  },
  {
    name: "Pulido diamantado de losetas de granito - Terrazo",
    image: "/gallery/pulido-diamantado-de-losetas-de-granito-terrazo.jpeg",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Excelencia en cada <span className="text-gold">superficie</span>
            </h2>

            <div className="p-6 rounded-xl border border-gold/30 bg-card mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AV SOLUCRET</strong> es una
                empresa especializada en el pulido diamantado, vitrificado,
                sellado y restauración profesional de superficies en Lima –
                Perú. Trabajamos con maquinaria industrial, insumos de alta
                calidad y un equipo técnico especializado para garantizar
                acabados brillantes, resistentes y duraderos. Nos enfocamos en
                mármol, granito, terrazo, concreto, porcelanato y lajas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    Visión
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ser la empresa líder en Perú en restauración y protección de
                    superficies, reconocida por calidad, puntualidad e
                    innovación.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    Misión
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Brindar soluciones profesionales en pulido diamantado,
                    vitrificado, sellado e impermeabilización, con equipos
                    modernos y un servicio técnico responsable.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm text-muted-foreground">
                  Certificados
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-sm text-muted-foreground">
                  Garantizados
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 grid-rows-3 gap-3 h-[550px]"
          >
            {surfaces.map((surface, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <motion.div
                  key={surface.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`relative rounded-xl overflow-hidden group ${
                    isLarge ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <img
                    src={surface.image}
                    alt={surface.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium text-cream">
                      {surface.name}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

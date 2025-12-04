import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Cuidados preventivos del mármol",
    excerpt:
      "Guía completa de mantenimiento y cuidados para mantener tu mármol en perfectas condiciones.",
    image: "/blog/01-blog.png",
    readTime: "5 min",
    category: "Mármol",
    slug: "/blog/cuidados-marmol",
  },
  {
    title: "Manual de cuidados del porcelanato",
    excerpt:
      "Preguntas frecuentes y cuidados preventivos para pisos de porcelanato de alto tránsito.",
    image: "/blog/02-blog.png",
    readTime: "4 min",
    category: "Porcelanato",
    slug: "/blog/cuidados-porcelanato",
  },
  {
    title: "Cuidados de lajas y mosaicos",
    excerpt:
      "Manual de cuidados preventivos para lajas, mosaicos Rossello y cuarzo.",
    image: "/blog/03-blog.png",
    readTime: "6 min",
    category: "Lajas",
    slug: "/blog/cuidados-lajas",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Blog & Consejos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cuidados <span className="text-gold">Preventivos</span>
          </h2>
          <p className="text-muted-foreground">
            Preguntas frecuentes y manuales de cuidados para mármol,
            porcelanato, laja, mosaicos Rossello y cuarzo.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium overflow-hidden group cursor-pointer block"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold/90 text-primary-foreground text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime} lectura</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

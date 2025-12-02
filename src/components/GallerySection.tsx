import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  { id: 1, title: 'Pulido de Mármol', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop' },
  { id: 2, title: 'Vitrificado Granito', thumbnail: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop' },
  { id: 3, title: 'Restauración Terrazo', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop' },
  { id: 4, title: 'Sellado de Lajas', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop' },
  { id: 5, title: 'Pulido Porcelanato', thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=500&fit=crop' },
  { id: 6, title: 'Acabado Final', thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=350&fit=crop' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Galería de Trabajos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Trabajos en <span className="text-gold">Acción</span>
          </h2>
          <p className="text-muted-foreground">
            Procesos reales de pulido y restauración. Mira cómo transformamos superficies.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href="https://www.tiktok.com/@avsolucret"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block break-inside-avoid group relative rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-cream">{video.title}</span>
              </div>

              {/* Gold accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg" asChild>
            <a href="https://www.tiktok.com/@avsolucret" target="_blank" rel="noopener noreferrer">
              Ver más en TikTok
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Puedes colocar vídeos en `public/gallery/*.mp4` y referenciarlos en `src`.
const gallery_content = [
  { id: 1, type: 'video', title: 'Lavado', src: '/gallery/01-gallery.mp4' },
  { id: 8, type: 'image', title: 'Mantenimiento de lajas', src: '/gallery/07-gallery.jpg' },
  { id: 3, type: 'video', title: 'Mantenimiento de lajas', src: '/gallery/02-gallery.mp4' },
  { id: 5, type: 'image', title: 'Lavado y Sellado', src: '/gallery/05-gallery.jpg' },
  { id: 7, type: 'video', title: 'Decapado y sellado de porcelanato', src: '/gallery/04-gallery.mp4' },
  { id: 6, type: 'video', title: 'Pulido y sellado de mesas de mármol', src: '/gallery/03-gallery.mp4' },
  { id: 2, type: 'image', title: 'Pulido y vitrificado de concreto', src: '/gallery/06-gallery.jpg' },
  { id: 9, type: 'image', title: 'Pulido y sellado de mesas de mármol', src: '/gallery/08-gallery.jpg' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

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
          {gallery_content.map((item, index) => (
            <motion.a
              key={item.id}
              href="https://www.tiktok.com/@avsolucret"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (item.type === 'video') {
                  e.preventDefault();
                  // Pause currently playing video (if different)
                  if (playingId && playingId !== item.id) {
                    const prev = videoRefs.current[playingId];
                    prev?.pause();
                  }

                  const v = videoRefs.current[item.id];
                  if (!v) return;
                  if (v.paused) {
                    v.play();
                    setPlayingId(item.id);
                  } else {
                    v.pause();
                    setPlayingId(null);
                  }
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block break-inside-avoid group relative rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              {item.type === 'image' && (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {item.type === 'video' && (
                <div className="w-full bg-black">
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    muted
                    playsInline
                  />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play button (visible for video items) */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-cream">{item.title}</span>
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

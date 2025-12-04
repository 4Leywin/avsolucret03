import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// 6 items: videos en los costados, imágenes en el medio
const gallery_content = [
  {
    id: 1,
    type: "video",
    title: "Cristalizado Premium de Mármol kalliston white",
    src: "/gallery/10-gallery.mp4",
    position: "left", // video izquierda
  },
  {
    id: 2,
    type: "video",
    title: "Cristalizado Premiun de Mosaicos Empastados",
    src: "/gallery/11-gallery.mp4",
    position: "left", // video izquierda
  },
  {
    id: 3,
    type: "image",
    title: "Pulido lavado y sellado de Terracota o arcilla",
    src: "/gallery/14-gallery.jpg",
    position: "center", // imagen centro
  },
  {
    id: 4,
    type: "image",
    title: "Decapado lavado y sellado de lajas",
    src: "/gallery/15-gallery.jpg",
    position: "center", // imagen centro
  },
  {
    id: 5,
    type: "video",
    title: "Pulido diamantado Vitrificado de losetas de Granito- Terrazo",
    src: "/gallery/12-gallery.mp4",
    position: "right", // video derecha
  },
  {
    id: 6,
    type: "video",
    title: "Cristalizado Premium de Mármol Travertino",
    src: "/gallery/13-gallery.mp4",
    position: "right", // video derecha
  },
];

interface GalleryItemProps {
  item: (typeof gallery_content)[0];
  index: number;
  isInView: boolean;
  playingId: number | null;
  onPlayClick: (id: number) => void;
  videoRefs: React.MutableRefObject<Record<number, HTMLVideoElement | null>>;
}

const GalleryItem = ({
  item,
  index,
  isInView,
  playingId,
  onPlayClick,
  videoRefs,
}: GalleryItemProps) => {
  const itemRef = useRef(null);

  return (
    <motion.a
      key={item.id}
      ref={itemRef}
      href="https://www.tiktok.com/@avsolucret"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (item.type === "video") {
          e.preventDefault();
          onPlayClick(item.id);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="block break-inside-avoid group relative rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300"
    >
      {item.type === "image" && (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {item.type === "video" && (
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
      {item.type === "video" && (
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
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handlePlayClick = (id: number) => {
    if (playingId && playingId !== id) {
      const prev = videoRefs.current[playingId];
      prev?.pause();
    }

    const v = videoRefs.current[id];
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlayingId(id);
    } else {
      v.pause();
      setPlayingId(null);
    }
  };

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
            Procesos reales de pulido y restauración. Mira cómo transformamos
            superficies.
          </p>
        </motion.div>

        {/* Grid con 3 columnas: videos izquierda, imágenes centro, videos derecha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Columna izquierda - Videos */}
          <div className="space-y-4">
            {gallery_content
              .filter((item) => item.position === "left")
              .map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index}
                  isInView={isInView}
                  playingId={playingId}
                  onPlayClick={handlePlayClick}
                  videoRefs={videoRefs}
                />
              ))}
          </div>

          {/* Columna central - Imágenes */}
          <div className="space-y-4">
            {gallery_content
              .filter((item) => item.position === "center")
              .map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index + 2}
                  isInView={isInView}
                  playingId={playingId}
                  onPlayClick={handlePlayClick}
                  videoRefs={videoRefs}
                />
              ))}
          </div>

          {/* Columna derecha - Videos */}
          <div className="space-y-4">
            {gallery_content
              .filter((item) => item.position === "right")
              .map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index + 4}
                  isInView={isInView}
                  playingId={playingId}
                  onPlayClick={handlePlayClick}
                  videoRefs={videoRefs}
                />
              ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg" asChild>
            <a
              href="https://www.tiktok.com/@avsolucret"
              target="_blank"
              rel="noopener noreferrer"
            >
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

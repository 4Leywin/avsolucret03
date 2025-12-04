import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Trabajos", href: "#gallery" },
  { name: "Proceso", href: "#process" },
  { name: "Precios", href: "#pricing" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20 bg-background md:bg-transparent">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/main/logo.png"
              alt="Logo Av Solucret"
              className="h-24 aspect-video object-contain "
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* <a
              href="tel:961801932"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>961 801 932</span>
            </a> */}
            <Button variant="gold" size="sm" asChild>
              <a
                href="https://wa.me/51961801932"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 lg:hidden z-40"
          >
            <nav className="flex flex-col p-6 gap-2 bg-white">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="py-4 px-4 text-lg font-heading font-medium text-foreground hover:text-gold hover:bg-gold/5 rounded-lg border-b border-gold/20 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-col gap-4"
              >
                {/* <a
                  href="tel:961801932"
                  className="flex items-center justify-center gap-2 py-3 text-muted-foreground"
                >
                  <Phone className="w-5 h-5" />
                  <span>961 801 932</span>
                </a> */}
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/51961801932"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar Ahora
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

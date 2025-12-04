import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coffeeDialogOpen, setCoffeeDialogOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À Propos" },
    { to: "/projects", label: "Projets" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-foreground hover:text-accent transition-smooth">
            Edi Sokens
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth ${
                    isActive
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              className="gradient-accent text-white hover:shadow-glow transition-smooth"
              onClick={() => setCoffeeDialogOpen(true)}
            >
              Prendre un café
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium transition-smooth ${
                    isActive
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              className="w-full gradient-accent text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                setCoffeeDialogOpen(true);
              }}
            >
              Prendre un café
            </Button>
          </div>
        )}

        {/* Global "Prendre un café" Dialog */}
        <Dialog open={coffeeDialogOpen} onOpenChange={setCoffeeDialogOpen}>
          <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] overflow-y-auto bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Envoyez-moi un message
              </DialogTitle>
            </DialogHeader>
            <ContactForm className="space-y-6 mt-4" />
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            Edi Sokenou
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
            <NavLink to="/contact">
              <Button className="gradient-accent text-white hover:shadow-glow transition-smooth">
                Prendre un café
              </Button>
            </NavLink>
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
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full gradient-accent text-white">
                Prendre un café
              </Button>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/edi-sokenou-042094331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1EYYA1WG4n/",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:edisokenou@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Edi Sokens</h3>
            <p className="text-muted-foreground text-sm">
              Développeur Web passionné par la création de solutions numériques élégantes et performantes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Projets
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Edi Sokens. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "edisokenou@gmail.com",
      href: "mailto:edisokenou@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+241 77 61 77 76",
      href: "tel:+24177617776",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Me Contacter
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            N'hésitez pas à me joindre pour toute question ou opportunité
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card shadow-strong animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
              <ContactForm />
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.label} className="p-6 bg-card hover:shadow-strong transition-smooth">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-semibold hover:text-accent transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-semibold">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Suivez-moi</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-smooth shadow-soft hover:shadow-strong"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-accent text-white">
                <p className="text-lg font-medium mb-2">Au plaisir de collaborer avec vous !</p>
                <p className="text-white/90">
                  Je réponds généralement dans les 24 heures, 
                  n'hésitez pas à me contacter directement par téléphone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

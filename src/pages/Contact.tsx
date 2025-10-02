import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    // Simulate form submission
    toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "edi.sokenou@example.com",
      href: "mailto:edi.sokenou@example.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Paris, France",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-accent text-white hover:shadow-glow transition-smooth"
                  size="lg"
                >
                  Envoyer le message
                </Button>
              </form>
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
                  Je réponds généralement dans les 24 heures. Pour les projets urgents, 
                  n'hésitez pas à me contacter directement par téléphone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-strong max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-2xl font-bold">Paris, France</p>
                <p className="text-white/90 mt-2">Disponible pour des projets à distance et sur site</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

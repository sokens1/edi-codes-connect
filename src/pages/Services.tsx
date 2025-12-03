import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Palette,
  Rocket,
  Settings,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

const iconMap = {
  Code2,
  Database,
  Palette,
  Rocket,
  Settings,
  Users,
} as const;

type ServiceRow = {
  id: string;
  title: string;
  description: string;
  icon_name: keyof typeof iconMap | null;
};

const Services = () => {
  const [services, setServices] = useState<ServiceRow[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, description, icon_name")
        .order("title", { ascending: true });

      if (!error && data) {
        setServices(
          data.map((row) => ({
            id: row.id as string,
            title: row.title as string,
            description: row.description as string,
            icon_name: (row.icon_name as keyof typeof iconMap | null) ?? null,
          }))
        );
      }

      setLoadingServices(false);
    };

    fetchServices();
  }, []);

  const workflow = [
    {
      number: "01",
      title: "Découverte & Analyse",
      description:
        "Compréhension approfondie de vos besoins, objectifs business et contraintes techniques.",
    },
    {
      number: "02",
      title: "Design & Prototypage",
      description:
        "Création de maquettes et prototypes interactifs pour valider l'approche avant le développement.",
    },
    {
      number: "03",
      title: "Développement",
      description:
        "Codage itératif avec revues régulières et tests continus pour garantir la qualité.",
    },
    {
      number: "04",
      title: "Tests & Déploiement",
      description:
        "Tests rigoureux et déploiement sécurisé avec formation des utilisateurs si nécessaire.",
    },
    {
      number: "05",
      title: "Maintenance & Support",
      description:
        "Suivi post-lancement, corrections de bugs et évolutions selon vos besoins.",
    },
  ];

  const faqs: { question: string; answer: string }[] = [];

  const benefits: string[] = [];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Mes Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Comment je peux vous aider à réaliser vos objectifs numériques
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingServices && (
              <p className="text-center text-muted-foreground col-span-full">
                Chargement des services...
              </p>
            )}
            {!loadingServices && services.length === 0 && (
              <p className="text-center text-muted-foreground col-span-full">
                Aucun service disponible pour le moment.
              </p>
            )}
            {!loadingServices &&
              services.map((service, index) => {
                const Icon =
                  (service.icon_name &&
                    iconMap[service.icon_name as keyof typeof iconMap]) ||
                  Code2;
                return (
                  <Card
                    key={service.id}
                    className="p-8 hover:shadow-strong transition-smooth animate-fade-in bg-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mon Processus de Travail</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {workflow.map((step, index) => (
              <Card
                key={step.number}
                className="p-6 hover:shadow-strong transition-smooth animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full gradient-accent text-white flex items-center justify-center font-bold text-xl shadow-glow">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me - contenu désormais piloté par la base (section désactivée si vide) */}
      {benefits.length > 0 && (
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pourquoi Travailler avec Moi
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-card shadow-strong">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="w-6 h-6 rounded-full gradient-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-muted-foreground text-lg">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - désactivée tant qu'elle n'est pas alimentée par la base */}
      {faqs.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Questions Fréquentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à discuter de votre prochain projet ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-moi pour un devis gratuit et discutons de comment je peux vous aider.
          </p>
          <a href="/contact">
            <Button size="lg" className="gradient-accent text-white hover:shadow-glow hover:scale-105 transition-smooth">
              Me contacter
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
  Code2,
  Database,
  Palette,
  Rocket,
  Settings,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Développement Frontend",
      description:
        "Création d'interfaces modernes et réactives avec React, Vue.js et Next.js. Design responsive et optimisation de performance pour une expérience utilisateur exceptionnelle.",
    },
    {
      icon: Database,
      title: "Développement Backend",
      description:
        "APIs robustes et scalables avec Node.js, Python et bases de données optimisées. Architecture microservices et solutions cloud-native.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Design d'interfaces élégantes avec Tailwind CSS et design systems. Prototypage et création de maquettes interactives.",
    },
    {
      icon: Rocket,
      title: "Développement Fullstack",
      description:
        "Solutions end-to-end complètes, de la conception à la mise en production. Gestion de projet et livraison dans les délais.",
    },
    {
      icon: Settings,
      title: "Conseil Technique",
      description:
        "Audit de code, architecture logicielle et recommandations pour optimiser vos projets existants.",
    },
    {
      icon: Users,
      title: "Formation & Mentoring",
      description:
        "Accompagnement d'équipes de développement et formation sur les technologies modernes et best practices.",
    },
  ];

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

  const faqs = [
    {
      question: "Quel est votre délai de livraison moyen ?",
      answer:
        "Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-3 semaines, tandis qu'une application complexe peut prendre 2-3 mois. Je fournis toujours une estimation détaillée après analyse de vos besoins.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer:
        "Absolument ! J'ai l'habitude de travailler avec des clients francophones et anglophones dans différents fuseaux horaires. La communication se fait via visioconférence, email et outils de gestion de projet.",
    },
    {
      question: "Proposez-vous de la maintenance après livraison ?",
      answer:
        "Oui, je propose différentes formules de maintenance : corrections de bugs, mises à jour de sécurité, ajout de nouvelles fonctionnalités. Nous pouvons établir un contrat adapté à vos besoins.",
    },
    {
      question: "Quelles sont vos modalités de paiement ?",
      answer:
        "Je travaille généralement avec un acompte de 30% au démarrage, 40% à mi-parcours et 30% à la livraison. Pour les projets au long cours, nous pouvons établir un paiement mensuel.",
    },
    {
      question: "Fournissez-vous le code source ?",
      answer:
        "Oui, vous recevez l'intégralité du code source avec la documentation technique. Vous êtes propriétaire de votre projet.",
    },
  ];

  const benefits = [
    "Expertise technique approfondie et veille technologique constante",
    "Communication transparente et réponses rapides",
    "Code propre, documenté et maintenable",
    "Respect des délais et du budget",
    "Approche centrée sur l'utilisateur final",
    "Tests rigoureux et assurance qualité",
  ];

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
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 hover:shadow-strong transition-smooth animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
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

      {/* Why Work With Me */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pourquoi Travailler avec Moi</h2>
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
                    <span className="text-muted-foreground text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
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

      {/* CTA Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à discuter de votre prochain projet ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-moi pour un devis gratuit et discutons de comment je peux vous aider.
          </p>
          <NavLink to="/contact">
            <Button size="lg" className="gradient-accent text-white hover:shadow-glow transition-smooth">
              Demander un devis
            </Button>
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Palette, Rocket, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  const technologies = [
    { name: "React", color: "text-[#61DAFB]" },
    { name: "Node.js", color: "text-[#68A063]" },
    { name: "Python", color: "text-[#3776AB]" },
    { name: "Vue.js", color: "text-[#42B883]" },
    { name: "Docker", color: "text-[#2496ED]" },
    { name: "AWS", color: "text-[#FF9900]" },
  ];

  const features = [
    {
      icon: Code2,
      title: "Frontend Expert",
      description: "Interfaces modernes et réactives avec React, Vue.js et Next.js",
    },
    {
      icon: Database,
      title: "Backend Robuste",
      description: "APIs performantes avec Node.js, Python et bases de données optimisées",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Déploiement et scaling sur AWS, Docker et architectures serverless",
    },
    {
      icon: Palette,
      title: "Design Moderne",
      description: "UI/UX élégantes avec Tailwind CSS et design systems",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation et vitesse pour une expérience utilisateur exceptionnelle",
    },
    {
      icon: Zap,
      title: "Agilité",
      description: "Développement rapide et itératif avec les meilleures pratiques",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Edi Sokenou
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Développeur Web | Créateur de solutions numériques élégantes
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Je transforme vos idées en applications web performantes et modernes
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <NavLink to="/projects">
              <Button size="lg" className="gradient-accent text-white hover:shadow-glow transition-smooth">
                Voir mes projets
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button size="lg" variant="outline" className="hover:bg-secondary transition-smooth">
                Me contacter
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={profilePhoto}
                alt="Edi Sokenou"
                className="rounded-2xl shadow-strong w-full max-w-md mx-auto hover:shadow-glow transition-smooth"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À Propos de Moi</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Développeur web fullstack passionné avec une expertise en technologies modernes. 
                Je crée des expériences numériques qui allient esthétique et performance.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Mon approche combine créativité technique et rigueur professionnelle pour 
                livrer des solutions qui dépassent les attentes.
              </p>
              <NavLink to="/about">
                <Button variant="outline" className="hover:bg-secondary transition-smooth">
                  En savoir plus sur moi
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies Maîtrisées</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 animate-fade-in hover:scale-110 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-card shadow-soft flex items-center justify-center hover:shadow-strong transition-smooth">
                  <span className={`text-2xl font-bold ${tech.color}`}>{tech.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes Expertises</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-strong transition-smooth animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer vos idées en réalité ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de votre prochain projet et créons quelque chose d'extraordinaire ensemble.
          </p>
          <NavLink to="/contact">
            <Button size="lg" className="gradient-accent text-white hover:shadow-glow transition-smooth">
              Démarrons un projet
            </Button>
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

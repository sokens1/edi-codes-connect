import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Application e-commerce complète avec panier, paiements et gestion des commandes.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Terminé",
      liveUrl: "https://ecommerce-demo.example.com",
    },
    {
      id: 2,
      title: "Gestionnaire de Tâches",
      description: "Outil de gestion de projets avec tableaux Kanban et collaboration en temps réel.",
      image: taskManagerImg,
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      status: "En cours",
      liveUrl: "https://taskmanager-demo.example.com",
    },
    {
      id: 3,
      title: "Portfolio Créatif",
      description: "Site portfolio moderne avec animations fluides et design sur mesure.",
      image: portfolioImg,
      technologies: ["React", "Framer Motion", "Next.js"],
      status: "Terminé",
      liveUrl: "https://portfolio-demo.example.com",
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Mes Réalisations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Une sélection de mes projets récents qui démontrent mon expertise et ma passion
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base bg-card border-border/50 rounded-full shadow-lg focus:shadow-xl focus:border-primary/50 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-strong transition-smooth group animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="default"
                      className="flex-1 gradient-accent text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Voir le projet
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <NavLink to={`/project/${project.id}`}>
                        Détails
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

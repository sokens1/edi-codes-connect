import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState("Tout");

  const statuses = ["Tout", "En cours", "Terminé"];

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

  const filteredProjects =
    selectedStatus === "Tout"
      ? projects
      : projects.filter((p) => p.status === selectedStatus);

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

      {/* Filters */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {statuses.map((status) => (
              <Button
                key={status}
                onClick={() => setSelectedStatus(status)}
                variant={selectedStatus === status ? "default" : "outline"}
                className={
                  selectedStatus === status
                    ? "gradient-accent text-white"
                    : "hover:bg-secondary"
                }
              >
                {status}
              </Button>
            ))}
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
                  <Badge 
                    className="absolute top-4 right-4 bg-primary text-primary-foreground"
                    variant={project.status === "Terminé" ? "default" : "secondary"}
                  >
                    {project.status}
                  </Badge>
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

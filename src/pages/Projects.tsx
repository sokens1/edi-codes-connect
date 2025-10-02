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
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  const categories = ["Tout", "Fullstack", "Frontend", "Backend"];

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Application e-commerce complète avec panier, paiements et gestion des commandes.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Fullstack",
    },
    {
      id: 2,
      title: "Gestionnaire de Tâches",
      description: "Outil de gestion de projets avec tableaux Kanban et collaboration en temps réel.",
      image: taskManagerImg,
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      category: "Fullstack",
    },
    {
      id: 3,
      title: "Portfolio Créatif",
      description: "Site portfolio moderne avec animations fluides et design sur mesure.",
      image: portfolioImg,
      technologies: ["React", "Framer Motion", "Next.js"],
      category: "Frontend",
    },
  ];

  const filteredProjects =
    selectedCategory === "Tout"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "gradient-accent text-white"
                    : "hover:bg-secondary"
                }
              >
                {category}
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
              <NavLink key={project.id} to={`/project/${project.id}`}>
                <Card
                  className="overflow-hidden hover:shadow-strong transition-smooth cursor-pointer group animate-fade-in bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
                      <span className="text-white font-semibold">Voir le projet →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

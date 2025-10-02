import { useParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      subtitle: "Application web fullstack",
      image: ecommerceImg,
      description:
        "Développement d'une plateforme e-commerce complète permettant aux utilisateurs de parcourir des produits, gérer leur panier et effectuer des paiements sécurisés.",
      fullDescription:
        "Ce projet ambitieux a nécessité la mise en place d'une architecture scalable pour gérer un catalogue de milliers de produits, un système de panier dynamique, et une intégration complète avec Stripe pour les paiements. L'accent a été mis sur la performance et l'expérience utilisateur.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      role: "Lead Developer",
      myContributions: [
        "Architecture complète de l'application frontend et backend",
        "Mise en place du système de paiement avec Stripe",
        "Optimisation des performances et du référencement SEO",
        "Gestion d'état complexe avec Redux",
      ],
      challenges: [
        {
          title: "Gestion de l'inventaire en temps réel",
          solution:
            "Mise en place de WebSockets pour synchroniser les stocks en temps réel entre les utilisateurs.",
        },
        {
          title: "Performance avec un grand catalogue",
          solution:
            "Implémentation de la pagination, du lazy loading et de la mise en cache côté serveur.",
        },
      ],
      lessonsLearned:
        "Ce projet m'a permis de maîtriser l'intégration de systèmes de paiement et l'importance d'une architecture bien pensée pour la scalabilité.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Gestionnaire de Tâches",
      subtitle: "Outil de gestion de projets",
      image: taskManagerImg,
      description:
        "Application de gestion de projets avec tableaux Kanban, collaboration en temps réel et notifications.",
      fullDescription:
        "Un outil complet de gestion de tâches permettant aux équipes de collaborer efficacement avec des tableaux Kanban, des assignations de tâches, et des mises à jour en temps réel.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      role: "Fullstack Developer",
      myContributions: [
        "Développement de l'interface utilisateur avec Vue.js",
        "Intégration de Firebase pour la base de données temps réel",
        "Système de notifications et de collaboration",
        "Design responsive avec Tailwind CSS",
      ],
      challenges: [
        {
          title: "Synchronisation temps réel",
          solution: "Utilisation de Firebase Realtime Database pour des mises à jour instantanées.",
        },
      ],
      lessonsLearned: "Maîtrise de Vue.js et des bases de données en temps réel avec Firebase.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Portfolio Créatif",
      subtitle: "Site vitrine moderne",
      image: portfolioImg,
      description: "Site portfolio avec animations fluides et design sur mesure.",
      fullDescription:
        "Création d'un portfolio moderne avec des animations sophistiquées et une attention particulière au design et à l'expérience utilisateur.",
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      role: "Frontend Developer",
      myContributions: [
        "Design et développement de l'interface complète",
        "Animations fluides avec Framer Motion",
        "Optimisation SEO avec Next.js",
        "Performance et accessibilité",
      ],
      challenges: [
        {
          title: "Animations performantes",
          solution: "Optimisation avec Framer Motion et will-change CSS.",
        },
      ],
      lessonsLearned: "Importance des animations dans l'expérience utilisateur et optimisation Next.js.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const project = projects.find((p) => p.id === Number(id));
  const currentIndex = projects.findIndex((p) => p.id === Number(id));
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Projet non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl opacity-90">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-strong animate-fade-in"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 bg-card">
                <h3 className="font-semibold mb-2 text-muted-foreground">Rôle</h3>
                <p className="font-bold">{project.role}</p>
              </Card>
              <Card className="p-6 bg-card">
                <h3 className="font-semibold mb-2 text-muted-foreground">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <h3 className="font-semibold mb-2 text-muted-foreground">Liens</h3>
                <div className="flex gap-2">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Aperçu du Projet</h2>
                <p className="text-muted-foreground text-lg mb-4">{project.description}</p>
                <p className="text-muted-foreground text-lg">{project.fullDescription}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Technologies Utilisées</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-base py-2 px-4">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Mes Contributions</h2>
                <ul className="space-y-3">
                  {project.myContributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-lg">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Défis et Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} className="p-6 bg-card">
                      <h3 className="font-semibold text-xl mb-2">Défi : {challenge.title}</h3>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-accent">Solution :</span> {challenge.solution}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Leçons Apprises</h2>
                <p className="text-muted-foreground text-lg">{project.lessonsLearned}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {prevProject ? (
              <NavLink to={`/project/${prevProject.id}`}>
                <Button variant="outline" className="hover:bg-secondary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Projet Précédent
                </Button>
              </NavLink>
            ) : (
              <div></div>
            )}
            {nextProject ? (
              <NavLink to={`/project/${nextProject.id}`}>
                <Button variant="outline" className="hover:bg-secondary">
                  Projet Suivant
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </NavLink>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Users, TrendingUp, GraduationCap, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Toujours à l'affût des nouvelles technologies et méthodologies pour créer des solutions de pointe.",
    },
    {
      icon: Heart,
      title: "Qualité",
      description: "Code propre, maintenable et testé pour garantir des applications robustes et pérennes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe efficace et communication transparente pour des projets réussis.",
    },
    {
      icon: TrendingUp,
      title: "Apprentissage Continu",
      description: "Formation permanente pour rester au sommet de mon art et maîtriser les dernières tendances.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      type: "education",
      icon: GraduationCap,
      title: "Master en Informatique",
      description: "Spécialisation en développement web et architectures distribuées.",
    },
    {
      year: "2021",
      type: "work",
      icon: Briefcase,
      title: "Développeur Frontend",
      description: "Création d'interfaces utilisateur réactives pour des applications SaaS.",
    },
    {
      year: "2022",
      type: "work",
      icon: Briefcase,
      title: "Développeur Fullstack",
      description: "Développement end-to-end d'applications web complexes avec React et Node.js.",
    },
    {
      year: "2023",
      type: "work",
      icon: Briefcase,
      title: "Lead Developer",
      description: "Direction technique d'équipe et architecture de solutions cloud-native.",
    },
    {
      year: "2024",
      type: "work",
      icon: Briefcase,
      title: "Consultant Indépendant",
      description: "Accompagnement de clients dans leurs projets de transformation numérique.",
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "Python & Django", level: 85 },
    { name: "TypeScript", level: 92 },
    { name: "Cloud (AWS/Docker)", level: 88 },
    { name: "UI/UX Design", level: 80 },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Qui suis-je ?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Un développeur passionné qui transforme des lignes de code en expériences mémorables
          </p>
        </div>
      </section>

      {/* Detailed Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={profilePhoto}
                alt="Edi Sokenou au travail"
                className="rounded-2xl shadow-strong w-full hover:shadow-glow transition-smooth"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">Ma Philosophie de Travail</h2>
              <p className="text-muted-foreground text-lg">
                Le développement web est bien plus qu'écrire du code – c'est résoudre des problèmes 
                réels et créer des solutions qui améliorent la vie des utilisateurs.
              </p>
              <p className="text-muted-foreground text-lg">
                Je crois fermement en l'importance de la communication, de l'itération rapide et 
                de la qualité. Chaque projet est une opportunité d'apprendre et de repousser les 
                limites de ce qui est possible.
              </p>
              <p className="text-muted-foreground text-lg">
                Mon processus créatif combine analyse technique rigoureuse et sensibilité design 
                pour livrer des applications qui sont à la fois belles et performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mon Parcours</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-glow">
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-8">
                  <span className="text-sm font-semibold text-accent">{event.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Compétences Techniques</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-accent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 text-center hover:shadow-strong transition-smooth animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce qu'on dit de moi</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Edi est un développeur exceptionnel qui livre toujours un travail de qualité dans les délais.",
                author: "Marie Laurent",
                role: "Product Manager",
              },
              {
                text: "Sa capacité à comprendre les besoins business et les traduire en solutions techniques est remarquable.",
                author: "Thomas Dubois",
                role: "CEO, TechStart",
              },
              {
                text: "Code propre, architecture solide et excellente communication. Un vrai plaisir de travailler avec lui.",
                author: "Sophie Martin",
                role: "Tech Lead",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-strong transition-smooth animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default About;

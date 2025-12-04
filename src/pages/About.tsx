import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Lightbulb, Users, TrendingUp, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Photo de profil principale (dans public/)
const profilePhotoUrl = "/image sokens.jpg";
import { supabase } from "@/lib/supabaseClient";

type TimelineRow = {
  id: string;
  year: string;
  type: "education" | "work";
  title: string;
  description: string | null;
};

type SkillRow = {
  id: string;
  name: string;
  level: number;
};

type TestimonialRow = {
  id: string;
  author_name: string;
  author_role: string | null;
  content: string;
};

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

  const [timeline, setTimeline] = useState<TimelineRow[]>([]);
  const [skills, setSkills] = useState<SkillRow[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([]);
  const [testimonialForm, setTestimonialForm] = useState({
    author_name: "",
    author_role: "",
    content: "",
  });
  const [submittingTestimonial, setSubmittingTestimonial] = useState(false);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (!testimonialsScrollRef.current) return;
    const scrollAmount = 320; // Largeur d'une carte + gap
    const currentScroll = testimonialsScrollRef.current.scrollLeft;
    const newScroll = direction === "left" 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    testimonialsScrollRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [{ data: timelineData }, { data: skillsData }, { data: testimonialsData }] =
        await Promise.all([
          supabase
            .from("timeline_events")
            .select("id, year, type, title, description")
            .order("year", { ascending: true }),
          supabase
            .from("skills")
            .select("id, name, level")
            .order("level", { ascending: false }),
          supabase
            .from("testimonials")
            .select("id, author_name, author_role, content")
            .order("created_at", { ascending: false }),
        ]);

      if (timelineData) {
        setTimeline(
          timelineData.map((t) => ({
            id: t.id as string,
            year: t.year as string,
            type: t.type as "education" | "work",
            title: t.title as string,
            description: (t.description as string | null) ?? null,
          }))
        );
      }

      if (skillsData) {
        setSkills(
          skillsData.map((s) => ({
            id: s.id as string,
            name: s.name as string,
            level: s.level as number,
          }))
        );
      }

      if (testimonialsData) {
        setTestimonials(
          testimonialsData.map((t) => ({
            id: t.id as string,
            author_name: t.author_name as string,
            author_role: (t.author_role as string | null) ?? null,
            content: t.content as string,
          }))
        );
      }
    };

    fetchData();
  }, []);

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!testimonialForm.author_name.trim() || !testimonialForm.content.trim()) {
      toast.error("Merci d'indiquer votre nom et votre témoignage.");
      return;
    }

    if (testimonialForm.content.trim().length < 20) {
      toast.error("Le témoignage doit contenir au moins 20 caractères.");
      return;
    }

    setSubmittingTestimonial(true);

    const { error, data } = await supabase
      .from("testimonials")
      .insert({
        author_name: testimonialForm.author_name.trim(),
        author_role: testimonialForm.author_role.trim() || null,
        content: testimonialForm.content.trim(),
      })
      .select("id, author_name, author_role, content")
      .single();

    setSubmittingTestimonial(false);

    if (error || !data) {
      console.error(error);
      toast.error("Impossible d'enregistrer votre témoignage pour le moment.");
      return;
    }

    setTestimonials((prev) => [data as TestimonialRow, ...prev]);
    setTestimonialForm({ author_name: "", author_role: "", content: "" });
    toast.success("Merci pour votre témoignage !");
  };

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
                src={profilePhotoUrl}
                alt="Edi Sokens au travail"
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
          {/* Alignée clairement vers la droite, surtout sur mobile */}
          <div className="max-w-3xl ml-auto mr-2 sm:mr-4 lg:mr-12">
            {timeline.map((event, index) => (
              <div
                key={event.id}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-glow">
                  {(event.type === "education" ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  ))}
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
              <div
                key={skill.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
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
          <div className="max-w-5xl mx-auto relative">
            {testimonials.length > 0 && (
              <>
                {/* Navigation Buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-12">
                  <Button
                    onClick={() => scrollTestimonials("left")}
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth shadow-lg"
                    aria-label="Défiler vers la gauche"
                  >
                    <ChevronLeft className="w-5 h-5 text-accent" />
                  </Button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-12">
                  <Button
                    onClick={() => scrollTestimonials("right")}
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth shadow-lg"
                    aria-label="Défiler vers la droite"
                  >
                    <ChevronRight className="w-5 h-5 text-accent" />
                  </Button>
                </div>

                {/* Scrollable Container */}
                <div 
                  ref={testimonialsScrollRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                      <Card
                        key={`${testimonial.id}-${index}`}
                        className="min-w-[280px] max-w-sm p-6 bg-card hover:shadow-strong transition-smooth flex-shrink-0"
                      >
                        <p className="text-muted-foreground italic mb-4 line-clamp-4">
                          "{testimonial.content}"
                        </p>
                        <div className="border-t border-border pt-4">
                          <p className="font-semibold">{testimonial.author_name}</p>
                          {testimonial.author_role && (
                            <p className="text-sm text-muted-foreground">
                              {testimonial.author_role}
                            </p>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
            {testimonials.length === 0 && (
              <p className="text-center text-muted-foreground">
                Aucun témoignage pour le moment. Soyez le premier à partager votre expérience !
              </p>
            )}
          </div>
          <Card className="max-w-3xl mx-auto mt-12 p-8 bg-card shadow-strong">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Partagez votre expérience
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Laissez un témoignage pour aider les prochains clients à en savoir plus sur ma façon de travailler.
            </p>
            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
              <div>
                <Label htmlFor="testimonial-name">Nom complet *</Label>
                <Input
                  id="testimonial-name"
                  value={testimonialForm.author_name}
                  onChange={(e) =>
                    setTestimonialForm((prev) => ({
                      ...prev,
                      author_name: e.target.value,
                    }))
                  }
                  placeholder="Ex : Marie Laurent"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="testimonial-role">Poste / Société</Label>
                <Input
                  id="testimonial-role"
                  value={testimonialForm.author_role}
                  onChange={(e) =>
                    setTestimonialForm((prev) => ({
                      ...prev,
                      author_role: e.target.value,
                    }))
                  }
                  placeholder="Ex : Product Manager, Startup X"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="testimonial-content">Votre avis *</Label>
                <Textarea
                  id="testimonial-content"
                  value={testimonialForm.content}
                  onChange={(e) =>
                    setTestimonialForm((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  placeholder="Décrivez votre collaboration avec Edi (au moins 20 caractères)."
                  minLength={20}
                  required
                  className="mt-2 min-h-[140px]"
                />
              </div>

              <Button
                type="submit"
                disabled={submittingTestimonial}
                className="w-full gradient-accent text-white hover:shadow-glow"
              >
                {submittingTestimonial ? "Envoi en cours..." : "Envoyer mon témoignage"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

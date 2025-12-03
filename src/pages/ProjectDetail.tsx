import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type ProjectDetailRow = {
  id: string;
  title: string;
  short_description: string;
  long_description: string | null;
  tech_stack: string[] | null;
  live_url: string | null;
  github_url: string | null;
  thumbnail_url: string | null;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectDetailRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, title, short_description, long_description, tech_stack, live_url, github_url, thumbnail_url"
        )
        .eq("id", id)
        .maybeSingle();

      if (!error && data) {
        setProject({
          id: data.id as string,
          title: data.title as string,
          short_description: data.short_description as string,
          long_description: (data.long_description as string | null) ?? null,
          tech_stack: (data.tech_stack as string[] | null) ?? null,
          live_url: (data.live_url as string | null) ?? null,
          github_url: (data.github_url as string | null) ?? null,
          thumbnail_url: (data.thumbnail_url as string | null) ?? null,
        });
      }

      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement du projet...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p>Projet non trouvé</p>
        <NavLink to="/projects">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </Button>
        </NavLink>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl opacity-90">
              {project.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.thumbnail_url && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-strong animate-fade-in"
            />
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="grid md:grid-cols-3 gap-8 mb-4">
              <Card className="p-6 bg-card">
                <h3 className="font-semibold mb-2 text-muted-foreground">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.tech_stack ?? []).slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-card md:col-span-2">
                <h3 className="font-semibold mb-2 text-muted-foreground">
                  Liens
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="gradient-accent text-white hover:shadow-glow transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le projet
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Aperçu du Projet</h2>
              <p className="text-muted-foreground text-lg mb-4">
                {project.short_description}
              </p>
              {project.long_description && (
                <p className="text-muted-foreground text-lg">
                  {project.long_description}
                </p>
              )}
            </div>

            <div>
              <NavLink to="/projects">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux projets
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

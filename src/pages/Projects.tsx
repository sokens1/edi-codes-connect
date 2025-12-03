import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type ProjectRow = {
  id: string;
  title: string;
  short_description: string;
  tech_stack: string[] | null;
  live_url: string | null;
  thumbnail_url: string | null;
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, short_description, tech_stack, live_url, thumbnail_url")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjects(
          data.map((row) => ({
            id: row.id as string,
            title: row.title as string,
            short_description: row.short_description as string,
            tech_stack: (row.tech_stack as string[] | null) ?? null,
            live_url: (row.live_url as string | null) ?? null,
            thumbnail_url: (row.thumbnail_url as string | null) ?? null,
          }))
        );
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((p) => {
    const query = searchQuery.toLowerCase();
    const techs = p.tech_stack ?? [];

    return (
      p.title.toLowerCase().includes(query) ||
      p.short_description.toLowerCase().includes(query) ||
      techs.some((tech) => tech.toLowerCase().includes(query))
    );
  });

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
            {loading && (
              <p className="col-span-full text-center text-muted-foreground">
                Chargement des projets...
              </p>
            )}
            {!loading && filteredProjects.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground">
                Aucun projet trouvé.
              </p>
            )}
            {!loading &&
              filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-strong transition-smooth group animate-fade-in bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.thumbnail_url && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.short_description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tech_stack ?? []).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.live_url && (
                        <Button
                          asChild
                          className="flex-1 gradient-accent text-white hover:shadow-glow transition-smooth"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Voir le projet
                          </a>
                        </Button>
                      )}
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

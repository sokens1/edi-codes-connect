import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceType: string;
}

interface ContactFormProps {
  className?: string;
}

type ServiceOption = {
  id: string;
  title: string;
  slug?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    serviceType: "",
  });
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, slug")
        .order("title", { ascending: true });

      if (!error && data) {
        setServices(
          data.map((s) => ({
            id: s.id as string,
            title: s.title as string,
            slug: s.slug as string | undefined,
          }))
        );
      }

      setLoadingServices(false);
    };

    fetchServices();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    const { error } = await supabase.from("contact_messages").insert({
      name: formData.name,
      email: formData.email,
      subject: formData.subject || null,
      message: formData.message,
      service_type: formData.serviceType || null,
    });

    if (error) {
      console.error(error);
      toast.error(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );
      return;
    }

    // Appel de la Function Supabase pour envoyer l'email (via SDK, CORS géré)
    try {
      await supabase.functions.invoke("contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || null,
          message: formData.message,
          service_type: formData.serviceType || null,
        },
      });
    } catch (err) {
      console.error("Erreur lors de l'appel à contact-email:", err);
      // On ne bloque pas l'utilisateur si l'email échoue, car le message est déjà enregistré
    }

    toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      serviceType: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={className ?? "space-y-6"}>
      <div>
        <Label htmlFor="name">Nom *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre.email@example.com"
          required
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="subject">Sujet</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Sujet de votre message"
          className="mt-2"
        />
      </div>

      <div>
        <Label>Type de service</Label>
        <Select
          value={formData.serviceType}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              serviceType: value,
            }))
          }
        >
          <SelectTrigger className="mt-2">
            <SelectValue
              placeholder={
                loadingServices
                  ? "Chargement des services..."
                  : "Sélectionnez un type de service"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem
                key={service.id}
                value={service.slug ?? service.title}
              >
                {service.title}
              </SelectItem>
            ))}
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre demande..."
          required
          className="mt-2 min-h-[150px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full gradient-accent text-white hover:shadow-glow transition-smooth"
        size="lg"
      >
        Envoyer le message
      </Button>
    </form>
  );
};

export default ContactForm;



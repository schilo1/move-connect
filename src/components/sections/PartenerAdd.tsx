import {
  Users,
  Video,
  Home,
  ShoppingBag,
  BookOpen,
  Calendar,
  MapPin,
  Trophy,
  Dumbbell,
  Apple,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partneradd = () => {
  const services = [
    {
      icon: BookOpen,
      title: "DEVENEZ UN COACH PARTENAIRE GBO",
      description:
        "Vous êtes un coach sportif certifié, passionné par le bien-être et motivé à faire une réelle différence ?",
      features: [
        "Accès à une clientèle ciblée",
        "Visibilité accrue",
        "Flexibilité et liberté",
        "Une collaboration fructueuse",
      ],
      cta: "Rejoignez le Réseau GBO",
      link: "/coach-partenaire",
    },
    {
      icon: BookOpen,
      title: "PARTENARIAT AVEC GBO : DEVELOPPEZ VOTRE SALLE DE SPORT",
      description:
        "Vous êtes gérant d'une salle de sport et cherchez à vous différencier, attirer de nouveaux membres et optimiser votre gestion ? ",
      features: [
        "Augmentation de votre Visibilité et de votre Communauté",
        "Acquisition et Fidélisation de Clients",
        "Technologie et Optimisation avec E-Gym",
        "Passez à l'Action : Devenons Partenaires",
      ],
      cta: "Rejoignez le Réseau GBO",
      link: "/partenariat-salle",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-primary/30 hover:bg-primary hover:text-primary-foreground group-hover:glow-neon"
                  >
                    {service.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partneradd;

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

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "Coaching en Ligne",
      description:
        "Flexibilité et accessibilité. Atteignez vos objectifs, où que vous soyez grâce à des sessions en visioconférence.",
      features: [
        "Flexibilité totale des horaires",
        "Accès depuis n'importe où",
        "Ressources numériques incluses",
        "Séances via Zoom, Teams ou Meet",
      ],
      cta: "Réservez Votre Séance d'Essai Gratuite",
      link: "https://wa.me/+2250788199542",
    },
    {
      icon: Home,
      title: "Coaching Privé à Domicile",
      description:
        "Présence, confort, efficacité et motivation. Une approche personnalisée pour des résultats concrets.",
      features: [
        "Coaching directement chez vous",
        "Adapté aux emplois du temps chargés",
        "Intégration à votre routine quotidienne",
        "Accompagnement sur-mesure",
      ],
      cta: "Réservez Votre Séance d'Essai Gratuite",
      link: "https://wa.me/+2250788199542",
    },
    {
      icon: Home,
      title: "Coaching en salle de sport partenaire",
      description: "L'Environnement de la Performance",
      features: [
        "Accès à des équipements professionnels",
        "Atmosphère de motivation",
        "Cadre dédié",
      ],
      cta: "Découvrez les Packs en Salle",
      link: "https://wa.me/+2250788199542",
    },
    {
      icon: ShoppingBag,
      title: "GBO FITNESS : LE SPORT AU CŒUR DE VOTRE CITE",
      description:
        "Gbô Fitness est votre rendez-vous bien-être et performance, à deux pas de chez vous.",
      features: [
        "Proximité et Accessibilité",
        "Ambiance et Motivation",
        "Équipements accessibles",
        "Simplicité et Transparence",
      ],
      cta: "En savoir plus sur Gbô Fitness",
      link: "/gbo-fitness",
    },
    {
      icon: BookOpen,
      title:
        "GBO CHALLENGE : LE CONCOURS QUI MET VOTRE QUARTIER et VOTRE SALLE AU DEFI !",
      description:
        "Le Gbô Challenge est notre programme de compétition sportive hebdomadaire qui apporte l'excitation du sport directement dans les cités d'Abidjan.",
      features: [
        "Chaque semaine, un nouveau lieu",
        "Des épreuves pour tous",
        "Défis entre communautés",
        "Des récompenses pour les gagnants",
      ],
      cta: "Découvrir le Gbô Challenge",
      link: "/gbo-challenge",
    },
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
    {
      icon: ShoppingBag,
      title: "GBO Nutrition & Guide : Votre Partenaire Bien-Être",
      description:
        "Chez Gbô, nous savons que les résultats durables combinent sport et nutrition. Nos plans personnalisés et guides adaptés vous aident à atteindre vos objectifs de santé.",
      features: [
        "Vous nous donnez vos informations",
        "Nous créons votre plan personnalisé",
        "Vous recevez votre guide détaillé",
      ],
      cta: "Découvrir Nos Produits",
      link: "/gbo-nutrition",
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
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Dumbbell className="w-5 h-5" />
            <span className="text-glow">Nos Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Coaching Personnalisé :{" "}
            <span className="text-primary text-glow">
              Atteignez Vos Objectifs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Que vous cherchiez à vous réorienter professionnellement, à
            améliorer votre leadership ou à développer votre potentiel, notre
            coaching sur mesure vous offre le soutien nécessaire pour réussir.
          </p>
        </div>

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

export default ServicesSection;

import { Star, Quote, Trophy, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kouassi Marie",
      role: "Membre depuis 6 mois",
      avatar: "/images/image.png",
      content:
        "GBÔ a transformé ma relation au sport. Grâce à mon coach personnalisé, j'ai perdu 15kg et gagné en confiance. La communauté est incroyablement motivante !",
      rating: 5,
    },
    {
      name: "Coach Didier",
      role: "Coach Certifié GBÔ",
      avatar: "/images/image2.png",
      content:
        "Rejoindre le réseau GBÔ était la meilleure décision de ma carrière. La plateforme me permet d'accompagner plus de personnes vers leurs objectifs fitness.",
      rating: 5,
    },
    {
      name: "Adjoa Fatima",
      role: "Participante GBÔR Challenge",
      avatar: "/images/image1.png",
      content:
        "Les événements communautaires GBÔ créent une vraie dynamique de groupe. J'ai découvert le plaisir de m'entraîner avec d'autres et ça change tout !",
      rating: 5,
    },
    {
      name: "Yao Bernard",
      role: "Client E-commerce",
      avatar: "/images/image3.png",
      content:
        "Les protéines bio locales sont de qualité exceptionnelle. Enfin des produits adaptés à nos besoins et notre culture alimentaire. Bravo GBÔ !",
      rating: 5,
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "500+ Transformations",
      description: "Membres ayant atteint leurs objectifs",
    },
    {
      icon: Heart,
      title: "98% de Satisfaction",
      description: "Taux de recommandation client",
    },
    {
      icon: Star,
      title: "50+ Coachs Actifs",
      description: "Professionnels certifiés disponibles",
    },
  ];

  return (
    <section
      id="temoignages"
      className="py-20 bg-card/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Quote className="w-5 h-5" />
            <span className="text-glow">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Ils font confiance à{" "}
            <span className="text-primary text-glow">GBÔ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Découvrez les histoires inspirantes de notre communauté qui
            transforme sa vie grâce au fitness accessible et motivant.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary text-glow mb-2 font-broaven">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-bold">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

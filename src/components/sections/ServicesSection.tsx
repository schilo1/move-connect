import { Users, ShoppingBag, BookOpen, Calendar, MapPin, Trophy, Dumbbell, Apple } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Coaching & Réseau de coachs",
      description: "Mise en relation avec coachs certifiés via géolocalisation. Programmes personnalisés : prise de masse, perte de poids, remise en forme.",
      features: ["Coachs certifiés", "Géolocalisation", "Programmes sur-mesure", "Suivi personnalisé"]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce fitness",
      description: "Protéines locales bio (moringa, cajou), vêtements sportifs & accessoires, haltères et équipements artisanaux accessibles.",
      features: ["Protéines bio locales", "Vêtements sportifs", "Équipements accessibles", "Livraison rapide"]
    },
    {
      icon: BookOpen,
      title: "Plateforme éducative",
      description: "Conseils en nutrition & santé, programmes d'entraînement en ligne, articles, vidéos, challenges.",
      features: ["Conseils nutrition", "Programmes en ligne", "Contenu vidéo", "Challenges motivants"]
    },
    {
      icon: Calendar,
      title: "Événements communautaires",
      description: "Fitness communal (séances en plein air), GBÔR Challenge (défis sportifs collectifs).",
      features: ["Fitness en plein air", "GBÔR Challenge", "Événements collectifs", "Communauté active"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
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
            Un écosystème <span className="text-primary text-glow">complet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De l'accompagnement personnalisé aux équipements de qualité, 
            découvrez tous nos services pour transformer votre approche du fitness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
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
                <Button variant="outline" className="w-full mt-6 border-primary/30 hover:bg-primary hover:text-primary-foreground group-hover:glow-neon">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-card/50 rounded-2xl p-8 border border-primary/20 glow-neon animate-fade-in-up">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-broaven">
              Nos <span className="text-primary text-glow">Valeurs</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Users, label: "Accessibilité" },
                { icon: Trophy, label: "Communauté" },
                { icon: Apple, label: "Bien-être" },
                { icon: MapPin, label: "Innovation" },
                { icon: Users, label: "Inclusion" }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center space-y-2 group hover-scale"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
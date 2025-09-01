import { Building2, Handshake, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partnerCategories = [
    {
      title: "Salles de Sport Partenaires",
      icon: Building2,
      partners: [
        "Fitness Plus Abidjan",
        "Energy Gym Cocody", 
        "Body Building Center",
        "Plateau Fitness Club"
      ]
    },
    {
      title: "Coachs Indépendants",
      icon: Users,
      partners: [
        "Coach Elite Network",
        "Personal Trainers CI",
        "Fitness Pros Abidjan",
        "Sport Coaches United"
      ]
    },
    {
      title: "Marques Locales",
      icon: Handshake,
      partners: [
        "Moringa Bio CI",
        "Local Nutrition",
        "Sportswear Afrique",
        "Equipment Pro"
      ]
    },
    {
      title: "Institutions Publiques",
      icon: MapPin,
      partners: [
        "Mairie du Plateau",
        "Commune de Cocody",
        "Ministère des Sports",
        "Jeunesse et Sport CI"
      ]
    }
  ];

  return (
    <section id="partenaires" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Handshake className="w-5 h-5" />
            <span className="text-glow">Nos Partenaires</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Un réseau de <span className="text-primary text-glow">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GBÔ collabore avec les meilleurs acteurs du fitness en Côte d'Ivoire 
            pour vous offrir une expérience complète et de qualité.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.partners.map((partner, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-muted/30 rounded-lg border border-muted hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group/item"
                    >
                      <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                        {partner}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 glow-neon animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-broaven">
                Devenir <span className="text-primary text-glow">Partenaire GBÔ</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rejoignez notre écosystème et participez à la démocratisation du fitness en Côte d'Ivoire. 
                Ensemble, rendons le sport accessible à tous !
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">Visibilité</h4>
                    <p className="text-sm text-muted-foreground">Accès à notre communauté active</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">Croissance</h4>
                    <p className="text-sm text-muted-foreground">Développement mutuel</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">Impact</h4>
                    <p className="text-sm text-muted-foreground">Mission sociale commune</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnersSection;
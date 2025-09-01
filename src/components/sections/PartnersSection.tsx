import {
  Building2,
  Handshake,
  Users,
  MapPin,
  Star,
  Trophy,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partnerCategories = [
    {
      title: "Salles de Sport Partenaires",
      icon: Building2,
      partners: [
        {
          name: "BEST-GYM",
          logo: "WolfAcademy.png",
          description: "Réseau de salles de sport premium",
          features: [
            "Équipements modernes",
            "Coaching personnalisé",
            "Cours collectifs",
          ],
          rating: 4.8,
          locations: "3 centres",
        },
        {
          name: "WOLF-ACADEMY GROUP",
          logo: "BestGym.png",
          description: "Académie de formation sportive d'excellence",
          features: [
            "Formation professionnelle",
            "Arts martiaux",
            "Préparation physique",
          ],
          rating: 4.9,
          locations: "2 centres",
        },
      ],
    },
  ];

  return (
    <section
      id="partenaires"
      className="py-20 bg-background relative overflow-hidden"
    >
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
            Un réseau de{" "}
            <span className="text-primary text-glow">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            GBÔ collabore avec les meilleurs acteurs du fitness en Côte d'Ivoire
            pour vous offrir une expérience complète et de qualité.
          </p>
        </div>

        {/* Special EGYM Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/30 glow-neon mb-16 animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white/90 rounded-xl p-4 flex items-center justify-center shadow-lg">
                <img
                  src="EGYM.png"
                  alt="EGYM Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-broaven">
                  Partenariat Stratégique avec{" "}
                  <span className="text-primary">EGYM</span>
                </h3>
                <p className="text-muted-foreground mb-4 font-bold">
                  EGYM est un logiciel de gestion complet pour centres de
                  fitness qui nous permet d'optimiser l'expérience client et la
                  gestion opérationnelle de nos salles partenaires.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      Gestion des abonnements
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      Suivi des performances
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      Réservation de cours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      Analyse de données
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Partners Grid */}
        <div className="mb-16">
          {partnerCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              {/* Category Header */}
              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="flex items-center justify-center gap-3 text-primary font-semibold">
                  <category.icon className="w-6 h-6" />
                  <span className="text-2xl font-bold text-glow">
                    {category.title}
                  </span>
                </div>
              </div>

              {/* Large Partner Cards */}
              <div className="grid lg:grid-cols-2 gap-8">
                {category.partners.map((partner, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-2 border-border hover:border-primary/50 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <CardContent className="p-0">
                      {/* Header with Logo */}
                      <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 p-8 border-b border-border/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-white/95 rounded-2xl p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                                {partner.name}
                              </h3>
                              <p className="text-muted-foreground font-medium mt-1">
                                {partner.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-yellow-500 mb-1">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="font-bold">
                                {partner.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{partner.locations}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="p-6">
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-primary" />
                            Services Proposés
                          </h4>
                          <div className="grid gap-3">
                            {partner.features.map((feature, featureIdx) => (
                              <div
                                key={featureIdx}
                                className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-muted/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                              >
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Award className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium text-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Partnership Badge */}
                        <div className="mt-6 pt-4 border-t border-border/50">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                            <Handshake className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              Partenaire Officiel GBÔ
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 glow-neon animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-broaven">
                Devenir{" "}
                <span className="text-primary text-glow">Partenaire GBÔ</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto font-bold">
                Rejoignez notre écosystème et participez à la démocratisation du
                fitness en Côte d'Ivoire. Ensemble, rendons le sport accessible
                à tous !
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground font-broaven">
                      Visibilité
                    </h4>
                    <p className="text-sm text-muted-foreground font-bold">
                      Accès à notre communauté active
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground font-broaven">
                      Croissance
                    </h4>
                    <p className="text-sm text-muted-foreground font-bold">
                      Développement mutuel
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground font-broaven">
                      Impact
                    </h4>
                    <p className="text-sm text-muted-foreground font-bold">
                      Mission sociale commune
                    </p>
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

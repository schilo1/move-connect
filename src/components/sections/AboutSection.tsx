import {
  Target,
  Eye,
  Lightbulb,
  Play,
  Users,
  Zap,
  Heart,
  Building2,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    {
      value: "65%",
      label: "d'urbains ivoiriens ne pratiquent pas assez d'activité physique",
    },
    { value: "500+", label: "membres actifs dans notre communauté" },
    { value: "3 ans", label: "d'expérience dans le fitness accessible" },
    { value: "4", label: "piliers fondamentaux de notre approche" },
  ];

  const objectives = [
    {
      icon: Target,
      title: "Mission",
      content:
        "Démocratiser l'accès au fitness et à la musculation en Côte d'Ivoire en proposant une alternative inclusive et abordable pour tous, portant l'énergie du sport dans les cités, les rues et les salles.",
    },
    {
      icon: Eye,
      title: "Vision",
      content:
        "Devenir la référence du fitness accessible en Afrique de l'Ouest et inspirer une génération à adopter un mode de vie sain tout en créant une communauté passionnée et déterminée.",
    },
    {
      icon: Lightbulb,
      title: "Objectifs",
      content:
        "Personnaliser le coaching sportif en formant et certifiant les coachs, éduquer notre communauté via des contenus pratiques, créer des liens sociaux autour de la musculation et promouvoir les produits locaux.",
    },
  ];

  const corePillars = [
    {
      icon: Award,
      title: "Formation & Certification",
      description:
        "Personnaliser le coaching sportif en formant et certifiant les coachs",
      color: "bg-blue-500/10 border-blue-500/30",
    },
    {
      icon: Users,
      title: "Éducation Communautaire",
      description:
        "Éduquer et inspirer via des contenus pratiques et la sensibilisation",
      color: "bg-green-500/10 border-green-500/30",
    },
    {
      icon: Heart,
      title: "Lien Social",
      description:
        "Créer des connections autour de la musculation et du fitness",
      color: "bg-pink-500/10 border-pink-500/30",
    },
    {
      icon: Globe,
      title: "Produits Locaux",
      description: "Promouvoir et développer des solutions locales durables",
      color: "bg-orange-500/10 border-orange-500/30",
    },
  ];

  return (
    <section
      id="apropos"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Heart className="w-5 h-5" />
            <span className="text-glow">Notre Histoire</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            À propos de <span className="text-primary text-glow">GBÔ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
            Bien plus qu'un mouvement sportif, GBÔ est une communauté passionnée
            qui porte l'énergie du sport dans toute la Côte d'Ivoire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Content */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6">
              <CardContent className="space-y-4 p-0">
                <h3 className="text-2xl font-bold text-foreground font-broaven">
                  Notre Genèse
                </h3>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  GBÔ est né d'une conviction :{" "}
                  <strong className="text-primary">
                    le sport doit être accessible à tous
                  </strong>
                  . Dans un contexte où 65% des urbains ivoiriens ne pratiquent
                  pas assez d'activité physique, nous proposons une alternative
                  inclusive et abordable qui porte l'énergie du sport dans les
                  cités, les rues et les salles de sport de Côte d'Ivoire.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  Initialement lancé autour des{" "}
                  <strong className="text-primary">
                    protéines bio locales
                  </strong>
                  , GBÔ est aujourd'hui un écosystème sportif complet structuré
                  autour de quatre piliers fondamentaux : la formation et
                  certification des coachs, l'éducation communautaire, la
                  création de liens sociaux et la promotion de produits locaux.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground font-semibold italic">
                    "GBÔ, c'est une communauté passionnée et déterminée, un
                    mouvement qui transforme la vision du fitness en Côte
                    d'Ivoire."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-neon transition-all duration-300 bg-gradient-to-r from-primary/10 to-transparent border-primary/30"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary text-glow font-broaven">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground flex-1 font-semibold">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Placeholder & Leadership */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Équipe Image */}
            <Card className="relative h-64 bg-card border-primary/20 glow-neon overflow-hidden group">
              <div className="absolute inset-0">
                <img
                  src="/equipe.png"
                  alt="Notre Équipe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center">
                <div className="text-center p-4">
                  <h3 className="text-white font-semibold text-glow mb-2">
                    Notre Équipe
                  </h3>
                  <p className="text-sm text-gray-200">
                    Ensemble, nous bâtissons le futur du fitness
                  </p>
                </div>
              </div>
            </Card>

            {/* Leadership Team */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground font-broaven">
                  Direction Générale
                </h3>
                <div className="text-center space-y-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                  <div className="text-5xl">👨🏿‍💼</div>
                  <div>
                    <h4 className="font-bold text-lg text-primary font-broaven">
                      Frédéric TIEMON
                    </h4>
                    <p className="text-sm text-muted-foreground font-semibold">
                      CEO & CFO
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fondateur & Visionnaire
                    </p>
                  </div>
                </div>

                {/* Department Heads */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground opacity-80 font-broaven">
                    Responsables Départements
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        name: "Cyrille ADOUHOBO",
                        role: "Partenariats & Développement",
                        emoji: "🤝",
                        color: "bg-yellow-500/20 border-yellow-500/30",
                      },
                      {
                        name: "Felix KRA",
                        role: "Sports & Opérations",
                        emoji: "💪",
                        color: "bg-cyan-500/20 border-cyan-500/30",
                      },
                      {
                        name: "Williams TOURE",
                        role: "Community Manager",
                        emoji: "📱",
                        color: "bg-green-500/20 border-green-500/30",
                      },
                      {
                        name: "Yaya KONE",
                        role: "Responsable des Coachs",
                        emoji: "🏋️‍♂️",
                        color: "bg-blue-500/20 border-blue-500/30",
                      },
                    ].map((member, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg border ${member.color} group hover-scale`}
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform">
                          {member.emoji}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Voir l'organigramme complet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-16 animate-fade-in-up">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-foreground font-broaven">
              Nos{" "}
              <span className="text-primary text-glow">
                4 Piliers Fondamentaux
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-semibold">
              Notre approche structurée autour de quatre axes stratégiques pour
              transformer l'écosystème sportif ivoirien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, index) => (
              <Card
                key={index}
                className={`${pillar.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Objectifs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          {objectives.map((obj, index) => (
            <Card
              key={index}
              className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 font-broaven"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <obj.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {obj.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {obj.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organizational Structure */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground font-broaven">
                    Structure{" "}
                    <span className="text-primary text-glow">
                      Organisationnelle
                    </span>
                  </h3>
                </div>
                <p className="text-muted-foreground font-semibold max-w-3xl mx-auto">
                  Notre structure est organisée autour de trois départements
                  clés, chacun dirigé par des experts passionnés et dédiés à
                  l'excellence.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      title: "Partenariats & Développement",
                      head: "Cyrille ADOUHOBO",
                      teams: [
                        "Responsable partenariats",
                        "Responsable Développement Commercial",
                      ],
                      color: "bg-yellow-500/10 border-yellow-500/30",
                      icon: "🤝",
                      description:
                        "Développement des partenariats stratégiques et expansion commerciale",
                    },
                    {
                      title: "Marketing & Communication",
                      head: "Williams TOURE",
                      teams: [
                        "Responsable Marketing",
                        "Responsable Communication",
                        "Community Manager",
                      ],
                      color: "bg-green-500/10 border-green-500/30",
                      icon: "📢",
                      description:
                        "Communication digitale, marketing et gestion de la communauté",
                    },
                    {
                      title: "Sports & Opérations",
                      head: "Felix KRA",
                      teams: [
                        "Responsable des coachs (Yaya KONE)",
                        "Responsable Opérations & Logistiques",
                      ],
                      color: "bg-cyan-500/10 border-cyan-500/30",
                      icon: "💪",
                      description:
                        "Gestion des activités sportives et opérations quotidiennes",
                    },
                  ].map((dept, index) => (
                    <Card
                      key={index}
                      className={`${dept.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="text-center space-y-2">
                          <div className="text-4xl group-hover:scale-110 transition-transform">
                            {dept.icon}
                          </div>
                          <h4 className="font-bold text-foreground font-broaven text-lg">
                            {dept.title}
                          </h4>
                          <p className="text-sm font-semibold text-primary">
                            {dept.head}
                          </p>
                          <p className="text-xs text-muted-foreground italic">
                            {dept.description}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-xs font-semibold text-foreground opacity-80">
                            Équipes:
                          </h5>
                          {dept.teams.map((team, idx) => (
                            <div
                              key={idx}
                              className="text-xs text-muted-foreground bg-background/50 rounded px-2 py-1 text-center"
                            >
                              {team}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Banner */}
        <Card className="mb-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 glow-neon animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-broaven">
                Nos{" "}
                <span className="text-primary text-glow">
                  Valeurs Fondamentales
                </span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: Users, label: "Accessibilité", desc: "Pour tous" },
                  { icon: Heart, label: "Communauté", desc: "Ensemble" },
                  { icon: Zap, label: "Bien-être", desc: "Corps & esprit" },
                  {
                    icon: Lightbulb,
                    label: "Innovation",
                    desc: "Solutions créatives",
                  },
                  { icon: Target, label: "Inclusion", desc: "Sans exception" },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-3 group hover-scale"
                  >
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors font-broaven">
                        {value.label}
                      </div>
                      <div className="text-xs text-muted-foreground font-semibold">
                        {value.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact & Future */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-neon transition-all duration-300">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground font-broaven">
                  Notre Impact
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="font-semibold">
                    Plus de 500 membres actifs dans notre écosystème sportif
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="font-semibold">
                    Coachs certifiés et formés selon nos standards d'excellence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="font-semibold">
                    Promotion active des produits bio locaux ivoiriens
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="font-semibold">
                    Création de liens sociaux durables autour du fitness
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-neon transition-all duration-300">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground font-broaven">
                  Notre Engagement
                </h3>
              </div>
              <p className="text-muted-foreground font-semibold leading-relaxed">
                GBÔ s'engage à transformer durablement l'écosystème sportif
                ivoirien en plaçant l'humain au centre de sa démarche. Nous
                croyons qu'un corps sain contribue à un esprit sain et à une
                société plus harmonieuse.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-primary font-semibold">
                  "Ensemble, construisons une Côte d'Ivoire plus active, plus
                  saine et plus unie autour du sport."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-primary/40">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-broaven">
                Rejoignez le{" "}
                <span className="text-primary text-glow">Mouvement GBÔ</span>
              </h3>
              <p className="text-muted-foreground font-semibold max-w-2xl mx-auto">
                Ensemble, créons une communauté sportive inclusive où chaque
                ivoirien peut accéder au fitness et développer son potentiel
                physique et mental.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Rejoindre la Communauté
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Découvrir nos Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(var(--primary), 0.5);
        }

        .glow-neon {
          box-shadow: 0 0 20px rgba(var(--primary), 0.1);
        }

        .hover:shadow-neon:hover {
          box-shadow: 0 0 30px rgba(var(--primary), 0.2);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

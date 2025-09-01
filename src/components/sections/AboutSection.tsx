import { Target, Eye, Lightbulb, Play, Users, Zap, Heart } from "lucide-react";
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
  ];

  const objectives = [
    {
      icon: Target,
      title: "Mission",
      content:
        "Démocratiser l'accès au fitness et à la musculation en Côte d'Ivoire en proposant une alternative inclusive et abordable pour tous.",
    },
    {
      icon: Eye,
      title: "Vision",
      content:
        "Devenir la référence du fitness accessible en Afrique de l'Ouest et inspirer une génération à adopter un mode de vie sain.",
    },
    {
      icon: Lightbulb,
      title: "Objectifs",
      content:
        "Créer un écosystème sportif complet alliant coaching personnalisé, produits locaux bio et événements communautaires fédérateurs.",
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
                  inclusive et abordable.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  Initialement lancé autour des{" "}
                  <strong className="text-primary">
                    protéines bio locales
                  </strong>
                  , GBÔ est aujourd'hui un écosystème sportif complet : coaching
                  certifié, boutique en ligne, contenus éducatifs et événements
                  fédérateurs.
                </p>
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

          {/* Video Placeholder & Team */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Video Storytelling */}
            <Card className="relative h-64 bg-card border-primary/20 glow-neon overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform hover-scale">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold text-glow mb-2">
                      "Du noir à la lumière"
                    </h3>
                    <p className="text-sm text-muted-foreground px-4">
                      Découvrez l'histoire inspirante de GBÔ et notre mission
                      pour démocratiser le fitness
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Team Preview */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground font-broaven">
                  Notre Équipe
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Fondateur", emoji: "👨🏿‍💼" },
                    { name: "Coach Lead", emoji: "👩🏿‍🏫" },
                    { name: "Nutritionniste", emoji: "👨🏿‍⚕️" },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="text-center space-y-2 group hover-scale"
                    >
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {member.emoji}
                      </div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Rencontrer l'équipe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission, Vision, Objectifs */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
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

        {/* Values Banner */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 glow-neon animate-fade-in-up">
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
      </div>
    </section>
  );
};

export default AboutSection;

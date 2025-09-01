import { Play, ArrowRight, Users, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-radial opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Zap className="w-5 h-5" />
                <span className="text-glow">Plus qu'une pratique, un style de vie</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-broaven text-foreground leading-tight">
                Bienvenue chez{" "}
                <span className="text-primary text-glow">GBÔ</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                GBÔ, c'est bien plus qu'une plateforme sportive. C'est un mouvement qui démocratise 
                l'accès au fitness et à la musculation en Côte d'Ivoire. Coaching, nutrition, 
                e-commerce et événements communautaires : nous transformons le sport en une expérience 
                accessible et inspirante.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-neon hover:animate-glow-pulse group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Rejoignez la communauté GBÔ
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Play className="w-5 h-5 mr-2" />
                Voir la vidéo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-glow">500+</div>
                <div className="text-sm text-muted-foreground">Membres actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-glow">50+</div>
                <div className="text-sm text-muted-foreground">Coachs certifiés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary text-glow">100+</div>
                <div className="text-sm text-muted-foreground">Événements</div>
              </div>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative animate-fade-in-up delay-300">
            <Card className="relative h-96 bg-card border-primary/20 glow-neon overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto hover-scale">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary font-semibold text-glow">
                    Vidéo d'introduction GBÔ
                  </p>
                  <p className="text-sm text-muted-foreground px-4">
                    Découvrez notre histoire et notre mission pour rendre le fitness accessible à tous
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-card/90 border-primary/30 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Communauté</div>
                  <div className="text-xs text-muted-foreground">Active & Engagée</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-card/90 border-primary/30 animate-float delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Bien-être</div>
                  <div className="text-xs text-muted-foreground">Corps & Esprit</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
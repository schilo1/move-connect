import { Play, ArrowRight, Users, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // 🔥 Set speed to 2x
    }
  }, []);
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-radial opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video first on mobile */}
          <div className="relative animate-fade-in-up delay-300 order-first lg:order-last">
            <Card className="relative h-64 sm:h-80 lg:h-96 bg-card border-primary/20 glow-neon overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/Vidéo Gbô.mov"
                title="Vidéo d'introduction GBÔ"
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <div className="absolute bottom-4 left-4 text-primary font-semibold text-glow text-sm sm:text-base ">
                Vidéo d'introduction GBÔ
              </div>
            </Card>

            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-3 sm:p-4 bg-card/90 border-primary/30 animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm">
                    Communauté
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    Active & Engagée
                  </div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-4 p-3 sm:p-4 bg-card/90 border-primary/30 animate-float delay-500">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm">
                    Bien-être
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    Corps & Esprit
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-glow">
                  Plus qu'une pratique, un style de vie
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-broaven text-foreground leading-tight">
                Bienvenue chez{" "}
                <span className="text-primary text-glow">GBÔ</span>
              </h1>
              {/* Short text on mobile, full text on desktop */}
              <p className="hidden sm:block text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed font-semibold">
                GBÔ, c'est bien plus qu'une plateforme sportive. C'est un
                mouvement qui démocratise l'accès au fitness et à la musculation
                en Côte d'Ivoire. Coaching, nutrition, e-commerce et événements
                communautaires : nous transformons le sport en une expérience
                accessible et inspirante.
              </p>
              <p className="block sm:hidden text-sm text-muted-foreground max-w-sm font-bold">
                GBÔ démocratise le fitness et la musculation en Côte d'Ivoire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="glow-neon hover:animate-glow-pulse group font-broaven"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Rejoignez GBÔ
                <ArrowRight className="w-4 h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Voir la vidéo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary text-glow font-broaven">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-broaven">
                  Membres
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary text-glow font-broaven">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-broaven">
                  Coachs
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary text-glow font-broaven">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-broaven">
                  Événements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

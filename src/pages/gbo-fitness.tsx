import { Dumbbell, MapPin, Users, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import React from "react";

const GboFitness = () => {
  const programDetails = [
    {
      percentage: "60% Cardio HIIT",
      description: "pour brûler les graisses et booster votre énergie",
    },
    {
      percentage: "30% Musculation au poids du corps",
      description: "pour tonifier et renforcer votre silhouette",
    },
    {
      percentage: "10% Danse (Décalé Fitness)",
      description: "pour s'amuser et relâcher la pression",
    },
  ];

  const conceptSteps = [
    {
      title: "Proximité et Accessibilité",
      description:
        "Nous venons à vous ! Nos séances ont lieu une, deux ou trois fois par semaine dans des espaces publics adaptés de votre quartier. Le but est de supprimer les barrières d'accès au sport, que ce soit la distance ou le coût.",
      icon: MapPin,
    },
    {
      title: "Ambiance et Motivation",
      description:
        "Fini les entraînements solitaires. Rejoignez une communauté soudée et bienveillante. Nos coachs sont là pour vous guider, vous encourager et s'assurer que vous progressez en toute sécurité. L'énergie du groupe et le fun du 'Décalé Fitness' font de chaque séance un moment unique.",
      icon: Users,
    },
    {
      title: "Simplicité et Transparence",
      description:
        "L'inscription est simple. Une fois que vous avez trouvé votre séance, il vous suffit de vous présenter. Nos tarifs sont pensés pour être abordables, voire gratuits lors des séances de découverte, pour que chacun puisse essayer et adopter le sport comme une routine saine.",
      icon: Calendar,
    },
  ];

  const locations = [
    {
      commune: "Angré (Cocody)",
      place: "Terrain Mahou",
      schedule: "Mardi, jeudi, samedi à 18h30",
    },
    {
      commune: "Dokui (Abobo)",
      place: "Parking du supermarché",
      schedule: "Mardi, jeudi, samedi à 19h00",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        {/* Header Section */}
        <section className="container mx-auto px-4 text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Dumbbell className="w-5 h-5" />
            <span className="text-glow">Gbô Fitness</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Le Sport au Cœur de Votre Cité
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Gbô Fitness est votre rendez-vous bien-être et performance, à deux
            pas de chez vous. Rejoignez une communauté conviviale pour bouger,
            transpirer et progresser, sans avoir à vous déplacer.
          </p>
          <a href="#find-session">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon mt-6"
            >
              Trouvez une Séance Près de Chez Vous
            </Button>
          </a>
        </section>

        {/* Program Details */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Un Programme Dynamique et Varié
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programDetails.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {item.percentage}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Concept Steps */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Le Concept Gbô Fitness en 3 Étapes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {conceptSteps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 font-semibold">
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscription Offer */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Devenez Membre Gbô Fitness
          </h2>
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Abonnement Mensuel Gbô Fitness
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Accès illimité à toutes nos séances de groupe en plein air, dans
                tous les lieux Gbô Fitness.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-4">
                10 000 FCFA/mois
              </p>
              <a href="/subscribe">
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  S'abonner
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>

        {/* Find a Session */}
        <section id="find-session" className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Nos Emplacements et Horaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {location.commune}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    Lieu : {location.place}
                    <br />
                    Jours et horaires : {location.schedule}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="/subscribe">
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                    >
                      Rejoignez une Séance Gratuite
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GboFitness;

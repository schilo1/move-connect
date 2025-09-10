import { Trophy, Calendar, MapPin, Users } from "lucide-react";
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

const GboChallenge = () => {
  const nextEvent = {
    quartier: "Cocody, Angré",
    date: "Samedi 18 octobre 2025, 17h00",
    lieu: "Terrain de sport de la Cité Mahou",
    epreuve: "Concours de pompes et de gainage",
  };

  const pastEvents = [
    {
      quartier: "Abobo, Dokui",
      date: "Samedi 11 octobre 2025",
      description: "Défi de vitesse et d'agilité",
      image: "https://via.placeholder.com/300x200?text=Past+Event+1",
    },
    {
      quartier: "Cocody, Riviera",
      date: "Samedi 4 octobre 2025",
      description: "Concours de tractions",
      image: "https://via.placeholder.com/300x200?text=Past+Event+2",
    },
  ];

  const rewards = [
    {
      title: "Équipement Sportif",
      description:
        "Des kits de fitness professionnels pour booster vos entraînements.",
    },
    {
      title: "Forfaits de Coaching",
      description:
        "Sessions gratuites avec nos coachs certifiés pour accélérer vos progrès.",
    },
    {
      title: "Goodies Gbô",
      description:
        "T-shirts, gourdes et autres accessoires exclusifs Gbô Challenge.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        {/* Header Section */}
        <section className="container mx-auto px-4 text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Trophy className="w-5 h-5" />
            <span className="text-glow">Gbô Challenge</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Le Concours Qui Met Votre Quartier et Votre Salle au Défi !
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Le Gbô Challenge est notre programme de compétition sportive
            hebdomadaire qui apporte l'excitation du sport directement dans les
            cités d'Abidjan. Participez à des épreuves amicales, défiez les
            salles de sport du coin et gagnez des récompenses exceptionnelles !
          </p>
          <a href="#next-event">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon mt-6"
            >
              Découvrez le Prochain Gbô Challenge !
            </Button>
          </a>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Comment Ça Marche ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Chaque Semaine, un Nouveau Lieu",
                description:
                  "Nous annonçons chaque semaine sur nos réseaux sociaux et notre site web le lieu et le quartier où se tiendra le prochain Challenge. Restez connectés !",
                icon: MapPin,
              },
              {
                title: "Épreuves pour Tous",
                description:
                  "Nos concours sont variés et adaptés à tous les niveaux, de tractions à des défis surprises. L'objectif est de s'amuser tout en se dépassant.",
                icon: Calendar,
              },
              {
                title: "Défis entre Communautés",
                description:
                  "Passionnés de fitness, amateurs et membres des salles locales s'affrontent amicalement dans une ambiance d'échange et de bonne humeur.",
                icon: Users,
              },
              {
                title: "Récompenses pour les Gagnants",
                description:
                  "Les vainqueurs repartent avec des prix attractifs : équipement sportif, forfaits de coaching et plus encore !",
                icon: Trophy,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 font-semibold">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Event */}
        <section id="next-event" className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Prochain Gbô Challenge
          </h2>
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Prochain Challenge : {nextEvent.quartier}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                <p>
                  <strong>Date et Heure :</strong> {nextEvent.date}
                </p>
                <p>
                  <strong>Lieu :</strong> {nextEvent.lieu}
                </p>
                <p>
                  <strong>Épreuve :</strong> {nextEvent.epreuve}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/participate">
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  Participez Gratuitement !
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>

        {/* Past Events */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Événements Passés
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <img
                    src={event.image}
                    alt={`Événement à ${event.quartier}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven mt-4">
                    {event.quartier}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    <p>
                      <strong>Date :</strong> {event.date}
                    </p>
                    <p>{event.description}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Rewards */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Nos Superbes Récompenses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {reward.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    {reward.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GboChallenge;

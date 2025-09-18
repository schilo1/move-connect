import { Trophy, Users, MapPin, Calendar } from "lucide-react";
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
import React, { useState, useEffect } from "react";

const GboChallenge = () => {
  const nextEvent = {
    quartier: "Abobo, Dokui",
    epreuve: "Concours de pompes et de gainage",
  };

  const pastEvents = [
    {
      quartier: "Abobo, Dokui",
      description: "Défi de vitesse et d'agilité",
      image: "/image1.png",
    },
    {
      quartier: "Cocody, Riviera",
      description: "Concours de tractions",
      image: "/image2.png",
    },
    {
      quartier: "Abobo, Dokui",
      description: "Défi de cardio et endurance",
      image: "/image3.png",
    },
    {
      quartier: "Abobo, Dokui",
      description: "Concours de squats et fentes",
      image: "/image4.png",
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

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pastEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + pastEvents.length) % pastEvents.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatic sliding
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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
                  <strong>Épreuve :</strong> {nextEvent.epreuve}
                </p>
                <p>
                  Participez pour gagner des lots incroyables et découvrez nos
                  défis dans plusieurs communes d'Abidjan !
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
          <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up">
            <CardContent className="p-8">
              <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Slider */}
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {pastEvents.map((event, index) => (
                      <div key={index} className="min-w-full">
                        <div className="relative flex flex-col md:flex-row items-center gap-8">
                          <div className="w-full md:w-1/2">
                            <img
                              src={event.image}
                              alt={`Événement à ${event.quartier}`}
                              className="w-full h-96 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="w-full md:w-1/2 bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-white font-broaven mb-2">
                              {event.quartier}
                            </h3>
                            <p className="text-gray-200 font-semibold">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-primary/30 hover:bg-primary/60 text-primary-foreground p-3 rounded-full transition-all duration-300 glow-neon"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-primary/30 hover:bg-primary/60 text-primary-foreground p-3 rounded-full transition-all duration-300 glow-neon"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-3">
                  {pastEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        currentSlide === index
                          ? "bg-primary scale-125"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
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

      <style jsx>{`
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .glow-neon {
          box-shadow: 0 0 20px rgba(var(--primary), 0.1);
        }

        .hover:shadow-neon:hover {
          box-shadow: 0 0 30px rgba(var(--primary), 0.2);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(var(--primary), 0.5);
        }
      `}</style>
    </div>
  );
};

export default GboChallenge;

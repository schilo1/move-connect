import { ShoppingBag, Dumbbell } from "lucide-react";
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
import ServicesSection from "@/components/sections/ServicesSection";
import ProductSection from "@/components/sections/Product";
import React from "react";

const Offres = () => {
  const sections = [
    {
      icon: ShoppingBag,
      title: "Nos Produits",
      description:
        "Découvrez nos solutions personnalisées comme Gbô Nutrition, Ressources Éducatives et E-Gym pour optimiser votre bien-être ou la gestion de votre salle.",
      cta: "Explorer les Produits",
      link: "/products",
    },
    {
      icon: Dumbbell,
      title: "Nos Services",
      description:
        "Participez à nos Gbô Challenges, devenez Coach Partenaire, ou boostez votre salle avec Gbô Connect pour une expérience fitness unique.",
      cta: "Explorer les Services",
      link: "/services",
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
            <span className="text-glow">Nos Offres</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Transformez Votre Parcours avec Gbô
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Que vous soyez un particulier en quête de bien-être ou un
            professionnel du fitness, découvrez nos produits et services conçus
            pour vous propulser vers vos objectifs.
          </p>
        </section>

        {/* Transition Section with Icons */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 font-semibold">
                      {section.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={section.link}>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground group-hover:glow-neon"
                    >
                      {section.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product and Services Sections */}
        {/* <ProductSection />
        <ServicesSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Offres;

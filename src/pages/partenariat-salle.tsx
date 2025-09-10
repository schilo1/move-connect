import { Building, Users, BarChart, Download } from "lucide-react";
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
import React, { useState } from "react";

const PartenariatSalle = () => {
  const partnershipBenefits = [
    {
      title: "Augmentation de votre Visibilité et de votre Communauté",
      description:
        "Nous vous aidons à vous démarquer de la concurrence et à toucher une nouvelle clientèle grâce à des Gbô Challenges exclusifs, une promotion croisée sur nos canaux, et une image de marque dynamique.",
      features: [
        "Gbô Challenges organisés dans votre salle",
        "Promotion sur nos réseaux sociaux, newsletters, et blog",
        "Image moderne et attractive pour un public jeune et urbain",
      ],
      icon: Users,
    },
    {
      title: "Acquisition et Fidélisation de Clients",
      description:
        "Nous vous apportons de nouvelles sources de revenus avec un programme de parrainage pour les participants Gbô Fitness et la possibilité d'héberger nos coachs certifiés pour des séances privées.",
      features: [
        "Offres spéciales pour attirer les participants Gbô Fitness",
        "Coaching privé avec nos coachs certifiés",
        "Nouveaux revenus grâce à des services supplémentaires",
      ],
      icon: BarChart,
    },
    {
      title: "Technologie et Optimisation avec E-Gym",
      description:
        "Accédez gratuitement ou à tarif préférentiel à E-Gym, notre logiciel de gestion de salle, pour simplifier la gestion des abonnements, plannings, suivi des membres, et rapports d'activité.",
      features: [
        "Gestion facile des abonnements et paiements",
        "Plannings de cours simplifiés",
        "Suivi des membres et rapports précis",
      ],
      icon: Building,
    },
  ];

  // Form state for dossier request
  const [formData, setFormData] = useState({
    gymName: "",
    contactName: "",
    email: "",
    phone: "",
    commune: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend API or trigger dossier download)
    console.log("Dossier request submitted:", formData);
    // Simulate dossier download (replace with actual download link or API call)
    window.open("/path-to-gbo-partnership-dossier.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        {/* Header Section */}
        <section className="container mx-auto px-4 text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Building className="w-5 h-5" />
            <span className="text-glow">Partenariat Salle</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Développez Votre Salle de Sport avec Gbô
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Vous êtes gérant d'une salle de sport et cherchez à vous
            différencier ? Rejoignez le mouvement Gbô Connect pour transformer
            votre établissement en un pôle d'attraction incontournable.
          </p>
          <a href="#request-dossier">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon mt-6"
            >
              Télécharger le Dossier
            </Button>
          </a>
        </section>

        {/* Gbô Connect Benefits */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Gbô Connect : Notre Offre de Partenariat
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 font-semibold">
                      {benefit.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Request Dossier Form */}
        <section id="request-dossier" className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Demandez notre Dossier de Partenariat
          </h2>
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Téléchargez le Dossier Complet
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Remplissez le formulaire ci-dessous pour recevoir notre dossier
                de partenariat et découvrir comment Gbô peut transformer votre
                business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                type="submit"
                className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
              >
                Télécharger le Dossier
              </Button>
              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Nom de la Salle
                    </label>
                    <input
                      type="text"
                      name="gymName"
                      value={formData.gymName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Nom du Contact
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Commune de la Salle
                    </label>
                    <input
                      type="text"
                      name="commune"
                      value={formData.commune}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  Télécharger le Dossier
                </Button>
              </form> */}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartenariatSalle;

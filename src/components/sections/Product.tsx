import { ShoppingBag, BookOpen, Dumbbell, BarChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
  const services = [
    {
      icon: BarChart,
      title: "E-Gym : Optimisez la Gestion de Votre Salle",
      description:
        "E-Gym est une solution tout-en-un pour automatiser, suivre et optimiser les opérations quotidiennes de votre salle de sport.",
      features: [
        "Enregistrement rapide des clients",
        "Gestion des abonnements et paiements",
        "Suivi médical et financier complet",
        "Statistiques et analyses en temps réel",
      ],
      cta: "Découvrir E-Gym",
      link: "https://saas-egym.vercel.app",
    },
  ];

  const eGymPlans = [
    {
      name: "Standard",
      users: "1",
      maxClients: "100",
      maxPayments: "200",
      history: false,
      calendar: false,
      medical: false,
      price: "15 000 FCFA/mois",
    },
    {
      name: "Premium",
      users: "Jusqu’à 4",
      maxClients: "150",
      maxPayments: "300",
      history: true,
      calendar: true,
      medical: true,
      price: "25 000 FCFA/mois",
    },
    {
      name: "Platinium",
      users: "Illimité",
      maxClients: "Illimité",
      maxPayments: "Illimité",
      history: true,
      calendar: true,
      medical: true,
      price: "40 000 FCFA/mois",
    },
  ];

  const eGymTestimonials = [
    {
      quote: "Une solution indispensable pour gérer ma salle efficacement.",
      author: "Clara, Propriétaire de FitLine",
    },
    {
      quote:
        "Le tableau de bord m’aide à suivre mes revenus et fidéliser mes clients.",
      author: "Jean-Marc, Coach indépendant",
    },
  ];

  const eGymFAQs = [
    {
      question: "Est-ce que l’application fonctionne sur mobile ?",
      answer: "Oui, elle est responsive et fonctionne sur tous les appareils.",
    },
    {
      question: "Puis-je essayer avant d’acheter ?",
      answer: "Oui, une démo gratuite est disponible sur demande.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons des normes de sécurité avancées.",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Dumbbell className="w-5 h-5" />
            <span className="text-glow">Nos Produits</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Solutions Personnalisées :{" "}
            <span className="text-primary text-glow">
              Atteignez Vos Objectifs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Que vous soyez un particulier cherchant à améliorer votre bien-être
            ou un gérant de salle souhaitant optimiser votre gestion, nos
            produits vous offrent le soutien nécessaire pour réussir.
          </p>
        </div>

        {/* Products Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-primary/30 hover:bg-primary hover:text-primary-foreground group-hover:glow-neon"
                  >
                    {service.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* E-Gym Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Présentation d’E-Gym
          </h2>
          <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Une Solution Tout-en-Un pour Votre Salle
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                E-Gym est conçu pour automatiser, suivre et optimiser les
                opérations quotidiennes des salles de sport, avec une interface
                moderne et intuitive.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-broaven mb-4">
                    Fonctionnalités Clés
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Enregistrement rapide des clients en quelques clics",
                      "Gestion simplifiée des abonnements et paiements avec historique",
                      "Fiche médicale complète : antécédents, limitations physiques",
                      "Statistiques et analyses en temps réel : clients, revenus, factures",
                      "Exportation facile des données sous format exploitable",
                      "Calendrier intégré pour planifier rendez-vous et événements",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose E-Gym */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-broaven mb-4">
                    Pourquoi Choisir E-Gym ?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Gain de temps pour le personnel",
                      "Meilleure organisation administrative",
                      "Suivi médical et financier complet",
                      "Interface simple, moderne et intuitive",
                      "Accessible depuis tout appareil connecté",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plans */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-broaven mb-4">
                    Nos Offres
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {eGymPlans.map((plan, idx) => (
                      <Card
                        key={idx}
                        className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                            {plan.name}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground mt-2 font-semibold">
                            {plan.price}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Utilisateurs : {plan.users}
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Clients Max : {plan.maxClients}
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Paiements Max : {plan.maxPayments}
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Historique : {plan.history ? "✅" : "❌"}
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Calendrier : {plan.calendar ? "✅" : "❌"}
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Fiche Médicale : {plan.medical ? "✅" : "❌"}
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-broaven mb-4">
                    Témoignages
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {eGymTestimonials.map((testimonial, idx) => (
                      <Card
                        key={idx}
                        className="bg-card/80 backdrop-blur-sm border-border animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground italic">
                            "{testimonial.quote}"
                          </p>
                          <p className="text-sm text-foreground font-semibold mt-2">
                            — {testimonial.author}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-broaven mb-4">
                    FAQ
                  </h3>
                  <div className="space-y-4">
                    {eGymFAQs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border-b border-border pb-4 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <p className="text-sm font-medium text-foreground">
                          {faq.question}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <a href="https://forms.gle/example-e-gym-demo">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                    >
                      Rejoignez E-Gym Aujourd’hui !
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default ProductSection;

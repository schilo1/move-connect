import { Apple, CheckCircle, Send } from "lucide-react";
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

const GboNutrition = () => {
  const processSteps = [
    {
      title: "Vous nous donnez les informations",
      description:
        "Remplissez un formulaire détaillé avec vos caractéristiques (âge, taille, poids, niveau d'activité) et vos objectifs précis (perte de poids, prise de masse, etc.).",
      icon: Apple,
    },
    {
      title: "Nous créons votre plan personnalisé",
      description:
        "Notre équipe élabore un programme sur mesure incluant un menu nutritionnel, des conseils sur l'hygiène de vie, et un guide d'exercices adapté.",
      icon: CheckCircle,
    },
    {
      title: "Vous recevez votre guide",
      description:
        "Votre plan personnalisé vous est envoyé par e-mail ou via un espace client, prêt à être consulté et appliqué au quotidien.",
      icon: Send,
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sex: "",
    age: "",
    weight: "",
    height: "",
    objectives: [],
    activityLevel: "",
    dietaryPreferences: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, objectives: [...formData.objectives, value] });
    } else {
      setFormData({
        ...formData,
        objectives: formData.objectives.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend API)
    console.log("Form submitted:", formData);
    // Redirect to payment page (simulated)
    window.location.href = "/payment";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        {/* Header Section */}
        <section className="container mx-auto px-4 text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Apple className="w-5 h-5" />
            <span className="text-glow">Gbô Nutrition</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Transformez Votre Corps avec Gbô Nutrition
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Atteignez vos objectifs avec un plan conçu juste pour vous,
            combinant alimentation saine et hygiène de vie pour des résultats
            durables.
          </p>
          <a href="#form">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon mt-6"
            >
              Créez votre Plan Personnalisé
            </Button>
          </a>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Comment Ça Fonctionne ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
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

        {/* Form Section */}
        <section id="form" className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Remplissez Vos Informations
          </h2>
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Votre Plan Nutritionnel & Guide d'Entraînement
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Fournissez vos informations pour recevoir un plan personnalisé
                adapté à vos objectifs.
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Informations Personnelles
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
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
                      Sexe
                    </label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="male">Homme</option>
                      <option value="female">Femme</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Âge
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Poids (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Taille (cm)
                    </label>
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Objectifs
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Vos objectifs
                    </label>
                    {[
                      "Perte de poids",
                      "Prise de masse",
                      "Amélioration de l'énergie",
                    ].map((objective) => (
                      <label
                        key={objective}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          value={objective}
                          checked={formData.objectives.includes(objective)}
                          onChange={handleCheckboxChange}
                        />
                        {objective}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Niveau d'Activité
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Niveau d'activité physique
                    </label>
                    {["Débutant", "Intermédiaire", "Avancé"].map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="radio"
                          name="activityLevel"
                          value={level}
                          checked={formData.activityLevel === level}
                          onChange={handleInputChange}
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Préférences/Restrictions Alimentaires
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Préférences ou restrictions (ex. : végétarien, intolérance
                      au gluten)
                    </label>
                    <textarea
                      name="dietaryPreferences"
                      value={formData.dietaryPreferences}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      rows="4"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  Obtenez Votre Plan Personnalisé
                </Button>
              </form>
            </CardContent> */}
          </Card>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Paiement
          </h2>
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Obtenez Votre Plan Personnalisé
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Pour seulement 15 000 FCFA, recevez un plan nutritionnel et
                d'entraînement sur mesure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Payez facilement via des solutions locales comme MoMo ou Orange
                Money.
              </p>
              <a href="https://wa.me/+2250788199542">
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  Contacter nous pour le Paiement
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Livraison
          </h2>
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Recevez Votre Plan
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Une fois le paiement validé, votre plan personnalisé sera envoyé
                à votre adresse e-mail dans les 48 heures.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GboNutrition;

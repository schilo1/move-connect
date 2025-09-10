import { Users, CheckCircle, Calendar, Trophy } from "lucide-react";
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

const CoachPartenaire = () => {
  const advantages = [
    {
      title: "Accès à une Clientèle Ciblée",
      description:
        "Ne cherchez plus de clients, Gbo vous met en relation avec des personnes qui correspondent à votre expertise, via nos services de coaching en ligne et privé.",
      icon: Users,
    },
    {
      title: "Visibilité Accrue",
      description:
        "Mettez en avant votre profil et votre spécialité auprès de la communauté Gbo, renforçant ainsi votre crédibilité et votre notoriété.",
      icon: Trophy,
    },
    {
      title: "Flexibilité et Liberté",
      description:
        "Gérez votre propre planning et choisissez les missions qui vous correspondent, que ce soit pour des séances privées, des séances de groupe Gbô Fitness, ou des Gbô Challenges.",
      icon: Calendar,
    },
    {
      title: "Une Collaboration Fructueuse",
      description:
        "Gagnez un revenu complémentaire ou faites de votre passion votre activité principale, tout en bénéficiant du soutien d'une équipe professionnelle.",
      icon: CheckCircle,
    },
  ];

  const steps = [
    {
      title: "Remplissez le Formulaire de Candidature",
      description:
        "Partagez vos informations professionnelles, expérience, certifications et spécialités via notre formulaire en ligne.",
    },
    {
      title: "Entretien et Validation",
      description:
        "Un membre de notre équipe vous contactera pour un entretien afin de mieux vous connaître et vérifier vos qualifications.",
    },
    {
      title: "Signature du Contrat",
      description:
        "Une fois votre profil validé, vous signez un contrat de partenariat avec Gbo.",
    },
    {
      title: "Intégration et Visibilité",
      description:
        "Votre profil sera ajouté à notre base de données et vous serez mis en relation avec des clients ou projets Gbô.",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    commune: "",
    socialProfile: "",
    experienceYears: "",
    disciplines: [],
    experienceDetails: "",
    certifications: "",
    availability: [],
    coachingTypes: [],
    hasEquipment: "",
    motivation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, [field]: [...formData[field], value] });
    } else {
      setFormData({
        ...formData,
        [field]: formData[field].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        {/* Header Section */}
        <section className="container mx-auto px-4 text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Users className="w-5 h-5" />
            <span className="text-glow">Coach Partenaire</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Devenez un Coach Partenaire Gbô
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Vous êtes un coach sportif certifié, passionné par le bien-être et
            motivé à faire une différence ? Rejoignez notre communauté de
            professionnels et développez votre activité avec Gbô.
          </p>
          <a href="#apply">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon mt-6"
            >
              Postuler pour Devenir Coach Partenaire
            </Button>
          </a>
        </section>

        {/* Advantages */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Les Avantages d'être un Partenaire Gbô
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                      {advantage.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 font-semibold">
                      {advantage.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Process to Become a Partner */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Comment Devenir Coach Partenaire ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-broaven">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 font-semibold">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground font-broaven mb-8">
            Prêt à Faire Partie de l'Aventure ?
          </h2>
          <div className="flex justify-center mt-8">
            <Button className="w-full md:w-1/2 border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon font-broaven">
              Contacter nous sur whatsapp
            </Button>
          </div>
          {/* <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-broaven">
                Formulaire de Candidature
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2 font-semibold">
                Remplissez le formulaire ci-dessous pour rejoindre la communauté
                Gbô.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Coordonnées et Profil
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
                      Commune de résidence
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
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Profil LinkedIn ou Réseaux Sociaux
                    </label>
                    <input
                      type="url"
                      name="socialProfile"
                      value={formData.socialProfile}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Expérience et Spécialités
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Années d'expérience
                    </label>
                    <select
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="less-2">Moins de 2 ans</option>
                      <option value="2-5">2-5 ans</option>
                      <option value="more-5">Plus de 5 ans</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Disciplines de coaching
                    </label>
                    {[
                      "Fitness",
                      "Musculation",
                      "Perte de poids",
                      "Préparation physique",
                    ].map((discipline) => (
                      <label
                        key={discipline}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          value={discipline}
                          checked={formData.disciplines.includes(discipline)}
                          onChange={(e) =>
                            handleCheckboxChange(e, "disciplines")
                          }
                        />
                        {discipline}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Détails sur l'expérience
                    </label>
                    <textarea
                      name="experienceDetails"
                      value={formData.experienceDetails}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      rows="4"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Certifications et Diplômes
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Certification(s) professionnelle(s)
                    </label>
                    <input
                      type="text"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Télécharger les certifications (PDF/image)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.png"
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Disponibilités et Préférences
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Disponibilités hebdomadaires
                    </label>
                    {["Matins", "Après-midis", "Soirées"].map((time) => (
                      <label
                        key={time}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          value={time}
                          checked={formData.availability.includes(time)}
                          onChange={(e) =>
                            handleCheckboxChange(e, "availability")
                          }
                        />
                        {time}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Type de coaching souhaité
                    </label>
                    {[
                      "Coaching privé",
                      "Coaching en ligne",
                      "Séances de groupe Gbô Fitness",
                      "Gbô Challenges",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          value={type}
                          checked={formData.coachingTypes.includes(type)}
                          onChange={(e) =>
                            handleCheckboxChange(e, "coachingTypes")
                          }
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Avez-vous du matériel de sport ?
                    </label>
                    <select
                      name="hasEquipment"
                      value={formData.hasEquipment}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="yes">Oui</option>
                      <option value="no">Non</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Message pour Gbo
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Pourquoi rejoindre Gbô ?
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      rows="4"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground glow-neon"
                >
                  Soumettre ma Candidature
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoachPartenaire;

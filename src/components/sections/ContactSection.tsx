import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Plateau, Abidjan", "Côte d'Ivoire"]
    },
    {
      icon: Phone,
      title: "Téléphones",
      details: ["+225 XX XX XX XX", "+225 XX XX XX XX"]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contact@gbo.ci", "info@gbo.ci"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-card/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Mail className="w-5 h-5" />
            <span className="text-glow">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-broaven">
            Rejoignez le <span className="text-primary text-glow">mouvement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à transformer votre rapport au fitness ? Contactez-nous et 
            commençons ensemble votre parcours vers un mode de vie plus sain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="group hover:shadow-neon transition-all duration-300 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-foreground">Prénom</Label>
                  <Input 
                    id="firstname" 
                    placeholder="Votre prénom" 
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-foreground">Nom</Label>
                  <Input 
                    id="lastname" 
                    placeholder="Votre nom" 
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Sujet</Label>
                <Input 
                  id="subject" 
                  placeholder="Objet de votre message" 
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez-nous votre projet ou vos questions..." 
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button className="w-full glow-neon hover:animate-glow-pulse">
                <Mail className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-neon transition-all duration-300 bg-background/80 backdrop-blur-sm border-border hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground hover:glow-neon group"
                    >
                      <social.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {social.name}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Rejoignez notre communauté sur les réseaux sociaux pour ne rien manquer 
                  de nos événements, conseils et actualités fitness !
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40 glow-neon">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-foreground mb-2 text-glow">Contact rapide</h3>
                <p className="text-muted-foreground mb-4">
                  Besoin d'une réponse immédiate ? Contactez-nous sur WhatsApp !
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
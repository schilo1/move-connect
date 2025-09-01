import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "./button";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Coaching Personnel",
    "E-commerce Fitness", 
    "Nutrition Bio",
    "Événements Communautaires",
    "Formation Coachs"
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook" },
    { icon: Instagram, name: "Instagram" },
    { icon: Youtube, name: "YouTube" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6 col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/836eca42-076d-461c-a88c-12992ae86de9.png" 
                alt="GBÔ Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Plus qu'une pratique, un style de vie. GBÔ démocratise l'accès au fitness 
              et transforme la vie de milliers d'Ivoiriens à travers le sport accessible.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold text-glow">Énergie • Communauté • Bien-être</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Plateau, Abidjan, CI</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">+225 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">contact@gbo.ci</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Suivez-nous</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-9 h-9 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:glow-neon group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 GBÔ. Tous droits réservés. • Fitness accessible pour tous les Ivoiriens
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
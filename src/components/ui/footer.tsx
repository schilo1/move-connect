import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Zap,
  Share2,
} from "lucide-react";
import { Button } from "./button";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Coaching Personnel",
    "E-commerce Fitness",
    "Nutrition Bio",
    "Événements Communautaires",
    "Formation Coachs",
  ];

  const socialLinks = [
    {
      icon: Share2,
      name: "Tik Tok",
      url: " https://www.tiktok.com/@gbo.officiel?_t=ZM-8wN6IvvAT82&_r=1",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: " https://www.facebook.com/profile.php?id=61575698364674",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/gbo_officiel?igsh=MTE3YWMyeWI4c3V1aQ%3D%3D&utm_source=qr",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@gboofficiel?si=BFwxCxDvDoOgaIMM",
    },
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
              <img src="logo.png" alt="GBÔ Logo" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Plus qu'une pratique, un style de vie. GBÔ démocratise l'accès au
              fitness et transforme la vie de milliers d'Ivoiriens à travers le
              sport accessible.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold text-glow">
                Énergie • Communauté • Bien-être
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-broaven">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block font-broaven"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-broaven">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm font-broaven">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground font-broaven">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-bold">Plateau, Abidjan, CI</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-bold">+225 01 03 16 14 15</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-bold">
                  contact@gbo-officiel.com
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm font-broaven">
                Suivez-nous
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url.trim()} // remove extra spaces
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:glow-neon group"
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 GBÔ. Tous droits réservés. • Fitness accessible pour tous
              les Ivoiriens
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

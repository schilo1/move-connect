import { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/About" },
    { name: "Nos Offres", href: "/Offres" },
    // { name: "Témoignages", href: "#temoignages" },
    { name: "Partenariats", href: "/Partner" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="GBÔ Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-broaven font-medium"
              >
                {item.name}
              </a>
            ))}
            <a href="https://chat.whatsapp.com/Gkk6fY3AWxFGbD8ysJ0NV9?mode=ems_wa_c">
              {" "}
              <Button
                variant="default"
                className="glow-neon hover:animate-glow-pulse font-broaven"
              >
                <Play className="w-4 h-4 mr-2" />
                Rejoindre GBÔ
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-broaven py-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <a href="https://chat.whatsapp.com/Gkk6fY3AWxFGbD8ysJ0NV9?mode=ems_wa_c">
                {" "}
                <Button
                  variant="default"
                  className="glow-neon w-full mt-4 font-broaven"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Rejoindre GBÔ
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

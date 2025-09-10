import React from "react";
import ServicesSection from "@/components/sections/ServicesSection";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ProductSection from "@/components/sections/Product";

function Offres() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProductSection />
        <ServicesSection />
      </main>{" "}
      <Footer />
    </div>
  );
}

export default Offres;

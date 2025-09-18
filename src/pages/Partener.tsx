import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Partneradd from "@/components/sections/PartenerAdd";

function Partener() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {" "}
        <PartnersSection />
        <Partneradd />
      </main>
      <Footer />
    </div>
  );
}

export default Partener;

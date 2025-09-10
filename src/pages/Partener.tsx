import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import PartnersSection from "@/components/sections/PartnersSection";

function Partener() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {" "}
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default Partener;

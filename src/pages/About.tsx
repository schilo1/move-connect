import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import AboutSection from "@/components/sections/AboutSection";

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;

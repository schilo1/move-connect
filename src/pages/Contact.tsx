import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ContactSection from "@/components/sections/ContactSection";
function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

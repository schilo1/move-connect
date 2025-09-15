import ServicesSection from "@/components/sections/ServicesSection";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ProductSection from "@/components/sections/Product";

function ProductSections() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}

export default ProductSections;

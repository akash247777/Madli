import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import HowToUse from "@/components/HowToUse";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <HealthBenefits />
        <HowToUse />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

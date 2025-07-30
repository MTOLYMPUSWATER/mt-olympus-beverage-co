import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import AppleGiveaway from "@/components/AppleGiveaway";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <BenefitsSection />
      <SubscriptionSection />
      <AppleGiveaway />
      <Footer />
    </div>
  );
};

export default Index;
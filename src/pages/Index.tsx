import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import CompanyDescription from "@/components/CompanyDescription";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CompanyDescription />
      <Footer />
    </div>
  );
};

export default Index;

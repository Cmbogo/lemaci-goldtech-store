import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import laptopsHero from "@/assets/laptops-hero.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${laptopsHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Welcome to Lemaci
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Digital Plug
            </span>
          </h1>
          
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group text-lg px-10 py-6"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

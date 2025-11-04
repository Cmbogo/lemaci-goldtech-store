import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lemaciLogo from "@/assets/lemaci-logo.png";

const categories = ["Phones", "Tablets", "Laptops", "Accessories", "Contact"];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
   <nav className="sticky top-0 z-50 bg-cyan-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={lemaciy-Logo} alt="Lemaciy-Logo" className="w-19 h-19 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <Input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus-visible:ring-0 text-sm p-0"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center bg-secondary rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground mr-2" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none focus-visible:ring-0 text-sm p-0"
                />
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

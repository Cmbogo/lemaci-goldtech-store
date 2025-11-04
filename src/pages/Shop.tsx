import Navbar from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ${price.toLocaleString()}
          </p>
        </div>
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

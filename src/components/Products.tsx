import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    image: "/placeholder.svg",
    category: "Phones"
  },
  {
    id: 2,
    name: "Samsung Galaxy Tab S9",
    price: 899,
    image: "/placeholder.svg",
    category: "Tablets"
  },
  {
    id: 3,
    name: "MacBook Pro 16\"",
    price: 2499,
    image: "/placeholder.svg",
    category: "Laptops"
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    price: 249,
    image: "/placeholder.svg",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Google Pixel 8 Pro",
    price: 999,
    image: "/placeholder.svg",
    category: "Phones"
  },
  {
    id: 6,
    name: "iPad Pro 12.9\"",
    price: 1099,
    image: "/placeholder.svg",
    category: "Tablets"
  },
  {
    id: 7,
    name: "Dell XPS 15",
    price: 1799,
    image: "/placeholder.svg",
    category: "Laptops"
  },
  {
    id: 8,
    name: "Magic Keyboard",
    price: 149,
    image: "/placeholder.svg",
    category: "Accessories"
  }
];

export const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium devices and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

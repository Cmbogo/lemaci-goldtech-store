import { Award, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest products from trusted brands worldwide"
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your data is protected with industry-leading security"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Express shipping to get your tech to you quickly"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lemaci</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Lemaci, we believe technology should be both powerful and beautiful. 
            We curate the finest selection of phones, tablets, laptops, and accessories 
            to help you stay connected, productive, and inspired. Our commitment to 
            excellence, reliability, and customer satisfaction makes us your trusted 
            partner in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-background transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

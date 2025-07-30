import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Waves, Flame, Heart, Shield } from "lucide-react";
import zeusBottle from "@/assets/zeus-bottle.jpg";
import athenaBottle from "@/assets/athena-bottle.jpg";
import poseidonBottle from "@/assets/poseidon-bottle.jpg";

const products = [
  {
    id: "zeus",
    name: "Zeus",
    subtitle: "Focused Power",
    benefits: ["Caffeine + B12", "Enhanced Focus", "Lightning Energy"],
    color: "from-blue-500 to-yellow-400",
    icon: Zap,
    image: zeusBottle,
    price: "$4.99"
  },
  {
    id: "athena",
    name: "Athena",
    subtitle: "Wisdom Water",
    benefits: ["Nootropics", "Mental Clarity", "Cognitive Boost"],
    color: "from-purple-500 to-silver",
    icon: Brain,
    image: athenaBottle,
    price: "$4.99"
  },
  {
    id: "poseidon",
    name: "Poseidon",
    subtitle: "Pure Endurance",
    benefits: ["Electrolytes", "Hydration+", "Sea Minerals"],
    color: "from-blue-600 to-cyan-400",
    icon: Waves,
    image: poseidonBottle,
    price: "$4.99"
  },
  {
    id: "hades",
    name: "Hades",
    subtitle: "Recovery Dark",
    benefits: ["Post-Workout", "Muscle Recovery", "Dark Berries"],
    color: "from-red-600 to-black",
    icon: Flame,
    image: zeusBottle, // Placeholder
    price: "$4.99"
  },
  {
    id: "aphrodite",
    name: "Aphrodite",
    subtitle: "Beauty Elixir",
    benefits: ["Collagen", "Antioxidants", "Radiant Glow"],
    color: "from-pink-400 to-rose-300",
    icon: Heart,
    image: athenaBottle, // Placeholder
    price: "$4.99"
  },
  {
    id: "apollo",
    name: "Apollo",
    subtitle: "Immunity Shield",
    benefits: ["Vitamin C", "Zinc", "Immune Support"],
    color: "from-orange-400 to-yellow-300",
    icon: Shield,
    image: poseidonBottle, // Placeholder
    price: "$4.99"
  }
];

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-olympus text-4xl lg:text-5xl font-bold mb-6 greek-border">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Divine Collection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each bottle channels the essence of Greek mythology with modern functional benefits. 
            Choose your divine power and elevate your hydration experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 lightning-glow cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} bottle`}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredProduct === product.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        {product.price}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-olympus text-2xl font-bold text-foreground mb-1">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 transform transition-all duration-300 delay-${index * 100} ${
                            hoveredProduct === product.id 
                              ? "translate-x-0 opacity-100" 
                              : "translate-x-2 opacity-70"
                          }`}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Action */}
                    <div className={`pt-4 transform transition-all duration-300 ${
                      hoveredProduct === product.id 
                        ? "translate-y-0 opacity-100" 
                        : "translate-y-4 opacity-0"
                    }`}>
                      <div className="w-full bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/30 rounded-lg px-4 py-2 text-center font-medium transition-all duration-200">
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <button className="btn-divine">
            Explore All Divine Powers
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
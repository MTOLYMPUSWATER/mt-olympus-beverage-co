import { Card, CardContent } from "@/components/ui/card";
import { Zap, Brain, Shield, Heart, Flame, Waves } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Divine Energy",
    description: "Natural caffeine and B-vitamins for sustained power without the crash",
    color: "text-yellow-400"
  },
  {
    icon: Brain,
    title: "Mental Clarity", 
    description: "Nootropics and adaptogens to enhance focus and cognitive performance",
    color: "text-purple-400"
  },
  {
    icon: Shield,
    title: "Immune Defense",
    description: "Vitamin C, zinc, and antioxidants to fortify your natural defenses",
    color: "text-blue-400"
  },
  {
    icon: Heart,
    title: "Recovery Support",
    description: "Electrolytes and amino acids for optimal hydration and muscle recovery",
    color: "text-red-400"
  },
  {
    icon: Flame,
    title: "Metabolic Boost",
    description: "Natural metabolism enhancers to fuel your active lifestyle",
    color: "text-orange-400"
  },
  {
    icon: Waves,
    title: "Pure Hydration",
    description: "Premium alkaline water with essential minerals for optimal absorption",
    color: "text-cyan-400"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMjAgMjBoNjB2NjBIMjB6IiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCg0NSwgMTAwJSwgNTAlKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-olympus text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Divine Benefits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every Mt Olympus bottle is infused with carefully selected functional ingredients, 
            inspired by the powers of the gods and backed by modern science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="group relative border-2 border-border/50 hover:border-primary/50 transition-all duration-500 lightning-glow bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className="relative mx-auto w-16 h-16 bg-gradient-to-br from-card to-muted rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${benefit.color} group-hover:animate-pulse`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="font-olympus text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-card/50 to-muted/50 rounded-2xl border border-border/50 backdrop-blur-sm">
            <h3 className="font-olympus text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Which God's Power Calls to You?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Take our divine quiz to discover which Mt Olympus bottle matches your lifestyle and goals.
            </p>
            <button className="btn-marble">
              Take the God Match Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
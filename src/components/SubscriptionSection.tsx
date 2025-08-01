import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Crown, Gift, Users, Package } from "lucide-react";

const SubscriptionSection = () => {
  const [bottleCount, setBottleCount] = useState(1505637);
  const [spinningCard, setSpinningCard] = useState<number | null>(null);

  // Simulate live bottle counter
  useEffect(() => {
    const interval = setInterval(() => {
      setBottleCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: "Hero Pack",
      bottles: "12 bottles",
      price: "$45",
      originalPrice: "$59.88",
      savings: "Save 25%",
      features: ["Free shipping", "Cancel anytime", "Mix & match flavors", "4 Zeus, 4 Poseidon, 2 Athena, 2 Hades"],
      popular: false,
      badge: "🌟"
    },
    {
      name: "Zeus Only",
      bottles: "12 bottles", 
      price: "$48",
      originalPrice: "$59.88",
      savings: "Save 20%",
      features: ["Free shipping", "Cancel anytime", "Pure Zeus power", "Caffeine + B15", "Lightning focused"],
      popular: true,
      badge: "⚡"
    },
    {
      name: "Mythical Variety",
      bottles: "12 bottles",
      price: "$85", 
      originalPrice: "$119.76",
      savings: "Save 29%",
      features: ["Free shipping", "Cancel anytime", "All flavors included", "Limited editions", "God-tier rewards", "Flex plan"],
      popular: false,
      badge: "👑"
    }
  ];

  const handleCardClick = (index: number) => {
    setSpinningCard(index);
    // Reset after animation completes
    setTimeout(() => {
      setSpinningCard(null);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">DIVINE SUBSCRIPTION</span>
          </div>
          
          <h2 className="font-olympus text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join the Olympian Legion
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Subscribe and save on your divine hydration. Choose your power level and never run out of godly benefits.
          </p>

          {/* Live Stats */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                📦 {bottleCount.toLocaleString()} Bottles Sold
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                15,247 Happy Gods
              </span>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <Card
                className={`relative border-2 transition-all duration-500 lightning-glow cursor-pointer ${
                  spinningCard === index 
                    ? "animate-fifa-spin transform-gpu" 
                    : ""
                } ${
                  plan.popular 
                    ? "border-primary/50 bg-gradient-to-b from-primary/5 to-accent/5 scale-105" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{plan.badge}</div>
                <CardTitle className="font-olympus text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground">{plan.bottles}/month</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300">
                    {plan.savings}
                  </Badge>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${plan.popular ? "btn-divine" : "btn-marble"}`}
                >
                  Choose {plan.name}
                </Button>

                {/* Additional Info */}
                <p className="text-xs text-muted-foreground text-center">
                  Cancel or modify anytime. No commitments.
                </p>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>

        {/* Referral Program */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-6 h-6 text-primary" />
                <span className="text-primary font-olympus font-bold">DIVINE REWARDS</span>
              </div>
              
              <h3 className="font-olympus text-2xl font-bold mb-4">
                Spread the Divine Power
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Refer friends to join the Olympian Legion and earn divine rewards. 
                Get $10 credit for every friend who subscribes, plus they get 20% off their first order.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-divine">
                  Start Referring
                </Button>
                <Button variant="outline" className="btn-marble">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Build Your Pantheon Quiz - matching the reference */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <p className="text-sm text-primary font-medium mb-2">FIRST ACCESS TO LIMITED DROPS • SAVE 10% EACH MONTH • EARN</p>
            </div>
            
            <Button className="btn-divine text-lg px-8 py-4 rounded-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
              BUILD YOUR PANTHEON QUIZ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
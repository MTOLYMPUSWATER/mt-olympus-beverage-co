import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Crown, Gift, Users, Package } from "lucide-react";

const SubscriptionSection = () => {
  const [bottleCount, setBottleCount] = useState(21304);

  // Simulate live bottle counter
  useEffect(() => {
    const interval = setInterval(() => {
      setBottleCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: "Mortal",
      bottles: "6 bottles",
      price: "$24.99",
      originalPrice: "$29.94",
      savings: "Save 17%",
      features: ["Free shipping", "Cancel anytime", "Mix & match flavors"],
      popular: false,
      badge: "🌟"
    },
    {
      name: "Hero",
      bottles: "12 bottles", 
      price: "$44.99",
      originalPrice: "$59.88",
      savings: "Save 25%",
      features: ["Free shipping", "Cancel anytime", "Mix & match flavors", "Exclusive flavors", "Priority support"],
      popular: true,
      badge: "⚡"
    },
    {
      name: "Olympian",
      bottles: "24 bottles",
      price: "$79.99", 
      originalPrice: "$119.76",
      savings: "Save 33%",
      features: ["Free shipping", "Cancel anytime", "Mix & match flavors", "Exclusive flavors", "Priority support", "Limited edition bottles", "God-tier rewards"],
      popular: false,
      badge: "👑"
    }
  ];

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
                📦 {bottleCount.toLocaleString()} Bottles Delivered
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                12,847 Happy Gods
              </span>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-500 lightning-glow ${
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
      </div>
    </section>
  );
};

export default SubscriptionSection;
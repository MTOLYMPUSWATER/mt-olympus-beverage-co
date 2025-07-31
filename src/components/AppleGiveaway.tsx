import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Smartphone, Laptop, Clock, Star } from "lucide-react";

const AppleGiveaway = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 23,
    seconds: 45
  });

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const prizes = [
    { icon: Laptop, name: "MacBook Pro M3", value: "$2,000+" },
    { icon: Smartphone, name: "iPhone 15 Pro", value: "$1,200+" },
    { icon: Gift, name: "AirPods Pro", value: "$250+" },
    { icon: Star, name: "Apple Watch Ultra", value: "$800+" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-6xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-card/90 to-muted/90 backdrop-blur-sm shadow-2xl lightning-glow">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-primary animate-bounce" />
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
                    LIMITED TIME
                  </Badge>
                </div>

                <h2 className="font-olympus text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Win Divine Apple Tech
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Subscribe to any Mt Olympus plan or purchase a 12-pack and automatically enter to win the ultimate Apple tech bundle worth over $4,000.
                </p>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-r from-background/50 to-card/50 rounded-lg p-6 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Contest Ends In:</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hours", value: timeLeft.hours },
                      { label: "Minutes", value: timeLeft.minutes },
                      { label: "Seconds", value: timeLeft.seconds }
                    ].map((item, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary font-mono">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entry Methods */}
                <div className="space-y-3">
                  <h3 className="font-olympus text-xl font-bold">How to Enter:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Subscribe to any monthly plan = <strong>5 entries</strong></span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Purchase a 12-pack = <strong>3 entries</strong></span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Refer a friend = <strong>2 bonus entries</strong></span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-divine flex-1">
                    Subscribe & Enter
                  </Button>
                  <Button variant="outline" className="btn-marble flex-1">
                    Buy 12-Pack
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  No purchase necessary. Must be 18+ and US resident. See official rules for details.
                </p>
              </div>

              {/* Right Content - Prizes */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 border-l border-border/30">
                <h3 className="font-olympus text-2xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Prize Bundle
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {prizes.map((prize, index) => {
                    const IconComponent = prize.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group lightning-glow relative"
                      >
                        {index === 0 && (
                          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                            1st
                          </div>
                        )}
                        {index === 1 && (
                          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-accent to-secondary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                            2nd
                          </div>
                        )}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-bold text-sm mb-1">{prize.name}</h4>
                        <p className="text-xs text-primary font-medium">{prize.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Total Value */}
                <div className="mt-8 text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30">
                  <div className="text-3xl font-bold font-olympus mb-1">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      $4,250+
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Total Prize Value</div>
                </div>

                {/* Winner Announcement */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    🏆 Winner announced live on our socials
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Follow @MtOlympusWater for updates
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppleGiveaway;
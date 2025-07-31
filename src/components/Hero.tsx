import { Button } from "@/components/ui/button";
import { Zap, Crown, ShoppingCart } from "lucide-react";
import pantheonCollection from "@/assets/pantheon-four-cans.png";
import zeusBottle from "@/assets/zeus-can.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-olympus-blue to-olympus-shadow">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iaHNsKDQ1LCAxMDAlLCA1MCUpIiBvcGFjaXR5PSIwLjMiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20"></div>
        
        {/* Lightning Animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Crown className="w-8 h-8 text-primary" />
              <span className="text-primary font-olympus text-lg tracking-wider">MT OLYMPUS BEVERAGE CO</span>
            </div>
            
            <h1 className="font-olympus text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-olympus-gold to-primary bg-clip-text text-transparent">
                Drink Like a God
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover divine hydration with Mt Olympus functional waters. Each bottle channels the power of Greek gods with targeted benefits for your modern lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-divine group">
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Shop Now
              </Button>
              <Button variant="outline" className="btn-marble">
                <Zap className="w-5 h-5 mr-2" />
                Subscribe & Save
              </Button>
            </div>

            {/* Live Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,505,637</div>
                <div className="text-sm text-muted-foreground">Bottles Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Divine Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">God-Tier Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative">
              <img
                src={pantheonCollection}
                alt="Mt Olympus Divine Collection"
                className="w-full h-auto rounded-2xl shadow-2xl lightning-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-card border border-border rounded-lg p-4 shadow-lg glow-pulse">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Zeus: Focused Power</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-lg p-4 shadow-lg glow-pulse delay-500">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Poseidon: Pure Endurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
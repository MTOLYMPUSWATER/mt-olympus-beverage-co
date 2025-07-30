import { Crown, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Threads" },
    { icon: Youtube, href: "#", label: "TikTok" }
  ];

  const footerLinks = {
    Shop: [
      "All Products",
      "Zeus Collection", 
      "Athena Series",
      "Poseidon Line",
      "Limited Editions",
      "Gift Cards"
    ],
    Support: [
      "FAQs",
      "Shipping Info",
      "Returns",
      "Contact Us",
      "Live Chat",
      "Track Order"
    ],
    Company: [
      "Our Story",
      "Ingredients",
      "Sustainability", 
      "Careers",
      "Press",
      "Investors"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service", 
      "Cookie Policy",
      "Contest Rules",
      "Accessibility",
      "California Privacy"
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-olympus-shadow to-background border-t border-border/30">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-primary font-olympus font-bold">ENTER THE PANTHEON</span>
            </div>
            
            <h3 className="font-olympus text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join the Divine Newsletter
              </span>
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to new flavors, mythological content, divine discounts, and be the first to know about limited edition releases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="flex-1 bg-card border-border/50 focus:border-primary"
              />
              <Button className="btn-divine">
                Join Pantheon
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              Unsubscribe anytime. No spam, only divine content.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <span className="font-olympus text-2xl font-bold">Mt Olympus</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Premium functional hydration inspired by Greek mythology. Each bottle channels divine powers for your modern lifestyle.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>1-800-OLYMPUS</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>gods@mtolymp.us</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Mount Olympus, WA 98362</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-card hover:bg-primary border border-border hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-olympus font-bold text-foreground">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Mt Olympus Divine Hydration. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>🏆 Trusted by 12,847+ Gods</span>
              <span>⚡ 21,304+ Bottles Delivered</span>
              <span>🌟 4.9/5 Divine Rating</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border/10 text-center">
            <p className="text-xs text-muted-foreground">
              These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
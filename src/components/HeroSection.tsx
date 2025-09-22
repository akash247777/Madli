import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award } from "lucide-react";
import malediBowl from "@/assets/maledi-bowl.png";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBackground} 
          alt="Traditional ingredients background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-secondary/50 px-3 py-1 rounded-full">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Authentic Recipe</span>
              </div>
              <div className="flex items-center space-x-1 bg-secondary/50 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">100% Natural</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Discover the
                <span className="block bg-gradient-golden bg-clip-text text-transparent">
                  Authentic Taste
                </span>
                of North Karnataka
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                ShaktiMix' Maledi Pudi (Madli) – A wholesome alternative to energy bars, 
                crafted with traditional recipes and love.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card/50 p-4 rounded-lg border border-border shadow-subtle">
                <h3 className="font-semibold text-foreground mb-1">Traditional Recipe</h3>
                <p className="text-sm text-muted-foreground">Passed down generations</p>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-border shadow-subtle">
                <h3 className="font-semibold text-foreground mb-1">250g Pack</h3>
                <p className="text-sm text-muted-foreground">Perfect family size</p>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-border shadow-subtle">
                <h3 className="font-semibold text-foreground mb-1">Energy Boost</h3>
                <p className="text-sm text-muted-foreground">Natural ingredients</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground text-lg px-8 py-6 shadow-warm group"
              >
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">1000+ Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Natural Ingredients</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img
                src={malediBowl}
                alt="Delicious Maledi Pudi in a bowl with garnishing"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-golden"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-5 right-10 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-subtle animate-bounce z-20">
              Made Fresh Daily
            </div>
            <div className="absolute bottom-2 left-0 bg-card/90 backdrop-blur-sm border border-border p-3 rounded-lg shadow-subtle z-20">
              <p className="text-sm font-medium text-foreground">Ready in 2 minutes</p>
              <p className="text-xs text-muted-foreground">Just add milk & ghee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
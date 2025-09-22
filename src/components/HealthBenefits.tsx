import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Zap, 
  Brain, 
  Activity, 
  Moon,
  Wheat,
  Leaf
} from "lucide-react";

const HealthBenefits = () => {
  const benefits = [
    {
      icon: Wheat,
      title: "Wheat Flour",
      description: "Rich in fiber and aids digestion",
      color: "text-amber-600"
    },
    {
      icon: Heart,
      title: "Cardamom",
      description: "Antioxidant and anti-inflammatory properties",
      color: "text-green-600"
    },
    {
      icon: Activity,
      title: "Groundnuts",
      description: "High in protein and healthy fats",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Jaggery",
      description: "Natural sweetener and energy booster",
      color: "text-yellow-600"
    },
    {
      icon: Moon,
      title: "Khaskhas",
      description: "Supports sleep and bone health",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Dry Fruits",
      description: "Packed with vitamins and antioxidants",
      color: "text-red-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-warm-cream text-warm-brown">Health Benefits</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nutrition in Every Spoonful
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each ingredient in our Maledi Pudi is carefully selected for its nutritional 
            value and health benefits, creating a perfect balance of taste and wellness.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border shadow-subtle hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-warm-cream flex items-center justify-center ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-subtle">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Why Choose Maledi Pudi?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Natural Energy Source</h4>
                    <p className="text-muted-foreground">
                      Unlike processed energy bars, our Maledi Pudi provides sustained energy 
                      from natural ingredients without artificial additives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Digestive Health</h4>
                    <p className="text-muted-foreground">
                      The high fiber content from wheat flour and the natural properties of 
                      cardamom support healthy digestion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Complete Nutrition</h4>
                    <p className="text-muted-foreground">
                      A perfect balance of carbohydrates, proteins, healthy fats, and 
                      essential minerals in one delicious mix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-golden rounded-2xl p-8 text-center shadow-golden">
                <Brain className="h-16 w-16 text-black mx-auto mb-4" />
                <h4 className="text-xl font-bold text-black mb-2">Perfect for</h4>
                <ul className="space-y-2 text-black">
                  <li>• Growing children</li>
                  <li>• Active adults</li>
                  <li>• Senior citizens</li>
                  <li>• Health-conscious families</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Package, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import malediBowl from "@/assets/maledi-bowl.png";
import malediPackage from "@/assets/maledi-package.png";
import womenImage from "@/assets/women.png";

const ProductShowcase = () => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through (main carousel)
  const productImages = [
    {
      src: malediPackage,
      alt: "Maledi Pudi in bowl with garnish",
      label: "Premium Pack"
    },
    {
      src: womenImage ,
      alt: "Maledi Pudi package",
      label: "Ready to Eat"
    }
  ];

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [productImages.length]);

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart! 🛒",
      description: "Maledi Pudi (250g) has been added to your cart.",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist 💔" : "Added to Wishlist ❤️",
      description: isLiked ? "Item removed from your wishlist." : "Item saved to your wishlist.",
    });
  };
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-warm-cream text-warm-brown">Our Product</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Maledi Pudi (Madli)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A delightful sweetmeat from North Karnataka, made from Kadak Chapatis blended with 
            wheat flour, jaggery, cardamom, groundnuts, khaskhas, and dry fruits.
          </p>
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden">
              <img
                key={currentImageIndex}
                src={productImages[currentImageIndex].src}
                alt={productImages[currentImageIndex].alt}
                className="w-full rounded-3xl shadow-warm transition-all duration-500 ease-in-out transform"
              />
              <div className="absolute top-6 left-6 bg-warm-gold text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300">
                {productImages[currentImageIndex].label}
              </div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {productImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-warm-gold scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={malediBowl}
                alt="Woman enjoying Maledi Pudi - Healthy Choice"
                className="w-full rounded-2xl shadow-subtle"
              />
              <div className="bg-gradient-warm rounded-2xl p-6 flex items-center justify-center shadow-subtle">
                <div className="text-center">
                  <Package className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">250g Pack</p>
                  <p className="text-xs text-muted-foreground">Family Size</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Wheat Chapati Sweet Powder Mix
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Authentic North Karnataka delicacy crafted from traditional recipes. 
                Each spoonful delivers the perfect blend of nutrition and taste.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warm-cream rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-warm-brown" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Quick Prep</p>
                  <p className="text-sm text-muted-foreground">2 minutes only</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warm-cream rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-warm-brown" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Premium Pack</p>
                  <p className="text-sm text-muted-foreground">250g size</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Ingredients:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Wheat Flour",
                  "Jaggery",
                  "Cardamom",
                  "Groundnuts",
                  "Khaskhas",
                  "Dry Fruits"
                ].map((ingredient) => (
                  <Badge
                    key={ingredient}
                    variant="secondary"
                    className="bg-warm-cream text-warm-brown hover:bg-warm-earth"
                  >
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Serving Suggestion */}
            <Card className="bg-gradient-warm border-warm-earth">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">How to Enjoy:</h4>
                <p className="text-muted-foreground">
                  Mix with warm milk and a dollop of ghee for a healthy, tasty, and energizing treat. 
                  Perfect for breakfast or as an evening snack.
                </p>
              </CardContent>
            </Card>

            {/* Price & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-foreground">₹299</span>
                <span className="text-lg text-muted-foreground line-through">₹399</span>
                <Badge className="bg-warm-gold text-black">25% OFF</Badge>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-warm"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleLike}
                  className={`border-primary ${isLiked ? 'bg-primary text-primary-foreground' : 'text-primary hover:bg-primary hover:text-primary-foreground'}`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground flex items-center">
                <Package className="mr-2 h-4 w-4" />
                Free delivery on orders above ₹500
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
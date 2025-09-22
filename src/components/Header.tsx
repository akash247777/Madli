import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-golden">
              <span className="text-sm font-bold text-primary-foreground">FF</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">ShaktiMix</h1>
              <p className="text-xs text-muted-foreground">Authentic Flavors</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Health Benefits
            </a>
            <a href="#recipes" className="text-foreground hover:text-primary transition-colors">
              Recipes
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-warm">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors py-2">
                Shop
              </a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors py-2">
                Health Benefits
              </a>
              <a href="#recipes" className="text-foreground hover:text-primary transition-colors py-2">
                Recipes
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <ThemeToggle />
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-warm">
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
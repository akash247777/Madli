import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-golden flex items-center justify-center">
                  <span className="text-sm font-bold text-warm-brown">FF</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">ShaktiMix</h3>
                  <p className="text-sm text-warm-cream/80">Authentic Flavors</p>
                </div>
              </div>
              <p className="text-warm-cream/80 leading-relaxed">
                Bringing you the authentic taste of North Karnataka with our traditional 
                Maledi Pudi, made with love and the finest natural ingredients.
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-warm-brown">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-warm-brown">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-warm-brown">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Home</a></li>
                <li><a href="#about" className="text-warm-cream/80 hover:text-warm-cream transition-colors">About Us</a></li>
                <li><a href="#shop" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Shop</a></li>
                <li><a href="#benefits" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Health Benefits</a></li>
                <li><a href="#recipes" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Recipes</a></li>
                <li><a href="#contact" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">FAQ</a></li>
                <li><a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Connected</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-warm-gold" />
                  <span className="text-warm-cream/80 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-warm-gold" />
                  <span className="text-warm-cream/80 text-sm">hello@florafoods.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-warm-gold mt-1" />
                  <span className="text-warm-cream/80 text-sm leading-relaxed">
                    Karnataka, India<br />
                    Delivering Pan India
                  </span>
                </div>
              </div>
              
              <div className="pt-4">
                <h5 className="font-medium mb-2">Newsletter</h5>
                <p className="text-sm text-warm-cream/80 mb-3">Get updates on new products and offers</p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter email" 
                    className="bg-warm-brown border-warm-cream/30 text-warm-cream placeholder:text-warm-cream/60"
                  />
                  <Button className="bg-warm-gold text-warm-brown hover:bg-warm-gold/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-cream/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-warm-cream/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-warm-gold" />
              <span>in Karnataka, India</span>
            </div>
            <p className="text-warm-cream/80 text-sm">
              © 2024 ShaktiMix. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Privacy Policy</a>
              <a href="#" className="text-warm-cream/80 hover:text-warm-cream transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
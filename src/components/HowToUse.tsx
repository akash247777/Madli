import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Droplets, Utensils, Heart, Play, Volume2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import v1Video from "@/assets/v1.mp4";
import v2Video from "@/assets/v2.mp4";
import v3Video from "@/assets/v3.mp4";

const HowToUse = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to play next video automatically
  const playNextVideo = () => {
    setActiveVideo((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Loop back to first video if we've reached the end
      return nextIndex >= videoSources.length ? 0 : nextIndex;
    });
  };

  // Force video to load and play when activeVideo changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(console.error);
    }
  }, [activeVideo]);

  const videoSources = [
    {
      title: "Quick Preparation Demo",
      description: "Watch how easy it to eat with Milk and Ghee",
      videoUrl: v1Video,
    },
    {
      title: "Traditional Method",
      description: "Learn the authentic North Karnataka way",
      videoUrl: v2Video,
    },
    {
      title: "Breakfast Recipe",
      description: "Perfect morning preparation technique",
      videoUrl: v3Video,
    }
  ];
  const steps = [
    {
      icon: Utensils,
      title: "Take 2-3 spoons",
      description: "Add Maledi Pudi to your bowl",
      time: "Step 1"
    },
    {
      icon: Droplets,
      title: "Add warm milk",
      description: "Pour warm milk to desired consistency",
      time: "Step 2"
    },
    {
      icon: Heart,
      title: "Add ghee",
      description: "A dollop of ghee for extra richness",
      time: "Step 3"
    },
    {
      icon: Clock,
      title: "Mix & enjoy",
      description: "Stir well and savor the authentic taste",
      time: "Ready!"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">How to Prepare</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready in Just 2 Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preparing our authentic Maledi Pudi is incredibly simple. Follow these easy steps 
            for a delicious and nutritious treat that's perfect any time of day.
          </p>
        </div>

        {/* Video Demos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Video Demos</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Watch How To eat
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See for yourself how quick and easy it is to prepare ShaktiMix Maledi Pudi
            </p>
          </div>

          {/* Main Video Player */}
          <div className="rounded-3xl p-6 md:p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-golden">
                {/* Direct Video Player - No thumbnails, no controls, autoplay */}
                <video 
                  ref={videoRef}
                  key={activeVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  onEnded={playNextVideo}
                  style={{ outline: 'none' }}
                >
                  <source src={videoSources[activeVideo].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-6 text-center">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {videoSources[activeVideo].title}
                </h4>
                <p className="text-muted-foreground">
                  {videoSources[activeVideo].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border shadow-subtle hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-hero rounded-full w-8 h-8 flex items-center justify-center shadow-golden">
                    <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                </div>
                
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                
                <Badge variant="secondary" className="bg-warm-earth text-warm-brown">
                  {step.time}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Serving Suggestions */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-subtle border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Perfect for Every Occasion
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Maledi Pudi is versatile and can be enjoyed in multiple ways throughout the day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-warm-brown" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Breakfast</h4>
                <p className="text-muted-foreground text-sm">
                  Start your day with energy and nutrition. Perfect with warm milk and ghee.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-warm-brown" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Evening Snack</h4>
                <p className="text-muted-foreground text-sm">
                  A healthy alternative to processed snacks. Satisfying and nutritious.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-warm-brown" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Post-Workout</h4>
                <p className="text-muted-foreground text-sm">
                  Quick energy replenishment with natural ingredients and proteins.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-warm"
            >
              Order Your Pack Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
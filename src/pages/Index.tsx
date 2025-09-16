import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Zap } from 'lucide-react';
import flexbraLogo from '@/assets/flexbra-logo.png';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Support',
      description: 'Advanced support technology for high-impact activities'
    },
    {
      icon: Heart,
      title: 'Ultimate Comfort',
      description: 'Seamless construction with premium moisture-wicking fabric'
    },
    {
      icon: Zap,
      title: 'Performance Ready',
      description: 'Built for athletes who demand the best from their gear'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-secondary/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <img 
            src={flexbraLogo} 
            alt="FlexBra Logo" 
            className="h-20 w-20 mx-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Feel the Flex
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium drop-shadow-lg">
            Support that moves with you
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Discover the perfect blend of style, comfort, and performance with our premium sports bra collection.
          </p>
          <Link to="/products">
            <Button variant="hero" size="xl" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Choose FlexBra?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every FlexBra is engineered with precision to deliver unmatched support, 
              comfort, and style for your active lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Feel the Difference?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of athletes who trust FlexBra for their toughest workouts.
          </p>
          <Link to="/products">
            <Button variant="hero" size="xl" className="group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

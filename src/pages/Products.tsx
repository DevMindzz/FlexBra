import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import sportsbraPink from '@/assets/sports-bra-pink.jpg';
import sportsbraNavy from '@/assets/sports-bra-navy.jpg';
import sportsbraWhite from '@/assets/sports-bra-white.jpg';

const products = [
  {
    id: '1',
    name: 'FlexCore Pro - Pink Power',
    price: 89,
    image: sportsbraPink,
    description: 'High-impact support with moisture-wicking technology',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'FlexCore Elite - Navy Storm',
    price: 95,
    image: sportsbraNavy,
    description: 'Premium mesh panels for ultimate breathability',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'FlexCore Active - Pure White',
    price: 79,
    image: sportsbraWhite,
    description: 'Racerback design with coral accent details',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'FlexCore Max - Coral Fusion',
    price: 99,
    image: sportsbraPink,
    description: 'Maximum support for high-intensity workouts',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'FlexCore Light - Midnight Navy',
    price: 69,
    image: sportsbraNavy,
    description: 'Lightweight support for yoga and pilates',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'FlexCore Sport - Ice White',
    price: 85,
    image: sportsbraWhite,
    description: 'Seamless construction for all-day comfort',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

export default function Products() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Premium Sports Bras
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our collection of high-performance sports bras designed for ultimate support, 
            comfort, and style during every workout.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth bg-card border-border">
                <div className="aspect-square overflow-hidden bg-gradient-subtle">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="shop"
                    size="lg"
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Card } from './ui/card';
import { Sun, Palette, Brain, Grid3x3, Clock, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Sun,
      title: 'Light Analysis',
      description: 'Understand light direction, quality, and color temperature. Learn how golden hour affects your shots.',
      color: 'text-accent'
    },
    {
      icon: Palette,
      title: 'Color Intelligence',
      description: 'Discover dominant colors, harmony types, and how color mood impacts your photos emotional resonance.',
      color: 'text-secondary'
    },
    {
      icon: Brain,
      title: 'Emotion Detection',
      description: 'AI analyzes subject emotions, storytelling quality, and the overall mood your photo conveys.',
      color: 'text-primary'
    },
    {
      icon: Grid3x3,
      title: 'Composition Rules',
      description: 'Identify rule of thirds, leading lines, symmetry, and negative space usage in your photography.',
      color: 'text-success'
    },
    {
      icon: Clock,
      title: 'Reshoot Suggestions',
      description: 'Get recommendations for the best time, weather, and angles to capture the perfect shot at your location.',
      color: 'text-chart-1'
    },
    {
      icon: TrendingUp,
      title: 'Learn & Improve',
      description: 'Educational feedback helps you understand photography principles and improve your skills over time.',
      color: 'text-chart-2'
    }
  ];

  return (
    <section id= "features " className= "py-16 sm:py-20 ">
      <div className= "container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className= "text-center mb-16 animate-fade-in ">
          <h2 className= "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 ">
            Powerful Features for{' '}
            <span className= "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
              Learning Photographers
            </span>
          </h2>
          <p className= "text-lg text-muted-foreground max-w-2xl mx-auto ">
            Every feature is designed to help you understand and master the art of photography
          </p>
        </div>

        <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className= "p-6 bg-gradient-card shadow-card border-border hover:shadow-elegant transition-smooth group animate-slide-up "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className= "mb-4 ">
                  <div className= "w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-smooth ">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className= "text-xl font-heading font-semibold text-foreground mb-3 ">
                  {feature.title}
                </h3>
                <p className= "text-muted-foreground leading-relaxed ">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
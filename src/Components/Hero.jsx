import React from 'react';
import { Camera, Brain, Map, Lightbulb } from 'lucide-react';

export const Hero = () => {
  return (
    <section className= "relative overflow-hidden py-20 sm:py-28 lg:py-36 ">
      <div className= "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 " />
      <div className= "absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl " />
      <div className= "absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl " />
      
      <div className= "container relative mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className= "mx-auto max-w-4xl text-center animate-fade-in ">
          <div className= "inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 mb-8 border border-primary/20 ">
            <Lightbulb className= "h-4 w-4 text-primary " />
            <span className= "text-sm font-medium text-primary ">AI-Powered Photo Intelligence</span>
          </div>
          
          <h1 className= "text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 ">
            Understand{' '}
            <span className= "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              Why Your Photos
            </span>{' '}
            Work
          </h1>
          
          <p className= "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed ">
            Location & emotion-based photo analysis that helps you learn photography. 
            Get instant insights into light, composition, and mood—no editing, just understanding.
          </p>
          
          <div className= "flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <a 
              href="#upload" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl transition-all hover:opacity-90 active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                <Camera className="h-5 w-5" />
                Analyze Your Photo
              </span>
            </a>
            <a 
              href= "#how-it-works " 
              className= "w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-card hover:bg-muted border border-border rounded-xl transition-smooth "
            >
              Learn More
            </a>
          </div>
          
          <div className= "mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left ">
            <div className= "flex items-start space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur ">
              <Brain className= "h-6 w-6 text-primary flex-shrink-0 mt-1 " />
              <div>
                <h3 className= "font-heading font-semibold text-foreground mb-1 ">AI Analysis</h3>
                <p className= "text-sm text-muted-foreground ">Deep learning insights into light, color, and emotion</p>
              </div>
            </div>
            
            <div className= "flex items-start space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur ">
              <Map className= "h-6 w-6 text-secondary flex-shrink-0 mt-1 " />
              <div>
                <h3 className= "font-heading font-semibold text-foreground mb-1 ">Location Context</h3>
                <p className= "text-sm text-muted-foreground ">Best times and conditions for reshooting</p>
              </div>
            </div>
            
            <div className= "flex items-start space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur ">
              <Camera className= "h-6 w-6 text-accent flex-shrink-0 mt-1 " />
              <div>
                <h3 className= "font-heading font-semibold text-foreground mb-1 ">Learn & Improve</h3>
                <p className= "text-sm text-muted-foreground ">Educational feedback on composition rules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
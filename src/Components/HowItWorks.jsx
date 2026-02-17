import React from 'react';
import { Card } from './ui/card.jsx';
import { Upload, Zap, Eye, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Photo',
      description: 'Choose a photo from your device or take one with your camera. Add optional location and time details for more accurate insights.',
      number: '01'
    },
    {
      icon: Zap,
      title: 'AI Analysis',
      description: 'Our advanced AI powered by Google Gemini analyzes light, color, emotion, and composition in seconds with professional-grade accuracy.',
      number: '02'
    },
    {
      icon: Eye,
      title: 'Understand Results',
      description: 'Get detailed breakdowns with visual scores, explanations, and educational insights into what makes your photo work.',
      number: '03'
    },
    {
      icon: Sparkles,
      title: 'Learn & Improve',
      description: 'Apply the recommendations, try suggested angles and times, and watch your photography skills grow with each upload.',
      number: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            How ShotSense Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to unlock professional photography insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line - Flat and subtle */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border/50" 
               style={{ width: '80%', margin: '0 10%' }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative group transition-all duration-300"
              >
                {/* Step Number - Pure White Background, Sharp Border */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-black font-bold text-sm z-20 shadow-sm">
                  {step.number}
                </div>

                <Card className="p-8 bg-card/30 backdrop-blur-md border border-border rounded-3xl h-full flex flex-col hover:bg-card/50 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
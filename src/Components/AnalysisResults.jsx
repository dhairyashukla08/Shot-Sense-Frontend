import React, { useEffect } from 'react';
import { Card } from "./ui/card.jsx";
import { Badge } from './ui/badge.jsx';
import { Progress } from './ui/progress.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs.jsx';
import { 
  Sun, 
  Palette, 
  Heart, 
  Grid3x3, 
  MapPin, 
  Camera, 
  MessageSquare,
  Clock,
  CloudSun,
  Activity
} from 'lucide-react';
import { VirtualViewfinder } from './VirtualViewfinder.jsx';
import { useShutter } from '../Hooks/useShutter.js';
import { AnimatePresence,motion } from 'framer-motion';

export const AnalysisResults = ({ results, imageBase64 }) => {

  const { playShutter, isFlashing } = useShutter();
  useEffect(() => {
    if (results) {
      playShutter();
    }
  }, [results, playShutter]);
  if (!results) return null;

  const {
    light_analysis = { score: 0, direction: 'N/A', quality: 'N/A' },
    color_analysis = { score: 0, dominant_colors: [], mood: 'N/A' },
    emotion_analysis = { score: 0, primary_emotion: 'N/A' },
    composition_analysis = { score: 0, rules_applied: [], focal_points: [] },
    reshoot_suggestions = { best_time: 'N/A', alternative_angles: [] },
    lens_recommendations = [],
    caption_ideas = []
  } = results;

  const imageSrc = imageBase64?.startsWith('data:image') 
    ? imageBase64 
    : `data:image/jpeg;base64,${imageBase64}`;

  return (
    <>
    <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>
   
    <section className="py-20 bg-background border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="default" className="mb-4">
              Analysis Complete
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Photo Intelligence Report
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visual breakdown and algorithmic insights for your composition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            
            {/* Image Preview with Virtual Viewfinder */}
            <div className="relative">
              <VirtualViewfinder>
                <img
                  src={imageSrc}
                  alt="Analyzed"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </VirtualViewfinder>
            </div>

            {/* Overall Scores - Noir Styling */}
            <Card className="p-8 bg-card/30 backdrop-blur-md border-border/50 rounded-3xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <Activity className="mr-3 h-5 w-5 text-primary" />
                Performance Metrics
              </h3>
              
              <div className="space-y-8">
                {[
                  { label: "Light Quality", score: light_analysis.score, icon: Sun, color: "text-white" },
                  { label: "Color Harmony", score: color_analysis.score, icon: Palette, color: "text-white/70" },
                  { label: "Emotional Impact", score: emotion_analysis.score, icon: Heart, color: "text-white/70" },
                  { label: "Composition", score: composition_analysis.score, icon: Grid3x3, color: "text-white/70" }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center">
                        <stat.icon className={`mr-2 h-4 w-4 ${stat.color}`} />
                        {stat.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-white">{stat.score}%</span>
                    </div>
                    <Progress value={stat.score} className="h-1 bg-white/5" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Detailed Analysis Tabs */}
          <Tabs defaultValue="light" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-10 bg-muted/20 p-1 rounded-2xl border border-white/5">
              <TabsTrigger value="light" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-black">
                Light
              </TabsTrigger>
              <TabsTrigger value="color" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-black">
                Color
              </TabsTrigger>
              <TabsTrigger value="emotion" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-black">
                Emotion
              </TabsTrigger>
              <TabsTrigger value="composition" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-black">
                Composition
              </TabsTrigger>
            </TabsList>

            <TabsContent value="light">
              <Card className="p-8 bg-card/30 backdrop-blur-md border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Lighting Architecture</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Direction</p>
                    <p className="text-lg text-white font-medium">{light_analysis.direction}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Quality</p>
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      {light_analysis.quality}
                    </Badge>
                  </div>
                  <div className="sm:col-span-2 pt-4 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Shadow Dynamics</p>
                    <p className="text-white/80 leading-relaxed">{light_analysis.shadows}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Content for other tabs follows similar Noir styling... */}
            <TabsContent value="color">
              <Card className="p-8 bg-card/30 backdrop-blur-md border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Chromatic Profile</h3>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {color_analysis.dominant_colors.map((color, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-1">
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-white/80 italic">"{color_analysis.palette_description}"</p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="emotion">
              <Card className="p-8 bg-card/30 backdrop-blur-md border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Atmospheric Impact</h3>
                <div className="flex items-center gap-6 mb-8">
                  <div className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-xl uppercase tracking-tighter">
                    {emotion_analysis.primary_emotion}
                  </div>
                  <div className="text-sm text-white/60">
                    Intensity: <span className="text-white font-bold">{emotion_analysis.intensity}</span>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">{emotion_analysis.storytelling}</p>
              </Card>
            </TabsContent>

            <TabsContent value="composition">
              <Card className="p-8 bg-card/30 backdrop-blur-md border-white/10 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Structural Rules</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    {composition_analysis.rules_applied.map((rule, index) => (
                      <div key={index} className="flex items-center text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {rule}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Visual Balance</p>
                    <p className="text-sm text-white/80">{composition_analysis.balance}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Bottom Grid: Recommendations */}
          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card/20 border-white/5 rounded-3xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> Reshoot Strategy
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="text-[10px] text-white/40 font-bold uppercase mb-1">Optimum Time</p>
                  <p className="text-sm text-white">{reshoot_suggestions.best_time}</p>
                </div>
                <ul className="space-y-2 text-xs text-white/60 pl-2">
                  {reshoot_suggestions.alternative_angles.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card/20 border-white/5 rounded-3xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center">
                <Camera className="mr-2 h-4 w-4" /> Hardware Suggestion
              </h4>
              <div className="space-y-3">
                {lens_recommendations.map((lens, i) => (
                  <div key={i} className="text-xs p-3 border border-white/10 rounded-xl text-white/80">
                    {lens}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/20 border-white/5 rounded-3xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" /> Social Narrative
              </h4>
              <div className="space-y-3">
                {caption_ideas.map((c, i) => (
                  <p key={i} className="text-xs italic text-white/60 bg-white/5 p-3 rounded-xl border border-white/5">
                    "{c}"
                  </p>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
     </>
  );
};

export default AnalysisResults;
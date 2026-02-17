import React, { useState, useEffect } from "react";
import { Toaster } from "./Components/ui/sonner";
import { Button } from "./Components/ui/button";
import { RotateCcw, ArrowUp } from "lucide-react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import UploadSection from "./Components/UploadSection";
import AnalysisResults from "./Components/AnalysisResults";
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Components/Footer";
import { AppLoader } from "./Components/Loader";

export default function App() {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnalysisComplete = (results, imageBase64) => {
    setAnalysisResults(results);
    setSelectedImage(imageBase64);

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleReset = () => {
    setAnalysisResults(null);
    setSelectedImage(null);

    setTimeout(() => {
      document.getElementById("upload")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!appReady) return <AppLoader />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {!analysisResults && (
          <UploadSection
            onAnalysisComplete={handleAnalysisComplete}
            hasResults={!!analysisResults}
          />
        )}

        {analysisResults && (
          <div id="results">
            <AnalysisResults
              results={analysisResults}
              imageBase64={selectedImage}
            />

            <div className="py-12 text-center bg-muted/30">
              <div className="container mx-auto px-4">
                <Button
                  onClick={handleReset}
                  size="lg"
                  className="gap-2 shadow-elegant"
                  variant="default"
                >
                  <RotateCcw className="h-5 w-5" />
                  Analyze Another Photo
                </Button>
              </div>
            </div>
          </div>
        )}

        <Features />
        <HowItWorks />
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <Toaster richColors position="bottom-right" />
    </div>
  );
}

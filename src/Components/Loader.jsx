import React from "react";
import { Camera, Sparkles, Aperture } from "lucide-react";

export const AnalysisLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 border-2 border-white/20 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-24 h-24 border-2 border-white/30 rounded-full animate-pulse"
            style={{ animationDuration: "1.5s" }}
          />
        </div>

        <div className="relative z-10 bg-gradient-to-br from-white to-gray-300 rounded-full p-8 shadow-2xl">
          <Aperture
            className="w-16 h-16 text-black animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </div>

        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "4s" }}
        >
          <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 text-white" />
        </div>
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "3s", animationDirection: "reverse" }}
        >
          <Sparkles className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Analyzing Your Photo
        </h3>
        <p className="text-gray-400 text-sm">
          AI is examining composition, light & emotion
        </p>
      </div>
    </div>
  );
};

export const AppLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="relative">
            <Camera className="w-20 h-20 text-white" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="w-full h-0.5 bg-white shutter-animation" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent shimmer-animation bg-[length:200%_100%]">
          ShotSense
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Photo Intelligence Platform
        </p>

        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full loading-bar-animation" />
        </div>
      </div>

      <style>{`
        @keyframes shutter {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .shutter-animation {
          animation: shutter 2s ease-in-out infinite;
        }
        .shimmer-animation {
          animation: shimmer 3s ease-in-out infinite;
        }
        .loading-bar-animation {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnalysisLoader;

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Camera, MapPin, Clock, Sparkles } from "lucide-react";
import { Card } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Label } from "./ui/label.jsx";
import { useAnalysis } from "../Hooks/useAnalysis.js";

const UploadSection = ({ onAnalysisComplete }) => {
  const [location, setLocation] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const { analyzeImage, loading } = useAnalysis(onAnalysisComplete);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleStartAnalysis = () => {
    if (selectedFile) {
      analyzeImage(selectedFile, { location, timeOfDay });
    } else {
      toast.error("Please select an image first");
    }
  };

  return (
    <>
      <section id="upload" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Upload Zone */}
            <div className="space-y-6">
              <div
                {...getRootProps()}
                className={`
                relative aspect-square rounded-2xl border-2 border-dashed transition-all duration-500
                flex flex-col items-center justify-center cursor-pointer overflow-hidden
                ${isDragActive ? "border-white bg-white/5" : "border-white/10 hover:border-white/30 bg-card"}
              `}
              >
                <input {...getInputProps()} />

                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium">
                        Click to Change Photo
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-white/50" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      Upload Masterpiece
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Drag and drop or click to browse
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Metadata & Action */}
            <Card className="p-8 space-y-8 glass-panel">
              <div className="space-y-2">
                <h2 className="text-3xl font-heading font-bold">
                  Photo Details
                </h2>
                <p className="text-muted-foreground">
                  Add context for more accurate AI insights.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location (Optional)
                  </Label>
                  <Input
                    placeholder="e.g. Iceland, Golden Circle"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-white/5 border-white/10 focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Time of Day
                  </Label>
                  <div className="relative group">
                    <select
                      className="w-full h-14 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/80 
               focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 
               transition-all appearance-none cursor-pointer font-medium tracking-wide"
                      value={timeOfDay}
                      onChange={(e) => setTimeOfDay(e.target.value)}
                    >
                      <option value="" className="bg-black text-white/40">
                        Select Temporal Phase...
                      </option>
                      <option value="dawn" className="bg-black text-white">
                        Dawn / First Light (05:00 - 06:30)
                      </option>
                      <option
                        value="golden-hour-am"
                        className="bg-black text-white"
                      >
                        Sunrise Golden Hour (06:30 - 07:30)
                      </option>
                      <option
                        value="midmorning"
                        className="bg-black text-white"
                      >
                        Soft Morning (08:00 - 10:00)
                      </option>
                      <option value="midday" className="bg-black text-white">
                        Midday / Harsh Sun (11:00 - 15:00)
                      </option>
                      <option
                        value="golden-hour-pm"
                        className="bg-black text-white"
                      >
                        Sunset Golden Hour (17:00 - 18:30)
                      </option>
                      <option value="blue-hour" className="bg-black text-white">
                        Blue Hour / Civil Twilight (18:30 - 19:30)
                      </option>
                      <option value="night" className="bg-black text-white">
                        Nocturnal / Astro (21:00 - 03:00)
                      </option>
                      <option
                        value="artificial"
                        className="bg-black text-white"
                      >
                        Studio / Artificial Light
                      </option>
                    </select>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleStartAnalysis}
                disabled={!preview || loading}
                className="w-full h-14 text-lg font-bold group"
                variant="default"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-spin" /> Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Start Intelligence Analysis{" "}
                    <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </span>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Powered by Google Gemini Vision Pro. No data is stored.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadSection;

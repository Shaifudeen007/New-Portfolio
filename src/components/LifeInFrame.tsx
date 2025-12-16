import { Camera, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import beachPalm from "@/assets/gallery/beach-palm.jpg";
import traditional from "@/assets/gallery/traditional.jpg";
import oceanWaves from "@/assets/gallery/ocean-waves.jpg";
import temple from "@/assets/gallery/temple.jpg";
import railway from "@/assets/gallery/railway.jpg";
import bridge from "@/assets/gallery/bridge.jpg";
import lakeside from "@/assets/gallery/lakeside.jpg";
import park from "@/assets/gallery/park.jpg";
import vintageTruck from "@/assets/gallery/vintage-truck.jpg";
import carPose from "@/assets/gallery/car-pose.jpg";
import forestSmile from "@/assets/gallery/forest-smile.jpg";
import greenHills from "@/assets/gallery/green-hills.jpg";
import harbor from "@/assets/gallery/harbor.jpg";
import beachBlue from "@/assets/gallery/beach-blue.jpg";
import mosqueNight from "@/assets/gallery/mosque-night.jpg";
import sunnyField from "@/assets/gallery/sunny-field.jpg";
import neonGreen from "@/assets/gallery/neon-green.jpg";
import armsCrossed from "@/assets/gallery/arms-crossed.jpg";

const photos = [
  { id: 1, src: beachPalm, title: "Beach Vibes" },
  { id: 2, src: traditional, title: "Traditional Day" },
  { id: 3, src: oceanWaves, title: "Ocean Waves" },
  { id: 4, src: temple, title: "Temple Visit" },
  { id: 5, src: railway, title: "Railway Tracks" },
  { id: 6, src: bridge, title: "Bridge View" },
  { id: 7, src: lakeside, title: "Lakeside Peace" },
  { id: 8, src: park, title: "Park Day" },
  { id: 9, src: vintageTruck, title: "Vintage Vibes" },
  { id: 10, src: carPose, title: "Road Trip" },
  { id: 11, src: forestSmile, title: "Forest Joy" },
  { id: 12, src: greenHills, title: "Green Hills" },
  { id: 13, src: harbor, title: "Harbor View" },
  { id: 14, src: beachBlue, title: "Blue Beach" },
  { id: 15, src: mosqueNight, title: "Night Glow" },
  { id: 16, src: sunnyField, title: "Sunny Day" },
  { id: 17, src: neonGreen, title: "Neon Nights" },
  { id: 18, src: armsCrossed, title: "Street Style" },
];

const LifeInFrame = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="life-in-frame" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Life in Frame</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments that inspire, motivate, and tell my story beyond code.
          </p>
        </div>

        {/* Micro Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            {selectedPhoto && (
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LifeInFrame;

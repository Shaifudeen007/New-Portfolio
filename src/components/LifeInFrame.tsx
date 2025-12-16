import { Camera, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import beachPalm from "@/assets/gallery/beach-palm.jpg";
import traditional from "@/assets/gallery/traditional.jpg";
import oceanWaves from "@/assets/gallery/ocean-waves.jpg";
import temple from "@/assets/gallery/temple.jpg";
import railway from "@/assets/gallery/railway.jpg";
import casual from "@/assets/gallery/casual.jpg";
import bridge from "@/assets/gallery/bridge.jpg";
import lakeside from "@/assets/gallery/lakeside.jpg";
import park from "@/assets/gallery/park.jpg";

const photos = [
  { id: 1, src: beachPalm, title: "Beach Vibes", orientation: "portrait" },
  { id: 2, src: traditional, title: "Traditional Day", orientation: "portrait" },
  { id: 3, src: oceanWaves, title: "Ocean Waves", orientation: "portrait" },
  { id: 4, src: temple, title: "Temple Visit", orientation: "portrait" },
  { id: 5, src: railway, title: "Railway Tracks", orientation: "portrait" },
  { id: 6, src: casual, title: "Casual Moments", orientation: "portrait" },
  { id: 7, src: bridge, title: "Bridge View", orientation: "portrait" },
  { id: 8, src: lakeside, title: "Lakeside Peace", orientation: "portrait" },
  { id: 9, src: park, title: "Park Day", orientation: "portrait" },
];

const LifeInFrame = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  // Split photos into two columns for masonry effect
  const leftColumn = photos.filter((_, i) => i % 2 === 0);
  const rightColumn = photos.filter((_, i) => i % 2 === 1);

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

        {/* Masonry Grid */}
        <div className="flex gap-4">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4">
            {leftColumn.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4 mt-8">
            {rightColumn.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ animationDelay: `${(index + leftColumn.length) * 100}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
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

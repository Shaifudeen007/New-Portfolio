import { Camera } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Nature Walk",
    category: "Nature",
    placeholder: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "City Lights",
    category: "Urban",
    placeholder: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Golden Hour",
    category: "Landscape",
    placeholder: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Quiet Moments",
    category: "Lifestyle",
    placeholder: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Adventures",
    category: "Travel",
    placeholder: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Creative Space",
    category: "Work",
    placeholder: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
  }
];

const LifeInFrame = () => {
  return (
    <section id="life-in-frame" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Life in Frame</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments that inspire, motivate, and tell my story beyond code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.placeholder}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <span className="text-xs font-medium text-primary mb-1">{photo.category}</span>
                <h3 className="text-lg font-semibold text-foreground">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeInFrame;

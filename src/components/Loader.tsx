import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-out" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
      <div className="max-w-md w-full px-8 space-y-6">
        {/* Terminal-like loader */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-mono text-sm">
            <span className="animate-pulse">$</span>
            <span>Loading portfolio...</span>
          </div>
          
          {/* Progress bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>{progress}%</span>
            <span className="gradient-text font-semibold">{progress === 100 ? 'Complete!' : 'Loading...'}</span>
          </div>
          
          {/* Loading steps */}
          <div className="space-y-2 text-xs font-mono">
            <div className={`flex items-center gap-2 transition-opacity ${progress > 20 ? 'opacity-100' : 'opacity-30'}`}>
              <span className="text-primary">[✓]</span>
              <span>Initializing components...</span>
            </div>
            <div className={`flex items-center gap-2 transition-opacity ${progress > 50 ? 'opacity-100' : 'opacity-30'}`}>
              <span className="text-primary">[✓]</span>
              <span>Loading assets...</span>
            </div>
            <div className={`flex items-center gap-2 transition-opacity ${progress > 80 ? 'opacity-100' : 'opacity-30'}`}>
              <span className="text-primary">[✓]</span>
              <span>Rendering portfolio...</span>
            </div>
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};

export default Loader;

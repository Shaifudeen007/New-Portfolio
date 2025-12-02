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
    <div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      style={{ 
        animation: progress === 100 ? 'fade-out 0.5s ease-out forwards' : 'none',
        animationDelay: '0.3s'
      }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'pulse 2s ease-in-out infinite'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main loader animation */}
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div 
            className="absolute inset-0 border-2 border-primary/20 rounded-full"
            style={{
              animation: 'spin 3s linear infinite'
            }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
          </div>

          {/* Middle pulsing ring */}
          <div 
            className="absolute inset-3 border-2 border-secondary/30 rounded-full"
            style={{
              animation: 'spin 2s linear infinite reverse'
            }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_hsl(var(--secondary))]" />
          </div>

          {/* Inner rotating square */}
          <div 
            className="absolute inset-6 border-2 border-accent/40 rounded-lg"
            style={{
              animation: 'spin 4s linear infinite'
            }}
          />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="text-2xl font-bold gradient-text">{progress}%</span>
              <div 
                className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"
                style={{
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}
              />
            </div>
          </div>

          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                animation: `spin ${2 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div 
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: i === 0 ? 'hsl(var(--primary))' : i === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
                  boxShadow: `0 0 15px ${i === 0 ? 'hsl(var(--primary))' : i === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))'}`
                }}
              />
            </div>
          ))}
        </div>

        {/* Text content */}
        <div className="text-center space-y-3">
          <h2 className="text-xl font-semibold tracking-wide">
            <span className="gradient-text">Loading Experience</span>
          </h2>
          
          {/* Animated loading bar */}
          <div className="w-64 h-1.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))'
              }}
            />
          </div>

          {/* Typewriter effect text */}
          <p className="text-sm text-muted-foreground font-mono">
            {progress < 30 && (
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Initializing...
              </span>
            )}
            {progress >= 30 && progress < 60 && (
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Loading assets...
              </span>
            )}
            {progress >= 60 && progress < 90 && (
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Almost ready...
              </span>
            )}
            {progress >= 90 && (
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Welcome!
              </span>
            )}
          </p>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 rounded-full bg-gradient-to-t from-primary/20 to-primary"
              style={{
                animation: 'pulse 1s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`,
                opacity: progress > (i + 1) * 20 ? 1 : 0.3,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;

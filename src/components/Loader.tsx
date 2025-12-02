import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const letters = "LOADING".split("");

  return (
    <div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      style={{ 
        animation: progress === 100 ? 'fade-out 0.6s ease-out forwards' : 'none',
        animationDelay: '0.4s'
      }}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Scan lines effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)',
          animation: 'scanlines 8s linear infinite'
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Main 3D Cube Loader */}
        <div className="relative w-40 h-40 perspective-1000">
          {/* Rotating cube */}
          <div 
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'rotateCube 4s ease-in-out infinite'
            }}
          >
            {/* Cube faces */}
            {[...Array(6)].map((_, i) => {
              const transforms = [
                'rotateY(0deg) translateZ(40px)',
                'rotateY(180deg) translateZ(40px)',
                'rotateY(90deg) translateZ(40px)',
                'rotateY(-90deg) translateZ(40px)',
                'rotateX(90deg) translateZ(40px)',
                'rotateX(-90deg) translateZ(40px)'
              ];
              return (
                <div
                  key={i}
                  className="absolute inset-[30px] border border-primary/30"
                  style={{
                    transform: transforms[i],
                    background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.05))`,
                    backdropFilter: 'blur(4px)'
                  }}
                />
              );
            })}
          </div>

          {/* Orbiting rings */}
          <div 
            className="absolute inset-0"
            style={{ animation: 'spin 3s linear infinite' }}
          >
            <div className="absolute inset-2 border border-dashed border-primary/40 rounded-full" />
          </div>
          <div 
            className="absolute inset-0"
            style={{ animation: 'spin 5s linear infinite reverse' }}
          >
            <div className="absolute inset-6 border border-dotted border-secondary/40 rounded-full" />
          </div>

          {/* Center percentage with glitch */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span 
                className="text-4xl font-black tracking-tighter"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px hsl(var(--primary) / 0.5)'
                }}
              >
                {Math.round(progress)}
              </span>
              {/* Glitch layers */}
              <span 
                className="absolute inset-0 text-4xl font-black tracking-tighter text-primary/30"
                style={{
                  animation: 'glitch1 0.3s ease-in-out infinite',
                  clipPath: 'inset(40% 0 40% 0)'
                }}
              >
                {Math.round(progress)}
              </span>
            </div>
          </div>

          {/* Corner accents */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-4 h-4"
              style={{
                top: i < 2 ? '-8px' : 'auto',
                bottom: i >= 2 ? '-8px' : 'auto',
                left: i % 2 === 0 ? '-8px' : 'auto',
                right: i % 2 === 1 ? '-8px' : 'auto',
              }}
            >
              <div 
                className="w-full h-0.5 bg-gradient-to-r from-primary to-transparent"
                style={{
                  transform: i % 2 === 1 ? 'rotate(180deg)' : 'none',
                  opacity: progress > i * 25 ? 1 : 0.2,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <div 
                className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent absolute top-0"
                style={{
                  left: i % 2 === 0 ? 0 : 'auto',
                  right: i % 2 === 1 ? 0 : 'auto',
                  opacity: progress > i * 25 ? 1 : 0.2,
                  transition: 'opacity 0.5s ease'
                }}
              />
            </div>
          ))}
        </div>

        {/* Animated letter reveal */}
        <div className="flex items-center gap-1">
          {letters.map((letter, i) => (
            <span
              key={i}
              className="text-2xl font-bold tracking-[0.3em] transition-all duration-500"
              style={{
                color: progress > (i + 1) * 12 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.3)',
                transform: progress > (i + 1) * 12 ? 'translateY(0)' : 'translateY(10px)',
                textShadow: progress > (i + 1) * 12 ? '0 0 20px hsl(var(--primary) / 0.5)' : 'none'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Progress bar with segments */}
        <div className="relative w-72">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex-1 h-2 rounded-sm transition-all duration-200"
                style={{
                  background: progress > i * 5 
                    ? `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` 
                    : 'hsl(var(--muted) / 0.3)',
                  transform: progress > i * 5 ? 'scaleY(1)' : 'scaleY(0.6)',
                  boxShadow: progress > i * 5 ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
                }}
              />
            ))}
          </div>
          
          {/* Status text */}
          <div className="mt-4 text-center">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {progress < 25 && "Initializing systems"}
              {progress >= 25 && progress < 50 && "Loading components"}
              {progress >= 50 && progress < 75 && "Preparing experience"}
              {progress >= 75 && progress < 100 && "Almost there"}
              {progress >= 100 && "Welcome"}
              <span className="inline-block ml-1 animate-pulse">_</span>
            </p>
          </div>
        </div>

        {/* DNA helix decoration */}
        <div className="absolute -bottom-20 flex gap-4 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-transparent via-primary to-transparent rounded-full"
              style={{
                height: `${30 + Math.sin(i * 0.5) * 20}px`,
                animation: 'wave 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes rotateCube {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
        }
        @keyframes glitch1 {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.5); opacity: 0.6; }
        }
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Loader;

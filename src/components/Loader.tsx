import { useEffect, useState } from "react";

const Loader = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Phase transitions for cinematic effect
    const phases = [
      { delay: 0 },      // Initial black
      { delay: 500 },    // Aperture opens
      { delay: 1500 },   // Name reveals
      { delay: 3000 },   // Subtitle
      { delay: 4500 },   // Final fade
    ];

    phases.forEach((p, i) => {
      setTimeout(() => setPhase(i), p.delay);
    });

    setTimeout(() => setIsVisible(false), 5000);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      style={{ 
        opacity: phase >= 4 ? 0 : 1,
        transition: 'opacity 0.8s ease-out'
      }}
    >
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          animation: 'grain 0.5s steps(1) infinite'
        }}
      />

      {/* Letterbox bars */}
      <div 
        className="absolute top-0 left-0 right-0 bg-black z-20"
        style={{
          height: phase >= 1 ? '12%' : '50%',
          transition: 'height 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 bg-black z-20"
        style={{
          height: phase >= 1 ? '12%' : '50%',
          transition: 'height 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      />

      {/* Camera aperture effect */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{
          opacity: phase >= 1 ? 0 : 1,
          transition: 'opacity 0.8s ease-out',
          transitionDelay: '0.8s'
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[200%] h-[200%] bg-black origin-center"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%)',
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Horizontal line above */}
        <div 
          className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          style={{
            width: phase >= 2 ? '300px' : '0px',
            transition: 'width 1s ease-out',
            transitionDelay: '0.2s'
          }}
        />

        {/* Name with typewriter reveal */}
        <div className="overflow-hidden">
          <h1 
            className="text-5xl md:text-7xl font-light tracking-[0.4em] text-white uppercase"
            style={{
              fontFamily: 'Georgia, serif',
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1)',
              transitionDelay: '0.3s',
              textShadow: '0 0 60px rgba(255,255,255,0.3)'
            }}
          >
            Shaif
          </h1>
        </div>

        {/* Subtitle with fade */}
        <div className="overflow-hidden">
          <p 
            className="text-sm md:text-base tracking-[0.5em] text-white/50 uppercase font-light"
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            Developer & Creator
          </p>
        </div>

        {/* Horizontal line below */}
        <div 
          className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          style={{
            width: phase >= 2 ? '300px' : '0px',
            transition: 'width 1s ease-out',
            transitionDelay: '0.4s'
          }}
        />

        {/* Loading dots */}
        <div 
          className="flex gap-2 mt-8"
          style={{
            opacity: phase >= 2 && phase < 4 ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white/40 rounded-full"
              style={{
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner frames */}
      <div className="absolute top-[15%] left-[5%] w-16 h-16 z-10"
        style={{
          opacity: phase >= 2 ? 0.4 : 0,
          transition: 'opacity 0.8s ease',
          transitionDelay: '0.6s'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 left-0 h-full w-px bg-white/40" />
      </div>
      <div className="absolute top-[15%] right-[5%] w-16 h-16 z-10"
        style={{
          opacity: phase >= 2 ? 0.4 : 0,
          transition: 'opacity 0.8s ease',
          transitionDelay: '0.7s'
        }}
      >
        <div className="absolute top-0 right-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 right-0 h-full w-px bg-white/40" />
      </div>
      <div className="absolute bottom-[15%] left-[5%] w-16 h-16 z-10"
        style={{
          opacity: phase >= 2 ? 0.4 : 0,
          transition: 'opacity 0.8s ease',
          transitionDelay: '0.8s'
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-white/40" />
      </div>
      <div className="absolute bottom-[15%] right-[5%] w-16 h-16 z-10"
        style={{
          opacity: phase >= 2 ? 0.4 : 0,
          transition: 'opacity 0.8s ease',
          transitionDelay: '0.9s'
        }}
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-white/40" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-white/40" />
      </div>

      {/* Film flicker effect */}
      <div 
        className="absolute inset-0 bg-white/[0.02] pointer-events-none z-30"
        style={{
          animation: 'flicker 0.15s infinite'
        }}
      />

      <style>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;

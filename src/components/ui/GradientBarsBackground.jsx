import React from "react";

const GradientBarsBackground = ({
  numBars = 15,
  gradientFrom = "rgb(255, 60, 0)",
  gradientTo = "transparent",
  animationDuration = 2,
  className = "",
}) => {
  const calculateHeight = (index, total) => {
    if (total <= 1) return 1;
    const position = index / (total - 1);
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    const minHeight = 30;
    const maxHeight = 100;
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <style>{`
        @keyframes gradientBarPulse {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
      `}</style>
      <div
        className="flex h-full"
        style={{
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars})`,
                height: "100%",
                background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                transform: `scaleY(${height / 100})`,
                transformOrigin: "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: `gradientBarPulse ${animationDuration}s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.1}s`,
                outline: "1px solid rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
                "--initial-scale": height / 100,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GradientBarsBackground;

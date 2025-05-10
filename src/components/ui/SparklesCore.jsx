// src/components/ui/SparklesCore.jsx
import React, { useEffect, useState } from "react";

export const SparklesCore = ({
  id,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 50,
  className = "",
  particleColor = "#3b82f6"
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Create sparkles
    const count = Math.min(100, Math.max(20, particleDensity));
    const newSparkles = Array.from({ length: count }).map(() => ({
      id: Math.random().toString(36).substring(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: 0.1 + Math.random() * 0.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2
    }));
    setSparkles(newSparkles);

    // Animation loop
    const animate = () => {
      setSparkles(prev => prev.map(sparkle => ({
        ...sparkle,
        x: (sparkle.x + sparkle.speedX) % 100,
        y: (sparkle.y + sparkle.speedY) % 100,
        opacity: 0.3 + Math.sin(Date.now() / 1000 + sparkle.id.charCodeAt(0)) * 0.3
      })));
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [minSize, maxSize, particleDensity]);

  return (
    <div 
      id={id}
      className={`${className} absolute inset-0 overflow-hidden pointer-events-none`}
      style={{ background }}
    >
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            background: particleColor,
            transform: `translate(-50%, -50%)`,
            transition: 'opacity 0.3s ease'
          }}
        />
      ))}
    </div>
  );
};
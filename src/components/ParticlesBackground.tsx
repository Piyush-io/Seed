import React from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '../hooks/use-dimensions';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function ParticlesBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(containerRef);

  const particles = React.useMemo(() => {
    const count = 50;
    const items: Particle[] = [];

    for (let i = 0; i < count; i++) {
      items.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: `hsla(${142 + Math.random() * 30}, 70%, ${40 + Math.random() * 20}%, 0.2)`,
        delay: Math.random() * 5,
      });
    }

    return items;
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, width * 0.1, 0],
            y: [0, height * 0.1, 0],
          }}
          transition={{
            duration: 20,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
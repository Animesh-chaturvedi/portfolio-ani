import React, { useRef } from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";

const PARTICLE_COUNT = 40;
const PARTICLE_SIZE = [6, 14];
const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 40;

const GlitterP5Background = () => {
  // Store original positions and velocities
  const particlesRef = useRef<any[]>([]);

  const sketch: Sketch = (p5) => {
    let particles: any[] = [];
    let mouse = { x: -1000, y: -1000 };
    let w = 0;
    let h = 0;

    p5.setup = () => {
      w = p5.windowWidth;
      h = p5.windowHeight;
      p5.createCanvas(w, h);
      particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const size = PARTICLE_SIZE[0] + Math.random() * (PARTICLE_SIZE[1] - PARTICLE_SIZE[0]);
        return {
          x,
          y,
          ox: x,
          oy: y,
          size,
          angle: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.3,
        };
      });
      particlesRef.current = particles;
      p5.noStroke();
      (p5 as any)._renderer.canvas.addEventListener("mouseout", () => {
        mouse.x = -1000;
        mouse.y = -1000;
      });
    };

    p5.windowResized = () => {
      w = p5.windowWidth;
      h = p5.windowHeight;
      p5.resizeCanvas(w, h);
      // Optionally, reposition particles
    };

    p5.mouseMoved = () => {
      mouse.x = p5.mouseX;
      mouse.y = p5.mouseY;
    };

    p5.draw = () => {
      // @ts-ignore
      p5.clear();
      for (let p of particles) {
        // Random walk for sparkle
        p.angle += (Math.random() - 0.5) * 0.1;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        // Pull back to original position
        p.x += (p.ox - p.x) * 0.01;
        p.y += (p.oy - p.y) * 0.01;
        // Repel from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const repel = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_STRENGTH;
          p.x += Math.cos(angle) * repel;
          p.y += Math.sin(angle) * repel;
        }
        // Draw
        p5.fill(255, 255, 255, 220);
        p5.ellipse(p.x, p.y, p.size, p.size);
        // Glow
        p5.fill(255, 255, 255, 60);
        p5.ellipse(p.x, p.y, p.size * 2, p.size * 2);
      }
    };
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default GlitterP5Background; 
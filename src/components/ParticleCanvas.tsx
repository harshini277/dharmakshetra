import React, { useEffect, useRef } from 'react';
import type { AtmosphereType } from '../types';

interface ParticleCanvasProps {
  atmosphere: AtmosphereType;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
  rotation: number;
  rotSpeed: number;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ atmosphere }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate initial particles based on atmosphere type
    const particles: Particle[] = [];
    const count = atmosphere === 'divine' ? 120 : atmosphere === 'embers' ? 90 : 70;

    const getColors = (type: AtmosphereType) => {
      switch (type) {
        case 'embers':
          return ['#ff4500', '#ffa500', '#ffd700', '#e74c3c', '#d4af37'];
        case 'divine':
          return ['#00ffff', '#80deea', '#e0f7fa', '#ffd700', '#9b59b6'];
        case 'forest':
          return ['#2ecc71', '#f1c40f', '#e67e22', '#27ae60', '#d4af37'];
        case 'ink':
        default:
          return ['#ffffff', '#94a3b8', '#cbd5e1', '#64748b', '#d4af37'];
      }
    };

    const colors = getColors(atmosphere);

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (atmosphere === 'forest' ? 6 : 3.5) + 1,
        speedX: (Math.random() - 0.5) * (atmosphere === 'embers' ? 1.2 : 0.8),
        speedY: atmosphere === 'embers' 
          ? -Math.random() * 1.5 - 0.5 
          : atmosphere === 'forest' 
          ? Math.random() * 1.0 + 0.3 
          : (Math.random() - 0.5) * 0.6,
        color,
        alpha: Math.random() * 0.7 + 0.2,
        maxAlpha: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background tint gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );

      if (atmosphere === 'embers') {
        bgGrad.addColorStop(0, 'rgba(25, 8, 12, 0.4)');
        bgGrad.addColorStop(1, 'rgba(6, 4, 10, 0.95)');
      } else if (atmosphere === 'divine') {
        bgGrad.addColorStop(0, 'rgba(10, 20, 45, 0.45)');
        bgGrad.addColorStop(1, 'rgba(4, 8, 20, 0.98)');
      } else if (atmosphere === 'forest') {
        bgGrad.addColorStop(0, 'rgba(12, 28, 18, 0.4)');
        bgGrad.addColorStop(1, 'rgba(5, 12, 8, 0.95)');
      } else {
        bgGrad.addColorStop(0, 'rgba(18, 14, 25, 0.4)');
        bgGrad.addColorStop(1, 'rgba(6, 4, 10, 0.98)');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render & Update Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse repelling physics
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 2.5;
            p.y += (dy / dist) * force * 2.5;
          }
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(0.9, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = atmosphere === 'divine' || atmosphere === 'embers' ? 12 : 6;
        ctx.shadowColor = p.color;

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (atmosphere === 'forest') {
          // Draw leaf shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw glowing particle circle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [atmosphere]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};

import React, { useEffect, useRef } from 'react';

interface FloatingLinesProps {
  linesGradient?: string[];
  animationSpeed?: number;
  interactive?: boolean;
  bendRadius?: number;
  bendStrength?: number;
  mouseDamping?: number;
  parallax?: boolean;
  parallaxStrength?: number;
  lineCount?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function FloatingLines({
  linesGradient = ['#E945F5', '#2F4BC0', '#E945F5'],
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  lineCount = 18,
  style,
  className = '',
}: FloatingLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const setSize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    // Build lines
    const lines = Array.from({ length: lineCount }, (_, i) => ({
      yBase: (i / (lineCount - 1)) * height,
      phase: (i / lineCount) * Math.PI * 2,
      amplitude: 30 + Math.random() * 50,
      freq: 0.003 + Math.random() * 0.004,
      speed: (0.3 + Math.random() * 0.7) * animationSpeed,
      offset: Math.random() * Math.PI * 2,
    }));

    // Gradient helper
    const makeGradient = (y: number) => {
      const g = ctx.createLinearGradient(0, y, width, y);
      const stops = linesGradient.length;
      linesGradient.forEach((color, i) => {
        g.addColorStop(i / (stops - 1), color);
      });
      return g;
    };

    let elapsed = 0;
    let lastTime = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      // Smooth mouse
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * mouseDamping;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * mouseDamping;

      const mx = smoothMouseRef.current.x; // 0..1
      const my = smoothMouseRef.current.y; // 0..1

      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, li) => {
        // parallax offset per line based on depth (index)
        const depth = li / lineCount;
        const pxOff = parallax ? (mx - 0.5) * parallaxStrength * 60 * (1 - depth) : 0;
        const pyOff = parallax ? (my - 0.5) * parallaxStrength * 30 * (1 - depth) : 0;

        const yBase = (li / (lineCount - 1)) * height + pyOff;

        ctx.beginPath();
        const steps = Math.ceil(width / 4);
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const x = t * width + pxOff;

          // base wave
          const wave = Math.sin(t * width * line.freq + elapsed * line.speed + line.offset) * line.amplitude;

          // mouse bend influence
          let bend = 0;
          if (interactive) {
            const mxPx = mx * width;
            const dist = Math.abs(x - mxPx);
            const radius = bendRadius * 60;
            if (dist < radius) {
              const influence = 1 - dist / radius;
              bend = influence * influence * bendStrength * 120 * (my - yBase / height);
            }
          }

          const y = yBase + wave + bend;

          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // opacity fades toward top and bottom edges
        const normY = yBase / height;
        const edgeFade = Math.sin(normY * Math.PI);
        ctx.strokeStyle = makeGradient(yBase);
        ctx.globalAlpha = 0.12 + edgeFade * 0.55;
        ctx.lineWidth = 1 + edgeFade * 1.2;
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / (rect.width || 1);
      mouseRef.current.y = (e.clientY - rect.top) / (rect.height || 1);
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animationSpeed, bendRadius, bendStrength, interactive, lineCount, linesGradient, mouseDamping, parallax, parallaxStrength]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        ...style,
      }}
    />
  );
}

import { useEffect, useRef, memo } from 'react';

class Particle {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;
    this.reset();
    this.y = Math.random() * canvas.height;
    this.opacity = Math.random() * options.opacity;
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = -10;
    this.vx = (Math.random() - 0.5) * this.options.speed * 0.5;
    this.vy = Math.random() * this.options.speed + 0.5;
    this.size = Math.random() * this.options.particleSize + 1;
    this.opacity = Math.random() * this.options.opacity;
    this.twinkle = Math.random() * 0.05;
    this.twinkleSpeed = Math.random() * 0.02 + 0.01;
  }

  update(mousePos) {
    this.x += this.vx;
    this.y += this.vy;

    // Subtle mouse interaction
    const dx = mousePos.x - this.x;
    const dy = mousePos.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      const force = (100 - distance) / 100;
      this.x -= (dx / distance) * force * 0.5;
      this.y -= (dy / distance) * force * 0.5;
    }

    // Twinkle effect
    this.twinkle += this.twinkleSpeed;
    const twinkleOpacity = Math.sin(this.twinkle) * 0.3 + 0.7;

    // Reset if out of bounds
    if (
      this.y > this.canvas.height + 10 ||
      this.x < -10 ||
      this.x > this.canvas.width + 10
    ) {
      this.reset();
    }

    return twinkleOpacity;
  }

  draw(ctx, twinkleOpacity) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.options.particleColor;
    ctx.globalAlpha = this.opacity * twinkleOpacity;
    ctx.fill();

    // Glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.options.particleColor;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

const ParticleBackground = ({
  particleCount = 50,
  particleColor = '#4a90e2',
  particleSize = 2,
  speed = 0.5,
  opacity = 0.6
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const options = {
      particleColor,
      particleSize,
      speed,
      opacity
    };

    // Initialize particles
    particlesRef.current = Array.from(
      { length: particleCount },
      () => new Particle(canvas, options)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        const twinkle = particle.update(mouseRef.current);
        particle.draw(ctx, twinkle);
      });

      // Connect particles with subtle lines
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = particleColor;
            ctx.globalAlpha = (1 - distance / 80) * 0.12 * opacity;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount, particleColor, particleSize, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default memo(ParticleBackground);

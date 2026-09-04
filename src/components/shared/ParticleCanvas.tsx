"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleCanvas.module.css";

export type ParticleCanvasVariant = "page-background" | "demo";

type ParticleCanvasProps = {
  variant: ParticleCanvasVariant;
};

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

type MousePosition = {
  x: number | null;
  y: number | null;
  radius: number;
};

export function ParticleCanvas({ variant }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const isPageBackground = variant === "page-background";
    const particleCount = isPageBackground ? 80 : 50;
    const lineDistance = isPageBackground ? 120 : 100;
    const mouse: MousePosition = {
      x: null,
      y: null,
      radius: isPageBackground ? 250 : 150,
    };
    let particles: Particle[] = [];
    let animationFrame = 0;
    let running = false;

    const resize = () => {
      if (isPageBackground) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        return;
      }

      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.3,
      }));
    };

    const animate = () => {
      if (!running) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        const dx = (mouse.x ?? 0) - particle.x;
        const dy = (mouse.y ?? 0) - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && mouse.y !== null && distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          particle.x -= Math.cos(angle) * force * 5;
          particle.y -= Math.sin(angle) * force * 5;
        } else {
          particle.x += (particle.baseX - particle.x) * 0.03;
          particle.y += (particle.baseY - particle.y) * 0.03;
        }

        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        if (particle.baseX < 0 || particle.baseX > canvas.width)
          particle.vx *= -1;
        if (particle.baseY < 0 || particle.baseY > canvas.height)
          particle.vy *= -1;

        context.fillStyle = `rgba(74, 123, 167, ${particle.opacity})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (
          let otherIndex = index + 1;
          otherIndex < particles.length;
          otherIndex += 1
        ) {
          const other = particles[otherIndex];
          const lineX = particle.x - other.x;
          const lineY = particle.y - other.y;
          const pairDistance = Math.sqrt(lineX * lineX + lineY * lineY);

          if (pairDistance < lineDistance) {
            const opacity = (1 - pairDistance / lineDistance) * 0.2;
            context.strokeStyle = `rgba(74, 123, 167, ${opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePageMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleDemoMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const clearMouse = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      resize();
      if (!isPageBackground) createParticles();
    };

    const start = () => {
      if (running) return;
      running = true;
      animate();
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
    };

    resize();
    createParticles();

    // Only animate while the canvas is on screen. This keeps the loop from
    // competing with other work on the main thread (e.g. the code-panel
    // expand transition further down the page) when the canvas is scrolled away.
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(canvas);

    window.addEventListener("resize", handleResize);
    if (isPageBackground) {
      window.addEventListener("mousemove", handlePageMouseMove);
      window.addEventListener("mouseout", clearMouse);
    } else {
      canvas.addEventListener("mousemove", handleDemoMouseMove);
      canvas.addEventListener("mouseleave", clearMouse);
    }

    return () => {
      visibilityObserver.disconnect();
      stop();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePageMouseMove);
      window.removeEventListener("mouseout", clearMouse);
      canvas.removeEventListener("mousemove", handleDemoMouseMove);
      canvas.removeEventListener("mouseleave", clearMouse);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={
        variant === "page-background" ? styles.background : styles.demo
      }
      aria-hidden="true"
      data-testid={`particle-canvas-${variant}`}
    />
  );
}

"use client";

import React, { useEffect, useRef } from "react";

const LiquidEtherBackground = ({ children, variant = "default" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Color scheme based on variant
    const colors = variant === "cta" 
      ? {
          primary: [79, 70, 229],    // indigo-600
          secondary: [124, 58, 237],  // violet-600
          accent: [67, 56, 202]       // indigo-700
        }
      : {
          primary: [99, 102, 241],    // indigo-500
          secondary: [139, 92, 246],  // violet-500
          accent: [124, 58, 237]      // violet-600
        };

    // Orb class for flowing gradient blobs
    class Orb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 300 + 200;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth wave motion
        this.x += Math.sin(time * 0.0005) * 0.5;
        this.y += Math.cos(time * 0.0005) * 0.5;

        // Bounce off edges with smooth transition
        if (this.x < -this.radius || this.x > canvas.width + this.radius) {
          this.vx *= -1;
        }
        if (this.y < -this.radius || this.y > canvas.height + this.radius) {
          this.vy *= -1;
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        
        const alpha = variant === "cta" ? 0.15 : 0.08;
        gradient.addColorStop(0, `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    const orbs = Array.from({ length: variant === "cta" ? 4 : 3 }, () => new Orb());

    const animate = () => {
      // Fade effect for smooth trails
      ctx.fillStyle = variant === "cta" 
        ? "rgba(79, 70, 229, 0.03)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default LiquidEtherBackground;


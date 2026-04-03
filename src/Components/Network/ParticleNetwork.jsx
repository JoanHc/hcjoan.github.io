import React, { useEffect, useRef } from "react";

const CONFIG = {
  particles: {
    count: 80,
    maxSize: 4,
    minSize: 1,
    speed: 0.5,
    mouseRadius: 100,
    connectionDistance: 120,
  },
};

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const animationId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const newParticles = [];
      const { count, maxSize, minSize, speed } = CONFIG.particles;
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          originalOpacity: Math.random() * 0.5 + 0.2,
          opacity: 0.2,
        });
      }
      particles.current = newParticles;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark =
        document.documentElement.getAttribute("data-bs-theme") === "dark";

      particles.current.forEach((p, index) => {
        // Actualizar posición
        p.x += p.speedX;
        p.y += p.speedY;

        // Rebote en bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Interacción con mouse
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // 2. Si el mouse está cerca (ej. 100px), mover la partícula
        if (distance < CONFIG.particles.mouseRadius) {
          const force =
            (CONFIG.particles.mouseRadius - distance) /
            CONFIG.particles.mouseRadius;
          const angle = Math.atan2(dy, dx);

          // Empujar la partícula en dirección opuesta al mouse
          p.x -= Math.cos(angle) * force * 2;
          p.y -= Math.sin(angle) * force * 2;
        }

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#da7c25" : "#b923e1";
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Conexiones
        for (let j = index + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.particles.connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = isDark ? "#da7c25" : "#b923e1";
            ctx.globalAlpha =
              (1 - dist / CONFIG.particles.connectionDistance) * 0.2;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationId.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // Inicialización
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    draw();

    // Limpieza al desmontar (Cleanup)
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0.4,
      }}
    />
  );
};

export default ParticleNetwork;

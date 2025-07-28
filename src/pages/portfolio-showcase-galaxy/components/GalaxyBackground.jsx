import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GalaxyBackground = ({ selectedProject }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const starCount = 200;
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initStars();

    // Animation loop
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create galaxy gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (selectedProject) {
        // Dynamic colors based on selected project
        gradient.addColorStop(0, `${selectedProject.primaryColor}10`);
        gradient.addColorStop(0.3, `${selectedProject.secondaryColor}05`);
        gradient.addColorStop(1, '#0A162800');
      } else {
        gradient.addColorStop(0, '#00D9FF10');
        gradient.addColorStop(0.3, '#0A162805');
        gradient.addColorStop(1, '#0A162800');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and animate stars
      starsRef.current.forEach((star, index) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinklePhase));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity})`;
        ctx.fill();
        
        // Add subtle glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 217, 255, ${twinkleOpacity * 0.3})`;
          ctx.fill();
        }
      });
      
      // Draw connecting lines between nearby stars (constellation effect)
      if (selectedProject) {
        ctx.strokeStyle = `${selectedProject.secondaryColor}20`;
        ctx.lineWidth = 0.5;
        
        starsRef.current.forEach((star1, i) => {
          starsRef.current.slice(i + 1).forEach((star2) => {
            const distance = Math.sqrt(
              Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
            );
            
            if (distance < 150 && Math.random() > 0.98) {
              ctx.beginPath();
              ctx.moveTo(star1.x, star1.y);
              ctx.lineTo(star2.x, star2.y);
              ctx.stroke();
            }
          });
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [selectedProject]);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Nebula Effects */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: selectedProject 
              ? `radial-gradient(circle, ${selectedProject.primaryColor}, transparent)`
              : 'radial-gradient(circle, #00D9FF, transparent)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: selectedProject 
              ? `radial-gradient(circle, ${selectedProject.secondaryColor}, transparent)`
              : 'radial-gradient(circle, #FFB800, transparent)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </>
  );
};

export default GalaxyBackground;
import { useEffect, useRef } from 'react';

export default function PieChart3D({ questionIndex, isAnimating, answers }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    const drawPieChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 120 + (questionIndex * 20); // Grow with each question
      const tilt = 0.3; // 3D tilt effect

      // Base circle (shadow)
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + 10, radius, radius * tilt, 0, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0, 255, 65, 0.2)';
      ctx.fill();

      // Main 3D pie
      const segments = 4;
      const segmentAngle = (2 * Math.PI) / segments;
      
      for (let i = 0; i < segments; i++) {
        const startAngle = i * segmentAngle;
        const endAngle = (i + 1) * segmentAngle;
        
        // Different shades of matrix green
        const colors = [
          'rgba(0, 255, 65, 0.8)',
          'rgba(0, 255, 65, 0.6)', 
          'rgba(0, 255, 65, 0.4)',
          'rgba(0, 255, 65, 0.2)'
        ];

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        ctx.fillStyle = colors[i];
        ctx.fill();
        
        // 3D edge
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.9)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Pulsing center glow
      const pulse = Math.sin(Date.now() / 500) * 5 + 10;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulse, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0, 255, 65, 0.3)';
      ctx.fill();
    };

    drawPieChart();
    
    const interval = setInterval(drawPieChart, 50);
    return () => clearInterval(interval);
  }, [questionIndex, isAnimating]);

  return (
    <div className={`flex justify-center items-center transition-all duration-700 ${isAnimating ? 'scale-110 rotate-90 opacity-50' : 'scale-100 rotate-0 opacity-100'}`}>
      <canvas 
        ref={canvasRef}
        className="max-w-full h-auto"
      />
    </div>
  );
}

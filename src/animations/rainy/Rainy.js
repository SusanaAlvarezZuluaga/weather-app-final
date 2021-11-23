import { useEffect, useRef } from 'react';
import './rainy.css';

function Rainy({ isDay, thumb }) {
  let background;
  isDay ? (background = 'dayRainy') : (background = 'nightRainy');
  const canvasRef = useRef(null);
  let sizeClass = '';
  if (thumb) {
    sizeClass = 'thumb';
  }
  useEffect(() => {
    const rainCanvas = canvasRef.current;
    const ctx2 = rainCanvas.getContext('2d');
    const rainthroughnum = 10;
    const RainTrough = [];
    const rainnum = 50;
    const rain = [];
    window.addEventListener('resize', function () {
      rainCanvas.width = window.innerWidth;
      rainCanvas.height = window.innerHeight;
    });

    function random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    function clearrainCanvas() {
      ctx2.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    }

    function createRainTrough() {
      for (let i = 0; i < rainthroughnum; i++) {
        RainTrough[i] = {
          x: random(0, rainCanvas.width),
          y: random(0, rainCanvas.height),
          length: Math.floor(random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: random(-2, 2),
          ys: random(-5, 5),
        };
      }
    }

    function createRain() {
      for (let i = 0; i < rainnum; i++) {
        rain[i] = {
          x: Math.random() * rainCanvas.width,
          y: Math.random() * rainCanvas.height,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10,
        };
      }
    }

    function drawRain(i) {
      ctx2.beginPath();
      ctx2.moveTo(rain[i].x, rain[i].y);
      ctx2.lineTo(
        rain[i].x + rain[i].l * rain[i].xs,
        rain[i].y + rain[i].l * rain[i].ys
      );
      ctx2.strokeStyle = 'white';
      ctx2.lineWidth = 1;
      ctx2.stroke();
    }

    function animateRain() {
      clearrainCanvas();
      for (let i = 0; i < rainnum; i++) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > rainCanvas.width || rain[i].y > rainCanvas.height) {
          rain[i].x = Math.random() * rainCanvas.width;
          rain[i].y = -20;
        }
        drawRain(i);
      }
    }

    function init() {
      createRainTrough();
      createRain();
    }

    init();

    function animloop() {
      animateRain();
      requestAnimationFrame(animloop);
    }

    animloop();
  }, []);

  return (
    <div className={`rainyAnimationHolder ${background} ${sizeClass}`}>
      <canvas
        style={{ height: '100%', width: '100%' }}
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
export default Rainy;

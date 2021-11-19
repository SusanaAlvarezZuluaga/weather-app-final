import { useEffect, useRef } from 'react';
import './clear-night.css';

function ClearNight(props) {
  let className;
  let moonClass;
  if (props.thumb) {
    className = 'thumb';
    moonClass = 'smaller';
  }
  const canvasRef = useRef(null);
  useEffect(() => {
    const stars = [];
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    window.addEventListener('resize', (event) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    function init() {
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          size: Math.random(),
          change: 0.15,
        });
      }
    }
    function update() {
      for (const star of stars) {
        star.x += 0.0001;
        if (star.x > 1) {
          star.x = 0;
        }
        if (star.size < 0.1) {
          star.change = 0.1;
        } else if (star.size > 0.9) {
          star.change = -0.1;
        }
        star.size += star.change;
      }
    }

    function renderStars() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        context.beginPath();
        context.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.size * 1,
          0,
          Math.PI,
          false
        );
        context.fillStyle = 'white';
        context.fill();
      }
    }

    function twinkle() {
      update();
      renderStars();
    }

    setInterval(twinkle, 100);
    init();
    renderStars();
  }, []);

  return (
    <div className={`clearNightAnimationHolder ${className}`}>
      <canvas
        style={{ height: '100%', width: '100%' }}
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      ></canvas>
      <div className={`moon ${moonClass}`}></div>
    </div>
  );
}

export default ClearNight;

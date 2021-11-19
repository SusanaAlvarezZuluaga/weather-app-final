import { useEffect, useRef } from 'react';

import './thunder-storm.css';

function ThunderStorm({ isDay, thumb }) {
  const rainCanvasThunderStormDay = useRef(null);
  const lightningCanvasThunderStormDay = useRef(null);
  let background;
  isDay ? (background = 'dayStorm') : (background = 'nightStorm');
  let sizeClass;
  if (thumb) {
    sizeClass = 'thumb';
  }
  useEffect(() => {
    const rainCanvas = rainCanvasThunderStormDay.current;
    const lightningCanvas = lightningCanvasThunderStormDay.current;
    const contextRainCanvas = rainCanvas.getContext('2d');
    const contextLightningCanvas = lightningCanvas.getContext('2d');
    const rainthroughnum = 400;
    const RainTrough = [];
    const rainnum = 200;
    const rain = [];
    const lightning = [];
    let lightTimeCurrent = 0;
    let lightTimeTotal = 0;

    window.addEventListener('resize', function () {
      rainCanvas.width = window.innerWidth;
      lightningCanvas.width = window.innerWidth;
      rainCanvas.height = window.innerHeight;
      lightningCanvas.height = window.innerHeight;
    });

    function random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    function clearrainCanvas() {
      contextRainCanvas.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    }

    function clearCanvas3() {
      contextLightningCanvas.globalCompositeOperation = 'destination-out';
      contextLightningCanvas.fillStyle =
        'rgba(0,0,0,' + random(1, 30) / 100 + ')';
      contextLightningCanvas.fillRect(
        0,
        0,
        lightningCanvas.width,
        lightningCanvas.height
      );
      contextLightningCanvas.globalCompositeOperation = 'source-over';
    }

    function createRainTrough() {
      for (let i = 0; i < rainthroughnum; i++) {
        RainTrough[i] = {
          x: random(0, rainCanvas.width),
          y: random(0, rainCanvas.height),
          length: Math.floor(random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: random(-2, 2),
          ys: random(10, 20),
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

    function createLightning() {
      const x = random(100, lightningCanvas.width - 100);
      const y = random(0, lightningCanvas.height / 4);
      const createCount = random(1, 3);
      for (let i = 0; i < createCount; i++) {
        const single = {
          x: x,
          y: y,
          xRange: random(5, 30),
          yRange: random(10, 25),
          path: [
            {
              x: x,
              y: y,
            },
          ],
          pathLimit: random(40, 55),
        };
        lightning.push(single);
      }
    }

    function drawRain(i) {
      contextRainCanvas.beginPath();
      contextRainCanvas.moveTo(rain[i].x, rain[i].y);
      contextRainCanvas.lineTo(
        rain[i].x + rain[i].l * rain[i].xs,
        rain[i].y + rain[i].l * rain[i].ys
      );
      contextRainCanvas.strokeStyle = 'white';
      contextRainCanvas.lineWidth = 1;
      contextRainCanvas.lineCap = 'round';
      contextRainCanvas.stroke();
    }

    function drawLightning() {
      for (let i = 0; i < lightning.length; i++) {
        const light = lightning[i];

        light.path.push({
          x:
            light.path[light.path.length - 1].x +
            (random(0, light.xRange) - light.xRange / 2),
          y: light.path[light.path.length - 1].y + random(0, light.yRange),
        });

        if (light.path.length > light.pathLimit) {
          lightning.splice(i, 1);
        }

        contextLightningCanvas.beginPath();
        contextLightningCanvas.moveTo(light.x, light.y);

        if (Math.floor(random(0, 30)) === 1) {
          //color of the thunder
          contextLightningCanvas.fillStyle =
            'rgba(255, 255, 255, ' + random(1, 10) / 20 + ')';
          contextLightningCanvas.fillRect(
            0,
            0,
            lightningCanvas.width,
            lightningCanvas.height
          );
        }

        contextLightningCanvas.lineJoin = 'miter';
        contextLightningCanvas.stroke();
      }
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

    function animateLightning() {
      clearCanvas3();
      lightTimeCurrent++;

      if (lightTimeCurrent >= lightTimeTotal) {
        createLightning();
        lightTimeCurrent = 0;
        lightTimeTotal = 150;
      }

      drawLightning();
    }

    function init() {
      createRainTrough();
      createRain();
    }

    init();

    function animloop() {
      animateRain();
      animateLightning();
      requestAnimationFrame(animloop);
    }

    animloop();
  }, []);
  return (
    <div className={`thunderStormAnimationHolder ${background} ${sizeClass}`}>
      <canvas
        style={{ height: '100%', width: '100%' }}
        width={window.innerWidth}
        height={window.innerHeight}
        ref={rainCanvasThunderStormDay}
      ></canvas>
      <canvas
        style={{ height: '100%', width: '100%' }}
        className="lightningCanvas"
        width={window.innerWidth}
        height={window.innerHeight}
        ref={lightningCanvasThunderStormDay}
      ></canvas>
    </div>
  );
}
export default ThunderStorm;

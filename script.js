const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
const pspeedX = document.querySelector("#speedX");
const pspeedY = document.querySelector("#speedY");
const ptrackX = document.querySelector("#trackX");
const ptrackY = document.querySelector("#trackY");
let x = 100;
let y = 100;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let speedX = 0;
    let speedY = 0;
    let trackX = 0;
  let trackY = 0;
  accelerometer = new LinearAccelerationSensor({ frequency: 120 });
  accelerometer.onreading = (e) => {
    
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
   speedX += (e.currentTarget.x) / 120;
   speedY += (e.currentTarget.y) / 120;
    pspeedX.innerHTML = speedX;
    pspeedY.innerHTML = speedY;
    trackX += (speedX) / 120;
   trackY += (speedY) / 120;
   ptrackX.innerHTML = trackX;
    ptrackY.innerHTML = trackY;
  };
  accelerometer.start();
function update()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    x = 130 + (trackX * 5);
    y = 130 + (trackY * 5);
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(update);
}
 update();

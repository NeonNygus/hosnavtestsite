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
  accelerometer = new LinearAccelerationSensor({ frequency: 60 });
  accelerometer.onreading = (e) => {
    
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
   speedX += (e.currentTarget.x) / 60;
   speedY += (e.currentTarget.y) / 60;
    pspeedX.innerHTML = speedX;
    pspeedY.innerHTML = speedY;
    trackX += (speedX) / 60;
   trackY += (speedY) / 60;
   ptrackX.innerHTML = trackX;
    ptrackY.innerHTML = trackY;
  };
  accelerometer.start();
function update()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    x = 130 + trackX;
    y = 130 + trackY;
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(update);
}
 update();

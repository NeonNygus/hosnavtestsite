const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
const ptrackX = document.querySelector("#trackX");
const ptrackY = document.querySelector("#trackY");
let x = 100;
let y = 100;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let trackX = 0;
    let trackY = 0;
  accelerometer = new Accelerometer({ frequency: 120 });
  accelerometer.onreading = (e) => {
    
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
    vx = (e.currentTarget.x) / 2;
    vy = (e.currentTarget.y) / 2;
   trackX += (e.currentTarget.x) / 120;
   trackY += (e.currentTarget.y) / 120;
    ptrackX.innerHTML = trackX;
    ptrackY.innerHTML = trackY;
  };
  accelerometer.start();
function update()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    x = 130 + (trackX * 100);
    y = 130 + (trackY * 100);
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(update);
}
 update();

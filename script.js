const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
let x = 100;
let y = 100;
let vx = 0;
let vy = 0;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
function update()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    x += vx;
    y += vy;
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(update);
}


  accelerometer = new Accelerometer({ frequency: 10 });
  accelerometer.onreading = (e) => {
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
    vx = 0;
    vy = 0;
    update();
  };
  accelerometer.start();






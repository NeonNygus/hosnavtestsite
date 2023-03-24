const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
let x = 20;
let y = 20;
let vx = 1;
let vy = 1;
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
    const x = e.currentTarget.x;
    const y = e.currentTarget.y;
    update();
  };
  accelerometer.start();






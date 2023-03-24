const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
let x = 100;
let y = 100;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


  accelerometer = new Accelerometer({ frequency: 10 });
  accelerometer.onreading = (e) => {
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
    let vx = (e.currentTarget.x) / 2;
    let vy = (e.currentTarget.y) / 2;
    function update()
    {
        console.log(dupa);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        x = vx;
        y = vy;
        ctx.fillRect(x,y,50,50);
        setInterval(requestAnimationFrame(update),1000);
    }
    update();
  };
  accelerometer.start();






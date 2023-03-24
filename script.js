const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
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
        ctx.clearRect(0,0,canvas.width, canvas.height);
        let x = vx;
        let y = vy;
        ctx.fillRect(x,y,50,50);
        setInterval(requestAnimationFrame(update),1000);
    }
    update();
  };
  accelerometer.start();






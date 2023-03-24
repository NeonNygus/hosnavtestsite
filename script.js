const accX= document.querySelector("#x");
const accY= document.querySelector("#y");
let accelerometer = null;
let x = 20;
let y = 20;
function update(vx,vy)
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    x += vx;
    y += vy;
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(update);
}


try {
  accelerometer = new Accelerometer({ frequency: 10 });
  accelerometer.onerror = (event) => {
    // Handle runtime errors.
    if (event.error.name === 'NotAllowedError') {
      console.log('Permission to access sensor was denied.');
    } else if (event.error.name === 'NotReadableError') {
      console.log('Cannot connect to the sensor.');
    }
  };
  accelerometer.onreading = (e) => {
    console.log(e.currentTarget.x);
    accX.innerHTML = e.currentTarget.x;
    accY.innerHTML = e.currentTarget.y;
    const x = e.currentTarget.x;
    const y = e.currentTarget.y;
    update(x,y);
  };
  accelerometer.start();
} catch (error) {
  // Handle construction errors.
  if (error.name === 'SecurityError') {
    console.log('Sensor construction was blocked by the Permissions Policy.');
  } else if (error.name === 'ReferenceError') {
    console.log('Sensor is not supported by the User Agent.');
  } else {
    throw error;
  }
}
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");




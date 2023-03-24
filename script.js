const x= document.querySelector("#x");
const y= document.querySelector("#y");
const z= document.querySelector("#z");
let accelerometer = null;
try {
  accelerometer = new Accelerometer({ frequency: 20 });
  accelerometer.onerror = (event) => {
    // Handle runtime errors.
    if (event.error.name === 'NotAllowedError') {
      console.log('Permission to access sensor was denied.');
    } else if (event.error.name === 'NotReadableError') {
      console.log('Cannot connect to the sensor.');
    }
  };
  accelerometer.onreading = (e) => {
    console.log(e.currentTarget.x + " " + e.currentTarget.y + " " + e.currentTarget.z);
    x.innerHTML = e.currentTarget.x;
    y.innerHTML = e.currentTarget.y;
    z.innerHTML = e.currentTarget.z;
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

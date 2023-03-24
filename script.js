const { Accelerometer } = require("motion-sensors-polyfill");

const x= document.querySelector("#x");
const y= document.querySelector("#y");
const sensor = new Accelerometer({frequency: 60});
sensor.addEventListener("reading", (e) => 
{handleSensor(e);
    });
sensor.start();

function handleSensor(e){
      console.log(e);
      //x.innerHTML = dist[0];
   // y.innerHTML = dist[1];
}

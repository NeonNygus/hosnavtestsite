const x= document.querySelector("#x");
const y= document.querySelector("#y");
const sensor = new Accelerometer({frequency: 60});
sensor.addEventListener("reading", (e) => 
{handleSensor(e);
    });
sensor.start();

function handleSensor(e){
      console.log(e);
      x.innerHTML = e;
   // y.innerHTML = dist[1];
}

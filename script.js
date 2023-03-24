const x= document.querySelector("#x");
const y= document.querySelector("#y");
const sensor = new AbsoluteOrientationSensor({frequency: 60});
sensor.addEventListener("reading", (e) => 
{handleSensor(e);
    });
sensor.start();

function toEuler(q) {
    let sinr_cosp = 2 * (q[3] * q[0] + q[1] * q[2]);
    let cosr_cosp = 1 - 2 * (q[0] * q[0] + q[1] * q[1]);
    let roll = Math.atan2(sinr_cosp, cosr_cosp);

    let siny_cosp = 2 * (q[3] * q[2] + q[0] * q[1]);
    let cosy_cosp = 1 - 2 * (q[1] * q[1] + q[2] * q[2]);
    let yaw = Math.atan2(siny_cosp, cosy_cosp);

    return [yaw, roll];
}

function handleSensor(e){
    let quaternion = e.target.quaternion;
    let angles = toEuler(quaternion);
    x.innerHTML = angles[0];
    y.innerHTML = angles[1];
  console.log(angles);
}

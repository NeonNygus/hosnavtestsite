const x= document.querySelector("#x");
const y= document.querySelector("#y");
let initPos;
let calibrate = true;
const sensor = new AbsoluteOrientationSensor({frequency: 60});
sensor.addEventListener("reading", (e) => 
{handleSensor(e);
    });
sensor.start();
document.body.addEventListener("click", () => {calibrate = true})
function toEuler(q) {
    let sinr_cosp = 2 * (q[3] * q[0] + q[1] * q[2]);
    let cosr_cosp = 1 - 2 * (q[0] * q[0] + q[1] * q[1]);
    let roll = Math.atan2(sinr_cosp, cosr_cosp);

    let siny_cosp = 2 * (q[3] * q[2] + q[0] * q[1]);
    let cosy_cosp = 1 - 2 * (q[1] * q[1] + q[2] * q[2]);
    let yaw = Math.atan2(siny_cosp, cosy_cosp);

    return [yaw, roll];
}

function calcDist(angle, initAngle) {
    angle = (angle - initAngle) * (180 / Math.PI);
    angle = angle < 0 ? angle + 360 : angle;
    angle = angle > 180 ? angle - 360 : angle;

    let dist = Math.round(-800 * Math.tan(angle * (Math.PI / 180)));
    return dist;
}

function handleSensor(e){
    let quaternion = e.target.quaternion;
    let angles = toEuler(quaternion);
    
    if(calibrate){
        initPos = angles;
        calibrate = false;
      }
    let dist = angles.map((angle, i) => calcDist(angle, initPos[i]));
      console.log(dist);
      x.innerHTML = dist[0];
    y.innerHTML = dist[1];
}

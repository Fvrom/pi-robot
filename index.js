import piRobot from "./piRobot.js";

const carRobot = new piRobot("piRobot"); 

console.log(carRobot.name);

carRobot.stop(); 
/* 
window.addEventListener("keydown"),
  function (e) {
      if(e.key === 'w') 
    console.log("up pressed down");
  };
*/ 
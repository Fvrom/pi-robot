 //const Gpio = require('pigpio').Gpio; 

 
//const gpioDef = require('./gpioDef.js');

// Motor 1 
// positive: 17 negative: 18
// pin: 11 & 12

/* Moto 2
positive 22 negative 23
pin: 15 & 16 */ 

//const Gpio = require('onoff').Gpio;
import {Gpio} from 'onoff'; 


const motorLeftReverse = new Gpio(17, "out");
const motorLeftForward = new Gpio(18, "out");


const motorRightReverse = new Gpio(23, "out");
const motorRightForward = new Gpio(22, "out"); 

class PiRobot {
  constructor(name) {
   this.name = name; 
  
  }
     

 forward() {
  motorLeftForward.writeSync(1);
  motorRightForward.writeSync(1);
 }
 reverse() {
  motorLeftReverse.writeSync(1);
  motorRightReverse.writeSync(1);
 }
 stop() {
      motorLeftForward.writeSync(0);
      motorRightForward.writeSync(0);
      motorLeftReverse.writeSync(0);
      motorRightReverse.writeSync(0);
      motorLeftForward.unexport();
      motorRightForward.unexport();
      motorLeftReverse.unexport();
      motorRightReverse.unexport();
 }
}


export default PiRobot; 


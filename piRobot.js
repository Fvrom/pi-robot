 //const Gpio = require('pigpio').Gpio; 
 
//const gpioDef = require('./gpioDef.js');

// Motor 1 
// positive: 17 negative: 18
// pin: 11 & 12

/* Moto 2
positive 22 negative 23
pin: 15 & 16 */ 

const Gpio = require("onoff").Gpio;

const motorLeftBack = new Gpio(18, 'out'); 
const motorLeftFront = new Gpio(17, 'out'); 

const motorRightBack = new Gpio(22, 'out'); 
const motorRightFront = new Gpio(23, 'out');

function moveRobotForward(arg){
 
    motorLeftFront.writeSync(1) // is reversed
    motorRightFront.writeSync(1) // is reversed 
    }
   moveRobotForward();
   // motorLeftFront.writeSync(0);
   //motorRightFront.writeSync(0);
   
    function endMotor() {
        motorLeftFront.writeSync(0); 
        motorRightFront.writeSync(0);
        motorLeftFront.unexport(); 
        motorRightFront.unexport();
    }
    setTimeout(endMotor, 4000);

/* 
const lwheelf = new Gpio(GPIO17, {mode: Gpio.OUTPUT});
const lwheelback = new Gpio(GPIO18,{mode: Gpio.OUTPUT});

const rwheelf = new Gpio(22, {mode: Gpio.OUTPUT});
const rwheelback = new Gpio(23,{mode: Gpio.OUTPUT});



function myFunc(arg){
 
lwheelf.pwmWrite(150);
lwheelback.pwmWrite(150);


}
setTimeout(myFunc, 3000, 'funk');
console.log(lwheelf);  */ 
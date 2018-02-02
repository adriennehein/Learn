class Car {
  constructor() {
    this.wheels = 4;
    this.modelYear = 2000;
    this.lightsOn = false;
    this.turnSignalStatus = "Off";
    this.speed = 0;
    this.accAmount = 1;
    this.brakeAmount = 1;
    this.resetTurnSignal = function() {
      console.log(`The car is signaling ${this.turnSignalStatus}`);
      this.turnSignalStatus = "Off";
      console.log('Turn completed')
    };
    this.accelerate = function() {
      console.log(this.speed);
      this.speed = this.speed + this.accAmount;
      console.log(`Your speed is ${this.speed}`);
    }
    this.brake = function() {
      this.speed = this.speed - this.brakeAmount;
      console.log(`Your speed is ${this.speed}`);
    }
    this.carInfo = function() {
      console.log(`Your car has ${this.wheels} wheels, is from ${this.modelYear}, it can accelerate by ${this.accAmount} mph, and brake by ${this.brakeAmount} mph.`)
    }
  }

  turnSignal(direction) {
    if (direction == "left") {
      this.turnSignalStatus = "left"
      this.resetTurnSignal();
    } else if (direction == "right") {
      this.turnSignalStatus = "right"
      this.resetTurnSignal();
    }
  }

  checkLights() {
    const offStatus = 'Lights are currently off';
    const onStatus = 'Lights are currently on';

    (!this.lightsOn) ? console.log(offStatus) : console.log(onStatus);
  }

  changeLights() {
    if (!this.lightsOn) {
      this.lightsOn = true;
      console.log('Lights are on');
    } else {
      this.lightsOn = false;
      console.log('Lights are off');
    }
  }
}

class Tesla extends Car {
  constructor(modelYear) {
    super();
    this.modelYear = modelYear;
    this.accAmount = 10;
    this.brakeAmount = 7;
  }
}

class Tata extends Car {
  constructor(modelYear) {
    super();
    this.modelYear = modelYear;
    this.accAmount = 2;
    this.brakeAmount = 1.25;
  }
}

class Toyota extends Car {
  constructor(modelYear) {
    super();
    this.modelYear = modelYear;
    this.accAmount = 7;
    this.brakeAmount = 5;
  }
}

// let myCar = new Car();
// let myTesla = new Tesla(2016);
// let myTata = new Tata(2020);
// let myToyota = new Toyota(1995);
//
//

let myTata1   = new Tata(2217),
    myTata2   = new Tata(2500),
    myTesla1  = new Tesla(2019),
    myTesla2  = new Tesla(2018),
    myToyota1 = new Toyota(1995),
    myToyota2 = new Toyota(1990);

let myCars = [myToyota2, myTesla2, myTata1, myTesla1, myTata2, myToyota1];

// This sorts by model name and then model year:
console.log(myCars.sort(
     function(a, b){
       if (a.constructor.name!=b.constructor.name) {
         return (a.constructor.name > b.constructor.name)
       } else {
         return (a.modelYear - b.modelYear)
       }
     }
   ))

// The following sorts myCars by model name:
console.log(myCars.sort(function(a, b) {
  return a.constructor.name > b.constructor.name;
}))

// The following sorts myCars by modelYear:
console.log(myCars.sort(function(a, b) {
  return a.modelYear - b.modelYear;
}))

// console.log(myCar);
// console.log("My Tesla: ", myTesla);
// myTesla.checkLights();
// myTesla.changeLights();
// myTesla.checkLights();
// myTesla.changeLights();
// myTesla.checkLights();
//
// myTesla.turnSignal("right");
// myTesla.turnSignal("left");

// console.log(`myTesla's starting speed is ${myTesla.speed}`);

// myTesla.accelerate();
// myTesla.brake();

// myTesla.accelerate();
// myTesla.brake();
//
// myTata.accelerate();
// myTata.brake();
//
// myToyota.accelerate();
// myToyota.brake();
//
// myTesla.carInfo()
//
// console.log(myTata2)
//
// console.log(myTata2.modelYear)

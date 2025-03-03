const carFC = {
    brand: 'Mazda',
    model: 'RX-7',
    weight: 1200,
    passengers: 2,
    color: 'white'
};

const carAE86 = {
    brand: 'Toyota',
    model: 'Trueno 3-door',
    weight: 960,
    passengers: 4,
    color: 'panda'
};

console.log(carFC.brand);
console.log(carFC.model);
console.log(carFC);

carFC.passengers = 4;
console.log(carFC.passengers);
carFC.turbo = 'single';

// function alertUser() {
//     alert('I am a function');
// }

// alertUser();

function myFavoriteCar(car) {
    console.log(`My favorite car is ${car.brand} ${car.model}. It has ${car.color} color, weighs ${car.weight}kg, and can accomodate ${car.passengers} passengers`);
}

myFavoriteCar(carFC);
myFavoriteCar(carAE86);

function carWeightWithPassengers(carWeight, passengers = 2) {
    return carWeight + (passengers * 65);
}

console.log(`The weight of ${carAE86.brand} ${carAE86.model} with passengers is ${carWeightWithPassengers(carAE86.weight, 4)}`);


carFC.currentSpeed = 100;
carFC.speedUp = function() {
    this.currentSpeed += 20;
}

carFC.speedUp();

console.log(carFC.currentSpeed);
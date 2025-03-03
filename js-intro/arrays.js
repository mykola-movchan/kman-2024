const cars = ['Toyota', 'Honda', 'Mazda', 'Suzuki'];
console.log(cars);
console.log(`Cars arrays length is ${cars.length}`);
console.log(`First cars is ${cars[0]}`);
console.log(`First cars is ${cars[1]}`);
console.log(`First cars is ${cars[2]}`);
console.log(`First cars is ${cars[3]}`);
console.log(`The last item is ${cars[cars.length - 1]}`);
cars[3] = 'Nissan';
console.log(`The last item is ${cars[cars.length - 1]}`);
console.log(`My favorite cars are ${cars.join(', ')}`);
cars[4] = 'Daihatsu'; // бажано не використовувати
console.log(`The last item is ${cars[cars.length - 1]}`);
cars.push('Lexus');
console.log(`The last item is ${cars[cars.length - 1]}`);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift('Lexus');
console.log(`First cars is ${cars[0]}`);
const germanCars = ['Mercedes', 'BMW', 'Volkswagen'];
// const allCars = cars.concat(germanCars);
// console.log(allCars);
const allCars = [...cars, ...germanCars];
console.log(allCars);
console.log(`Do we have Toyota in a dealership? Manager says it's ${allCars.includes('Toyota')}`);
console.log(`Do we have Honda in a dealership? Manager says it's ${allCars.includes('Honda')}`);


const name = "Mykola";
const name2 = 'Movchan';
const name3 = `My name is  ${name}, my last name is ${name2}`;

console.log(name3);
console.log(`String length is ${name3.length}`);

let text = "We are the so-called \"Vikings\" \nfrom the north.";
console.log(text);
console.log(name + " " + name2);
console.log(`${name} ${name2}`);
console.log(`The sum of 2 and 2 is ${2 + 2}`);

let text2 =
`The quick
brown fox

jumps over
the lazy dog`;
console.log(text2);

// Methods
let text3 = "HELLO WORLD";
console.log(`The length is ${text3.length}`);
console.log(`${text3.at(4)}`);
console.log(`${text3.at(text3.length - 1)}`);

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7,19);
console.log(part);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let extraSpaces = "     Hello World!     ";
let trimmedValue = extraSpaces.trim();
console.log(trimmedValue);

let toBeReplaced = "Please visit Microsoft!";
console.log(toBeReplaced);
let replacedString = toBeReplaced.replace("Microsoft", "W3Schools");
console.log(replacedString);

let animals = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(animals)
animals = animals.replaceAll("Cats","Dogs");
animals = animals.replaceAll("cats","dogs");
console.log(animals);

// window.location.replace(`https://${0.1 + 0.2}.com`);

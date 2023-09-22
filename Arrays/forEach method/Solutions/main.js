console.log("Test");

// Exercise 1
//? Use the .forEach() method to print each number in the array.

const numbers1 = [1, 2, 3, 4, 5, 6];
numbers1.forEach((num) => console.log(num));

// Exercise 2
//? Print the names in the array, one at a time, using .forEach().

const names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2.forEach((name) => console.log(name));

// Exercise 3
//? Print the squares of the numbers in the array using .forEach().

const numbers3 = [2, 3, 5, 7, 11];
numbers3.forEach((num) => console.log(num * num));

// Exercise 4
//? Print the lengths of the words in the array using .forEach().

const words4 = ["apple", "banana", "cherry", "date", "elderberry"];
words4.forEach((fruit) => console.log(`${fruit}: ${fruit.length}`));

// Exercise 5
//? Print "Even" or "Odd" for each number in the array using .forEach().

const numbers5 = [2, 4, 7, 10, 15];
numbers5.forEach((num) => {
  let isEven = num % 2 === 0;
  console.log(`${num} ${isEven ? "is an even number" : "is an odd number"}`);
});

// Exercise 6
//? Use .forEach() to print the uppercase version of each string in the array.

const words6 = ["hello", "world", "javascript", "forEach"];
words6.forEach((word) => console.log(word.toUpperCase()));

// Exercise 7
//? Print the sum of all numbers in the array using .forEach().

const numbers7 = [10, 20, 30, 40, 50];
let sumArray = 0;
numbers7.forEach((num) => (sumArray += num));
console.log(sumArray);

// Exercise 8
//? Use .forEach() to print the index and value of each element in the array.

const fruits8 = ["apple", "banana", "cherry", "date", "elderberry"];
fruits8.forEach((fruit) =>
  console.log(`${fruit}: [${fruits8.indexOf(fruit)}]`)
);

// Exercise 9
//? Print the reverse of each string in the array using .forEach().

const words9 = ["hello", "world", "javascript", "forEach"];
const reverse9 = new Array();
words9.forEach((word) => reverse9.push(word.split("").reverse().join("")));
console.log(reverse9);

// Exercise 10
//? Use .forEach() and .filter() to print the even numbers in the array.

const numbers21 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers21.filter((number) => number % 2 === 0);
evenNumbers.forEach((evenNumber) => {
  console.log(evenNumber);
});

// Exercise 11
//? Print the names in the array that contain the letter 'a' using .forEach() and .filter().

const names22 = ["Alice", "Bob", "Charlie", "David", "Eve"];
const namesWithA = names22.filter((name) => name.includes("a"));
namesWithA.forEach((name) => console.log(name));

// Exercise 12
//? Use .forEach() and .filter() to print the prime numbers in the array.

const numbers23 = [2, 4, 5, 9, 10, 13];
const primeNumbers = [];
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

numbers23.forEach((num) => {
  if (isPrime(num)) {
    primeNumbers.push(num);
  }
});

primeNumbers.forEach((num) => console.log(num));

// Exercise 13
//? Print the objects with a "name" property using .forEach() and .filter().
let objects24 = [
  { name: "Alice", age: 25 },
  { age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David" },
];

const objectsWithName = objects24.filter((item) => item.hasOwnProperty("name"));

objectsWithName.forEach((item) => {
  console.log(item);
});

// Exercise 14
//? Use .forEach() and .filter() to print the numbers divisible by 3 in the array.
const numbers25 = [9, 12, 7, 18, 15, 22];
const divBy3Number = numbers25.filter(num => num % 3 === 0)
divBy3Number.forEach(num => console.log(num))
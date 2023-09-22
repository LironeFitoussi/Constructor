console.log("Test");

// Exercise 1
//? Use the .forEach() method to print each number in the array.

const numbers1 = [1, 2, 3, 4, 5, 6];
numbers1.forEach(num => console.log(num));

// Exercise 2
//? Print the names in the array, one at a time, using .forEach().

const names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2.forEach(name => console.log(name))

// Exercise 3
//? Print the squares of the numbers in the array using .forEach().

const numbers3 = [2, 3, 5, 7, 11];
numbers3.forEach(num => console.log(num*num))

// Exercise 4
//? Print the lengths of the words in the array using .forEach().

const words4 = ["apple", "banana", "cherry", "date", "elderberry"];
words4.forEach(fruit => console.log(`${fruit}: ${fruit.length}`))

// Exercise 5
//? Print "Even" or "Odd" for each number in the array using .forEach().

const numbers5 = [2, 4, 7, 10, 15];
numbers5.forEach((num) => {
    let isEven = num % 2 === 0
    console.log(`${num} ${isEven? "is an even number": "is an odd number"}`)
});

// Exercise 6
//? Use .forEach() to print the uppercase version of each string in the array.

const words6 = ["hello", "world", "javascript", "forEach"];
words6.forEach(word => console.log(word.toUpperCase()));

// Exercise 7
//? Print the sum of all numbers in the array using .forEach().

const numbers7 = [10, 20, 30, 40, 50];
let sumArray = 0
numbers7.forEach(num => sumArray += num)
console.log(sumArray);

// Exercise 8
//? Use .forEach() to print the index and value of each element in the array.

const fruits8 = ["apple", "banana", "cherry", "date", "elderberry"];
fruits8.forEach((fruit) => console.log(`${fruit}: [${fruits8.indexOf(fruit)}]`))

// Exercise 9
//? Print the reverse of each string in the array using .forEach().

const words9 = ["hello", "world", "javascript", "forEach"];
const reverse9 = new Array;
words9.forEach(word => reverse9.push(word.split('').reverse().join('')));
console.log(reverse9);

// Exercise 10
//? Print "Even" or "Odd" for each number in the array using .forEach().

const numbers10 = [2, 4, 7, 10, 15];
numbers10.forEach((num) => {
    const isEven = num % 2 === 0
    console.log(`${num}: ${isEven? "Even": "Odd"}`)
})

// Exercise 11
//? Print the squares of the numbers in the array using .forEach().
const numbers11 = [2, 3, 5, 7, 11];
numbers11.forEach((num) =>
    console.log(num*num)
)


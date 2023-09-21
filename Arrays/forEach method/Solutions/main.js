console.log("Test");

// Exercise 1
//? Use the .forEach() method to print each number in the array.
//! const numbers1 = [1, 2, 3, 4, 5, 6];

const numbers1 = [1, 2, 3, 4, 5, 6];

numbers1.forEach(num => console.log(num));

// Exercise 2
//? Print the names in the array, one at a time, using .forEach().
//! const names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];

const names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];

names2.forEach(name => console.log(name))

// Exercise 3
//? Print the squares of the numbers in the array using .forEach().
//! const numbers3 = [2, 3, 5, 7, 11];

const numbers3 = [2, 3, 5, 7, 11];

numbers3.forEach(num => console.log(num*num))

// Exercise 4
//? Print the lengths of the words in the array using .forEach().
//! const words4 = ["apple", "banana", "cherry", "date", "elderberry"];

const words4 = ["apple", "banana", "cherry", "date", "elderberry"];

// Exercise 5
const numbers5 = [2, 4, 7, 10, 15];
numbers5.forEach((num) => {
    let isEven = num % 2 === 0
    console.log(`${num} ${isEven? "is an even number": "is an odd number"}`)
});
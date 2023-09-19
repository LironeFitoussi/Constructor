// Exercise 1
let numbers1 = [1, 2, 3, 4, 5, 6];
numbers1 = numbers1.filter((num) => num % 2 === 0);
console.log(numbers1);

// Exercise 2 Solution 1
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2 = names2.filter((num) => num.indexOf("A") !== 0)
console.log(names2);

// Exercise 2 Solution 2
names2 = names2.filter((num) => !num.startsWith("A"))
console.log(names2);

// Exercise 3
let numbers3 = [2, -5, 10, -8, 3, -1];


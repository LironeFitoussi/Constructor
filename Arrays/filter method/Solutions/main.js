// Exercise 1
let numbers1 = [1, 2, 3, 4, 5, 6];
numbers1 = numbers1.filter((num) => num % 2 === 0);
console.log(numbers1);

// Exercise 2 Solution 1
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2 = names2.filter((name) => name.indexOf("A") !== 0)
console.log(names2);

// Exercise 2 Solution 2
names2 = names2.filter((name) => !name.startsWith("A"))
console.log(names2);

// Exercise 3
let numbers3 = [2, -5, 10, -8, 3, -1];
numbers3 = numbers3.filter((num) => num > 0)
console.log(numbers3);

// Exercise 4
let mixedArray4 = [42, "Hello", true, 7, "World"];
mixedArray4 = mixedArray4.filter((item) => typeof item == "string")
console.log(mixedArray4);

// Exercise 5

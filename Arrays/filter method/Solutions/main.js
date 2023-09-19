// Exercise 1
let numbers1 = [1, 2, 3, 4, 5, 6];
numbers1 = numbers1.filter((num) => num % 2 === 0);
console.log(numbers1);

// Exercise 2 Solution 1
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2 = names2.filter((name) => name.indexOf("A") !== 0);
console.log(names2);

// Exercise 2 Solution 2
names2 = names2.filter((name) => !name.startsWith("A"));
console.log(names2);

// Exercise 3
let numbers3 = [2, -5, 10, -8, 3, -1];
numbers3 = numbers3.filter((num) => num > 0);
console.log(numbers3);

// Exercise 4
let mixedArray4 = [42, "Hello", true, 7, "World"];
mixedArray4 = mixedArray4.filter((item) => typeof item == "string");
console.log(mixedArray4);

// Exercise 5
let people5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
];
people5 = people5.filter((person) => person.age > 25)
console.log( {people5} );

// Exercise 6
let numbers6 = [30, 65, 12, 80, 45, 55];
numbers6 = numbers6.filter((number) => number > 50)
console.log(numbers6);

// Exercise 7
let words7 = ["apple", "banana", "cherry", "date", "elderberry"];
words7 = words7.filter((fruit) => fruit.length <= 5)
console.log(words7);

// Exercise 8
let numbers8 = [2, 4, 5, 9, 10, 13];
numbers8 = numbers8.filter((num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if(num % i === 0){
                return false
            }
        }
        return true
    }
)
console.log(numbers8);
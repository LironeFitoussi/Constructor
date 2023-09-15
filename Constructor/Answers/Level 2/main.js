// Exercise 1
function Person(name, age) {
    this.name = name,
    this.age = age
    this.sayHello = function (){
        console.log(`Hello, ${this.name}!`);
    }
}

const person1 = new Person("John", 30);
person1.sayHello();

// Exercise 2
function Calculator() {
    this.add = function (a, b) {
        return a + b;
    };

    this.subtract = function (a, b) {
        return a - b
    }
} 

const calculator = new Calculator()
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 5));

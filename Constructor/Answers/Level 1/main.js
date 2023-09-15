console.log("test");

// Exrecise 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
console.log(`Name: ${person1.name}, Age: ${person1.age}`);


// Exrecise 2
function Animal(species) {
    this.species = species;
}

const animal1 = new Animal("Dog");
console.log(`Species: ${animal1.species}`);

// Exercise 3
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car1 = new Car("Toyota", "Camry");
console.log(`Make: ${car1.make}, Model: ${car1.model}`);

// Exercise 4
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book("Harry Potter", "J.K. Rowling");
console.log(`Title: "${book1.title}", Author: ${book1.author}`);

// Exercise 5
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

const rectangle1 = new Rectangle(5, 6);
const area = rectangle1.width * rectangle1.height;
console.log(`Area: ${area}`);

// Exercise 6
function Circle(radius) {
    this.radius = radius;
}

const circle1 = new Circle(3);
const circumference = 2 * Math.PI * circle1.radius;
console.log(`Circumference: ${circumference.toFixed(2)}`);

// Exercise 7
function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

const student1 = new Student("Alice", "A");
console.log(`Name: ${student1.name}, Grade: ${student1.grade}`);

// Exercise 8
function Fruit(name, color) {
    this.name = name;
    this.color = color;
}

const fruit1 = new Fruit("Apple", "Red");
console.log(`Name: ${fruit1.name}, Color: ${fruit1.color}`);

// Exercise 9
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person2 = new Person1("John", "Doe");
console.log(`Full Name: ${person2.firstName} ${person2.lastName}`);

// Exercise 10
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

const employee1 = new Employee("Mary", "Manager");
console.log(`Name: ${employee1.name}, Position: ${employee1.position}`);



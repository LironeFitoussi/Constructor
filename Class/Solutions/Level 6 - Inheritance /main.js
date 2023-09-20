// Exercise 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId 
    }
}

const student1 = new Student("John", 23, "S7485")
console.log(student1);

// Exercise 2
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("Mr. Smith", 35, "Math");
console.log(teacher1);

// Exercise 3
class Animal {
    constructor(species) {
        this.species = species;
    }
}

class Dog extends Animal{
    constructor(species, breed, sound) {
        super(species);
        this.breed = breed;
        this.sound = sound;
    }
}

const dog1 = new Dog("Canien", "Golden Retriver", "Woof")
console.log(dog1);

// Exercise 4
class Cat extends Animal {
    constructor(species, color) {
        super(species)
        this.color = color
    }
}

const cat1 = new Cat("Fline", "Grey")
console.log(cat1);

// Exercise 5
class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

class Triangle extends Shape {
    constructor() {
        super("Triangle", 3);
    }
}

const triangle1 = new Triangle();
console.log(triangle1);

// Exercise 6
class Square extends Shape {
    constructor() {
        super("Square", 4)
    }
}

const square1 = new Square()
console.log(square1);

// Exercise 7
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model)
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Tesla", "CyperTruck", 2021, "Silver")
console.log(car1);

// Exercise 8
class Bike extends Vehicle {
    constructor(make, model, type) {
        super(make, model)
        this.type = type;
    }
}

const bike1 = new Bike("Toyota", "Mountain", "BMX")
console.log(bike1);

// Exercise 9
class Fruit {
    constructor(name) {
        this.name = name;
    }
}

class Apple extends Fruit {
    constructor() {
        super("Apple")
    }
}

const fruit1 = new Apple()
console.log(fruit1);

// Exercise 10
class Banana extends Fruit {
    constructor() {
        super("Banana")
    }
}

const fruit2 = new Banana()
console.log(fruit2);

// Exercise 11
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Manager extends Employee {
    constructor(name, position, department) {
        super(name, position)
        this.department = department;
    }
}

const manager1 = new Manager("John Doe", "Manager", "HR");console.log(manager1);

// Exercise 12 
class Developer extends Employee {
    constructor(name, position, programmingLanguage) {
        super(name, position)
        this.programmingLanguage = programmingLanguage;
    }
}
const developer1 = new Developer("Lirone", "Full-Stack Developer", "HTML, CSS, JS");
console.log(developer1);

//  Exercise 13 
class Country {
    constructor(name) {
        this.name = name ;
    }
}

class City extends Country {
    constructor(name, population, location) {
        super(name);
        this.population = population;
        this.location = location;
    }
}

const city1 = new City("New York", 8500000, "Northeastern USA");
console.log(city1);

// Exercise 14
class State extends Country {
    constructor(name, capital, stateCode) {
      super(name);
      this.capital = capital;
      this.stateCode = stateCode;
    }
  }
  
  const state1 = new State("California", "Sacramento", "CA");
  console.log(state1);

// Exercise 15
class Book {
    constructor(title) {
        this.title = title;
    }
}

class EBook extends Book {
    constructor(title, format) {
        super(title);
        this.format = format;
    }
}

const ebook1 = new EBook("Introduction to JavaScript", "PDF");
console.log(ebook1);
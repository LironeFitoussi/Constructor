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
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
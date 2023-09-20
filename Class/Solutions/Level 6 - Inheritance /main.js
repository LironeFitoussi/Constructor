console.log("test");

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
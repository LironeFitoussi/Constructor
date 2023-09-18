// Exercise 1
const parent1 = {
  name: "Sarah",
  age: 35,
  heritage: "Jewish",
};

const child1 = Object.create(parent1);
child1.name = "Dor";
child1.age = 7;

console.log(`Child 1's name: ${child1.name}`);
console.log(`Child 1's age: ${child1.age}`);
console.log(`Child 1's heritage: ${child1.heritage}`);

// Exercise 2
const grandparent = {
  name: "Alice",
  age: 60,
};

const parent2 = Object.create(grandparent);
parent2.name = "Bob";
parent2.job = "Engineer";

const child2 = Object.create(parent2);
child2.name = "Charlie";
child2.hobby = "Painting";

console.log(`Child 2's name: ${child2.name}`);
console.log(`Child 2's age: ${child2.age}`);
console.log(`Child 2's job: ${child2.job}`);
console.log(`Child 2's hobby: ${child2.hobby}`);

// Exercise 3
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const parent3 = new Person("Alice", 35);
const child3 = new Person("Bob", 7);

console.log(`Child 3's name: ${child3.name}`);
console.log(`Child 3's age: ${child3.age}`);

// Exercise 4
const parent4 = {
  name: "Alice",
  age: 35,
};

const child4a = Object.create(parent4);
child4a.name = "Bob";
child4a.age = 7;

const child4b = Object.create(parent4);
child4b.name = "Charlie";
child4b.age = 10;
child4b.hobby = "Painting";

console.log(`Child 4a's name: ${child4a.name}`);
console.log(`Child 4a's age: ${child4a.age}`);
console.log(`Child 4a's hobby: ${child4a.hobby}`);

console.log(`Child 4b's name: ${child4b.name}`);
console.log(`Child 4b's age: ${child4b.age}`);
console.log(`Child 4b's hobby: ${child4b.hobby}`);

// Exercise 5
function createPerson(name, age) {
  return {
    name,
    age,
  };
}

const parent5 = createPerson("Alice", 35);
const child5 = createPerson("Bob", 7);

console.log(`Child 5's name: ${child5.name}`);
console.log(`Child 5's age: ${child5.age}`);

// Exercise 6
function Circle(radius) {
    const circle = Object.create(circlePrototype);
    circle.radius = radius;
    return circle;
  }
  
  const circlePrototype = {
    calculateArea: function () {
      this.area = Math.PI * this.radius * this.radius;
    },
  };
  
  const circle = Circle(5);
  circle.calculateArea();
  console.log(`The circle's area is ${circle.area}`);
  
  // Exercise 7
  function Student(name, age, grades) {
    const student = Object.create(studentPrototype);
    student.name = name;
    student.age = age;
    student.grades = grades;
    return student;
  }
  
  const studentPrototype = {
    calculateAverageGrade: function () {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    },
  };
  
  const student = Student("Alice", 20, [85, 92, 78, 90, 88]);
  const averageGrade = student.calculateAverageGrade();
  console.log(`The average grade is ${averageGrade}`);
  
  // Exercise 8
  function BankAccount(balance) {
    const bankAccount = Object.create(bankAccountPrototype);
    bankAccount.balance = balance;
    bankAccount.transactions = [];
    return bankAccount;
  }
  
  const bankAccountPrototype = {
    deposit: function (amount) {
      this.balance += amount;
      this.transactions.push(`Deposited $${amount}`);
    },
    withdraw: function (amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(`Withdrew $${amount}`);
      } else {
        console.log("Insufficient funds.");
      }
    },
  };
  
  const bankAccount = BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.withdraw(200);
  console.log(`The current balance is $${bankAccount.balance}`);
  
  // Exercise 9
  function Book(title, author, pages) {
    const book = Object.create(bookPrototype);
    book.title = title;
    book.author = author;
    book.pages = pages;
    return book;
  }
  
  const bookPrototype = {
    info: function () {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    },
  };
  
  const book = Book("The Great Gatsby", "F. Scott Fitzgerald", 250);
  const bookInfo = book.info();
  console.log(bookInfo);
  
  // Exercise 10
  function Car(make, model) {
    const car = Object.create(carPrototype);
    car.make = make;
    car.model = model;
    car.speed = 0;
    return car;
  }
  
  const carPrototype = {
    accelerate: function (amount) {
      this.speed += amount;
    },
    brake: function (amount) {
      this.speed -= amount;
    },
  };
  
  const car = Car("Toyota", "Camry");
  car.accelerate(20);
  car.brake(10);
  console.log(`The current speed is ${car.speed} km/h`);
  

console.log("test");

// Exercise 1
class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    set firstName(value) {
      this._firstName = value;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(value) {
      this._lastName = value;
    }
  }
  
const person = new Person("Lirone", "Fitoussi");
console.log(person._firstName);
person.firstName = "Pedro"
console.log(person._firstName);

// Exercise 2
class Circle {
    constructor(radius){
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
}

const circle = new Circle(5);
console.log(circle.radius);

circle.radius = -2; 
console.log(circle.radius); 

// Exercise 3
class BankAccount{
    constructor(amount){
        this._balance = amount
    }

    get balance() {
        return `Your'e blance is: ${this._balance}`
    }

    set balance(value) {
        if (value >= 0) {
            console.log(`Updating balance: ${value}`);
            this._balance = value;
        }
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.balance)
myAccount.balance = -800

// Exercise 5
class Student {
    constructor() {
      this._grades = [];
    }
  
    get grades() {
      return this._grades;
    }
  
    set grades(newGrade) {
      if (newGrade >= 0 && newGrade <= 100) {
        this._grades.push(newGrade);
      }
    }
  }
  
  const student = new Student();
  student.grades = 95;
  student.grades = 120; // Attempt to add an invalid grade
  console.log(student.grades); // Output: [95]
  
  // Exercise 6
  class Product {
    constructor() {
      this._price = 0;
    }
  
    get price() {
      return this._price;
    }
  
    set price(value) {
      if (value >= 0) {
        this._price = value;
      }
    }
  }
  
  const product = new Product();
  product.price = 25;
  product.price = -10; // Attempt to set a negative price
  console.log(product.price); // Output: 25
  
  // Exercise 7
  class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.area); // Output: 50
  
  // Exercise 8
  class Person1 {
    constructor() {
      this._age = 0;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      if (value >= 0) {
        this._age = value;
      }
    }
  }
  
  const person1 = new Person1();
  person1.age = 30;
  person1.age = -5; // Attempt to set a negative age
  console.log(person1.age); // Output: 30
  
  // Exercise 9
  class Book {
    constructor() {
      this._title = '';
      this._author = '';
    }
  
    get title() {
      return this._title;
    }
  
    set title(value) {
      this._title = value;
    }
  
    get author() {
      return this._author;
    }
  
    set author(value) {
      this._author = value;
    }
  }
  
  const book = new Book();
  book.title = 'The Great Gatsby';
  book.author = 'F. Scott Fitzgerald';
  console.log(book.title); // Output: The Great Gatsby
  console.log(book.author); // Output: F. Scott Fitzgerald
  
  // Exercise 10
  class BankAccount1 {
    constructor(accountNumber, balance) {
      this._accountNumber = accountNumber;
      this._balance = balance;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(value) {
      if (value >= 0) {
        console.log(`Transaction: Balance updated to ${value}`);
        this._balance = value;
      }
    }
  
    // Additional method for transactions
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Transaction: Withdrew ${amount}, new balance: ${this._balance}`);
      } else {
        console.log('Transaction: Insufficient funds.');
      }
    }
  }
  
  const account = new BankAccount1('123456', 1000);
  console.log(account.balance); // Output: 1000
  
  account.withdraw(500);
  console.log(account.balance); // Output: 500
  
  // Exercise 11
  class Square {
    constructor(sideLength) {
      this._sideLength = sideLength;
    }
  
    get area() {
      return this._sideLength * this._sideLength;
    }
  }
  
  const square = new Square(4);
  console.log(square.area); // Output: 16
  
  // Exercise 12
  class Person2 {
    constructor(birthdate) {
      this._birthdate = birthdate;
    }
  
    get age() {
      const today = new Date();
      const birthYear = this._birthdate.getFullYear();
      const currentYear = today.getFullYear();
      return currentYear - birthYear;
    }
  }
  
  const person3 = new Person2(new Date('1990-01-15'));
  console.log(person.age); // Output: Calculated age based on birthdate
  
  // Exercise 13
  class Product1 {
    constructor(name, price, quantity) {
      this._name = name;
      this._price = price;
      this._quantity = quantity;
    }
  
    get totalPrice() {
      return this._price * this._quantity;
    }
  }
  
  const product2 = new Product1('Widget', 10, 5);
  console.log(product2.totalPrice); // Output: 50
  
  // Exercise 14
  class Car {
    constructor(make, model, year) {
      this._make = make;
      this._model = model;
      this._year = year;
    }
  
    get age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this._year;
    }
  }
  
  const car = new Car('Toyota', 'Camry', 2018);
  console.log(car.age); // Output: Calculated age based on the year
  
  // Exercise 15
  class Student2 {
    constructor(name) {
      this._name = name;
      this._grades = [];
    }
  
    get averageGrade() {
      if (this._grades.length === 0) {
        return 0;
      }
  
      const sum = this._grades.reduce((total, grade) => total + grade, 0);
      return sum / this._grades.length;
    }
  }
  
  const student2 = new Student2('Alice');
  student.grades = [90, 85, 78, 92];
  console.log(student.averageGrade); // Output: Calculated average of grades
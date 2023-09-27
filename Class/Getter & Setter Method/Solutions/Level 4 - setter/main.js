// Exercise 1 - Person class with a set age method
class Person {
    constructor() {
      this._age = 0;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      if (Number.isInteger(value) && value >= 0) {
        this._age = value;
      }
    }
  }
  
  const person = new Person();
  person.age = 30;
  console.log(person.age); // Output: 30
  
  person.age = -5; // This won't change the age
  console.log(person.age); // Output: 30
  
  // Exercise 2 - Rectangle class with set width and set height methods
  class Rectangle {
    constructor() {
      this._width = 0;
      this._height = 0;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      }
    }
  
    set height(value) {
      if (value > 0) {
        this._height = value;
      }
    }
  }
  
  const rectangle = new Rectangle();
  rectangle.width = 5;
  rectangle.height = 10;
  console.log(rectangle.area); // Output: 50
  
  rectangle.width = -2; // This won't change the width
  rectangle.height = 0;  // This won't change the height
  console.log(rectangle.area); // Output: 50
  
  // Exercise 3 - Temperature class with a set temperature method
  class Temperature {
    constructor() {
      this._temperature = 0;
    }
  
    get temperature() {
      return this._temperature;
    }
  
    set temperature(value) {
      if (value >= -100 && value <= 100) {
        this._temperature = value;
      }
    }
  }
  
  const temp = new Temperature();
  temp.temperature = 25;
  console.log(temp.temperature); // Output: 25
  
  temp.temperature = -150; // This won't change the temperature
  console.log(temp.temperature); // Output: 25
  
  // Exercise 4 - BankAccount class with a set balance method
  class BankAccount {
    constructor() {
      this._balance = 0;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(value) {
      if (value >= 0) {
        this._balance = value;
      }
    }
  }
  
  const account = new BankAccount();
  account.balance = 1000;
  console.log(account.balance); // Output: 1000
  
  account.balance = -500; // This won't change the balance
  console.log(account.balance); // Output: 1000
  
  // Exercise 5 - Product class with a set discount method
  class Product {
    constructor() {
      this._discount = 0;
    }
  
    get discount() {
      return this._discount;
    }
  
    set discount(value) {
      if (value >= 0 && value <= 100) {
        this._discount = value;
      }
    }
  }
  
  const product = new Product();
  product.discount = 20;
  console.log(product.discount); // Output: 20
  
  product.discount = -10; // This won't change the discount
  console.log(product.discount); // Output: 20
  
  // Exercise 6 - Student class with a set name method
  class Student {
    constructor() {
      this._name = '';
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (typeof value === 'string' && value.length > 0) {
        this._name = value;
      }
    }
  }
  
  const student = new Student();
  student.name = 'Alice';
  console.log(student.name); // Output: 'Alice'
  
  student.name = ''; // This won't change the name
  console.log(student.name); // Output: 'Alice'
  
  // Exercise 7 - Car class with set mileage and set fuel methods
  class Car {
    constructor() {
      this._mileage = 0;
      this._fuel = 0;
    }
  
    get mileage() {
      return this._mileage;
    }
  
    get fuel() {
      return this._fuel;
    }
  
    set mileage(value) {
      if (value >= 0) {
        this._mileage = value;
      }
    }
  
    set fuel(value) {
      if (value >= 0) {
        this._fuel = value;
      }
    }
  }
  
  const car = new Car();
  car.mileage = 50000;
  console.log(car.mileage); // Output: 50000
  
  car.fuel = 50;
  console.log(car.fuel); // Output: 50
  
  car.mileage = -1000; // This won't change the mileage
  console.log(car.mileage); // Output: 50000
  
  car.fuel = -10; // This won't change the fuel
  console.log(car.fuel); // Output: 50
  
  // Exercise 8 - Email class with a set address method
  class Email {
    constructor() {
      this._address = '';
    }
  
    get address() {
      return this._address;
    }
  
    set address(value) {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        this._address = value;
      }
    }
  }
  
  const email = new Email();
  email.address = 'user@example.com';
  console.log(email.address); // Output: 'user@example.com'
  
  email.address = 'invalid-email'; // This won't change the address
  console.log(email.address); // Output: 'user@example.com'
  
  // Exercise 9 - Employee class with set salary and set bonus methods
  class Employee {
    constructor() {
      this._salary = 0;
      this._bonus = 0;
    }
  
    get salary() {
      return this._salary;
    }
  
    get bonus() {
      return this._bonus;
    }
  
    set salary(value) {
      if (value >= 0) {
        this._salary = value;
      }
    }
  
    set bonus(value) {
      if (value >= 0) {
        this._bonus = value;
      }
    }
  }
  
  const employee = new Employee();
  employee.salary = 50000;
  console.log(employee.salary); // Output: 50000
  
  employee.bonus = 2000;
  console.log(employee.bonus); // Output: 2000
  
  employee.salary = -1000; // This won't change the salary
  console.log(employee.salary); // Output: 50000
  
  employee.bonus = -500; // This won't change the bonus
  console.log(employee.bonus); // Output: 2000
  
  // Exercise 10 - LibraryBook class with a set status method
  class LibraryBook {
    constructor() {
      this._status = '';
    }
  
    get status() {
      return this._status;
    }
  
    set status(value) {
      const validStatuses = ['available', 'checked out', 'lost'];
      if (validStatuses.includes(value)) {
        this._status = value;
      }
    }
  }
  
  const book = new LibraryBook();
  book.status = 'available';
  console.log(book.status); // Output: 'available'
  
  book.status =
  
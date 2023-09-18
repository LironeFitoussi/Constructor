// Exercise 1
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const person1 = new Person("Lirone", 23);
console.log(person1);

// Exercise 2
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance);

// Exercise 3
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const booksArray = [book1, book2];
console.log(booksArray);

// Exercise 4
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

const student1 = new Student("Alice", 18, "A");
const student2 = new Student("Bob", 19, "B");
const student3 = new Student("Charlie", 20, "C");
console.log(student1);
console.log(student2);
console.log(student3);

// Exercise 5
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const product1 = new Product("Laptop", 999, "Powerful laptop for work.");
const product2 = new Product("Phone", 499, "Smartphone with great features.");
const productsArray = [product1, product2];
console.log(productsArray);

// Exercise 6
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

const lion = new Animal("Simba", "Lion");
const tiger = new Animal("Rajah", "Tiger");
const elephant = new Animal("Dumbo", "Elephant");
console.log(lion);
console.log(tiger);
console.log(elephant);

// Exercise 7
class Email {
  constructor(subject, sender, recipient) {
    this.subject = subject;
    this.sender = sender;
    this.recipient = recipient;
  }
}

const email1 = new Email("Hello", "user@example.com", "friend@example.com");
console.log(email1);

// Exercise 8
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2023);
console.log(car1);
console.log(car2);

// Exercise 9
class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

const recipe1 = new Recipe(
  "Pancakes",
  ["flour", "milk", "eggs"],
  "Mix and fry."
);
const recipe2 = new Recipe(
  "Spaghetti",
  ["pasta", "sauce", "meat"],
  "Boil and serve."
);

const recipesArray = [recipe1, recipe2];
console.log(recipesArray);

// Exercise 10
class Person1 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

const person2 = new Person1("Alice Johnson", "123 Main St");
const person3 = new Person1("Bob Smith", "456 Elm St");
const person4 = new Person1("Charlie Brown", "789 Oak St");
const addressBook = [person2, person3, person4];
console.log(addressBook);

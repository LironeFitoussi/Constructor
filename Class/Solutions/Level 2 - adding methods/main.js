// Exercise 1
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  greet() {
    return `Hello, my name is ${this.name}.`;
  };
}

const person1 = new Person1("John Doe", 30);
console.log(person1.greet());

// Exercise 2
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  };

  deposit(amount) {
    this.balance += amount;
  };

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  };

  getBalance() {
    return this.balance;
  };

  toString() {
    return `Balance: $${this.balance}`;
  };
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
console.log(account.toString());

// Exercise 3
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  };

  getBookInfo() {
    return `${this.title} by ${this.author} (${this.year})`;
  };
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book.getBookInfo());

// Exercise 4
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  };

  isPassing() {
    return this.grade === "A" || this.grade === "B";
  };
}

const student = new Student("Alice", 18, "A");
console.log(student.isPassing());

// Exercise 5
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  };

  discount(percentage) {
    this.price -= (this.price * percentage) / 100;
  };
}

const product = new Product("Laptop", 1000, "Powerful laptop");
product.discount(10);
console.log(product.price);

// Exercise 6
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} is making a sound.`);
  };
}

const lion = new Animal("Simba", "Lion");
lion.makeSound();

// Exercise 7
class Email {
  constructor(subject, sender, recipient) {
    this.subject = subject;
    this.sender = sender;
    this.recipient = recipient;
  }

  send() {
    console.log(`Email with subject "${this.subject}" sent to ${this.recipient}.`);
  };
}

const email = new Email("Greetings", "user@example.com", "friend@example.com");
email.send();

// Exercise 8
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  };

  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

const car = new Car("Toyota", "Camry", 2022);
console.log(car.getDescription());

// Exercise 9
class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  printInstructions() {
    console.log("Instructions:");
    this.instructions.forEach((step, index) => {
      console.log(`${index + 1}. ${step}`);
    });
  };
}

const recipe = new Recipe(
  "Pancakes",
  ["flour", "milk", "eggs"],
  ["Mix ingredients", "Pour on pan", "Flip and cook"]
);
recipe.printInstructions();

// Exercise 10
class Person2 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getFullAddress() {
    return `${this.name}, ${this.address}`;
  };
}

const person2 = new Person2("Alice Johnson", "123 Main St");
console.log(person2.getFullAddress());

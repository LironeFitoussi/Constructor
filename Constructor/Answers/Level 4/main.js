// Exercise 1
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.calculateArea()}`);

// Exercise 2
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.calculateCircumference = function () {
  return 2 * Math.PI * this.radius;
};

const circle = new Circle(5);
console.log(`Circumference: ${circle.calculateCircumference()}`);

// Exercise 3
function Triangle(base, height) {
  this.base = base;
  this.height = height;
}

Triangle.prototype.calculateArea = function () {
  return 0.5 * this.base * this.height;
};

const triangle = new Triangle(10, 5);
console.log(`Area: ${triangle.calculateArea()}`);

// Exercise 4
function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const account = new BankAccount("123456", 1000);
account.withdraw(200);
console.log(`New Balance: ${account.balance}`);

// Exercise 5
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.passExam = function () {
  return this.grade >= 70 ? "Pass" : "Fail";
};

const student = new Student("Bob", 85);
console.log(`Result: ${student.passExam()}`);

// Exercise 6
function Phone(brand) {
  this.brand = brand;
}

Phone.prototype.ring = function () {
  console.log(`Incoming call from ${this.brand}.`);
};

const phone = new Phone("Apple");
phone.ring();

// Exercise 7
function Team(name) {
  this.name = name;
  this.members = [];
}

Team.prototype.addMember = function (memberName) {
  this.members.push(memberName);
};

const myTeam = new Team("Development Team");
myTeam.addMember("Alice");
myTeam.addMember("Bob");
console.log(`Members: ${myTeam.members}`);

// Exercise 8
function Recipe(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
}

Recipe.prototype.printIngredients = function () {
  console.log(`Ingredients for ${this.name}: ${this.ingredients.join(", ")}`);
};

const recipe = new Recipe("Chocolate Cake", ["flour", "sugar", "cocoa"]);
recipe.printIngredients();

// Exercise 9
function Computer(brand) {
  this.brand = brand;
}

Computer.prototype.bootUp = function () {
  console.log(`${this.brand} computer is booting up.`);
};

const computer = new Computer("Dell");
computer.bootUp();

// Exercise 10
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}`;
};

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(`${book.getInfo()}`);

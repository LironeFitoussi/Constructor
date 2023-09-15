// Exercise 1
function Person(name, age) {
    this.name = name,
    this.age = age
    this.sayHello = function (){
        console.log(`Hello, ${this.name}!`);
    }
}

const person1 = new Person("John", 30);
person1.sayHello();

// Exercise 2
function Calculator() {
    this.add = function (a, b) {
        return a + b;
    };

    this.subtract = function (a, b) {
        return a - b
    }
} 

const calculator = new Calculator()
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 5));

// Exercise 3
function BankAccount() {
    this.balance = 0;
    this.deposit = function (amount) {
        this.balance += amount;
    };
    this.withdrawal = function (amount) {
        this.balance -= amount;
    }
    this.diaplayBalance = function() {
        console.log(`Your Balance is: ${this.balance}$`);
    }
}

const account = new BankAccount();
account.deposit(500);
account.diaplayBalance()
account.withdrawal(250)
account.diaplayBalance()

// Exercise 4
function Todo(description) {
    this.description = description;
    this.isCompleted = false;
    this.complete = function() {
        this.isCompleted = true;
    };
    this.status = function () {
        console.log(`Status: ${todoItem.isCompleted ? 'Completed' : 'Incomplete'}`);
    }
}

const todoItem = new Todo("Buy groceries");
todoItem.status()
todoItem.complete();
todoItem.status()

// Exercise 5
function Product(name, price, discount) {
    this.name = name,
    this.price = price,
    this.discount = discount,
    this.getDiscountedPrice = function () {
        this.price = this.price * ((100-this.discount)/100)
        console.log(`Discounted Price: $${product1.price}`);
    }
}

const product1 = new Product("Hat", 50, 10)
product1.getDiscountedPrice()




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
        return `Addition: ${a + b}`;
    };

    this.subtract = function (a, b) {
        return `Subtraction: ${a - b}`;
    }
} 

const calculator = new Calculator()
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 5));

// Exercise 3
function BankAccount(balance) {
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    };

    this.diaplayBalance = function() {
        console.log(`Your Balance is: ${this.balance}$`);
    }
}

const account = new BankAccount(0);
account.deposit(500);
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

// Exercise 6
function Calculator() {
    this.add = function (a, b) {
        return `Addition: ${a + b}`;
    };

    this.subtract = function (a, b) {
        return `Subtraction: ${a - b}`;
    }
    
    this.multiply = function (a,b) {
        return `Multiplication: ${a * b}`
    }
}   

console.log(calculator.multiply(3, 4));

// Exercise 7 
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

account.withdrawal(200)
account.diaplayBalance()

// Exercise 8
function Todo(description) {
    this.description = description;
    this.isCompleted = false;
    this.complete = function() {
        this.isCompleted = true;
    };
    this.status = function () {
        console.log(`Status: ${todoItem.isCompleted ? 'Completed' : 'Incomplete'}`);
    }
    this.updateDescription = function (updateDescription) {
        this.description = updateDescription 
        console.log(`Updated Description: ${this.description}`); 
    }
}

const myTask = new Todo("Buy Milk")
console.log(myTask.description);
myTask.updateDescription("New task description")
console.log(myTask.description);

// Exercise 9
function Product(name, price, discount, quantity) {
    this.name = name,
    this.price = price,
    this.quantity = quantity
    this.discount = discount,
    this.getDiscountedPrice = () => {
        this.price = this.price * ((100-this.discount)/100)
        console.log(`Discounted Price: $${product1.price}`);
    }

    this.getTotalPrice = () => {
        console.log(`Total Price: $${this.price * this.quantity}`);
        return this.price * this.quantity
    }
}

const product2 = new Product("Apple", 5, 0, 30)
product2.getTotalPrice()


// Exercise 10 
function Animal(species) {
    this.species = species;
}



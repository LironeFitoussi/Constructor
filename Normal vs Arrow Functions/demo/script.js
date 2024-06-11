document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const normalSyntaxButton = document.getElementById('normalSyntaxButton');
    const arrowSyntaxButton = document.getElementById('arrowSyntaxButton');
    const thisKeywordButton = document.getElementById('thisKeywordButton');
    const argumentsObjectButton = document.getElementById('argumentsObjectButton');
    const constructorFunctionButton = document.getElementById('constructorFunctionButton');
    const methodFunctionButton = document.getElementById('methodFunctionButton');
    const functionBindingButton = document.getElementById('functionBindingButton');
    const shorterSyntaxButton = document.getElementById('shorterSyntaxButton');
    const callbackFunctionButton = document.getElementById('callbackFunctionButton');

    // Helper function to display function code
    function displayFunctionCode(func) {
        return `<pre><code>${func.toString()}</code></pre>`;
    }

    // Normal Function Syntax Example
    function greetNormal(name) {
        return `Hello, ${name}!`;
    }

    normalSyntaxButton.addEventListener('click', function() {
        const result = greetNormal('John');
        output.innerHTML = `<h2>Normal Function Syntax Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(greetNormal);
    });

    // Arrow Function Syntax Example
    const greetArrow = name => `Hello, ${name}!`;

    arrowSyntaxButton.addEventListener('click', function() {
        const result = greetArrow('Jane');
        output.innerHTML = `<h2>Arrow Function Syntax Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(greetArrow);
    });

    // Function with 'this' Keyword Example
    const person = {
        name: 'Alice',
        greet: function() {
            return `Hello, ${this.name}!`;
        }
    };

    thisKeywordButton.addEventListener('click', function() {
        const result = person.greet();
        output.innerHTML = `<h2>Function with 'this' Keyword Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(person.greet);
    });

    // Arguments Object Example
    function sum() {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    }

    argumentsObjectButton.addEventListener('click', function() {
        const result = sum(1, 2, 3);
        output.innerHTML = `<h2>Arguments Object Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(sum);
    });

    // Constructor Function Example
    function Person(name) {
        this.name = name;
    }

    constructorFunctionButton.addEventListener('click', function() {
        const person1 = new Person('Lirone');
        const result = person1.name;
        output.innerHTML = `<h2>Constructor Function Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(Person);
    });

    // Method with Arrow Function Example
    const obj = {
        numbers: [1, 2, 3, 4, 5],
        doubled: function() {
            return this.numbers.map(number => number * 2);
        }
    };

    methodFunctionButton.addEventListener('click', function() {
        const result = obj.doubled();
        output.innerHTML = `<h2>Method with Arrow Function Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(obj.doubled);
    });

    // Function Binding Example
    const person2 = {
        name: 'Jane',
        greet: function() {
            return `Hello, ${this.name}!`;
        }
    };

    functionBindingButton.addEventListener('click', function() {
        const greet = person2.greet.bind(person2);
        const result = greet();
        output.innerHTML = `<h2>Function Binding Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(person2.greet);
    });

    // Shorter Syntax Example
    function add(a, b) {
        return a + b;
    }

    shorterSyntaxButton.addEventListener('click', function() {
        const result = add(5, 10);
        output.innerHTML = `<h2>Shorter Syntax Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(add);
    });

    // Arrow Function for Callbacks Example
    const numbers = [1, 2, 3, 4, 5];

    callbackFunctionButton.addEventListener('click', function() {
        const result = numbers.map(number => number * 2);
        output.innerHTML = `<h2>Arrow Function for Callbacks Example:</h2><p>${result}</p>`;
        output.innerHTML += displayFunctionCode(numbers.map);
    });
});

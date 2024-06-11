document.addEventListener('DOMContentLoaded', () => {
    const exerciseList = document.getElementById('exercise-list');

    const exercises = [
        {
            number: 1,
            question : "Write a callback function that logs 'Callback executed!' when called.",
            answer : function callback() {
                console.log('Callback executed!');
            }
        },
        {
            number: 2,
            question : "Create a function that takes a callback and a number as arguments and calls the callback after the specified number of milliseconds.",
            answer : function delay(callback, ms) {
                setTimeout(callback, ms);
            }
        },
        {
            number: 3,
            question : "Modify Exercise 2 to accept an array of numbers and call the callback with each number after the specified delay.",
            answer : function delay(callback, ms, ...args) {
                args.forEach(arg => {
                    setTimeout(() => callback(arg), ms);
                });
            }
        },
        {
            number: 4,
            question : "Implement a callback function that checks if a given number is even and logs the result.",
            answer : function isEven(num) {
                const result = num % 2 === 0;
                console.log(`Is ${num} even? ${result}`);
            }
        },
        {
            number: 5,
            question : "Create a function that takes two numbers and a callback. The callback should be called with the sum of the two numbers.",
            answer : function add(a, b, callback) {
                const sum = a + b;
                callback(sum);
            }
        },
        {
            number: 6,
            question : "Write a callback function that converts a string to uppercase and logs the result.",
            answer : function toUpper(str) {
                const upper = str.toUpperCase();
                console.log(upper);
            }
        },
        {
            number: 7,
            question : "Implement a function that takes an array of strings and a callback. The callback should be called with the reversed version of each string in the array.",
            answer : function reverseStrings(arr, callback) {
                const reversed = arr.map(str => str.split('').reverse().join(''));
                callback(reversed);
            }
        },
        {
            number: 8,
            question : "Create a callback function that logs 'Error occurred!' when called.",
            answer : function error() {
                console.log('Error occurred!');
            }
        },
        {
            number: 9,
            question : "Write a function that simulates fetching user data from a server with a callback to handle the retrieved data.",
            answer : function fetchUserData(callback) {
                const data = { name: 'John Doe', age: 30 };
                callback(data);
            }
        },
        {
            number: 10,
            question : "Modify Exercise 9 to handle errors by calling a separate error callback if the server request fails.",
            answer : function fetchUserData(callback, errorCallback) {
                const error = true;
                if (error) {
                    errorCallback();
                } else {
                    const data = { name: 'John Doe', age: 30 };
                    callback(data);
                }
            }
        },
        {
            number: 11,
            question : "Implement a function that performs an asynchronous file read operation and calls a callback with the file content.",
            answer : function readFile(callback) {
                setTimeout(() => {
                    const content = 'File content';
                    callback(content);
                }, 1000);
            }
        },
        {
            number: 12,
            question : "Write a callback function that calculates the square of a number and logs the result.",
            answer : function square(num) {
                const result = num * num;
                console.log(`Square of ${num}: ${result}`);
            }
        },
        {
            number: 13,
            question : "Create a function that takes an array of numbers and a callback. The callback should be called with the sum of all numbers in the array.",
            answer : function sumArray(arr, callback) {
                const sum = arr.reduce((acc, num) => acc + num, 0);
                callback(sum);
            }
        },
        {
            number: 14,
            question : "Implement a callback function that checks if a given string is a palindrome and logs the result.",
            answer : function isPalindrome(str) {
                const reversed = str.split('').reverse().join('');
                const result = str === reversed;
                console.log(`Is ${str} a palindrome? ${result}`);
            }
        },
        {
            number: 15,
            question : "Write a function that performs an API request to fetch weather data and calls a callback with the retrieved information.",
            answer : function fetchWeatherData(callback) {
                setTimeout(() => {
                    const data = { temperature: 20, conditions: 'Sunny' };
                    callback(data);
                }, 1000);
            }
        },
        {
            number: 16,
            question : "Modify Exercise 15 to handle API request errors by calling an error callback.",
            answer : function fetchWeatherData(callback, errorCallback) {
                const error = true;
                if (error) {
                    errorCallback();
                } else {
                    const data = { temperature: 20, conditions: 'Sunny' };
                    callback(data);
                }
            }
        },
        {
            number: 17,
            question : "Create a callback function that filters an array of numbers to only include even numbers and logs the result.",
            answer : function filterEven(arr) {
                const evens = arr.filter(num => num % 2 === 0);
                console.log(`Even numbers: ${evens}`);
            }
        },
        {
            number: 18,
            question : "Implement a function that takes an array of strings and a callback. The callback should be called with the concatenated version of all strings in the array.",
            answer : function concatStrings(arr, callback) {
                const result = arr.join('');
                callback(result);
            }
        },
        {
            number: 19,
            question : "Write a callback function that sorts an array of numbers in ascending order and logs the result.",
            answer : function sortNumbers(arr) {
                const sorted = arr.sort((a, b) => a - b);
                console.log(`Sorted numbers: ${sorted}`);
            }
        },
        {
            number: 20,
            question : "Create a function that takes an array of objects and a callback. The callback should be called with an array of objects sorted by a specified property.",
            answer : function sortObjects(arr, prop, callback) {
                const sorted = arr.sort((a, b) => a[prop] - b[prop]);
                callback(sorted);
            }
        },
        {
            number: 21,
            question : "Implement a callback function that formats a date object as a string and logs the result.",
            answer : function formatDate(date) {
                const formatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                console.log(`Formatted date: ${formatted}`);
            }
        },
        {
            number: 22,
            question : "Write a function that fetches data from multiple APIs concurrently and calls a callback with the combined results.",
            answer : function fetchMultipleAPIs(callback) {
                const results = [];
                let count = 0;
                const done = () => {
                    count++;
                    if (count === 2) {
                        callback(results);
                    }
                };
                fetch('https://api1.com')
                    .then(response => response.json())
                    .then(data => {
                        results.push(data);
                        done();
                    });
                fetch('https://api2.com')
                    .then(response => response.json())
                    .then(data => {
                        results.push(data);
                        done();
                    });
            }
        },
        {
            number: 23,
            question : "Create a callback function that finds the maximum value in an array of numbers and logs the result.",
            answer : function findMax(arr) {
                const max = Math.max(...arr);
                console.log(`Max value: ${max}`);
            }
        },
        {
            number: 24,
            question : "Implement a function that takes an array of arrays and a callback. The callback should be called with a flattened version of the array of arrays.",
            answer : function flattenArrays(arr, callback) {
                const flattened = arr.reduce((acc, val) => acc.concat(val), []);
                callback(flattened);
            }
        },
        {
            number: 25,
            question : "Write a callback function that calculates the average of an array of numbers and logs the result.",
            answer : function average(arr) {
                const avg = arr.reduce((acc, num) => acc + num, 0) / arr.length;
                console.log(`Average: ${avg}`);
            }
        }
    ]
    // Populate exercise list
    exercises.forEach((exercise) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>Exercise ${exercise.number}:</h4>
            <p><strong>Question:</strong> ${exercise.question}</p>
            <p><strong>Answer:</strong></p>
            <pre><code>${exercise.answer.toString() }</code></pre>
        `;
        exerciseList.appendChild(li);
    });
  });
  

//!  here is wher you can test your code before you submit it.
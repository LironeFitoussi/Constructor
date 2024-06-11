document.addEventListener('DOMContentLoaded', () => {
    const exerciseList = document.getElementById('exercise-list');

    const exercises = [
        {
            number: 1,
            question: "Write a function that returns a Promise that resolves with the string 'Promise resolved!'.",
            answer: function promiseExample() {
                return new Promise(resolve => resolve('Promise resolved!'));
            }
        },
        {
            number: 2,
            question: "Create a function that takes a number as an argument and returns a Promise that resolves after the specified number of milliseconds.",
            answer: function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        },
        {
            number: 3,
            question: "Modify Exercise 2 to accept an array of numbers and return a Promise that resolves with each number after the specified delay.",
            answer: function delay(ms, ...args) {
                return Promise.all(args.map(arg => new Promise(resolve => setTimeout(() => resolve(arg), ms))));
            }
        },
        {
            number: 4,
            question: "Implement a function that takes a number and returns a Promise that resolves with a boolean indicating whether the number is even or not.",
            answer: function isEven(num) {
                return new Promise(resolve => resolve(num % 2 === 0));
            }
        },
        {
            number: 5,
            question: "Create a function that takes two numbers and returns a Promise that resolves with the sum of the two numbers.",
            answer: function add(a, b) {
                return new Promise(resolve => resolve(a + b));
            }
        },
        {
            number: 6,
            question: "Write a function that takes a string and returns a Promise that resolves with the uppercase version of the string.",
            answer: function toUpper(str) {
                return new Promise(resolve => resolve(str.toUpperCase()));
            }
        },
        {
            number: 7,
            question: "Implement a function that takes an array of strings and returns a Promise that resolves with an array of reversed strings.",
            answer: function reverseStrings(arr) {
                return new Promise(resolve => resolve(arr.map(str => str.split('').reverse().join(''))));
            }
        },
        {
            number: 8,
            question: "Create a function that returns a Promise that rejects with the string 'Error occurred!'.",
            answer: function error() {
                return new Promise((resolve, reject) => reject('Error occurred!'));
            }
        },
        {
            number: 9,
            question: "Write a function that simulates fetching user data from a server with a Promise to handle the retrieved data.",
            answer: function fetchUserData() {
                return new Promise((resolve, reject) => {
                    const data = { name: 'John Doe', age: 30 };
                    resolve(data);
                });
            }
        },
        {
            number: 10,
            question: "Modify Exercise 9 to handle errors by rejecting the Promise if the server request fails.",
            answer: function fetchUserData() {
                return new Promise((resolve, reject) => {
                    const error = true;
                    if (error) {
                        reject('Server request failed');
                    } else {
                        const data = { name: 'John Doe', age: 30 };
                        resolve(data);
                    }
                });
            }
        },
        {
            number: 11,
            question: "Implement a function that performs an asynchronous file read operation and returns a Promise with the file content.",
            answer: function readFile() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const content = 'File content';
                        resolve(content);
                    }, 1000);
                });
            }
        },
        {
            number: 12,
            question: "Write a function that takes a number and returns a Promise that resolves with the square of the number.",
            answer: function square(num) {
                return new Promise(resolve => resolve(num * num));
            }
        },
        {
            number: 13,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with the sum of all numbers in the array.",
            answer: function sumArray(arr) {
                return new Promise(resolve => resolve(arr.reduce((acc, num) => acc + num, 0)));
            }
        },
        {
            number: 14,
            question: "Implement a function that takes a string and returns a Promise that resolves with a boolean indicating whether the string is a palindrome or not.",
            answer: function isPalindrome(str) {
                const reversed = str.split('').reverse().join('');
                return new Promise(resolve => resolve(str === reversed));
            }
        },
        {
            number: 15,
            question: "Write a function that performs an API request to fetch weather data and returns a Promise with the retrieved information.",
            answer: function fetchWeatherData() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const data = { temperature: 20, conditions: 'Sunny' };
                        resolve(data);
                    }, 1000);
                });
            }
        },
        {
            number: 16,
            question: "Modify Exercise 15 to handle API request errors by rejecting the Promise.",
            answer: function fetchWeatherData() {
                return new Promise((resolve, reject) => {
                    const error = true;
                    if (error) {
                        reject('API request failed');
                    } else {
                        const data = { temperature: 20, conditions: 'Sunny' };
                        resolve(data);
                    }
                });
            }
        },
        {
            number: 17,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with an array of only even numbers from the original array.",
            answer: function filterEven(arr) {
                return new Promise(resolve => resolve(arr.filter(num => num % 2 === 0)));
            }
        },
        {
            number: 18,
            question: "Implement a function that takes an array of strings and returns a Promise that resolves with a concatenated string of all strings in the array.",
            answer: function concatStrings(arr) {
                return new Promise(resolve => resolve(arr.join('')));
            }
        },
        {
            number: 19,
            question: "Write a function that takes an array of numbers and returns a Promise that resolves with the sorted array in ascending order.",
            answer: function sortNumbers(arr) {
                return new Promise(resolve => resolve(arr.sort((a, b) => a - b)));
            }
        },
        {
            number: 20,
            question: "Create a function that takes an array of objects and a property name as arguments, and returns a Promise that resolves with an array of objects sorted by the specified property.",
            answer: function sortObjects(arr, prop) {
                return new Promise(resolve => resolve(arr.sort((a, b) => a[prop] - b[prop])));
            }
        },
        {
            number: 21,
            question: "Implement a function that takes a date object and returns a Promise that resolves with a formatted date string.",
            answer: function formatDate(date) {
                const formatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                return new Promise(resolve => resolve(formatted));
            }
        },
        {
            number: 22,
            question: "Write a function that fetches data from multiple APIs concurrently and returns a Promise with the combined results.",
            answer: function fetchMultipleAPIs() {
                const fetchData = url => fetch(url).then(response => response.json());
                return Promise.all([fetchData('https://api1.com'), fetchData('https://api2.com')])
                    .then(results => results.flat());
            }
        },
        {
            number: 23,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with the maximum value in the array.",
            answer: function findMax(arr) {
                return new Promise(resolve => resolve(Math.max(...arr)));
            }
        },{
            number: 24,
            question: "Implement a function that takes an array of arrays and returns a Promise that resolves with a flattened version of the array of arrays.",
            answer: function flattenArrays(arr) {
                return new Promise(resolve => resolve(arr.reduce((acc, val) => acc.concat(val), [])));
            }
        },
        {
            number: 25,
            question: "Write a function that takes an array of numbers and returns a Promise that resolves with the average of all numbers in the array.",
            answer: function average(arr) {
                return new Promise(resolve => {
                    const sum = arr.reduce((acc, num) => acc + num, 0);
                    const avg = sum / arr.length;
                    resolve(avg);
                });
            }
        }
    ];
    
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
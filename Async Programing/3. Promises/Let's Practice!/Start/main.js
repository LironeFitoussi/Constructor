document.addEventListener('DOMContentLoaded', () => {
    const exerciseList = document.getElementById('exercise-list');

    const exercises = [
        {
            number: 1,
            question: "Write a function that returns a Promise that resolves with the string 'Promise resolved!'.",
            answer: "// Your answer here..."
        },
        {
            number: 2,
            question: "Create a function that takes a number as an argument and returns a Promise that resolves after the specified number of milliseconds.",
            answer: "// Your answer here..."
        },
        {
            number: 3,
            question: "Modify Exercise 2 to accept an array of numbers and return a Promise that resolves with each number after the specified delay.",
            answer: "// Your answer here..."
        },
        {
            number: 4,
            question: "Implement a function that takes a number and returns a Promise that resolves with a boolean indicating whether the number is even or not.",
            answer: "// Your answer here..."
        },
        {
            number: 5,
            question: "Create a function that takes two numbers and returns a Promise that resolves with the sum of the two numbers.",
            answer: "// Your answer here..."
        },
        {
            number: 6,
            question: "Write a function that takes a string and returns a Promise that resolves with the uppercase version of the string.",
            answer: "// Your answer here..."
        },
        {
            number: 7,
            question: "Implement a function that takes an array of strings and returns a Promise that resolves with an array of reversed strings.",
            answer: "// Your answer here..."
        },
        {
            number: 8,
            question: "Create a function that returns a Promise that rejects with the string 'Error occurred!'.",
            answer: "// Your answer here..."
        },
        {
            number: 9,
            question: "Write a function that simulates fetching user data from a server with a Promise to handle the retrieved data.",
            answer: "// Your answer here..."
        },
        {
            number: 10,
            question: "Modify Exercise 9 to handle errors by rejecting the Promise if the server request fails.",
            answer: "// Your answer here..."
        },
        {
            number: 11,
            question: "Implement a function that performs an asynchronous file read operation and returns a Promise with the file content.",
            answer: "// Your answer here..."
        },
        {
            number: 12,
            question: "Write a function that takes a number and returns a Promise that resolves with the square of the number.",
            answer: "// Your answer here..."
        },
        {
            number: 13,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with the sum of all numbers in the array.",
            answer: "// Your answer here..."
        },
        {
            number: 14,
            question: "Implement a function that takes a string and returns a Promise that resolves with a boolean indicating whether the string is a palindrome or not.",
            answer: "// Your answer here..."
        },
        {
            number: 15,
            question: "Write a function that performs an API request to fetch weather data and returns a Promise with the retrieved information.",
            answer: "// Your answer here..."
        },
        {
            number: 16,
            question: "Modify Exercise 15 to handle API request errors by rejecting the Promise.",
            answer: "// Your answer here..."
        },
        {
            number: 17,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with an array of only even numbers from the original array.",
            answer: "// Your answer here..."
        },
        {
            number: 18,
            question: "Implement a function that takes an array of strings and returns a Promise that resolves with a concatenated string of all strings in the array.",
            answer: "// Your answer here..."
        },
        {
            number: 19,
            question: "Write a function that takes an array of numbers and returns a Promise that resolves with the sorted array in ascending order.",
            answer: "// Your answer here..."
        },
        {
            number: 20,
            question: "Create a function that takes an array of objects and a property name as arguments, and returns a Promise that resolves with an array of objects sorted by the specified property.",
            answer: "// Your answer here..."
        },
        {
            number: 21,
            question: "Implement a function that takes a date object and returns a Promise that resolves with a formatted date string.",
            answer: "// Your answer here..."
        },
        {
            number: 22,
            question: "Write a function that fetches data from multiple APIs concurrently and returns a Promise with the combined results.",
            answer: "// Your answer here..."
        },
        {
            number: 23,
            question: "Create a function that takes an array of numbers and returns a Promise that resolves with the maximum value in the array.",
            answer: "// Your answer here..."
        },
        {
            number: 24,
            question: "Implement a function that takes an array of arrays and returns a Promise that resolves with a flattened version of the array of arrays.",
            answer: "// Your answer here..."
        },
        {
            number: 25,
            question: "Write a function that takes an array of numbers and returns a Promise that resolves with the average of all numbers in the array.",
            answer: "// Your answer here..."
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
document.addEventListener('DOMContentLoaded', () => {
    const exerciseList = document.getElementById('exercise-list');

    const exercises = [
        {
            number: 1,
            question : "Write a callback function that logs 'Callback executed!' when called.",
            answer : "// Your answer here..."
        },
        {
            number: 2,
            question : "Create a function that takes a callback and a number as arguments and calls the callback after the specified number of milliseconds.",
            answer : "// Your answer here..."
        },
        {
            number: 3,
            question : "Modify Exercise 2 to accept an array of numbers and call the callback with each number after the specified delay.",
            answer : "// Your answer here..."
        },
        {
            number: 4,
            question : "Implement a callback function that checks if a given number is even and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 5,
            question : "Create a function that takes two numbers and a callback. The callback should be called with the sum of the two numbers.",
            answer : "// Your answer here..."
        },
        {
            number: 6,
            question : "Write a callback function that converts a string to uppercase and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 7,
            question : "Implement a function that takes an array of strings and a callback. The callback should be called with the reversed version of each string in the array.",
            answer : "// Your answer here..."
        },
        {
            number: 8,
            question : "Create a callback function that logs 'Error occurred!' when called.",
            answer : "// Your answer here..."
        },
        {
            number: 9,
            question : "Write a function that simulates fetching user data from a server with a callback to handle the retrieved data.",
            answer :"// Your answer here..."
        },
        {
            number: 10,
            question : "Modify Exercise 9 to handle errors by calling a separate error callback if the server request fails.",
            answer : "// Your answer here..."
        },
        {
            number: 11,
            question : "Implement a function that performs an asynchronous file read operation and calls a callback with the file content.",
            answer : "// Your answer here..."
        },
        {
            number: 12,
            question : "Write a callback function that calculates the square of a number and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 13,
            question : "Create a function that takes an array of numbers and a callback. The callback should be called with the sum of all numbers in the array.",
            answer : "// Your answer here..."
        },
        {
            number: 14,
            question : "Implement a callback function that checks if a given string is a palindrome and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 15,
            question : "Write a function that performs an API request to fetch weather data and calls a callback with the retrieved information.",
            answer : "// Your answer here..."
        },
        {
            number: 16,
            question : "Modify Exercise 15 to handle API request errors by calling an error callback.",
            answer : "// Your answer here..."
        },
        {
            number: 17,
            question : "Create a callback function that filters an array of numbers to only include even numbers and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 18,
            question : "Implement a function that takes an array of strings and a callback. The callback should be called with the concatenated version of all strings in the array.",
            answer : "// Your answer here..."
        },
        {
            number: 19,
            question : "Write a callback function that sorts an array of numbers in ascending order and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 20,
            question : "Create a function that takes an array of objects and a callback. The callback should be called with an array of objects sorted by a specified property.",
            answer : "// Your answer here..."
        },
        {
            number: 21,
            question : "Implement a callback function that formats a date object as a string and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 22,
            question : "Write a function that fetches data from multiple APIs concurrently and calls a callback with the combined results.",
            answer : "// Your answer here..."
        },
        {
            number: 23,
            question : "Create a callback function that finds the maximum value in an array of numbers and logs the result.",
            answer : "// Your answer here..."
        },
        {
            number: 24,
            question : "Implement a function that takes an array of arrays and a callback. The callback should be called with a flattened version of the array of arrays.",
            answer : "// Your answer here..."
        },
        {
            number: 25,
            question : "Write a callback function that calculates the average of an array of numbers and logs the result.",
            answer : "// Your answer here..."
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
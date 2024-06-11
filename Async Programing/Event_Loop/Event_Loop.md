# Event Loop in JavaScript

The Event Loop is a key concept in JavaScript that handles asynchronous operations and ensures non-blocking execution. It consists of the call stack, callback queue, and event loop, working together to manage the execution of code.

## Call Stack

The call stack is where synchronous code execution occurs in JavaScript. Function calls are added to the call stack, and they are executed one after another in a last-in-first-out manner.

```javascript
function firstFunction() {
  console.log('First function');
}

function secondFunction() {
  console.log('Second function');
  firstFunction(); // Calling another function
}

secondFunction(); // Initial function call
```

In the example above, `secondFunction` is called first, which then calls `firstFunction`. The call stack tracks these function calls and executes them in order.

## Callback Queue

The callback queue holds asynchronous tasks and callbacks. When an asynchronous task completes, its callback is pushed to the callback queue.

```javascript
setTimeout(() => {
  console.log('Asynchronous task completed');
}, 1000);
```

In this example, `setTimeout` schedules an asynchronous task (logging a message) to be executed after 1000 milliseconds. Once the task completes, its callback is added to the callback queue.

## Event Loop

The event loop continuously checks the call stack and callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Asynchronous task completed');
}, 0);

console.log('End');
```

In this example, `setTimeout` with a delay of 0 milliseconds still schedules the callback as an asynchronous task, allowing other synchronous code (like the `console.log` statements) to execute first.

## Microtask Queue

In addition to the callback queue, JavaScript has a microtask queue that holds microtasks such as promises and `process.nextTick` callbacks. Microtasks have higher priority than callbacks in the callback queue and are executed before the next event loop cycle.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Asynchronous task completed');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolved');
});

console.log('End');
```

In this example, the Promise's `then` callback is added to the microtask queue, ensuring it is executed before the asynchronous task callback from `setTimeout`.

## Conclusion

The Event Loop in JavaScript manages the execution of code, handling both synchronous and asynchronous tasks. Understanding how the call stack, callback queue, and event loop work together is essential for writing efficient and non-blocking JavaScript code.

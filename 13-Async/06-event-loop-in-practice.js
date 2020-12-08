// Microtasks have priority over regular tasks
// Async calls are on microtasks

// First
console.log('Test start');
// Fourth
setTimeout(() => console.log('0 sec timer'), 0);
// Third
Promise.resolve('Resolved promise 1') // Immediately resolved promise
    .then(res => console.log(res));

// Take a long time
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++) { }
    console.log(res);
});

// Second
console.log('Test end');
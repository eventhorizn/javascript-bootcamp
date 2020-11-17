/**
 * 
 * @param {String} greeting 
 */
const greet = function (greeting) {

    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

// This is considered a 'closure'
// greeterHey is now the second function above (since it's returned)
const greeterHey = greet('Hey');

greeterHey('Gary');
greeterHey('Katie');

// another way of calling it
greet('Hello')('Gary');


// This is very important when using functional programming

// Re-writing above w/ arror functions
// Looks...confusing
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Gary');
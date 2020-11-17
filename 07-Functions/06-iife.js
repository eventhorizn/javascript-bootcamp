// What if we need a function that is called only once and never again?

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// But we can run it as many times as we want

// Immediately Invoked Function Expression
(function () {
    console.log('This will never run again');
    const isPrivate = 23; // can't access this
})();

(() => console.log('This will also never run again'))();

// IIFE lets us make private variables and functions
// Not a feature of the language, but a pattern

{
    const isPrivate = 23; // Can't access
    var notPrivate = 46; // Can access
}
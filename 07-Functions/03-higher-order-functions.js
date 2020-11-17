// Functions Accepting Callback Functions

/**
 * @param {string} str
 */
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

/**
 * @param {string} str
 */
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

/**
 * @param {string} str
 * @param {Function} fn
 */
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
// passing in function
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JavaScript uses callbacks all the time
document.body.addEventListener('click', transformer);

// Callbacks let you design w/ abstraction in mind

// Functions Returning Functions
const age = '18';

// strict only if they are actually equal
if (age === 18) console.log('You just became an adult :D (strict)');

// loose, it does type coercion
// avoid this whenever you can
if (age == 18) console.log('You just became an adult :D (loose)');

// need a browser for this to work, attach to html file, or put in script.js
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
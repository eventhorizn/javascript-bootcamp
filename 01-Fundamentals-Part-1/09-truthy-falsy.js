// To me, this is just like type coercion...it's complication
// for complication's sake. Keep it simple and don't do shit
// like this

// 5 falsy values: 0, '', undefined, null, NaN
// everything else is truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// this is actually kind of nice. if money just means, 'do we have
// and money?'
const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
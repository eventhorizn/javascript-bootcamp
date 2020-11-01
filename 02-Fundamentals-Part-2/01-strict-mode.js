// has to be the first statement
// can use strict just for a function, but should just use it for the whole script
// it forbids us to do certain things
// for others it will show errors where js would just fail silently
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // strict mode throws an error
    hasDriverLicense = true; // this is a bug
}

if (hasDriversLicense) {
    console.log("I can drive");
}

// strict mode will reserve these words
const interface = 'Audio';
const private = 534;
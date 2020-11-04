// 1. Create an object called 'myCountry' for a country of your choice,
//    containing properties 'country', 'capital', 'language', 'population' and
//    'neighbours'(an array like we used in previous assignments)

const myCountry = {
    country: "United States",
    capital: "DC",
    language: "English",
    population: 256,
    neighbors: ["Canada", "Mexico"]
};


// 1. Using the object from the previous assignment, log a string like this to 
//    the console: 'Finland has 6 million finnish-speaking people, 3 
//    neighbouring countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and 
//    then decrease it by two million using brackets notation.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// 1. Add a method called 'describe' to the 'myCountry' object.This method
//    will log a string to the console, similar to the string logged in the 
//    previous assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object.This
//    method will set a new property on the object, called 'isIsland'.
//   'isIsland' will be true if there are no neighbouring countries, and false 
//    if there are.Use the ternary operator to set the property

const myCountry1 = {
    country: "United States",
    capital: "DC",
    language: "English",
    population: 256,
    neighbors: ["Canada", "Mexico"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? 'true' : 'false';

        //simpler
        //this.isIsland = !Boolean(this.neighbors.length);
    }
};

myCountry1.describe();
myCountry1.checkIsland();

console.log(myCountry1);
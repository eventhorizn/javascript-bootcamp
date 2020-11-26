// Select
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

/**
 * @type {HTMLHeadElement}
 */
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section')
console.log(allSections); // NodeList

document.getElementById('section--1');

// HTMLCollection
// Live collection, if elements are deleted, list will be updated
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));



// Creating and Inserting Elements
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality';
message.innerHTML = 'We use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>'

// Dom element is unique, can only be in one place
//header.prepend(message);
header.append(message);

// What if you want multiple?
//header.append(message.cloneNode(true));

// Before the header
header.before(message);

// After
header.after(message);


// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove(); // recent addition
    //message.parentElement.removeChild(message); // Old school way
});
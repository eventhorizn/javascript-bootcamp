/**
 * @type {HTMLHeadElement}
 */
const header = document.querySelector('.header');

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



// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // gets nothing

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');



// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

// Non-standard
console.log(logo.designer); // Doesn't work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Difference b/t absolute and relative
console.log(logo.src);
console.log(logo.getAttribute('src'));

// Links
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);



// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
logo.className = 'Gary';
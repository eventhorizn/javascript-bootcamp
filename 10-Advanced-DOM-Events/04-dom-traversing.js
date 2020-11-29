// Basically, walking through the DOM

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // only direct children
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// finds the closest child element
// opposite of query selector
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


// Going sideways: siblings
// Can only reference direct siblings
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // all siblings including self
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) {
        el.style.transform = 'scale(0.5)';
    }
});
// Sticky Navigation
/**
 * @type {HTMLDivElement}
 */
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

// Scroll event is not very efficient and should not be used
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
    if (window.scrollY > initialCoords.top) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky');
    }
});


// Better way, Intersection Observer API
// Only hits the callback when threshold is hit

const obsCallback = function (entries, observer) {
    entries.foreach(entry => {
        console.log(entry);
    });
};

const obsOptions = {
    root: null, // sets root to viewport
    threshold: [0, 0.2], // multiple thresholds
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


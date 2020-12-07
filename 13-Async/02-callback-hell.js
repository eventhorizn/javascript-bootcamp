'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// The issue is the nested callbacks
// If you wanted to get more, more, more; you'd have
// callback hell. So many nested callbacks
// What's the answer? Promises (ES6)
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbor = function (country) {
    // AJAX Call Country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    // Waiting for request to come back
    request.addEventListener('load', function () {
        // returns array w/ one object
        const [data] = JSON.parse(this.responseText);

        renderCountry(data);

        // Get neighbor country (2)
        const [neighbor] = data.borders;
        if (!neighbor) return; // island countries

        // AJAX Call Country 2
        // This is how we can get AJAX calls in order
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
        request2.send();

        request2.addEventListener('load', function () {
            // country codes are unique, no array returned
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
}

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');


// Another example of callback hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
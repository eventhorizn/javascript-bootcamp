'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
    //countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    //countriesContainer.style.opacity = 1;
}

// what is returned from a promise is the fulfilled value
// Even if you don't specifically return
// const getCountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`)
//             }

//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             // return the promise and handle on the outside chain
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`)
//             }

//             return response.json()
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => { // catches promise faliures anywhere
//             console.error(err);
//             renderError(`Something went wrong ${err.message}. Try again`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// }

// btn.addEventListener('click', function () {
//     getCountryData('portugal');
// });

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`)
        }

        return response.json();
    });
}

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) throw new Error('No neighbor found!');

            // return the promise and handle on the outside chain
            return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => { // catches promise faliures anywhere
            console.error(err);
            renderError(`Something went wrong ${err.message}. Try again`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
}

btn.addEventListener('click', function () {
    getCountryData('portugal');
});

getCountryData('australia');
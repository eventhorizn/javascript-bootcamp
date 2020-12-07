'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Old school way

const getCountryDataOld = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    // Waiting for request to come back
    request.addEventListener('load', function () {
        // returns array w/ one object
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <article class="country">
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
    });
}

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


// Modern Way
const getCountryDataVerbose = function (country) {
    const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function (response) {
            return response.json(); // this is also a promise
        })
        .then(function (data) { // handle resonse.json promis
            renderCountry(data[0]);
        });
}
//getCountryDataVerbose('portugal');

// Cleaner way to do the above
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
}
getCountryData('portugal');
// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     alert(err.message);
// }

// async await is just syntax sugar over promises/then
const countriesContainer = document.querySelector('.countries');

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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const whereAmI = async function () {
    try {
        // Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse Geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const dataGeo = await resGeo.json();

        if (!resGeo.ok) throw new Error('Problem getting location data');

        // Country data
        // will wait until data is fetched
        // stops execution, but it's an async task so no blocking
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);

        if (!res.ok) throw new Error('Problem getting country');

        const data = await res.json();
        renderCountry(data[0])
    } catch (err) {
        console.log(err);
        renderError(err);
    }
}
whereAmI()
console.log('FIRST');
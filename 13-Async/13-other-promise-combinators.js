// Promise.race
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`)
        }

        return response.json();
    });
};

(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
        getJSON(`https://restcountries.eu/rest/v2/name/mexico`)]);

    console.log(res[0]);
})();

// Race is good for infinite promise loop, or long running promises

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long'));
        }, s * 1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
    timeout(3)
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));


// Promise.allSettled
// Takes array of promises, and returns array of results
// Doesn't short circuit
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success')
]).then(res => console.log(res));


// Promise.any [ES2021]
// Returns first fulfilled promise
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success')
]).then(res => console.log(res));

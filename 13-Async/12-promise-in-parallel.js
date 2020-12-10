const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`)
        }

        return response.json();
    });
}

const get3Countrys = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

        // console.log([data1.capital, data2.capital, data3.capital]);

        // Runs all promises at same time
        // Short circuits if one promise fails
        const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)])

        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.error(err);
    }
}

get3Countrys('portugal', 'canada', 'tanzania');
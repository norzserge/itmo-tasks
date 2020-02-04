const url = 'https://kodaktor.ru/j/ips';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`HTTP error: ${response.status}`))
.then(result => {
    let res = result.reduce((acc, element) => ({
        ...acc, [element.ip]: (acc[element.ip] || 0) + 1
    }), {});
    console.log(res);
})
.catch(err => console.error(err));
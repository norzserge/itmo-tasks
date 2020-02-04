const url = 'https://kodaktor.ru/j/ips';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`HTTP error: ${response.status}`))
.then(result => {
    console.log(result);
})
.catch(err => console.error(err));
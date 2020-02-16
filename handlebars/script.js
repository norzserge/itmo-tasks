const url = 'https://kodaktor.ru/j/rates';
let table = document.querySelector('.table');

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    // handlebars syntax
    let source = document.getElementById('template').innerHTML;    
    let template = Handlebars.compile(source);
    let html = template(result);
    // handlebars syntax end
    table.innerHTML = html;
})
.catch(err => console.error(err));

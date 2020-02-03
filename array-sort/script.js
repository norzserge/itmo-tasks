const url = 'https://kodaktor.ru/api/usermails';
let list = document.querySelector('.list'),
    listItems = '';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log("Ошибка HTTP: " + response.status))
.then(data =>  {
    // sort by text length
    data.sort(function(a, b){
        return a.length - b.length;
    });
    data.forEach(item => {
        listItems += `<li>${item}</li>`; 
    });
    list.innerHTML = listItems;
})
.catch(err => console.error(err));
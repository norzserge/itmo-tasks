const url = "https://kodaktor.ru/j/users";
let list = document.querySelector('.list');
let listItems = '';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    result.users.forEach((element, i) => {
        if(element.login === 'myuserlogin@my.spb.ru') {
            result.users.splice(i, 1);
        }
        listItems += `<li>login: ${element.login} password: ${element.password}</li>`;   
    });
    list.innerHTML = listItems;
})
.catch(err => console.error(err));

const url = "https://kodaktor.ru/j/users";
let list = document.querySelector('.list');
let listItems = '';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    result.users.forEach((element, index) => {
    //    listItems += `<li>${element.login}</li>`;
    //    list.innerHTML = listItems;
        if(element.login === "myuserlogin@my.spb.ru") {
            delete result.users[index];
        }
    });
    console.log(result.users);
})
.catch(err => console.error(err));

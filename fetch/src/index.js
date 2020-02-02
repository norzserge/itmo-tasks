const url = "https://node-server.online/j/users/";
let newItem = '',
    newItemText = '';

let list = document.createElement('ul');
list.classList.add('list');
document.body.prepend(list);

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    result.users.forEach(element => {
        newItem = document.createElement('li');
        newItemText = document.createTextNode(element.login);
        newItem.append(newItemText);
        list.append(newItem);
        /*
        ** Сформировать элементы списка можно более простым способом:
        ** listItems += `<li>${element.login}</li>`;
        ** list.append(listItems);
        */
    });
})
.catch(err => console.error(err));


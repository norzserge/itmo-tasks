const url = 'https://kodaktor.ru/j/ips';
let dataObject, 
    dataArraySortable = [],
    table = document.querySelector('.sort-table tbody'),
    tableContent = '';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`HTTP error: ${response.status}`))
.then(result => {
    dataObject = result.reduce((acc, element) => ({
        ...acc, [element.ip]: (acc[element.ip] || 0) + 1
    }), {});
    
    for (let ip in dataObject) {
        dataArraySortable.push([ip, dataObject[ip]]);
    }

    dataArraySortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    dataArraySortable.forEach(element => {
        tableContent += `<tr><td>${element[1]}</td><td>${element[0]}</td></tr>`;
    });
   
    table.innerHTML = tableContent;
})
.catch(err => console.error(err));
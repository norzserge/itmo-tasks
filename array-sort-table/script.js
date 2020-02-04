const url = 'https://kodaktor.ru/j/ips';
let dataObject, 
    dataArray = [],
    onlyOneVisitArray = [],
    onlyVisitsArray = [],
    table = document.querySelector('.sort-table tbody'),
    tableContent = '',
    questionsList = document.querySelector('ul');

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`HTTP error: ${response.status}`))
.then(result => {
    // создаем объект из количества вхождений
    dataObject = result.reduce((acc, element) => ({
        ...acc, [element.ip]: (acc[element.ip] || 0) + 1
    }), {});
    
    // записываем данные в массив для последнующих операций
    for (let ip in dataObject) {
        dataArray.push([ip, dataObject[ip]]);
    }
    
    // сортируем массив по убыванию
    dataArray.sort(function(a, b) {
        return b[1] - a[1];
    });

    // формируем контент для вывода на клиенте
    dataArray.forEach(element => {
        tableContent += `<tr><td>${element[0]}</td><td>${element[1]}</td></tr>`;
    });

    // возращаем новый массив, состоящий только из количества посещений для поиска максимального значения
    onlyVisitsArray = dataArray.map(function(item) {
        return item[1];
    });

    // фильтруем массив для поиска IP-адресов, посещавших ресурс один раз
    onlyOneVisitArray = dataArray.filter((item) => item[1] == 1);

    // выводим контент на клиенте
    table.innerHTML = tableContent;
    questionsList.innerHTML = `
        <li>${dataArray.length} - уникальных адресов присутствует в таблице</li>
        <li>${onlyOneVisitArray.length} - адресов посещали сайт по одному разу</li>
        <li>${Math.max(...onlyVisitsArray)} - максимальная частота посещения</li>
    `;
})
.catch(err => console.error(err));
const url = 'https://kodaktor.ru/cart_data.json';
let productItems = '',
    currentElement = null,
    budgetValue = null,
    counter = 0,
    productList = document.querySelector('.product-list'),
    dropArea = document.querySelector('.dragndrop-area'),
    itemsInCart = document.querySelector('.items-value'),
    clearCartBtn = document.querySelector('.clear-cart'),
    inputBudget = document.querySelector('.budget-value'),
    setBudgetBtn = document.querySelector('.set-budget-btn'),
    budgetBalance = document.querySelector('.balance-value'),
    productsListInCart = dropArea.querySelectorAll('.product-inner');

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    for (key in result) {
        productItems += `
            <li>
                <div class="product" draggable="true">
                    <div class="product-inner" id="${key}">
                        <div class="product-img"><img src="./img/${key}.jpg"></div>
                        <div class="product-name">${key}</div>
                        <div class="product-price">Цена: <span class="price-value">${result[key]}</span> $</div>
                        <div class="count"></div>
                    </div>
                </div>
                <div class="add-to-cart-btn"><button>Добавить в корзину</button></div>
            </li>
        `;
    }
    productList.innerHTML = productItems;

    document.querySelectorAll('.product').forEach(element => {
        // dragstart - пользователь начинает перетаскивание элемента
        element.addEventListener('dragstart', e => {
            currentElement = e.target.querySelector('.product-name').textContent;
            // setData(format, data): добавляет данные в нужном формате
            e.dataTransfer.setData('text/plain', e.target.innerHTML);
            // setDragImage(element, x, y) - устанавливает изображение для перетаскивания с координатами курсора (0, 0 — левый верхний угол)
            e.dataTransfer.setDragImage(e.target, 100, 100);
        });
    });
})
.catch(err => console.error(err));

// dragover - курсор мыши наведен на элемент (drop area) при перетаскивании
dropArea.addEventListener('dragover', e => e.preventDefault());

// drop - происходит drop элемента
dropArea.addEventListener('drop', e => {
    let balance = 0;
    
    dropArea.innerHTML += e.dataTransfer.getData('text/plain');
    productsListInCart.forEach((element) => {
        balance += parseInt(element.querySelector('.price-value').innerText);
    });

    if(budgetValue > balance) {
        budgetBalance.innerText = budgetValue - balance;
        counter++;
        itemsInCart.innerText = counter;
    } else {
        console.log('Ваш бюджет превышен');
    }
});

setBudgetBtn.addEventListener('click', () => {
    budgetValue = inputBudget.value;
    budgetBalance.innerText = budgetValue;
});

clearCartBtn.addEventListener('click', () => {
    dropArea.innerHTML = '';
    droppedElementArray = [];
    counter = 0;
    itemsInCart.innerText = counter;
});
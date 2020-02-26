const url = 'https://kodaktor.ru/cart_data.json';
let productItems = '',
    currentElementPrice = 0,
    budgetValue = null,
    counter = 0,
    isBudgetDetermined = false,
    productList = document.querySelector('.product-list'),
    dropArea = document.querySelector('.dragndrop-area'),
    itemsInCart = document.querySelector('.items-value').innerText,
    clearCartBtn = document.querySelector('.clear-cart'),
    inputBudget = document.querySelector('.budget-value'),
    budgetValueText = document.querySelector('.budget-value-text'),
    setBudgetBtn = document.querySelector('.set-budget-btn'),
    budgetBalance = document.querySelector('.balance-value');

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
            // записываем значение цены выбранного товара
            currentElementPrice = parseInt(e.target.querySelector('.price-value').textContent);
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

    // Если остаток меньше цены dragstart-елемента - выдаем сообщение о превышении бюджета
    if (!isBudgetDetermined) {
        alert('Укажите Ваш бюджет');
    } else if (budgetBalance.innerText < currentElementPrice) {
        alert('Ваш бюджет превышен');
    } else {
        dropArea.innerHTML += e.dataTransfer.getData('text/plain');
        dropArea.querySelectorAll('.product-inner').forEach((element) => {
            balance += parseInt(element.querySelector('.price-value').innerText);
        });
        budgetBalance.innerText = budgetValue - balance;
        counter++;
        itemsInCart = counter;
    }
});

/*
** 1) определяем бюджет из введенного значения в input
** 2) устанавливаем первоначальное значение остатка, равного бюджету
** 3) скрываем input и кнопку бюджета
** 4) добавляем текстовое значение бюджета
** 5) переводим булю введен/не введен бюджет
*/
setBudgetBtn.addEventListener('click', () => {
    budgetValue = inputBudget.value;
    budgetBalance.innerText = budgetValue;
    setBudgetBtn.style.display = 'none';
    inputBudget.style.display = 'none';
    budgetValueText.innerHTML = `Ваш бюджет ${budgetValue} $`;
    isBudgetDetermined = true;
});

/*
** Очищаем все данные корзины
** 1) dropArea
** 2) счетчик товаров
** 3) отображаем кнопку и поле ввода бюджета
** 4) текстовое значение бюджета budgetValueText
** 5) остаток budgetBalance
** 6) значение input 
*/
clearCartBtn.addEventListener('click', () => {
    dropArea.innerHTML = '';
    counter = 0;
    itemsInCart = counter;
    setBudgetBtn.style.display = 'block';
    inputBudget.style.display = 'block';
    budgetValueText.innerHTML = '';
    budgetBalance.innerText = 0;
    inputBudget.value = null;
});
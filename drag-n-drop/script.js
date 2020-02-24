let url = 'https://kodaktor.ru/cart_data.json';
let productList = document.querySelector('.product-list');
let productItems = '';
let dropArea = document.querySelector('.dragndrop-area');

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
.then(result => {
    for (key in result) {
        productItems += `
            <li>
                <div class="product-info" draggable="true">
                    <div class="product-img"><img src="./img/${key}.jpg"></div>
                    <div class="product-name">${key}</div>
                    <div class="product-price">Цена: <span class="price-value">${result[key]}</span> $</div>
                </div>
                <div class="add-to-cart-btn"><button>Добавить в корзину</button></div>
            </li>
        `;
    }
    productList.innerHTML = productItems;

    document.querySelectorAll('.product-info').forEach(element => {
        // dragstart - пользователь начинает перетаскивание элемента
        element.addEventListener('dragstart', e => {
            // setData(format, data): добавляет данные в нужном формате
            e.dataTransfer.setData('text/plain', e.target.textContent);
            // setDragImage(element, x, y) - устанавливает изображение для перетаскивания с координатами курсора (0, 0 — левый верхний угол)
            e.dataTransfer.setDragImage(e.target, 100, 100);
        });
    });
})
.catch(err => console.error(err));

// dragover - курсор мыши наведен на элемент (drop area) при перетаскивании
dropArea.addEventListener('dragover', e => e.preventDefault());
// dropArea.addEventListener('dragover', e => {
//     e.preventDefault();
//     e.target.style.background = '#d1ffd3';
// });
// dropArea.addEventListener('dragleave', e => e.target.style.background = '#fff');

// drop - происходит drop элемента
dropArea.addEventListener('drop', e => e.target.textContent += e.dataTransfer.getData('text/plain'));
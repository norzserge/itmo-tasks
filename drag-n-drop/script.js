let url = 'https://kodaktor.ru/cart_data.json';
let productList = document.querySelector('.product-list');
let productItems = '';
let dragndropArea = document.querySelector('.dragndrop-area');

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
        element.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', e.target.textContent));
    });
})
.catch(err => console.error(err));

dragndropArea.addEventListener('dragover', e => e.preventDefault());
dragndropArea.addEventListener('drop', e => e.target.textContent += e.dataTransfer.getData('text/plain'));
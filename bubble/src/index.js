let sender = document.querySelector('.sender');
let recepient = document.querySelector('.recepient');
let button = document.querySelector('.counter-btn');
let counterNum = document.querySelector('.counter');
let counter = 0;

// создаем кастомное событие и колбэк из функции, которая добавляет в блок эмодзи-символ, взятый из title
recepient.addEventListener('myCustomEvent', e => e.target.children[1].textContent += e.target.title);

// подписываем на событие клика по отправителю и вызываем кастомное событие на слушателе (блоке .recepient)
sender.addEventListener('click', () => recepient.dispatchEvent(new CustomEvent('myCustomEvent')));

// создаем обмен событиями между двумя элементами
sender.addEventListener('mySecondCustomEvent', e => e.target.textContent += e.target.title);
recepient.addEventListener('click', () => sender.dispatchEvent(new CustomEvent('mySecondCustomEvent')));

// Пример №2 - при клике по кнопке увеличиваем счетчик добавленных в корзину товаров
counterNum.addEventListener('counterIncrease', e => {
    counter++;
    e.target.textContent = counter;
});
button.addEventListener('click', () => counterNum.dispatchEvent(new CustomEvent('counterIncrease')));
let loadButton = document.querySelector('.load-btn'),
    insertButton = document.querySelector('.insert-btn'),
    imgUrlFirst = 'http://blogo-daru.ru/wp-content/uploads/2015/11/stoika-kvadrat.jpg',
    imgUrlSecond = 'http://blogo-daru.ru/wp-content/uploads/2015/11/Есть-преступление.png',
    myImg;

// Функция создания IMG-элемента, возвращающая <img src="url" class="cache-img">
const cachImg = (url) => {
    const img = document.createElement('img');
    img.classList.add('cache-img');
    img.src = url;
    return img;
};

// При загрузке страницы сразу добавляем картинку в DOM
document.querySelector('.img-wrap-1').appendChild(cachImg(imgUrlFirst));

// По клику на картинке добавляем border и скрываем по истечении 10 секунд 
let img = document.querySelector('.cache-img');
img.addEventListener('click', e => {
    e.target.style.border = '5px solid #cf302b';
    setTimeout(() => {
        e.target.style.display = "none";
    }, 10000);
});

// По клику на кнопку Load Image загружаем картинку и скрываем данную кнопку, раздизейбливая вторую
loadButton.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    myImg = cachImg(imgUrlSecond);
    insertButton.disabled = false;
});

// По клику на кнопку Insert Image добавляем в DOM картинку
insertButton.addEventListener('click', () => {
    document.querySelector('.img-wrap-2').appendChild(myImg);
});
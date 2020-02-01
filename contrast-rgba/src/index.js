let colorPicker = document.querySelector('.color-picker'),
    colorBlock = document.querySelector('.testing-area'),
    headerText = document.querySelector('h2'),
    headerTextColor = getComputedStyle(headerText).backgroundColor,
    currentColor;

// функция перевода value селектнутого цвета из color-picker в RGB-модель (однако можно обойтись и без нее)
let hexToRGB = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// функция декомпозиции значения RGB на части и инвертирования цвета
let invertRGB = (rgb) => {
    let rgbArray = rgb.match(/\d+/g);
    let r = 255 - rgbArray[0],
        g = 255 - rgbArray[1],
        b = 255 - rgbArray[2];
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// устанавливаем новый background-color, выбранный в color-picker, и инвертированный цвет текста
colorPicker.addEventListener('input', (e) => {
    colorBlock.style.backgroundColor = e.target.value;
    /* 
    ** последующее действие так же можно выполнить без использования функции hexToRgb, воспользовавшись методом getComputedStyle()
    ** currentColor = getComputedStyle(colorBlock).backgroundColor;
    ** данный метод возвращает цвет уже в RGB-формате и не нужно дополнительно его переводить из HEX
    */
    currentColor = hexToRGB(e.target.value);
    headerText.style.color = invertRGB(currentColor);
});

// изменяем background-color и цвет текста по ховеру
colorBlock.addEventListener('mouseover', () => {
    if(currentColor) {
        colorBlock.style.backgroundColor = invertRGB(currentColor);
        headerText.style.color = currentColor;
    }
});

colorBlock.addEventListener('mouseleave', () => {
    if(currentColor) {
        colorBlock.style.backgroundColor = currentColor;
        headerText.style.color = invertRGB(currentColor);
    }
});
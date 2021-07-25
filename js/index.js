//Для добавления животинки вписываем имя и контент в массив и добавляем такой же класс с ее картинкой в style.css

//Массивы с именами животинок и контентом
let arrCards = ['Deer', 'Squirrel', 'Bird'];
let arrCardsContent = ['Naturalist investigation', 'Kamikaze squirrels', 'Birds Fight club'];


//Переменные для кнопок и элементов
let clickLeft, clickRight;
let left = document.querySelector('#leftCard');
let center = document.querySelector('#centerCard');
let right = document.querySelector('#rightCard');
let leftCont = document.querySelector('#leftContent');
let centerCont = document.querySelector('#centerContent');
let rightCont = document.querySelector('#rightContent');
let leftPic = document.querySelector('#leftPic');
let centerPic = document.querySelector('#centerPic');
let rightPic = document.querySelector('#rightPic');
let arrowLeft = document.querySelector('#arrLeft');
let arrowRight = document.querySelector('#arrRight');

//Вешаю обработчик событий на стрелки <- ->
arrowLeft.onclick = stepLeft;
arrowRight.onclick = stepRight;


//Функция смены животинок
function position() {
    left.textContent = arrCards[0];
    center.textContent = arrCards[1];
    right.textContent = arrCards[2];
}

//Функция смены картинок животинок
function set() {
    leftPic.setAttribute('class', `card ${arrCards[0]}`);
    centerPic.setAttribute('class', `card ${arrCards[1]}`);
    rightPic.setAttribute('class', `card ${arrCards[2]}`);
}

//Функция для смены контента
function cont() {
    leftCont.textContent = arrCardsContent[0];
    centerCont.textContent = arrCardsContent[1];
    rightCont.textContent = arrCardsContent[2];
}

//Объвление карточек на старте слайдера
position();
set();
cont();

//Функция клика левой кнопки
function stepLeft() {
    clickLeft = arrCards.pop();
    arrCards.unshift(clickLeft);
    clickLeft = arrCardsContent.pop();
    arrCardsContent.unshift(clickLeft);
    position();
    set();
    cont();
}

//Функция клика правой кнопки
function stepRight() {
    clickRight = arrCards.shift();
    arrCards.push(clickRight);
    clickRight = arrCardsContent.shift();
    arrCardsContent.push(clickRight);
    position();
    set();
    cont();
}
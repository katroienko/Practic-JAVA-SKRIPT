// // globalAlpha —
// // это свойство, при помощи которого можно рисовать
// // прозрачные (полупрозрачные) фигуры.

// // strokeStyle и fillStyle —
// // это свойства, которые принимают цветовые значения
// // rgba через CSS.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // Получаем контекст 2D рисования


// ctx.strokeStyle = "rgba(255,0,0,0.5)";
// ctx.fillStyle = "rgba(255,0,0,0.5)";
// ctx.beginPath();
// ctx.arc(75, 75, 25, 0, 2 * Math.PI);
// ctx.fillStyle = "rgba(255,0,0,0.3)";
// ctx.fill();


// //Пример использования globalAlpha
// // фон изображения
// ctx.fillStyle = "#FD0";
// ctx.fillRect(0, 0, 75, 75);
// ctx.fillStyle = "#6C0";
// ctx.fillRect(75, 0, 75, 75);
// ctx.fillStyle = "#09F";
// ctx.fillRect(0, 75, 75, 75);
// ctx.fillStyle = "#F30";
// ctx.fillRect(75, 75, 75, 75);
// ctx.fillStyle = "#FFF";


// // устанавливаем значение прозрачности
// ctx.globalAlpha = 0.2;
// // Рисуем полупрозрачные круги
// for (i = 0; i < 7; i++) {
//     ctx.beginPath();
//     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//     ctx.fill();
// }

// //  createLinearGradient(x1, y1, x2, y2) —
// // это функция, которая создает объект линейного
// // градиента с начальной точкой (x1, y1) и конечной
// // точкой (x2, y2).
// const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
// lingrad.addColorStop(0, "#00ABEB");
// lingrad.addColorStop(1, "#fff");
// ctx.fillStyle = lingrad;
// ctx.fillRect(10, 10, 130, 130);



// // createRadialGradient(x1, y1, r1, x2, y2, r2) —
// // это функция, которая создает радиальный градиент.
// // Параметры представляют два круга: один с центром в точке
// // (x1, y1) и радиусом r1, а другой с центром в точке (x2, y2) и
// // радиусом r2.
// const radgrad = ctx.createRadialGradient(45, 45, 10, 45, 45, 45);
// radgrad.addColorStop(0, "red");
// radgrad.addColorStop(1, "white");
// ctx.fillStyle = radgrad;
// ctx.fillRect(0, 0, 150, 150);


// // fillText(text, x, y [, maxWidth]) —
// // это функция, которая вставляет заданный текст в положении
// // (x,y). Опционально может быть указана максимальная ширина.
// ctx.font = "48px serif";
// ctx.fillText("Hello world", 10, 50);

// // strokeText(text, x, y [, maxWidth]) —
// // это функция, которая вставляет контур заданного текста в
// // положении (x,y). Опционально может быть указана
// // максимальная ширина.
// ctx.font = "48px serif";
// ctx.strokeText("Hello world", 10, 50);

//////////////////Рисование изображений
// Внешние изображения —
// это изображения, которые могут быть использованы в
// любых поддерживаемых браузером форматах, таких как
// PNG, GIF, или JPEG.


// drawImage(image, x, y, width, height) —
// это функция, которая добавляет параметр ширины и высоты,
// которые указывают до какого размера нужно изменить
// изображение при рисовании его в canvas.
const image = new Image();
 image.onload = () => {
 ctx.drawImage(image, 0, 0, 150, 150);
 };
 image.src = "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"; // используем любое
// изображение


// задание 
// Создать линейный градиент произвольного цвета. !!!!!! доделать 
const lingrad = ctx.createLinearGradient(0, 0, 500, 500);
lingrad.addColorStop(0, 'red');
function randomColor(){
    return `rgb()`
}
lingrad.addColorStop(0.5, 'green');
lingrad.addColorStop(1, 'blue');
ctx.fillStyle = lingrad;
// ctx.fillRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
ctx.fillRect(0, 0, 500, 500);
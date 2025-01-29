// Нарисовать прямоугольник с цветом заливки rgb(66, 135, 245).


const canvas = document.getElementById('canvas');
const contexCanvas = canvas.getContext('2d');
contexCanvas.fillStyle = "rgb(66, 135, 245)";
const ctx = canvas.getContext('2d');
// прямоуголник
contexCanvas.fillRect(50, 50, 200, 100)


contexCanvas.strokeStyle = "black"; // меняем цвет границы
contexCanvas.strokeRect(150, 100, 150, 25);


////// линия 
ctx.beginPath();
ctx.moveTo(375, 350);
ctx.lineTo(350, 50);
ctx.strokeStyle = "red";
ctx.stroke();


/////////треуголник
ctx.beginPath(); //говорим что хотим нарисовать линию
ctx.moveTo(275, 50); //начальная точка 
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);

ctx.fillStyle = "red";
ctx.fill(); // Метод fill() используется в Canvas API для заполнения фигуры цветом.


// рисование дуги
//  arc(x, y, radius, startAngle, endAngle, anticlockwise) —
// это метод, который рисует дугу с центром в точке (x,y) радиусом radius, начиная с
// угла startAngle и заканчивая в endAngle в направлении против часовой стрелки
// anticlockwise (по умолчанию по ходу движения часовой стрелки).
ctx.beginPath();
ctx.arc(175, 175, 100, 0, 2);
ctx.stroke(); //используется в Canvas API для обводки фигуры по её контуру.



// arc(x, y, radius, startAngle, endAngle, anticlockwise) —
// это метод, который рисует дугу с центром в точке (x,y) радиусом radius, начиная с
// угла startAngle и заканчивая в endAngle в направлении против часовой стрелки
// anticlockwise (по умолчанию по ходу движения часовой стрелки).

// круг
ctx.beginPath();
 ctx.arc(175, 400, 50, 0, 2 * Math.PI);
 ctx.stroke();



//  Нарисовать треугольник произвольного размера, обведенный зеленым контуром

console.log(canvas.getBoundingClientRect().width); 
// Math.random() 
const width = canvas.getBoundingClientRect().width
const height = canvas.getBoundingClientRect().height
const x1 = Math.random()*width;
const y1 = Math.random()*height;

const x2 = Math.random()*width;
const y2 = Math.random()*height;

const x3 = Math.random()*width;
const y3 = Math.random()*height;
//  начинаем отрисовку
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3,y3);
ctx.closePath(); //Метод closePath() используется в Canvas API для замыкания текущего пути (path), соединяя последнюю точку с первой.
ctx.strokeStyle = "green";
ctx.stroke(); //используется в Canvas API для обводки фигуры по её контуру.
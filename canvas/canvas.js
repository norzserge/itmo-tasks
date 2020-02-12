let canvas = document.querySelector('#my-first-canvas');
let ctx = canvas.getContext('2d');


ctx.translate(100, 600);
ctx.rotate(Math.PI/180*270);

ctx.strokeStyle = "#a9a9a9";
ctx.lineWidth = 10;

// С letter
ctx.beginPath();
ctx.moveTo(200, 270);
ctx.lineTo(100, 270);
ctx.lineTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();

// Dot 
ctx.beginPath();
ctx.moveTo(210, 270);
ctx.lineTo(220, 270);
ctx.stroke();

// A letter
ctx.beginPath();
ctx.moveTo(235, 275);
ctx.lineTo(235, 100);
ctx.lineTo(335, 100);
ctx.lineTo(335, 275);
ctx.stroke();

// A letter (horizontal line)
ctx.beginPath();
ctx.moveTo(235, 188);
ctx.lineTo(335, 188);
ctx.stroke();

// Dot
ctx.beginPath();
ctx.moveTo(350, 270);
ctx.lineTo(360, 270);
ctx.stroke();

// M letter
ctx.beginPath();
ctx.moveTo(375, 275);
ctx.lineTo(375, 105);
ctx.lineTo(445, 185);
ctx.lineTo(515, 105);
ctx.lineTo(515, 275);
ctx.stroke();

// Dot
ctx.beginPath();
ctx.moveTo(530, 270);
ctx.lineTo(540, 270);
ctx.stroke();

// Arc
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.bezierCurveTo(200, 350, 400, 350, 530, 300);
ctx.stroke();
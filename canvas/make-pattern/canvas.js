const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.setAttribute('width', '120');
canvas.setAttribute('height', '200');

ctx.translate(2, 195);
ctx.rotate(Math.PI/180*270);

ctx.strokeStyle = "#a9a9a9";
ctx.lineWidth = 2;

// С letter
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(2, 100);
ctx.lineTo(2, 1);
ctx.lineTo(50, 1);

// Dot 
ctx.moveTo(55, 100);
ctx.lineTo(58, 100);

// A letter
ctx.moveTo(65, 101);
ctx.lineTo(65, 1);
ctx.lineTo(115, 1);
ctx.lineTo(115, 101);

// A letter (horizontal line)
ctx.moveTo(65, 50);
ctx.lineTo(115, 50);

// Dot
ctx.moveTo(120, 100);
ctx.lineTo(123, 100);

// M letter
ctx.moveTo(133, 100);
ctx.lineTo(133, 1);
ctx.lineTo(160, 50);
ctx.lineTo(187, 1);
ctx.lineTo(187, 100);

// Dot
ctx.moveTo(190, 99);
ctx.lineTo(193, 99);
ctx.stroke();

// Arc
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(2, 105);
ctx.bezierCurveTo(50, 120, 115, 120, 190, 105);
ctx.stroke();

const pattern = ctx.createPattern(canvas, 'repeat');

const canvas2 = document.createElement('canvas');
const ctx2 = canvas2.getContext('2d');
canvas2.setAttribute('width', '1000');
canvas2.setAttribute('height', '1000');
ctx2.fillStyle = pattern;
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

document.body.prepend(canvas2);
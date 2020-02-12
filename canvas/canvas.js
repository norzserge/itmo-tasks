let canvas = document.querySelector('#my-first-canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(160, 160);
ctx.lineTo(170, 70);
ctx.closePath();
ctx.stroke();
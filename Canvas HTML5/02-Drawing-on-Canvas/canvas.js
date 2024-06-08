let canvas = document.querySelector(`canvas`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ! getContext(`2d`) returns a context through which we can draw elements
let context = canvas.getContext(`2d`);

// ! Rectangle
//* context.fillRect(x, y, width, height);
context.fillStyle = "rgba(242, 189, 102, 0.8)";
context.fillRect(100, 100, 120, 100);
context.fillStyle = "rgba(86, 225, 62, 0.8)";
context.fillRect(400, 100, 100, 160);
context.fillStyle = "rgba(100, 255, 254, 0.8)";
context.fillRect(300, 300, 190, 150);

// ! LINE
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 300);
context.strokeStyle = "red";
context.stroke();

console.dir(canvas);

// ! Arc / Circle
context.beginPath();
context.arc(200, 300, 80, 0, Math.PI * 2);
context.strokeStyle = "blue";
context.stroke();

// & drawing random circles
for (let i = 0; i < 10; i++) {
   let x = Math.floor(Math.random() * (window.innerWidth - 200) + 100);
   let y = Math.floor(Math.random() * (window.innerHeight - 200) + 100);
   let radius = Math.floor(Math.random() * 50 + 50);
   context.beginPath();
   context.arc(x, y, radius, 0, 2 * Math.PI);
   context.strokeStyle = "purple";
   context.stroke();
}

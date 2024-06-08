let canvas = document.querySelector(`canvas`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ! getContext(`2d`) returns a context through which we can draw elements
let context = canvas.getContext(`2d`);

//* context.fillRect(x, y, width, height);
context.fillRect(100, 100, 100, 100);

console.dir(canvas);

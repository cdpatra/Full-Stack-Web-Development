// ! Animation on Canvas
const canvas = document.querySelector(`canvas`);
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext(`2d`);

function Circle(x, y, dx, dy, radius) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;

   this.draw = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";
      context.stroke();
      context.fillStyle = "black";
      context.fill();
   };

   this.update = function () {
      if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
         this.dx = -this.dx;
      }
      if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
         this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
   };
}

let circleArray = [];
for (let i = 0; i < 100; i++) {
   const radius = 30;
   let x = Math.floor(Math.random() * (window.innerWidth - 2 * radius) + radius);
   let y = Math.floor(Math.random() * (window.innerHeight - 2 * radius) + radius);
   let dx = Math.floor(Math.random() - 0.5) + 2;
   let dy = Math.floor(Math.random() - 0.5) + 2;
   circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);

function animate() {
   requestAnimationFrame(animate); //& it is like infinity recursion or infinite loop
   context.clearRect(0, 0, window.innerWidth, window.innerHeight); //* this clears the canvas

   for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
   }
}
animate();

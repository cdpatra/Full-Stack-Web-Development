// ! Interaction with Canvas
const canvas = document.querySelector(`canvas`);
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext(`2d`);

class Circle {
   constructor(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.originalRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
   }
   draw = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = this.color;
      context.stroke();
      context.fillStyle = this.color;
      context.fill();
   };
   update = function () {
      if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
         this.dx = -this.dx;
      }
      if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
         this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      // * interactivity
      if (
         this.x - mouse.x <= interactivityRadius &&
         mouse.x - this.x <= interactivityRadius &&
         this.y - mouse.y <= interactivityRadius &&
         mouse.y - this.y < interactivityRadius
      ) {
         if (this.radius <= maxRadius) {
            this.radius++;
         }
      } else if (this.radius > this.originalRadius) {
         this.radius--;
      }

      this.draw();
   };
}

const mouse = {
   x: undefined,
   y: undefined,
};
const maxRadius = 40;
const interactivityRadius = 100;
const colorArray = [`#389CD1`, `#DE524E`, `#25284B`, `#DDEDFC`, `#808080`];
window.addEventListener(`mousemove`, (event) => {
   mouse.x = event.x;
   mouse.y = event.y;
});
// % making the canvas window responsive when our browser window resizes
window.addEventListener(`resize`, () => {
   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;

   init();
});

let circleArray = [];
function init() {
   circleArray = [];
   for (let i = 0; i < 400; i++) {
      const radius = Math.random() * 5 + 5;
      let x = Math.floor(Math.random() * (window.innerWidth - 2 * radius) + radius);
      let y = Math.floor(Math.random() * (window.innerHeight - 2 * radius) + radius);
      let dx = Math.floor(Math.random() - 0.5) || 1;
      let dy = Math.floor(Math.random() - 0.5) || 1;
      circleArray.push(new Circle(x, y, dx, dy, radius));
   }
}
init();

function animate() {
   requestAnimationFrame(animate); //& it is like infinite recursion or infinite loop
   context.clearRect(0, 0, window.innerWidth, window.innerHeight); //* this clears the canvas

   for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
   }
}
animate();

// ! <<======================<< <| EXECUTION CONTEXT AND CALL STACK IN JAVASCRIPT |> >>========================>>

sayHi();

const username = "Matilda";
const userAge = 25;

function sayHi() {
  const a = 14;
  const b = 12;
  console.log(a + b);
  console.log("Hi");
  add(a, b);
}

function add(x, y) {
  return x + y;
}

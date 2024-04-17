// to check whether it is truthy or falsy we use boolean() constructor

console.log(Boolean(10)); //output-> true
console.log(Boolean(1)); //output-> true
console.log(Boolean(-10)); //output-> true
console.log(Boolean(Infinity)); //output-> true
console.log(Boolean(-Infinity)); //output-> true
console.log(Boolean(" ")); //output-> true
console.log("\n");

console.log(Boolean(0)); //output-> false
console.log(Boolean(NaN)); //output-> false
console.log(Boolean("")); //output-> false
console.log(Boolean(undefined)); //output-> false
console.log(Boolean(null)); //output->false

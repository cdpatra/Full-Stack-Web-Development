// ! <<===================<< EVENT LOOP AND CALLBACK QUEUE IN JAVASCRIPT >>==============>>

// !<|--------<< All the below code are synchronous code >>------------|>
// ^ all the synchronous codes are stored in our call stack.
console.log("Hi - 1");

function hello() {
  console.log("Hello World!");
}

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

hello();
// ! <|----<< setTimeout() and setInterval() are asynchronous code >>------|>
setTimeout(function () {
  console.log("Hi - 3");
}, 0);
console.log("Hi - 2");
// & Asynchronous code do not go into our regular call stack, first it go into WEB APIS section then after completing its timer it goes into the CALLBACK QUEUE then after our original JS engine's call stack get empty, our EVENT LOOP runs and check the CALLBACK QUEUE and sent the CALLBACK QUEUE codes into our call stack

// * to visualize this site :- http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

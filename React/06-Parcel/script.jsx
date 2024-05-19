// ! <<==================<< Parcel >>=================>>
// * our browser do not understand node_modules (node_modules are for server not for the browsers), and our react library do not work on server, it works on client side i.e. on browser, but we want to run react, therefore we use a bundler such as parcel.
// & parcel understand the node_modules and also support the import syntax of npm (which is different from the ES6 import export syntax)
// ^ parcel also use babel internally i.e. our .jsx file will be complied into .js file as well as source map will also be generated.

import React from "react"; // if we do not use parcel then this import statement will give error as our browser do not understand this npm import syntax
console.log(React);

console.log(`hello world`);

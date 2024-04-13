const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop on arrays
const programming = ["js", "rb", "py", "java", "cpp"];
for(const key in programming){
    console.log(key);   //HERE THE OUTPUT WILL BE KEYS NOT THE VALUE AT THAT KEY, THIS BEHAVIOUR IS DIFFERENT FORM for of LOOP
    console.log(programming[key]);
}

// for in loop in maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
map.set("IN", "India");

for(const key in map){
    console.log(key);   // NO ERROR BUT NO OUTPUT AS Map IS NOT ITERABLE SO for in LOOP WILL NOT WORK ON IT
}
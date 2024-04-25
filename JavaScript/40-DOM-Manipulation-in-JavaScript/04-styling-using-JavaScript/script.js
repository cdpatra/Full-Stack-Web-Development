// ! <<===============<< STYLING USING JAVASCRIPT >>===============>>
// ^ even though we have applied style using external css file but JS would not detect it, it can only detect the inline css properties
console.log(document.querySelector("h1").style);
const h1 = document.querySelector("h1").style;
h1.color = "hotpink";
h1.backgroundColor = "pink";
h1.borderRadius = "10px";
h1.padding = "10px";
// * Assignment:- change all the anchor tag color into teal
document.querySelectorAll("a").forEach((aElements) => (aElements.style.color = "teal")); // single line solution
// multiline solution
const allLinks = document.querySelectorAll("a");
for (const link of allLinks) {
  link.style.color = "teal";

  // & to apply multiple styling we can use cssText property (here we have to use the snake case as we used in css)
  link.style.cssText = `
    color: red;
    font-size: 18px;
    font-family: cursive;
    font-weight: 700;
    text-decoration-line: none;`;
}
// & we do not style HTML elements through JS, we generally create classes in css file only and set these class to HTML element using JS in this way all the styling will remain withing css file only
document.querySelector("h2").className = "css-class1";
document.querySelector("h2").className += " css-class2"; // to add another class we can use add in this way, otherwise it will override
document.querySelector("h2").setAttribute("class", "css-class3");

// ^ we generally use the following method
console.log(document.querySelector("h2[hello=world]").classList); // ? it returns DOMTokenList
// ~ in this DOMTokenList there are various methods to add or remove classes
document.querySelector("h2[hello=world]").classList.remove("css-class3");
document.querySelector("h2[hello=world]").classList.add("css-class4");
document.querySelector("h2[hello=world]").classList.toggle("css-class3");

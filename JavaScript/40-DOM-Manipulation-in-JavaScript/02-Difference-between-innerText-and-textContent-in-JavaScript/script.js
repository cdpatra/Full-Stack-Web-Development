// ! <<================<< innerHTML >>================>>
const heading = document.querySelector("h1");
console.log(heading.innerHTML);
heading.innerHTML = "<h4>Hello</h4>";

// ! <<================<< innerText >>==================>>
const innerTextParagraph = document.querySelector("p");
console.log(innerTextParagraph.innerText);
// >> since we have applied styling on bold text in p tag i.e. display: none; therefore  output of the innerText does not contain that bold text

// ! <<=================<< textContent >>=================>>
const textContentParagraph = document.querySelector("p");
console.log(textContentParagraph.textContent);
// >> even though we have applied styling on bold text in p tag i.e. display: none; therefore  output of the textConte does contain that bold text

// ! <|WATCH THE VIDEO FOR BETTER UNDERSTANDING |>

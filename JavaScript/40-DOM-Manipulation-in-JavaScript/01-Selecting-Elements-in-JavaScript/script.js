// ! <<==================<< SELECTING ELEMENTS IN JAVASCRIPT >>===================>>
// ^ naive approach of selecting element
const cssImage = document.body.children[3];
cssImage.src = "https://placehold.co/200/orange/white";

// ! <|----------------<< <| getElementsByTagName() |> >>-------------|>
// ^ this return HTMLCollections
console.log(document.getElementsByTagName("img")); //output-> HTMLCollection(3) [img, img, img]
// ~ another way to select all images of the document
console.log(document.images); //output-> HTMLCollection(3) [img, img, img]

console.log(document.getElementsByTagName("p")); //output-> HTMLCollection(13) [p, p, p, p, p, p, p, p, p, p, p, p, p]

// ! <|-----------------<< <| getElementsByClassName()|> >>-----------------|>
// ^ this return HTMLCollections
const cssClassImage = document.getElementsByClassName("css-image")[0];
console.log(cssClassImage); //output-> <img class="css-image" src="./images/css.png" alt="css roadmap" style="width: 100%; max-width: 600px">

// * if we give invalid class to this method, then it will return null HTMLCollection
console.log(document.getElementsByClassName("invalid-class")); //output-> HTMLCollection []

// ! <|-----------------<< <| getElementById()|> >>-----------------|>
// ^ this directly returns the object
const cssIdImage = document.getElementById("html-css-javascript-image");
console.log(cssIdImage); //output-> <img id="html-css-javascript-image" class="css-image" src="https://placehold.co/200/orange/white" alt="html-css-javascript" style="width: 100%; max-width: 600px" title="Frontend Roadmap">

//* if we give invalid id to this method, then it will return null
console.log(document.getElementById("invalid-id")); //output-> null

// ! <|-----------------<< <| querySelector() |> >>-----------------|>
// ^ this will return the first encountered element
const cssQueryImage = document.querySelector(".css-image");
console.log(cssQueryImage); //output-> <img class="css-image" src="./images/css.png" alt="css roadmap" style="width: 100%; max-width: 600px">
console.log(document.querySelector("#css-image")); //output-> <img id="css-image" src="https://placehold.co/200/orange/white" alt="html-css-javascript" style="width: 100%; max-width: 600px" title="Frontend Roadmap">
console.log(document.querySelector("[alt='javascript roadmap']")); //output-> <img id="javascript-image" class="css-image" src="./images/javascript.png" alt="javascript roadmap" style="width: 100%; max-width: 600px">

// * if we give invalid selector to this method, then it will return null
console.log(document.querySelector("#invalid-id")); //output-> null

// & another way of using query selector
const ul = document.querySelector("ul");
console.log(ul.querySelector(".css-image")); //output-> <img class="css-image" id="css-image" src="https://placehold.co/200/red/white" alt="css roadmap" style="width: 100%; max-width: 600px">

// ! <|-----------------<< <| querySelectorAll() |> >>-----------------|>
// ^ this will return NodeList
console.dir(document.querySelectorAll(".css-image")); //output-> NodeList(3)

// * if we give invalid selector to this method, then it will return empty NodeList
console.log(document.querySelectorAll(".invalid-selector")); //output-> NodeList []

//>>  practice question: replace all the image tag's src value which are present in the imagesUrl array
const imagesUrl = [
  "https://placehold.co/200/purple/white",
  "https://placehold.co/200/red/white",
  "https://placehold.co/200/gold/white",
];

const allImages = document.querySelectorAll("img"); //~ since querySelector() return NodeList that's why we can apply forEach() method on it
allImages.forEach((image, index) => (image.src = imagesUrl[index]));

// !<<============<< <| ACCESSING PARENT ELEMENT IN JAVASCRIPT |> >>==============>>
const firstLink = document.querySelector("a");
console.log(firstLink); //output-> a
console.log(firstLink.parentElement); //output-> p
console.log(firstLink.parentElement.parentElement); //output-> body
console.log(firstLink.parentElement.parentElement.parentElement); //output-> html
console.log(firstLink.parentElement.parentElement.parentElement.parentElement); //output-> null

// ! <<==============<< <| ACCESSING CHILDREN IN JAVASCRIPT |> >>=============>>
console.log(firstLink.children);//output-> HTMLCollection [] empty list
console.log(firstLink.parentElement.parentElement.children);//output-> HTMLCollection(9) 
console.log(firstLink.parentElement.parentElement.childNodes);//output-> NodeList(23) 

// ! <<==============<< <| ACCESSING SIBLINGS IN JAVASCRIPT |> >>=============>>
// ! <|---------<< accessing nextElementSibling() >>----------|>
console.log(firstLink.nextElementSibling);//output-> <a target="_blank" href="https://en.wikipedia.org/wiki/HTML">HTML</a>
console.log(firstLink.nextElementSibling.nextElementSibling);//output-> <a target="_blank" href="https://en.wikipedia.org/wiki/CSS">CSS</a>
console.log(firstLink.nextElementSibling.nextElementSibling.nextElementSibling);//output-> <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
console.log(firstLink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);//output-> null
// ^ there is another method which name is similar to the nextElementSibling() i.e. nextSibling, the only difference is that nextSibling() returns the node
console.dir(firstLink.nextSibling);//output-> #text //? (here #text is an object)

// ! <|---------<< accessing previousElementSibling() >>----------|>
console.log(firstLink.previousElementSibling);//output-> <b>Frontend development</b>
// ^ there is another method which name is similar to the previousElementSibling() i.e. previousSibling, the only difference is that previousSibling() returns the node
console.dir(firstLink.previousSibling);//output-> #text //? (here #text is an object)
// ! <<============<< createElement() >>=================>>
// ^ it create element of the required given input string
console.log(document.createElement("img"));
console.log(document.createElement("cdpatra"));
console.log(document.createElement("FORm")); //* you give input in capital or small letter it can detect the correct known element and return the object of that element
const p = document.createElement("p");
p.innerText = "Hello this is 'p' is created by createElement() and appended into body";
document.body.appendChild(p);

for (let i = 1; i <= 10; i++) {
  const myCardDiv = document.createElement("div");
  myCardDiv.classList.add("card");
  const myImg = document.createElement("img");
  myImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  const myPara = document.createElement("p");
  myPara.innerText = i;
  myCardDiv.append(myImg, myPara);
  const container = document.querySelector(".container");
  container.append(myCardDiv);
}

// ~ another shortcut way
let myHTML = "";
for (let i = 11; i <= 20; i++) {
  myHTML += `<div class="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" />
        <p>${i}</p>
      </div> `;
}
const container = document.querySelector(".container");
container.innerHTML += myHTML;

// ! <<==============<< remove() >>==============>>
let myCard = document.querySelector(".container .card:nth-child(5)");
myCard.remove();
// * remember that when you remove by using variable then also set that variable equal to null because the variable stores the deleted element as remove() removes the element from the DOM but not from the variable and consumes extra space
console.log(myCard);
myCard = null;
console.log(myCard);

// ! <<==============<< removeChild() >>=============>>
// ^ in this we cannot directly remove the element, we have to select the parent element then pass the child to remove it
myCard = document.querySelector(".card:nth-child(5)");
// myCard.removeChild(); //& ERROR
myCard.parentElement.removeChild(myCard);
console.log(myCard);
myCard = null;
console.log(myCard);
// * remember that when you remove by using variable then also set that variable equal to null because the variable stores the deleted element as removeChild() removes the element from the DOM but not from the variable and consumes extra space

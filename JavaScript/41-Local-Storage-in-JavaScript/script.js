// ! <<================<< Local Storage in JavaScript >>================>>
// ~ each url gets its own local storage, and there is no way to access localStorage of another url
// ^ by default localStorage stores key value pairs and the value can only be a string;

// localStorage.myName = `cdpatra`;
console.log(window.localStorage.myName); //>> we can access local storage with the help of window object

const myName = document.querySelector(`.my-name`);
const nameInput = document.querySelector(`input[id="name"]`);

// myName.innerText = localStorage.myName;   //? in this way also we can access the localStorage key value pairs but the right syntax is as follows
myName.innerText = localStorage.getItem(`myName`); //& it is the right syntax

nameInput.addEventListener(`input`, (e) => {
   // localStorage.myName = e.target.value;  //? in this way also we can set the localStorage key value pairs but the right syntax is as follows

   localStorage.setItem(`myName`, e.target.value);
   myName.innerHTML = localStorage.myName;
});

// ^ by default localStorage stores key value pairs and the value can only be a string, but we can store objects in local storage also

const userNameInput = document.querySelector(`input[id="user-name"]`);
const userNameElement = document.querySelector(`span[class="user-name"]`);

const userDetails = JSON.parse(localStorage.getItem(`userDetails`)) || {};

userNameElement.innerText = userDetails.name ?? "";
userNameInput.addEventListener(`input`, (e) => {
   userDetails.name = e.target.value;
   userNameElement.innerText = userDetails.name;
   localStorage.setItem(`userDetails`, JSON.stringify(userDetails));
});

const userAgeInput = document.querySelector(`input[id="user-age"]`);
const userAgeElement = document.querySelector(`span[class="user-age"]`);
userAgeElement.innerText = userDetails.age ?? "";
userAgeInput.addEventListener(`input`, (e) => {
   userDetails.age = e.target.value;
   userAgeElement.innerText = userDetails.age;
   localStorage.setItem(`userDetails`, JSON.stringify(userDetails));
});

// ! <|---------<< removing key value pairs from local storage >>-----------|>

// localStorage.removeItem(`myName`); //>> removeItem() method is used to delete single item
// localStorage.clear(); //>> clear() method delete all the localStorage

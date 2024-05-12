// ! <<================<< XMLHttpRequest() in JS >>==================>>

const image = document.querySelector(`img`);
const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
   const xhr = new XMLHttpRequest(); //>> we have to use new keyword to create a new xhr object

   xhr.open(`GET`, `https://dog.ceo/api/breeds/image/random`); //& by writing this open() method we are just setting up the method type and the API from which we have to fetch our data
   xhr.send(); //^ send() method will start sending the http request to the remote server

   xhr.responseType = `json`; //* in this way we can set the response type of the XMLHttpRequest or otherwise by default it would be a string and we can use JSON.parse() method to convert the string into json

   xhr.addEventListener(`load`, () => {
      //>>when we send http request, response might take some time, so "load" event can handle when the data is received
      console.log(xhr.response);
      image.src = xhr.response.message;
   });
   // ~ another method of "load" event
   // xhr.onload = () => {
   //    console.log(xhr.response);
   //    image.src = xhr.response.message;
   // };
});

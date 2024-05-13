// ! <<===============<< Try and Catch Block in JavaScript >>================>>
try {
   console.log(a);
} catch (err) {
   console.log(err); //* here, "err" is an object
   console.dir(err);
}
console.log(`hello`, 3 + 7);

const user = {
   name: "cdpatra",
   age: 21,
};
try {
   console.log(user.address.city);
} catch (error) {
   console.log(error);
   console.log(error.name);
   console.log(error.message);
} finally {
   console.log(`Finally`);
}

// ! <|-----------<< using try and catch in async and await >>-----------|>
async function makeRequest() {
   try {
      const response = await fetch(`https://fakeresponder.com?sleep=4000`);
      const data = await response.json();
      console.log(data);
      return data;
   } catch (err) {
      console.log(err);
   }
}

const promise = makeRequest();

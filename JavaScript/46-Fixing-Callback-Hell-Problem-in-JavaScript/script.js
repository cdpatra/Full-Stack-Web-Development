// function makeHttpRequest(method, url, callback) {
//    const xhr = new XMLHttpRequest();
//    xhr.responseType = `json`;
//    xhr.addEventListener(`load`, () => {
//       callback(xhr.response);
//    });
//    xhr.open(method, url);
//    xhr.send();
// }

// makeHttpRequest(`GET`, `https://dummyjson.com/users`, (usersData) => {
//    makeHttpRequest(`GET`, `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//       makeHttpRequest(`GET`, `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//          makeHttpRequest(`GET`, `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//             console.log(userData);
//          });
//       });
//    });
// });

// ! <<==================<< Fixing Callback Hell in JavaScript by using Promises >>===============>>

function makeHttpRequest(method, url) {
   const xhr = new XMLHttpRequest();
   xhr.responseType = `json`;

   const promise = new Promise((resolve, reject) => {
      xhr.addEventListener(`load`, () => {
         resolve(xhr.response);
      });
      // & when our XMLHttpRequest fails, an error event is fired
      xhr.addEventListener(`error`, () => {
         reject(`Request Failed`);
      });
   });

   xhr.open(method, url);
   xhr.send();

   return promise;
}

makeHttpRequest(`GET`, `https://dummyjson.com/users`)
   .then((usersData) => {
      // return 145;    //>> then() always returns a promise and the resultant value of the returned promise is the return value of the then()
      // & if we return a promise through then() then it returns that promise only, but if we return non promise value then it returns that non promise value by wrapping it in a promise
      return makeHttpRequest(`GET`, `https://dummyjson.com/posts/user/${usersData.users[0].id}`);
   })
   .then((postsData) => makeHttpRequest(`GET`, `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
   .then((commentsData) => makeHttpRequest(`GET`, `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
   .then((userData) => console.log(userData))
   .catch((err) => console.log(err));

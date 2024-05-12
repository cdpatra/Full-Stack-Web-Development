// ! <<================<< Callback Hell in JavaScript >>==============>>
// ^ Callback hell is the main problem due which Promises and fetch API was introduce in JavaScript

function makeHttpRequest(method, url, callback) {
   const xhr = new XMLHttpRequest();
   xhr.responseType = `json`;
   xhr.addEventListener(`load`, () => {
      callback(xhr.response);
   });
   xhr.open(method, url);
   xhr.send(); //* by writing send() we are sending the request, if we don't write send() then our request will not be sent
}

// ! example of callback hell
// ^ in callback hell the code grows horizontally
// >> making request for users
makeHttpRequest(`GET`, `https://dummyjson.com/users`, (usersData) => {
   console.log(usersData);
   // >> making request for post by using user ID
   makeHttpRequest(`GET`, `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
      console.log(postsData);
      //>> making request for comments by using post ID
      makeHttpRequest(`GET`, `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
         console.log(commentsData);
         // >> making request for getting user who has done this comment
         makeHttpRequest(`GET`, `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
            console.log(userData);
         });
      });
   });
});

// ! <<===============<< Fetch API in JavaScript >>================>>

// ! <|-----<< sending a GET request using fetch API (by default it is GET method) >>-------|>
fetch(`https://dummyjson.com/products`) //>> fetch always return a promise
   // ^ in reality, promise is resolved when header are received, and header can be received before the actual data is received
   // * our actual data is present at the body part, and the body part contains the actual data in the form of readableStream and we have to extract the data with the help of json() method of the response object;
   .then((res) => {
      // & when the fetch promise is resolved it returns a response object
      console.log(res);
      // ?? to get the actual data we have to use json() method on the response object
      // console.log(res.json());
      return res.json();
   })
   .then(console.log);

// ! <|--------<< sending a POST request using fetch API >>---------|>
fetch("https://dummyjson.com/products/add", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
      title: "BMW Pencil",
      category: `Stationary`,
      /* other product data */
   }),
})
   .then((res) => res.json())
   .then(console.log)
   .catch((err) => console.log(err));

// * Quick Assignment, make subsequent Http request by using fetch API
// makeHttpRequest(`GET`, `https://dummyjson.com/users`)
//    .then((usersData) => makeHttpRequest(`GET`, `https://dummyjson.com/posts/user/${usersData.users[0].id}`)
//    .then((postsData) => makeHttpRequest(`GET`, `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
//    .then((commentsData) => makeHttpRequest(`GET`, `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
//    .then((userData) => console.log(userData))
//    .catch((err) => console.log(err));

fetch(`https://dummyjson.com/users`)
   .then((res) => res.json())
   .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
   .then((res) => res.json())
   .then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
   .then((res) => res.json())
   .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
   .then((res) => res.json())
   .then((userData) => console.log(userData))
   .catch((err) => console.log(err));

// ! <<=============<< <| RETURNING FUNCTIONS WITH CLOSURES IN JAVASCRIPT |> >>===============>>

function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    return function () {
      //& when a function returns a function then that function is also a higher order function
      console.log(a + b);
    };
  }
  return parent();
}

const add = outer();
console.dir(add); //* when we use console.dir() we can see the function in object form and we can see the scope information and there you can see about the closure of the returned function

// >> so when we do not return function then the variables present in the functional scopes are deleted, but when any function passes other function then all the functional variables along with the closures are returned and do not get deleted
// ~ therefore whenever we try to call that returned function it contains its local variables as well as closures (i.e. variables which are used by the function but belongs to its parent)
add(); //output-> 10

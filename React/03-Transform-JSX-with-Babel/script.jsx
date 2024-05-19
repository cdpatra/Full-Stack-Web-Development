// ! <<===============<< Transform JSX with Babel >>===============>>
const user = `cdpatra`;
const h2 = <h2>Hello {user}</h2>; //& to use javascript value we have to use curly brackets

const root = ReactDOM.createRoot(document.querySelector(`#root`));
// root.render(h2);

const container = (
   <div className="container" id="container" style={{ textAlign: `center` }}>
      <section className="section">
         <p>The library for web and native user interfaces</p>
         <img src="https://placehold.co/500/teal/white" style={{ width: `200px`, borderRadius: 10 }} />
      </section>
      <form style={{ margin: `2rem`, border: `5px solid grey`, borderRadius: `10px`, padding: `1rem` }}>
         <label htmlFor="username">Username </label>
         <input id="username" />
      </form>
   </div>
);
console.log(container);
root.render(container);
// ! <| few javascript values that react does not show directly on web page|>
const values = (
   <h2>
      JavaScript values that react does not show: {undefined},{null},{true},{false}.
   </h2>
);
// root.render(values);

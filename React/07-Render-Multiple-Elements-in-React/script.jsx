import ReactDOM from "react-dom/client";
import "./style.css";

function card(key, title, image, brand, price) {
   return (
      <div className="card" key={key}>
         <img src={image} alt="product" />
         <div className="card-content">
            <h3>{title}</h3>
            <p>{brand}</p>
            <p>
               <b>${price}</b>
            </p>
         </div>
      </div>
   );
}
console.log(card(0)); //* it will be a react element

// const container = [card(1), card(2), card(3), card(4), card(5)];

const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(card,card); //~ render method can only take one argument, but to render multiple elements we can pass an array of elements
// root.render(<div className="container">{container}</div>);

fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) => {
      root.render(
         <div className="container">
            {data.products.map((product) => {
               return card(product.id, product.title, product.thumbnail, product.brand, product.price);
            })}
         </div>
      );
   });

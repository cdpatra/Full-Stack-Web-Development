import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

const root = createRoot(document.getElementById(`root`));

function Card(props) {
   const { key, title, image, brand, price } = props;
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

fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) => {
      root.render(
         <div className="container">
            {data.products.map((product) => {
               // return card(product.id, product.title, product.thumbnail, product.brand, product.price); //& here we have to maintain the order of the arguments, this problem can be solved by using react elements
               // *but let us try to solve this problem by using javascript
               return Card({
                  price: product.price,
                  brand: product.brand,
                  title: product.title,
                  image: product.thumbnail,
                  key: product.id,
               });
            })}
         </div>
      );
   });

// & the below is a valid react element
const validReactElement = {
   $$typeof: Symbol.for(`react.element`),
   type: `h1`,
   ref: null,
   props: {},
};

// ^ we can pass a reference of function is place of type, and the render method passes the arguments of function with the help of "props" key
console.log(`hello world`);
root.render({
   $$typeof: Symbol.for(`react.element`),
   type: Card,
   ref: null,
   props: {
      title: `iPhone 13`,
      image: `https://cdn.dummyjson.com/product-images/1/thumbnail.jpg`,
      brand: `Apple`,
      price: 899,
      key: 1,
   },
});
// & the above is called as react component
// ! DEFINITION OF REACT COMPONENT: React component is a react element whose type is a function, and that function should return a JSX or should return a react element

// * the another method to create react component is by using React.createElement() method
root.render(
   React.createElement(Card, {
      title: `iPhone 13`,
      image: `https://cdn.dummyjson.com/product-images/1/thumbnail.jpg`,
      brand: `Apple`,
      price: 899,
      key: 1,
   })
);

// * another way to create custom react component
root.render(
   <Card title="iPhone 13" image="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" brand="Apple" price="899" key="1" />
   // & react component should be starts with capital letter otherwise it will give error
);

// ! DEFINITION FOR THE INTERVIEW: React component is basically a function that returns JSX

// ! DEFINITION OF COMPONENT: Component is reusable piece of UI

fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) => {
      root.render(
         <div className="container">
            {data.products.map((product) => {
               return (
                  <Card
                     title={product.title}
                     brand={product.brand}
                     price={product.price}
                     image={product.thumbnail}
                     key={product.id}
                  />
               );
            })}
         </div>
      );
   });

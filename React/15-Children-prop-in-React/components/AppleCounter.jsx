import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";
import { Fragment, useState } from "react";

const totalAppleCount = 10;

const AppleCounter = ({ onClick }) => {
   const [leftAppleCount, setLeftAppleCount] = useState(10);
   const [rightAppleCount, setRightAppleCount] = useState(totalAppleCount - leftAppleCount);

   const leftClickHandler = () => {
      if (rightAppleCount > 0) {
         setRightAppleCount(rightAppleCount - 1);
         setLeftAppleCount(leftAppleCount + 1);
      }
   };
   const rightClickHandler = () => {
      if (leftAppleCount > 0) {
         setLeftAppleCount(leftAppleCount - 1);
         setRightAppleCount(rightAppleCount + 1);
      }
   };
   // ! <<===============<< Children prop in React >>==================>>
   // % we can pass children prop by using following two ways
   // *-> by passing the children within the opening and closing tags of the component
   // *-> by passing as a prop in the component

   return (
      <section onClick={onClick}>
         <AppleBasket appleCount={leftAppleCount} basketName={`Basket 1`} />
         <Button imageURL={LeftArrow} buttonName={`Left Arrow`} clickHandler={leftClickHandler}>
            Children of Button 1 {/** 1st way of passing children prop */}
         </Button>
         <Button
            imageURL={RightArrow}
            buttonName={`Right Arrow`}
            clickHandler={rightClickHandler}
            children={"Children of Button 2"} //2nd way of passing children prop
         />
         <AppleBasket appleCount={rightAppleCount} basketName={`Basket 2`} />
      </section>
   );
};

export default AppleCounter;

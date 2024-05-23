import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";
import { useState } from "react";

const totalAppleCount = 10;

const AppleCounter = ({ onClick }) => {
   const [leftAppleCount, setLeftAppleCount] = useState(10);
   const [rightAppleCount, setRightAppleCount] = useState(totalAppleCount - leftAppleCount);
   // ! this is the example of declarative programming

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
   return (
      <>
         <section onClick={onClick}>
            <AppleBasket appleCount={leftAppleCount} basketName={`Basket 1`} />
            <Button imageURL={LeftArrow} buttonName={`Left Arrow`} clickHandler={leftClickHandler} />
            <Button imageURL={RightArrow} buttonName={`Right Arrow`} clickHandler={rightClickHandler} />
            <AppleBasket appleCount={rightAppleCount} basketName={`Basket 2`} />
         </section>
      </>
   );
};

export default AppleCounter;

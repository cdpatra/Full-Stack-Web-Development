import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById(`root`));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = ({ onClick }) => {
   const leftClickHandler = () => {
      if (rightAppleCount > 0) {
         rightAppleCount--;
         leftAppleCount++;
      }
   };
   const rightClickHandler = () => {
      if (leftAppleCount > 0) {
         leftAppleCount--;
         rightAppleCount++;
      }
   };
   return (
      <>
         {/** this is called react fragment */}
         <section onClick={onClick}>
            <AppleBasket appleCount={leftAppleCount} basketName={`Basket 1`} />
            <Button imageURL={LeftArrow} buttonName={`Left Arrow`} clickHandler={leftClickHandler} />
            <Button imageURL={RightArrow} buttonName={`Right Arrow`} clickHandler={rightClickHandler} />
            <AppleBasket appleCount={rightAppleCount} basketName={`Basket 2`} />
         </section>
         <p style={{ textAlign: `center`, marginTop: `32px`, padding: "10px" }}>
            <button
               style={{ width: `max-content` }}
               onClick={() => {
                  root.render(<AppleCounter />);
               }}>
               Re - Render
            </button>
         </p>
      </>
   );
};

export default AppleCounter;

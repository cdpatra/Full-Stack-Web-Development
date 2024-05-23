import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";

const AppleCounter = () => {
   return (
      <section>
         <AppleBasket appleCount={10} basketName={`Basket 1`} />
         <Button imageURL={LeftArrow} buttonName={`Left Arrow`} />
         <Button imageURL={RightArrow} buttonName={`Right Arrow`} />
         <AppleBasket appleCount={0} basketName={`Basket 2`} />
      </section>
   );
};

export default AppleCounter;

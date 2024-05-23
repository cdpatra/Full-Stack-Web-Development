const AppleBasket = ({ appleCount, basketName }) => {
   return (
      <div className="basket">
         <h1>
            <span>{appleCount}</span>
         </h1>
         <p>{basketName}</p>
      </div>
   );
};
export default AppleBasket;

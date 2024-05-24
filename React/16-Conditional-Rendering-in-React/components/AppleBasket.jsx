const AppleBasket = ({ appleCount, basketName }) => {
   return (
      <div className="basket">
         <h1>
            <span>{appleCount}</span>
         </h1>
         <p>
            {/* //! first example of conditional rendering  */}
            {basketName} {appleCount === 10 && `(full)`} {appleCount === 0 && `(empty)`}
         </p>
      </div>
   );
};
export default AppleBasket;

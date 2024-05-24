const Button = ({ imageURL, buttonName, clickHandler, children }) => {
   return (
      <button title={buttonName} onClick={clickHandler}>
         <img src={imageURL} alt={buttonName} />
         {children}
      </button>
   );
};
export default Button;

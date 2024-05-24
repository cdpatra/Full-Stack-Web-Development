const Button = ({ imageURL, buttonName, clickHandler}) => {
   return (
      <button title={buttonName} onClick={clickHandler}>
         <img src={imageURL} alt={buttonName} />
      </button>
   );
};
export default Button;

const Button = ({ imageURL, buttonName }) => {
   return (
      <button title={buttonName}>
         <img src={imageURL} alt={buttonName} />
      </button>
   );
};
export default Button;

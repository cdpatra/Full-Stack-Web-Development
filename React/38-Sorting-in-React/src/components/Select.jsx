// eslint-disable-next-line react/prop-types
export default function Select({ label, id, name, value, onChange, error, defaultOption, options }) {
   return (
      <div className="input-container">
         <label htmlFor={id}>{label}</label>
         <select id={id} name={name} value={value} onChange={onChange}>
            
            {/* //! when it returns undefined then this whole line will not be considered by the react */}
            {defaultOption ? (
               <option value="" hidden>
                  {defaultOption}
               </option>
            ) : undefined}

            {/* eslint-disable-next-line react/prop-types */}
            {options.map((option, i) => (
               <option key={i} value={option}>
                  {option}{" "}
               </option>
            ))}
            {/* <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option> */}
         </select>
         <p className="error">{error} </p>
      </div>
   );
}

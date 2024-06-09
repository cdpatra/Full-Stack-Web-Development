export default function ExpenseForm({ setExpenses }) {
   const handleSubmit = (event) => {
      event.preventDefault();
      setExpenses((prevState) => [...prevState, { ...getFormData(event.target), id: crypto.randomUUID() }]);
      event.target.reset();
   };

   const getFormData = (form) => {
      const formData = new FormData(form); //^ FormData() is a construction function that helps to extract data from "form" but to make it work we have to give name attribute to each input fields of the "form".
      const data = {};
      for (const [key, value] of formData.entries()) {
         data[key] = value;
      }
      return data;
   };

   return (
      <form className="expense-form" onSubmit={handleSubmit}>
         <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" />
         </div>
         <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
               <option value="" hidden>
                  Select Category
               </option>
               <option value="grocery">Grocery</option>
               <option value="clothes">Clothes</option>
               <option value="bills">Bills</option>
               <option value="education">Education</option>
               <option value="medicine">Medicine</option>
            </select>
         </div>
         <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" />
         </div>
         <button className="add-btn">Add</button>
      </form>
   );
}

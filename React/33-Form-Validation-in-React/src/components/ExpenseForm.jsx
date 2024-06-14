import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
   const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
   });

   const [errors,setErrors] = useState({});
   
   function validate(formData) {
      const errorsData = {};

      if (!formData.title) {
         errorsData.title = "Title is required";
      }
      if (!formData.category) {
         errorsData.category = "Category is required";
      }
      if (!formData.amount) {
         errorsData.amount = "Amount is required";
      }
      setErrors(errorsData);
      return errorsData;
   }

   const handleSubmit = (event) => {
      event.preventDefault();

      // ! validate errors
      const validateResult = validate(expense);
      console.log(validateResult);
      if(Object.keys(validateResult).length) return;

      // ! adding validation to the form
      // if (!expense.title) return;
      // if (!expense.category) return;
      // if (!expense.amount) return;

      setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }]);
      setExpense({ title: "", category: "", amount: "" }); //* to reset the expense form
   };

   // ! generalizing the code of onChange event
   const handleChange = (e) => {
      const { value, name } = e.target;
      setExpense((prevState) => ({ ...prevState, [name]: value }));
      setErrors({});
   };

   return (
      <form className="expense-form" onSubmit={handleSubmit}>
         <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={expense.title} onChange={handleChange} />
            <p className="error">{errors.title} </p>
         </div>
         <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={expense.category} onChange={handleChange}>
               <option value="" hidden>
                  Select Category
               </option>
               <option value="Grocery">Grocery</option>
               <option value="Clothes">Clothes</option>
               <option value="Bills">Bills</option>
               <option value="Education">Education</option>
               <option value="Medicine">Medicine</option>
            </select>
            <p className="error">{errors.category} </p>
         </div>
         <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
            <p className="error">{errors.amount} </p>
         </div>
         <button className="add-btn">Add</button>
      </form>
   );
}

import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
   // const [title, setTitle] = useState("");
   // const [category, setCategory] = useState("");
   // const [amount, setAmount] = useState("");
   const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      // setExpenses((prevState) => [...prevState, { ...getFormData(event.target), id: crypto.randomUUID() }]);
      // event.target.reset();
      // const expense = { title, category, amount, id: crypto.randomUUID() };
      // setTitle("");
      // setCategory("");
      // setAmount("");
      setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }]);
      setExpense({ title: "", category: "", amount: "" }); //* to reset the expense form
   };

   // const getFormData = (form) => {
   //    const formData = new FormData(form); //^ FormData() is a construction function that helps to extract data from "form" but to make it work we have to give name attribute to each input fields of the "form".
   //    const data = {};
   //    for (const [key, value] of formData.entries()) {
   //       data[key] = value;
   //    }
   //    return data;
   // };

   return (
      <form className="expense-form" onSubmit={handleSubmit}>
         <div className="input-container">
            <label htmlFor="title">Title</label>
            <input
               id="title"
               name="title"
               value={expense.title}
               onChange={(e) => setExpense((prevState) => ({ ...prevState, title: e.target.value }))}
            />
            {
               //! -> Here if we directly set title to the value of input then react will make it disable to change the value of the input field, but to make it able to update we have to add onChange event listener
               //
               // ! -> This is known as "One way Data Binding" the objective is that when our data gets updated then our UI should get updated, our UI cannot update the data
               //
               // ! -> in React we can only update the state, we cannot update our DOM, and the updation of state will update our DOM, this is called as "ONE WAY DATA BINDING" or "UNIDIRECTIONAL DATA FLOW".
            }
         </div>
         <div className="input-container">
            <label htmlFor="category">Category</label>
            <select
               id="category"
               name="category"
               value={expense.category}
               onChange={(e) => setExpense((prevState) => ({ ...prevState, category: e.target.value }))}>
               <option value="" hidden>
                  Select Category
               </option>
               <option value="Grocery">Grocery</option>
               <option value="Clothes">Clothes</option>
               <option value="Bills">Bills</option>
               <option value="Education">Education</option>
               <option value="Medicine">Medicine</option>
            </select>
         </div>
         <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input
               id="amount"
               name="amount"
               value={expense.amount}
               onChange={(e) => setExpense((prevState) => ({ ...prevState, amount: e.target.value }))}
            />
         </div>
         <button className="add-btn">Add</button>
      </form>
   );
}

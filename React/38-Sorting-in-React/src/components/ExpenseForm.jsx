/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses, expense, setExpense, editingRowId, setEditingRowId }) {
   const [errors, setErrors] = useState({});
   const validationConfig = {
      title: [
         { required: true, message: "Please enter title." },
         { minLength: 2, message: "Title should be at least 2 characters long" },
      ],
      category: [{ required: true, message: "Please select a category." }],
      amount: [
         { required: true, message: "Please enter an amount." },
         { pattern: /^\d*\.?\d*$/, message: "Please enter a valid number" },
      ],
   };
   function validate(formData) {
      const errorsData = {};

      // if (!formData.title) {
      //    errorsData.title = "Title is required";
      // }
      // if (!formData.category) {
      //    errorsData.category = "Category is required";
      // }
      // if (!formData.amount) {
      //    errorsData.amount = "Amount is required";
      // }
      Object.entries(formData).forEach(([key, value]) => {
         validationConfig[key].some((rule) => {
            if (rule.required && !value) {
               errorsData[key] = rule.message;
               return true;
            }
            if (rule.minLength && value.length < rule.minLength) {
               errorsData[key] = rule.message;
               return true;
            }
            if (rule.pattern && !rule.pattern.test(value)) {
               errorsData[key] = rule.message;
               return true;
            }
         });
      });
      setErrors(errorsData);
      return errorsData;
   }

   const handleSubmit = (event) => {
      event.preventDefault();

      // ! validate errors
      const validateResult = validate(expense);
      if (Object.keys(validateResult).length) return;

      // ! adding validation to the form
      // if (!expense.title) return;
      // if (!expense.category) return;
      // if (!expense.amount) return;
      if (editingRowId) {
         setExpenses((prevState) =>
            prevState.map((prevExpense) => {
               if (prevExpense.id === editingRowId) {
                  return { ...expense, id: editingRowId };
               }
               return prevExpense;
            })
         );
      } else {
         setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }]);
      }
      setEditingRowId("");
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
         <Input label="Title" name="title" value={expense.title} onChange={handleChange} error={errors.title} />

         {/* <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={expense.title} onChange={handleChange} />
            <p className="error">{error.title} </p>
         </div> */}

         <Select
            label="Category"
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
            error={errors.category}
            defaultOption="Select Category"
            options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
         />

         {/* <div className="input-container">
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
         </div> */}

         <Input
            label="Amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            error={errors.amount}
         />

         {/* <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
            <p className="error">{errors.amount} </p>
         </div> */}
         <button className="add-btn">{editingRowId ? `Save` : `Add`}</button>
      </form>
   );
}

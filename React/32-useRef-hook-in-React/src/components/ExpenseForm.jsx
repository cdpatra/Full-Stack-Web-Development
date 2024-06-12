import { useEffect, useRef } from "react";
import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
   const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
   });

   // ! useRef() is a hook which returns an object which contains a key "current" and its value is the value which was initially passed in the hook
   const myRef = useRef(0);
   let myNum = 0;

   console.log(myRef);
   useEffect(() => {
      //& any code inside the useEffect() run after the rendering of the component
      console.log(myRef.current);
      myRef.current.style.backgroundColor = "red";
   });
   // ! we use useRef() to create a variable which persists it value between the multiple re-renders of the component
   // ! when we use useState() to create a variable then when we change the state variable it causes component to re-render but when we use useRef() to create a variable and change its value it does not causes component to re-render.

   const titleRef = useRef();
   const categoryRef = useRef();
   const amountRef = useRef(); //* we can reference only one element using useRef() hook not multiple elements.

   const handleSubmit = (event) => {
      event.preventDefault();
      // setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }]);
      // setExpense({ title: "", category: "", amount: "" }); //* to reset the expense form
      const expense = {
         id: crypto.randomUUID(),
         title: titleRef.current.value,
         category: categoryRef.current.value,
         amount: amountRef.current.value,
      };
      setExpenses((prevState) => [...prevState, expense]);
      titleRef.current.value = "";
      categoryRef.current.value = "";
      amountRef.current.value = "";

      // ! since we are using useRef() therefore our component do not get rerender on changing the value of the input field but when we used the method of "one-way data binding" our component get re-rendered every time we change the value of the input field.
      // & in this way we do not used the expense state variable
      // ^ but it is not very good to use useRef() as we are directly accessing the DOM element.
   };

   return (
      <>
         <button
            onClick={() => {
               myRef.current = myRef.current + 1;
               myNum = myNum + 1;
               console.log("myRef=", myRef.current, "myNum=", myNum);
            }}
            // ! another use of useRef()
            ref={myRef}>
            Click
         </button>
         {/* <h1 style={{textAlign:"center"}}>
            myRef = {myRef.current}, myNum = {myNum}
         </h1> */}
         <form className="expense-form" onSubmit={handleSubmit}>
            <div className="input-container">
               <label htmlFor="title">Title</label>
               <input
                  id="title"
                  name="title"
                  // value={expense.title}
                  // onChange={(e) => setExpense((prevState) => ({ ...prevState, title: e.target.value }))}
                  ref={titleRef}
               />
            </div>
            <div className="input-container">
               <label htmlFor="category">Category</label>
               <select
                  id="category"
                  name="category"
                  // value={expense.category}
                  // onChange={(e) => setExpense((prevState) => ({ ...prevState, category: e.target.value }))}
                  ref={categoryRef}>
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
                  // value={expense.amount}
                  // onChange={(e) => setExpense((prevState) => ({ ...prevState, amount: e.target.value }))}
                  ref={amountRef}
               />
            </div>
            <button className="add-btn">Add</button>
         </form>
      </>
   );
}

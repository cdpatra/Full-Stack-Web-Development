import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

/* eslint-disable react/prop-types */
export default function ExpenseTable({ expenses, setExpenses, setExpense, setEditingRowId }) {
   // const [category, setCategory] = useState("");
   // const filteredExpenses = expenses.filter((expense) => expense.category.toLowerCase().includes(category));
   const [filteredExpenses, setQuery] = useFilter(expenses, (ele) => ele.category);
   const [menuPosition, setMenuPosition] = useState({});
   const [rowId, setRowId] = useState();
   // ! better way to implement sorting
   const [sortCallback, setSortCallback] = useState(() => () => {});
   return (
      <>
         <ContextMenu
            menuPosition={menuPosition}
            setMenuPosition={setMenuPosition}
            setExpenses={setExpenses}
            rowId={rowId}
            setExpense={setExpense}
            expenses={expenses}
            setEditingRowId={setEditingRowId}
         />
         <table
            className="expense-table"
            onClick={() => {
               if (menuPosition.left) {
                  //! if condition is added to reduce the unnecessary re-rendering of the component when we click on the table
                  setMenuPosition({});
               }
            }}>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>
                     {/* <select onChange={(e) => setCategory(e.target.value.toLowerCase())}> */}
                     <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                        <option value="">All</option>
                        <option value="grocery">Grocery</option>
                        <option value="clothes">Clothes</option>
                        <option value="bills">Bills</option>
                        <option value="education">Education</option>
                        <option value="medicine">Medicine</option>
                     </select>
                  </th>
                  <th className="amount-column">
                     <div>
                        <span>Amount</span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="10"
                           viewBox="0 0 384 512"
                           className="arrow up-arrow"
                           onClick={() => {
                              // setExpenses((prevState) => [...prevState.sort((a, b) => a.amount - b.amount)]);
                              //! here we are returning new array as sort method changes the original array
                              setSortCallback(() => (a, b) => a.amount - b.amount);
                           }}>
                           <title>Ascending</title>
                           <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                        </svg>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="10"
                           viewBox="0 0 384 512"
                           className="arrow down-arrow"
                           onClick={() => {
                              // setExpenses((prevState) => [...prevState.sort((a, b) => b.amount - a.amount)]);
                              setSortCallback(() => (a, b) => b.amount - a.amount);
                           }}>
                           <title>Descending</title>
                           <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                     </div>
                  </th>
               </tr>
            </thead>
            <tbody>
               {/* //! better way to implement sorting function */}
               {filteredExpenses.sort(sortCallback).map(({ id, title, category, amount }) => {
                  return (
                     // ! applying custom context menu on each table row
                     <tr
                        key={id}
                        onContextMenu={(e) => {
                           e.preventDefault();
                           setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 });
                           setRowId(id);
                        }}>
                        <td>{title} </td>
                        <td>{category} </td>
                        <td>₹{amount}</td>
                     </tr>
                  );
               })}
               <tr>
                  <th>Total</th>
                  <th className="clear-sort" onClick={() => setSortCallback(() => () => {})}>
                     {" "}
                     Clear Sort
                  </th>
                  <th>
                     ₹
                     {filteredExpenses.reduce((accumulator, expense) => accumulator + parseInt(expense.amount), 0)}
                  </th>
               </tr>
            </tbody>
         </table>
      </>
   );
}

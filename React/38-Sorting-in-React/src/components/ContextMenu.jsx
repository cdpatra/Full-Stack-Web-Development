/* eslint-disable react/prop-types */
export default function ContextMenu({
   menuPosition,
   setMenuPosition,
   setExpenses,
   rowId,
   setExpense,
   expenses,
   setEditingRowId,
}) {
   if (!menuPosition.left) return;
   return (
      <div className="context-menu" style={menuPosition}>
         <div
            onClick={() => {
               setMenuPosition({});
               const { title, category, amount } = expenses.find((expense) => expense.id === rowId);
               setExpense({ title, category, amount });
               setEditingRowId(rowId);
            }}
            onContextMenu={(e) => e.preventDefault()}>
            Edit
         </div>
         <div
            onClick={() => {
               setMenuPosition({});
               setExpenses((prevState) => prevState.filter((expense) => expense.id !== rowId));
            }}
            onContextMenu={(e) => e.preventDefault()}>
            Delete
         </div>
      </div>
   );
}

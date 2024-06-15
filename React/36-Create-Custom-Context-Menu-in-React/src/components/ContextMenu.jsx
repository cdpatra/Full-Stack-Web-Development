/* eslint-disable react/prop-types */
export default function ContextMenu({ menuPosition, setMenuPosition, setExpenses, rowId }) {
   if (!menuPosition.left) return;
   return (
      <div className="context-menu" style={menuPosition}>
         <div onClick={() => setMenuPosition({})} onContextMenu={(e) => e.preventDefault()}>
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

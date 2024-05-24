import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

export default function App() {
   return (
      <div>
         {/* //! second example of conditional rendering */}
         {true && <Counter />}
         <AppleCounter />
         {/* //>> conditional rendering is mainly used to implement login or logout logic */}
      </div>
   );
}

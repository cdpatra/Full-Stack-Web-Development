import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

export default function App() {
   // ! <| we can pass component as a children |>
   return (
      <div>
         <Counter>
            <AppleCounter />
         </Counter>
      </div>
   );
}

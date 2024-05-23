import AppleCounter from "./components/AppleCounter";

export default function App() {
   return (
      <div>
         <p onClick={(e) => console.log(e)}>Testing event handlers in React</p>
         {/** //* here the event that is console.logged is not normal JavaScript event, it is "SyntheticBaseEvent" which is handled by the React itself */}

         <AppleCounter onClick={() => console.log(`NO event handler on React components`)} />
         {/* //* there is not event handlers in react components */}
         {/* //& There is not event handlers on react components, but it can be passed as props, this props can be used within the react component */}
      </div>
   );
}

import style from  "./CardContainerShimmer.css";
export default function CardContainerShimmer() {
   // new Array(10).fill(undefined);
   return (
      <main className="card-container">
         {Array.from({ length: 20 }).map((ele, i) => {
            return <a className="card" id="shimmer-card" key={i}></a>;
         })}
      </main>
   );
}

import { useEffect, useState } from "react";

export function useWindowSize() {
   const [windowSize, setWindowSize] = useState({ width: innerWidth, height: innerHeight });
   useEffect(() => {
      addEventListener(`resize`, () => {
         setWindowSize({
            width: innerWidth,
            height: innerHeight,
         });
      });
   }, []);
   console.log(windowSize);
   return windowSize;
}

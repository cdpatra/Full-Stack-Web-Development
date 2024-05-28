import { useRouteError } from "react-router-dom";

export default function Error() {
   const { status } = useRouteError(); //! it is a hook that shows the error in detail
   return <h1>Something went wrong {status} </h1>;
}

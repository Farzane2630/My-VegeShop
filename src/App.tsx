import { useEffect } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";

export default function App() {
  useEffect(
    () => {
      // scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []
  );

  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}

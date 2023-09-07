
import "./Styles/reset.scss";
import "./Styles/Style.scss";
import "bootstrap/dist/css/bootstrap.css"

import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { AppRouter } from "./routes/AppRouter.routes";

const App = () => <AppRouter />;
ReactDOM.render(<App />, document.getElementById("app"));

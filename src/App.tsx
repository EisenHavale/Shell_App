import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store/store";

import "./index.css";
import { AppRouter } from "./routes/AppRouter.routes";

const App = () => <AppRouter />;
ReactDOM.render(
    <Provider store={store}> //* Here I'll allow every component of the app get access to the store
        <App />
    </Provider>
, 
document.getElementById("app"));

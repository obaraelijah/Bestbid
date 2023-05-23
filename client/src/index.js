import React from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import store from "./store";

const options = {
   timeout: 5000,
   position: positions.BOTTOM_CENTER,
   transition: transitions.SCALE,
};

ReactDOM.render(
   <>
      <Provider store={store}>
         <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </AlertProvider>
      </Provider>
   </>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

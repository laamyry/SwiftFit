import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Apparel from "./pages/Apparel";
import Contact from "./pages/Contact";
import Equipment from "./pages/Equipment";
import Nutrition from "./pages/Nutrition";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/apparel",
    element: <Apparel />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/equipment",
    element: <Equipment />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

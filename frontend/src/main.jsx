import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./routes/Products"
import ErrorPage from './routes/error-page.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "../context/userContext.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
    ],
  },
  {
    path: "/products",
    element: <Products />,

  }, 
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ResponsiveAppBar/>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

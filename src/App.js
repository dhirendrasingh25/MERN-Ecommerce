import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createRoot } from "react-dom/client";
import { Cart } from "./features/cart/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from "./pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

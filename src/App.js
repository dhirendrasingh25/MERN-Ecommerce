import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import ProductDetails from "../features/product-list/components/ProductDetails";
import Footer from "../features/common/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar>
        <ProductDetails />
      </Navbar>
      <Footer />
    </>
  );
};

export default ProductDetailPage;

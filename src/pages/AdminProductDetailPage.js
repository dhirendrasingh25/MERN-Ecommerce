import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import AdminProductDetails from "../features/admin/components/AdminProductDetails";

const AdminProductDetailPage = () => {
  return (
    <Navbar>
      <AdminProductDetails />
    </Navbar>
  );
};

export default AdminProductDetailPage;

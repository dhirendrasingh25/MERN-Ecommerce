import React from "react";
import NavBar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/components/AdminProductList";

const AdminHome = () => {
  return (
    <NavBar>
      <AdminProductList />
    </NavBar>
  );
};

export default AdminHome;

import React from "react";
import NavBar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/common/Footer";

const AdminHome = () => {
  return (
    <>
      <NavBar>
        <AdminProductList />
      </NavBar>
      <Footer />
    </>
  );
};

export default AdminHome;

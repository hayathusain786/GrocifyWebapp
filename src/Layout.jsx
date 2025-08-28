import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="md:px-4 px-1 mt-28">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

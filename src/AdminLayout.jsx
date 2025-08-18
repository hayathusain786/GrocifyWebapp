import React from "react";
import SideBar from "./components/Admin/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Admin/Footer";
import Navbar from "./components/Admin/Navbar";

const AdminLayout = () => {
  return (
    <>
      <header className=" ml-[18rem]">
        <Navbar />
      </header>

      {/* <aside>
        <SideBar />
      </aside> */}
      <main className="p-10 min-h-screen ml-[18rem]">
        <Outlet />
      </main>
      <footer className=" ml-[18rem]">
        <Footer />
      </footer>
    </>
  );
};

export default AdminLayout;

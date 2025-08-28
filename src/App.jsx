import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import AllProducts from "./pages/AllProducts/AllProducts";
import AdminLayout from "./AdminLayout";
import Category from "./components/Admin/master/Category";

import { Slide, ToastContainer } from "react-toastify";
import Unit from "./components/Admin/master/Unit";
import AddProduct from "./components/Admin/Product/AddProduct";
import ProductList from "./components/Admin/Product/ProductList";
import Login from "./components/Admin/Login";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import RequireRole from "./components/RequireRole";
import UserLogin from "./components/UserLogin";
import Cart from "./pages/Cart";
import Discount from "./components/Admin/Product/Discount";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import DemoAdmin from "./pages/DemoAdmin";
import About from "./pages/About";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* User Routes  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="cart" element={<Cart/>}/>
          <Route path="check-out" element={<Checkout/>}/>
          <Route path="my-orders" element={<MyOrders/>}/>
         
        </Route>

        {/* Login Ruutes */}
        <Route path="/login" element={<UserLogin/>}/>

        <Route path="/admin/login" element={<Login />} />

         <Route path="demo" element={<DemoAdmin/>}/>

        {/* Admin Routes  */}

        <Route
          path="/admin"
          element={<RoleProtectedRoute allowedRoles={["Admin", "Vendor"]} />}
        >
          <Route path="/admin" element={<AdminLayout />}>
            <Route element={<RequireRole role="Admin" />}>
              <Route path="category" element={<Category />} />
              <Route path="unit" element={<Unit />} />
            </Route>

            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="discount" element={<Discount />} />
          </Route>
        </Route>

      </>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;

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

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* User Routes  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
        </Route>

        {/* Admin Routes  */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="unit" element={<Unit />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductList />} />

        </Route>
      </>
      // <Route path='/' element={<Layout/>}>
      //   <Route index element={<Home/>}/>
      //   <Route path='products' element={<AllProducts/>}/>

      //   {/* Admin Routes */}

      //   <Route path='Admin' element={<AdminLayout/>}>

      //   </Route>
      // </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

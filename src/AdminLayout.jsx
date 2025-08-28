import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { logout } from "./services/authService";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineProduct } from "react-icons/ai";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Footer from "./components/Admin/Footer";
import { LiaPercentageSolid } from "react-icons/lia";

const AdminLayout = () => {
   const navigate = useNavigate();
  const [activeToggle, setActiveToggle] = useState(null);
  const [filterSideBarLink, setFilterSidebarLink] = useState([]);

  const toggleDropdown = (name) => {
    setActiveToggle((prev) => (prev === name ? null : name));
  };

  const sideBarLinks = [
    {
      allowedUser: ["Admin"],
      title: "Master",
      icon: <CgWebsite/>,
      links: [
        { name: "Category", path: "/admin/category" },
        { name: "Unit", path: "/admin/unit" },
      ],
    },
    {
      allowedUser: ["Admin", "Vendor"],
      title: "Product",
      icon: <AiOutlineProduct/>,
      links: [
        { name: "Add Product", path: "/admin/add-product" },
        { name: "Product List", path: "/admin/product-list" },
      ],
    },
    {
      allowedUser: ["Admin", "Vendor"],
      title: "Discount",
      icon: <LiaPercentageSolid />,
      links: [
        { name: "Discount", path: "/admin/discount" },
      ],
    },
  ];

  useEffect(() => {
    const role = Cookies.get("role");
    const links = sideBarLinks.filter((link) =>
      link.allowedUser.includes(role)
    );
    setFilterSidebarLink(links);
  }, []);

  const handleLogout = async () => {
    const result = await logout();
    if (result.status == 200) {
      Cookies.remove("role");
      Cookies.remove("userId");
      navigate("/admin/login");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/admin" className="text-3xl font-semibold">
          Gr<span className="text-primary">O</span>cefy
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! {Cookies.get("userName")}</p>
          <button
            className="border rounded-full text-sm px-4 py-1 text-white bg-gradient-to-b from-accent to-accent-light hover:bg-gradient-to-b hover:from-accent-light hover:to-accent" 
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="md:w-64 h-screen w-16 border-r text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          <ul>
            {filterSideBarLink.map((link,i) => (
              <li key={i}>
                <p
                  className="flex items-center py-3 px-4 gap-3 cursor-pointer hover:bg-gray-100/90 border-white text-gray-700"
                  onClick={() => toggleDropdown(link.title)}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="md:flex w-full hidden text-center justify-between items-center">
                    {link.title}
                    <IoIosArrowForward />
                  </span>
                </p>
                <ul
                  className={`${
                    activeToggle == link.title ? "block" : "hidden"
                  } pl-10 text-sm text-gray-500 flex flex-col gap-2`}
                >
                  {link.links.map((subLink,j) => (
                    <li key={j}>
                      <Link to={subLink.path} className="flex items-center gap-2 hover:text-secondary">
                      <span><IoChevronForwardCircleOutline/></span>
                        <span>{subLink.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen overflow-y-scroll w-full p-6 mb-3 custom-scrollbar-2">
          <Outlet />
        </div>
      </div>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default AdminLayout;

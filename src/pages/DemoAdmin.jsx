import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Cookies from "js-cookie";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const DemoAdmin = () => {
  const navigate = useNavigate();
  const [activeToggle, setActiveToggle] = useState(null);
  const [filterSideBarLink, setFilterSidebarLink] = useState([]);

  const toggleDropdown = (name) => {
    setActiveToggle((prev) => (prev === name ? null : name));
  };

  const dashboardicon = (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
      />
    </svg>
  );

  const overviewicon = (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"
      />
    </svg>
  );

  const chaticon = (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    </svg>
  );

  const sideBarLinks = [
    {
      allowedUser: ["Admin"],
      title: "Master",
      icon: chaticon,
      links: [
        { name: "Category", path: "/admin/category" },
        { name: "Unit", path: "/admin/unit" },
      ],
    },
    {
      allowedUser: ["Admin", "Vendor"],
      title: "Product",
      icon: chaticon,
      links: [
        { name: "Add Product", path: "/admin/add-product" },
        { name: "Product List", path: "/admin/product-list" },
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
          <p>Hi! Admin</p>
          <button
            className="border rounded-full text-sm px-4 py-1"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="md:w-64 h-screen w-16 border-r text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          <ul>
            {filterSideBarLink.map((lnk) => (
              <li>
                <p
                  className="flex items-center py-3 px-4 gap-3 cursor-pointer hover:bg-gray-100/90 border-white text-gray-700"
                  onClick={() => toggleDropdown(lnk.title)}
                >
                  {lnk.icon}
                  <span className="md:flex w-full hidden text-center justify-between items-center">
                    {lnk.title}
                    <IoIosArrowForward />
                  </span>
                </p>
                <ul
                  className={`${
                    activeToggle == lnk.title ? "block" : "hidden"
                  } pl-10 text-sm text-gray-500 flex flex-col gap-2`}
                >
                  {lnk.links.map((l) => (
                    <li>
                      <Link to={l.path}>
                        <span>{l.name}</span>
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
    </>
  );
};

export default DemoAdmin;

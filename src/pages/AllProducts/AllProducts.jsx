import React, { useEffect, useState } from "react";
import { ProductList, Categories } from "../../components/Products/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IoArrowDown } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation, useParams } from "react-router-dom";
import { GetProductList } from "../../services/productService";

const AllProducts = () => {
  const location = useLocation();
  const stateCategory = location.state?.category || [];

  const [selectedCategory, setSelectedCategory] = useState(stateCategory);

  const [showCategory, setShowCategory] = useState(false);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterCategories = Categories.filter((cate) => cate != "All");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetProductList();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    if (selectedCategory.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          selectedCategory.includes(product.categoryName)
        )
      );
    }
  }, [selectedCategory, products]);

  const sortFilter = (val) => {
    let sorted = [...filteredProducts]; // copy first!

    // Price Low to High
    if (val === "LtH") {
      sorted.sort((a, b) => a.price - b.price);
    }
    // Price High to Low 
    else if (val === "HtL") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted); // update state
  };

  return (
    <section>
      <div className="w-full min-h-screen">
        {/* Banner  */}
        <div className="w-full md:h-52 h-40 bg-[url(../src/assets/images/all-banner.jpg)] bg-center bg-cover">
          <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
            PRODUCTS
          </h1>
        </div>
        {/* content  */}
        <div className="mt-10 flex gap-6 w-full">
          {/* filter section  */}
          <div className="xl:max-w-3xs xl:min-w-3xs md:w-fit mt-3 border-r-2 border-card px-6">
            <h2 className="text-2xl border-b-2 border-card text-text-grey">
              Filter
            </h2>
            <div className="mt-3">
              <ul>
                <li>
                  <label
                    className=" border-b-1 border-zinc-300 w-full flex px-1 py-2 items-center justify-between cursor-pointer"
                    onClick={() => setShowCategory(!showCategory)}
                  >
                    Category
                    <span>
                      {showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </label>
                  {/* Category filter  */}
                  <ul
                    className={` py-6 px-3 ${
                      showCategory ? "block" : "hidden"
                    } transition-all duration-300 ease-in-out`}
                  >
                    {filterCategories.map((cat,index) => (
                      <li className="flex gap-2 text-text-grey" key={index}>
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={selectedCategory.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                        />
                        {cat}
                      </li>
                    ))}
                    <li className="flex justify-end py-3">
                      <button
                        className="bg-primary text-white text-[12px] p-1 rounded"
                        onClick={() => setSelectedCategory([])}
                      >
                        Clear Filter
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* sort filter section    */}

            <div className="flex justify-end my-3 border-b-1 border-card py-3">
              <div className="">
                <select
                  name=""
                  id=""
                  className="border-1 rounded border-gray-500 p-1"
                  onChange={(e) => sortFilter(e.target.value)}
                >
                  <option value="">Sort by</option>
                  <option value="LtH">Price Low to High</option>
                  <option value="HtL">Price High to Low</option>
                </select>
              </div>
            </div>

            {/* Products List  */}
            <div className="w-full grid xl:grid-cols-4 xl:gap-6 md:grid-cols-3 md:gap-4 grid-cols-1 gap-3 items-center">
              {filteredProducts.map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;

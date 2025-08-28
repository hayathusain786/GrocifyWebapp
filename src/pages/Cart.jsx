import { useEffect, useState } from "react";
import {
  decreaseQuantity,
  getCart,
  increaseQuantity,
  removeItem,
} from "../services/cartService";
import { RxCrossCircled } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (Cookies.get("role")) {
      const fetchCart = async () => {
        const data = await getCart();
        setCartItems(data);
      };
      fetchCart();
    }
  }, []);

  const handleIncrease = async (productId) => {
    try {
      const resp = await increaseQuantity(productId);
      if (resp.status == 200) {
        toast.success("Quantity Increase.");

        setCartItems((prev) =>
          prev.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  total: item.total + item.price,
                  quantity: item.quantity + 1,
                }
              : item
          )
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Something went wrong");
      }
    }
  };

  const handleDecrease = async (productId) => {
    try {
      const resp = await decreaseQuantity(productId);
      if (resp.status == 200) {
        toast.success("Quantity Decrease.");

        setCartItems((prev) =>
          prev
            .map((item) =>
              item.productId === productId
                ? {
                    ...item,
                    total: item.total - item.price,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0)
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Something went wrong");
      }
    }
  };

  const handleRemove = async (productId) => {
    try {
      const resp = await removeItem(productId);
      if (resp.status == 200) {
        toast.warn("Item Remove");

        setCartItems((prev) =>
          prev.filter((item) => item.productId != productId)
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Something went wrong");
      }
    }
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const tax = Math.round((subTotal * 18) / 100);

  return (
    <section>
      <div>
        {/* Banner  */}
        <div className="mb-6 w-full md:h-52 h-40 bg-[url(../src/assets/images/cartBanner.png)] bg-center bg-cover">
          <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
            CART
          </h1>
        </div>

        {/* Content Section  */}
        {Cookies.get("role") && (
          <div className="w-full min-h-screen px-10 flex md:flex-row flex-col gap-6">
            {/* items section  */}
            <div className="w-full  overflow-x-scroll py-3">
              {/* <div className="pb-5 text-2xl text-center font-semibold">
                <h1>Your Cart ( {cartItems.length} items)</h1>
              </div> */}
              <div className="w-full">
                <table className="table-responsive">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr className="border-b-1 border-gray-300" key={item.id}>
                        <td className="flex gap-3 items-center">
                          <div>
                            <img
                              src={item.productImage}
                              alt="Product Image"
                              width={50}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              {item.productName}
                            </h3>
                            <span className="text-gray-400">{item.unit}</span>
                          </div>
                        </td>
                        <td>
                          <span className="font-semibold">₹ {item.price}</span>
                        </td>
                        <td>
                          <div className="flex">
                            <span
                              className="border-1 border-r-0 py-1 px-2 font-semibold cursor-pointer"
                              onClick={() => handleDecrease(item.productId)}
                            >
                              <FaMinus />
                            </span>
                            <span className="border-1 py-1 px-2 font-semibold">
                              {item.quantity}
                            </span>
                            <span
                              className="border-1 border-l-0 py-1 px-2 font-semibold cursor-pointer"
                              onClick={() => handleIncrease(item.productId)}
                            >
                              <FaPlus />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-3 items-center font-semibold">
                            <span className="w-16">₹ {item.total}</span>
                            <span
                              className="font-bold text-red-500 text-2xl cursor-pointer"
                              title="Remove from cart"
                              onClick={() => handleRemove(item.productId)}
                            >
                              <RxCrossCircled />
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* subtotal and checkout section  */}

            <div className="mt-13">
              <div className="w-2xs  bg-gray-50 p-3 rounded">
                <h4 className="font-semibold text-2xl pb-2">Summary</h4>
                <ul className="pl-1">
                  <li className="flex justify-between border-b-1 py-2 border-gray-400">
                    <span>Subtotal :</span>
                    <span>₹ {subTotal}</span>
                  </li>
                  {/* <li className="flex justify-between border-b-1 py-2 border-gray-400">
                    <span>Sales tax (GST) :</span>
                    <span>₹ {tax}</span>
                  </li> */}
                  {/* <li className="flex justify-between border-b-1 py-2 border-gray-400">
                    <span>Coupon code :</span>
                    <span>Add</span>
                  </li> */}
                  <li className="flex justify-between border-b-1 py-2 border-gray-400">
                    <span className="text-xl">Grand total :</span>
                    <span className="text-xl">₹ {subTotal}</span>
                  </li>
                </ul>
                <div className="mt-10 flex justify-end">
                  <Link to='/check-out' className="btn-primary">Check out</Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* if not login  */}
        {!Cookies.get("role") && (
          <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div>
              <img
                src="../src/assets/images/cartBg.png"
                alt="Logo"
                className="w-2xs"
              />
            </div>
            <div className="my-3">
              <h2 className="text-3xl">Missing Cart items?</h2>
              <h4 className="text-center text-gray-500">
                Login to see the cart items.
              </h4>
            </div>
            <div className="mt-3">
              <Link to="/login" className="btn-accent">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

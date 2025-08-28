import React, { useEffect, useState } from "react";
import { getCart } from "../services/cartService";
import Cookies from "js-cookie";
import {
  AddShippingAddress,
  GetShippingAddress,
} from "../services/userService";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { PlaceOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const data = {
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
  };

  const orderData = {
    paymentMethod: "",
    totalAmount: 0,
    shippingAddressId: "",
  };

  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState([]);
  const [addAddress, setAddAddress] = useState(false);
  const [inputData, setInputData] = useState(data);
  const [inputOrderData, setInputOrderData] = useState(orderData);
  const [totalAmnt, setTotalAmnt] = useState(0);

  const navigate=useNavigate();

  useEffect(() => {
    if (Cookies.get("role")) {
      const fetchCart = async () => {
        const data = await getCart();
        setCartItems(data);
      };
      const fetchShippingAddress = async () => {
        const data = await GetShippingAddress();
        setShippingAddress(data);
      };

      fetchCart();
      fetchShippingAddress();
    }
  }, [addAddress]);

  useEffect(() => {
    const subTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

    setTotalAmnt(subTotal);
  }, [cartItems]);

  const handleAddressSubmit = async () => {
    try {
      const result = await AddShippingAddress(inputData);
      if (result.status == 201) {
        toast.success("Address Add Successfuly.");
        setInputData(data);
        setAddAddress(!addAddress);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handlePlaceOrder = async () => {
    const newOrderData = { ...inputOrderData, totalAmount: totalAmnt };
    setInputOrderData(newOrderData);

    try {
      const result = await PlaceOrder(newOrderData);
      if (result.status == 200) {
        toast.success("Order Placed.Thanks for purchasing.");
        navigate('/my-orders');
        window.screenTop(0);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }

  };

  return (
    <section>
      <div>
        {/* Banner  */}
        <div className="mb-6 w-full md:h-52 h-40 bg-[url(../src/assets/images/checkoutBg.png)] bg-center bg-cover">
          <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
            CHECKOUT
          </h1>
        </div>
        <div className="w-full min-h-screen px-10 flex md:flex-row flex-col gap-6">
          <div className="w-full">
            <div className="flex justify-between px-6">
              <h1 className="font-semibold text-2xl">Delivery</h1>
              <button
                className="flex items-center gap-3 text-primary hover:text-black hover:scale-[101%]"
                onClick={() => setAddAddress(!addAddress)}
              >
                <span>
                  <FaPlus />
                </span>
                Add New Address
              </button>
            </div>

            {/* Address List Section  */}
            {!addAddress && (
              <div className="mt-6 flex flex-col gap-6">
                {shippingAddress.map((add, index) => (
                  <div
                    className="w-s flex items-center gap-6 border-1 border-gray-300 rounded p-3"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="shippingAddress"
                      value={add.id}
                      onChange={(e) =>
                        setInputOrderData({
                          ...orderData,
                          shippingAddressId: e.target.value,
                        })
                      }
                      required
                    />
                    <p className="flex flex-col text-gray-500" id="shpAdd">
                      <span className="text-black font-semibold">
                        {add.fullName}
                      </span>
                      {add.address}
                      <span>
                        {add.phoneNumber}, {add.alternatePhoneNumber}
                      </span>
                      <span>
                        {add.city}, {add.state}, {add.zipCode}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Add Address Form Section  */}
            {addAddress && (
              <div className="mt-6">
                <div className="input-group">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="Name"
                    className="form-control"
                    autoComplete="off"
                    value={inputData.fullName}
                    onChange={(e) =>
                      setInputData({ ...inputData, fullName: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Name">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phoneNumber"
                    id=""
                    value={inputData.phoneNumber}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Name">Alternate Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="alternatePhoneNumber"
                    id=""
                    value={inputData.alternatePhoneNumber}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        alternatePhoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Name">Address</label>
                  <textarea
                    name="address"
                    id=""
                    className="form-control"
                    value={inputData.address}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="Name">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id=""
                    value={inputData.city}
                    onChange={(e) =>
                      setInputData({ ...inputData, city: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Name">State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    id=""
                    value={inputData.state}
                    onChange={(e) =>
                      setInputData({ ...inputData, state: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Name">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    id=""
                    value={inputData.zipCode}
                    onChange={(e) =>
                      setInputData({ ...inputData, zipCode: e.target.value })
                    }
                  />
                </div>
                <div className="mt-5">
                  <button className="btn-primary" onClick={handleAddressSubmit}>
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* subtotal and checkout section  */}

          <div className="mt-13">
            <div className="w-xs  bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-2xl pb-2">Summary</h4>
              <ul className="pl-1">
                <li className="flex justify-between border-b-1 py-2 border-gray-400">
                  <span>Subtotal :</span>
                  <span>₹ {totalAmnt}</span>
                </li>
                <li className="flex justify-between border-b-1 py-2 border-gray-400">
                  <span className="text-xl">Order total :</span>
                  <span className="text-xl" id="totalAmnt">
                    ₹ {totalAmnt}
                  </span>
                </li>
              </ul>
            </div>

            {/* Coupon section  */}

            <div className="w-xs mt-3 bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-lg pb-2">
                Have Discount Coupon ?
              </h4>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Enter Coupon Code."
                />
                <button className="btn-accent">Apply</button>
              </div>
            </div>

            {/* Payment method section  */}

            <div className="w-xs mt-3 bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-lg pb-2">
                Choose Payment Method ?
              </h4>
              <ul className="pl-1">
                <li className="flex gap-1 border-b-1 py-2 border-gray-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id=""
                    value="Cash On Delivery"
                    onChange={(e) =>
                      setInputOrderData({
                        ...inputOrderData,
                        paymentMethod: e.target.value,
                      })
                    }
                    required
                  />
                  <span>Cash On Deleviry.</span>
                </li>
                <li className="flex gap-1 border-b-1 py-2 border-gray-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id=""
                    value="Pay Now"
                    onChange={(e) =>
                      setInputOrderData({
                        ...inputOrderData,
                        paymentMethod: e.target.value,
                      })
                    }
                  />
                  <span>Pay Now</span>
                </li>
                <li className="flex gap-1 py-2 border-gray-400">
                  <button
                    className="btn-primary w-full"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </li>
                <li className="py-2 border-gray-400">
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <span>I agree Term & Conditions.</span>
                  </div>

                  <p className="text-gray-400 pt-3 ">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our policy.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

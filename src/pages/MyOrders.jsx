import React, { useEffect, useState } from "react";
import { GetMyOrders } from "../services/orderService";
import { RxCross2 } from "react-icons/rx";

const MyOrders = () => {
  const [Orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await GetMyOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const showItems = (id) => {
    const filterOrder = Orders.filter((order) => order.orderId == id);
    const items = filterOrder[0].itemList;
    setOrderItems(items);
    setShowModal(!showModal);
  };

  return (
    <section>
      <div className="min-h-screen w-full">
        {/* Banner  */}
        <div className="mb-6 w-full md:h-52 h-40 bg-[url(../src/assets/images/checkoutBg.png)] bg-center bg-cover">
          <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
            MY ORDERS
          </h1>
        </div>
        <div className="mt-6">
          <div className="px-10 w-full overflow-x-scroll">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {Orders.map((order, index) => (
                  <tr key={index}>
                    <td
                      className="font-semibold cursor-pointer decoration-1 group"
                      onClick={() => showItems(order.orderId)}
                    >
                      {" "}
                      <span className="group-hover:text-accent group-hover:decoration-1">
                        {order.orderId}
                      </span>{" "}
                    </td>
                    <td className="w-1/2 whitespace-pre-line">
                      {order.fullAddress}
                    </td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>{order.status}</td>
                    <td>{order.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* item modal section  */}
          {showModal && (
            <div className="w-2xl h-3/5 rounded fixed z-50 bg-white shadow-2xl left-1/4 top-1/4 transition-all duration-500 overflow-x-scroll">
              <div className="flex justify-between items-center border-b-2 border-gray-300 py-3 px-3">
                <p className="font-semibold px-3 text-center">Items</p>
                <span
                  className="cursor-pointer font-extrabold text-2xl"
                  onClick={() => setShowModal(!showModal)}
                >
                  <RxCross2 />
                </span>
              </div>
              <div className="overflow-y-scroll scroll-smooth custom-scrollbar-2 h-10/12">
                <table className="table-responsive">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item, i) => (
                      <tr key={i}>
                        <td className="flex flex-col">
                          <span className="font-semibold">
                            {item.productName}
                          </span>{" "}
                          <span>{item.unitName}</span>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* {Orders.map((order, index) => (
            <div className="border-1 border-gray-400 p-6 my-3">
              <h1>
                <strong>Order Id :</strong> {order.orderId}
              </h1>
              <h2>
                <strong>Total Amount :</strong> {order.totalAmount}
              </h2>
              <h2>
                <strong>Status :</strong> {order.status}
              </h2>
              <h2>
                <strong>Date :</strong> { new Date(order.orderDate).toLocaleDateString()}
              </h2>
              <h4 className="font-semibold">Items :</h4>
              <ul className="px-12">
                {order.itemList.map((item, i) => (
                  <li>{item.productName} x {item.quantity} = {item.price*item.quantity}</li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default MyOrders;

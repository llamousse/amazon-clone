import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        // order by when it was created in descending order
        .orderBy("created", "desc")
        // real time snapshot/response of database
        .onSnapshot((snapshot) => {
          // map through, and for each doc create an obj listed below
          // of the order details (to show later)
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]); // having empty brackets will make it only run once

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="ordersOrder">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

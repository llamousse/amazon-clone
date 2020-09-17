import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>111 React Drive</p>
            <p>Los Angeles, CA 90012</p>
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="paymentItems">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">{/* Stripe stuff here */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

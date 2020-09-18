import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {};

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
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

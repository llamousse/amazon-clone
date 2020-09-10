import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout ad banner"
        />
        
        <div>
            <h2 className="checkoutTitle">Your Shopping Basket</h2>
        </div>

      </div>

      <div className="checkoutRight">
          {/* <Subtotal /> */}
          <h2>Subtotal here</h2>
      </div>
    </div>
  );
}

export default Checkout;

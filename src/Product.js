import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
        <div className="productInfo">
            <p>machine x</p>
            <p className="productPrice">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="productRating">

            </div>
        </div>
    </div>
  );
}

export default Product;

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        {/* Logo */}
      </div>

      <div className="headerNav">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello Guest</span>
          <span className="headerOptionLineTwo">Sign In</span>
        </div>

        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>

        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
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

        <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo headerBasketCount">0</span>
        </div>

      </div>
    </div>
  );
}

export default Header;

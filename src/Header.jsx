import React from "react";
import './Header.css'
import amazonlogo from './amazon-logo.png'
// import { SearchRounded } from "@mui/icons-material";
// import { ShoppingBasket } from "@mui/icons-material";

const Header = () => {
    return <div className="header">

        <img className="header-logo"
            src={amazonlogo} alt="logo"
        />

        <div className="header-search">
            <input className="header-searchIn"
                type="text">   
            </input>
            {/* <SearchRounded className="header-search-icon"/> */}
        </div>


        <div className="header-nav">
            <div className="header-option">
            </div>

            <div className="header-option">
                <span className="header-optionlineOne">
                    Hello
                </span>
                <span className="header-optionlineTwo">
                    Sign in
                </span>
            </div>
          
            <div className="header-option">
            <span className="header-optionlineOne">
                    Returns
                </span>
                <span className="header-optionlineTwo">
                    & Orders
                </span>
            </div>
          
            <div className="header-option">
            <span className="header-optionlineOne">
                    Your
                </span>
                <span className="header-optionlineTwo">
                    Prime
                </span>
            </div>
            <div className="option-basket">
                {/* <ShoppingBasket/> */}
                <span className="header-optionlineTwo header-count">0</span>
            </div>
        </div>
    </div>
}

export default Header;
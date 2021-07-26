import React from "react";
import logo from '../../Logo.png';
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import './index.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <img src={logo} className="header__logo" alt="logo" />
                <Contacts/>
            </div>
            <Navigation/>
        </header>
    );
}

export default Header;

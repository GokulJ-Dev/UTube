import { useState } from "react";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
const Header = () => {

    const network = useNetwork();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="logo" />
                <h3 style={{ cursor: "pointer", color: "orange" }}>Swiggy</h3> {/*Inline styling */}
            </div>
            <h3>{network ? "✅" : "🔴"}</h3>
            <div className="nav-items">
                <ul>
                    <li><Link to="/instamart" className="link-to-tag">Instamart</Link></li>
                    <li>
                        <Link to="/offers" className="link-to-tag">Offers</Link></li>
                    <li><Link to="/help" className="link-to-tag">Help</Link></li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
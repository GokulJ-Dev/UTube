import { useState } from "react";
const Header = () => {
    const [title, setTitle] = useState("Swiggy");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="logo" />
                <h3 style={{ cursor: "pointer", color: "orange" }}>{title}</h3> {/*Inline styling */}
                <button onClick={() => {
                    setTitle("Zomato");
                }}>Change Title</button>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
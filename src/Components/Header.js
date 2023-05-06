import { useState } from "react";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
const Header = () => {

    const network = useNetwork();
    return (
        <div className=" flex  justify-between items-center">
            <div className="flex justify-between items-center">
                <img className=" h-20 w-20" src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="logo" />
                <h3 className="text-sky-400">Swiggy</h3> {/*Inline styling */}
            </div>
            <h3>{network ? "✅" : "🔴"}</h3>
            <div className=" list-one flex mr-6">
                <ul className="flex">
                    <li className=" pl-1.5"><Link to="/instamart" className="text-sky-400">Instamart</Link></li>
                    <li className=" pl-1.5">
                        <Link to="/offers" className="link-to-tag">Offers</Link></li>
                    <li className=" pl-1.5"><Link to="/help" className="link-to-tag">Help</Link></li>
                    <li className=" pl-1.5">Sign In</li>
                    <li className=" pl-1.5">Cart</li>
                </ul>
            </div>
        </div >
    )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
            G2 DRIVERS ACADEMY WHITBY  
            </Link>

            <div>
                <ul className="nav navbar-nav navbar-center">   
                    
                    <li className="nav-item1">
                        <Link
                        to = "/signup"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/signup"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Signup
                        </Link>
                    </li>

                 <li className="nav-item2">
                        <Link
                        to ="/login"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/login"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Login
                        </Link>
                 </li>

                 <li className="nav-item3">
                        <Link
                        to ="/logout"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/logout"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Logout
                        </Link>
                 </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../logo.png";
import "./Header.css";
const Header = () => {
  const [loggedIn , setLoggedIn] = useContext(UserContext)
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="list">
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
           <Link to='/review'>Order review</Link>
          </li>
          <li>
           <Link to='/manage'>Manage Inventory</Link>
          </li>
          <li onClick={()=>setLoggedIn({})}>Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

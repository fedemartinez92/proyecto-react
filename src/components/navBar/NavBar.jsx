import {Button} from "@mui/material"

import "./Navbar.css";

import {Link} from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {


  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dkq5v9yhg/image/upload/v1670713308/suplementos/logo_gtujvu.png"
          alt=""
          />
          </Link>
      </div>
      <ul className="navbar">
        <Button size="small" variant="contained">
          <Link className="navbar-item" to="/" >Ver todo</Link>
        </Button>
        <Button size="small" variant="contained">
          <Link className="navbar-item" to="/category/proteinas" >Proteinas</Link>
        </Button>
        <Button size="small" variant="contained">
          <Link className="navbar-item" to="/category/creatinas" >Creatinas</Link>
        </Button>
        
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;

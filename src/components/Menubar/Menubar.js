import Button from "@restart/ui/esm/Button";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Menubar.css";
// import logo from "../../../images/Banner&Background/logo.png";
// import useFirebase from './../../Hook/useFirebase';

const Menubar = () => {
  // const { user } = useFirebase();
  const { user, handleLogout } = useFirebase();
  return (
    <div>
      <div className="menubar-container">
        <div className="menubar container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="logo-img">
                
              </div>
            </div>
            <div className="col-md-10 col-sm-12">
              <div className="menu-items text-center">
                <ul className="d-flex align-items-end justify-content-end me-5">
                  <li className="items p-2">
                    <Link className="items p-2" to="/home">
                      Home
                    </Link>
                  </li>

                  <li className="items p-2">
                    <Link className="items p-2" to="/addServices">
                      addServices
                    </Link>
                  </li>

                  <li className="items p-2">
                    <Link className="items p-2" to="/register">
                      Register
                    </Link>
                  </li>

                  <li className="items p-2">
                    <Link className="items p-2" to="/myOrder">
                      MyOrders
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/adminDashboard">
                    Admin
                    </Link>
                  </li>


                  <Navbar.Text>

                  {user?.email ?
                  <Button onClick={handleLogout} variant="light">LogOut</Button>:
                  <Navbar.Brand as={Link} to="/register">Login</Navbar.Brand>
                  }

                  </Navbar.Text>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;

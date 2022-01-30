import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "./../AddServices/AddServices";
import Review from "./../Review/Review";
import MyBookings from "./../MyBookings/MyBookings";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManageServices from "./../ManageServices/ManageServices";
import useFirebase from "./../../Hook/useFirebase";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://nameless-sea-23305.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div className="d-flex justify-content-evenly">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}`}>
              <button type="button" className="btn btn-secondary">Booking</button>
              </Link>

              <Link to={`${url}/BookingList`}>
                
                <button type="button" className="btn btn-secondary">Booking list</button>

              </Link>

              <Link to={`${url}/review`}>
              <button type="button" className="btn btn-secondary">Review</button>
              </Link>
              <div className="admin-dashboard">
               

                {isAdmi && (
                  <Link to={`${url}/addService`}>
                     <button type="button" className="btn btn-secondary">addService</button>
                  </Link>
                )}
                <Link to={`${url}/makeAdmin`}>
                <button type="button" className="btn btn-secondary">Make Admin</button>
                </Link>
                <Link to={`${url}/manageServices`}>
                <button type="button" className="btn btn-secondary">Manages</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;

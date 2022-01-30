import React, { useEffect, useState } from "react";
import useFirebase from "./../../Hook/useFirebase";

const MyBookings = () => {
  const { user } = useFirebase();
  const [booking, setBooking] = useState();

  useEffect(() => {
    fetch(`https://nameless-sea-23305.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user?.email]);

  return (
    <div>
      {/* <h1>Ours Bookings {booking.length}</h1> */}
      <h1>Ours Bookings </h1>
    </div>
  );
};

export default MyBookings;

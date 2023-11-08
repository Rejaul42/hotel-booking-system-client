import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import SingleBooking from "./SingleBooking";

const MyBooking = () => {
    const {user} = useContext(AuthContext);

    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/booked?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => setBookings(data))
    },[url])
    return (
        <div>
            {
                bookings.map(booking => <SingleBooking key={booking._id} booking={booking}></SingleBooking>)
            }
        </div>
    );
};

export default MyBooking;
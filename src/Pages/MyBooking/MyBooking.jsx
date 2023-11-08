import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import SingleBooking from "./SingleBooking";

const MyBooking = () => {
    const {user} = useContext(AuthContext);

    const [bookings, setBookings] = useState([])
    const url = `https://hotel-booking-system-server.vercel.app/booked?email=${user?.email}`
    useEffect(()=>{
        fetch(url, {withCredential: true})
        .then(res=>res.json())
        .then(data => setBookings(data))
    },[url])
    return (
        <div className="gap-6 my-12 grid grid-cols-1 lg:grid-cols-2">
            {
                bookings.map(booking => <SingleBooking 
                    key={booking._id} 
                    booking={booking}
                    setBookings={setBookings}
                    bookings={bookings}
                    ></SingleBooking>)
            }
        </div>
    );
};

export default MyBooking;